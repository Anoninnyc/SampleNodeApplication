/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	myApp = angular.module('myApp', ['ui.router', 'ngSanitize'])
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

	  $urlRouterProvider.otherwise('/frontEndProfile');

	  $stateProvider.
	  state('profile', {
	    url: '/frontEndProfile',
	    templateUrl: '/frontendviews/home.html',
	    controller: 'myCtrl'
	  }).
	  state('otherPage',{
	    url: '/otherPage',
	    templateUrl: '/frontendviews/otherPage.html',
	    controller: 'myCtrl'
	  })
	  .
	  state('logout',{
	    url: '/logout'
	  });

	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
	  });

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	myApp.service('authService', function($http) {

	  this.login = () => {
	    $http.post('/userInfo',{"test":"test"}).then(function(res,err){
	      console.log("client side err and res", res, err);
	      window.localStorage.personalInfo = "Received";
	      window.localStorage.id = res.data[0];
	      window.localStorage.email = res.data[1];
	      window.localStorage.password = res.data[2];
	      console.log("this.id", this.id);
	    });
	  };

	  this.logout = () => {
	    window.localStorage.personalInfo = "";
	    window.localStorage.id = "";
	    window.localStorage.email = "";
	    window.localStorage.password = "";
	    window.history.go(0);
	  }

	});

/***/ }
/******/ ]);