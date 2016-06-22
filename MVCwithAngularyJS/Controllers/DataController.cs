using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCwithAngularyJS.Controllers
{
    public class DataController : Controller
    {
        //
        // GET: /Data/
        // for feach last contact

        public JsonResult GetLastContact()
        {
            Contact c = null;
            using (JSDatabaseEntities1 dc = new JSDatabaseEntities1())
            {
                c = dc.Contacts.OrderByDescending(a => a.ContactID).Take(1).FirstOrDefault();
            }

            return new JsonResult { Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        public JsonResult UserLogin(LoginData d)
        {
            using(JSDatabaseEntities1 dc = new JSDatabaseEntities1())
            {
                var user = dc.Users.Where(a => a.Username.Equals(d.Username) && a.Password.Equals(d.Password)).FirstOrDefault();
                return new JsonResult { Data = user, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }

    }
}
