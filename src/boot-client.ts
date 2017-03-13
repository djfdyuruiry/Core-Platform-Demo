import 'angular2-universal-polyfills/browser';
import { enableProdMode, PlatformRef } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';
import { AppModule } from './app/app.module';
import 'semantic-ui-css';
const rootElemTagName: string = 'app'; // update this if you change your root component selector

// enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => {
        // before restarting the app, create a new root element and dispose the old one
        const oldRootElem: Element = document.querySelector(rootElemTagName);
        const newRootElem: Element = document.createElement(rootElemTagName);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        platform.destroy();
    });
} else {
    enableProdMode();
}

// boot the application, either now or when the DOM content is loaded
const platform: PlatformRef = platformUniversalDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === 'complete') {
    bootApplication();
} else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}