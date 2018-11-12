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
            _this.itemToDelete = item;
        };
        this.removeConfirm = function () {
            if (_this.collection.indexOf(_this.itemToDelete) > -1)
                _this.collection.remove(_this.itemToDelete);
        };
        this.edit = function (item) {
            _this.currentItem = item;
            _this.name(item.name);
            _this.age(item.age);
        };
        this.closeEdit = function () {
            jQuery("#" + _this.editModalId).modal("hide");
        };
        this.update = function () {
            if (jQuery("#" + _this.formId).valid()) {
                if (_this.collection.indexOf(_this.currentItem) > -1) {
                    var replace = new PeopleModel_1.PeopleModel(_this.name(), _this.age());
                    _this.collection.replace(_this.currentItem, replace);
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
        this.currentItem = new PeopleModel_1.PeopleModel("", 0);
        this.fetch();
    }
    PeopleViewModel.prototype.fetch = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvUGVvcGxlTW9kZWwudHMiLCJNb2RlbHMvUGVvcGxlVmlld01vZGVsLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSw2REFBNEQ7QUFDNUQ7SUFNSSx5QkFFSSxnQkFBbUM7UUFHbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxhQUFhLENBQ1osSUFBSSxpQ0FBZSxDQUNmLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FDZixDQUNSLENBQUM7SUFDTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLDBDQUFlOzs7OztBQ0g1QjtJQUdJLHFCQUFZLElBQVksRUFBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFDTCxrQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksa0NBQVc7Ozs7O0FDQXhCLDZDQUE0QztBQUM1QztJQVNJLHlCQUFZLE1BQWMsRUFBRSxXQUFtQjtRQUEvQyxpQkFRQztRQU9NLFdBQU0sR0FBRyxVQUFDLElBQWlCO1lBQzlCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQUVNLGtCQUFhLEdBQUc7WUFDbkIsSUFBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFBO1FBRU0sU0FBSSxHQUFHLFVBQUMsSUFBaUI7WUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFBO1FBRU0sY0FBUyxHQUFHO1lBQ2YsTUFBTSxDQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQUVNLFdBQU0sR0FBRztZQUNaLElBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUM7Z0JBQy9CLElBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO29CQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNuRCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILElBQUcsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTt3QkFDekMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMvRCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7cUJBQ3BCO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLENBQUE7UUE5Q0csSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxFQUFlLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFtQ0wsc0JBQUM7QUFBRCxDQXpEQSxBQXlEQyxJQUFBO0FBekRZLDBDQUFlOzs7OztBQ0E1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCwrRUFBOEU7QUFFOUUsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLGdCQUFnQixDQUNuQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2R2QjtJQUdJO1FBRUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVMsS0FBSyxFQUFFLE9BQU87WUFDNUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZW9wbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL1Blb3BsZVZpZXdNb2RlbFwiO1xuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZWRpdE1vZGFsSWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlID0gdmFsaWRhdG9yU2VydmljZTtcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBcImVkaXRGb3JtXCI7XG4gICAgICAgIHRoaXMuZWRpdE1vZGFsSWQgPSBcImVkaXRNb2RhbFwiO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudmFsaWRhdGVGb3JtKCk7XG4gICAgICAgICAgICBzZWxmLmJpbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhbGlkYXRlRm9ybSgpe1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKHRoaXMuZm9ybUlkLCBudWxsKTtcbiAgICB9XG4gICAgYmluZCgpIHtcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyhcbiAgICAgICAgICAgIG5ldyBQZW9wbGVWaWV3TW9kZWwoXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtSWQsIFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGFsSWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSAgICBcbn0iLCJleHBvcnQgY2xhc3MgUGVvcGxlTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQZW9wbGVNb2RlbCB9IGZyb20gXCIuL1Blb3BsZU1vZGVsXCI7XG5leHBvcnQgY2xhc3MgUGVvcGxlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZWRpdE1vZGFsSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGl0ZW1Ub0RlbGV0ZTogUGVvcGxlTW9kZWw7XG4gICAgcHJpdmF0ZSBjdXJyZW50SXRlbTogUGVvcGxlTW9kZWw7XG4gICAgcHVibGljIGNvbGxlY3Rpb246IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PFBlb3BsZU1vZGVsPjtcbiAgICBwdWJsaWMgbmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHVibGljIGFnZTogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtSWQ6IHN0cmluZywgZWRpdE1vZGFsSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZvcm1JZCA9IGZvcm1JZDtcbiAgICAgICAgdGhpcy5lZGl0TW9kYWxJZCA9IGVkaXRNb2RhbElkO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PFBlb3BsZU1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKDApO1xuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gbmV3IFBlb3BsZU1vZGVsKFwiXCIsIDApO1xuICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgfSAgIFxuXG4gICAgcHVibGljIGZldGNoKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IFBlb3BsZU1vZGVsKFwiSmFtZXMgQm9uZFwiLCAyMykpXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbChcIkpvZSBCbG9nZ3NcIiwgMzQpKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUgPSAoaXRlbTogUGVvcGxlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5pdGVtVG9EZWxldGUgPSBpdGVtO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLml0ZW1Ub0RlbGV0ZSkgPiAtMSlcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5yZW1vdmUodGhpcy5pdGVtVG9EZWxldGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlZGl0ID0gKGl0ZW06IFBlb3BsZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdGVtO1xuICAgICAgICB0aGlzLm5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UoaXRlbS5hZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZUVkaXQgPSAoKSA9PiB7XG4gICAgICAgIGpRdWVyeShcIiNcIit0aGlzLmVkaXRNb2RhbElkKS5tb2RhbChcImhpZGVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoalF1ZXJ5KFwiI1wiK3RoaXMuZm9ybUlkKS52YWxpZCgpKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudEl0ZW0pID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZSA9IG5ldyBQZW9wbGVNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVwbGFjZSh0aGlzLmN1cnJlbnRJdGVtLCByZXBsYWNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5hbWUoKS5sZW5ndGggPiAwICYmIHRoaXMuYWdlKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
