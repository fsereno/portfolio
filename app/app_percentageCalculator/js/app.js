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
"use strict;";
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
"use strict;";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL2NhbGN1bGF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQVNJLHlCQUdJLGdCQUFtQyxFQUNuQyxpQkFBcUM7UUFJckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLDBCQUEwQixDQUFDO0lBQzdDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDNUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQy9DLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRXhELElBQUcsS0FBSyxFQUFDO29CQUVMLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUUzRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFFdkM7WUFDTCxDQUFDO1NBQ0osQ0FBQTtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFTCxzQkFBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFksMENBQWU7Ozs7QUNINUIsY0FBYztBQUNkLGlFQUFnRTtBQUVoRSxXQUFXO0FBQ1gsK0VBQThFO0FBQzlFLGlGQUFnRjtBQUVoRixpREFBaUQ7QUFDakQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLEVBQ3pDLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztBQUVoRCxjQUFjO0FBQ2QsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUVyQyxnQkFBZ0IsRUFDaEIsaUJBQWlCLENBQ3BCLENBQUM7QUFFRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7O0FDbkJ2QixhQUFhLENBQUE7OztBQUdiO0lBQUE7SUFRQSxDQUFDO0lBUFUsK0JBQUcsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ00sd0NBQVksR0FBbkIsVUFBb0IsVUFBa0IsRUFBRSxZQUFvQjtRQUN4RCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDhDQUFpQjs7QUNIOUIsYUFBYSxDQUFBOzs7QUFHYjtJQUVJO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87WUFDN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUNhbGN1bGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JQ2FsY3VsYXRvclNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcclxuICAgIHByaXZhdGUgY2FsY3VsYXRvclNlcnZpY2U6IElDYWxjdWxhdG9yU2VydmljZVxyXG4gICAgcHJpdmF0ZSByZXN1bHQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwcml2YXRlIHBlcmNlbnRhZ2VJbnB1dDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgcGVyY2VudGFnZU9mSW5wdXQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcblxyXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlLFxyXG4gICAgICAgIGNhbGN1bGF0b3JTZXJ2aWNlOiBJQ2FsY3VsYXRvclNlcnZpY2VcclxuICAgICAgXHJcbiAgICApIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdG9yU2VydmljZSA9IGNhbGN1bGF0b3JTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0galF1ZXJ5KFwiI3Jlc3VsdFwiKTtcclxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VJbnB1dCA9IGpRdWVyeShcIiNwZXJjZW50YWdlSW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlT2ZJbnB1dCA9IGpRdWVyeShcIiNwZXJjZW50YWdlT2ZJbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmZvcm1JZCA9IFwicGVyY2VudGFnZUNhbGN1bGF0b3JGb3JtXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGb3JtKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogKGZvcm06IEhUTUxFbGVtZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBOdW1iZXIoc2VsZi5wZXJjZW50YWdlSW5wdXQudmFsKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mVGhpc051bWJlciA9IE51bWJlcihzZWxmLnBlcmNlbnRhZ2VPZklucHV0LnZhbCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzZWxmLmNhbGN1bGF0b3JTZXJ2aWNlLlBlcmNlbnRhZ2VPZihwZXJjZW50YWdlLCBvZlRoaXNOdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc3VsdC50ZXh0KHJlc3VsdC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0oc2VsZi5mb3JtSWQsIHZhbGlkYXRlRm9ybU9wdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgXHJcbn0iLCJcclxuLy8gQ29udHJvbGxlcnNcclxuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL2NhbGN1bGF0b3JTZXJ2aWNlXCI7XHJcblxyXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXHJcbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKSxcclxuICAgIGNhbGN1bGF0b3JTZXJ2aWNlID0gbmV3IENhbGN1bGF0b3JTZXJ2aWNlKCk7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxyXG4oXHJcbiAgICB2YWxpZGF0b3JTZXJ2aWNlLFxyXG4gICAgY2FsY3VsYXRvclNlcnZpY2VcclxuKTtcclxuXHJcbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiXCJ1c2Ugc3RyaWN0O1wiXHJcbmltcG9ydCB7IElDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDYWxjdWxhdG9yU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSUNhbGN1bGF0b3JTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBBZGQoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBQZXJjZW50YWdlT2YocGVyY2VudGFnZTogbnVtYmVyLCBvZlRoaXNOdW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IE51bWJlcihwZXJjZW50YWdlKSAvIDEwMCAqIE51bWJlcihvZlRoaXNOdW1iZXIpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3Q7XCJcclxuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBpc05hTihOdW1iZXIodmFsdWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIiArIGZvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcjtcclxuICAgIH1cclxufSJdfQ==
