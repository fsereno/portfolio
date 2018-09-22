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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLGFBQTZCLEVBQzdCLGdCQUFtQztRQUluQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsTUFBTSxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRTFDLElBQUcsS0FBSyxFQUFDO29CQUVMLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQzFDLFFBQVEsR0FBRyxDQUFDLEtB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LENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxPQUEyQztRQUNwRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHN0cmluZ1NlcnZpY2U6IElTdHJpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZSxcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcblxuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oXCJyYW5kb21HZW5lcmF0b3JGb3JtXCIpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nKXtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHZhbGlkYXRlRm9ybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IChmb3JtOiBIVE1MRWxlbWVudCk9PntcblxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBqUXVlcnkoXCIjbGVuZ3RoSW5wdXRcIikudmFsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodmFsaWQpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFscGhhID0gc2VsZi5zdHJpbmdTZXJ2aWNlLkFscGhhU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpYyA9IHNlbGYuc3RyaW5nU2VydmljZS5OdW1lcmljU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEgPSBbYWxwaGEsIG51bWVyaWNdO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzZWxmLnN0cmluZ1NlcnZpY2UuR2VuZXJhdGVSYW5kb20oY3JpdGVyaWEsIE51bWJlcihsZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3Jlc3VsdFwiKS50ZXh0KHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKGZvcm1JZCwgdmFsaWRhdGVGb3JtT3B0aW9ucyk7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIFJlcG9zaXRvcmllc1xuaW1wb3J0IHsgU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5XCI7XG5cbi8vIFJlcG9zaXRvcmllc1xubGV0IHN0cmluZ1JlcG9zaXRvcnkgPSBuZXcgU3RyaW5nUmVwb3NpdG9yeSgpO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgc3RyaW5nU2VydmljZSA9IG5ldyBTdHJpbmdTZXJ2aWNlKHN0cmluZ1JlcG9zaXRvcnkpO1xubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICBzdHJpbmdTZXJ2aWNlLFxuICAgIHZhbGlkYXRvclNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5nUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElTdHJpbmdSZXBvc2l0b3J5IHtcblxuICAgIHB1YmxpYyBBbHBoYVN0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljU3RyaW5nOiBzdHJpbmc7XG4gICAgcHVibGljIENvbnN0b25hbnRzOiBzdHJpbmc7XG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB0aGlzLkFscGhhU3RyaW5nID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICB0aGlzLk51bWVyaWNTdHJpbmcgPSBcIjAxMjM0NTY3ODlcIjtcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IFwiQkNERkdISktMTU5QUVJTVFZYWldZXCJcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSBcIkFFSU9VXCI7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdSZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdTZXJ2aWNlIGltcGxlbWVudHMgSVN0cmluZ1NlcnZpY2VcbntcbiAgICBwdWJsaWMgQWxwaGFTdHJpbmc6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY1N0cmluZzogc3RyaW5nO1xuICAgIHB1YmxpYyBDb25zdG9uYW50czogc3RyaW5nO1xuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcbiAgICBwcml2YXRlIHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgc3RyaW5nUmVwb3NpdG9yeTogSVN0cmluZ1JlcG9zaXRvcnlcbiAgICApe1xuXG4gICAgICAgIHRoaXMuc3RyaW5nUmVwb3NpdG9yeSA9IHN0cmluZ1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuQWxwaGFTdHJpbmcgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuQWxwaGFTdHJpbmc7XG4gICAgICAgIHRoaXMuTnVtZXJpY1N0cmluZyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5BbHBoYVN0cmluZztcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuVm93ZWxzO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBHZW5lcmF0ZVJhbmRvbShjcml0ZXJpYTogc3RyaW5nW10sIGxlbmd0aDpudW1iZXIpIDogc3RyaW5nIHtcblxuICAgICAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IFtdXG5cbiAgICAgICAgd2hpbGUob3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xuXG4gICAgICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKGNyaXRlcmlvbiA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLlRvQXJyYXkoY3JpdGVyaW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGk9PT1pbmRleFRvUHVzaCAmJiBvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGNoYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IG91dHB1dC5qb2luKFwiXCIpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG59IiwiaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlXG57XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICBqUXVlcnkudmFsaWRhdG9yLmFkZE1ldGhvZChcIm5vbk51bWVyaWNcIiwgZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xuICAgIH1cbn0iXX0=
