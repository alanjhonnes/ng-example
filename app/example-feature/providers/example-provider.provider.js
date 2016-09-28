angular.module('myApp.exampleFeature')
  .provider('exampleProvider', function() {

  function ExampleProvider(config) {

    this.testConfig = function() {
      console.log(config);
    }
  }

  this.$get = function(config) {
    return new ExampleProvider(config);
  };
});