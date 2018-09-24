(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(validatorService, calculatorService) {
        this.validatorService = validatorService;
        this.calculatorService = calculatorService;
    }
    IndexController.prototype.init = function () {
        var self = this;
        jQuery(function () {
            self.validateForm("percentageCalculatorForm");
        });
    };
    IndexController.prototype.validateForm = function (formId) {
        var self = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid(), percentage = Number(jQuery("#percentageInput").val()), ofThisNumber = Number(jQuery("#percentageOfInput").val());
                if (valid) {
                    var result = self.calculatorService.PercentageOf(percentage, ofThisNumber);
                    jQuery("#result").text(result.toString());
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
var validatorService_1 = require("../../typeScript/Services/validatorService");
var calculatorService_1 = require("../../typeScript/Services/calculatorService");
// Instantiate Services with dependency injection
var validatorService = new validatorService_1.ValidatorService();
var calculatorService = new calculatorService_1.CalculatorService();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL2NhbGN1bGF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLGdCQUFtQyxFQUNuQyxpQkFBcUM7UUFJckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixNQUFNLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFbEQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLE1BQWM7UUFFdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDNUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNyRCxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRTlELElBQUcsS0FBSyxFQUFDO29CQUVMLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUUzRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUU3QztZQUNMLENBQUM7U0FDSixDQUFBO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUVwRSxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBO0FBdERZLDBDQUFlOzs7O0FDSDVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsV0FBVztBQUNYLCtFQUE4RTtBQUM5RSxpRkFBZ0Y7QUFFaEYsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQzlDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0FBRWhELGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLGdCQUFnQixFQUNoQixpQkFBaUIsQ0FDcEIsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztBQ2pCdkI7SUFBQTtJQWVBLENBQUM7SUFiVSwrQkFBRyxHQUFWLFVBQVcsQ0FBUyxFQUFFLENBQVE7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFFTSx3Q0FBWSxHQUFuQixVQUFvQixVQUFpQixFQUFFLFlBQW9CO1FBRXZELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXpELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFDTCx3QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksOENBQWlCOzs7O0FDQTlCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJQ2FsY3VsYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lDYWxjdWxhdG9yU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdG9yU2VydmljZTogSUNhbGN1bGF0b3JTZXJ2aWNlXHJcblxyXG4gICAgY29uc3RydWN0b3JcclxuICAgIChcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UsXHJcbiAgICAgICAgY2FsY3VsYXRvclNlcnZpY2U6IElDYWxjdWxhdG9yU2VydmljZVxyXG4gICAgICBcclxuICAgICkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlID0gdmFsaWRhdG9yU2VydmljZTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0b3JTZXJ2aWNlID0gY2FsY3VsYXRvclNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybShcInBlcmNlbnRhZ2VDYWxjdWxhdG9yRm9ybVwiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZyl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogKGZvcm06IEhUTUxFbGVtZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBOdW1iZXIoalF1ZXJ5KFwiI3BlcmNlbnRhZ2VJbnB1dFwiKS52YWwoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgb2ZUaGlzTnVtYmVyID0gTnVtYmVyKGpRdWVyeShcIiNwZXJjZW50YWdlT2ZJbnB1dFwiKS52YWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodmFsaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2VsZi5jYWxjdWxhdG9yU2VydmljZS5QZXJjZW50YWdlT2YocGVyY2VudGFnZSwgb2ZUaGlzTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3Jlc3VsdFwiKS50ZXh0KHJlc3VsdC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0oZm9ybUlkLCB2YWxpZGF0ZUZvcm1PcHRpb25zKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG59IiwiXHJcbi8vIENvbnRyb2xsZXJzXHJcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FsY3VsYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZVwiO1xyXG5cclxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxyXG5sZXQgdmFsaWRhdG9yU2VydmljZSA9IG5ldyBWYWxpZGF0b3JTZXJ2aWNlKCk7XHJcbmxldCBjYWxjdWxhdG9yU2VydmljZSA9IG5ldyBDYWxjdWxhdG9yU2VydmljZSgpO1xyXG5cclxuLy8gQ29udHJvbGxlcnNcclxubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcclxuKFxyXG4gICAgdmFsaWRhdG9yU2VydmljZSxcclxuICAgIGNhbGN1bGF0b3JTZXJ2aWNlXHJcbik7XHJcblxyXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDYWxjdWxhdG9yU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSUNhbGN1bGF0b3JTZXJ2aWNlXHJcbntcclxuICAgIHB1YmxpYyBBZGQoYSA6bnVtYmVyLCBiOm51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiBhICsgYjtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBQZXJjZW50YWdlT2YocGVyY2VudGFnZTpudW1iZXIsIG9mVGhpc051bWJlcjogTnVtYmVyKTogTnVtYmVyIHtcclxuICAgIFxyXG4gICAgICAgIGxldCByZXN1bHQgPSBOdW1iZXIocGVyY2VudGFnZSkvMTAwKk51bWJlcihvZlRoaXNOdW1iZXIpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZVxyXG57XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBpc05hTihOdW1iZXIodmFsdWUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xyXG4gICAgICAgIGxldCB2YWxpZGF0b3IgPSBqUXVlcnkoXCIjXCIrZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xyXG4gICAgfVxyXG59Il19
