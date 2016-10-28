angularMFRP.controller('cartcontroller', function($scope, $interval, $location, $rootScope, $route,$window) {


    //$route.reload();
    $scope.cart = [];
    $scope.qnty = 1;
    /********* user name********/
    var uname = JSON.parse(localStorage.user);
    var nam = JSON.parse(uname[0]);
    $scope.usrname = nam.name;

    if (!(localStorage.getItem('bynw') === null)) {
        var buynw = JSON.parse(localStorage.bynw);
        for (var i = 0; i < buynw.length; i++) {
            var product = JSON.parse(buynw[i]);
            var pname = product.productname;
            var pimg = product.productimage;
            var pprice = product.productprice;
            var zz = pprice.replace(",", "");
            var pric = parseInt(zz);
            $scope.cart[i] = [pname, pimg, pprice, pric];
        }
    }

    $scope.qnty1 = function() {
        $scope.qnty = 1;
    }

    if (localStorage.bynw){
        $scope.len = buynw.length;
    } else
        $scope.len = 0; 


    /******* checked value *********/
    var j = 0;
    var a = [];
    var c = [];
    var d = [];
    $scope.checkfunc = function(name, qn, no) {
        var cflag = true;
        var cval = this.checkboxvalue;
        angular.forEach(c, function(index, key) {
            if (index == name) {

                d[key] = cval;
                cflag = false;
                if (cval == '') {
                    a[key] = 0;
                } else {
                    a[key] = qn * no;
                }
            }
        })
        if (cflag) {
            c[j] = name;
            d[j] = this.checkboxvalue;
            a[j] = qn * no;
            j++;
        }
        var sum = 0;
        angular.forEach(a, function(index, key) {
            sum = sum + index;
        })
        $scope.total = sum;
    }

    /*********** confirm order ***********/
    $scope.confirmorder = function() {
       

        if (d == '' || ($scope.total == 0)) {
            if (localStorage.getItem('bynw') === null)
                $window.alert("Cart is Empty");
            else
                $window.alert('No items Selected');
        } else {
            var r = confirm("confirm the orders");
            if (r == true) {
                if (!(localStorage.getItem('bynw') === null)) {
                    var cart = [];
                    var buynw = JSON.parse(localStorage.bynw);
					console.log(buynw.length);
                    localStorage.removeItem('bynw');
                    var bynw = localStorage.bynw ? JSON.parse(localStorage.bynw) : [];
                    for (var i = 0; i < buynw.length; i++) {
                        var fflag = true;
                        var product = JSON.parse(buynw[i]);
                        var pname = product.productname;
                        angular.forEach(d, function(index, key) {
                            if (index == pname) {
                                fflag = false;
                            }
                        })
                        if (fflag) {
                            var temp = JSON.stringify({
                                productname: pname,
                                productimage: product.productimage,
                                productprice: product.productprice
                            });
                            bynw.push(temp);
                        }
                    }
                    localStorage.setItem('bynw', JSON.stringify(bynw));
                    $location.path('/confirm');
                }
            }
        }
    }

      /*****remove */
    $scope.removecart = function() {
        if (confirm("Do you want to remove this?") == true) {
            var product = [];
            var ff = JSON.parse(localStorage.bynw);
            localStorage.removeItem('bynw');
            var bynw = localStorage.bynw ? JSON.parse(localStorage.bynw) : [];
            for (var i = 0; i < ff.length; i++) {
                product[i] = JSON.parse(ff[i]);
                var name = product[i].productname;
                if (name == this.c[0]) {
                    $window.alert('Product Removed Successfully');
                } else {
                    var temp = JSON.stringify({
                        productname: name,
                        productimage: product[i].productimage,
                        productprice: product[i].productprice
                    });
                    bynw.push(temp);
                }
            }
            localStorage.setItem('bynw', JSON.stringify(bynw));
            $route.reload();
        }
    }



})