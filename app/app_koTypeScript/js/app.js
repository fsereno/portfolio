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
    function UserModel(name, age) {
        this.name = name;
        this.age = age;
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
        };
        this.clearEdit = function () {
            _this.name("");
            _this.age(0);
        };
        this.closeEdit = function () { return jQuery("#" + _this.editModalId).modal("hide"); };
        this.update = function () {
            if (jQuery("#" + _this.formId).valid()) {
                if (_this.collection.indexOf(_this.context) > -1
                    && _this.name().length > 0 && _this.age() > 0) {
                    var replace = new UserModel_1.UserModel(_this.name(), _this.age());
                    _this.collection.replace(_this.context, replace);
                    _this.closeEdit();
                }
                else {
                    if (_this.name().length > 0 && _this.age() > 0) {
                        _this.collection.push(new UserModel_1.UserModel(_this.name(), _this.age()));
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
        this.context = null;
        this.get();
    }
    UserViewModel.prototype.get = function () {
        this.collection.push(new UserModel_1.UserModel("James Bond", 23));
        this.collection.push(new UserModel_1.UserModel("Joe Bloggs", 34));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvVXNlck1vZGVsLnRzIiwiTW9kZWxzL1VzZXJWaWV3TW9kZWwudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLHlEQUF3RDtBQUN4RDtJQU1JLHlCQUVJLGdCQUFtQztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLGFBQWEsQ0FDWixJQUFJLDZCQUFhLENBQ2IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUNmLENBQ1IsQ0FBQztJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMENBQWU7Ozs7O0FDSDVCO0lBR0ksbUJBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxD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YXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyVmlld01vZGVsIH0gZnJvbSBcIi4uL01vZGVscy9Vc2VyVmlld01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmZvcm1JZCA9IFwiZWRpdEZvcm1cIjtcbiAgICAgICAgdGhpcy5lZGl0TW9kYWxJZCA9IFwiZWRpdE1vZGFsXCI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgIHNlbGYuYmluZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0odGhpcy5mb3JtSWQsIG51bGwpO1xuICAgIH1cbiAgICBiaW5kKCkge1xuICAgICAgICBrby5hcHBseUJpbmRpbmdzKFxuICAgICAgICAgICAgbmV3IFVzZXJWaWV3TW9kZWwoXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtSWQsIFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGFsSWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSAgICBcbn0iLCJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vVXNlck1vZGVsXCI7XG5leHBvcnQgY2xhc3MgVXNlclZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGVkaXRNb2RhbElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBVc2VyTW9kZWw7XG4gICAgcHVibGljIGNvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PFVzZXJNb2RlbD47XG4gICAgcHVibGljIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHB1YmxpYyBhZ2U6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgY29uc3RydWN0b3IoZm9ybUlkOiBzdHJpbmcsIGVkaXRNb2RhbElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBmb3JtSWQ7XG4gICAgICAgIHRoaXMuZWRpdE1vZGFsSWQgPSBlZGl0TW9kYWxJZDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTxVc2VyTW9kZWw+KCkpO1xuICAgICAgICB0aGlzLm5hbWUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmFnZSA9IGtvLm9ic2VydmFibGUoMCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0KCk7XG4gICAgfSAgIFxuXG4gICAgcHVibGljIGdldCgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBVc2VyTW9kZWwoXCJKYW1lcyBCb25kXCIsIDIzKSlcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IFVzZXJNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMzQpKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUgPSAoaXRlbTogVXNlck1vZGVsKSA9PiB0aGlzLmNvbnRleHQgPSBpdGVtO1xuXG4gICAgcHVibGljIHJlbW92ZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY29udGV4dCkgPiAtMSlcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5yZW1vdmUodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVFZGl0ID0gKGl0ZW06IFVzZXJNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBpdGVtO1xuICAgICAgICB0aGlzLm5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UoaXRlbS5hZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckVkaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubmFtZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlRWRpdCA9ICgpID0+IGpRdWVyeShcIiNcIit0aGlzLmVkaXRNb2RhbElkKS5tb2RhbChcImhpZGVcIik7XG5cbiAgICBwdWJsaWMgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZihqUXVlcnkoXCIjXCIrdGhpcy5mb3JtSWQpLnZhbGlkKCkpe1xuICAgICAgICAgICAgaWYodGhpcy5jb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jb250ZXh0KSA+IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlID0gbmV3IFVzZXJNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVwbGFjZSh0aGlzLmNvbnRleHQsIHJlcGxhY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubmFtZSgpLmxlbmd0aCA+IDAgJiYgdGhpcy5hZ2UoKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IFVzZXJNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
