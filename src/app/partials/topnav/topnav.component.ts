import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './topnav.component.script';
import { getVariables } from './topnav.component.variables';

import { BasePartialComponent } from '@wm/runtime/base';

@Component({
    selector: 'app-partial-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: TopnavComponent
        }
    ]
})
export class TopnavComponent extends BasePartialComponent {

    partialName = 'topnav';
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
