(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('FoodController', FoodController);

FoodController.$inject = ['$scope'];

function FoodController($scope) {
  $scope.foodItemsList = "some food"; // stores the foodlist`

  $scope.Message ="no food yet"; // message displayed to the user

  $scope.checkFoodList = function(){
    var foodCount = 0;

    if($scope.foodItemsList.length >0){
      var foods = $scope.foodItemsList.split(',')
      for (var i = 0; i < foods.length; i++) {
        if(foods[i].trim()){
          foodCount +=1;
        }
      }
      console.log(foodCount);
      $scope.Message = (foodCount >3) ?"Too much!" :"Enjoy!";
    } else {
      $scope.Message ="Please enter data first";
    }
  };
}

})();
