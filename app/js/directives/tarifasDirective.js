/**
 * Created by tavete on 14/10/16.
 */
'use strict';

app.directive('tarifasDirective', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/tarifas-directive.html'
    }
});