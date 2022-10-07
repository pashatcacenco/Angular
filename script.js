var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var products = [
                {
                    name: "мясо куринное", price: 10,
                    category: "мясо", count: 10
                },

                {
                  name: "конфеты", price: 14,
                  category: "сладости", count: 200
                },
                {
                  name: "бананы", price: 120,
                  category: "фрукты", count: 150
                },
                {
                  name: "картошка", price: 5,
                  category: "овощи", count: 5
                },
                {
                  name: "мясо свинное", price: 20,
                  category: "мясо", count: 7
                },
            ];

            $scope.products = products;
            $scope.rowCount = 3;

            // сортировка по категорям
         $scope.orderByMe = function(product) {
        console.log('privet')
        $scope.sortBy = product;
}
        });



