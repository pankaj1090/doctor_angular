var app = angular.module("doctor", ['httpgetdata']);

var base_url='http://localhost/doctor/Webservice/';

app.controller("homeCtrl", function($scope,getData) {
	var url = base_url + 'Get_all_cat';
	var data = {};
	console.log(url);
    $scope.categories= getData.dataFromServer(data,url);
    $scope.categories.then(function(response){
    	console.log(response);
    });
});