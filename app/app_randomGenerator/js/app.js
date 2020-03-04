(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(validatorService, randomGeneratorService, stringService) {
        this.validatorService = validatorService;
        this.randomGeneratorService = randomGeneratorService;
        this.lengthInput = jQuery("#lengthInput");
        this.result = jQuery("#result");
        this.formId = "randomGeneratorForm";
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
                var valid = jQuery(form).valid(), length = self.lengthInput.val();
                if (valid) {
                    var alpha = self.stringService.Alphas, numeric = self.stringService.Numerics, criteria = [alpha, numeric];
                    var result = self.randomGeneratorService.GenerateRandomString(criteria, Number(length));
                    self.result.text(result);
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
var RandomGeneratorService_1 = require("../../typeScript/Services/RandomGeneratorService");
// Repositories
var StringRepository_1 = require("../../typeScript/Repositories/StringRepository");
// Repositories
var stringRepository = new StringRepository_1.StringRepository();
// Instantiate Services with dependency injection
var stringService = new StringService_1.StringService(stringRepository), validatorService = new validatorService_1.ValidatorService(), randomGeneratorService = new RandomGeneratorService_1.RandomGeneratorService(stringService);
// Controllers
var indexController = new IndexController_1.IndexController(validatorService, randomGeneratorService, stringService);
indexController.init();

},{"../../typeScript/Repositories/StringRepository":3,"../../typeScript/Services/RandomGeneratorService":4,"../../typeScript/Services/StringService":5,"../../typeScript/Services/validatorService":6,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringRepository = /** @class */ (function () {
    function StringRepository() {
        this.Alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.Numerics = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY";
        this.Vowels = "AEIOU";
    }
    return StringRepository;
}());
exports.StringRepository = StringRepository;

},{}],4:[function(require,module,exports){
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomGeneratorService = /** @class */ (function () {
    function RandomGeneratorService(stringService) {
        this.Generate = function (target) { return Math.floor(Math.random() * target + 1); };
        this.stringService = stringService;
    }
    RandomGeneratorService.prototype.GenerateRandomString = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.stringService.ToArray(criterion);
                array.forEach(function (char, i) {
                    var indexToPush = _this.Generate(array.length);
                    if (i === indexToPush && output.length < length) {
                        output.push(char);
                    }
                });
            });
        }
        var result = output.join("");
        return result;
    };
    return RandomGeneratorService;
}());
exports.RandomGeneratorService = RandomGeneratorService;

},{}],5:[function(require,module,exports){
"use strict;";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringService = /** @class */ (function () {
    function StringService(stringRepository) {
        this.stringRepository = stringRepository;
        this.Alphas = this.stringRepository.Alphas;
        this.Numerics = this.stringRepository.Numerics;
        this.Vowels = this.stringRepository.Vowels;
        this.Constonants = this.stringRepository.Constonants;
    }
    StringService.prototype.Concat = function (a, b) {
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

},{}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTtJQVNJLHlCQUVJLGdCQUFtQyxFQUNuQyxzQkFBK0MsRUFDL0MsYUFBNkI7UUFHN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUs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SUFBQTtBQVpZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZTtcbiAgICBwcml2YXRlIGxlbmd0aElucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgcmVzdWx0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UsXG4gICAgICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2U6IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlLFxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZVxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UgPSByYW5kb21HZW5lcmF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmxlbmd0aElucHV0ID0galF1ZXJ5KFwiI2xlbmd0aElucHV0XCIpO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IGpRdWVyeShcIiNyZXN1bHRcIik7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJyYW5kb21HZW5lcmF0b3JGb3JtXCI7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKCl7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGhJbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxwaGEgPSBzZWxmLnN0cmluZ1NlcnZpY2UuQWxwaGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpYyA9IHNlbGYuc3RyaW5nU2VydmljZS5OdW1lcmljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhID0gW2FscGhhLCBudW1lcmljXTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkdlbmVyYXRlUmFuZG9tU3RyaW5nKGNyaXRlcmlhLCBOdW1iZXIobGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0LnRleHQocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0oc2VsZi5mb3JtSWQsIHZhbGlkYXRlRm9ybU9wdGlvbnMpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1JhbmRvbUdlbmVyYXRvclNlcnZpY2VcIlxuXG4vLyBSZXBvc2l0b3JpZXNcbmltcG9ydCB7IFN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvU3RyaW5nUmVwb3NpdG9yeVwiO1xuXG4vLyBSZXBvc2l0b3JpZXNcbmxldCBzdHJpbmdSZXBvc2l0b3J5ID0gbmV3IFN0cmluZ1JlcG9zaXRvcnkoKTtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHN0cmluZ1NlcnZpY2UgPSBuZXcgU3RyaW5nU2VydmljZShzdHJpbmdSZXBvc2l0b3J5KSxcbiAgICB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKSxcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlID0gbmV3IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UoXG4gICAgc3RyaW5nU2VydmljZSk7XG5cbi8vIENvbnRyb2xsZXJzXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxuKFxuICAgIHZhbGlkYXRvclNlcnZpY2UsXG4gICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZSxcbiAgICBzdHJpbmdTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsIlwidXNlIHN0cmljdDtcIlxuaW1wb3J0IHsgSVN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5nUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElTdHJpbmdSZXBvc2l0b3J5IHtcblxuICAgIHB1YmxpYyBBbHBoYXM6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY3M6IHN0cmluZztcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBwdWJsaWMgVm93ZWxzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5BbHBoYXMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICAgIHRoaXMuTnVtZXJpY3MgPSBcIjAxMjM0NTY3ODlcIjtcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IFwiQkNERkdISktMTU5QUVJTVFZYWldZXCJcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSBcIkFFSU9VXCI7XG4gICAgfVxufSIsIlwidXNlIHN0cmljdDtcIlxuaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tR2VuZXJhdG9yU2VydmljZSBpbXBsZW1lbnRzIElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIHtcbiAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmluZ1NlcnZpY2U6IElTdHJpbmdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nU2VydmljZSA9IHN0cmluZ1NlcnZpY2U7XG4gICAgfVxuXG4gICAgR2VuZXJhdGVSYW5kb21TdHJpbmcoY3JpdGVyaWE6IHN0cmluZ1tdLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY3JpdGVyaWEuZm9yRWFjaChjcml0ZXJpb24gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuc3RyaW5nU2VydmljZS5Ub0FycmF5KGNyaXRlcmlvbik7XG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhUb1B1c2ggPSB0aGlzLkdlbmVyYXRlKGFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpbmRleFRvUHVzaCAmJiBvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBHZW5lcmF0ZSA9ICh0YXJnZXQ6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXQgKyAxKTtcbn0iLCJcInVzZSBzdHJpY3Q7XCJcbmltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IElTdHJpbmdSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1JlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZSB7XG4gICAgc3RyaW5nUmVwb3NpdG9yeTogSVN0cmluZ1JlcG9zaXRvcnk7XG4gICAgQWxwaGFzOiBzdHJpbmc7XG4gICAgTnVtZXJpY3M6IHN0cmluZztcbiAgICBDb25zdG9uYW50czogc3RyaW5nO1xuICAgIFZvd2Vsczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyaW5nUmVwb3NpdG9yeTogSVN0cmluZ1JlcG9zaXRvcnkpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdSZXBvc2l0b3J5ID0gc3RyaW5nUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5BbHBoYXMgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuQWxwaGFzO1xuICAgICAgICB0aGlzLk51bWVyaWNzID0gdGhpcy5zdHJpbmdSZXBvc2l0b3J5Lk51bWVyaWNzO1xuICAgICAgICB0aGlzLlZvd2VscyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5Wb3dlbHM7XG4gICAgICAgIHRoaXMuQ29uc3RvbmFudHMgPSB0aGlzLnN0cmluZ1JlcG9zaXRvcnkuQ29uc3RvbmFudHM7XG4gICAgfVxuXG4gICAgcHVibGljIENvbmNhdChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZGVmaW5lZCBQYXJhbWV0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsXG4gICAgICAgIGluVGhpczogc3RyaW5nLFxuICAgICAgICByZXBsYWNlV2l0aFRoaXM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcbiAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgY291bnQgPSAoaW5UaGlzLm1hdGNoKHNlYXJjaFJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpblRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIFRvQXJyYXkoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpbnB1dFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiXCJ1c2Ugc3RyaWN0O1wiXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XG4gICAgICAgIGxldCB2YWxpZGF0b3IgPSBqUXVlcnkoXCIjXCIgKyBmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xuICAgIH1cbn0iXX0=
