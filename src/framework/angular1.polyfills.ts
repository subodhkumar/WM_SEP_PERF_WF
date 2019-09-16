const win = window as any;

win.Application = win.angular = {};

const deprecatedAngularJSFeature = (feature) => {
    return () => {
        console.warn(`DEPRECATED AngularJS 1.x feature: ${feature}`);
        return win.angular;
    };
};

[
    'module',
    'controller',
    'directive',
    'run',
    'config',
    'service',
    'factory',
    'constant',
    'value',
    'animation',
    'component',
    'decorator',
    'filter',
    'info',
    'provider',
    'requires',
    '$watch'
].forEach(feature => {
    win.angular[feature] = deprecatedAngularJSFeature(feature);
});



export const patchAngular1Deprecations = () => {};
