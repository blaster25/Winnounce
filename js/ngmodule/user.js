winnounce.controller("userController", function ($scope, userFactory) {
	$scope.users = groupFactory.getUsers();
} );


winnounce.factory("userFactory", function(){
		var factory = {};

		var users = [
				{
					Name: "Axel"
					groupName: "admin"
					type: "admin"
					Address: "Cagaya de Oro"
				},
				{
					Name: "luisa"
					groupName: "students"
					type: "students"
					Address: "Cagayan de Oro"
				},
				
				
				
			];

			

			factory.getUsers = function (){
				return groups;
			};

		return factory;
	});