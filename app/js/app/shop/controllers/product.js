app.controller('productController', ['$scope', '$http', function($scope, $http) {
    $scope.products = [];
    $http.get('js/app/shop/data/mens_tshirts.json').then(function(res) {
        $scope.products.push.apply($scope.products, res.data);
    })

    $http.get('js/app/shop/data/ladies_tshirts.json').then(function(res) {
        $scope.products.push.apply($scope.products, res.data);
    })

    $http.get('js/app/shop/data/mens_outerwear.json').then(function(res) {
        $scope.products.push.apply($scope.products, res.data);
    })

    $http.get('js/app/shop/data/ladies_outerwear.json').then(function(res) {
        $scope.products.push.apply($scope.products, res.data);
    })

}])
