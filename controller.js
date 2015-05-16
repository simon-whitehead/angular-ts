/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="service.ts" />
var TestApp;
(function (TestApp) {
    var Controllers;
    (function (Controllers) {
        var TestController = (function () {
            function TestController(scope, messageService) {
                this._messageService = messageService;
                this._messageService.GetMessages().then(function (messages) {
                    scope.messages = messages;
                });
            }
            TestController.$inject = ['$scope', 'TestApp.Services.MessageService'];
            return TestController;
        })();
        Controllers.TestController = TestController;
    })(Controllers = TestApp.Controllers || (TestApp.Controllers = {}));
})(TestApp || (TestApp = {}));
angular.module("TestApp").controller("TestApp.Controllers.TestController", TestApp.Controllers.TestController);
