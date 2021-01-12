var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  $scope.gridItems = [
    {
      img: '../images/orcha.png',
      headerText: 'OrchaLang Editor',
      blurbText: 'A cloud-based IDE creates for the modeling and integration language Orcha.',
      link: 'https://riiswa.github.io/OrchaLang-Editor/'
    },
    {
      img: 'https://avatars1.githubusercontent.com/u/31044545?s=400&v=4',
      headerText: 'Clustering4Ever',
      blurbText: 'A Big Data Clustering Library gathering clustering, unsupervized algorithms, and quality indices.',
      link: 'https://github.com/Clustering4Ever/Clustering4Ever'
    },
    {
      img: '../images/breakout.png',
      headerText: 'Break-Out Scala.js',
      blurbText: 'A simple reproduction of the break-out game made with Scala.js library.',
      link: 'https://riiswa.github.io/breakout-scala.js/'
    },
    {
      img: '../images/scala-cs.png',
      headerText: 'The Biggest Scala Cheat Sheet',
      blurbText: 'A big (very big) cheat sheet on the basic notions of scala.',
      link: 'https://riiswa.github.io/Scala-CheatSheet/'
    },
    {
      img: 'https://github.com/riiswa/colony-ant-simulator/raw/master/screenshot.gif',
      headerText: 'Ant Colony Simulator',
      blurbText: 'A simulation of an intelligent ant colony that search found in their environment.',
      link: 'https://github.com/riiswa/colony-ant-simulator'
    },
    {
      img: 'https://user-images.githubusercontent.com/24685602/57581816-4a8e6e00-74bd-11e9-837e-4c288d382a47.gif',
      headerText: 'ScalaMaze',
      blurbText: 'A little library that implement some procedural maze generation algorithm in Scala.',
      link: 'https://github.com/riiswa/ScalaMaze'
    },
  ];
  $scope.search = '';
  $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
  });
  $scope.filterBySearch = function(gridItem) {
      if (!$scope.search) return true;
      return regex.test(gridItem.headerText + " " + gridItem.blurbText);
  };
  $scope.toggleBlurb = function($event) {
    console.log($event);
  };
});