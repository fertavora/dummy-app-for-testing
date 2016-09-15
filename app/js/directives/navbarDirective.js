/**
 * Created by tavete on 15/09/16.
 */
'use strict';

app.directive('navbarDirective', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/navbar-directive.html'
    }
});