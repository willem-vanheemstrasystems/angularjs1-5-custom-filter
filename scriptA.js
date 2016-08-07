var myApp = angular
    .module("myModule", [])
    .filter("gender", function(){
        return function(gender) {
            switch(gender) {
                case 1:
                    return "Male"
                case 2:
                    return "Female"
                case 3:
                    return "Not disclosed"
                default:
                    return "Undefined"
            }
        }
    })
    .controller("myController", function($scope) {
        // Create a model
        var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: 1, salary: 55000.788, city: "London" },
            { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: 2, salary: 68000, city: "Chennai" },
            { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: 1, salary: 57000, city: "London" },
            { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: 2, salary: 53000, city: "Chennai" },
            { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: 3, salary: 60000, city: "London" }
        ];
        // Attach the model to the scope
        $scope.employees = employees;

    });

