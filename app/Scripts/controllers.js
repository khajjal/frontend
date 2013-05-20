demoApp.controller('MainController',function($scope,userFac,groupFac){
    $scope.user={};
    $scope.groups=[];
   var data =userFac.get(function(data,$scope){
        console.log('success, got data: ', data.response.username);
    }, function(err){
        alert('request failed');
    });
    data.$then(function(){
        $scope.user.name=data.response.username;
        angular.forEach(data.response.groupMemberList,function(id){
            console.log("group id : "+id)
           var group=groupFac.get({groupId : id},function($scope){
               console.log('success, got group: ');
           }, function(err){
               alert('request failed');
           });
            group.$then(function(){
                console.log("group" + group)
                $scope.groups.push({name:group.response.groupName})
            })

        })

    })
})