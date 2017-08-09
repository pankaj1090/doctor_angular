angular.module("httpgetdata", []).factory('getData', function ($http) {
    var data = {};
    data.dataFromServer = function (data1, url) {
        return $http({
            method: 'GET',
            url: url,
            data: data1,
        })
   }
    return data;
});