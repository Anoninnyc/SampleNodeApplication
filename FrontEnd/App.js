myApp = angular.module('myApp', ['ui.router', 'ngSanitize'])
require('./config.js');
require('./source/controllers/mainController.js');
require('./source/Services/authService.services.js');
