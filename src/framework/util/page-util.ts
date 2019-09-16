const prefabConfigs = new Map<string, any>();

export const registerPrefabConfig = (prefabName: string, config: any) => prefabConfigs.set(prefabName, config);
export const getPrefabConfig = prefabName => prefabConfigs.get(prefabName);

