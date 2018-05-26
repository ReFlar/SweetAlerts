var gulp = require('flarum-gulp');

gulp({
    files: [
        '../bower_components/sweetalert2/dist/sweetalert2.all.min.js'
    ],
    modules: {
        'reflar/sweetalerts': [
            'src/**/*.js',
            '../lib/**/*.js'
        ]
    }
});
