var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.dia = "2020-09-23T00:35:45.854+00:00";
  $scope.nome = "Luiza";
  $scope.valor = "19.90";

  
  $scope.insert = function(){
    $http.post("http://localhost:8080/manutencoes",{
      "valor": $scope.valor,
      "dia":  $scope.dia,
      "nome": $scope.nome
    })
  }

  $scope.put = function(){
    $http.put("http://localhost:8080/manutencoes/2",{
      "valor": $scope.valor,
      "dia":  $scope.dia,
      "nome": $scope.nome
    })
  }

  $scope.getAll = function(){
    $http.get("http://localhost:8080/manutencoes")
    .then(function(resposta) {
        console.info(resposta);
    });

  }
  $scope.getOne = function(){
    $http.get("http://localhost:8080/manutencoes/1")
    .then(function(resposta) {
        console.info(resposta);
    });
  }

  $scope.delete = function(){
    $http.delete("http://localhost:8080/manutencoes/1")
    .then(function(resposta) {
        console.info(resposta);
    });
  }
 

  });
