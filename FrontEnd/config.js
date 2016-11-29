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
  }).
  state('logout',{
    url: '/logout',
    templateUrl: '/frontendviews/home.html',
    controller: 'myCtrl'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

})
