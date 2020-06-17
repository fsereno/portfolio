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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvU3RhdHVzTGl0ZXJhbHMudHMiLCJNb2RlbHMvVXNlclZpZXdNb2RlbC50cyIsIk1vZGVscy91c2VyTW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7QUNINUI7SUFJSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTCxxQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksd0NBQWM7Ozs7QUNBM0IseUNBQXdDO0FBQ3hDLG1EQUFrRDtBQUNsRDtJQVlJLHVCQUFZLE1BQWMsRUFBRSxXQUFtQjtRQUEvQyxpQkFhQztRQWFNLFdBQU0sR0FBRyxVQUFDLElBQWUsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFuQixDQUFtQixDQUFDO1FBRWxELGtCQUFhLEdBQUc7WUFDbkIsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QztRQUNMLENBQUMsQ0FBQTtRQUVNLGlCQUFZLEdBQUcsVUFBQyxJQUFlO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQTtRQUVNLFVBQUssR0FBRztZQUNYLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZCxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFBO1FBRU0sY0FBUyxHQUFHLGNBQU0sT0FBQSxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQTVDLENBQTRDLENBQUM7UUFFL0QsaUJBQVksR0FBRyxVQUFDLElBQWU7WUFDbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBRU0sV0FBTSxHQUFHO1lBQ1osSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3VCQUM1QyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFTLENBQ3ZCLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFDWCxLQUFJLENBQUMsR0FBRyxFQUFFLEVBQ1YsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUNiLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO29CQUNsQixLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNwRCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILElBQUksS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTt3QkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUNuQyxLQUFJLENBQUMsSUFBSSxFQUFFLEVBQ1gsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUNWLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFDYixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7cUJBQ3BCO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLENBQUE7UUE3RUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLEVBQWEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxFQUFVLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUF1REwsb0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLHNDQUFhOzs7O0FDRjFCO0lBS0ksbUJBQ0ksSUFBWSxFQUNaLEdBQVcsRUFDWCxNQUFlLEVBQ2YsTUFBYztRQUVkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSw4QkFBUzs7OztBQ0N0QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCwrRUFBOEU7QUFFOUUsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLGdCQUFnQixDQUNuQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOztBQ2hCdkIsYUFBYSxDQUFBOzs7QUFHYjtJQUVJO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87WUFDN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvVXNlclZpZXdNb2RlbFwiO1xyXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcclxuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3JcclxuICAgIChcclxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSBcclxuICAgICkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlID0gdmFsaWRhdG9yU2VydmljZTtcclxuICAgICAgICB0aGlzLmZvcm1JZCA9IFwiZWRpdEZvcm1cIjtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gXCJlZGl0TW9kYWxcIjtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgc2VsZi5iaW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZUZvcm0oKXtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKHRoaXMuZm9ybUlkLCBudWxsKTtcclxuICAgIH1cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyhcclxuICAgICAgICAgICAgbmV3IFVzZXJWaWV3TW9kZWwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1JZCwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRNb2RhbElkXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH0gICAgXHJcbn0iLCJleHBvcnQgY2xhc3MgU3RhdHVzTGl0ZXJhbHMge1xyXG4gICAgaW5hY3RpdmU6IHN0cmluZztcclxuICAgIHBlbmRpbmc6IHN0cmluZztcclxuICAgIGFjdGl2ZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbmFjdGl2ZSA9IFwiSW5hY3RpdmVcIjtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBcIlBlbmRpbmdcIjtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IFwiQWN0aXZlXCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB1c2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyTW9kZWxcIjtcclxuaW1wb3J0IHsgU3RhdHVzTGl0ZXJhbHMgfSBmcm9tIFwiLi9TdGF0dXNMaXRlcmFsc1wiO1xyXG5leHBvcnQgY2xhc3MgVXNlclZpZXdNb2RlbCB7XHJcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiB1c2VyTW9kZWw7XHJcbiAgICBwcml2YXRlIHN0YXR1c0xpdGVyYWxzOiBTdGF0dXNMaXRlcmFscztcclxuICAgIHB1YmxpYyB1c2Vyc0NvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHVzZXJNb2RlbD47XHJcbiAgICBwdWJsaWMgc3RhdHVzQ29sbGVjdGlvbjogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBuYW1lOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBhZ2U6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgcHVibGljIGFjdGl2ZTogS25vY2tvdXRPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIHN0YXR1czogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZm9ybUlkOiBzdHJpbmcsIGVkaXRNb2RhbElkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmZvcm1JZCA9IGZvcm1JZDtcclxuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gZWRpdE1vZGFsSWQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0YXR1c0xpdGVyYWxzID0gbmV3IFN0YXR1c0xpdGVyYWxzKCk7XHJcbiAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PHVzZXJNb2RlbD4oKSk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTxzdHJpbmc+KCkpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKDApO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBrby5vYnNlcnZhYmxlKHRoaXMuc3RhdHVzTGl0ZXJhbHMuaW5hY3RpdmUpO1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcnMoKTtcclxuICAgICAgICB0aGlzLmdldFN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVc2VycygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJzQ29sbGVjdGlvbi5wdXNoKG5ldyB1c2VyTW9kZWwoXCJKYW1lcyBCb25kXCIsIDIzLCBmYWxzZSwgdGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSkpO1xyXG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMzQsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXR1cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0NvbGxlY3Rpb24ucHVzaCh0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKTtcclxuICAgICAgICB0aGlzLnN0YXR1c0NvbGxlY3Rpb24ucHVzaCh0aGlzLnN0YXR1c0xpdGVyYWxzLnBlbmRpbmcpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMuYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlID0gKGl0ZW06IHVzZXJNb2RlbCkgPT4gdGhpcy5jb250ZXh0ID0gaXRlbTtcclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQ29uZmlybSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy51c2Vyc0NvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmNvbnRleHQpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucmVtb3ZlKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3B1bGF0ZUVkaXQgPSAoaXRlbTogdXNlck1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gaXRlbTtcclxuICAgICAgICB0aGlzLm5hbWUoaXRlbS5uYW1lKTtcclxuICAgICAgICB0aGlzLmFnZShpdGVtLmFnZSk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUoaXRlbS5hY3RpdmUpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzKGl0ZW0uc3RhdHVzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5hbWUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5hZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzKHRoaXMuc3RhdHVzTGl0ZXJhbHMuaW5hY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUVkaXQgPSAoKSA9PiBqUXVlcnkoXCIjXCIgKyB0aGlzLmVkaXRNb2RhbElkKS5tb2RhbChcImhpZGVcIik7XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVN0YXR1cyA9IChpdGVtOiB1c2VyTW9kZWwpID0+IHtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlRWRpdChpdGVtKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGpRdWVyeShcIiNcIiArIHRoaXMuZm9ybUlkKS52YWxpZCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJzQ29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY29udGV4dCkgPiAtMVxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2UgPSBuZXcgdXNlck1vZGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWdlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cygpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucmVwbGFjZSh0aGlzLmNvbnRleHQsIHJlcGxhY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVkaXQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucHVzaChuZXcgdXNlck1vZGVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgdXNlck1vZGVsIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGFnZTogbnVtYmVyO1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgc3RhdHVzOiBzdHJpbmdcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBhZ2U6IG51bWJlcixcclxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXHJcbiAgICAgICAgc3RhdHVzOiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8gQ29udHJvbGxlcnNcclxuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xyXG5cclxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxyXG5sZXQgdmFsaWRhdG9yU2VydmljZSA9IG5ldyBWYWxpZGF0b3JTZXJ2aWNlKCk7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxyXG4oXHJcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXHJcbik7XHJcblxyXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsIlwidXNlIHN0cmljdDtcIlxyXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBqUXVlcnkudmFsaWRhdG9yLmFkZE1ldGhvZChcIm5vbk51bWVyaWNcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcclxuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiICsgZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xyXG4gICAgfVxyXG59Il19
