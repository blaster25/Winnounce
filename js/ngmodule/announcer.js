var winnounce = angular.module("winnouncer" , []);

winnounce.controller("announcementController", function ($scope, announcementFactory, groupFactory) {
	
	$scope.announcements = announcementFactory.getAnnouncements();
	$scope.groups = groupFactory.getGroups();

	$scope.postAnnouncement = function () {
		announcementFactory.addAnnouncement({
												title: $scope.title, 
												group: $scope.group, 
												details: $scope.details, 
												date: "today"
												}
											);
		$scope.title="" 
		$scope.group=""
		$scope.details="" 
	};


console.log("awdaw1");
} );

winnounce.controller("groupController", function ($scope, groupFactory) {
	$scope.groupss = groupFactory.getGroups();
	console.log($scope.groupss[0].groupName);
	console.log("awdaw");
} );

winnounce.factory("announcementFactory", function(){
		var factory = {};

		var announcementsF = [
				{
					title: 'Class Suspended',
					group: 'students',
					details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
					date: 'today',
				},
				{
					title: 'General Ass.',
					group: 'students',
					details: 'Lorem',
					date: 'today'
				},
				{
					title: 'Class planning',
					group: 'officer',
					details: 'Lorem ipsum dolor',
					date: 'today',
				},
				{
					title: 'Server upgrade',
					group: 'Staff',
					details: 'Lorem ipsum dolor',
					date: 'today',
				},
			];

			factory.addAnnouncement = function (data){
				announcementsF.push(data);
			};

			factory.getAnnouncements = function (){
				return announcementsF;
			};

		return factory;
	});

winnounce.factory("groupFactory", function(){
		var factory = {};

		var groups = [
				{
					groupName: "students"
				},
				{
					groupName: "staff"
				},
				{
					groupName: "officer"
				},
				
			];

			factory.addGroup = function (data){
				groups.push(data);
			};

			factory.getGroups = function (){
				return groups;
			};

		return factory;
	});