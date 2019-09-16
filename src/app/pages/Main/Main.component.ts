import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './Main.component.script';
import { getVariables } from './Main.component.variables';

import { BasePageComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-page-Main',
    templateUrl: './Main.component.html',
    styleUrls: ['./Main.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: MainComponent
        }
    ]
})
export class MainComponent extends BasePageComponent {

    pageName = 'Main';
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
