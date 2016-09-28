function ExampleComponentController(exampleService, exampleConstant) {
  console.log('Example controller activated');
  exampleService.testService();
  console.log(exampleConstant);
  this.test = 'Teste do filtro';
  this.editableText = 'test binding';
}

angular.module('myApp.exampleFeature')
  .component('exampleComponent', {
    templateUrl: 'example-feature/components/example-component/example-component.html',
    controller: ExampleComponentController
  });

ExampleComponentController.$inject = ['exampleService', 'exampleConstant'];

