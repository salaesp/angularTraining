'use strict';

/**
 * @ngdoc function
 * @name trainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingApp
 */
angular.module('trainingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
