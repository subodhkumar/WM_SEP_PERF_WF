import { Routes } from "@angular/router"

import {
    AppJSResolve,
    AppVariablesResolve,
    AuthGuard,
    MetadataResolve,
    RoleGuard,
    SecurityConfigResolve,
    EmptyPageComponent,
    PageNotFoundGaurd
} from "@wm/runtime/base"

const appDependenciesResolve = {
    metadata: MetadataResolve,
    appJS: AppJSResolve,
    appVariables: AppVariablesResolve,
    securityConfig: SecurityConfigResolve
}

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: EmptyPageComponent,
        resolve: appDependenciesResolve
    },
    {
        path: "",
        resolve: appDependenciesResolve,
        children: [
            {
                path: "Login",
                pathMatch: "full",
                loadChildren: "./pages/Login/Login.module#LoginModule"
            },
            {
                path: "Main",
                pathMatch: "full",
                loadChildren: "./pages/Main/Main.module#MainModule"
            }
        ]
    },
    {
        path: "**",
        canActivate: [PageNotFoundGaurd],
        component: EmptyPageComponent
    }
]
