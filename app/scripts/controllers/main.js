'use strict';

/**
 * @ngdoc function
 * @name testAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularAppApp
 */
angular.module('testAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
