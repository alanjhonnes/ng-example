angular.module('myApp.pages', [])
  .config(ConfigFunction);

function ConfigFunction($stateProvider){
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: 'homePage'
    })
    .state({
      name: 'about',
      url: '/about',
      component: 'aboutPage'
    })
    .state({
      name: 'contact',
      url: '/contact',
      component: 'contactPage'
    })
}

ConfigFunction.$inject = ['$stateProvider'];