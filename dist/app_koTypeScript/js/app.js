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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvU3RhdHVzTGl0ZXJhbHMudHMiLCJNb2RlbHMvVXNlclZpZXdNb2RlbC50cyIsIk1vZGVscy91c2VyTW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7O0FDSDVCO0lBSUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJ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LENBQ25CLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDZHZCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL1VzZXJWaWV3TW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcblxuICAgIHByaXZhdGUgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJlZGl0Rm9ybVwiO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gXCJlZGl0TW9kYWxcIjtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgc2VsZi5iaW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybSh0aGlzLmZvcm1JZCwgbnVsbCk7XG4gICAgfVxuICAgIGJpbmQoKSB7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3MoXG4gICAgICAgICAgICBuZXcgVXNlclZpZXdNb2RlbChcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1JZCwgXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWxJZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9ICAgIFxufSIsImV4cG9ydCBjbGFzcyBTdGF0dXNMaXRlcmFscyB7XG4gICAgaW5hY3RpdmU6IHN0cmluZztcbiAgICBwZW5kaW5nOiBzdHJpbmc7XG4gICAgYWN0aXZlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5hY3RpdmUgPSBcIkluYWN0aXZlXCI7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IFwiUGVuZGluZ1wiO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IFwiQWN0aXZlXCI7XG4gICAgfVxufSIsImltcG9ydCB7IHVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXJNb2RlbFwiO1xuaW1wb3J0IHsgU3RhdHVzTGl0ZXJhbHMgfSBmcm9tIFwiLi9TdGF0dXNMaXRlcmFsc1wiO1xuZXhwb3J0IGNsYXNzIFVzZXJWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgY29udGV4dDogdXNlck1vZGVsO1xuICAgIHByaXZhdGUgc3RhdHVzTGl0ZXJhbHM6IFN0YXR1c0xpdGVyYWxzO1xuICAgIHB1YmxpYyB1c2Vyc0NvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHVzZXJNb2RlbD47XG4gICAgcHVibGljIHN0YXR1c0NvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHN0cmluZz47XG4gICAgcHVibGljIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHB1YmxpYyBhZ2U6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHB1YmxpYyBhY3RpdmU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwdWJsaWMgc3RhdHVzOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihmb3JtSWQ6IHN0cmluZywgZWRpdE1vZGFsSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZvcm1JZCA9IGZvcm1JZDtcbiAgICAgICAgdGhpcy5lZGl0TW9kYWxJZCA9IGVkaXRNb2RhbElkO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXR1c0xpdGVyYWxzID0gbmV3IFN0YXR1c0xpdGVyYWxzKCk7XG4gICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTx1c2VyTW9kZWw+KCkpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PHN0cmluZz4oKSk7XG4gICAgICAgIHRoaXMubmFtZSA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMuYWdlID0ga28ub2JzZXJ2YWJsZSgwKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBrby5vYnNlcnZhYmxlKHRoaXMuc3RhdHVzTGl0ZXJhbHMuaW5hY3RpdmUpO1xuICAgICAgICB0aGlzLmdldFVzZXJzKCk7XG4gICAgICAgIHRoaXMuZ2V0U3RhdHVzKCk7XG4gICAgfSAgIFxuXG4gICAgcHVibGljIGdldFVzZXJzKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucHVzaChuZXcgdXNlck1vZGVsKFwiSmFtZXMgQm9uZFwiLCAyMywgZmFsc2UsIHRoaXMuc3RhdHVzTGl0ZXJhbHMuaW5hY3RpdmUpKTtcbiAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucHVzaChuZXcgdXNlck1vZGVsKFwiSm9lIEJsb2dnc1wiLCAzNCwgZmFsc2UsIHRoaXMuc3RhdHVzTGl0ZXJhbHMuaW5hY3RpdmUpKTsgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RhdHVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXR1c0NvbGxlY3Rpb24ucHVzaCh0aGlzLnN0YXR1c0xpdGVyYWxzLmluYWN0aXZlKTtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uLnB1c2godGhpcy5zdGF0dXNMaXRlcmFscy5wZW5kaW5nKTtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2xsZWN0aW9uLnB1c2godGhpcy5zdGF0dXNMaXRlcmFscy5hY3RpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUgPSAoaXRlbTogdXNlck1vZGVsKSA9PiB0aGlzLmNvbnRleHQgPSBpdGVtO1xuXG4gICAgcHVibGljIHJlbW92ZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMudXNlcnNDb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jb250ZXh0KSA+IC0xKVxuICAgICAgICAgICAgdGhpcy51c2Vyc0NvbGxlY3Rpb24ucmVtb3ZlKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVsYXRlRWRpdCA9IChpdGVtOiB1c2VyTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gaXRlbTtcbiAgICAgICAgdGhpcy5uYW1lKGl0ZW0ubmFtZSk7XG4gICAgICAgIHRoaXMuYWdlKGl0ZW0uYWdlKTtcbiAgICAgICAgdGhpcy5hY3RpdmUoaXRlbS5hY3RpdmUpO1xuICAgICAgICB0aGlzLnN0YXR1cyhpdGVtLnN0YXR1cylcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubmFtZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UoMCk7XG4gICAgICAgIHRoaXMuYWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0dXModGhpcy5zdGF0dXNMaXRlcmFscy5pbmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlRWRpdCA9ICgpID0+IGpRdWVyeShcIiNcIit0aGlzLmVkaXRNb2RhbElkKS5tb2RhbChcImhpZGVcIik7XG5cbiAgICBwdWJsaWMgdG9nZ2xlU3RhdHVzID0gKGl0ZW06IHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLnBvcHVsYXRlRWRpdChpdGVtKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZihqUXVlcnkoXCIjXCIrdGhpcy5mb3JtSWQpLnZhbGlkKCkpe1xuICAgICAgICAgICAgaWYodGhpcy51c2Vyc0NvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmNvbnRleHQpID4gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2UgPSBuZXcgdXNlck1vZGVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWdlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cygpKVxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnJlcGxhY2UodGhpcy5jb250ZXh0LCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnNDb2xsZWN0aW9uLnB1c2gobmV3IHVzZXJNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWdlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVkaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIHVzZXJNb2RlbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBzdGF0dXM6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxuICAgICAgICBhZ2U6IG51bWJlciwgXG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbiwgXG4gICAgICAgIHN0YXR1czogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZVxue1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBpc05hTihOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XG4gICAgICAgIGxldCB2YWxpZGF0b3IgPSBqUXVlcnkoXCIjXCIrZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgICB9XG59Il19
