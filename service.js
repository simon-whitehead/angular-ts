/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angularjs/angular.d.ts" />
var TestApp;
(function (TestApp) {
    var Services;
    (function (Services) {
        var MessageService = (function () {
            function MessageService(httpService) {
                this._httpService = httpService;
            }
            MessageService.prototype.GetMessages = function () {
                return this._httpService.get("/messages")
                    .then(function (response) {
                    return response.data;
                });
            };
            MessageService.$inject = ['$http'];
            return MessageService;
        })();
        Services.MessageService = MessageService;
    })(Services = TestApp.Services || (TestApp.Services = {}));
})(TestApp || (TestApp = {}));
angular.module("TestApp").service("TestApp.Services.MessageService", TestApp.Services.MessageService);
