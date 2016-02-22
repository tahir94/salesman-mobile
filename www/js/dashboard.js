var app = angular.module("starter");
app.controller("dashboardController",function($scope,$location,serverRef,$http,$firebaseArray,$cordovaGeolocation,firebaseRef){
    var token =  localStorage.getItem("firebaseToken");
    $scope.order = $firebaseArray(new Firebase(firebaseRef).child(token));
 $http.get(serverRef + "/getproduct/"+token).then(function(success){
     $scope.products = success.data;
     console.log(success);
 });
 
 $scope.signOut = function(){
     localStorage.removeItem("firebaseToken");
     $location.path("/login");
 }

 
 
 $scope.sendNotification = function(notif){
    
      var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
        var quantity = prompt();
    if(+quantity == 0){
        alert("please enter atleast one quantity!")
    
    }else if (isNaN(+quantity)){
         alert("please define quantity in number")
    }
      else if (!isNaN(+quantity)){
       notif.quantity = quantity;
      notif.lat = position.coords.latitude;
      notif.long = position.coords.longitude;
      $scope.order.$add(notif);
      }

    }, function(err) {
    
    });
 }
 
 
 
 
    
});