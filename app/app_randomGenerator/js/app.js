(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController(validatorService, randomGeneratorService) {
        this.validatorService = validatorService;
        this.randomGeneratorService = randomGeneratorService;
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
                    var alpha = self.randomGeneratorService.Alphas, numeric = self.randomGeneratorService.Numerics, criteria = [alpha, numeric];
                    var result = self.randomGeneratorService.GenerateRandom(criteria, Number(length));
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
        this.stringService = stringService;
        this.randomGeneratorRepository = randomGeneratorRepository;
        this.Alphas = this.randomGeneratorRepository.Alphas;
        this.Numerics = this.randomGeneratorRepository.Numerics;
        this.Vowels = this.randomGeneratorRepository.Vowels;
        this.Constonants = this.randomGeneratorRepository.Constonants;
    }
    RandomGeneratorService.prototype.GenerateRandom = function (criteria, length) {
        var _this = this;
        var output = [];
        while (output.length < length) {
            criteria.forEach(function (criterion) {
                var array = _this.stringService.ToArray(criterion);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9SYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLGdCQUFtQyxFQUNuQyxzQkFBK0M7UUFJL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztJQUN6RCxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixNQUFNLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLE1BQWM7UUFFdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDNUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFMUMsSUFBRyxLQUFLLEVBQUM7b0JBRUwsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFD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RTtZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxzQ0FBYTs7Ozs7QUNBMUI7SUFHSTtRQUVJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPO1lBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxPQUEyQztRQUNwRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xuaW1wb3J0IHsgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZSxcbiAgICAgICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UgPSByYW5kb21HZW5lcmF0b3JTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcblxuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oXCJyYW5kb21HZW5lcmF0b3JGb3JtXCIpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nKXtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHZhbGlkYXRlRm9ybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IChmb3JtOiBIVE1MRWxlbWVudCk9PntcblxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBqUXVlcnkoXCIjbGVuZ3RoSW5wdXRcIikudmFsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodmFsaWQpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFscGhhID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLkFscGhhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyaWMgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuTnVtZXJpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYSA9IFthbHBoYSwgbnVtZXJpY107XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNlbGYucmFuZG9tR2VuZXJhdG9yU2VydmljZS5HZW5lcmF0ZVJhbmRvbShjcml0ZXJpYSwgTnVtYmVyKGxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjcmVzdWx0XCIpLnRleHQocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudmFsaWRhdG9yU2VydmljZS5WYWxpZGF0ZUZvcm0oZm9ybUlkLCB2YWxpZGF0ZUZvcm1PcHRpb25zKTtcbiAgICB9XG59IiwiXG4vLyBDb250cm9sbGVyc1xuaW1wb3J0IHsgSW5kZXhDb250cm9sbGVyIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvU3RyaW5nU2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlXCJcblxuLy8gUmVwb3NpdG9yaWVzXG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvUmVwb3NpdG9yaWVzL1JhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcblxuLy8gUmVwb3NpdG9yaWVzXG5sZXQgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSA9IG5ldyBSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5KCk7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCBzdHJpbmdTZXJ2aWNlID0gbmV3IFN0cmluZ1NlcnZpY2UoKSxcbiAgICB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKSxcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlID0gbmV3IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UoXG4gICAgc3RyaW5nU2VydmljZSxcbiAgICByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XG4gICAgKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdmFsaWRhdG9yU2VydmljZSxcbiAgICByYW5kb21HZW5lcmF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgaW1wbGVtZW50cyBJUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSB7XG5cbiAgICBwdWJsaWMgQWxwaGFzOiBzdHJpbmc7XG4gICAgcHVibGljIE51bWVyaWNzOiBzdHJpbmc7XG4gICAgcHVibGljIENvbnN0b25hbnRzOiBzdHJpbmc7XG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB0aGlzLkFscGhhcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICAgICAgdGhpcy5OdW1lcmljcyA9IFwiMDEyMzQ1Njc4OVwiO1xuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gXCJCQ0RGR0hKS0xNTlBRUlNUVlhaV1lcIlxuICAgICAgICB0aGlzLlZvd2VscyA9IFwiQUVJT1VcIjtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmRvbUdlbmVyYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZVxue1xuICAgIHB1YmxpYyBBbHBoYXM6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY3M6IHN0cmluZztcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcbiAgICBwdWJsaWMgVm93ZWxzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZTtcbiAgICBwcml2YXRlIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk6IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2UsXG4gICAgICAgIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk6IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XG4gICAgKXtcblxuICAgICAgICB0aGlzLnN0cmluZ1NlcnZpY2UgPSBzdHJpbmdTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgPSByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLkFscGhhcyA9IHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS5BbHBoYXM7XG4gICAgICAgIHRoaXMuTnVtZXJpY3MgPSB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkuTnVtZXJpY3M7XG4gICAgICAgIHRoaXMuVm93ZWxzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LlZvd2VscztcbiAgICAgICAgdGhpcy5Db25zdG9uYW50cyA9IHRoaXMucmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeS5Db25zdG9uYW50cztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuc3RyaW5nU2VydmljZS5Ub0FycmF5KGNyaXRlcmlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhUb1B1c2ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihpPT09aW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBvdXRwdXQuam9pbihcIlwiKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxufSIsImltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVN0cmluZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1NlcnZpY2UgaW1wbGVtZW50cyBJU3RyaW5nU2VydmljZVxue1xuXG4gICAgY29uc3RydWN0b3IoKXt9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
