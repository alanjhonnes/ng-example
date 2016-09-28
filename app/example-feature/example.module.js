angular.module('myApp.exampleFeature', [])
  .config(ExampleFeatureConfig);

// Injeção de dependência explicita usando $inject na função
ExampleFeatureConfig.$inject = ['$stateProvider'];

function ExampleFeatureConfig($stateProvider) {
  // exampleProvider;
  $stateProvider
    // estado pai
    .state({
      name: 'example-feature',
      url: '/example-feature',
      abstract: true,
      template: '<ui-view>'
    })
    // página usando componente
    .state({
      name: 'example-feature.component',
      url: '/component',
      component: 'exampleComponent'
    })
    // página usando controller + template
    .state({
      name: 'example-feature.controller',
      url: '/controller',
      controller: 'ExamplePageController as vm',
      templateUrl: 'example-feature/components/example-page/example-page.html'
    })
}