import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './header.component.script';
import { getVariables } from './header.component.variables';

import { BasePartialComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-partial-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: HeaderComponent
        }
    ]
})
export class HeaderComponent extends BasePartialComponent {

    partialName = 'header';
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
