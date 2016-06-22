// Here I am separating each angular controller to separate file for make it manageable

angular.module('MyApp') // extending from proviouly create angular module in the previous part
.controller('Part2Controller', function ($scope,ContactService) {//Injeact contacservice
    $scope.Contact=null;
    ContactService.GetLastContact().then(function(d){
        $scope.Contact=d.data; // sussecc
    },function(){
        alert("Failes !"); // not sussecc   
    });
})
.factory('ContactService', function ($http) { // Here I have create a Factory which popular way to create and configure service 
    var fac={};
    fac.GetLastContact=function(){
        return $http.get('/Data/GetLastContact');
    }
    return fac;
});