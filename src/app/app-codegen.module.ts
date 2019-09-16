import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ComponentType, RuntimeBaseModule } from '@wm/runtime/base';

import { AppPrefabsModule } from './app-prefabs.module';

import { ComponentRefProviderService } from '../framework/services/component-ref-provider.service';

export const xsrfHeaderName = 'X-WM-XSRF-TOKEN';

@NgModule({
    declarations: [],
    imports: [
        AppPrefabsModule
    ],
    exports: [
        AppPrefabsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppCodeGenModule {

}