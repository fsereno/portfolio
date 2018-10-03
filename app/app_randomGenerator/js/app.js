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
                    var result = self.randomGeneratorService.GenerateRandom(criteria, Number(length));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1JlcG9zaXRvcmllcy9SYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQVFJLHlCQUdJLGdCQUFtQyxFQUNuQyxzQkFBK0M7UUFJL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBRUksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFD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QWE7UUFFeEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHNDQUFhOzs7O0FDQTFCO0lBR0k7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztZQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JVmFsaWRhdG9yU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlU2NyaXB0L0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBJVmFsaWRhdG9yU2VydmljZTtcclxuICAgIHByaXZhdGUgcmFuZG9tR2VuZXJhdG9yU2VydmljZTogSVJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGxlbmd0aElucHV0OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSByZXN1bHQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcbiAgICBwcml2YXRlIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yXHJcbiAgICAoXHJcblxyXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHJhbmRvbUdlbmVyYXRvclNlcnZpY2U6IElSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXHJcbiAgICAgIFxyXG4gICAgKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucmFuZG9tR2VuZXJhdG9yU2VydmljZSA9IHJhbmRvbUdlbmVyYXRvclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sZW5ndGhJbnB1dCA9IGpRdWVyeShcIiNsZW5ndGhJbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGpRdWVyeShcIiNyZXN1bHRcIik7XHJcbiAgICAgICAgdGhpcy5mb3JtSWQgPSBcInJhbmRvbUdlbmVyYXRvckZvcm1cIjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudmFsaWRhdGVGb3JtKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGb3JtKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogKGZvcm06IEhUTUxFbGVtZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGpRdWVyeShmb3JtKS52YWxpZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IHNlbGYubGVuZ3RoSW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHZhbGlkKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWxwaGEgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuQWxwaGFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1lcmljID0gc2VsZi5yYW5kb21HZW5lcmF0b3JTZXJ2aWNlLk51bWVyaWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYSA9IFthbHBoYSwgbnVtZXJpY107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzZWxmLnJhbmRvbUdlbmVyYXRvclNlcnZpY2UuR2VuZXJhdGVSYW5kb20oY3JpdGVyaWEsIE51bWJlcihsZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc3VsdC50ZXh0KHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKHNlbGYuZm9ybUlkLCB2YWxpZGF0ZUZvcm1PcHRpb25zKTtcclxuICAgIH1cclxufSIsIlxyXG4vLyBDb250cm9sbGVyc1xyXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7IFN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJhbmRvbUdlbmVyYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9SYW5kb21HZW5lcmF0b3JTZXJ2aWNlXCJcclxuXHJcbi8vIFJlcG9zaXRvcmllc1xyXG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvUmVwb3NpdG9yaWVzL1JhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcclxuXHJcbi8vIFJlcG9zaXRvcmllc1xyXG5sZXQgcmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSA9IG5ldyBSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5KCk7XHJcblxyXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXHJcbmxldCBzdHJpbmdTZXJ2aWNlID0gbmV3IFN0cmluZ1NlcnZpY2UoKSxcclxuICAgIHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpLFxyXG4gICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZSA9IG5ldyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlKFxyXG4gICAgc3RyaW5nU2VydmljZSxcclxuICAgIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcclxuICAgICk7XHJcblxyXG4vLyBDb250cm9sbGVyc1xyXG5sZXQgaW5kZXhDb250cm9sbGVyID0gbmV3IEluZGV4Q29udHJvbGxlclxyXG4oXHJcbiAgICB2YWxpZGF0b3JTZXJ2aWNlLFxyXG4gICAgcmFuZG9tR2VuZXJhdG9yU2VydmljZVxyXG4pO1xyXG5cclxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IHtcclxuXHJcbiAgICBwdWJsaWMgQWxwaGFzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTnVtZXJpY3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBDb25zdG9uYW50czogc3RyaW5nO1xyXG4gICAgcHVibGljIFZvd2Vsczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIHRoaXMuQWxwaGFzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG4gICAgICAgIHRoaXMuTnVtZXJpY3MgPSBcIjAxMjM0NTY3ODlcIjtcclxuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gXCJCQ0RGR0hKS0xNTlBRUlNUVlhaV1lcIlxyXG4gICAgICAgIHRoaXMuVm93ZWxzID0gXCJBRUlPVVwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVN0cmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUmFuZG9tR2VuZXJhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lSYW5kb21HZW5lcmF0b3JTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21HZW5lcmF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVJhbmRvbUdlbmVyYXRvclNlcnZpY2Vcclxue1xyXG4gICAgcHVibGljIEFscGhhczogc3RyaW5nO1xyXG4gICAgcHVibGljIE51bWVyaWNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ29uc3RvbmFudHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBWb3dlbHM6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RyaW5nU2VydmljZTogSVN0cmluZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnk6IElSYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5XHJcblxyXG4gICAgY29uc3RydWN0b3JcclxuICAgIChcclxuICAgICAgICBzdHJpbmdTZXJ2aWNlOiBJU3RyaW5nU2VydmljZSxcclxuICAgICAgICByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5OiBJUmFuZG9tR2VuZXJhdG9yUmVwb3NpdG9yeVxyXG4gICAgKXtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJpbmdTZXJ2aWNlID0gc3RyaW5nU2VydmljZTtcclxuICAgICAgICB0aGlzLnJhbmRvbUdlbmVyYXRvclJlcG9zaXRvcnkgPSByYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuQWxwaGFzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LkFscGhhcztcclxuICAgICAgICB0aGlzLk51bWVyaWNzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5Lk51bWVyaWNzO1xyXG4gICAgICAgIHRoaXMuVm93ZWxzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LlZvd2VscztcclxuICAgICAgICB0aGlzLkNvbnN0b25hbnRzID0gdGhpcy5yYW5kb21HZW5lcmF0b3JSZXBvc2l0b3J5LkNvbnN0b25hbnRzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBHZW5lcmF0ZVJhbmRvbShjcml0ZXJpYTogc3RyaW5nW10sIGxlbmd0aDpudW1iZXIpIDogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBbXVxyXG5cclxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBjcml0ZXJpYS5mb3JFYWNoKGNyaXRlcmlvbiA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5zdHJpbmdTZXJ2aWNlLlRvQXJyYXkoY3JpdGVyaW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGk9PT1pbmRleFRvUHVzaCAmJiBvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBvdXRwdXQuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nU2VydmljZSBpbXBsZW1lbnRzIElTdHJpbmdTZXJ2aWNlXHJcbntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIFxyXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcclxuICAgICAgICBmaW5kVGhpczogc3RyaW5nLCBcclxuICAgICAgICBpblRoaXM6IHN0cmluZywgXHJcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoaW5UaGlzLm1hdGNoKHNlYXJjaFJlZ2V4KSB8fCBbXSkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpblRoaXMgPSBpblRoaXMucmVwbGFjZShyZXBsYWNlUmVnZXgsIHJlcGxhY2VXaXRoVGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiBpblRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRvQXJyYXkoaW5wdXQ6IHN0cmluZykgOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yU2VydmljZSBpbXBsZW1lbnRzIElWYWxpZGF0b3JTZXJ2aWNlXHJcbntcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGlzTmFOKE51bWJlcih2YWx1ZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRvciA9IGpRdWVyeShcIiNcIitmb3JtSWQpLnZhbGlkYXRlKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XHJcbiAgICB9XHJcbn0iXX0=
