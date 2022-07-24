app.controller('KhachhangCtrl', ['$scope', 'CrudService',
    function ($scope, CrudService) {

        // Base Url 
        var baseUrl = '/admincp/Khachhang/';
        $scope.btnText = "Save";
        $scope.studentID = 0;


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
            var khachhang = {
                tenkh: $scope.tenkh,
                gioitinh: $scope.gioitinh,
                namsinh: $scope.namsinh,
                diachi: $scope.diachi,
                sdt: $scope.sdt,
                email: $scope.email,
                created_at: $scope.created_at,
                //Updated_at: $scope.Updated_at,
                //Remember_Token: $scope.Remember_Token,
                makh: $scope.makh
            }
            if ($scope.btnText == "Save") {
                var apiRoute = baseUrl + 'SaveKhachhang';
                var saveKhachhang = CrudService.post(apiRoute, khachhang);
                saveKhachhang.then(function (response) {
                    if (response.data != "") {
                        alert("Data Save Successfully");
                        $scope.GetKhachhang();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
            else {
                var apiRoute = baseUrl + 'UpdateKhachhang';
                var UpdateKhachhang = CrudService.post(apiRoute, khachhang);
                UpdateKhachhang.then(function (response) {
                    if (response.data != "") {
                        alert("Data Update Successfully");
                        $scope.GetKhachhang();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }


        $scope.GetKhachhang = function () {
            var apiRoute = baseUrl + 'getAllData';
            var Khachhang = CrudService.getAll(apiRoute);
            $scope.searchText = '';
            Khachhang.then(function (response) {
                //debugger
                console.log(response);
                $scope.khachhangs = response.data.data;

            },
                function (error) {
                    console.log("Error: " + error);
                });


        }
        $scope.GetKhachhang();

        $scope.GetStudentByID = function (dataModel) {
            //debugger
            var apiRoute = baseUrl + 'GetKhachhangByID';
            var student = CrudService.getbyID(apiRoute, dataModel.makh);
            student.then(function (response) {
                $scope.makh = response.data.data.makh;
                $scope.tenkh = response.data.data.tenkh;
                $scope.gioitinh = response.data.data.gioitinh;
                $scope.namsinh = response.data.data.namsinh;
                $scope.diachi = response.data.data.diachi;
                $scope.sdt = response.data.data.sdt;
                $scope.email = response.data.data.email;
                $scope.created_at = response.data.data.created_at;
                //$scope.Created_at = response.data.data.Created_at;
                //$scope.Updated_at = response.data.data.Updated_at;
                $scope.btnText = "Update";
            },
                function (error) {
                    console.log("Error: " + error);
                });
        }

        $scope.DeleteKhachhang = function (dataModel) {
            // debugger
            if (!confirm("Bạn có muốn xóa khách hàng: " + dataModel.tenkh + " không?")) {
                return;
            }
            var apiRoute = baseUrl + 'DeleteKhachhang/';
            var DeleteKhachhang = CrudService.getbyID(apiRoute, dataModel.makh);
            DeleteKhachhang.then(function (response) {
                if (response.data != "") {
                    alert("Data Delete Successfully");
                    $scope.GetKhachhang();
                    $scope.Clear();

                } else {
                    alert("Some error");
                }

            }, function (error) {
                console.log("Error: " + error);
            });
        }
        //
        //$scope.DeleteKhachhang = function (dataModel) {
        //    debugger
        //    var apiRoute = baseUrl + 'DeleteKhachhang' + dataModel.makh;
        //    var deleteKhachhang = CrudService.delete(apiRoute);
        //    deleteKhachhang.then(function (response) {
        //        if (response.data != "") {
        //            alert("Data Delete Successfully");
        //            $scope.GetKhachhang();
        //            $scope.Clear();

        //        } else {
        //            alert("Some error");
        //        }

        //    }, function (error) {
        //        console.log("Error: " + error);
        //    });
        //}

        $scope.Clear = function () {
            $scope.makh = 0;
            $scope.tenkh = "";
            $scope.gioitinh = "";
            $scope.namsinh = "";
            $scope.diachi = "";
            $scope.sdt = "";
            $scope.email = "";
            $scope.created_at = "";
            /*$scope.Updated_at = "";*/
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