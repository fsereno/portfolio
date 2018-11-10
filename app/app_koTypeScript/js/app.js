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
        ko.applyBindings(new PeopleViewModel_1.PeopleViewModel("Your name Test 3", 0));
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
            _this.collection.remove(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvUGVvcGxlTW9kZWwudHMiLCJNb2RlbHMvUGVvcGxlVmlld01vZGVsLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSw2REFBNEQ7QUFDNUQ7SUFLSSx5QkFFSSxnQkFBbUM7UUFHbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQzlCLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxpQ0FBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSwwQ0FBZTs7Ozs7QUNINUI7SUFHSSxxQkFBWSxJQUFZLEVBQUUsR0FBVztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGtDQUFXOzs7OztBQ0F4Qiw2Q0FBNEM7QUFFNUM7SUFLSSx5QkFBWSxJQUFZLEVBQUUsR0FBVztRQUFyQyxpQkFLQztRQWFNLFdBQU0sR0FBRyxVQUFDLElBQWlCO1lBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQTtRQW5CRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLLEVBQWUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw2QkFBRyxHQUFWO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFLTCxzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksMENBQWU7Ozs7O0FDRDVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsV0FBVztBQUNYLCtFQUE4RTtBQUU5RSxpREFBaUQ7QUFDakQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFFOUMsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FFckMsZ0JBQWdCLENBQ25CLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDZHZCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFBlb3BsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvUGVvcGxlVmlld01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJpbnB1dEZvcm1cIjtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgc2VsZi5iaW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybSh0aGlzLmZvcm1JZCwgbnVsbCk7XG4gICAgfVxuICAgIGJpbmQoKSB7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3MobmV3IFBlb3BsZVZpZXdNb2RlbChcIllvdXIgbmFtZSBUZXN0IDNcIiwgMCkpO1xuICAgIH0gICAgXG59IiwiZXhwb3J0IGNsYXNzIFBlb3BsZU1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUGVvcGxlTW9kZWwgfSBmcm9tIFwiLi9QZW9wbGVNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUGVvcGxlVmlld01vZGVsIHtcbiAgICBjb2xsZWN0aW9uOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxQZW9wbGVNb2RlbD47XG4gICAgbmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgYWdlOiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KG5ldyBBcnJheTxQZW9wbGVNb2RlbD4oKSk7XG4gICAgICAgIHRoaXMubmFtZSA9IGtvLm9ic2VydmFibGUobmFtZSk7XG4gICAgICAgIHRoaXMuYWdlID0ga28ub2JzZXJ2YWJsZShhZ2UpO1xuICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgfSAgIFxuXG4gICAgcHVibGljIGFkZCgpe1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgUGVvcGxlTW9kZWwodGhpcy5uYW1lKCksIHRoaXMuYWdlKCkpKVxuICAgIH1cblxuICAgIHB1YmxpYyBmZXRjaCgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbChcIllvdXIgbmFtZSAxXCIsIDEpKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgUGVvcGxlTW9kZWwoXCJZb3VyIG5hbWUgMlwiLCAyKSlcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IFBlb3BsZU1vZGVsKFwiWW91ciBuYW1lIDNcIiwgMykpXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbChcIllvdXIgbmFtZSA0XCIsIDQpKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUgPSAoaXRlbTogUGVvcGxlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnJlbW92ZShpdGVtKTtcbiAgICB9XG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdmFsaWRhdG9yU2VydmljZSA9IG5ldyBWYWxpZGF0b3JTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHZhbGlkYXRvclNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlXG57XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICBqUXVlcnkudmFsaWRhdG9yLmFkZE1ldGhvZChcIm5vbk51bWVyaWNcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xuICAgIH1cbn0iXX0=
