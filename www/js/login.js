var app = angular.module("starter");

app.constant("serverRef","https://mysalemanapp.herokuapp.com")
app.constant("firebaseRef","https://abc12345.firebaseio.com")
app.controller("loginController",function($state,$scope,$http,serverRef,$rootScope){
    $scope.required = true;
    
 $scope.saleman = {};
    $scope.doLogin = function(saleman){
        console.log(saleman);
        $http.post(serverRef+"/salemanLogin",saleman).then(function(success){
            console.log(success.data.firebaseToken);
            localStorage.setItem("firebaseToken",success.data.firebaseToken)
          
            $rootScope.salemanData = success.data.firebaseToken;
            if($rootScope.salemanData == null){
                $state.go("login");
                }
                 else{
                    $state.go("dashboard");
                   $scope.saleman = {};
                }
           
            
            
        },function(error){
            console.log(error)
        })
    }

});