(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KnockoutExampleModels_1 = require("../../../typeScript/Models/KnockoutExampleModels");
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
        ko.applyBindings(new KnockoutExampleModels_1.KnockoutExampleModels("Your name", 0));
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{"../../../typeScript/Models/KnockoutExampleModels":4}],2:[function(require,module,exports){
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

},{"../../typeScript/Services/validatorService":5,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KnockoutExampleModel = /** @class */ (function () {
    function KnockoutExampleModel(name, age) {
        this.name = ko.observable(name);
        this.age = ko.observable(age);
    }
    return KnockoutExampleModel;
}());
exports.KnockoutExampleModel = KnockoutExampleModel;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KnockoutExampleModel_1 = require("./KnockoutExampleModel");
var KnockoutExampleModels = /** @class */ (function () {
    function KnockoutExampleModels(name, age) {
        var _this = this;
        this.remove = function (item) {
            _this.collection.remove(item);
        };
        this.collection = ko.observableArray(new Array());
        this.name = ko.observable(name);
        this.age = ko.observable(age);
        this.fetch();
    }
    KnockoutExampleModels.prototype.add = function () {
        this.collection.push(new KnockoutExampleModel_1.KnockoutExampleModel(this.name(), this.age()));
    };
    KnockoutExampleModels.prototype.fetch = function () {
        this.collection.push(new KnockoutExampleModel_1.KnockoutExampleModel("Your name 1", 1));
        this.collection.push(new KnockoutExampleModel_1.KnockoutExampleModel("Your name 2", 2));
        this.collection.push(new KnockoutExampleModel_1.KnockoutExampleModel("Your name 3", 3));
        this.collection.push(new KnockoutExampleModel_1.KnockoutExampleModel("Your name 4", 4));
    };
    return KnockoutExampleModels;
}());
exports.KnockoutExampleModels = KnockoutExampleModels;

},{"./KnockoutExampleModel":3}],5:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L01vZGVscy9Lbm9ja291dEV4YW1wbGVNb2RlbC50cyIsIi4uLy4uL3R5cGVTY3JpcHQvTW9kZWxzL0tub2Nrb3V0RXhhbXBsZU1vZGVscy50cyIsIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0EsMEZBQXlGO0FBQ3pGO0lBS0kseUJBRUksZ0JBQW1DO1FBR25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztJQUM5QixDQUFDO0lBQ0QsOEJBQUksR0FBSjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixNQUFNLENBQUM7WUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELHNDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELDhCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksNkNBQXFCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSwwQ0FBZTs7Ozs7QUNINUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gsK0VBQThFO0FBRTlFLGlEQUFpRDtBQUNqRCxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUU5QyxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxnQkFBZ0IsQ0FDbkIsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUNoQnZCO0lBSUksOEJBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBS0wsMkJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLG9EQUFvQjs7Ozs7QUNBakMsK0RBQThEO0FBRTlEO0lBTUksK0JBQVksSUFBWSxFQUFFLEdBQVc7UUFBckMsaUJBS0M7UUFhTSxXQUFNLEdBQUcsVUFBQyxJQUEwQjtZQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUE7UUFuQkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxFQUF3QixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLG1DQUFHLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLDJDQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFTSxxQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwyQ0FBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLDJDQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksMkNBQW9CLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwyQ0FBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBS0wsNEJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLHNEQUFxQjs7Ozs7QUNBbEM7SUFHSTtRQUVJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPO1lBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxPQUEyQztRQUNwRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgS25vY2tvdXRFeGFtcGxlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9Nb2RlbHMvS25vY2tvdXRFeGFtcGxlTW9kZWxcIjtcbmltcG9ydCB7IEtub2Nrb3V0RXhhbXBsZU1vZGVscyB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L01vZGVscy9Lbm9ja291dEV4YW1wbGVNb2RlbHNcIjtcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcblxuICAgIHByaXZhdGUgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmb3JtSWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlID0gdmFsaWRhdG9yU2VydmljZTtcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBcImlucHV0Rm9ybVwiO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudmFsaWRhdGVGb3JtKCk7XG4gICAgICAgICAgICBzZWxmLmJpbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhbGlkYXRlRm9ybSgpe1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKHRoaXMuZm9ybUlkLCBudWxsKTtcbiAgICB9XG4gICAgYmluZCgpIHtcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyhuZXcgS25vY2tvdXRFeGFtcGxlTW9kZWxzKFwiWW91ciBuYW1lXCIsIDApKTtcbiAgICB9ICAgIFxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImV4cG9ydCBjbGFzcyBLbm9ja291dEV4YW1wbGVNb2RlbCB7XG4gICAgbmFtZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgYWdlOiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShuYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKGFnZSk7XG4gICAgfVxuXG4gICAgLypwdWJsaWMgcmVtb3ZlKCkgOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5OYW1lKCkpO1xuICAgIH0qL1xufSIsImltcG9ydCB7IEtub2Nrb3V0RXhhbXBsZU1vZGVsIH0gZnJvbSBcIi4vS25vY2tvdXRFeGFtcGxlTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEtub2Nrb3V0RXhhbXBsZU1vZGVscyB7IC8vIGxvb2sgYXQgZXh0ZW5kaW5nIEtub2Nrb3V0RXhhbXBsZU1vZGVsXG4gICAgY29sbGVjdGlvbjogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8S25vY2tvdXRFeGFtcGxlTW9kZWw+O1xuICAgIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGFnZTogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgc2VsZjogS25vY2tvdXRFeGFtcGxlTW9kZWxzO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBrby5vYnNlcnZhYmxlQXJyYXkobmV3IEFycmF5PEtub2Nrb3V0RXhhbXBsZU1vZGVsPigpKTtcbiAgICAgICAgdGhpcy5uYW1lID0ga28ub2JzZXJ2YWJsZShuYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBrby5vYnNlcnZhYmxlKGFnZSk7XG4gICAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9ICAgXG5cbiAgICBwdWJsaWMgYWRkKCl7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBLbm9ja291dEV4YW1wbGVNb2RlbCh0aGlzLm5hbWUoKSwgdGhpcy5hZ2UoKSkpXG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IEtub2Nrb3V0RXhhbXBsZU1vZGVsKFwiWW91ciBuYW1lIDFcIiwgMSkpXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG5ldyBLbm9ja291dEV4YW1wbGVNb2RlbChcIllvdXIgbmFtZSAyXCIsIDIpKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChuZXcgS25vY2tvdXRFeGFtcGxlTW9kZWwoXCJZb3VyIG5hbWUgM1wiLCAzKSlcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobmV3IEtub2Nrb3V0RXhhbXBsZU1vZGVsKFwiWW91ciBuYW1lIDRcIiwgNCkpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZSA9IChpdGVtOiBLbm9ja291dEV4YW1wbGVNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucmVtb3ZlKGl0ZW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
