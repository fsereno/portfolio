(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(validatorService, randomGeneratorService, stringService) {
        this.validatorService = validatorService;
        this.randomGeneratorService = randomGeneratorService;
        this.stringService = stringService;
        this.lengthInput = jQuery("#lengthInput");
        this.result = jQuery("#result");
        this.formId = "randomGeneratorForm";
    }
    IndexController.prototype.init = function () {
        var _this = this;
        jQuery(function () {
            _this.validateForm();
        });
    };
    IndexController.prototype.validateForm = function () {
        var _this = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid(), length = _this.lengthInput.val();
                if (valid) {
                    var alpha = _this.stringService.Alphas, numeric = _this.stringService.Numerics, criteria = [alpha, numeric];
                    var result = _this.randomGeneratorService.GenerateRandomString(criteria, Number(length));
                    _this.result.text(result);
                }
            }
        };
        this.validatorService.ValidateForm(this.formId, validateFormOptions);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTtJQVNJLHlCQUVJLGdCQUFtQyxFQUNuQyxzQkFBK0MsRUFDL0MsYUFBNkI7UUFHN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFMRyxNQUFNLENBQUM7WUFFSCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQXVCQztRQXJCRyxJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVB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WlksNENBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByYW5kb21HZW5lcmF0b3JTZXJ2aWNlOiBJUmFuZG9tR2VuZXJhdG9yU2VydmljZTtcclxuICAgIHByaXZhdGUgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGxlbmd0aElucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSByZXN1bHQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UsXHJcbiAgICAgICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2VcclxuICAgIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucmFuZG9tR2VuZXJhdG9yU2VydmljZSA9IHJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zdHJpbmdTZXJ2aWNlID0gc3RyaW5nU2VydmljZTtcclxuICAgICAgICB0aGlzLmxlbmd0aElucHV0ID0galF1ZXJ5KFwiI2xlbmd0aElucHV0XCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0galF1ZXJ5KFwiI3Jlc3VsdFwiKTtcclxuICAgICAgICB0aGlzLmZvcm1JZCA9IFwicmFuZG9tR2VuZXJhdG9yRm9ybVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIGpRdWVyeSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlRm9ybSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZUZvcm0oKXtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRlRm9ybU9wdGlvbnMgPSB7XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKSxcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aElucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHZhbGlkKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFscGhhID0gdGhpcy5zdHJpbmdTZXJ2aWNlLkFscGhhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpYyA9IHRoaXMuc3RyaW5nU2VydmljZS5OdW1lcmljcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEgPSBbYWxwaGEsIG51bWVyaWNdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkdlbmVyYXRlUmFuZG9tU3RyaW5nKGNyaXRlcmlhLCBOdW1iZXIobGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQudGV4dChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybSh0aGlzLmZvcm1JZCwgdmFsaWRhdGVGb3JtT3B0aW9ucyk7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8gQ29udHJvbGxlcnNcclxuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQgeyBTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvUmFuZG9tR2VuZXJhdG9yU2VydmljZVwiXHJcblxyXG4vLyBSZXBvc2l0b3JpZXNcclxuaW1wb3J0IHsgU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9TdHJpbmdSZXBvc2l0b3J5XCI7XHJcblxyXG4vLyBSZXBvc2l0b3JpZXNcclxubGV0IHN0cmluZ1JlcG9zaXRvcnkgPSBuZXcgU3RyaW5nUmVwb3NpdG9yeSgpO1xyXG5cclxuLy8gSW5zdGFudGlhdGUgU2VydmljZXMgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvblxyXG5sZXQgc3RyaW5nU2VydmljZSA9IG5ldyBTdHJpbmdTZXJ2aWNlKHN0cmluZ1JlcG9zaXRvcnkpLFxyXG4gICAgdmFsaWRhdG9yU2VydmljZSA9IG5ldyBWYWxpZGF0b3JTZXJ2aWNlKCksXHJcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlID0gbmV3IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UoXHJcbiAgICBzdHJpbmdTZXJ2aWNlKTtcclxuXHJcbi8vIENvbnRyb2xsZXJzXHJcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXHJcbihcclxuICAgIHZhbGlkYXRvclNlcnZpY2UsXHJcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlLFxyXG4gICAgc3RyaW5nU2VydmljZVxyXG4pO1xyXG5cclxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJcInVzZSBzdHJpY3Q7XCJcclxuaW1wb3J0IHsgSVN0cmluZ1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nUmVwb3NpdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1JlcG9zaXRvcnkgaW1wbGVtZW50cyBJU3RyaW5nUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgcHVibGljIEFscGhhczogc3RyaW5nO1xyXG4gICAgcHVibGljIE51bWVyaWNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkFscGhhcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuICAgICAgICB0aGlzLk51bWVyaWNzID0gXCIwMTIzNDU2Nzg5XCI7XHJcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IFwiQkNERkdISktMTU5QUVJTVFZYWldZXCJcclxuICAgICAgICB0aGlzLlZvd2VscyA9IFwiQUVJT1VcIjtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdDtcIlxyXG5pbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2Uge1xyXG4gICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRlUmFuZG9tU3RyaW5nKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgb3V0cHV0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKGNyaXRlcmlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLnN0cmluZ1NlcnZpY2UuVG9BcnJheShjcml0ZXJpb24pO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleFRvUHVzaCA9IHRoaXMuR2VuZXJhdGUoYXJyYXkubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdGUgPSAodGFyZ2V0OiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0ICsgMSk7XHJcbn0iLCJcInVzZSBzdHJpY3Q7XCJcclxuaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJU3RyaW5nUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdSZXBvc2l0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nU2VydmljZSBpbXBsZW1lbnRzIElTdHJpbmdTZXJ2aWNlIHtcclxuICAgIHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5O1xyXG4gICAgQWxwaGFzOiBzdHJpbmc7XHJcbiAgICBOdW1lcmljczogc3RyaW5nO1xyXG4gICAgQ29uc3RvbmFudHM6IHN0cmluZztcclxuICAgIFZvd2Vsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cmluZ1JlcG9zaXRvcnk6IElTdHJpbmdSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5zdHJpbmdSZXBvc2l0b3J5ID0gc3RyaW5nUmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLkFscGhhcyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5BbHBoYXM7XHJcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5OdW1lcmljcztcclxuICAgICAgICB0aGlzLlZvd2VscyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5Wb3dlbHM7XHJcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IHRoaXMuc3RyaW5nUmVwb3NpdG9yeS5Db25zdG9uYW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ29uY2F0KGE6IHN0cmluZywgYjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZGVmaW5lZCBQYXJhbWV0ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgKyBcIiBcIiArIGI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEZpbmRSZXBsYWNlKFxyXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsXHJcbiAgICAgICAgaW5UaGlzOiBzdHJpbmcsXHJcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcclxuICAgICAgICAgICAgcmVwbGFjZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBmaW5kVGhpcyArIFwiXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGluVGhpcyA9IGluVGhpcy5yZXBsYWNlKHJlcGxhY2VSZWdleCwgcmVwbGFjZVdpdGhUaGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluVGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVG9BcnJheShpbnB1dDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlucHV0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdDtcIlxyXG5pbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBqUXVlcnkudmFsaWRhdG9yLmFkZE1ldGhvZChcIm5vbk51bWVyaWNcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZywgb3B0aW9uczogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0aW9uT3B0aW9ucyk6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdG9yIHtcclxuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiICsgZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yO1xyXG4gICAgfVxyXG59Il19
