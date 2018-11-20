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
var UserModel = /** @class */ (function () {
    function UserModel(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    return UserModel;
}());
exports.UserModel = UserModel;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("./UserModel");
var UserViewModel = /** @class */ (function () {
    function UserViewModel(formId, editModalId) {
        var _this = this;
        this.remove = function (item) { return _this.context = item; };
        this.removeConfirm = function () {
            if (_this.collection.indexOf(_this.context) > -1)
                _this.collection.remove(_this.context);
        };
        this.populateEdit = function (item) {
            _this.context = item;
            _this.name(item.name);
            _this.age(item.age);
            _this.active(item.active);
        };
        this.clearEdit = function () {
            _this.name("");
            _this.age(0);
        };
        this.closeEdit = function () { return jQuery("#" + _this.editModalId).modal("hide"); };
        this.toggleStatus = function (item) {
            _this.populateEdit(item);
            _this.update();
        };
        this.update = function () {
            if (jQuery("#" + _this.formId).valid()) {
                if (_this.collection.indexOf(_this.context) > -1
                    && _this.name().length > 0 && _this.age() > 0) {
                    var replace = new UserModel_1.UserModel(_this.name(), _this.age(), _this.active());
                    _this.collection.replace(_this.context, replace);
                    _this.closeEdit();
                }
                else {
                    if (_this.name().length > 0 && _this.age() > 0) {
                        _this.collection.push(new UserModel_1.UserModel(_this.name(), _this.age(), _this.active()));
                        _this.closeEdit();
                    }
                }
            }
        };
        this.formId = formId;
        this.editModalId = editModalId;
        this.collection = ko.observableArray(new Array());
        this.name = ko.observable("");
        this.age = ko.observable(0);
        this.active = ko.observable(false);
        this.context = null;
        this.get();
    }
    UserViewModel.prototype.get = function () {
        this.collection.push(new UserModel_1.UserModel("James Bond", 23, false));
        this.collection.push(new UserModel_1.UserModel("Joe Bloggs", 34, false));
    };
    return UserViewModel;
}());
exports.UserViewModel = UserViewModel;

},{"./UserModel":2}],4:[function(require,module,exports){
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

},{"../../typeScript/Services/validatorService":5,"./Controllers/IndexController":1}],5:[function(require,module,exports){
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

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvVXNlck1vZGVsLnRzIiwiTW9kZWxzL1VzZXJWaWV3TW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7O0FDSDVCO0lBSUksbUJBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxNQUFlO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FB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UyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL1VzZXJWaWV3TW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcblxuICAgIHByaXZhdGUgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJlZGl0Rm9ybVwiO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gXCJlZGl0TW9kYWxcIjtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgc2VsZi5iaW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybSh0aGlzLmZvcm1JZCwgbnVsbCk7XG4gICAgfVxuICAgIGJpbmQoKSB7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3MoXG4gICAgICAgICAgICBuZXcgVXNlclZpZXdNb2RlbChcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1JZCwgXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWxJZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9ICAgIFxufSIsImV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlciwgYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XG5leHBvcnQgY2xhc3MgVXNlclZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBVc2VyTW9kZWw7XG4gICAgcHVibGljIGNvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PFVzZXJNb2RlbD47XG4gICAgcHVibGljIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHB1YmxpYyBhZ2U6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHB1YmxpYyBhY3RpdmU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1JZDogc3RyaW5nLCBlZGl0TW9kYWxJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gZm9ybUlkO1xuICAgICAgICB0aGlzLmVkaXRNb2RhbElkID0gZWRpdE1vZGFsSWQ7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGtvLm9ic2VydmFibGVBcnJheShuZXcgQXJyYXk8VXNlck1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKDApO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLmdldCgpO1xuICAgIH0gICBcblxuICAgIHB1YmxpYyBnZXQoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgVXNlck1vZGVsKFwiSmFtZXMgQm9uZFwiLCAyMywgZmFsc2UpKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgVXNlck1vZGVsKFwiSm9lIEJsb2dnc1wiLCAzNCwgZmFsc2UpKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUgPSAoaXRlbTogVXNlck1vZGVsKSA9PiB0aGlzLmNvbnRleHQgPSBpdGVtO1xuXG4gICAgcHVibGljIHJlbW92ZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY29udGV4dCkgPiAtMSlcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5yZW1vdmUodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVFZGl0ID0gKGl0ZW06IFVzZXJNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBpdGVtO1xuICAgICAgICB0aGlzLm5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UoaXRlbS5hZ2UpO1xuICAgICAgICB0aGlzLmFjdGl2ZShpdGVtLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyRWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5uYW1lKFwiXCIpO1xuICAgICAgICB0aGlzLmFnZSgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VFZGl0ID0gKCkgPT4galF1ZXJ5KFwiI1wiK3RoaXMuZWRpdE1vZGFsSWQpLm1vZGFsKFwiaGlkZVwiKTtcblxuICAgIHB1YmxpYyB0b2dnbGVTdGF0dXMgPSAoaXRlbTogVXNlck1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMucG9wdWxhdGVFZGl0KGl0ZW0pO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKGpRdWVyeShcIiNcIit0aGlzLmZvcm1JZCkudmFsaWQoKSl7XG4gICAgICAgICAgICBpZih0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmNvbnRleHQpID4gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2UgPSBuZXcgVXNlck1vZGVsKHRoaXMubmFtZSgpLCB0aGlzLmFnZSgpLCB0aGlzLmFjdGl2ZSgpKVxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5yZXBsYWNlKHRoaXMuY29udGV4dCwgcmVwbGFjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUVkaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgVXNlck1vZGVsKHRoaXMubmFtZSgpLCB0aGlzLmFnZSgpLCB0aGlzLmFjdGl2ZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZVxue1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBpc05hTihOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XG4gICAgICAgIGxldCB2YWxpZGF0b3IgPSBqUXVlcnkoXCIjXCIrZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgICB9XG59Il19
