(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeopleViewModel_1 = require("../Models/PeopleViewModel");
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
        ko.applyBindings(new PeopleViewModel_1.PeopleViewModel(this.formId, this.editModalId));
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{"../Models/PeopleViewModel":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeopleModel = /** @class */ (function () {
    function PeopleModel(name, age) {
        this.name = name;
        this.age = age;
    }
    return PeopleModel;
}());
exports.PeopleModel = PeopleModel;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeopleModel_1 = require("./PeopleModel");
var PeopleViewModel = /** @class */ (function () {
    function PeopleViewModel(formId, editModalId) {
        var _this = this;
        this.remove = function (item) {
            _this.context = item;
        };
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
        this.closeEdit = function () {
            jQuery("#" + _this.editModalId).modal("hide");
        };
        this.update = function () {
            if (jQuery("#" + _this.formId).valid()) {
                if (_this.collection.indexOf(_this.context) > -1) {
                    var replace = new PeopleModel_1.PeopleModel(_this.name(), _this.age());
                    _this.collection.replace(_this.context, replace);
                    _this.closeEdit();
                }
                else {
                    if (_this.name().length > 0 && _this.age() > 0) {
                        _this.collection.push(new PeopleModel_1.PeopleModel(_this.name(), _this.age()));
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
    PeopleViewModel.prototype.get = function () {
        this.collection.push(new PeopleModel_1.PeopleModel("James Bond", 23));
        this.collection.push(new PeopleModel_1.PeopleModel("Joe Bloggs", 34));
    };
    return PeopleViewModel;
}());
exports.PeopleViewModel = PeopleViewModel;

},{"./PeopleModel":2}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvUGVvcGxlTW9kZWwudHMiLCJNb2RlbHMvUGVvcGxlVmlld01vZGVsLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSw2REFBNEQ7QUFDNUQ7SUFNSSx5QkFFSSxnQkFBbUM7UUFHbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxhQUFhLENBQ1osSUFBSSxpQ0FBZSxDQUNmLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FDZixDQUNSLENBQUM7SUFDTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLDBDQUFlOzs7OztBQ0g1QjtJQUdJLHFCQUFZLElBQVksRUFBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElB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QUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQXdDTCxzQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksMENBQWU7Ozs7O0FDQTVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsV0FBVztBQUNYLCtFQUE4RTtBQUU5RSxpREFBaUQ7QUFDakQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFFOUMsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FFckMsZ0JBQWdCLENBQ25CLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDZHZCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFBlb3BsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvUGVvcGxlVmlld01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmZvcm1JZCA9IFwiZWRpdEZvcm1cIjtcbiAgICAgICAgdGhpcy5lZGl0TW9kYWxJZCA9IFwiZWRpdE1vZGFsXCI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgIHNlbGYuYmluZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0odGhpcy5mb3JtSWQsIG51bGwpO1xuICAgIH1cbiAgICBiaW5kKCkge1xuICAgICAgICBrby5hcHBseUJpbmRpbmdzKFxuICAgICAgICAgICAgbmV3IFBlb3BsZVZpZXdNb2RlbChcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1JZCwgXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kYWxJZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9ICAgIFxufSIsImV4cG9ydCBjbGFzcyBQZW9wbGVNb2RlbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgfVxufSIsImltcG9ydCB7IFBlb3BsZU1vZGVsIH0gZnJvbSBcIi4vUGVvcGxlTW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBQZW9wbGVWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlZGl0TW9kYWxJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgY29udGV4dDogUGVvcGxlTW9kZWw7XG4gICAgcHVibGljIGNvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PFBlb3BsZU1vZGVsPjtcbiAgICBwdWJsaWMgbmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHVibGljIGFnZTogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtSWQ6IHN0cmluZywgZWRpdE1vZGFsSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZvcm1JZCA9IGZvcm1JZDtcbiAgICAgICAgdGhpcy5lZGl0TW9kYWxJZCA9IGVkaXRNb2RhbElkO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PFBlb3BsZU1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKDApO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLmdldCgpO1xuICAgIH0gICBcblxuICAgIHB1YmxpYyBnZXQoKSA6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgUGVvcGxlTW9kZWwoXCJKYW1lcyBCb25kXCIsIDIzKSlcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IFBlb3BsZU1vZGVsKFwiSm9lIEJsb2dnc1wiLCAzNCkpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZSA9IChpdGVtOiBQZW9wbGVNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBpdGVtO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmNvbnRleHQpID4gLTEpXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVtb3ZlKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVsYXRlRWRpdCA9IChpdGVtOiBQZW9wbGVNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBpdGVtO1xuICAgICAgICB0aGlzLm5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UoaXRlbS5hZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckVkaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubmFtZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UoMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlRWRpdCA9ICgpID0+IHtcbiAgICAgICAgalF1ZXJ5KFwiI1wiK3RoaXMuZWRpdE1vZGFsSWQpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZihqUXVlcnkoXCIjXCIrdGhpcy5mb3JtSWQpLnZhbGlkKCkpe1xuICAgICAgICAgICAgaWYodGhpcy5jb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jb250ZXh0KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2UgPSBuZXcgUGVvcGxlTW9kZWwodGhpcy5uYW1lKCksIHRoaXMuYWdlKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnJlcGxhY2UodGhpcy5jb250ZXh0LCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
