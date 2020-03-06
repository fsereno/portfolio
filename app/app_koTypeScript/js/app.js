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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvU3RhdHVzTGl0ZXJhbHMudHMiLCJNb2RlbHMvVXNlclZpZXdNb2RlbC50cyIsIk1vZGVscy91c2VyTW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7O0FDSDVCO0lBSUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJ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QUVyQyxnQkFBZ0IsQ0FDbkIsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O0FDaEJ2QixhQUFhLENBQUE7OztBQUdiO0lBRUk7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxLQUFLLEVBQUUsT0FBTztZQUM3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL1VzZXJWaWV3TW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcblxuICAgIHByaXZhdGUgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJlZGl0Rm9ybVwiO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gXCJlZGl0TW9kYWxcIjtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgc2VsZi5iaW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybSh0aGlzLmZvcm1JZCwgbnVsbCk7XG4gICAgfVxuICAgIGJpbmQoKSB7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3MoXG4gICAgICAgICAgICBuZXcgVXNlclZpZXdNb2RlbChcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1JZCwgXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWxJZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9ICAgIFxufSIsImV4cG9ydCBjbGFzcyBTdGF0dXNMaXRlcmFscyB7XG4gICAgaW5hY3RpdmU6IHN0cmluZztcbiAgICBwZW5kaW5nOiBzdHJpbmc7XG4gICAgYWN0aXZlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5hY3RpdmUgPSBcIkluYWN0aXZlXCI7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IFwiUGVuZGluZ1wiO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IFwiQWN0aXZlXCI7XG4gICAgfVxufSIsImltcG9ydCB7IHVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXJNb2RlbFwiO1xuaW1wb3J0IHsgU3RhdHVzTGl0ZXJhbHMgfSBmcm9tIFwiLi9TdGF0dXNMaXRlcmFsc1wiO1xuZXhwb3J0IGNsYXNzIFVzZXJWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgY29udGV4dDogdXNlck1vZGVsO1xuICAgIHByaXZhdGUgc3RhdHVzTGl0ZXJhbHM6IFN0YXR1c0xpdGVyYWxzO1xuICAgIHB1YmxpYyB1c2Vyc0NvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHVzZXJNb2RlbD47XG4gICAgcHVibGljIHN0YXR1c0NvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHN0cmluZz47XG4gICAgcHVibGljIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHB1YmxpYyBhZ2U6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHB1YmxpYyBhY3RpdmU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwdWJsaWMgc3RhdHVzOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1JZDogc3RyaW5nLCBlZGl0TW9kYWxJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gZm9ybUlkO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gZWRpdE1vZGFsSWQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdHVzTGl0ZXJhbHMgPSBuZXcgU3RhdHVzTGl0ZXJhbHMoKTtcbiAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PHVzZXJNb2RlbD4oKSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbiA9IGtvLm9ic2VydmFibGVBcnJheShuZXcgQXJyYXk8c3RyaW5nPigpKTtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKDApO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGtvLm9ic2VydmFibGUodGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcnMoKTtcbiAgICAgICAgdGhpcy5nZXRTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkphbWVzIEJvbmRcIiwgMjMsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMzQsIGZhbHNlLCB0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uLnB1c2godGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMucGVuZGluZyk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29sbGVjdGlvbi5wdXNoKHRoaXMuc3RhdHVzTGl0ZXJhbHMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlID0gKGl0ZW06IHVzZXJNb2RlbCkgPT4gdGhpcy5jb250ZXh0ID0gaXRlbTtcblxuICAgIHB1YmxpYyByZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy51c2Vyc0NvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmNvbnRleHQpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnJlbW92ZSh0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVsYXRlRWRpdCA9IChpdGVtOiB1c2VyTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gaXRlbTtcbiAgICAgICAgdGhpcy5uYW1lKGl0ZW0ubmFtZSk7XG4gICAgICAgIHRoaXMuYWdlKGl0ZW0uYWdlKTtcbiAgICAgICAgdGhpcy5hY3RpdmUoaXRlbS5hY3RpdmUpO1xuICAgICAgICB0aGlzLnN0YXR1cyhpdGVtLnN0YXR1cylcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubmFtZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UoMCk7XG4gICAgICAgIHRoaXMuYWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0dXModGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlRWRpdCA9ICgpID0+IGpRdWVyeShcIiNcIiArIHRoaXMuZWRpdE1vZGFsSWQpLm1vZGFsKFwiaGlkZVwiKTtcblxuICAgIHB1YmxpYyB0b2dnbGVTdGF0dXMgPSAoaXRlbTogdXNlck1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMucG9wdWxhdGVFZGl0KGl0ZW0pO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChqUXVlcnkoXCIjXCIgKyB0aGlzLmZvcm1JZCkudmFsaWQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlcnNDb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jb250ZXh0KSA+IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlID0gbmV3IHVzZXJNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWdlKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzKCkpXG4gICAgICAgICAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucmVwbGFjZSh0aGlzLmNvbnRleHQsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZ2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cygpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyB1c2VyTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgc3RhdHVzOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBhZ2U6IG51bWJlcixcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICBzdGF0dXM6IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJcInVzZSBzdHJpY3Q7XCJcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIiArIGZvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
