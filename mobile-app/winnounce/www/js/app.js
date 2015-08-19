(function ( ) {
	var announcement = angular.module( "winnounce" , [ ] );

	announcement.controller( 'announcerController', function ($scope){
		$scope.announcements = data;
	
		$scope.show = function (announceDet){
			$scope.announcementDetails = announceDet
		};

	});

	var data = [{
				title: 'Class Suspended',
				group: 'SSC',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
				importance: 'very',
				date: 'today',
				},
				{
				title: 'General Ass.',
				group: 'Students',
				details: 'Lorem',
				importance: 'okay',
				date: 'today'
				},
				{
				title: 'Class Suspended',
				group: 'SSC',
				details: 'Lorem ipsum dolor',
				importance: 'very',
				date: 'today',
				},
				{
				title: 'Class Suspended',
				group: 'SSC',
				details: 'Lorem ipsum dolor',
				importance: 'very',
				date: 'today',
				},
	];

	console.log(data);
} )( );

