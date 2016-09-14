/**
 * Created by ftavora on 14/09/16.
 */
'use strict';

app.config(function($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });
});