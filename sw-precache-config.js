module.exports = 
{
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: 
    [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css'
    ],
    verbose: true,
    importScripts:
    [
        "sw-toolbox.js",
        "runtime-caching.js"
    ]
};