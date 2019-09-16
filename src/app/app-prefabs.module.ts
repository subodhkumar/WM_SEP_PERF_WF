import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ComponentType, RuntimeBaseModule } from '@wm/runtime/base';

import { ComponentRefProviderService } from '../framework/services/component-ref-provider.service';



import initPrefabConfig from './prefabs/prefab-config';

const components = [
    
];

export const xsrfHeaderName = 'X-WM-XSRF-TOKEN';

@NgModule({
    declarations: components,
    imports: [
        RuntimeBaseModule
    ],
    exports: [components, RuntimeBaseModule],
    entryComponents: components,
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppPrefabsModule {

}



initPrefabConfig();
