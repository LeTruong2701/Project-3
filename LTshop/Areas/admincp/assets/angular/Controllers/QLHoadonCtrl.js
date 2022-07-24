app.controller('HoadonCtrl', ['$scope', 'CrudService',
    function ($scope, CrudService) {

        // Base Url 
        var baseUrl = '/admincp/QLHoadon/';
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
            var hoadon = {
                tenkh: $scope.tenkh,
                
                diachi: $scope.diachi,
                sdt: $scope.sdt,
                tongtien: $scope.tongtien,
                ghichu: $scope.ghichu,
                created_at: $scope.created_at,
                //Updated_at: $scope.Updated_at,
                //Remember_Token: $scope.Remember_Token,
                mahdb: $scope.mahdb
            }
            if ($scope.btnText == "Save") {
                var apiRoute = baseUrl + 'SaveHoadon';
                var saveHoadon = CrudService.post(apiRoute, hoadon);
                saveHoadon.then(function (response) {
                    if (response.data != "") {
                        alert("Data Save Successfully");
                        $scope.GetHoadon();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
            else {
                var apiRoute = baseUrl + 'UpdateHoadon';
                var UpdateHoadon = CrudService.post(apiRoute, hoadon);
                UpdateHoadon.then(function (response) {
                    if (response.data != "") {
                        alert("Data Update Successfully");
                        $scope.GetHoadon();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }


        $scope.GetHoadon = function () {
            var apiRoute = baseUrl + 'getAllData';
            var Hoadon = CrudService.getAll(apiRoute);
            $scope.searchText = '';
            Hoadon.then(function (response) {
                //debugger
                console.log(response);
                $scope.hoadonbans = response.data.data;

            },
                function (error) {
                    console.log("Error: " + error);
                });


        }
        $scope.GetHoadon();

        $scope.GetHoadonByID = function (dataModel) {
            //debugger
            var apiRoute = baseUrl + 'GetHoadonByID';
            var hoadon = CrudService.getbyID(apiRoute, dataModel.mahdb);
            hoadon.then(function (response) {
                $scope.mahdb = response.data.data.mahdb;
                $scope.tenkh = response.data.data.tenkh;
               
                $scope.diachi = response.data.data.diachi;
                $scope.sdt = response.data.data.sdt;
                $scope.tongtien = response.data.data.tongtien;
                $scope.created_at = response.data.data.created_at;
                $scope.ghichu = response.data.data.ghichu;
                //$scope.Created_at = response.data.data.Created_at;
                //$scope.Updated_at = response.data.data.Updated_at;
                $scope.btnText = "Update";
            },
                function (error) {
                    console.log("Error: " + error);
                });
        }

        $scope.DeleteHoadon = function (dataModel) {
            // debugger
            if (!confirm("Bạn có muốn xóa hóa đơn: " + dataModel.tenkh + " không?")) {
                return;
            }
            var apiRoute = baseUrl + 'DeleteHoadon/';
            var DeleteHoadon = CrudService.getbyID(apiRoute, dataModel.mahdb);
            DeleteHoadon.then(function (response) {
                if (response.data != "") {
                    alert("Data Delete Successfully");
                    $scope.GetHoadon();
                    $scope.Clear();

                } else {
                    alert("Some error");
                }

            }, function (error) {
                console.log("Error: " + error);
            });
        }
        //
        

        $scope.Clear = function () {
            $scope.mahdb = 0;
            $scope.tenkh = "";
       
            $scope.diachi = "";
            $scope.sdt = "";
            $scope.tongtien = 0;
            $scope.created_at = "";
            $scope.ghichu = "";
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