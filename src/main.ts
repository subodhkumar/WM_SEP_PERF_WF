import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import initWmProjectProperties from './app/wm-project-properties';

initWmProjectProperties();

if (environment.production) {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
    new Promise( resolve => {
        if (window['cordova']) {
            document.addEventListener('deviceready', resolve);
        } else {
            resolve();
        }
    }).then(() => platformBrowserDynamic().bootstrapModule(AppModule))
        .then(() => console.timeEnd('bootstrap'), err => console.log(err));
});
