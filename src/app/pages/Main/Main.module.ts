import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule, APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCodeGenModule } from '../../app-codegen.module';



import { MainComponent } from './Main.component';

const components = [MainComponent];

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];

const requiredComponentModules = [
    
];

@NgModule({
    declarations: components,
    imports: [
        ...requiredComponentModules,
        RouterModule.forChild(routes),
        NgCommonModule,
        AppCodeGenModule
    ],
    exports: components
})
export class MainModule {

}

