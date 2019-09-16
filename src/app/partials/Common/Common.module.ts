import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule as NGCommonModule, APP_BASE_HREF } from '@angular/common';
import { ComponentType } from '@wm/runtime/base';
import { AppPrefabsModule } from '../../app-prefabs.module';
import { ComponentRefProviderService } from '../../../framework/services/component-ref-provider.service';



import { CommonComponent } from './Common.component';

const components = [CommonComponent];

const requiredComponentModules = [
    
];

@NgModule({
    declarations: components,
    imports: [
        ...requiredComponentModules,
        NGCommonModule,
        AppPrefabsModule
    ],
    exports: components,
    entryComponents: components
})
export class CommonModule {
    static rootComponent = CommonComponent;
}
