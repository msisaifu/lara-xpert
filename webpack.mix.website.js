const mix = require('laravel-mix');

mix.js('resources/app/js/app.js', 'public/app/js')
   .sass('resources/app/sass/app.scss', 'public/app/css')
   .extract(['vue']);