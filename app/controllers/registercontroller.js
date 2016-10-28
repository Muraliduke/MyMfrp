angularMFRP.controller('registercontroller', function($scope, $filter, $location,$window) {

    var i = 1,
        j = 1;
    var tot = 5;
    $scope.register = true;

    $scope.load = function() {
        if (i == tot) {
            i = j;
        }
        ++i;
        var pic = angular.element(document.querySelector('#cap'));;
        pic[0].src = "assets/images/cap" + i + ".png";
    }

    $scope.saveResourceInfo = function(form) {

        $scope.submitted = true;

        /******Validating E-Mail field*********/
        var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        if (!($scope.email.match(emailPattern))) {
            $scope.emailerror = true;
            $scope.submitted = false;
        } else
            $scope.emailerror = false;


        /**** password validation ****/
        var pwdpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}/;
        if (!($scope.pwd.match(pwdpattern))) {
            $scope.pwderror = true;
            $scope.submitted = false;
            $scope.pwd = '';
        } else
            $scope.pwderror = false;


        /*** confirm password **/
        if (angular.equals($scope.pwd, $scope.confirmpwd))
            $scope.confirmpwderror = false;
        else {
            $scope.confirmpwd = '';
            $scope.confirmpwderror = true;
            $scope.submitted = false;
        }

        /******captcha********/
        var d = $scope.captchawrd;
        if (i == 1) {
            if (d != "95inb") {
                $scope.captchaerror=true;
                $scope.submitted = false;
            }
        } else if (i == 2) {
            if (d != "Zonwj") {
                $scope.captchaerror=true;
                $scope.submitted = false;
            }
        } else if (i == 3) {
            if (d != "qa8uf") {
                $scope.captchaerror=true;
                $scope.submitted = false;
            }
        } else if (i == 4) {
            if (d != "eduzt") {
                $scope.captchaerror=true;
                $scope.submitted = false;
            }
        } else if (i == 5) {
            if (d != "jnjd5") {
                $scope.captchaerror=true;
                $scope.submitted = false;
            }
        }

        if ($scope.submitted) {
            var info1 = $scope.usrName;
            var info2 = $scope.confirmpwd;
            var obj = localStorage.obj ? JSON.parse(localStorage.obj) : [];
            var temp = JSON.stringify({
                username: info1,
                password: info2
            });
            obj.push(temp);
            localStorage.setItem("obj", JSON.stringify(obj));
            $location.path('/');
            $window.alert('Registered Successfully');
        }

    }

    /******Reset Form********/
    $scope.reset = function() {

        $scope.usrName = '';
        $scope.email = '';
        $scope.contactNumber = '';
        $scope.pwd = '';
        $scope.confirmpwd = '';
        $scope.captchawrd = '';

        $scope.submitted = false;
    }

    /******Cancel Form********/
    $scope.cancel = function() {
        $location.path('/');
    }

});