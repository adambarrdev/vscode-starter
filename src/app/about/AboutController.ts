
namespace app {
    'use strict';

    export interface IAboutController {
        title: string;
    }
    
    export class AboutController implements IAboutController {

        public title: string

        static $inject: Array<string> = [];
        constructor() {

            this.title = "About"
        }

    }

    angular
        .module('app')
        .controller('AboutController', AboutController);
}