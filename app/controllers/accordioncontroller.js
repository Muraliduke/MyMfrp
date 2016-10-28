angularMFRP.controller('accordioncontroller', function($scope, $http) {
    $http.get("final.json")
        .then(function(response) {
            var resp = response.data;
            var electronic = [];
            var mob = [];
            var i = 0;
            angular.forEach(resp.Electronics, function(key, element) {

                electronic[i] = element;

                i++;

            });
            $scope.v = electronic[0];
            $scope.w = electronic[1];
            $scope.x = electronic[2];
            $scope.y = electronic[3];
            $scope.z = electronic[4];

            $scope.aa = resp.Electronics.Mobiles;

            $scope.bb = resp.Electronics.Laptop;

            $scope.cc = resp.Electronics.Headphones;
            $scope.dd = resp.Electronics.Tablets;
            $scope.ee = resp.Electronics.TV;


            var mens = [];
            var i = 0;
            angular.forEach(resp.Men, function(key, element) {

                mens[i] = element;
                i++;
            });

            $scope.v1 = mens[0];

            $scope.w1 = mens[1];
            $scope.x1 = mens[2];
            $scope.y1 = mens[3];
            $scope.z1 = mens[4];
            $scope.aa1 = resp.Men.Shirt;

            $scope.bb1 = resp.Men.TShirt;

            $scope.cc1 = resp.Men.Sunglass;

            $scope.dd1 = resp.Men.Watches;
            $scope.ee1 = resp.Men.Footwear;

            var wom = [];
            var i = 0;
            angular.forEach(resp.Women, function(key, element) {

                wom[i] = element;
                i++;
            });

            $scope.c = wom;
            $scope.v2 = wom[0];

            $scope.w2 = wom[1];
            $scope.x2 = wom[2];
            $scope.y2 = wom[3];
            $scope.z2 = wom[4];
            $scope.aa2 = resp.Women.Chudi;

            $scope.bb2 = resp.Women.Saree;

            $scope.cc2 = resp.Women.Bags;

            $scope.dd2 = resp.Women.Watches;
            $scope.ee2 = resp.Women.Footwear;




            var furn = [];
            var i = 0;
            angular.forEach(resp.Furnitures, function(key, element) {

                furn[i] = key.name;
                i++;

            });
            $scope.v3 = furn;

            var bok = [];
            var i = 0;
            angular.forEach(resp.Books, function(key, element) {

                bok[i] = key.name;
                i++;
            });
            $scope.v4 = bok;
        });




});