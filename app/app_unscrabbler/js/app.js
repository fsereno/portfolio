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
            self.validateForm("unscrabblerForm");
        });
    };
    IndexController.prototype.validateForm = function (formId) {
        var self = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid(), findThis = jQuery("#findInput").val().toString(), inThis = jQuery("#scrabbleInput").val().toString();
                if (valid) {
                    var result = self.textService.Unscrabble(findThis, inThis);
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
        var regex = new RegExp(findThis, "g"), count = (inThis.match(regex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(findThis, replaceWithThis);
        }
        return inThis;
    };
    TextService.prototype.ToArray = function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
        return result;
    };
    TextService.prototype.Unscrabble = function (findThis, inThis) {
        var findThisNormalised = findThis.toLowerCase(), inThisNormalised = inThis.toLowerCase(), scrabbleArray = this.ToArray(inThisNormalised), inputArray = this.ToArray(findThisNormalised), resultsArray = [];
        for (var i = 0; i < inputArray.length; i++) {
            var inputCharacter = inputArray[i], indexOf = scrabbleArray.indexOf(inputCharacter);
            if (indexOf > -1) {
                resultsArray.push(inputCharacter);
                scrabbleArray.splice(indexOf, 1);
            }
        }
        var resultArrayToString = resultsArray.join(""), result = resultArrayToString === findThisNormalised;
        return result;
    };
    TextService.prototype.GetAlphaString = function () {
        // This would come from a repository
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return string;
    };
    ;
    TextService.prototype.GetNumericString = function () {
        // This would come from a repository
        var string = "0123456789";
        return string;
    };
    ;
    TextService.prototype.GenerateRandom = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.ToArray(criterion);
                array.forEach(function (char, i) {
                    var indexToPush = Math.floor(Math.random() * array.length);
                    if (i === indexToPush && output.length < length) {
                        output.push(char);
                    }
                });
            });
        }
        var result = output.join("");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLFdBQXlCLEVBQ3pCLGdCQUFtQztRQUluQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsTUFBTSxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQzVCLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFdkQsSUFBRyxLQUFLLEVBQUM7b0JBRUwsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQ3BDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztvQkFF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QTtBQXZHWSxrQ0FBVzs7Ozs7QUNBeEI7SUFHSTtRQUVJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPO1lBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxPQUEyQztRQUNwRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuICAgIFxuICAgIHRleHRTZXJ2aWNlOiBJVGV4dFNlcnZpY2U7XG4gICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlLFxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZVxuICAgICAgXG4gICAgKSBcbiAgICB7XG4gICAgICAgIHRoaXMudGV4dFNlcnZpY2UgPSB0ZXh0U2VydmljZTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlID0gdmFsaWRhdG9yU2VydmljZTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XG5cbiAgICAgICAgICAgIHNlbGYudmFsaWRhdGVGb3JtKFwidW5zY3JhYmJsZXJGb3JtXCIpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nKXtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHZhbGlkYXRlRm9ybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IChmb3JtOiBIVE1MRWxlbWVudCk9PntcblxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxuICAgICAgICAgICAgICAgICAgICBmaW5kVGhpcyA9IGpRdWVyeShcIiNmaW5kSW5wdXRcIikudmFsKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5UaGlzID0galF1ZXJ5KFwiI3NjcmFiYmxlSW5wdXRcIikudmFsKCkudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgICAgIGlmKHZhbGlkKXtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2VsZi50ZXh0U2VydmljZS5VbnNjcmFiYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZFRoaXMsaW5UaGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNyZXN1bHRcIikudGV4dChyZXN1bHQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKGZvcm1JZCwgdmFsaWRhdGVGb3JtT3B0aW9ucyk7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy90ZXh0U2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHRleHRTZXJ2aWNlID0gbmV3IFRleHRTZXJ2aWNlKCk7XG5sZXQgdmFsaWRhdG9yU2VydmljZSA9IG5ldyBWYWxpZGF0b3JTZXJ2aWNlKCk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHRleHRTZXJ2aWNlLFxuICAgIHZhbGlkYXRvclNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRleHRTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U2VydmljZSBpbXBsZW1lbnRzIElUZXh0U2VydmljZVxue1xuICAgIHB1YmxpYyBDb25jYXQoYSA6c3RyaW5nLGI6c3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XG4gICAgfVxuXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxuICAgICAgICBmaW5kVGhpczogc3RyaW5nLCBcbiAgICAgICAgaW5UaGlzOiBzdHJpbmcsIFxuICAgICAgICByZXBsYWNlV2l0aFRoaXM6IHN0cmluZyk6IHN0cmluZ3tcblxuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChyZWdleCkgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKGZpbmRUaGlzLCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgVW5zY3JhYmJsZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nKSA6IGJvb2xlYW4ge1xuXG4gICAgICAgIGxldCBmaW5kVGhpc05vcm1hbGlzZWQgPSBmaW5kVGhpcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgaW5UaGlzTm9ybWFsaXNlZCA9IGluVGhpcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgc2NyYWJibGVBcnJheSA9IHRoaXMuVG9BcnJheShpblRoaXNOb3JtYWxpc2VkKSxcbiAgICAgICAgICAgIGlucHV0QXJyYXkgPSB0aGlzLlRvQXJyYXkoZmluZFRoaXNOb3JtYWxpc2VkKSxcbiAgICAgICAgICAgIHJlc3VsdHNBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5wdXRDaGFyYWN0ZXIgPSBpbnB1dEFycmF5W2ldLFxuICAgICAgICAgICAgICAgIGluZGV4T2YgPSBzY3JhYmJsZUFycmF5LmluZGV4T2YoaW5wdXRDaGFyYWN0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXhPZj4tMSl7XG4gICAgICAgICAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRDaGFyYWN0ZXIpO1xuICAgICAgICAgICAgICAgIHNjcmFiYmxlQXJyYXkuc3BsaWNlKGluZGV4T2YsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdEFycmF5VG9TdHJpbmcgPSByZXN1bHRzQXJyYXkuam9pbihcIlwiKSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdEFycmF5VG9TdHJpbmcgPT09IGZpbmRUaGlzTm9ybWFsaXNlZDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgR2V0QWxwaGFTdHJpbmcoKSA6IHN0cmluZyB7XG5cbiAgICAgICAgLy8gVGhpcyB3b3VsZCBjb21lIGZyb20gYSByZXBvc2l0b3J5XG4gICAgICAgIHZhciBzdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG5cbiAgICB9O1xuXG4gICAgR2V0TnVtZXJpY1N0cmluZygpIDogc3RyaW5nIHtcblxuICAgICAgICAvLyBUaGlzIHdvdWxkIGNvbWUgZnJvbSBhIHJlcG9zaXRvcnlcbiAgICAgICAgdmFyIHN0cmluZyA9IFwiMDEyMzQ1Njc4OVwiO1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuXG4gICAgfTtcblxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuVG9BcnJheShjcml0ZXJpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
