angular.module('starter', ['ionic', 'ngCordova', 'firebase'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("/login", {
        url: "/login",
        templateUrl: "templates/login/login.html",
        controller: "loginController"

      })
      .state("dashboard", {
        url: "/dashboard",
        templateUrl: "templates/dashboard/dashboard.html",
        controller: "dashboardController"
      });
    $urlRouterProvider.otherwise("/login");
  });
