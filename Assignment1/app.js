(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('FoodController', FoodController);

FoodController.$inject = ['$scope'];

function FoodController($scope) {
  $scope.foodItemsList = "some food"; // stores the foodlist`

  $scope.Message ="no food yet"; // message displayed to the user

  $scope.checkFoodList = function(){
    var foodList = $scope.foodItemsList;
    if(foodList.length >0){
      var foodCount = foodList.split(',').length;
      $scope.Message = (foodCount >3) ?"Too much!" :"Enjoy!";
    } else {
      $scope.Message ="Please enter data first";
    }
      console.log($scope.foodItemsList);
      console.log(foodList.length);
  };
}

})();
