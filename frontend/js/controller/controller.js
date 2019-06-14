myApp
  .controller("Controller", function($scope) {
    console.log("controller called");
  })

  .controller("HeaderCtrl", function($scope) {
    console.log("Header controller called");
  })

  .controller("FooterCtrl", function($scope) {
    console.log("header controller called");
  })

  .controller("HomeCtrl", function($scope, TemplateService) {
    $scope.template = TemplateService.changecontent("home");
    console.log("Home controller called");
  });
