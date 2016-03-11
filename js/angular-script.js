var app = angular.module('bouzoukiApp', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        .when('/gallery', {
            templateUrl: 'pages/gallery.html',
            controller: 'galleryController'
        })

        .when('/menu', {
            templateUrl: 'pages/menu.html',
            controller: 'menuController'
        })

        .when('/vip', {
            templateUrl: 'pages/packages.html',
            controller: 'packagesController'
        })
    ;

});

app.controller('indexController', function($scope){ });

app.controller('mainController', function($scope){

    $scope.message = 'stupid Anchorman quote.';

});


app.controller('contactController', function($scope){

    $scope.message = 'CONTACT ME';

});

app.controller('galleryController', function($scope){ });

app.controller('menuController', function($scope){ });

app.controller('packagesController', function($scope){ });
