import { Injectable } from '@angular/core';

import { AppVariablesProvider } from '@wm/runtime/base';

import { variables } from '../../app/app.component.variables';

@Injectable({
    providedIn: 'root'
})
export class AppVariablesProviderService extends AppVariablesProvider {

    public async getAppVariables(): Promise<any> {
        return Promise.resolve(variables);
    }
}
