import {
    Injectable,
    NgModuleFactoryLoader,
    NgModuleRef,
    Type,
    Injector,
    SystemJsNgModuleLoader,
    Inject,
    ReflectiveInjector,
    NgModuleFactory
} from "@angular/core";
import { PartialRefProvider, ComponentType } from "@wm/runtime/base";


type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Injectable()
export class PartialRefProviderService extends PartialRefProvider {
    private moduleRef: NgModuleRef<any>;
    constructor(
        @Inject(NgModuleFactoryLoader) private loader: SystemJsNgModuleLoader,
        private injector: Injector
    ) {
        super();
    }
    private getModulePath(partialName: string): string {
        if (partialName.length > 0) {
            return `src/app/partials/${partialName}/${partialName}.module#${partialName
                .charAt(0)
                .toUpperCase()}${partialName.slice(1)}Module`;
        }
        return null;
    }
    public async getComponentFactoryRef(partialName:string,componentType: ComponentType) {
        let moduleFactory: NgModuleFactory<any>;
        try {
            moduleFactory = await this.loader.load(
                this.getModulePath(partialName)
            );
            this.moduleRef = moduleFactory.create(this.injector);
            const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
                .rootComponent;
            return this.moduleRef.componentFactoryResolver.resolveComponentFactory(
                rootComponent
            );
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
