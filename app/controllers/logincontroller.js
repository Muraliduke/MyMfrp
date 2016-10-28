angularMFRP.controller("logincontroller", function($scope, $http, $location, $rootScope) {


    $location.path("/");
    localStorage.removeItem('bynw');
    localStorage.removeItem('favtes');
    $rootScope.loggedIn = false;

    $scope.login = function() {
        $scope.loginerror = false;
        var flag = false;
        $http.get("app/controllers/loginjson.json").success(function(e) {
            $scope.dat = e;
            angular.forEach($scope.dat, function(index, element) {

                if ($scope.username == element) {
                    if ($scope.loginpwd == index.pwd) {
                        flag = true;
                    } else {
                        $scope.loginerror = true;
                        $scope.username = '';
                        $scope.loginpwd = '';
                    }
                }
            });

            if (flag == false) {
                if (!(localStorage.getItem('obj') === null)) {
                    var d = JSON.parse(localStorage.obj);
                    for (var i = 0; i < d.length; i++) {
                        var a = JSON.parse(d[i]);
                        var name = a.username;
                        var passwd = a.password;
                        if ($scope.username == name) {
                            if ($scope.loginpwd == passwd)
                                flag = true;
                            else {
                                flag = false;
                                $scope.loginerror = true;
                                $scope.username = '';
                                $scope.loginpwd = '';
                            }
                        }
                    };
                }
            }
            if (flag) {
                $rootScope.loggedIn = true; /*changed new*/
                localStorage.removeItem('user');
                var logedinuser = $scope.username;
                var user = localStorage.user ? JSON.parse(localStorage.user) : [];
                var temp = JSON.stringify({
                    name: logedinuser
                });
                user.push(temp);
                localStorage.setItem("user", JSON.stringify(user));
                $location.path('/home');
            } else {
                $scope.loginerror = true;
                $scope.username = '';
                $scope.loginpwd = '';
            }

        });
    }

    $scope.register=function(){
        $location.path('/register');
    }
});