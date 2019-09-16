import { Injectable } from '@angular/core';

import { AppJSProvider } from '@wm/runtime/base';

import { initScript } from '../../app/app.component.script';

@Injectable({
    providedIn: 'root'
})
export class AppJSProviderService extends AppJSProvider {

    public getAppScriptFn(): Promise<Function> {
        return Promise.resolve(initScript);
    }
}
