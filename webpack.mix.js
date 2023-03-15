const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.scripts([
    'resources/js/admin/jquery.min.js',

    'resources/js/admin/bootstrap.bundle.min.js',
    'resources/js/admin/moment.min.js',
    'resources/js/admin/jquery.overlayScrollbars.min.js',
    'resources/js/admin/adminlte.min.js',
    'resources/js/admin/summernote.min.js',
    'resources/js/admin/bs-custom-file-input.min.js',
    'resources/js/admin/select2.full.min.js',
], 'public/assets/admin/scripts.js')
mix.styles([
        'resources/css/admin/select2.min.css',
        'resources/css/admin/icheck-bootstrap.min.css',
        'resources/css/admin/adminlte.min.css',
        'resources/css/admin/OverlayScrollbars.min.css',
        'resources/css/admin/summernote-bs4.css',

    ],
    'public/assets/admin/styles.css'
);

mix.copyDirectory('resources/admin/img', 'public/admin/img');
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
