var angularMFRP = angular.module('angularMFRP', ['ngRoute','mduke']);

angularMFRP.config(['$routeProvider', function($routeProvider, $rootScope) {
    $routeProvider
        .when('/', {

            templateUrl: 'pages/login.html',
            controller: 'logincontroller'
        })
        .when('/register', {

            templateUrl: 'pages/register.html',
            controller: 'registercontroller'
        })
        .when('/home', {
              resolve: {

                "check": function($location, $rootScope,$window) {
                    if (!$rootScope.loggedIn) {
                        $window.alert("please login to see my home screen");
                        $location.path('/');

                    }
                }
            },  
            templateUrl: 'pages/home.html',
            controller: 'homecontroller'
        })
        .when('/myfav', {
            resolve: {

                "check": function($location, $rootScope,$window) {
                    if (!$rootScope.loggedIn) {
                          $window.alert("please login to see my favourites screen");
                        $location.path('/');
                    }
                }
            },

            templateUrl: 'pages/favourites.html',
            controller: 'favcontroller'
        })
        .when('/mycart', {
             resolve: {

                "check": function($location, $rootScope,$window) {
                    if (!$rootScope.loggedIn) {
                         $window.alert("please login to see my mycart screen");
                        $location.path('/');
                    }
                }
            }, 
            templateUrl: 'pages/cart.html',
            controller: 'cartcontroller'
        })
        .when('/faq', {
            resolve: {

                "check": function($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'pages/faq.html',
            controller: 'faqcontroller'
        })
        .when('/confirm', {
            resolve: {

                "check": function($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'pages/confirm.html',
            controller: 'confirmcontroller'
        })

}]);