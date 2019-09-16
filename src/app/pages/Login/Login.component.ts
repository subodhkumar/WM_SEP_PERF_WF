import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './Login.component.script';
import { getVariables } from './Login.component.variables';

import { BasePageComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-page-Login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: LoginComponent
        }
    ]
})
export class LoginComponent extends BasePageComponent {

    pageName = 'Login';
    [key: string]: any;

    constructor(public injector: Injector) {
        super();
        super.init();
    }

    getVariables() {
        return getVariables();
    }

    evalUserScript(Page, App, Utils) {
        initScript(Page, App, Utils);
    }
}
