import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import {
    AppComponent,
    AppJSProvider,
    AppVariablesProvider,
    ComponentRefProvider,
    PartialRefProvider,
    PrefabConfigProvider,
    WM_MODULES_FOR_ROOT
} from '@wm/runtime/base';

import { routes } from './app.routes';
import { AppJSProviderService } from '../framework/services/app-js-provider.service';
import { AppVariablesProviderService } from '../framework/services/app-variables-provider.service';
import { ComponentRefProviderService } from '../framework/services/component-ref-provider.service';
import { PartialRefProviderService } from '../framework/services/partial-ref-provider.service';
import { PrefabConfigProviderService } from '../framework/services/prefab-config-provider.service';
import { AppCodeGenModule, xsrfHeaderName } from './app-codegen.module';

export const routerModule = RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'});
export const toastrModule = ToastrModule.forRoot({maxOpened: 1, autoDismiss: true });
export const httpClientXsrfModule = HttpClientXsrfModule.withOptions({
    cookieName: 'wm_xsrf_token',
    headerName: xsrfHeaderName
});

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,

        routerModule,
        toastrModule,
        httpClientXsrfModule,

        WM_MODULES_FOR_ROOT,
        AppCodeGenModule
    ],
    providers: [
        {provide: AppJSProvider, useClass: AppJSProviderService},
        {provide: AppVariablesProvider, useClass: AppVariablesProviderService},
        {provide: ComponentRefProvider, useClass: ComponentRefProviderService},
        {provide: PartialRefProvider, useClass: PartialRefProviderService},
        {provide: PrefabConfigProvider, useClass: PrefabConfigProviderService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
