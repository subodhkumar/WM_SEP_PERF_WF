import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './leftnav.component.script';
import { getVariables } from './leftnav.component.variables';

import { BasePartialComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-partial-leftnav',
    templateUrl: './leftnav.component.html',
    styleUrls: ['./leftnav.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: LeftnavComponent
        }
    ]
})
export class LeftnavComponent extends BasePartialComponent {

    partialName = 'leftnav';
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
