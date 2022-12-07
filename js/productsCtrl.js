app.controller('productsCtrl', function($scope) {
    $scope.smartphones = [
        { "title": "Room Lux", "price": 16999, "image": "resources/images/products-photo/3af9a04340a7354cd70171912586dc4e.jpg" },
        { "title": "Room 253", "price": 17999, "image": "resources/images/products-photo/8d23402d1077e00cad2ca0b7f9ba8d03.jpg" },
        { "title": "Room 342", "price": 1249, "image": "resources/images/products-photo/9eb06d7206761c87dc65f14b8577ff66.jpg" },
        { "title": " Room 234  ", "price": 2649, "image": "resources/images/products-photo/030e1b19e509367f49631f0462e05a15.jpg" },
        { "title": "Room 222", "price": 11799, "image": "resources/images/products-photo/121b2629da63dd9384fae7b5e3f6b7ca.jpg" },
        { "title": "Room 443''", "price": 3500, "image": "resources/images/products-photo/516d91690a27c3b0146391f6a79c4e70.jpg" },
        { "title": "Room 123 ", "price": 1399, "image": "resources/images/products-photo/a47224c93ae1e35a48453e12aaff2abc.jpg" },
        { "title": "HRoom 432", "price": 9999, "image": "resources/images/products-photo/3757094ffedc51ba140f9883f3f3e03c.jpg" },
        { "title": "Room 556", "price": 4499, "image": "resources/images/products-photo/a5ff7fd0b719b8bf11e36cb58984f252.jpg" },
        { "title": "Room 753", "price": 9299, "image": "resources/images/products-photo/b8dd4c5accd664703020a24306153107.jpg" },
        { "title": "Room 238", "price": 2599, "image": "resources/images/products-photo/b6775d915309e3d5dc888174f4b320a5.jpg" },
        { "title": "Room 365 ", "price": 4999, "image": "resources/images/products-photo/ce81c2f9c439c502ecb1cf93b3de5f90.png" },
        { "title": "Room 765", "price": 399, "image": "resources/images/products-photo/d01f9f6210e7b6fc1fd9cc6fb47b4239.jpg" },
        { "title": "Room 567", "price": 4199, "image": "resources/images/products-photo/de07a74b1fbe7f24fcd63f575782ee57.jpg" },
        { "title": "Room 945", "price": 7499, "image": "resources/images/products-photo/ed1f81178f459c239e89cb6857ad0440.jpg" },
        { "title": "Room 109", "price": 6399, "image": "resources/images/products-photo/f11eb3b671639d49694157b731bcee7d.jpg" }
    ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "admin";
    $scope.password = "admin";
    $scope.isSignIn = false;
    $scope.editing = false;


    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.smartphones.findIndex(x => x.title === itemTitle);

        $scope.smartphones.splice(index, 1);

        console.log(index);
    }

    $scope.addNewSmartphone = function() {
        newSmartphone = {
            title: "Unknown",
            price: 0,
            image: "resources/images/banners/logomd.jpg"
        }

        $scope.smartphones.push(newSmartphone);
    }


    $scope.orderByMe = function(item) {
        $scope.myOrderBy = item;
        $scope.reverseOrder();
    }

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }

    $scope.minValue = 0;
    $scope.maxValue = 100000;

    $scope.resetFilters = function() {
        $scope.myOrderBy = "";
        $scope.myReverseBy = false;
        $scope.minValue = 0;
        $scope.maxValue = 100000;
    }

    $scope.myFilter = function(value) {
        return (value.price >= $scope.minValue && value.price <= $scope.maxValue);
    }
});