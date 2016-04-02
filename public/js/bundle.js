var app;
(function (app) {
    'use strict';
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
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
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var AboutController = (function () {
        function AboutController() {
            this.title = "About";
        }
        AboutController.$inject = [];
        return AboutController;
    }());
    app.AboutController = AboutController;
    angular
        .module('app')
        .controller('AboutController', AboutController);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var HomeController = (function () {
        function HomeController() {
            this.title = "Home";
        }
        HomeController.$inject = [];
        return HomeController;
    }());
    app.HomeController = HomeController;
    angular
        .module('app')
        .controller('HomeController', HomeController);
})(app || (app = {}));
