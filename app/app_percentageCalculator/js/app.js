(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(validatorService, calculatorService) {
        this.validatorService = validatorService;
        this.calculatorService = calculatorService;
        this.result = jQuery("#result");
        this.percentageInput = jQuery("#percentageInput");
        this.percentageOfInput = jQuery("#percentageOfInput");
        this.formId = "percentageCalculatorForm";
    }
    IndexController.prototype.init = function () {
        var self = this;
        jQuery(function () {
            self.validateForm();
        });
    };
    IndexController.prototype.validateForm = function () {
        var self = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid(), percentage = Number(self.percentageInput.val()), ofThisNumber = Number(self.percentageOfInput.val());
                if (valid) {
                    var result = self.calculatorService.PercentageOf(percentage, ofThisNumber);
                    self.result.text(result.toString());
                }
            }
        };
        self.validatorService.ValidateForm(self.formId, validateFormOptions);
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
var validatorService_1 = require("../../typeScript/Services/validatorService");
var calculatorService_1 = require("../../typeScript/Services/calculatorService");
// Instantiate Services with dependency injection
var validatorService = new validatorService_1.ValidatorService(), calculatorService = new calculatorService_1.CalculatorService();
// Controllers
var indexController = new IndexController_1.IndexController(validatorService, calculatorService);
indexController.init();

},{"../../typeScript/Services/calculatorService":3,"../../typeScript/Services/validatorService":4,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalculatorService = /** @class */ (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.Add = function (a, b) {
        return a + b;
    };
    CalculatorService.prototype.PercentageOf = function (percentage, ofThisNumber) {
        var result = Number(percentage) / 100 * Number(ofThisNumber);
        return result;
    };
    return CalculatorService;
}());
exports.CalculatorService = CalculatorService;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL2NhbGN1bGF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQVNJLHlCQUdJLGdCQUFtQyxFQUNuQyxpQkFBcUM7UUFJckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLDBCQUEwQixDQUFDO0lBQzdDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDNUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQy9DLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRXhELElBQUcsS0FBSyxFQUFDO29CQUVMLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUUzRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFFdkM7WUFDTCxDQUFDO1NBQ0osQ0FBQTtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFTCxzQkFBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksMENBQWU7Ozs7O0FDSDVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsV0FBVztBQUNYLCtFQUE4RTtBQUM5RSxpRkFBZ0Y7QUFFaEYsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxFQUN6QyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7QUFFaEQsY0FBYztBQUNkLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FFckMsZ0JBQWdCLEVBQ2hCLGlCQUFpQixDQUNwQixDQUFDO0FBRUYsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztBQ2pCdkI7SUFBQTtJQWVBLENBQUM7SUFiVSwrQkFBRyxHQUFWLFVBQVcsQ0FBUyxFQUFFLENBQVE7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFFTSx3Q0FBWSxHQUFuQixVQUFvQixVQUFpQixFQUFFLFlBQW9CO1FBRXZELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXpELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFDTCx3QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksOENBQWlCOzs7OztBQ0E5QjtJQUdJO1FBRUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVMsS0FBSyxFQUFFLE9BQU87WUFDNUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJQ2FsY3VsYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lDYWxjdWxhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGNhbGN1bGF0b3JTZXJ2aWNlOiBJQ2FsY3VsYXRvclNlcnZpY2VcbiAgICBwcml2YXRlIHJlc3VsdDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcbiAgICBwcml2YXRlIHBlcmNlbnRhZ2VJbnB1dDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcbiAgICBwcml2YXRlIHBlcmNlbnRhZ2VPZklucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSxcbiAgICAgICAgY2FsY3VsYXRvclNlcnZpY2U6IElDYWxjdWxhdG9yU2VydmljZVxuICAgICAgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRvclNlcnZpY2UgPSBjYWxjdWxhdG9yU2VydmljZTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBqUXVlcnkoXCIjcmVzdWx0XCIpO1xuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VJbnB1dCA9IGpRdWVyeShcIiNwZXJjZW50YWdlSW5wdXRcIik7XG4gICAgICAgIHRoaXMucGVyY2VudGFnZU9mSW5wdXQgPSBqUXVlcnkoXCIjcGVyY2VudGFnZU9mSW5wdXRcIik7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJwZXJjZW50YWdlQ2FsY3VsYXRvckZvcm1cIjtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG5cbiAgICAgICAgICAgIHNlbGYudmFsaWRhdGVGb3JtKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm0oKXtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHZhbGlkYXRlRm9ybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IChmb3JtOiBIVE1MRWxlbWVudCk9PntcblxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gTnVtYmVyKHNlbGYucGVyY2VudGFnZUlucHV0LnZhbCgpKSxcbiAgICAgICAgICAgICAgICAgICAgb2ZUaGlzTnVtYmVyID0gTnVtYmVyKHNlbGYucGVyY2VudGFnZU9mSW5wdXQudmFsKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYodmFsaWQpe1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzZWxmLmNhbGN1bGF0b3JTZXJ2aWNlLlBlcmNlbnRhZ2VPZihwZXJjZW50YWdlLCBvZlRoaXNOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0LnRleHQocmVzdWx0LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybShzZWxmLmZvcm1JZCwgdmFsaWRhdGVGb3JtT3B0aW9ucyk7XG4gICAgICAgIFxuICAgIH1cbiAgICAgICBcbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL2NhbGN1bGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKSxcbiAgICBjYWxjdWxhdG9yU2VydmljZSA9IG5ldyBDYWxjdWxhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB2YWxpZGF0b3JTZXJ2aWNlLFxuICAgIGNhbGN1bGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDYWxjdWxhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJQ2FsY3VsYXRvclNlcnZpY2VcbntcbiAgICBwdWJsaWMgQWRkKGEgOm51bWJlciwgYjpudW1iZXIpOiBudW1iZXIge1xuICAgICAgXG4gICAgICAgIHJldHVybiBhICsgYjtcbiAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgUGVyY2VudGFnZU9mKHBlcmNlbnRhZ2U6bnVtYmVyLCBvZlRoaXNOdW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgXG4gICAgICAgIGxldCByZXN1bHQgPSBOdW1iZXIocGVyY2VudGFnZSkvMTAwKk51bWJlcihvZlRoaXNOdW1iZXIpO1xuICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
