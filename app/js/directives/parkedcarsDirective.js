/**
 * Created by tavete on 15/09/16.
 */
'use strict';

app.directive('parkedcarsDirective', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/parkedcars-directive.html'
    }
});