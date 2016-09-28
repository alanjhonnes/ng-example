angular.module('myApp.exampleFeature')
  .directive('exampleDirective', ExampleDirective);

function ExampleDirective(){
  return {
    restrict: 'E',
    scope: {
      input: "="
    },
    template: '<h3>Example Directive</h3><p>{{input}}</p>',
    link: function (scope, element, attrs) {

    }
  }
}