'use strict';

/* Controllers */
// function IndexCtrl() {
// }

// function EditCtrl() {
// }

var list = [
  {
    "id"      : 1,
    "title"   : "安装mongoskin模块，npm install mongoskin",
    "date"    : 1286461782373,
    "finished": 0
  },
  {
    "id"      : 2,
    "title"   : "测试本地条已完成!",
    "date"    : 1276461782373,
    "finished": 1
  }
];

angular.module('myApp.controllers', []).
  controller('ListCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.list = list
    $scope.itemClass = function (finished) {
      // console.log("new:", finished)
      return finished ? "del" : "new"
    }

    $scope.itemFinished = function (item) {
      // console.log(item)
      item.finished = 1
    }

    $scope.itemRenew = function(item) {
      item.finished = 0;
    }

    $scope.itemDelete = function(item) {
      for(var i=0, len=$scope.list.length;i<len;i++) {
        if(item === $scope.list[i]) {
          $scope.list.splice(i, 1);
        }
      }
    }

    $scope.newTodo = function(e) {
      var data = {}
      data.id = this.list.length+1;
      data.title = e.target.value;
      data.finished = 0
      data.date = (new Date()).getTime()

      this.list.push(data)
    }

    $scope.gotoEdit = function(item){
      $location.url("/edit/"+ item.id)
    }
  }])


  .controller('EditCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    // console.log($routeParams)
    // console.log(list)
    var _data = list[ $routeParams.id - 1 ];
    $scope.title = _data.title;

    $scope.itemUpdate = function(e) {
      _data.title = $scope.title;
      $location.url("/list")
    }

  }]);



