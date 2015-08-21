var winnounce = angular.module("winnouncer" , []);

winnounce.controller("announcementController", function ($scope, announcementFactory, groupFactory) {
	
	$scope.isPost = true;
	$scope.announcements = announcementFactory.getAnnouncements();
	$scope.groups = groupFactory.getGroups();

	$scope.postAnnouncement = function () {
		
		var now = new Date();

		if ($scope.title != null || $scope.group != "" || $scope.details !=null ) {
		announcementFactory.addAnnouncement({
												title: $scope.title, 
												group: $scope.group, 
												details: $scope.details, 
												date: now
												}
											);
		$scope.title= null; 
		$scope.group= "";
		$scope.details= null;
		} else {
			console.log("oasd");
		}
	};

	$scope.editAnnouncement = function (indexNum) {
		$scope.title = $scope.announcements[indexNum].title;
		$scope.group = $scope.announcements[indexNum].group;
		$scope.details = $scope.announcements[indexNum].details;
		$scope.isPost = false;
	};

	$scope.removeAnnouncement = function (indexNum) {
		if (confirm("Do you want to delete this announcement ?")) {
			announcementFactory.deleteAnnouncement(indexNum);
		}
		
	};

	$scope.addNewGroup = function (){ 
		groupFactory.addGroup( { groupName: $scope.groupName } )
		$scope.groupName = "";
		};

} );

winnounce.controller("groupController", function ($scope, groupFactory) {
	$scope.groupss = groupFactory.getGroups();
	console.log($scope.groupss[0].groupName);
	console.log("awdaw");
} );

winnounce.factory("announcementFactory", function(){
		var factory = {};

		var announcements = [
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
				announcements.push(data);
			};

			factory.getAnnouncements = function (){
				return announcements;
			};

			factory.deleteAnnouncement = function (indexNum){
				announcements.splice(indexNum,1);
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