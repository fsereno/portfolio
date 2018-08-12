(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(textService, validatorService) {
        this.textService = textService;
        this.validatorService = validatorService;
    }
    IndexController.prototype.init = function () {
        var self = this;
        jQuery(function () {
            self.validateForm("findReplaceForm");
        });
    };
    IndexController.prototype.validateForm = function (formId) {
        var self = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid();
                var findThis = jQuery("#findInput").val().toString();
                var inThis = jQuery("#textToReplace").text();
                var replaceWithThis = jQuery("#replaceInput").val().toString();
                if (valid) {
                    var textReplaced = self.textService.FindReplace(findThis, inThis, replaceWithThis);
                    jQuery("#textToReplace").text(textReplaced);
                }
            }
        };
        self.validatorService.validateForm(formId, validateFormOptions);
    };
    return IndexController;
}());
exports.IndexController = IndexController;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var IndexController_1 = require("./Controllers/IndexController");
// Services
var textService_1 = require("../../typeScript/Services/textService");
var validatorService_1 = require("../../typeScript/Services/validatorService");
// Instantiate Services with dependency injection
var textService = new textService_1.TextService();
var validatorService = new validatorService_1.ValidatorService();
// Controllers
var indexController = new IndexController_1.IndexController(textService, validatorService);
indexController.init();

},{"../../typeScript/Services/textService":3,"../../typeScript/Services/validatorService":4,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextService = /** @class */ (function () {
    function TextService() {
    }
    TextService.prototype.Concat = function (a, b) {
        return a + " " + b;
    };
    TextService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {
        var result = inThis.replace(findThis, replaceWithThis);
        return result;
    };
    return TextService;
}());
exports.TextService = TextService;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
        jQuery.validator.addMethod("nonNumeric", function (value, element) {
            return this.optional(element) || isNaN(Number(value));
        });
    }
    ValidatorService.prototype.validateForm = function (formId, options) {
        jQuery("#" + formId).validate(options);
    };
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLFdBQXlCLEVBQ3pCLGdCQUFtQztRQUluQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsTUFBTSxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDckQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdDLElBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFL0QsSUFBRyxLQUFLLEVBQUM7b0JBRUwsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQzNDLFFBQVEsRUFBQyxNQUFNLEVBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXJDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFFL0M7WUFDTCxDQUFDO1NBQ0osQ0FBQTtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJEWSwwQ0FBZTs7Ozs7QUNINUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gscUVBQW9FO0FBQ3BFLCtFQUE4RTtBQUU5RSxpREFBaUQ7QUFDakQsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDcEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFFOUMsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FFckMsV0FBVyxFQUNYLGdCQUFnQixDQUNuQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2pCdkI7SUFBQTtJQWdCQSxDQUFDO0lBZFUsNEJBQU0sR0FBYixVQUFjLENBQVMsRUFBQyxDQUFRO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQ0ksUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLGVBQXVCO1FBRXZCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXZELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFDTCxrQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksa0NBQVc7Ozs7O0FDQXhCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlO1xuICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZSxcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRleHRTZXJ2aWNlID0gdGV4dFNlcnZpY2U7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybShcImZpbmRSZXBsYWNlRm9ybVwiKTtcbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZyl7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZFRoaXMgPSBqUXVlcnkoXCIjZmluZElucHV0XCIpLnZhbCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IGluVGhpcyA9IGpRdWVyeShcIiN0ZXh0VG9SZXBsYWNlXCIpLnRleHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZVdpdGhUaGlzID0galF1ZXJ5KFwiI3JlcGxhY2VJbnB1dFwiKS52YWwoKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgaWYodmFsaWQpe1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0UmVwbGFjZWQgPSBzZWxmLnRleHRTZXJ2aWNlLkZpbmRSZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZFRoaXMsaW5UaGlzLHJlcGxhY2VXaXRoVGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3RleHRUb1JlcGxhY2VcIikudGV4dCh0ZXh0UmVwbGFjZWQpO1xuXG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi52YWxpZGF0b3JTZXJ2aWNlLnZhbGlkYXRlRm9ybShmb3JtSWQsIHZhbGlkYXRlRm9ybU9wdGlvbnMpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB0ZXh0U2VydmljZSA9IG5ldyBUZXh0U2VydmljZSgpO1xubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB0ZXh0U2VydmljZSxcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJVGV4dFNlcnZpY2VcbntcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xuICAgIH1cblxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGluVGhpcy5yZXBsYWNlKGZpbmRUaGlzLCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogdm9pZCB7XG4gICAgICAgIGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xuICAgIH1cbn0iXX0=
