/**
 * Created by tavete on 16/10/16.
 */
'use strict';

app.directive('checkoutDirective', function(){
    function modals(){
        //todo terminar el modal para el checkout del auto
    }

    return {
        link: modals,
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/checkout-directive.html'
    }
});