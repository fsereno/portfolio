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
            self.validateForm("findReplaceForm");
        });
    };
    IndexController.prototype.validateForm = function (formId) {
        var self = this;
        var validateFormOptions = {
            submitHandler: function (form) {
                var valid = jQuery(form).valid(), findThis = jQuery("#findInput").val().toString(), inThis = jQuery("#result").text(), replaceWithThis = jQuery("#replaceInput").val().toString();
                if (valid) {
                    var textReplaced = self.textService.FindReplace(findThis, inThis, replaceWithThis);
                    jQuery("#result").text(textReplaced);
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
// Instantiate Services with dependency injection
var textService = new StringService_1.TextService();
var validatorService = new validatorService_1.ValidatorService();
// Controllers
var indexController = new IndexController_1.IndexController(textService, validatorService);
indexController.init();

},{"../../typeScript/Services/StringService":3,"../../typeScript/Services/validatorService":4,"./Controllers/IndexController":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextService = /** @class */ (function () {
    function TextService() {
        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";
    }
    TextService.prototype.Concat = function (a, b) {
        return a + " " + b;
    };
    TextService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {
        var searchRegex = new RegExp(findThis, "g"), replaceRegex = new RegExp("\\b" + findThis + "\\b"), count = (inThis.match(searchRegex) || []).length;
        for (var index = 0; index < count; index++) {
            inThis = inThis.replace(replaceRegex, replaceWithThis);
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
        var findThisNormalised = findThis.toUpperCase(), inThisNormalised = inThis.toUpperCase(), scrabbleArray = this.ToArray(inThisNormalised), inputArray = this.ToArray(findThisNormalised), resultsArray = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL1N0cmluZ1NlcnZpY2UudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3ZhbGlkYXRvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBO0lBS0kseUJBR0ksV0FBMkIsRUFDM0IsZ0JBQW1DO1FBSW5DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUVJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixNQUFNLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLE1BQWM7UUFFdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksbUJBQW1CLEdBQUc7WUFFdEIsYUFBYSxFQUFFLFVBQUMsSUFBaUI7Z0JBRTdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDNUIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDaEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFDakMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFL0QsSUFBRyxLQUFLLEVBQUM7b0JBRUwsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQzNDLFFBQVEsRUFBQyxNQUFNLEVBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXJDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBRXhDO1lBQ0wsQ0FBQztTQUNKLENBQUE7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDTCxzQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFksMENBQWU7Ozs7O0FDSDVCLGNBQWM7QUFDZCxpRUFBZ0U7QUFFaEUsV0FBVztBQUNYLHlFQUFzRTtBQUN0RSwrRUFBOEU7QUFFOUUsaURBQWlEO0FBQ2pELElBQUksV0FBVyxHQUFHLElBQUksMkJBQVcsRUFBRSxDQUFDO0FBQ3BDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLGNBQWM7QUFDZCxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBRXJDLFdBQVcsRUFDWCxnQkFBZ0IsQ0FDbkIsQ0FBQztBQUVGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7QUNqQnZCO0lBS0k7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLDRCQUE0QixDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO0lBRXRDLENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsQ0FBUyxFQUFDLENBQVE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFDSSxRQUFnQixFQUNoQixNQUFjLEVBQ2QsZUFBdUI7UUFDbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUN2QyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFDbkQsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFckQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDMUQ7UUFFTCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sNkJBQU8sR0FBZCxVQUFlLEtBQWE7UUFFeEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFDSSxRQUFnQixFQUNoQixNQUFjO1FBRWQsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQzNDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDdkMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFDOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFDN0MsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUV4QyxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQzlCLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXBELElBQUksT0FBTyxHQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNYLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2xDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7UUFFRCxJQUFJLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQzNDLE1BQU0sR0FBRyxtQkFBbUIsS0FBSyxrQkFBa0IsQ0FBQztRQUV4RCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFFBQWtCLEVBQUUsTUFBYTtRQUFoRCxpQkEwQkM7UUF4QkcsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFBO1FBRXpCLE9BQU0sTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7WUFFMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7Z0JBRXRCLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXBDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQztvQkFFbEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUUzRCxJQUFHLENBQUMsS0FBRyxXQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUM7d0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3JCO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FqR0EsQUFpR0MsSUFBQTtBQWpHWSxrQ0FBVzs7Ozs7QUNBeEI7SUFHSTtRQUVJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPO1lBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxPQUEyQztRQUNwRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRDQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEludGVyZmFjZXNcbmltcG9ydCB7IElTdHJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVTY3JpcHQvSW50ZXJmYWNlcy9JU3RyaW5nU2VydmljZVwiO1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICB0ZXh0U2VydmljZTogSVN0cmluZ1NlcnZpY2U7XG4gICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcblxuICAgICAgICB0ZXh0U2VydmljZTogSVN0cmluZ1NlcnZpY2UsXG4gICAgICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlXG4gICAgICBcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy50ZXh0U2VydmljZSA9IHRleHRTZXJ2aWNlO1xuICAgICAgICB0aGlzLnZhbGlkYXRvclNlcnZpY2UgPSB2YWxpZGF0b3JTZXJ2aWNlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgalF1ZXJ5KCgpID0+IHtcblxuICAgICAgICAgICAgc2VsZi52YWxpZGF0ZUZvcm0oXCJmaW5kUmVwbGFjZUZvcm1cIik7XG4gICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcpe1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdmFsaWRhdGVGb3JtT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogKGZvcm06IEhUTUxFbGVtZW50KT0+e1xuXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkID0galF1ZXJ5KGZvcm0pLnZhbGlkKCksXG4gICAgICAgICAgICAgICAgICAgIGZpbmRUaGlzID0galF1ZXJ5KFwiI2ZpbmRJbnB1dFwiKS52YWwoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBpblRoaXMgPSBqUXVlcnkoXCIjcmVzdWx0XCIpLnRleHQoKSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVdpdGhUaGlzID0galF1ZXJ5KFwiI3JlcGxhY2VJbnB1dFwiKS52YWwoKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgaWYodmFsaWQpe1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0UmVwbGFjZWQgPSBzZWxmLnRleHRTZXJ2aWNlLkZpbmRSZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZFRoaXMsaW5UaGlzLHJlcGxhY2VXaXRoVGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3Jlc3VsdFwiKS50ZXh0KHRleHRSZXBsYWNlZCk7XG5cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnZhbGlkYXRvclNlcnZpY2UuVmFsaWRhdGVGb3JtKGZvcm1JZCwgdmFsaWRhdGVGb3JtT3B0aW9ucyk7XG4gICAgfVxufSIsIlxuLy8gQ29udHJvbGxlcnNcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy9TdHJpbmdTZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdmFsaWRhdG9yU2VydmljZVwiO1xuXG4vLyBJbnN0YW50aWF0ZSBTZXJ2aWNlcyB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5sZXQgdGV4dFNlcnZpY2UgPSBuZXcgVGV4dFNlcnZpY2UoKTtcbmxldCB2YWxpZGF0b3JTZXJ2aWNlID0gbmV3IFZhbGlkYXRvclNlcnZpY2UoKTtcblxuLy8gQ29udHJvbGxlcnNcbmxldCBpbmRleENvbnRyb2xsZXIgPSBuZXcgSW5kZXhDb250cm9sbGVyXG4oXG4gICAgdGV4dFNlcnZpY2UsXG4gICAgdmFsaWRhdG9yU2VydmljZVxuKTtcblxuaW5kZXhDb250cm9sbGVyLmluaXQoKTsiLCJpbXBvcnQgeyBJU3RyaW5nU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTdHJpbmdTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U2VydmljZSBpbXBsZW1lbnRzIElTdHJpbmdTZXJ2aWNlXG57XG4gICAgcHVibGljIEFscGhhU3RyaW5nOiBzdHJpbmc7XG4gICAgcHVibGljIE51bWVyaWNTdHJpbmc6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgdGhpcy5BbHBoYVN0cmluZyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICAgICAgdGhpcy5OdW1lcmljU3RyaW5nID0gXCIwMTIzNDU2Nzg5XCI7XG5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIENvbmNhdChhIDpzdHJpbmcsYjpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYSArIFwiIFwiICsgYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmluZFJlcGxhY2UoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZywgXG4gICAgICAgIHJlcGxhY2VXaXRoVGhpczogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlZ2V4ID0gbmV3IFJlZ0V4cChmaW5kVGhpcywgXCJnXCIpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VSZWdleCA9IG5ldyBSZWdFeHAoXCJcXFxcYlwiICsgZmluZFRoaXMgKyBcIlxcXFxiXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gKGluVGhpcy5tYXRjaChzZWFyY2hSZWdleCkgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5UaGlzID0gaW5UaGlzLnJlcGxhY2UocmVwbGFjZVJlZ2V4LCByZXBsYWNlV2l0aFRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICByZXR1cm4gaW5UaGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBUb0FycmF5KGlucHV0OiBzdHJpbmcpIDogc3RyaW5nW10ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXRbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgVW5zY3JhYmJsZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nKSA6IGJvb2xlYW4ge1xuXG4gICAgICAgIGxldCBmaW5kVGhpc05vcm1hbGlzZWQgPSBmaW5kVGhpcy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgaW5UaGlzTm9ybWFsaXNlZCA9IGluVGhpcy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgc2NyYWJibGVBcnJheSA9IHRoaXMuVG9BcnJheShpblRoaXNOb3JtYWxpc2VkKSxcbiAgICAgICAgICAgIGlucHV0QXJyYXkgPSB0aGlzLlRvQXJyYXkoZmluZFRoaXNOb3JtYWxpc2VkKSxcbiAgICAgICAgICAgIHJlc3VsdHNBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5wdXRDaGFyYWN0ZXIgPSBpbnB1dEFycmF5W2ldLFxuICAgICAgICAgICAgICAgIGluZGV4T2YgPSBzY3JhYmJsZUFycmF5LmluZGV4T2YoaW5wdXRDaGFyYWN0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXhPZj4tMSl7XG4gICAgICAgICAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRDaGFyYWN0ZXIpO1xuICAgICAgICAgICAgICAgIHNjcmFiYmxlQXJyYXkuc3BsaWNlKGluZGV4T2YsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdEFycmF5VG9TdHJpbmcgPSByZXN1bHRzQXJyYXkuam9pbihcIlwiKSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdEFycmF5VG9TdHJpbmcgPT09IGZpbmRUaGlzTm9ybWFsaXNlZDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgR2VuZXJhdGVSYW5kb20oY3JpdGVyaWE6IHN0cmluZ1tdLCBsZW5ndGg6bnVtYmVyKSA6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IG91dHB1dDogc3RyaW5nW10gPSBbXVxuXG4gICAgICAgIHdoaWxlKG91dHB1dC5sZW5ndGggPCBsZW5ndGgpIHtcblxuICAgICAgICAgICAgY3JpdGVyaWEuZm9yRWFjaChjcml0ZXJpb24gPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5Ub0FycmF5KGNyaXRlcmlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhUb1B1c2ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihpPT09aW5kZXhUb1B1c2ggJiYgb3V0cHV0Lmxlbmd0aCA8IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChjaGFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBvdXRwdXQuam9pbihcIlwiKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxufSIsImltcG9ydCB7IElWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZhbGlkYXRvclNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclNlcnZpY2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yU2VydmljZVxue1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QoXCJub25OdW1lcmljXCIsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBpc05hTihOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBWYWxpZGF0ZUZvcm0oZm9ybUlkOiBzdHJpbmcsIG9wdGlvbnM6IEpRdWVyeVZhbGlkYXRpb24uVmFsaWRhdGlvbk9wdGlvbnMpOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRvciB7XG4gICAgICAgIGxldCB2YWxpZGF0b3IgPSBqUXVlcnkoXCIjXCIrZm9ybUlkKS52YWxpZGF0ZShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcjtcbiAgICB9XG59Il19
