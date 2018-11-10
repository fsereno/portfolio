(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeopleViewModel_1 = require("../Models/PeopleViewModel");
var IndexController = /** @class */ (function () {
    function IndexController(validatorService) {
        this.validatorService = validatorService;
        this.formId = "inputForm";
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
        ko.applyBindings(new PeopleViewModel_1.PeopleViewModel("Your name", 0));
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
    function PeopleViewModel(name, age) {
        var _this = this;
        this.remove = function (item) {
            _this.delete = item;
        };
        this.removeConfirm = function () {
            _this.collection.remove(_this.delete);
        };
        this.collection = ko.observableArray(new Array());
        this.name = ko.observable(name);
        this.age = ko.observable(age);
        this.fetch();
    }
    PeopleViewModel.prototype.add = function () {
        this.collection.push(new PeopleModel_1.PeopleModel(this.name(), this.age()));
    };
    PeopleViewModel.prototype.fetch = function () {
        this.collection.push(new PeopleModel_1.PeopleModel("Your name 1", 1));
        this.collection.push(new PeopleModel_1.PeopleModel("Your name 2", 2));
        this.collection.push(new PeopleModel_1.PeopleModel("Your name 3", 3));
        this.collection.push(new PeopleModel_1.PeopleModel("Your name 4", 4));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvUGVvcGxlTW9kZWwudHMiLCJNb2RlbHMvUGVvcGxlVmlld01vZGVsLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSw2REFBNEQ7QUFDNUQ7SUFLSSx5QkFFSSxnQkFBbUM7UUFHbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQzlCLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksMENBQWU7Ozs7O0FDSDVCO0lBR0kscUJBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxrQ0FBVzs7Ozs7QUNBeEIsNkNBQTRDO0FBQzVDO0lBTUkseUJBQVksSUFBWSxFQUFFLEdBQVc7UUFBckMsaUJBS0M7UUFhTSxXQUFNLEdBQUcsVUFBQyxJQUFpQjtZQUM5QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUE7UUFFTSxrQkFBYSxHQUFHO1lBQ25CLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUE7UUF2QkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxFQUFlLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sNkJBQUcsR0FBVjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBU0wsc0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLDBDQUFlOzs7OztBQ0E1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCwrRUFBOEU7QUFFOUUsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLGdCQUFnQixDQUNuQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2R2QjtJQUdJO1FBRUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVMsS0FBSyxFQUFFLE9BQU87WUFDNUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZW9wbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL1Blb3BsZVZpZXdNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmZvcm1JZCA9IFwiaW5wdXRGb3JtXCI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgIHNlbGYuYmluZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFsaWRhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0odGhpcy5mb3JtSWQsIG51bGwpO1xuICAgIH1cbiAgICBiaW5kKCkge1xuICAgICAgICBrby5hcHBseUJpbmRpbmdzKG5ldyBQZW9wbGVWaWV3TW9kZWwoXCJZb3VyIG5hbWVcIiwgMCkpO1xuICAgIH0gICAgXG59IiwiZXhwb3J0IGNsYXNzIFBlb3BsZU1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUGVvcGxlTW9kZWwgfSBmcm9tIFwiLi9QZW9wbGVNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIFBlb3BsZVZpZXdNb2RlbCB7XG4gICAgY29sbGVjdGlvbjogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8UGVvcGxlTW9kZWw+O1xuICAgIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGFnZTogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgZGVsZXRlOiBQZW9wbGVNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTxQZW9wbGVNb2RlbD4oKSk7XG4gICAgICAgIHRoaXMubmFtZSA9IGtvLm9ic2VydmFibGUobmFtZSk7XG4gICAgICAgIHRoaXMuYWdlID0ga28ub2JzZXJ2YWJsZShhZ2UpO1xuICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgfSAgIFxuXG4gICAgcHVibGljIGFkZCgpe1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgUGVvcGxlTW9kZWwodGhpcy5uYW1lKCksIHRoaXMuYWdlKCkpKVxuICAgIH1cblxuICAgIHB1YmxpYyBmZXRjaCgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbChcIllvdXIgbmFtZSAxXCIsIDEpKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgUGVvcGxlTW9kZWwoXCJZb3VyIG5hbWUgMlwiLCAyKSlcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IFBlb3BsZU1vZGVsKFwiWW91ciBuYW1lIDNcIiwgMykpXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbChcIllvdXIgbmFtZSA0XCIsIDQpKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUgPSAoaXRlbTogUGVvcGxlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGUgPSBpdGVtO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVtb3ZlKHRoaXMuZGVsZXRlKTtcbiAgICB9XG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdmFsaWRhdG9yU2VydmljZSA9IG5ldyBWYWxpZGF0b3JTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHZhbGlkYXRvclNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlXG57XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICBqUXVlcnkudmFsaWRhdG9yLmFkZE1ldGhvZChcIm5vbk51bWVyaWNcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xuICAgIH1cbn0iXX0=
