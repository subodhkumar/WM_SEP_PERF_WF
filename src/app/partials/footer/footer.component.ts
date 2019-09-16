import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './footer.component.script';
import { getVariables } from './footer.component.variables';

import { BasePartialComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-partial-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: FooterComponent
        }
    ]
})
export class FooterComponent extends BasePartialComponent {

    partialName = 'footer';
    [key: string]: any;

    constructor(public injector: Injector) {
        super();
        super.init();
    }

    getVariables() {
        return getVariables();
    }

    evalUserScript(Partial, App, Utils) {
        initScript(Partial, App, Utils);
    }
}
