/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angularjs/angular.d.ts" />

module TestApp.Services {
	export class MessageService {
		private _httpService : angular.IHttpService;

		static $inject = ['$http'];

		constructor(httpService:angular.IHttpService) {
			this._httpService = httpService;
		}

		public GetMessages(): angular.IPromise<string> {
			return this._httpService.get("/messages")
			.then((response: angular.IHttpPromiseCallbackArg<string>) => {
				return response.data;
			});
		}
	}
}

angular.module("TestApp").service("TestApp.Services.MessageService", TestApp.Services.MessageService);
