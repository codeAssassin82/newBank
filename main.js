'use strict';

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $http) {
  $scope.app = [];
  $scope.balance = 0;


  $http({
    method: 'GET',
    url: '/app',
  })
  .then(function (resp) {
  var obj = resp.data;
  $scope.app = $scope.app.concat(obj)
  console.log('data', obj);
  obj.forEach(function(item ) {
    console.log(item);
    if(item.credit){
      console.log('credit', item.credit);
      $scope.balance += item.credit}
    if(item.debit){
      console.log('debit', item.debit);

      $scope.balance -= item.debit}

  })
  console.log($scope.balance);
  }, function (err) {

    console.error('ERR', err);
    console.log('lets go');
  });

  $scope.addBank = function() {

    // console.log('jhgy',bank)
    // $scope.app.unshift(bank);

    $http({
      method: 'POST',
      url: '/app',
      data: { desc: $scope.desc, credit: $scope.credit, debit: $scope.debit }
    })
    .then(function (resp) {
      console.log('data', resp.data);
      
    // $scope.app = resp.data;
    }, function (err) {
      console.error('ERR', err);
      // console.log('here');
    });
};



// .then
});
      // $scope.name = '';

    // var numbers = $scope.number.split(',');//number input
    // numbers.forEach(function(number) {
    //   if (!$scope.numbers) $scope.numbers = [];
    //   $scope.numbers.push(number);
    // });
    //   $scope.phone = '';
    //
    // var emails = $scope.email.split(',');//emails input
    // emails.forEach(function(email) {
    //   if (!$scope.emails) $scope.emails = [];
    //   $scope.emails.push(email);
    // });
    //   $scope.email = '';
    //
    //
    //   $scope.addTask = function() {
    //   // $scope.newContacts.complete = false;
    //   var userName = angular.copy($scope.newContacts);
    //   $scope.contacts.push(userName)
    //   $scope.newUserName = {};
    // };
    //   $scope.deleteUserName = function(userName) {
    //     var index = $scope.todos.indexOf(userName);
    //     $scope.contacts.splice(index, 1);
    //   };
    //
    //

// });
