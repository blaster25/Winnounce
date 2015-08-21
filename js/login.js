
$(document).ready(function(){
    $("#loginBtn").click(function(){
    	var user = $("#loginUser").val();
    	var pass = $("#loginPass").val();

    	if (user == "admin" && pass == 123) {
        	window.location.replace("file:///home/axel/Documents/Elective_projects/Winnounce/home.html");
    	} else if(user == "user" && pass == 123){
    		console.log("User must be login");
    		alert("user page is under development")
    		$("#loginError").text("")
    	} else {
    		$("#loginError").text("Error: username/password")
    	}
    });
});