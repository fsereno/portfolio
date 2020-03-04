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
            if (_this.usersCollection.indexOf(_this.context) > -1)
                _this.usersCollection.remove(_this.context);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvU3RhdHVzTGl0ZXJhbHMudHMiLCJNb2RlbHMvVXNlclZpZXdNb2RlbC50cyIsIk1vZGVscy91c2VyTW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7O0FDSDVCO0lBSUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJ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LENBQ25CLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7OztBQ2hCdkIsYUFBYSxDQUFBOzs7QUFHYjtJQUVJO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87WUFDN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyVmlld01vZGVsIH0gZnJvbSBcIi4uL01vZGVscy9Vc2VyVmlld01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmZvcm1JZCA9IFwiZWRpdEZvcm1cIjtcbiAgICAgICAgdGhpcy5lZGl0TW9kYWxJZCA9IFwiZWRpdE1vZGFsXCI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgIHNlbGYuYmluZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0odGhpcy5mb3JtSWQsIG51bGwpO1xuICAgIH1cbiAgICBiaW5kKCkge1xuICAgICAgICBrby5hcHBseUJpbmRpbmdzKFxuICAgICAgICAgICAgbmV3IFVzZXJWaWV3TW9kZWwoXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtSWQsIFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGFsSWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSAgICBcbn0iLCJleHBvcnQgY2xhc3MgU3RhdHVzTGl0ZXJhbHMge1xuICAgIGluYWN0aXZlOiBzdHJpbmc7XG4gICAgcGVuZGluZzogc3RyaW5nO1xuICAgIGFjdGl2ZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluYWN0aXZlID0gXCJJbmFjdGl2ZVwiO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBcIlBlbmRpbmdcIjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBcIkFjdGl2ZVwiO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB1c2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyTW9kZWxcIjtcbmltcG9ydCB7IFN0YXR1c0xpdGVyYWxzIH0gZnJvbSBcIi4vU3RhdHVzTGl0ZXJhbHNcIjtcbmV4cG9ydCBjbGFzcyBVc2VyVmlld01vZGVsIHtcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZWRpdE1vZGFsSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbnRleHQ6IHVzZXJNb2RlbDtcbiAgICBwcml2YXRlIHN0YXR1c0xpdGVyYWxzOiBTdGF0dXNMaXRlcmFscztcbiAgICBwdWJsaWMgdXNlcnNDb2xsZWN0aW9uOiBLbm9ja291dE9ic2VydmFibGVBcnJheTx1c2VyTW9kZWw+O1xuICAgIHB1YmxpYyBzdGF0dXNDb2xsZWN0aW9uOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBuYW1lOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwdWJsaWMgYWdlOiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBwdWJsaWMgYWN0aXZlOiBLbm9ja291dE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHVibGljIHN0YXR1czogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgXG4gICAgY29uc3RydWN0b3IoZm9ybUlkOiBzdHJpbmcsIGVkaXRNb2RhbElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBmb3JtSWQ7XG4gICAgICAgIHRoaXMuZWRpdE1vZGFsSWQgPSBlZGl0TW9kYWxJZDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0dXNMaXRlcmFscyA9IG5ldyBTdGF0dXNMaXRlcmFscygpO1xuICAgICAgICB0aGlzLnVzZXJzQ29sbGVjdGlvbiA9IGtvLm9ic2VydmFibGVBcnJheShuZXcgQXJyYXk8dXNlck1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTxzdHJpbmc+KCkpO1xuICAgICAgICB0aGlzLm5hbWUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmFnZSA9IGtvLm9ic2VydmFibGUoMCk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0ga28ub2JzZXJ2YWJsZSh0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKTtcbiAgICAgICAgdGhpcy5nZXRVc2VycygpO1xuICAgICAgICB0aGlzLmdldFN0YXR1cygpO1xuICAgIH0gICBcblxuICAgIHB1YmxpYyBnZXRVc2VycygpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkphbWVzIEJvbmRcIiwgMjMsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMzQsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7ICAgXG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uLnB1c2godGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMucGVuZGluZyk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlID0gKGl0ZW06IHVzZXJNb2RlbCkgPT4gdGhpcy5jb250ZXh0ID0gaXRlbTtcblxuICAgIHB1YmxpYyByZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnVzZXJzQ29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY29udGV4dCkgPiAtMSlcbiAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnJlbW92ZSh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3B1bGF0ZUVkaXQgPSAoaXRlbTogdXNlck1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGl0ZW07XG4gICAgICAgIHRoaXMubmFtZShpdGVtLm5hbWUpO1xuICAgICAgICB0aGlzLmFnZShpdGVtLmFnZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlKGl0ZW0uYWN0aXZlKTtcbiAgICAgICAgdGhpcy5zdGF0dXMoaXRlbS5zdGF0dXMpXG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm5hbWUoXCJcIik7XG4gICAgICAgIHRoaXMuYWdlKDApO1xuICAgICAgICB0aGlzLmFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzKHRoaXMuc3RhdHVzTGl0ZXJhbHMuaW5hY3RpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZUVkaXQgPSAoKSA9PiBqUXVlcnkoXCIjXCIrdGhpcy5lZGl0TW9kYWxJZCkubW9kYWwoXCJoaWRlXCIpO1xuXG4gICAgcHVibGljIHRvZ2dsZVN0YXR1cyA9IChpdGVtOiB1c2VyTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUVkaXQoaXRlbSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoalF1ZXJ5KFwiI1wiK3RoaXMuZm9ybUlkKS52YWxpZCgpKXtcbiAgICAgICAgICAgIGlmKHRoaXMudXNlcnNDb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jb250ZXh0KSA+IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlID0gbmV3IHVzZXJNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFnZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzQ29sbGVjdGlvbi5yZXBsYWNlKHRoaXMuY29udGV4dCwgcmVwbGFjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVkaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzQ29sbGVjdGlvbi5wdXNoKG5ldyB1c2VyTW9kZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFnZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cygpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyB1c2VyTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgc3RhdHVzOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcbiAgICAgICAgYWdlOiBudW1iZXIsIFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sIFxuICAgICAgICBzdGF0dXM6IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJcInVzZSBzdHJpY3Q7XCJcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIiArIGZvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
