'use strict';

/**
 * @ngdoc function
 * @name trainingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trainingApp
 */
angular.module('trainingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
