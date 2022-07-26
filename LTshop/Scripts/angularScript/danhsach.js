﻿app.controller("DanhSachCtrl", function ($rootScope, $scope, $http, $window) {
    /*================== Danh sách các biến =================================== */
    $scope.listSP = [];

    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;
    $scope.total = 0;
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadDanhSach = function (maloaisp, page, limit) {
        $http({
            method: 'GET',
            url: 'http://localhost:50144/SanPham/GetDanhSach/?maloaisp=' + maloaisp + "&page=" + page + "&limit=" + limit,
            //url: '/SanPham/GetDanhSach/?MaLoai=' + maloaisp + "&page=" + page + "&limit=" + limit,
            //params: { maloaisp, page, limit }
        }).then(function (response) {
            console.log(response);
            $scope.listSP = response.data.list;
            $scope.total = response.data.total;
        }, reject => console.log(reject));
    };
    $scope.$watch('currentPage + numPerPage', function () {
        $scope.listSP = $scope.LoadDanhSach($('#MaLoai').val(), $scope.currentPage, $scope.numPerPage);
    });
    $scope.addToCart = function (sp) {
        //console.log(sp);
        let item = {};
        item.masp = sp.masp;
        item.tensp = sp.tensp;
        item.anh = sp.anh;
        item.giaban = sp.giaban;
        item.quantity = 1;
        var list;
        if (localStorage.getItem('cart') == null) {
            list = [item];
        } else {
            list = JSON.parse(localStorage.getItem('cart')) || [];
            let ok = true;
            for (let x of list) {
                if (x.masp == item.masp) {
                    x.quantity += 1;
                    ok = false;
                    break;
                }
            }
            if (ok) {
                list.push(item);
            }
        }
        localStorage.setItem('cart', JSON.stringify(list));
        alert("Đã thêm giở hàng thành công");
    }
});





