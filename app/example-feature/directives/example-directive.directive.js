angular.module('myApp.exampleFeature')
  .directive('exampleDirective', ExampleDirective);

function ExampleDirective(){
  return {
    restrict: 'E',
    scope: {
      input: "<",
      title: "@"
    },
    template: '<h1>{{title}}</h1><h3>Example Directive</h3><p>{{input}}</p> <input ng-model="input"/>',
    link: function (scope, element, attrs) {
      console.log(scope);
      console.log(element);
      console.log(attrs);
    }
  }
}
