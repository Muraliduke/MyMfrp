angularMFRP.service('myservice', function(myfactry) {

	this.buy=function(name,image,price){
		return myfactry.buynw(name,image,price);
	}

	this.fav=function(name,image,price){
		return myfactry.favourites(name,image,price);
	}

	this.rmfav=function(name){
		return myfactry.removefav(name);
	}

})