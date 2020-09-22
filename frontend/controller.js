var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.dia = "21/09/2020";
  $scope.valor = "19.90";
  $scope.nome = "Luiza";
  $scope.salvar = function(){
    alert($scope.dia);
}

$http.get("http://localhost:8080/manutencoes")
//  https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=pt-BR  .then(function(response) {

    .then(function(response) {
      console.info(response)
    });
  });
