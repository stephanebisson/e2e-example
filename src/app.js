angular.module('app', [])
	.config(function($routeProvider){
		$routeProvider
			.when('/login', {templateUrl: 'login.html', controller: "LoginController"})
			.when('/home', {templateUrl: 'home.html', controller: "HomeController"})
			.when('/', {redirectTo: '/login'})
			.otherwise({redirectTo: '/login'});
	})
	.factory('session', function(){
		return {};
	})
	.factory('auth', function($q, $timeout){
		return {
			login: function(username, password) {
				var d = $q.defer();
				$timeout(function(){
					if (username === password) {
						d.resolve();
					}
					else {
						d.reject('invalid username or password');
						var a = 'asdf';
						var b = a + 'asdf';
					}
				}, 100);
				return d.promise;
			}
		};
	})
	.controller('LoginController', function($scope, $location, auth, session){
		$scope.login = function() {
			auth.login($scope.username, $scope.password)
				.then(function(){
					session.username = $scope.username;
					$location.path('/home');
				}, function(reason){
					$scope.message = reason;
				});
		};
	})
	.controller('HomeController', function($scope, session){
		$scope.username = session.username;
	});


function other(){
	var a = 'asdf';
}