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
            _this.itemToDelete = item;
        };
        this.removeConfirm = function () {
            if (_this.collection.indexOf(_this.itemToDelete) > -1)
                _this.collection.remove(_this.itemToDelete);
        };
        this.edit = function (item) {
            _this.currentItem = item;
            _this.nameToEdit(item.name);
            _this.ageToEdit(item.age);
        };
        this.update = function () {
            if (_this.collection.indexOf(_this.currentItem) > -1) {
                var replace = new PeopleModel_1.PeopleModel(_this.nameToEdit(), _this.ageToEdit());
                _this.collection.replace(_this.currentItem, replace);
            }
        };
        this.collection = ko.observableArray(new Array());
        this.name = ko.observable(name);
        this.age = ko.observable(age);
        this.nameToEdit = ko.observable("");
        this.ageToEdit = ko.observable(0);
        this.currentItem = new PeopleModel_1.PeopleModel("", 0);
        this.fetch();
    }
    PeopleViewModel.prototype.add = function () {
        if (this.name().length > 0 && this.age() > 0)
            this.collection.push(new PeopleModel_1.PeopleModel(this.name(), this.age()));
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJNb2RlbHMvUGVvcGxlTW9kZWwudHMiLCJNb2RlbHMvUGVvcGxlVmlld01vZGVsLnRzIiwiYXBwLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSw2REFBNEQ7QUFDNUQ7SUFLSSx5QkFFSSxnQkFBbUM7UUFHbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQzlCLENBQUM7SUFDRCw4QkFBSSxHQUFKO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQztZQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksMENBQWU7Ozs7O0FDSDVCO0lBR0kscUJBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQs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QUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FFckMsZ0JBQWdCLENBQ25CLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDZHZCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFBlb3BsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvUGVvcGxlVmlld01vZGVsXCI7XG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG5cbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJpbnB1dEZvcm1cIjtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgc2VsZi5iaW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybSh0aGlzLmZvcm1JZCwgbnVsbCk7XG4gICAgfVxuICAgIGJpbmQoKSB7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3MobmV3IFBlb3BsZVZpZXdNb2RlbChcIllvdXIgbmFtZVwiLCAwKSk7XG4gICAgfSAgICBcbn0iLCJleHBvcnQgY2xhc3MgUGVvcGxlTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQZW9wbGVNb2RlbCB9IGZyb20gXCIuL1Blb3BsZU1vZGVsXCI7XG5leHBvcnQgY2xhc3MgUGVvcGxlVmlld01vZGVsIHtcbiAgICBjb2xsZWN0aW9uOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxQZW9wbGVNb2RlbD47XG4gICAgbmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgYWdlOiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBuYW1lVG9FZGl0OiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBhZ2VUb0VkaXQ6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIGl0ZW1Ub0RlbGV0ZTogUGVvcGxlTW9kZWw7XG4gICAgY3VycmVudEl0ZW06IFBlb3BsZU1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PFBlb3BsZU1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShuYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKGFnZSk7XG4gICAgICAgIHRoaXMubmFtZVRvRWRpdCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMuYWdlVG9FZGl0ID0ga28ub2JzZXJ2YWJsZSgwKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IG5ldyBQZW9wbGVNb2RlbChcIlwiLCAwKTtcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH0gICBcblxuICAgIHB1YmxpYyBhZGQoKXtcbiAgICAgICAgaWYodGhpcy5uYW1lKCkubGVuZ3RoID4gMCAmJiB0aGlzLmFnZSgpID4gMClcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmZXRjaCgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBQZW9wbGVNb2RlbChcIkphbWVzIEJvbmRcIiwgMjMpKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgUGVvcGxlTW9kZWwoXCJKb2UgQmxvZ2dzXCIsIDM0KSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlID0gKGl0ZW06IFBlb3BsZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbVRvRGVsZXRlID0gaXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5jb2xsZWN0aW9uLmluZGV4T2YodGhpcy5pdGVtVG9EZWxldGUpID4gLTEpXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVtb3ZlKHRoaXMuaXRlbVRvRGVsZXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZWRpdCA9IChpdGVtOiBQZW9wbGVNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gaXRlbTtcbiAgICAgICAgdGhpcy5uYW1lVG9FZGl0KGl0ZW0ubmFtZSk7XG4gICAgICAgIHRoaXMuYWdlVG9FZGl0KGl0ZW0uYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRJdGVtKSA+IC0xKSB7XG4gICAgICAgICAgICB2YXIgcmVwbGFjZSA9IG5ldyBQZW9wbGVNb2RlbCh0aGlzLm5hbWVUb0VkaXQoKSwgdGhpcy5hZ2VUb0VkaXQoKSlcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5yZXBsYWNlKHRoaXMuY3VycmVudEl0ZW0sIHJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZVxue1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBpc05hTihOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XG4gICAgICAgIGxldCB2YWxpZGF0b3IgPSBqUXVlcnkoXCIjXCIrZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgICB9XG59Il19
