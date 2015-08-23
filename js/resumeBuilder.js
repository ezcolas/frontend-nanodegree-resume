/*
This is empty on purpose! Your code to build the resume will go here.
 */


//Bio Object
var bio = {
	"name": "Ezechiel COLAS",
	"role": "Web Developper",
	"contacts": {
		"mobile": "509-3744-5966",
		"email": "ezechielcolas@gmail.com",
		"github": "ezcolas",
		"twitter": "ecolas",
		"location": "Delmas 60, Port-au-Prince, Haiti"		
	},
	"welcomemessage": "It's never too late to make an investment in your future",
	"skills": ["programming", "Delivering thing", "Hard Worker", "Can work under pressure"],
	"biopic": "images/colas.jpg",
	 display:  function(){
		    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
			var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
			var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
			var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

			$("#header").append(formattedwelcomeMsg);
			$("#header").append(formattedbiopic);

			if(bio.skills.length){
				$("#header").append(HTMLskillsStart);
				
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
				$("#skills").append(formattedSkill);

				formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
				$("#skills").append(formattedSkill);

				formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
				$("#skills").append(formattedSkill);

				formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
				$("#skills").append(formattedSkill);
			}
			        $("#topContacts, #footerContacts").prepend(formattedlocation);
					$("#topContacts, #footerContacts").prepend(formatedgithub);
					$("#topContacts, #footerContacts").prepend(formattwitter);
					$("#topContacts, #footerContacts").prepend(formattedemail);
					$("#topContacts, #footerContacts").prepend(formattedmobile);

					$("#header").prepend(formattedRole);
					$("#header").prepend(formattedName);	
	    }
	
};

bio.display();

var education = {
	"schools": [{
		"name": "Ecole Superieure d'infotronique d'Haiti",
		"location": "Bourdon, Port-au-Prince, Haiti",
		"degree": "Master 1",
		"majors": ["Database programming"],
		"dates": "2014",
		"url": "http://esih.edu"
		},
	{
		"name": "Ecole Superieure d'infotronique d'Haiti",
		"location": "Bourdon, Port-au-Prince, Haiti",
		"degree": "Bachelor",
		"majors": ["Computer Sciences"],
		"dates": "2013",
		"url": "http://esih.edu"
	}],	
 	"onlineCourse": [{
 		"title": "Front End Developper",
 		"schools": "Udacity",
 		"dates": "June 2015",
 		"url": "www.udacity.com"
 	},
 	{
 		"title": "English Grammar and Style",
 		"schools": "edx",
 		"dates": "July 2015",
 		"url": "www.edx.org"
 	
 	}],
 	display: function(){ 			
 				

 			$("#education").append(HTMLschoolStart);
 				    
 			if(education.schools.length){
		     	for(var i=0; i<education.schools.length; i++){  
							    
								var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

								var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
								
								var formatdSchoolNameDegree = formattedschoolName +  formattedschoolDegree;
								$(".education-entry:last").append(formatdSchoolNameDegree);

								var formatedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
					  			$(".education-entry:last").append(formatedschoolDates);

								var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
								$(".education-entry:last").append(formattedschoolLocation);

								if(education.schools[i].majors.length)
								{
									for( var y=0; y<education.schools[i].majors.length; y++)
									{
										var formatedshoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[y]);
										$(".education-entry:last").append(formatedshoolMajor);
									}
								}	
							}

					
				}
	             
	           $(".education-entry:last").append(HTMLonlineClasses);
               if(education.onlineCourse.length){
				for(var z=0; z<education.onlineCourse.length;z++){
					
					var formattedOnlineTitlte = HTMLonlineTitle.replace("%data%", education.onlineCourse[z].title);
					var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[z].schools);
					var formattedOnlineTitleSchool = formattedOnlineTitlte + formattedOnlineSchool;		
					$(".education-entry:last").append(formattedOnlineTitleSchool);
                    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[z].dates);
					$(".education-entry:last").append(formattedonlineDates);

					var formattedonlineUrl  = HTMLonlineURL.replace("%data%", education.onlineCourse[z].url);
					$(".education-entry:last").append(formattedonlineUrl);
                 
				}
		    }
						
		    
		 }
};

education.display();




var work = {
	"jobs": [
		{
			"employer": "Digicel",
			"title": "IT Application Engineer",
			"location": " Ave Jean-Paul II, Haut-Turgeau, Port-au-Prince, Haiti",
			"dates": "February 2015 to futur",
			"description": "Develop and support Enterprise application,Make Reporting"
			
		}, 
		{
			"employer": "Institut Inter Universitaire de Recherche et de Developpement",
			"title": "IT Manager",
			"location": "Delmas 83, Port-au-Prince, Haiti",
			"dates": "Jan. 2012 - May 2014",
			"description": "Maintain the IT Department"
		}
	],
	display: function(){
			for(var i=0; i<work.jobs.length; i++){
				$("#workExperience").append(HTMLworkStart);
				//Concat employer and title
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				var formatworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

				$(".work-entry:last").append(formatworkLocation);

			    $(".work-entry:last").append(formattedEmployerTitle);

			    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			    $(".work-entry:last").append(formattedDates);

			    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			     $(".work-entry:last").append(formattedDescription);

			}
		}

};

work.display();

var projects ={
	"projects": [
		{
			"title": "Plastic Serial Number Management",
			"dates": "March 2015",
			"description": "Develop an Enterprise Application for making Request and Manage Serial number ",
			"images": ["images/project2.1.png", "images/project2.png", "images/project2.2.png"]
		}, 
		{
			"title": "Digicel Number Range Management",
			"dates": "July 2015",
			"description": "Develop an Enterprise Application for Requesting and Controlling digicel phone number ",
			"images":["images/project1.1.png", "images/project1.png", "images/project1.2.png"]
		}
	],

	display: function(){
				for(var i=0; i<projects.projects.length; i++){
					$("#projects").append(HTMLprojectStart);

					var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
					$(".project-entry:last").append(formattedTitle);

					var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
					$(".project-entry:last").append(formattedDates);

					var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
					$(".project-entry:last").append(formattedDescription);

					if(projects.projects[i].images.length){
						  for(var y=0; y<projects.projects[i].images.length; y++){
							var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[y]);
							$(".project-entry:last").append(formattedImage);
							
						}					

					}

				}
			}

};

projects.display();


$("#mapDiv").append(googleMap);





