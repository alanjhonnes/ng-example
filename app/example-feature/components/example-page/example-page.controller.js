angular.module('myApp.exampleFeature')
  .controller('ExamplePageController', ExamplePageController);

function ExamplePageController(exampleFactory) {
  var vm = this;
  vm.test = 'Test binding';
  console.log('Example page controller activated');
  exampleFactory.callSomeApi();

  var users = [];

  this.addUsers = function(){
    exampleFactory.callRealApi().then(
      function (successResponse) {
        vm.users = [...vm.users, ...successResponse.data];
      }
    )
  };

  this.loadUsers = function (){
    this.users = [];
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
  };

  this.activate = function (){
    this.loadUsers();
  };

  this.clearUsers = function(){
    this.users = [];
  };

  this.activate();
}

ExamplePageController.$inject = ['exampleFactory'];