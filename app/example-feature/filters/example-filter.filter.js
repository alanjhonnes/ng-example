angular.module('myApp.exampleFeature')
  .filter('exampleFilter', ExampleFilter);

function ExampleFilter(){
  return function (input){
    input = input || '';
    return input.toUpperCase();
  }
}