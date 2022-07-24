/*/*const app = angular.module('TrangSucApp', []);*/

app.controller("HomeCtrl", function ($rootScope, $scope, $http, $window, $timeout) {
    
    /*================== Danh sách các biến =================================== */
    $scope.listSPMoi = {};
    $scope.listSPQuanao = {};
    $scope.listSPGiay = {};
    $scope.listSPPhukien = {};

    $scope.listLoaiSP = {};



    $scope.listXemNhieu = {};
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadLoaiSP = function () {
        $http({
            method: 'GET',
            url: '/Home/GetLoaiSP',
        }).then(function (response) {
            console.log(response.data);
            $scope.listLoaiSP = response.data;
        });
    };

    $scope.selectMaLoai = (maloai) => {
        $rootScope.selectedMaLoai = maloai;
    }

    $scope.LoadSPMoi = function () {
        $http({
            method: 'GET',
            url: '/Home/GetSPMoi',
        }).then(function (response) {
            $scope.listSPMoi = response.data;

            $timeout(function () {
                $('.hiraola-product_slider').not('.slick-initialized').slick({
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

    //

    $scope.LoadSPQuanao = function () {
        $http({
            method: 'GET',
            url: '/Home/GetSPQuanao',
        }).then(function (response) {
            $scope.listSPQuanao = response.data;

            $timeout(function () {
                $('.hiraola-product-tab_slider-2').not('.slick-initialized').slick({
                    infinite: true,
                    arrows: true,
                    dots: false,
                    speed: 2000,
                    slidesToShow: 2,
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





    
    //Giaỳ
    $scope.LoadSPGiay = function () {
        $http({
            method: 'GET',
            url: '/Home/GetSPGiay',
        }).then(function (response) {
            $scope.listSPGiay = response.data;

            $timeout(function () {
                $('.hiraola-product-tab_slider-2').not('.slick-initialized').slick({
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
            }, 0);
        });
    };
    ////
    //Phụ kiện
    $scope.LoadSPPhukien = function () {
        $http({
            method: 'GET',
            url: '/Home/GetSPPhukien',
        }).then(function (response) {
            $scope.listSPPhukien = response.data;

            $timeout(function () {
                $('.hiraola-product-tab_slider-2').not('.slick-initialized').slick({
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
            }, 0);
        });
    };

    //\\//\ XÓA cart
    $scope.removeCart = (item) => {
        const index = $scope.listSP.findIndex(i => i.masp == item.masp);
        $scope.listSP.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify($scope.listSP));
    }
    ///

    //$scope.LoadXemNhieu = function () {
    //    $http({
    //        method: 'GET',
    //        url: '/Home/GetSPXem',
    //    }).then(function (response) {
    //        $scope.listXemNhieu = response.data;

    //        $timeout(function () {
    //            $('.hiraola-product_slider').slick({
    //                infinite: true,
    //                arrows: true,
    //                dots: false,
    //                speed: 2000,
    //                slidesToShow: 5,
    //                slidesToScroll: 1,
    //                prevArrow: '<button class="slick-prev"><i class="ion-ios-arrow-back"></i></button>',
    //                nextArrow: '<button class="slick-next"><i class="ion-ios-arrow-forward"></i></button>',
    //                responsive: [{
    //                    breakpoint: 1501,
    //                    settings: {
    //                        slidesToShow: 5
    //                    }
    //                },
    //                {
    //                    breakpoint: 1200,
    //                    settings: {
    //                        slidesToShow: 4
    //                    }
    //                },
    //                {
    //                    breakpoint: 992,
    //                    settings: {
    //                        slidesToShow: 3
    //                    }
    //                },
    //                {
    //                    breakpoint: 768,
    //                    settings: {
    //                        slidesToShow: 2
    //                    }
    //                },
    //                {
    //                    breakpoint: 575,
    //                    settings: {
    //                        slidesToShow: 1
    //                    }
    //                }
    //                ]
    //            });
    //        }, 0);


    //    });
    //};
    
    //$scope.addToCart = function (sp) {
    //    let item = {};
    //    item.masp = sp.masp;
    //    item.tensp = sp.tensp;
    //    item.anh = sp.anh;
    //    item.giaban = sp.giaban;
    //    item.quantity = 1;
    //    var list;
    //    if (localStorage.getItem('cart') == null) {
    //        list = [item];
    //    } else {
    //        list = JSON.parse(localStorage.getItem('cart')) || [];
    //        let ok = true;
    //        for (let x of list) {
    //            if (x.masp == item.masp) {
    //                x.quantity += 1;
    //                ok = false;
    //                break;
    //            }
    //        }
    //        if (ok) {
    //            list.push(item);
    //        }
    //    }
    //    localStorage.setItem('cart', JSON.stringify(list));
    //    alert("Đã thêm giở hàng thành công");
    //}

    $scope.appliedClass = function (item) {
        if (item.SLCon == 0) {
            return "";
        } else {
            return "right-menu";
        }
    }
});

app.filter('LoaiSPCha', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.MaLoaiCha == null) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

app.filter('LoaiSPCon', function () {
    return function (items, tmp) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.MaLoaiCha == tmp.MaLoai) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});





