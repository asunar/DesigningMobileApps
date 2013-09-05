var MemoryAdapter = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var employees = [
{"id": "1", "firstName": "Michael", "lastName": "Koby", "intro": "Host" },
{"id": "2", "firstName": "Alper", "lastName": "Sunar", "intro": "Speaker" },
{"id": "3", "firstName": "Julio", "lastName": "", "intro": "Interactive Developer" },
{"id": "4", "firstName": "Bill", "lastName": "Cravens", "intro": "Web developer since 1998 using a variety of languages..." },
{"id": "5", "firstName": "Conscious", "lastName": "Existentialist", "intro": "Using just four or so APIs" }   ];

}
