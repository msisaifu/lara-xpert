const mix = require('laravel-mix');

mix.js('resources/dashboard/js/app.js', 'public/dashboard/js')
   .sass('resources/dashboard/sass/app.scss', 'public/dashboard/css')
   .extract(['vue']);