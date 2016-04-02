
module app {
    'use strict';

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/",
                controller: "HomeController",
                controllerAs: "vm",
                templateUrl: "app/home/home.html"
            })
            .state("about", {
                url: "/about",
                controller: "AboutController",
                controllerAs: "vm",
                templateUrl: "app/about/about.html"
            });

        $urlRouterProvider.otherwise("/");

    }

    appRunner.$inject = [];
    function appRunner() {

    }

    angular
        .module('app', [
            'ui.router',
            'ui.bootstrap'
        ])
        .config(appConfig)
        .run(appRunner);
}