angular.module('myApp.exampleFeature')
.directive('decorator', DecoratorDirective);

function DecoratorDirective() {
  return {
    restrict: 'A',

    link: function (scope, element, attrs) {
      console.log(scope);
      console.log(element);
      console.log(attrs);
      attrs.$addClass('class2');
    }
  }
}