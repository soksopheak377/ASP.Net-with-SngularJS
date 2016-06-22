angular.module("MyApp") //extending from priviously created angular module in the first part
.controller('Part3Controller', function ($scope, LoginService) {
    $scope.IsLogedIn=false;
    $scope.Message='';
    $scope.summitted=false;
    $scope.formvalid=false;

    $scope.LoginData={
        Username:'',
        Password:''
    };

    // check  is form valid or not // here f1 is our form Name

    $scope.$watch('f1.valid',function(newval){
        $scope.IsformValid=newval;
    });

    $scope.Login=function(){
        $scope.summitted=true;
        if($scope.IsformValid){
            LoginService.Getuser($scope.LoginData).then(function(d){
                if(d.data.Username!=null){
                    $scope.IsformValid=true;
                    $scope.Message="Successfully Login Done ! Wecome"+ d.data.Fullname;
                }else{
                    alert('Invalid Login !');
                }
            });
        }
    };
})
.factory('LoginService', function ($http) {
    var fac = {};
    fac.Getuser = function (d) {
        return $http({
            url: '/Data/UserLogin',
            method: 'POST',
            data: JSON.stringify(d),
            headere{'content-type':'application/json'}
        });
    };
    return fac;
});