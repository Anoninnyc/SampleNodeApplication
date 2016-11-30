myApp.controller('myCtrl', function($scope, $location, $http) {
  console.log("running myCtrl");
  $scope.test = "Click me to go to another page!";

  if (!window.localStorage.personalInfo){
	  $http.post('/userInfo',{"test":"test"}).then(function(res,err){
	  	console.log("client side err and res", res, err);
	  	window.localStorage.personalInfo = "Received";
	  	$scope.id = res.data[0];
	  	$scope.email = res.data[1];
	  	$scope.password = res.data[2];
	  	console.log("Here is scope", $scope);
	  });
  }
});
