app.controller('productController', ['$scope', '$http', function($scope, $http){
	$http.get('js/app/shop/data/mens_tshirts.json').then(function(res) {
		console.log(res);
	})
}])
