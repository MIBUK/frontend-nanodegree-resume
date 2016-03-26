//Resume 2016

var bio = {
 	 "name": "Mike Smith ",
 	 "role": "Workflow Solutions Manager",
 	 "contacts": [
 	   {
 	   "mobile": "0703 40 80 50",
 	   "email": "mike@inthezone.com",
 	   "github": "MIBUK",
 	   "twitter": "@inthezone",
 	   "location": "Stockholm, Sweden"
 	   }
 	  ],
 	 "welcome": "Welcome to my online resume. It will summarise my skills, history and contact info.",
 	 "skills": [
 	   "HTML", "CSS", "JavaScript", "Workflow Tools", "Variable Data", "Networks", "Crossmedia Tools"
 	 ]
};

var work = {
  "jobs": [ 
   { 
	"employer": "SvenTryck Sverige AB",
	"title": "Workflow Solutions Manager",
	"location": "Solna, Sweden",
 	"dates": "2006-Present",
 	"description": "Product managing all digital software solutions for cut sheet Production printers. Covering Web to Print, Crossmedia, workflow, variable data and marketing solutions. Also providing customer training, technical support up to 3rd level support."
   },
 { 
	"employer": "Sharp Electronics",
	"title": "Senior Network Engineer",
	"location": "Watford, UK",
 	"dates": "2001-2006",
 	"description": "50% of my time was managing the network, servers, telephony and user support. The other 50% was troubleshooting connectivity issues across Europe with Sharp printers and networks ie. SAP, AS400, Windows and print servers."
   },
{ 
	"employer": "ITNET",
	"title": "Novell/Microsoft and Backups Manager",
	"location": "West Kensington, UK",
 	"dates": "1999-2001",
 	"description": "Managing a technical team supporting the server and backup infrastructure across the London Underground network."
   },
{ 
	"employer": "Tibbett & Britten",
	"title": "Senior Novell Engineer",
	"location": "Welwyn Garden City, UK",
 	"dates": "1995-1999",
 	"description": "Supporting several hundred users across the UK for Windows, Novell file and email servers. Providing out of hours on-call support."
   }
  ]
}

var projects = {
  "projects": [ 
{ 
	"title": "Build a Portfolio Site",
 	"dates": "2015",
 	"description": "Create a reponsive web site using HTML5 and CSS3 with @media calls and selecting image resolutions based on the output device form mobile to tablet to laptop.",
 	"images": ["https://media-mediatemple.netdna-ssl.com/wp-content/uploads/images/fresh-portfolios/charlie-gentle.jpg", "https://media-mediatemple.netdna-ssl.com/wp-content/uploads/2013/06/designing-coding-portfolio_mini.jpg"]
   }
  ]
}


var education = {
  "schools": [ 
   { 
	"name": "West Herts College",
 	"location": "Watford, UK",
 	"certification": "HNC",
 	"subject": ["Software Engineering"],
 	"dates": "1992-1994",
 	"url": "https://www.westherts.ac.uk/"
   },
   { 
    "name": "Leggatts School",
 	"location": "Watford, UK",
 	"certification": "O'Levels",
 	"subject": ["English", " Maths"],
 	"dates": "1981-1986"
  }],
    "onlinecourses": [
      {
 	   "title": "Udacity NanoDegree",
 	   "school": "Udacity",
 	   "dates": "2016",
 	   "url": "http://www.udacity.com"
 	  }
 	 ]
};

//BIO
function displayBio() { 
  var namebio = HTMLheaderName.replace
  ("%data%", bio.name);
  $("#header").append(namebio);
  var rolebio = HTMLheaderRole.replace
  ("%data%", bio.role);
  $("#header").append(rolebio);
  var imagebio = HTMLbioPic.replace
  ("%data%", "http://img.mp3boo.cc/artist/1641.jpg");
  $("#header").append(imagebio);
  var welcomebio = HTMLwelcomeMsg.replace
  ("%data%", bio.welcome);
  $("#header").append(welcomebio);

   if (bio.skills.length > 0) { 
     $("#header").append(HTMLskillsStart);

     var formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[0]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[1]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[2]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[3]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[4]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[5]);
	 $("#skills").append(formattedSkill);
	 formattedSkill = HTMLskills.replace
	 ("%data%", bio.skills[6]);
	 $("#skills").append(formattedSkill);
    }
   
    for (contact in bio.contacts) {
    var mobilebio = HTMLmobile.replace
    ("%data%", bio.contacts[contact].mobile);
    $("#header").append(mobilebio);
    var emailbio = HTMLemail.replace
    ("%data%", bio.contacts[contact].email);
    $("#header").append(emailbio);
    var githubbio = HTMLgithub.replace
    ("%data%", bio.contacts[contact].github);
    $("#header").append(githubbio);
    var twitterbio = HTMLtwitter.replace
    ("%data%", bio.contacts[contact].twitter);
    $("#header").append(twitterbio);
    var locationbio = HTMLlocation.replace
    ("%data%", bio.contacts[contact].location);
    $("#header").append(locationbio);
    }
}

displayBio();

// WORK
function displayWork() {
	for (employer in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWork = HTMLworkEmployer.replace
	("%data%", work.jobs[employer].employer);
	var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[employer].title);
	var formattedEmployerTitle = formattedWork + 
	formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDate = HTMLworkDates.replace
	("%data%", work.jobs[employer].dates);
	var formattedLocation = HTMLworkLocation.replace
	("%data%", work.jobs[employer].location);
	var formattedDateLocation = formattedDate + 
	formattedLocation;
	$(".work-entry:last").append(formattedDateLocation);
	var formattedDescription = HTMLworkDescription.replace
	("%data%", work.jobs[employer].description);
	$(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

//PROJECTS
projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedProjectsTitle = HTMLprojectTitle.replace
	("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectsTitle);
	var formattedProjectsDate = HTMLprojectDates.replace
	("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjectsDate);
	var formattedProjectsDescription = HTMLprojectDescription.replace
	("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedProjectsDescription);
	
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
      var formattedProjectsImages = HTMLprojectImage.replace
      ("%data", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedProjectsImages);
      }	
    }
  }
 }

projects.display();

// EDUCATION
function displayEducation() {
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedname = HTMLschoolName.replace
	("%data%", education.schools[school].name);
	var formatteddegree = HTMLschoolDegree.replace
	("%data%", education.schools[school].certification);
	var formattednamedegree = formattedname + formatteddegree;
	$(".education-entry:last").append(formattednamedegree);
	var formattedLocation = HTMLschoolLocation.replace
	("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);
	var formattedDates = HTMLschoolDates.replace
	("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedMajor = HTMLschoolMajor.replace
	("%data%", education.schools[school].subject);
	$(".education-entry:last").append(formattedMajor);
    }
 
     for (online in education.onlinecourses) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      var formattedtitle = HTMLonlineTitle.replace
      ("%data%", education.onlinecourses[online].title);
      var formattedschool = HTMLonlineSchool.replace
      ("%data%", education.onlinecourses[online].school);
      var formattedtitleschool = formattedtitle + formattedschool;
      $(".education-entry:last").append(formattedtitleschool);
      var formatteddate = HTMLonlineDates.replace
      ("%data%", education.onlinecourses[online].dates);
      $(".education-entry:last").append(formatteddate);
      var formattedurl = HTMLonlineURL.replace
      ("%data%", education.onlinecourses[online].url);
      $(".education-entry:last").append(formattedurl);
     }
 } 

displayEducation();

$("#mapDiv").append(googleMap);

