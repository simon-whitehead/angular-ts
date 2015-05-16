/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="service.ts" />

module TestApp.Controllers {
	interface ITestScope extends angular.IScope {
		messages: string;
	}

	export class TestController {
		private _messageService: TestApp.Services.MessageService;

		private messages: string;

		static $inject = ['$scope', 'TestApp.Services.MessageService'];

		constructor(scope: ITestScope, messageService: TestApp.Services.MessageService) {
			this._messageService = messageService;

			this._messageService.GetMessages().then((messages: string) => {
				scope.messages = messages;
			});
		}
	}
}

angular.module("TestApp").controller("TestApp.Controllers.TestController", TestApp.Controllers.TestController);
