angularMFRP.controller("confirmcontroller", function($scope, $location) {

    var rand = Math.floor(100000 + Math.random() * 900000);
    $scope.randno = rand;

    $scope.redirect = function() {
        $location.path('/home');
    }

    /********* user name********/
    var uname = JSON.parse(localStorage.user);
    var nam = JSON.parse(uname[0]);
    $scope.usrname = nam.name;
});