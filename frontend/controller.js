var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.dia = "21/09/2020";
  $scope.valor = "19.90";
  $scope.nome = "Luiza";
  
  $scope.save = function(){
    $http.post("http://localhost:8080/manutencoes")
    .then(function(resposta) {
        console.info(resposta);
    });
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
  $scope.put = function(){
    $http.put("http://localhost:8080/manutencoes/1")
    .then(function(resposta) {
        console.info(resposta);
    });
  }

  });
