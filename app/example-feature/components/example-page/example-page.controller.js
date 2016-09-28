angular.module('myApp.exampleFeature')
  .controller('ExamplePageController', ExamplePageController);

function ExamplePageController(exampleFactory) {
  var vm = this;
  vm.test = 'Test binding';
  console.log('Example page controller activated');
  exampleFactory.callSomeApi();
  vm.isLoadingUsers = true;
  exampleFactory.callRealApi().then(
    function (successResponse) {
      console.log('success:');
      console.log(successResponse);
      vm.users = successResponse.data;
    },
    function (errorResponse) {
      console.log('error:');
      console.log(errorResponse);
    }
  )
    .finally(function () {
      vm.isLoadingUsers = false;
    })

}

ExamplePageController.$inject = ['exampleFactory'];