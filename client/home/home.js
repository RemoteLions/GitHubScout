angular.module('githubscout.home', ['nvd3ChartDirectives'])

.controller('HomeController', [ '$scope', 'ChartsUtil', function($scope, ChartsUtil){

  // settings = {
  //   languages: ['Ruby'],
  //   countType: 'commits',
  //   url: './CSVs/repo_activity_by_month.csv'
  // };

  // ChartsUtil.readDataFile(settings)
  //   .then(function(chartData){
  //     console.log(chartData)
  //   $scope.topLanguages  = chartData;

  // });

  // // $scope.allLanguages = [{"key":"Stream0","values":[{"x":0,"y":0.11202022216748447},{"x":1,"y":0.18210439675021917},{"x":2,"y":0.1749461018014699},{"x":3,"y":0.16745319645851853},{"x":4,"y":0.15597335710190238},{"x":5,"y":0.10864052760880441},{"x":6,"y":0.15779187045991422},{"x":7,"y":0.1280471979873255},{"x":8,"y":0.1275304277194664},{"x":9,"y":0.1368145151762292},{"x":10,"y":0.18007409486453982},{"x":11,"y":0.10525933781173082},{"x":12,"y":0.24307308361125324},{"x":13,"y":0.18451326762493261},{"x":14,"y":0.18820573857522288},{"x":15,"y":0.11912847666638085},{"x":16,"y":0.10938216055725342},{"x":17,"y":0.19836232458345682},{"x":18,"y":0.17060091027571767},{"x":19,"y":0.1507065103490858}]}];
  // // $scope.topLanguages = [{"key":"Stream0","values":[{"x":0,"y":0.11202022216748447},{"x":1,"y":0.18210439675021917},{"x":2,"y":0.1749461018014699},{"x":3,"y":0.16745319645851853},{"x":4,"y":0.15597335710190238},{"x":5,"y":0.10864052760880441},{"x":6,"y":0.15779187045991422},{"x":7,"y":0.1280471979873255},{"x":8,"y":0.1275304277194664},{"x":9,"y":0.1368145151762292},{"x":10,"y":0.18007409486453982},{"x":11,"y":0.10525933781173082},{"x":12,"y":0.24307308361125324},{"x":13,"y":0.18451326762493261},{"x":14,"y":0.18820573857522288},{"x":15,"y":0.11912847666638085},{"x":16,"y":0.10938216055725342},{"x":17,"y":0.19836232458345682},{"x":18,"y":0.17060091027571767},{"x":19,"y":0.1507065103490858}]}];
  // // $scope.test = 'testtt';

  // // Formats the JavaScript date object for the x axis labels
  // $scope.xAxisTickFormat = function(){
  //     return function(d){
  //         return d3.time.format('%x')(new Date(d));  //uncomment for date format
  //     };
  // };

}])