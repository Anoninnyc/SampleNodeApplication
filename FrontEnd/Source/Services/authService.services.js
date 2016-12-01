myApp.service('authService', function($http) {

  this.login = () => {
    $http.post('/userInfo',{"test":"test"}).then(function(res,err){
      window.localStorage.personalInfo = "Received";
      window.localStorage.id = res.data[0];
      window.localStorage.email = res.data[1];
      window.localStorage.password = res.data[2];
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