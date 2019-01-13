(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(validatorService, randomGeneratorService) {
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
                    var alpha = self.randomGeneratorService.Alphas, numeric = self.randomGeneratorService.Numerics, criteria = [alpha, numeric];
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
var RandomGeneratorRepository_1 = require("../../typeScript/Repositories/RandomGeneratorRepository");
// Repositories
var randomGeneratorRepository = new RandomGeneratorRepository_1.RandomGeneratorRepository();
// Instantiate Services with dependency injection
var stringService = new StringService_1.StringService(), validatorService = new validatorService_1.ValidatorService(), randomGeneratorService = new RandomGeneratorService_1.RandomGeneratorService(stringService, randomGeneratorRepository);
// Controllers
var indexController = new IndexController_1.IndexController(validatorService, randomGeneratorService);
indexController.init();

},{"../../typeScript/Repositories/RandomGeneratorRepository":3,"../../typeScript/Services/RandomGeneratorService":4,"../../typeScript/Services/StringService":5,"../../typeScript/Services/validatorService":6,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomGeneratorRepository = /** @class */ (function () {
    function RandomGeneratorRepository() {
        this.Alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.Numerics = "0123456789";
        this.Constonants = "BCDFGHJKLMNPQRSTVXZWY";
        this.Vowels = "AEIOU";
    }
    return RandomGeneratorRepository;
}());
exports.RandomGeneratorRepository = RandomGeneratorRepository;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomGeneratorService = /** @class */ (function () {
    function RandomGeneratorService(stringService, randomGeneratorRepository) {
        this.Generate = function (target) { return Math.floor(Math.random() * target + 1); };
        this.stringService = stringService;
        this.randomGeneratorRepository = randomGeneratorRepository;
        this.Alphas = this.randomGeneratorRepository.Alphas;
        this.Numerics = this.randomGeneratorRepository.Numerics;
        this.Vowels = this.randomGeneratorRepository.Vowels;
        this.Constonants = this.randomGeneratorRepository.Constonants;
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

},{}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9SYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQVFJLHlCQUdJLGdCQUFtQyxFQUNuQyxzQkFBK0M7UUFJL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFD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b3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgeyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Q29udHJvbGxlciAge1xuICAgIFxuICAgIHByaXZhdGUgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSByYW5kb21HZW5lcmF0b3JTZXJ2aWNlOiBJUmFuZG9tR2VuZXJhdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGxlbmd0aElucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgcmVzdWx0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgZm9ybUlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSxcbiAgICAgICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UgPSByYW5kb21HZW5lcmF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmxlbmd0aElucHV0ID0galF1ZXJ5KFwiI2xlbmd0aElucHV0XCIpO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IGpRdWVyeShcIiNyZXN1bHRcIik7XG4gICAgICAgIHRoaXMuZm9ybUlkID0gXCJyYW5kb21HZW5lcmF0b3JGb3JtXCI7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKCl7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGhJbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxwaGEgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuQWxwaGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpYyA9IHNlbGYucmFuZG9tR2VuZXJhdG9yU2VydmljZS5OdW1lcmljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhID0gW2FscGhhLCBudW1lcmljXTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkdlbmVyYXRlUmFuZG9tU3RyaW5nKGNyaXRlcmlhLCBOdW1iZXIobGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0LnRleHQocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0oc2VsZi5mb3JtSWQsIHZhbGlkYXRlRm9ybU9wdGlvbnMpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1JhbmRvbUdlbmVyYXRvclNlcnZpY2VcIlxuXG4vLyBSZXBvc2l0b3JpZXNcbmltcG9ydCB7IFJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9SZXBvc2l0b3JpZXMvUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeVwiO1xuXG4vLyBSZXBvc2l0b3JpZXNcbmxldCByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5ID0gbmV3IFJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkoKTtcblxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxubGV0IHN0cmluZ1NlcnZpY2UgPSBuZXcgU3RyaW5nU2VydmljZSgpLFxuICAgIHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpLFxuICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2UgPSBuZXcgUmFuZG9tR2VuZXJhdG9yU2VydmljZShcbiAgICBzdHJpbmdTZXJ2aWNlLFxuICAgIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcbiAgICApO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB2YWxpZGF0b3JTZXJ2aWNlLFxuICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2Vcbik7XG5cbmluZGV4Q29udHJvbGxlci5pbml0KCk7IiwiaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IHtcblxuICAgIHB1YmxpYyBBbHBoYXM6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY3M6IHN0cmluZztcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBwdWJsaWMgVm93ZWxzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIHRoaXMuQWxwaGFzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICB0aGlzLk51bWVyaWNzID0gXCIwMTIzNDU2Nzg5XCI7XG4gICAgICAgIHRoaXMuQ29uc3RvbmFudHMgPSBcIkJDREZHSEpLTE1OUFFSU1RWWFpXWVwiXG4gICAgICAgIHRoaXMuVm93ZWxzID0gXCJBRUlPVVwiO1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tR2VuZXJhdG9yU2VydmljZSBpbXBsZW1lbnRzIElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXG57XG4gICAgcHVibGljIEFscGhhczogc3RyaW5nO1xuICAgIHB1YmxpYyBOdW1lcmljczogc3RyaW5nO1xuICAgIHB1YmxpYyBDb25zdG9uYW50czogc3RyaW5nO1xuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcbiAgICBwcml2YXRlIHN0cmluZ1NlcnZpY2U6IElTdHJpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeTogSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZSxcbiAgICAgICAgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeTogSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcbiAgICApe1xuXG4gICAgICAgIHRoaXMuc3RyaW5nU2VydmljZSA9IHN0cmluZ1NlcnZpY2U7XG4gICAgICAgIHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSA9IHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuQWxwaGFzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LkFscGhhcztcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS5OdW1lcmljcztcbiAgICAgICAgdGhpcy5Wb3dlbHMgPSB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkuVm93ZWxzO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgR2VuZXJhdGVSYW5kb21TdHJpbmcoY3JpdGVyaWE6IHN0cmluZ1tdLCBsZW5ndGg6bnVtYmVyKSA6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBbXVxuXG4gICAgICAgIHdoaWxlKG91dHB1dC5sZW5ndGggPCBsZW5ndGgpIHtcblxuICAgICAgICAgICAgY3JpdGVyaWEuZm9yRWFjaChjcml0ZXJpb24gPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5zdHJpbmdTZXJ2aWNlLlRvQXJyYXkoY3JpdGVyaW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBhcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IHRoaXMuR2VuZXJhdGUoYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIEdlbmVyYXRlID0gKHRhcmdldDogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldCArIDEpO1xufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuXG4gICAgY29uc3RydWN0b3IoKXt9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBcbiAgICAgICAgLy8gQ29uc2lkZXJpbmcgdGhlIGJlc3Qgd2F5IG9mIGhhbmRsaW5nIHVuZGVmaW5lZCBwYXJhbXMgdGhhdCB3aWxsIGFsbG93IGZvciB1bmhhcHB5IHRlc3QgcGF0aHMgd2l0aCBNb2NhaC9DaGFpXG4gICAgICAgIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZWZpbmVkIFBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
