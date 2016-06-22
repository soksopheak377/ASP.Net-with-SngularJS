using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCwithAngularyJS.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Part2() // Fetch and show data from database
        {
            return View();
        }
        public ActionResult Part3()
        {
            return View();
        }

    }
}
