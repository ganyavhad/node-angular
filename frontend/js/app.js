var myApp = angular.module("myApp", ["ui.router"]);

// myApp.config(function() {});
myApp.config(function($stateProvider, $urlRouterProvider) {
  var tempateURL = "view/template/template.html";
  $stateProvider.state("home", {
    url: "/home",
    templateUrl: tempateURL,
    controller: "HomeCtrl"
  });
  $urlRouterProvider.otherwise("/home");
});
