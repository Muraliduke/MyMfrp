angularMFRP.controller('favcontroller', function($scope, $route,$window,myservice) {

    $scope.fav = [];
    /********* user name********/
    var uname = JSON.parse(localStorage.user);
    var nam = JSON.parse(uname[0]);
    $scope.usrname = nam.name;

    if (!(localStorage.getItem('favtes') === null)) {
        var fav = JSON.parse(localStorage.favtes);
        for (var i = 0; i < fav.length; i++) {
            var product = JSON.parse(fav[i]);
            var pname = product.productname;
            var pimg = product.productimage;
            var pprice = product.productprice;
            $scope.fav[i] = [pname, pimg, pprice];
        }
    }

    if ((localStorage.getItem('bynw') !== null)) {
        var buynw = JSON.parse(localStorage.bynw);
        $scope.cartcount = buynw.length;

    } 

    /**********buy now starts*********/
     $scope.buynow = function() {
            $scope.result=myservice.buy(this.obj[0],this.obj[1],this.obj[2]);
     }
    /**********buy now ends*********/

    /*****remove */
      $scope.removefav = function() {
            $scope.result=myservice.rmfav(this.obj[0]);
     }
})