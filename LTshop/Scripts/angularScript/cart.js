////////////////////////////
app.controller("CartCtrl", function ($scope, $http, $window, $timeout) {
    
    $scope.listSP = [];
    $scope.total = 0;
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadCart = function () {
        $scope.listSP = JSON.parse(localStorage.getItem('cart'));
    };
    $scope.LoadCart();
    console.log($scope.listSP);

    //=========Xoa sp
    //function Xoa(id) {
    //    var index = list.findIndex(x => x.masp == id)
    //    if (index >= 0) {
    //        list.splice(index, 1);
    //    }
    //    loadData()
    //}

    $scope.removeCart = (item) => {
        
        const index = $scope.listSP.findIndex(i => i.masp == item.masp);
        $scope.listSP.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify($scope.listSP));
    }

    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.listSP.length; i++) {
            var product = $scope.listSP[i];
            total += (product.giaban * product.soluong);
        }
        return total;
    }


});





