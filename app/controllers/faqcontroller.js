angularMFRP.controller("faqcontroller", function($scope, $rootScope) {

    /********* user name********/
    var uname = JSON.parse(localStorage.user);
    var nam = JSON.parse(uname[0]);
    $scope.usrname = nam.name;

    if (localStorage.bynw) /*changed new*/ {
        var buynw = JSON.parse(localStorage.bynw);
        $scope.len = buynw.length;
    } else
        $scope.len = 0; /* changed*/

    var obj1 = {
        "Query1": {
            "Answer1": "You can create a new account by clicking on Register in Login Page.Then fill out the required details in the register page and click on Register"
        },
        "Query2": {
            "Answer2": "You can add your products to favourite by clicking on Add to favourites.To view your favourite items clcik on the favourites tab"
        },
        "Query3": {
            "Answer3": "You can add your products to cart by clicking on Add to Cart.To view to added items click on the cart tab"
        },
        "Query4": {
            "Answer4": "You can select more than one quantity of products by entering the quantity in the quantity text box in the cart page.You check your total amount below the cart table"
        },
        "Query5": {
            "Answer5": "You can confirm your product by clicking on confirm order.After confirming the order a random delivery number would be generated."
        },
        "Query6": {
            "Answer6": "You can find the deal of the day by clciking on the deal of the day in the home page.The deal would be added to the favourites if you click on favourites.The deal would be added to cart if you click on cart"
        },
        "Query7": {
            "Answer7": "You can find the selected items in the cart page.You can then select the quantity of the items"
        }
    }
    $scope.showMe1 = false;
    $scope.ans1 = function() {
        $scope.showMe1 = !$scope.showMe1;
        $scope.obj1 = obj1;

    }
    $scope.showMe2 = false;
    $scope.ans2 = function() {
        $scope.showMe2 = !$scope.showMe2;
        $scope.obj1 = obj1;

    }
    $scope.showMe3 = false;
    $scope.ans3 = function() {
        $scope.showMe3 = !$scope.showMe3;
        $scope.obj1 = obj1;

    }
    $scope.showMe4 = false;
    $scope.ans4 = function() {
        $scope.showMe4 = !$scope.showMe4;
        $scope.obj1 = obj1;

    }
    $scope.showMe5 = false;
    $scope.ans5 = function() {
        $scope.showMe5 = !$scope.showMe5;
        $scope.obj1 = obj1;

    }

    $scope.showMe6 = false;
    $scope.ans6 = function() {
        $scope.showMe6 = !$scope.showMe6;
        $scope.obj1 = obj1;

    }

    $scope.showMe7 = false;
    $scope.ans7 = function() {
        $scope.showMe7 = !$scope.showMe7;
        $scope.obj1 = obj1;

    }

    $scope.save = function() {
        var a = angular.element(document.querySelector('.query')).val();
        angular.element(document.querySelector('.ques')).text(a);
    }




})