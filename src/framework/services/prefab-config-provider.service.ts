import { Injectable } from '@angular/core';

import { PrefabConfigProvider } from '@wm/runtime/base';

import { getPrefabConfig } from '../util/page-util';

@Injectable()
export class PrefabConfigProviderService extends PrefabConfigProvider {

    public getConfig(prefabName: string): Promise<any> {
        return Promise.resolve(getPrefabConfig(prefabName));
    }
}
