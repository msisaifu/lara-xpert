<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('app/css/app.css') }}">
    </head>
    <body>
    	<div id="app">
        	<main-app/>
    	</div>
        <script src="{{ asset('app/js/manifest.js') }}">
        </script>
        <script src="{{ asset('app/js/vendor.js') }}"></script>
        <script src="{{ asset('app/js/app.js') }}"></script>
    </body>
</html>
