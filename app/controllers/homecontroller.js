/* slider*/
angularMFRP.controller('homecontroller', function($scope, $interval, $rootScope) {

    var imgcount = 1;
    var tot = 5;
    /********* user name********/
    var uname = JSON.parse(localStorage.user);
    var nam = JSON.parse(uname[0]);
    $scope.usrname = nam.name;

    $scope.slide = function(x) {
        var img = angular.element(document.querySelector('#imag')); 
        imgcount = imgcount + x;
        if (imgcount > tot) {
            imgcount = 1;
        }
        if (imgcount < 1) {
            imgcount = tot;
        }
        img[0].src = "assets/images/slider/image" + imgcount + ".jpg";
    }

    $scope.change = function(i) {
        var img = angular.element(document.querySelector('#imag'));
        console.log(img[0].src); 
        img[0].src = "assets/images/slider/image" + i + ".jpg";
    }

    var interval = $interval($scope.slideA = function() {
        var img = angular.element(document.querySelector('#imag')); 
        imgcount = imgcount + 1;
        if (imgcount > tot) {
            imgcount = 1;
        }
        if (imgcount < 1) {
            imgcount = tot;
        }
        img[0].src = "assets/images/slider/image" + imgcount + ".jpg";
    }, 4000);

    $scope.$on('$destroy', function() {
        if (interval)
            $interval.cancel(interval);
    });

    if ((localStorage.getItem('bynw') !== null)) {
        var buynw = JSON.parse(localStorage.bynw);
        $scope.cartcount = buynw.length;

    } 
});

/*products ctrller*/
angularMFRP.controller('jsoncontroller', function($scope, $http, $route,$window,myservice) {
	/******** carousel **/
	$scope.slideR=function(){
    $scope.myObj={
	   "transform" : "translate(-580px)"
        }
    }

    $scope.slideL=function(){
    $scope.myObj={
	   "transform" : "translate(0px)"
        }
    }

/** carousel **/
    $http.get("final.json")
        .success(function(response) {
            $scope.dat = response;
			
            $scope.deal = [];
            var d = new Date();
            var n = d.getDay();
            $scope.dealname = $scope.dat.Deals[n].name;
            $scope.dealimage = $scope.dat.Deals[n].image;
            $scope.dealprice = $scope.dat.Deals[n].price;
            $scope.deal[0] = [$scope.dealname, $scope.dealimage, $scope.dealprice];

            var v = Math.floor((Math.random() * 3));
            $scope.arr = [];

            $scope.name = $scope.dat.Electronics.Mobiles[v].name;
            $scope.image = $scope.dat.Electronics.Mobiles[v].image;
            $scope.price = $scope.dat.Electronics.Mobiles[v].price;
            $scope.dd = $scope.dat.Electronics.Mobiles[v].specification;
            $scope.arr[0] = [$scope.name, $scope.image, $scope.price, $scope.dd];

            $scope.name = $scope.dat.Men.Shirt[v].name;
            $scope.image = $scope.dat.Men.Shirt[v].image;
            $scope.price = $scope.dat.Men.Shirt[v].price;
            $scope.dd = $scope.dat.Men.Shirt[v].specification;
            $scope.arr[1] = [$scope.name, $scope.image, $scope.price, $scope.dd];

            $scope.name = $scope.dat.Men.Watches[v].name;
            $scope.image = $scope.dat.Men.Watches[v].image;
            $scope.price = $scope.dat.Men.Watches[v].price;
            $scope.dd = $scope.dat.Men.Watches[v].specification;
            $scope.arr[2] = [$scope.name, $scope.image, $scope.price, $scope.dd];

            $scope.name = $scope.dat.Furnitures[v].name;
            $scope.image = $scope.dat.Furnitures[v].image;
            $scope.price = $scope.dat.Furnitures[v].price;
            $scope.dd = $scope.dat.Furnitures[v].specification;
            $scope.arr[3] = [$scope.name, $scope.image, $scope.price, $scope.dd];

            $scope.name = $scope.dat.Books[v].name;
            $scope.image = $scope.dat.Books[v].image;
            $scope.price = $scope.dat.Books[v].price;
            $scope.dd = $scope.dat.Books[v].specification;
            $scope.arr[4] = [$scope.name, $scope.image, $scope.price, $scope.dd];

            $scope.name = $scope.dat.Women.Saree[v].name;
            $scope.image = $scope.dat.Women.Saree[v].image;
            $scope.price = $scope.dat.Women.Saree[v].price;
            $scope.dd = $scope.dat.Women.Saree[v].specification;
            $scope.arr[5] = [$scope.name, $scope.image, $scope.price, $scope.dd];

            $scope.myvalue = false;
            $scope.showAlert = function() {
                $scope.zz = Math.floor(((Math.random() + 1) * 2));
                $scope.prd = this.obj[0];
                $scope.pic = this.obj[1];
                $scope.cost = this.obj[2];
                $scope.spec = this.obj[3];
                $scope.myvalue = true;
            }

            $scope.clos = function() {
                $scope.myvalue = false;
            }
			/* carousel **/
		$scope.vv=response.Electronics.Mobiles;
		$scope.bb=response.Electronics.Headphones;
		$scope.myvalu=false;
		$scope.fnc=function(i){
			$scope.ne=this.az.name;
			$scope.ie=this.az.image;
			$scope.sn=this.az.specification;
			$scope.pe=this.az.price;
			$scope.myvalu=true;

		}

		$scope.clo=function(){
			$scope.myvalu=false;
		}
		/* carousel **/	
        })


    /**********buy now starts*********/
      $scope.buynow = function() {
            $scope.result=myservice.buy(this.obj[0],this.obj[1],this.obj[2]);
     }
    /**********buy now ends*********/


    /**********favourites starts*********/
    $scope.favourites=function(a,b){
		if(b=="car"){
			var name=this.ne;
			var image=this.ie;
			var price=this.pe;
		}
		else if(b=="home" || b=="deal" ){
		var name=this.obj[0];
		var image=this.obj[1];
		var price=this.obj[2];
		}
        else if(b=="hh"){
            var name=this.$$watchers[11].last;
        var image=this.$$watchers[10].last;
        var price=this.$$watchers[7].last;

        }

            $scope.result=myservice.fav(name,image,price);
        }
    /**********favourites ends*********/

})