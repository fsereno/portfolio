(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(stringService, validatorService) {
        this.stringService = stringService;
        this.validatorService = validatorService;
        this.result = jQuery("#result");
        this.findInput = jQuery("#findInput");
        this.replaceInput = jQuery("#replaceInput");
        this.formId = "findReplaceForm";
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
                var valid = jQuery(form).valid(), findThis = self.findInput.val().toString(), inThis = self.result.text(), replaceWithThis = self.replaceInput.val().toString();
                if (valid) {
                    var textReplaced = self.stringService.FindReplace(findThis, inThis, replaceWithThis);
                    jQuery("#result").text(textReplaced);
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
var StringService_1 = require("../../typeScript/Services/StringService");
var validatorService_1 = require("../../typeScript/Services/validatorService");
// Instantiate Services with dependency injection
var stringService = new StringService_1.StringService(), validatorService = new validatorService_1.ValidatorService();
// Controllers
var indexController = new IndexController_1.IndexController(stringService, validatorService);
indexController.init();

},{"../../typeScript/Services/StringService":3,"../../typeScript/Services/validatorService":4,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringService = /** @class */ (function () {
    function StringService() {
    }
    StringService.prototype.Concat = function (a, b) {
        // Considering the best way of handling undefined params that will allow for unhappy test paths with Mocah/Chai
        if (a === undefined || b === undefined) {
            throw new Error('Undefined Parameter');
        }
        return a + " " + b;
    };
    StringService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {
        var searchRegex = new RegExp(findThis, "g"), replaceRegex = new RegExp("\\b" + findThis + "\\b"), count = (inThis.match(searchRegex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(replaceRegex, replaceWithThis);
        }
        return inThis;
    };
    StringService.prototype.ToArray = function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    };
    return StringService;
}());
exports.StringService = StringService;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2UudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBO0lBU0kseUJBR0ksYUFBNkIsRUFDN0IsZ0JBQW1DO1FBSW5DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDNUIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQzFDLE1BQU0s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QUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XG4gICAgXG4gICAgcHJpdmF0ZSBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZTtcbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmluZElucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgcmVzdWx0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgcmVwbGFjZUlucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZSxcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IGpRdWVyeShcIiNyZXN1bHRcIik7XG4gICAgICAgIHRoaXMuZmluZElucHV0ID0galF1ZXJ5KFwiI2ZpbmRJbnB1dFwiKTtcbiAgICAgICAgdGhpcy5yZXBsYWNlSW5wdXQgPSBqUXVlcnkoXCIjcmVwbGFjZUlucHV0XCIpO1xuICAgICAgICB0aGlzLmZvcm1JZCA9IFwiZmluZFJlcGxhY2VGb3JtXCI7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKCl7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgZmluZFRoaXMgPSBzZWxmLmZpbmRJbnB1dC52YWwoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBpblRoaXMgPSBzZWxmLnJlc3VsdC50ZXh0KCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoVGhpcyA9IHNlbGYucmVwbGFjZUlucHV0LnZhbCgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRSZXBsYWNlZCA9IHNlbGYuc3RyaW5nU2VydmljZS5GaW5kUmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRUaGlzLGluVGhpcyxyZXBsYWNlV2l0aFRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNyZXN1bHRcIikudGV4dCh0ZXh0UmVwbGFjZWQpO1xuXG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybShzZWxmLmZvcm1JZCwgdmFsaWRhdGVGb3JtT3B0aW9ucyk7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCBzdHJpbmdTZXJ2aWNlID0gbmV3IFN0cmluZ1NlcnZpY2UoKSxcbiAgICB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgc3RyaW5nU2VydmljZSxcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuXG4gICAgY29uc3RydWN0b3IoKXt9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBcbiAgICAgICAgLy8gQ29uc2lkZXJpbmcgdGhlIGJlc3Qgd2F5IG9mIGhhbmRsaW5nIHVuZGVmaW5lZCBwYXJhbXMgdGhhdCB3aWxsIGFsbG93IGZvciB1bmhhcHB5IHRlc3QgcGF0aHMgd2l0aCBNb2NhaC9DaGFpXG4gICAgICAgIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIFBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
