(function () {
    // create module
    var app = angular.module('MyApp', ['ngRoute']);  // Will use this [ngRoute] when we will implement routing
    // create controller
    app.controller('HomeController',function($scope){ // here $scope used for share data between view and controller
        $scope.Message = " Swift 6 to develop iOS. Who want to learn swift can contact us on website www.xzondev.com";
    })
})();