app.directive('navMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'tpl/pages/shop/nav-menu.html'
    }
});


app.directive('shopList', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpl/pages/shop/shop-list.html',
		scope: {
			products: '='
		}

	}
});

app.directive('shopItem', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpl/pages/shop/shop-item.html',
		scope: {
			product: '='
		}
	}
});