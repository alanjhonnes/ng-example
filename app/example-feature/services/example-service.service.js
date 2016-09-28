angular.module('myApp.exampleFeature')
.service('exampleService', ExampleService);

function ExampleService() {
  this.testService = function(){
    console.log('test service');
  }
}