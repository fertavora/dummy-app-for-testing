/**
 * Created by tavete on 15/09/16.
 */
'use strict';

app.directive('newcarDirective', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/newcar-directive.html'
    }
});