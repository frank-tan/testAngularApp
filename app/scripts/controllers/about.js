'use strict';

/**
 * @ngdoc function
 * @name testAngularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAngularAppApp
 */
angular.module('testAngularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
