app.controller("CheckOutCtrl", function ($scope, $http, $window, $timeout) {
    $scope.listSP = [];
    $scope.total = 0;
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadCart = function () {
        $scope.listSP = JSON.parse(localStorage.getItem('cart'));
        $scope.listSP.forEach(function (item, i) {
            $scope.total += item.quantity * item.giaban;
        });
    };
    $scope.LoadCart();

    $scope.CreateHoaDon = function () {
       
        let HoaDon = {};
        HoaDon.tenkh = $('#tenkh').val();
        HoaDon.diachi = $('#diachi').val();
        HoaDon.sdt = $('#sdt').val();
        HoaDon.tongtien = getTotal();
        HoaDon.ghichu = $('#ghichu').val();
        HoaDon.chitiethoadonbans = [];
        $scope.listSP.forEach(function (item, i) {
            HoaDon.chitiethoadonbans.push({ mahdb: item.mahdb, masp: item.masp, soluong: item.quantity,size:item.size });
        });
        console.log(HoaDon);
       
        $http({
            method: 'POST',
            url: '/Shopping/CreateHoaDon',
            datatype: 'json',
            data: JSON.stringify(HoaDon)
        }).then(function (response) {
            if (response.data.ok == 1) {
                alert('Đơn hàng của bạn đã được tiếp nhận');

            }
            else {
                alert('Có lỗi');
            }
        });
        console.log(HoaDon);
    };


    $scope.getTotal = getTotal();

    function getTotal () {
        var total = 0;
        for (var i = 0; i < $scope.listSP.length; i++) {
            var product = $scope.listSP[i];
            total += (product.giaban * product.quantity);
        }
        return total;
    }

});





