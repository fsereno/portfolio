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
        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIudHMiLCJhcHAudHMiLCIuLi8uLi90eXBlU2NyaXB0L1NlcnZpY2VzL3RleHRTZXJ2aWNlLnRzIiwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNJQTtJQUtJLHlCQUdJLFdBQXlCLEVBQ3pCLGdCQUFtQztRQUluQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsTUFBTSxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLG1CQUFtQixHQUFHO1lBRXRCLGFBQWEsRUFBRSxVQUFDLElBQWlCO2dCQUU3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQzVCLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFdkQsSUFBRyxLQUFLLEVBQUM7b0JBRUwsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQ3BDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztvQkFF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LElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxNQUFjLEVBQUUsT0FBMkM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0Q0FBZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBJbnRlcmZhY2VzXG5pbXBvcnQgeyBJVGV4dFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuaW1wb3J0IHsgSVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVNjcmlwdC9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleENvbnRyb2xsZXIgIHtcbiAgICBcbiAgICB0ZXh0U2VydmljZTogSVRleHRTZXJ2aWNlO1xuICAgIHZhbGlkYXRvclNlcnZpY2U6IElWYWxpZGF0b3JTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG5cbiAgICAgICAgdGV4dFNlcnZpY2U6IElUZXh0U2VydmljZSxcbiAgICAgICAgdmFsaWRhdG9yU2VydmljZTogSVZhbGlkYXRvclNlcnZpY2VcbiAgICAgIFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRleHRTZXJ2aWNlID0gdGV4dFNlcnZpY2U7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZSA9IHZhbGlkYXRvclNlcnZpY2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkoKCkgPT4ge1xuXG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlRm9ybShcInVuc2NyYWJibGVyRm9ybVwiKTtcbiAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlRm9ybShmb3JtSWQ6IHN0cmluZyl7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB2YWxpZGF0ZUZvcm1PcHRpb25zID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybTogSFRNTEVsZW1lbnQpPT57XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBqUXVlcnkoZm9ybSkudmFsaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgZmluZFRoaXMgPSBqUXVlcnkoXCIjZmluZElucHV0XCIpLnZhbCgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGluVGhpcyA9IGpRdWVyeShcIiNzY3JhYmJsZUlucHV0XCIpLnZhbCgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBpZih2YWxpZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNlbGYudGV4dFNlcnZpY2UuVW5zY3JhYmJsZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRUaGlzLGluVGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjcmVzdWx0XCIpLnRleHQocmVzdWx0LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi52YWxpZGF0b3JTZXJ2aWNlLlZhbGlkYXRlRm9ybShmb3JtSWQsIHZhbGlkYXRlRm9ybU9wdGlvbnMpO1xuICAgIH1cbn0iLCJcbi8vIENvbnRyb2xsZXJzXG5pbXBvcnQgeyBJbmRleENvbnRyb2xsZXIgfSBmcm9tIFwiLi9Db250cm9sbGVycy9JbmRleENvbnRyb2xsZXJcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVTY3JpcHQvU2VydmljZXMvdGV4dFNlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdHlwZVNjcmlwdC9TZXJ2aWNlcy92YWxpZGF0b3JTZXJ2aWNlXCI7XG5cbi8vIEluc3RhbnRpYXRlIFNlcnZpY2VzIHdpdGggZGVwZW5kZW5jeSBpbmplY3Rpb25cbmxldCB0ZXh0U2VydmljZSA9IG5ldyBUZXh0U2VydmljZSgpO1xubGV0IHZhbGlkYXRvclNlcnZpY2UgPSBuZXcgVmFsaWRhdG9yU2VydmljZSgpO1xuXG4vLyBDb250cm9sbGVyc1xubGV0IGluZGV4Q29udHJvbGxlciA9IG5ldyBJbmRleENvbnRyb2xsZXJcbihcbiAgICB0ZXh0U2VydmljZSxcbiAgICB2YWxpZGF0b3JTZXJ2aWNlXG4pO1xuXG5pbmRleENvbnRyb2xsZXIuaW5pdCgpOyIsImltcG9ydCB7IElUZXh0U2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUZXh0U2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2UgaW1wbGVtZW50cyBJVGV4dFNlcnZpY2VcbntcbiAgICBwdWJsaWMgQWxwaGFTdHJpbmc6IHN0cmluZztcbiAgICBwdWJsaWMgTnVtZXJpY1N0cmluZzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB0aGlzLkFscGhhU3RyaW5nID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICB0aGlzLk51bWVyaWNTdHJpbmcgPSBcIjAxMjM0NTY3ODlcIjtcblxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgQ29uY2F0KGEgOnN0cmluZyxiOnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhICsgXCIgXCIgKyBiO1xuICAgIH1cblxuICAgIHB1YmxpYyBGaW5kUmVwbGFjZShcbiAgICAgICAgZmluZFRoaXM6IHN0cmluZywgXG4gICAgICAgIGluVGhpczogc3RyaW5nLCBcbiAgICAgICAgcmVwbGFjZVdpdGhUaGlzOiBzdHJpbmcpOiBzdHJpbmd7XG5cbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoZmluZFRoaXMsIFwiZ1wiKSxcbiAgICAgICAgICAgICAgICBjb3VudCA9IChpblRoaXMubWF0Y2gocmVnZXgpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpblRoaXMgPSBpblRoaXMucmVwbGFjZShmaW5kVGhpcywgcmVwbGFjZVdpdGhUaGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgcmV0dXJuIGluVGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgVG9BcnJheShpbnB1dDogc3RyaW5nKSA6IHN0cmluZ1tdIHtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlucHV0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIFVuc2NyYWJibGUoXG4gICAgICAgIGZpbmRUaGlzOiBzdHJpbmcsIFxuICAgICAgICBpblRoaXM6IHN0cmluZykgOiBib29sZWFuIHtcblxuICAgICAgICBsZXQgZmluZFRoaXNOb3JtYWxpc2VkID0gZmluZFRoaXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGluVGhpc05vcm1hbGlzZWQgPSBpblRoaXMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHNjcmFiYmxlQXJyYXkgPSB0aGlzLlRvQXJyYXkoaW5UaGlzTm9ybWFsaXNlZCksXG4gICAgICAgICAgICBpbnB1dEFycmF5ID0gdGhpcy5Ub0FycmF5KGZpbmRUaGlzTm9ybWFsaXNlZCksXG4gICAgICAgICAgICByZXN1bHRzQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGlucHV0Q2hhcmFjdGVyID0gaW5wdXRBcnJheVtpXSxcbiAgICAgICAgICAgICAgICBpbmRleE9mID0gc2NyYWJibGVBcnJheS5pbmRleE9mKGlucHV0Q2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4T2Y+LTEpe1xuICAgICAgICAgICAgICAgIHJlc3VsdHNBcnJheS5wdXNoKGlucHV0Q2hhcmFjdGVyKTtcbiAgICAgICAgICAgICAgICBzY3JhYmJsZUFycmF5LnNwbGljZShpbmRleE9mLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRBcnJheVRvU3RyaW5nID0gcmVzdWx0c0FycmF5LmpvaW4oXCJcIiksXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRBcnJheVRvU3RyaW5nID09PSBmaW5kVGhpc05vcm1hbGlzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIEdlbmVyYXRlUmFuZG9tKGNyaXRlcmlhOiBzdHJpbmdbXSwgbGVuZ3RoOm51bWJlcikgOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBvdXRwdXQ6IHN0cmluZ1tdID0gW11cblxuICAgICAgICB3aGlsZShvdXRwdXQubGVuZ3RoIDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNyaXRlcmlhLmZvckVhY2goY3JpdGVyaW9uID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuVG9BcnJheShjcml0ZXJpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4VG9QdXNoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoaT09PWluZGV4VG9QdXNoICYmIG91dHB1dC5sZW5ndGggPCBsZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3V0cHV0LmpvaW4oXCJcIik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBJVmFsaWRhdG9yU2VydmljZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWYWxpZGF0b3JTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JTZXJ2aWNlIGltcGxlbWVudHMgSVZhbGlkYXRvclNlcnZpY2VcbntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIGpRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kKFwibm9uTnVtZXJpY1wiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgVmFsaWRhdGVGb3JtKGZvcm1JZDogc3RyaW5nLCBvcHRpb25zOiBKUXVlcnlWYWxpZGF0aW9uLlZhbGlkYXRpb25PcHRpb25zKTogSlF1ZXJ5VmFsaWRhdGlvbi5WYWxpZGF0b3Ige1xuICAgICAgICBsZXQgdmFsaWRhdG9yID0galF1ZXJ5KFwiI1wiK2Zvcm1JZCkudmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XG4gICAgfVxufSJdfQ==
