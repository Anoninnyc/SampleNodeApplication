
myApp.controller('myCtrl', function($scope, $location, $http, authService) {
   const services = {
    authService,
   };
   Object.assign($scope,services);
   console.log("logout function", $scope.authService.logout)

  $scope.test = "Click me to go to another page!";

   $scope.getAuth = key => {
  	return window.localStorage[key];
  }

  if (!window.localStorage.personalInfo){
	  authService.login();
  }

});
