angular.module('myApp',[]).
  controller('mainCtrl', function($scope){
    $scope.user1 = {
    name: 'luke Skywalker',
     address: {
       street: '2324234',
       city: 'I don\'t need one son',
       planet: 'Yavin 4'
     },
     friends : [
       'Han',
       'Leia',
       'Chewbacca'
       ]
    }

    $scope.user2 = {
    name: 'Hans Solo',
     address: {
       street: '2324234',
       city: 'I don\'t need one son',
       planet: 'Yavin 4'
     },
     friends : [
       'Han',
       'Leia',
       'Chewbacca'
       ]
    }
    console.log($scope);

  
})
  .directive('userInfoCard', function(){
    return {
      templateUrl: 'templates/userInfoCard.html',
      restrict: 'E',
      scope: {
        user: '=person',
        // @ tells in angular that we are passing in a simple data value @collapsed is the attribute name 
        initialCollapsed: '@collapsed'
      },
      controller: function($scope) {
        // important because collapsed has changed our value to a string
        $scope.collapsed= ($scope.initialCollapsed = "true");

        $scope.knightMe = function(user) {
          user.rank = "knight";
        };

        $scope.collapse = function() {
          $scope.collapsed = !$scope.collapsed;
        }

        $scope.removeFriend = function(friend) {
          var idx = $scope.user.friends.indexOf(friend);
          if(idx > -1) {
            // $scope.user.friends.splice(idx, 1);
            $scope.user.friends.splice(idx, 1);
          }
        }
      }
    }
  })

  .directive('address', function() {
    return {
      restrict: 'E',
      // we are using a directive with a shared scope scope true makes this a inherited scope
      scope: true ,
      templateUrl: 'templates/address.html', 
      controller: function($scope) {
        $scope.collapsed = false;

        $scope.collapseAddress = function() {
          $scope.collapsed = true;
        }

        $scope.expandAddress = function() {
          $scope.collapsed = false;
        }
      }
    }
  })

  .directive('removeFriend', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/removeFriend.html',
      scope: {
        notifyParent: '&method'
      },
      controller: function($scope) {
        $scope.removing = false;

        $scope.startRemove = function() {
          console.log('clicked');
          $scope.removing = true;
        }

        $scope.cancelRemove = function() {
          console.log('canceled')
          $scope.removing = false;
        }
        // code below is replaced by confirmRemove
        // $scope.removeFriend = function(friend) {
        //   var idx = $scope.user.friends.indexOf(friend);
        //   if(idx > -1) {
        //     // $scope.user.friends.splice(idx, 1);
        //     $scope.user.friends.splice(idx, 1);

        //   }
        // }
        $scope.confirmRemove = function() {
          console.log('notified')
          $scope.notifyParent({friend: 'Han', parm2: 'value2'});
        }

      }
    }
  })

 