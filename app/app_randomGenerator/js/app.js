(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(stringService, validatorService) {
        this.stringService = stringService;
        this.validatorService = validatorService;
    }
    IndexController.prototype.init = function () {
        var self = this;
        jQuery(function () {
            self.validateForm("randomGeneratorForm");
        });
    };
    IndexController.prototype.validateForm = function (formId) {
        var self = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid(), length = jQuery("#lengthInput").val();
                if (valid) {
                    var alpha = self.stringService.AlphaString, numeric = self.stringService.NumericString, criteria = [alpha, numeric];
                    var result = self.stringService.GenerateRandom(criteria, Number(length));
                    jQuery("#result").text(result);
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
var StringService_1 = require("../../typeScript/Services/StringService");
var validatorService_1 = require("../../typeScript/Services/validatorService");
// Repositories
var StringRepository_1 = require("../../typeScript/Repositories/StringRepository");
// Repositories
var stringRepository = new StringRepository_1.StringRepository();
// Instantiate Services with dependency injection
var stringService = new StringService_1.StringService(stringRepository);
var validatorService = new validatorService_1.ValidatorService();
// Controllers
var indexController = new IndexController_1.IndexController(stringService, validatorService);
indexController.init();
},{"../../typeScript/Repositories/StringRepository":3,"../../typeScript/Services/StringService":4,"../../typeScript/Services/validatorService":5,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringRepository = /** @class */ (function () {
    function StringRepository() {
        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY";
        this.Vowels = "AEIOU";
    }
    return StringRepository;
}());
exports.StringRepository = StringRepository;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringService = /** @class */ (function () {
    function StringService(stringRepository) {
        this.stringRepository = stringRepository;
        this.AlphaString = this.stringRepository.AlphaString;
        this.NumericString = this.stringRepository.AlphaString;
        this.Vowels = this.stringRepository.Vowels;
        this.Constonants = this.stringRepository.Constonants;
    }
    StringService.prototype.Concat = function (a, b) {
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
    StringService.prototype.GenerateRandom = function (criteria, length) {
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
    return StringService;
}());
exports.StringService = StringService;
},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLGFBQTZCLEVBQzdCLGdCQUFtQztRQUluQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsTUFBTSxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRTFDLElBQUcsS0FBSyxFQUFDO29CQUVMLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQzFDLFFBQVEsR0FBRyxDQUFDLEtB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QyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQTJDO1FBQ3BFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyICB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcblxyXG4gICAgICAgIHN0cmluZ1NlcnZpY2U6IElTdHJpbmdTZXJ2aWNlLFxyXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlXHJcbiAgICAgIFxyXG4gICAgKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybShcInJhbmRvbUdlbmVyYXRvckZvcm1cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlRm9ybU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkID0galF1ZXJ5KGZvcm0pLnZhbGlkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0galF1ZXJ5KFwiI2xlbmd0aElucHV0XCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFscGhhID0gc2VsZi5zdHJpbmdTZXJ2aWNlLkFscGhhU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1lcmljID0gc2VsZi5zdHJpbmdTZXJ2aWNlLk51bWVyaWNTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhID0gW2FscGhhLCBudW1lcmljXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNlbGYuc3RyaW5nU2VydmljZS5HZW5lcmF0ZVJhbmRvbShjcml0ZXJpYSwgTnVtYmVyKGxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNyZXN1bHRcIikudGV4dChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybShmb3JtSWQsIHZhbGlkYXRlRm9ybU9wdGlvbnMpO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vIENvbnRyb2xsZXJzXHJcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcclxuXHJcbi8vIFJlcG9zaXRvcmllc1xyXG5pbXBvcnQgeyBTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvUmVwb3NpdG9yaWVzL1N0cmluZ1JlcG9zaXRvcnlcIjtcclxuXHJcbi8vIFJlcG9zaXRvcmllc1xyXG5sZXQgc3RyaW5nUmVwb3NpdG9yeSA9IG5ldyBTdHJpbmdSZXBvc2l0b3J5KCk7XHJcblxyXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXHJcbmxldCBzdHJpbmdTZXJ2aWNlID0gbmV3IFN0cmluZ1NlcnZpY2Uoc3RyaW5nUmVwb3NpdG9yeSk7XHJcbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcclxuXHJcbi8vIENvbnRyb2xsZXJzXHJcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXHJcbihcclxuICAgIHN0cmluZ1NlcnZpY2UsXHJcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXHJcbik7XHJcblxyXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1JlcG9zaXRvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdSZXBvc2l0b3J5IGltcGxlbWVudHMgSVN0cmluZ1JlcG9zaXRvcnkge1xyXG5cclxuICAgIHB1YmxpYyBBbHBoYVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIE51bWVyaWNTdHJpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBDb25zdG9uYW50czogc3RyaW5nO1xyXG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbiAgICAgICAgdGhpcy5OdW1lcmljU3RyaW5nID0gXCIwMTIzNDU2Nzg5XCI7XHJcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IFwiQkNERkdISktMTU5QUVJTVFZYWldZXCJcclxuICAgICAgICB0aGlzLlZvd2VscyA9IFwiQUVJT1VcIjtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nUmVwb3NpdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxyXG57XHJcbiAgICBwdWJsaWMgQWxwaGFTdHJpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyBOdW1lcmljU3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RyaW5nUmVwb3NpdG9yeTogSVN0cmluZ1JlcG9zaXRvcnlcclxuXHJcbiAgICBjb25zdHJ1Y3RvclxyXG4gICAgKFxyXG4gICAgICAgIHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5XHJcbiAgICApe1xyXG5cclxuICAgICAgICB0aGlzLnN0cmluZ1JlcG9zaXRvcnkgPSBzdHJpbmdSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuQWxwaGFTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5OdW1lcmljU3RyaW5nID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkFscGhhU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuVm93ZWxzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LlZvd2VscztcclxuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxyXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxyXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcclxuICAgICAgICByZXBsYWNlV2l0aFRoaXM6IHN0cmluZyk6IHN0cmluZ3tcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBmaW5kVGhpcyArIFwiXFxcXGJcIiksXHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IChpblRoaXMubWF0Y2goc2VhcmNoUmVnZXgpIHx8IFtdKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKHJlcGxhY2VSZWdleCwgcmVwbGFjZVdpdGhUaGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGluVGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVG9BcnJheShpbnB1dDogc3RyaW5nKSA6IHN0cmluZ1tdIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChpbnB1dFtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgICAgIHdoaWxlKG91dHB1dC5sZW5ndGggPCBsZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLlRvQXJyYXkoY3JpdGVyaW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGk9PT1pbmRleFRvUHVzaCAmJiBvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBvdXRwdXQuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlXHJcbntcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XHJcbiAgICB9XHJcbn0iXX0=
