angular.module('myApp.exampleFeature')
// factory precisa de uma função que retorne o serviço a ser instanciado
  .factory('exampleFactory', ExampleFactory);

function ExampleFactory($http) {
  //definir variáveis e funções do serviço
  var text = 'call some api';

  function callSomeApi() {
    console.log(text);
  }

  function callRealApi() {
    return $http.get('https://jsonplaceholder.typicode.com/users');
  }

  // objeto retornado é a api pública desse serviço.
  return {
    callSomeApi: callSomeApi,
    callRealApi: callRealApi
  };
}

ExampleFactory.$inject = ['$http'];