demoApp.factory("userFac",function($resource){
    var resource=$resource('http://localhost\\:8080/userService/loginUser/vinay/varma');
    return resource;
})
demoApp.factory("groupFac",function($resource){
    var resource=$resource('http://localhost\\:8080/group/getGroupById/:groupId');
    return resource;
})