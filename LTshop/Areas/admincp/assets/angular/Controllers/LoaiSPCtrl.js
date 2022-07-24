app.controller('LoaiSPCtrl', ['$scope', 'CrudService',
    function ($scope, CrudService) {

        // Base Url 
        var baseUrl = '/admincp/LoaiSP/';
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
            var loaiSP = {
                tenloaisp: $scope.tenloaisp,
                
                created_at: $scope.created_at,
                //Updated_at: $scope.Updated_at,
                maloaisp: $scope.maloai
            }
            var loaiSPud = {
                tenloaisp: $scope.tenloaisp,

                created_at: $scope.Created_at,
                updated_at: $scope.updated_at,
                maloaisp: $scope.maloai
            }
            if ($scope.btnText == "Save") {
                var apiRoute = baseUrl + 'SaveLoaiSP';
                var saveStudent = CrudService.post(apiRoute, loaiSP);
                saveStudent.then(function (response) {
                    if (response.data != "") {
                        alert("Data Save Successfully");
                        $scope.GetLoaiSP();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
            else {
                var apiRoute = baseUrl + 'UpdateLoaiSP';
                var UpdateLoaiSP = CrudService.post(apiRoute, loaiSPud);
                UpdateLoaiSP.then(function (response) {
                    if (response.data != "") {
                        alert("Data Update Successfully");
                        $scope.GetLoaiSP();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }


        $scope.GetLoaiSP = function () {
            var apiRoute = baseUrl + 'getAllData';
            var LoaiSP = CrudService.getAll(apiRoute);
            LoaiSP.then(function (response) {
                //debugger
                console.log(response);
                $scope.loaisps = response.data.data;

            },
                function (error) {
                    console.log("Error: " + error);
                });


        }
        $scope.GetLoaiSP();

        $scope.GetLoaiSPByID = function (dataModel) {
            //debugger
            var apiRoute = baseUrl + 'GetLoaiSPByID';
            var Loaispbyid = CrudService.getbyID(apiRoute, dataModel.maloaisp);
            Loaispbyid.then(function (response) {
                $scope.maloaisp = response.data.data.maloaisp;
                $scope.tenloaisp = response.data.data.tenloaisp;
                
                $scope.created_at = response.data.data.created_at;
                $scope.updated_at = response.data.data.updated_at;
                $scope.btnText = "Update";
            },
                function (error) {
                    console.log("Error: " + error);
                });
        }

        $scope.DeleteLoaiSP = function (dataModel) {
            // debugger
            if (!confirm("Bạn có muốn xóa loại sản phẩm " + dataModel.tenloaisp + " không?")) {
                return;
            }
            var apiRoute = baseUrl + 'DeleteLoaiSP/';
            var deleteLoaiSP = CrudService.getbyID(apiRoute, dataModel.maloaisp);
            deleteLoaiSP.then(function (response) {
                if (response.data != "") {
                    alert("Data Delete Successfully");
                    $scope.GetLoaiSP();
                    $scope.Clear();

                } else {
                    alert("Some error");
                }

            }, function (error) {
                console.log("Error: " + error);
            });
        }
        $scope.Clear = function () {
            $scope.maloaisp = "";
            $scope.tenloai = "";
           
            $scope.created_at = "";
            $scope.updated_at = "";
            $scope.btnText = "Save";
        }

    }]);

app.directive('date', function (dateFilter) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {

            var dateFormat = attrs['date'] || 'yyyy-MM-dd';

            ctrl.$formatters.unshift(function (modelValue) {
                return dateFilter(modelValue, dateFormat);
            });
        }
    };
})