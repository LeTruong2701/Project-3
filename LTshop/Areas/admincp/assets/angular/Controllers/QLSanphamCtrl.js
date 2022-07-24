app.controller('QLSanphamCtrl', ['$scope', 'CrudService',
    function ($scope, CrudService) {

        // Base Url 
        var baseUrl = '/admincp/QLSanpham/';
        const urlGetLoaiSP = '/admincp/LoaiSP/getAllData';
        $scope.btnText = "Save";
        $scope.studentID = 0;


        // Get loai
        const cate = CrudService.getAll(urlGetLoaiSP);
        cate.then(response => {
           
            $scope.categories = response.data.data;
        })

        $scope.dateObj = function (stringDate) {
            if (stringDate != null) {
                unix_timestamp = parseInt(stringDate.replace(/[\/\(\)a-z]/ig, ""));
                return new Date(unix_timestamp);
            }
            else {
                return "";
            }


        }

        $scope.SaveUpdate = function () {
            var sanpham = {
                tensp: $scope.tensp,
                maloaisp: $scope.maloaisp,
                giaban: $scope.giaban,
                size: $scope.size,
                dacdiem: $scope.dacdiem,
                anh: $scope.anh,
                created_at: $scope.created_at,
                /*updated_at: $scope.updated_at,*/
                masp: $scope.masp
            }
            var sanphamud = {
                tensp: $scope.tensp,
                maloaisp: $scope.maloaisp,
                giaban: $scope.giaban,
                size: $scope.size,
                dacdiem: $scope.dacdiem,
                anh: $scope.anh,
                created_at: $scope.created_at,
                updated_at: $scope.updated_at,
                masp: $scope.masp
            }
            if ($scope.btnText == "Save") {
                var apiRoute = baseUrl + 'SaveSanpham';
                var saveSanpham = CrudService.post(apiRoute, sanpham);
                saveSanpham.then(function (response) {
                    if (response.data != "") {
                        console.log(response);
                        alert("Data Save Successfully");
                        $scope.GetSanpham();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
            else {
                var apiRoute = baseUrl + 'UpdateSanpham';
                var UpdateSanpham = CrudService.post(apiRoute, sanphamud);
                UpdateSanpham.then(function (response) {
                    if (response.data != "") {
                        alert("Data Update Successfully");
                        $scope.GetSanpham();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }


        $scope.GetSanpham = function () {
            var apiRoute = baseUrl + 'getAllData';
            var Sanpham = CrudService.getAll(apiRoute);
            $scope.searchText = '';
            Sanpham.then(function (response) {
                //debugger
                console.log(response);
                $scope.sanphams = response.data.data;

            },
                function (error) {
                    console.log("Error: " + error);
                });


        }
        $scope.GetSanpham();

        $scope.GetSanphamByID = function (dataModel) {
            //debugger
            var apiRoute = baseUrl + 'GetSanphamByID';
            var sanpham = CrudService.getbyID(apiRoute, dataModel.masp);
            sanpham.then(function (response) {
                $scope.masp = response.data.data.masp;
                $scope.tensp = response.data.data.tensp;
                $scope.maloaisp = response.data.data.maloaisp;
                $scope.giaban = response.data.data.giaban;
                $scope.size = response.data.data.size;
                $scope.dacdiem = response.data.data.dacdiem;
                $scope.anh = response.data.data.anh;
                $scope.created_at = response.data.data.created_at;
                $scope.updated_at = response.data.data.updated_at;
                $scope.btnText = "Update";
            },
                function (error) {
                    console.log("Error: " + error);
                });
        }
        //
        $scope.DeleteSanpham = function (dataModel) {
            // debugger
            if (!confirm("Bạn có muốn xóa sản phẩm " + dataModel.tensp + " không?")) {
                return;
            }
            var apiRoute = baseUrl + 'DeleteSanpham/';
            var deleteSanpham = CrudService.getbyID(apiRoute, dataModel.masp);
            deleteSanpham.then(function (response) {
                if (response.data != "") {
                    alert("Data Delete Successfully");
                    $scope.GetSanpham();
                    $scope.Clear();

                } else {
                    alert("Some error");
                }

            }, function (error) {
                console.log("Error: " + error);
            });
        }

        $scope.Clear = function () {
            $scope.masp = "";
            $scope.tensp = "";
            $scope.maloaisp = "";
            $scope.giaban = 10000;
            $scope.size = "";
            $scope.dacdiem = "";
            $scope.anh = "";
            $scope.created_at = "";
            $scope.updated_at = "";
            $scope.btnText = "Save";
        }

    }]);

app.directive('date', function (dateFilter) {
    return {
        require: 'ngModel',
        link: function (scope,
            elm, attrs, ctrl) {

            var dateFormat =
                attrs['date'] || 'yyyy-MM-dd';

            ctrl.$formatters.unshift(
                function (modelValue) {
                    return dateFilter(
                        modelValue, dateFormat);
                });
        }
    };
})