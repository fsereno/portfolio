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
                var valid = jQuery(form).valid(), findThis = jQuery("#findInput").val().toString(), inThis = jQuery("#result").text(), replaceWithThis = jQuery("#replaceInput").val().toString();
                if (valid) {
                    var textReplaced = self.textService.FindReplace(findThis, inThis, replaceWithThis);
                    jQuery("#result").text(textReplaced);
                }
            }
        };
        self.validatorService.ValidateForm(formId, validateFormOptions);
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
        var regex = new RegExp(findThis, "g"), count = (inThis.match(regex) || []).length, result = inThis.replace(findThis, replaceWithThis);
        for (var index = 0; index < count; index++) {
            result = result.replace(findThis, replaceWithThis);
        }
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
    ValidatorService.prototype.ValidateForm = function (formId, options) {
        var validator = jQuery("#" + formId).validate(options);
        return validator;
    };
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLFdBQXlCLEVBQ3pCLGdCQUFtQztRQUluQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsTUFBTSxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQzVCLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ2pDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRS9ELElBQUcsS0FBSyxFQUFDO29CQUVMLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUMzQyxRQUFRLEVBQUMsTUFBTSxFQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUVyQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUV4QztZQUNMLENBQUM7U0FDSixDQUFBO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXJEQSxBQXFEQyxJQUFBO0FBckRZLDBDQUFlOzs7OztBQ0g1QixjQUFjO0FBQ2QsaUVBQWdFO0FBRWhFLFdBQVc7QUFDWCxxRUFBb0U7QUFDcEUsK0VBQThFO0FBRTlFLGlEQUFpRDtBQUNqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUNwQyxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUU5QyxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxXQUFXLEVBQ1gsZ0JBQWdCLENBQ25CLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDakJ2QjtJQUFBO0lBcUJBLENBQUM7SUFuQlUsNEJBQU0sR0FBYixVQUFjLENBQVMsRUFBQyxDQUFRO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQ0ksUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLGVBQXVCO1FBRW5CLElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFDakMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQzFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUN0RDtRQUVMLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxrQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksa0NBQVc7Ozs7O0FDQXhCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlO1xuICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZSxcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRleHRTZXJ2aWNlID0gdGV4dFNlcnZpY2U7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybShcImZpbmRSZXBsYWNlRm9ybVwiKTtcbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZyl7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgZmluZFRoaXMgPSBqUXVlcnkoXCIjZmluZElucHV0XCIpLnZhbCgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGluVGhpcyA9IGpRdWVyeShcIiNyZXN1bHRcIikudGV4dCgpLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlV2l0aFRoaXMgPSBqUXVlcnkoXCIjcmVwbGFjZUlucHV0XCIpLnZhbCgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRSZXBsYWNlZCA9IHNlbGYudGV4dFNlcnZpY2UuRmluZFJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kVGhpcyxpblRoaXMscmVwbGFjZVdpdGhUaGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjcmVzdWx0XCIpLnRleHQodGV4dFJlcGxhY2VkKTtcblxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0oZm9ybUlkLCB2YWxpZGF0ZUZvcm1PcHRpb25zKTtcbiAgICB9XG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUZXh0U2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdGV4dFNlcnZpY2UgPSBuZXcgVGV4dFNlcnZpY2UoKTtcbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdGV4dFNlcnZpY2UsXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVGV4dFNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRTZXJ2aWNlIGltcGxlbWVudHMgSVRleHRTZXJ2aWNlXG57XG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuXG4gICAgICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKGZpbmRUaGlzLCBcImdcIiksXG4gICAgICAgICAgICAgICAgY291bnQgPSAoaW5UaGlzLm1hdGNoKHJlZ2V4KSB8fCBbXSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluVGhpcy5yZXBsYWNlKGZpbmRUaGlzLCByZXBsYWNlV2l0aFRoaXMpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShmaW5kVGhpcywgcmVwbGFjZVdpdGhUaGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlXG57XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICBqUXVlcnkudmFsaWRhdG9yLmFkZE1ldGhvZChcIm5vbk51bWVyaWNcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xuICAgIH1cbn0iXX0=
