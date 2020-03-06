(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserViewModel_1 = require("../Models/UserViewModel");
var IndexController = /** @class */ (function () {
    function IndexController(validatorService) {
        this.validatorService = validatorService;
        this.formId = "editForm";
        this.editModalId = "editModal";
    }
    IndexController.prototype.init = function () {
        var self = this;
        jQuery(function () {
            self.validateForm();
            self.bind();
        });
    };
    IndexController.prototype.validateForm = function () {
        this.validatorService.ValidateForm(this.formId, null);
    };
    IndexController.prototype.bind = function () {
        ko.applyBindings(new UserViewModel_1.UserViewModel(this.formId, this.editModalId));
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{"../Models/UserViewModel":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusLiterals = /** @class */ (function () {
    function StatusLiterals() {
        this.inactive = "Inactive";
        this.pending = "Pending";
        this.active = "Active";
    }
    return StatusLiterals;
}());
exports.StatusLiterals = StatusLiterals;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = require("./userModel");
var StatusLiterals_1 = require("./StatusLiterals");
var UserViewModel = /** @class */ (function () {
    function UserViewModel(formId, editModalId) {
        var _this = this;
        this.remove = function (item) { return _this.context = item; };
        this.removeConfirm = function () {
            if (_this.usersCollection.indexOf(_this.context) > -1) {
                _this.usersCollection.remove(_this.context);
            }
        };
        this.populateEdit = function (item) {
            _this.context = item;
            _this.name(item.name);
            _this.age(item.age);
            _this.active(item.active);
            _this.status(item.status);
        };
        this.clear = function () {
            _this.name("");
            _this.age(0);
            _this.active(false);
            _this.status(_this.statusLiterals.inactive);
        };
        this.closeEdit = function () { return jQuery("#" + _this.editModalId).modal("hide"); };
        this.toggleStatus = function (item) {
            _this.populateEdit(item);
            _this.update();
        };
        this.update = function () {
            if (jQuery("#" + _this.formId).valid()) {
                if (_this.usersCollection.indexOf(_this.context) > -1
                    && _this.name().length > 0 && _this.age() > 0) {
                    var replace = new userModel_1.userModel(_this.name(), _this.age(), _this.active(), _this.status());
                    _this.usersCollection.replace(_this.context, replace);
                    _this.closeEdit();
                }
                else {
                    if (_this.name().length > 0 && _this.age() > 0) {
                        _this.usersCollection.push(new userModel_1.userModel(_this.name(), _this.age(), _this.active(), _this.status()));
                        _this.closeEdit();
                    }
                }
            }
        };
        this.formId = formId;
        this.editModalId = editModalId;
        this.context = null;
        this.statusLiterals = new StatusLiterals_1.StatusLiterals();
        this.usersCollection = ko.observableArray(new Array());
        this.statusCollection = ko.observableArray(new Array());
        this.name = ko.observable("");
        this.age = ko.observable(0);
        this.active = ko.observable(false);
        this.status = ko.observable(this.statusLiterals.inactive);
        this.getUsers();
        this.getStatus();
    }
    UserViewModel.prototype.getUsers = function () {
        this.usersCollection.push(new userModel_1.userModel("James Bond", 23, false, this.statusLiterals.inactive));
        this.usersCollection.push(new userModel_1.userModel("Joe Bloggs", 34, false, this.statusLiterals.inactive));
    };
    UserViewModel.prototype.getStatus = function () {
        this.statusCollection.push(this.statusLiterals.inactive);
        this.statusCollection.push(this.statusLiterals.pending);
        this.statusCollection.push(this.statusLiterals.active);
    };
    return UserViewModel;
}());
exports.UserViewModel = UserViewModel;

},{"./StatusLiterals":2,"./userModel":4}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userModel = /** @class */ (function () {
    function userModel(name, age, active, status) {
        this.name = name;
        this.age = age;
        this.active = active;
        this.status = status;
    }
    return userModel;
}());
exports.userModel = userModel;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
// Services
var validatorService_1 = require("../../typeScript/Services/validatorService");
// Instantiate Services with dependency injection
var validatorService = new validatorService_1.ValidatorService();
// Controllers
var indexController = new IndexController_1.IndexController(validatorService);
indexController.init();

},{"../../typeScript/Services/validatorService":6,"./Controllers/IndexController":1}],6:[function(require,module,exports){
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
        jQuery.validator.addMethod("nonNumeric", function (value, element) {
            return this.optional(element) || isNaN(Number(value));
        });
    }
    ValidatorService.prototype.ValidateForm = function (formId, options) {
        var validator = jQuery("#" + formId).validate(options);
        return validator;
    };
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvU3RhdHVzTGl0ZXJhbHMudHMiLCJNb2RlbHMvVXNlclZpZXdNb2RlbC50cyIsIk1vZGVscy91c2VyTW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7O0FDSDVCO0lBSUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjOzs7OztBQ0EzQix5Q0FBd0M7QUFDeEMsbURBQWtEO0FBQ2xEO0lBWUksdUJBQVksTUFBYyxFQUFFLFdBQW1CO1FBQS9DLGlCQWFDO1FBYU0sV0FBTSxHQUFHLFVBQUMsSUFBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQW5CLENBQW1CLENBQUM7UUFFbEQsa0JBQWEsR0FBRztZQUNuQixJQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDaEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxDQUFBO1FBRU0saUJBQVksR0FBRyxVQUFDLElBQWU7WUFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFBO1FBRU0sVUFBSyxHQUFHO1lBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7UUFFTSxjQUFTLEdBQUcsY0FBTSxPQUFBLE1BQU0sQ0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztRQUU3RCxpQkFBWSxHQUFHLFVBQUMsSUFBZTtZQUNsQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUE7UUFFTSxXQUFNLEdBQUc7WUFDWixJQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDO2dCQUMvQixJQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7dUJBQzNDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQVMsQ0FDWCxLQUFJLENBQUMsSUFBSSxFQUFFLEVBQ1gsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUNWLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFDYixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtvQkFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDcEQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxJQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7d0JBQ3pDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVMsQ0FDbkMsS0FBSSxDQUFDLElBQUksRUFBRSxFQUNYLEtBQUksQ0FBQyxHQUFHLEVBQUUsRUFDVixLQUFJLENBQUMsTUFBTSxFQUFFLEVBQ2IsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUNwQjtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxDQUFBO1FBN0VHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxFQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssRUFBVSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sZ0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBdURMLG9CQUFDO0FBQUQsQ0EzRkEsQUEyRkMsSUFBQTtBQTNGWSxzQ0FBYTs7Ozs7QUNGMUI7SUFLSSxtQkFDSSxJQUFZLEVBQ1osR0FBVyxFQUNYLE1BQWUsRUFDZixNQUFjO1FBRWQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLDhCQUFTOzs7OztBQ0N0QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCwrRUFBOEU7QUFFOUUsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLGdCQUFnQixDQUNuQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7QUNoQnZCLGFBQWEsQ0FBQTs7O0FBR2I7SUFFSTtRQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLEtBQUssRUFBRSxPQUFPO1lBQzdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxPQUEyQztRQUNwRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvVXNlclZpZXdNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZWRpdE1vZGFsSWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlID0gdmFsaWRhdG9yU2VydmljZTtcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBcImVkaXRGb3JtXCI7XG4gICAgICAgIHRoaXMuZWRpdE1vZGFsSWQgPSBcImVkaXRNb2RhbFwiO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudmFsaWRhdGVGb3JtKCk7XG4gICAgICAgICAgICBzZWxmLmJpbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhbGlkYXRlRm9ybSgpe1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKHRoaXMuZm9ybUlkLCBudWxsKTtcbiAgICB9XG4gICAgYmluZCgpIHtcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyhcbiAgICAgICAgICAgIG5ldyBVc2VyVmlld01vZGVsKFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUlkLCBcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRNb2RhbElkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0gICAgXG59IiwiZXhwb3J0IGNsYXNzIFN0YXR1c0xpdGVyYWxzIHtcbiAgICBpbmFjdGl2ZTogc3RyaW5nO1xuICAgIHBlbmRpbmc6IHN0cmluZztcbiAgICBhY3RpdmU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZSA9IFwiSW5hY3RpdmVcIjtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gXCJQZW5kaW5nXCI7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gXCJBY3RpdmVcIjtcbiAgICB9XG59IiwiaW1wb3J0IHsgdXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlck1vZGVsXCI7XG5pbXBvcnQgeyBTdGF0dXNMaXRlcmFscyB9IGZyb20gXCIuL1N0YXR1c0xpdGVyYWxzXCI7XG5leHBvcnQgY2xhc3MgVXNlclZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiB1c2VyTW9kZWw7XG4gICAgcHJpdmF0ZSBzdGF0dXNMaXRlcmFsczogU3RhdHVzTGl0ZXJhbHM7XG4gICAgcHVibGljIHVzZXJzQ29sbGVjdGlvbjogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8dXNlck1vZGVsPjtcbiAgICBwdWJsaWMgc3RhdHVzQ29sbGVjdGlvbjogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMgbmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHVibGljIGFnZTogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgcHVibGljIGFjdGl2ZTogS25vY2tvdXRPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHB1YmxpYyBzdGF0dXM6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybUlkOiBzdHJpbmcsIGVkaXRNb2RhbElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBmb3JtSWQ7XG4gICAgICAgIHRoaXMuZWRpdE1vZGFsSWQgPSBlZGl0TW9kYWxJZDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0dXNMaXRlcmFscyA9IG5ldyBTdGF0dXNMaXRlcmFscygpO1xuICAgICAgICB0aGlzLnVzZXJzQ29sbGVjdGlvbiA9IGtvLm9ic2VydmFibGVBcnJheShuZXcgQXJyYXk8dXNlck1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTxzdHJpbmc+KCkpO1xuICAgICAgICB0aGlzLm5hbWUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmFnZSA9IGtvLm9ic2VydmFibGUoMCk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0ga28ub2JzZXJ2YWJsZSh0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKTtcbiAgICAgICAgdGhpcy5nZXRVc2VycygpO1xuICAgICAgICB0aGlzLmdldFN0YXR1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VycygpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkphbWVzIEJvbmRcIiwgMjMsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMzQsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uLnB1c2godGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMucGVuZGluZyk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlID0gKGl0ZW06IHVzZXJNb2RlbCkgPT4gdGhpcy5jb250ZXh0ID0gaXRlbTtcblxuICAgIHB1YmxpYyByZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnVzZXJzQ29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY29udGV4dCkgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucmVtb3ZlKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVFZGl0ID0gKGl0ZW06IHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBpdGVtO1xuICAgICAgICB0aGlzLm5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UoaXRlbS5hZ2UpO1xuICAgICAgICB0aGlzLmFjdGl2ZShpdGVtLmFjdGl2ZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzKGl0ZW0uc3RhdHVzKVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5uYW1lKFwiXCIpO1xuICAgICAgICB0aGlzLmFnZSgwKTtcbiAgICAgICAgdGhpcy5hY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnN0YXR1cyh0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VFZGl0ID0gKCkgPT4galF1ZXJ5KFwiI1wiK3RoaXMuZWRpdE1vZGFsSWQpLm1vZGFsKFwiaGlkZVwiKTtcblxuICAgIHB1YmxpYyB0b2dnbGVTdGF0dXMgPSAoaXRlbTogdXNlck1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMucG9wdWxhdGVFZGl0KGl0ZW0pO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKGpRdWVyeShcIiNcIit0aGlzLmZvcm1JZCkudmFsaWQoKSl7XG4gICAgICAgICAgICBpZih0aGlzLnVzZXJzQ29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY29udGV4dCkgPiAtMVxuICAgICAgICAgICAgICAgICYmIHRoaXMubmFtZSgpLmxlbmd0aCA+IDAgJiYgdGhpcy5hZ2UoKSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZSA9IG5ldyB1c2VyTW9kZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFnZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cygpKVxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnJlcGxhY2UodGhpcy5jb250ZXh0LCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZ2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cygpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyB1c2VyTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgc3RhdHVzOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBhZ2U6IG51bWJlcixcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICBzdGF0dXM6IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJcInVzZSBzdHJpY3Q7XCJcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIiArIGZvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
