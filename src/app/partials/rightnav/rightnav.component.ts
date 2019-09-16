import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './rightnav.component.script';
import { getVariables } from './rightnav.component.variables';

import { BasePartialComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-partial-rightnav',
    templateUrl: './rightnav.component.html',
    styleUrls: ['./rightnav.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: RightnavComponent
        }
    ]
})
export class RightnavComponent extends BasePartialComponent {

    partialName = 'rightnav';
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
