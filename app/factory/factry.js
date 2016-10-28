angularMFRP.factory('myfactry', function($route,$window) {
	var factory={};
	factory.buynw=function(name,image,price) {
            var byflag = true;
           
            if (!(localStorage.getItem('bynw') === null)) {
                var buy = JSON.parse(localStorage.bynw);
                for (var i = 0; i < buy.length; i++) {
                    var product = JSON.parse(buy[i]);
                    var pname = product.productname;
                    var pimg = product.productimage;
                    if (pname == name) {
                        if (pimg == image) {
                            byflag = false;
                           $window.alert("Product Already Exists in Cart");
                        }
                    }
                }
                if (byflag) {
                    var bynw = localStorage.bynw ? JSON.parse(localStorage.bynw) : [];
                    var temp = JSON.stringify({
                        productname: name,
                        productimage: image,
                        productprice: price
                    });
                    bynw.push(temp);
                    localStorage.setItem('bynw', JSON.stringify(bynw));
                    $window.alert("Added To Cart Successfully");
                }
            } 
			else {
                var bynw = localStorage.bynw ? JSON.parse(localStorage.bynw) : [];
                var temp = JSON.stringify({
                    productname: name,
                    productimage: image,
                    productprice: price
                });
                bynw.push(temp);
                localStorage.setItem('bynw', JSON.stringify(bynw));
                $window.alert("Added To Cart Successfully");
            }
            $route.reload();
        }

        factory.favourites = function(name,image,price) {
        	var favflag = true;
            if (!(localStorage.getItem('favtes') === null)) {
                var fav = JSON.parse(localStorage.favtes);
                for (var i = 0; i < fav.length; i++) {
                    var product = JSON.parse(fav[i]);
                    var pname = product.productname;
                    var pimg = product.productimage;
                    if (pname == name) {
                        if (pimg == image) {
                            favflag = false;
                            $window.alert("Product Already Exists in Favourites");
                        }
                    }
                }
                if (favflag) {
                    var favtes = localStorage.favtes ? JSON.parse(localStorage.favtes) : [];
                    var temp = JSON.stringify({
                        productname: name,
                        productimage: image,
                        productprice: price
                    });
                    favtes.push(temp);
                    localStorage.setItem('favtes', JSON.stringify(favtes));
                    $window.alert("Added To Favourites Successfully");
                }
            } else {
                var favtes = localStorage.favtes ? JSON.parse(localStorage.favtes) : [];
                var temp = JSON.stringify({
                    productname: name,
                    productimage: image,
                    productprice: price
                });
                favtes.push(temp);
                localStorage.setItem('favtes', JSON.stringify(favtes));
                $window.alert("Added To Favourites Successfully");
            }
        }

        factory.removefav = function(rmname) {
        if ($window.confirm("Do you want to remove this?") == true) {
            var product = [];
            var ff = JSON.parse(localStorage.favtes);
            localStorage.removeItem('favtes');
            var favtes = localStorage.favtes ? JSON.parse(localStorage.favtes) : [];
            for (var i = 0; i < ff.length; i++) {
                product[i] = JSON.parse(ff[i]);
                var name = product[i].productname;
                if (name == rmname) {
                    $window.alert('Products Removed Successfully');
                } else {
                    var temp = JSON.stringify({
                        productname: name,
                        productimage: product[i].productimage,
                        productprice: product[i].productprice
                    });
                    favtes.push(temp);
                }
            }
            localStorage.setItem('favtes', JSON.stringify(favtes));
            $route.reload();
        }
    }

       return factory;
})