function WeatherCtrl ($scope, $http){

  $scope.city = "Arras";

  $scope.search = function(){

    // utilisation de l'api openweathermap avec un json

    var url = "http://api.openweathermap.org/data/2.5/forecast?q="+ $scope.city +",us&mode=json&appid=b1b15e88fa797225412429c1c50c122a";

    $http.get(url).success(httpSuccess).error(function(){

      alert('Impossible de récupérer les informations');
    });
  }

  httpSuccess = function(response) {

    $scope.weather = response;
  }

}
