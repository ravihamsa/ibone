({
    baseUrl: "src/",
    dir: "dist/",

    optimize: "none",
    paths: {
        "jquery": "empty:",
        'underscore': 'empty:',
        'backbone': 'empty:'
    },
    modules: [
        {
            name: "main"
        }
    ]
})
