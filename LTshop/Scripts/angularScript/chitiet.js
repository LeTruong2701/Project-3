////////////////////////////
//const app = angular.module('TrangSucApp', []);
app.controller("ChiTietCtrl", function ($scope, $http, $window, $timeout) {
    /*================== Danh sách các biến =================================== */
    $scope.SanPham = {};

    $scope.listSPMoi = {};

    $scope.listSPCL = [];
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadSP = function (masp) {
        $http({
            method: 'GET',
            url: '/SanPham/GetChiTiet/?MaSP=' + masp,
        }).then(function (response) {
            $scope.SanPham = response.data;

            $timeout(function () {
                $('.hiraola-product_slider-3').slick({
                    infinite: true,
                    arrows: true,
                    dots: false,
                    speed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button class="slick-prev"><i class="ion-ios-arrow-back"></i></button>',
                    nextArrow: '<button class="slick-next"><i class="ion-ios-arrow-forward"></i></button>',
                    responsive: [{
                        breakpoint: 1501,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                    ]
                });
            }, 100);

        });
    };



    $scope.LoadSPMoi = function () {
        $http({
            method: 'GET',
            url: '/Home/GetSPMoi',
        }).then(function (response) {
            $scope.listSPMoi = response.data;

            $timeout(function () {
                $('.hiraola-product_slider-3').not('.slick-initialized').slick({
                    infinite: true,
                    arrows: true,
                    dots: false,
                    speed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button class="slick-prev"><i class="ion-ios-arrow-back"></i></button>',
                    nextArrow: '<button class="slick-next"><i class="ion-ios-arrow-forward"></i></button>',
                    responsive: [{
                        breakpoint: 1501,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                    ]
                });
            }, 1000);





        });
    };


    $scope.LoadDanhSach = function (maloaisp, page, limit) {
        $http({
            method: 'GET',
            url: 'http://localhost:50144/SanPham/GetDanhSach/?maloaisp=' + maloaisp + "&page=" + page + "&limit=" + limit,
            //url: '/SanPham/GetDanhSach/?MaLoai=' + maloaisp + "&page=" + page + "&limit=" + limit,
            //params: { maloaisp, page, limit }
        }).then(function (response) {
            console.log(response);
            $scope.listSPCL = response.data.list;
            $scope.total = response.data.total;
        }, reject => console.log(reject));
    };

    $scope.size = 'S';

    $scope.changeSize = function (size) {
        console.log(size);
        $scope.size = size;
    }




    $scope.addToCart = function (sp) {
        const quan = Number.parseInt($('.cart-plus-minus input').val());

        let item = {};
        item.masp = sp.masp;
        item.tensp = sp.tensp;
        item.anh = sp.anh;
        item.size = $scope.size;
        item.giaban = sp.giaban;
        item.quantity = quan;
        var list;
        if (localStorage.getItem('cart') == null) {
            list = [item];
        } else {
            list = JSON.parse(localStorage.getItem('cart')) || [];
            let ok = true;
            for (let x of list) {
                if (x.masp == item.masp) {
                    x.quantity += item.quantity;
                    x.size = item.size;
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





