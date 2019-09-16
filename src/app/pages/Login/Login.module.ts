import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule, APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCodeGenModule } from '../../app-codegen.module';



import { LoginComponent } from './Login.component';

const components = [LoginComponent];

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
export class LoginModule {

}

