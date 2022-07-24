var app = angular.module("LTShopApp", []);
app.controller("LoginCtrl", function ($scope, $http, $window, $timeout) {
    $scope.listSP = [];
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.Login = function (username, password) {
        //let Login = {};
        //Login.TaiKhoan = $('#TaiKhoan').val();
        //Login.MatKhau = $('#MatKhau').val();
        $http({
            method: 'POST',
            url: '/Admin/AjaxLogin',
            datatype: 'json',
            params: { username, password }
           /* data: JSON.stringify(Login)*/
        }).then(function (response) {
            if (response.data.ok == 1) {
                window.location.replace("/admincp/Dashboard/Index");
            }
            else {
                alert('Có lỗi');
            }
        }, error => console.log(error));
    };
});





