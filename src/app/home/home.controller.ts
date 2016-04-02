
namespace app {
    'use strict';

    export interface IHomeController {
        title: string;
    }
    
    export class HomeController implements IHomeController {

        public title: string

        static $inject: Array<string> = [];
        constructor() {

            this.title = "Home"
        }

    }

    angular
        .module('app')
        .controller('HomeController', HomeController);
}