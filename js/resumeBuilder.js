// Resume 2016 - Using JavaScript Functions with JQuery to select 
// data from JSON objects and display the data on a web page to show a resume
// including work, education, bio and projects

// JSON containing biography information
// with 2 arrays for contact details and Skills

var bio = {
     "name": "Mike Smith ",
     "role": "Workflow Solutions Manager",
     "contacts": 
      {
       "mobile": "0703 40 80 50",
       "email": "mike@inthezone.com",
       "github": "MIBUK",
       "twitter": "@inthezone",
       "location": "Stockholm, Sweden"
      },
     "welcomeMessage": "Welcome to my online resume. It will summarise my skills, history and contact info.",
     "skills": [
     "HTML", "CSS", "JavaScript", "Workflow Tools", "Variable Data", "Networks", "Crossmedia Tools"
     ],
     "biopic": "http://www.hotmodelsactress.com/actors/images/Alec_Baldwin.jpg"
};

// JSON containing work information
// with 1 array containing details for each job

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
 };

// JSON containing project information
// with 1 array containing links to images

var projects = {
     "projects": [
     { 
      "title": "Build a Portfolio Site",
      "dates": "2015",
      "description": "Create a reponsive web site using HTML5 and CSS3 with @media calls and selecting image resolutions based on the output device form mobile to tablet to laptop.",
      "images": ["https://media-mediatemple.netdna-ssl.com/wp-content/uploads/images/fresh-portfolios/charlie-gentle.jpg", "https://media-mediatemple.netdna-ssl.com/wp-content/uploads/2013/06/designing-coding-portfolio_mini.jpg"]
     }
    ]
};

// JSON containing education information
// with 2 arrays containing schools details and online courses

var education = {
     "schools": [
     { 
      "name": "West Herts College",
      "location": "Watford, UK",
      "degree": "HNC",
      "majors": ["Software Engineering"],
      "dates": "1992-1994",
      "url": "https://www.westherts.ac.uk/"
     },
     { 
      "name": "Leggatts School",
      "location": "Watford, UK",
      "degree": "O'Levels",
      "majors": ["English", " Maths"],
      "dates": "1981-1986",
      "url": "https://www.facebook.com/pages/Leggatts-school/104261299619366?rf=108533885843749"
     }
    ],
     "onlineCourses": [
     {
      "title": "Udacity NanoDegree",
      "school": "Udacity",
      "date": "2016",
      "url": "http://www.udacity.com"
     }
    ]
  
};

// A function to display biography information via JQuery selectors to append data to 
// HTML using variables declared in the helper.js file.
// Using an IF statement to append the skills from the skills array and a FOR loop to
// display contact information from the contacts array

bio.display = function() {
    var rolebio = HTMLheaderRole.replace
    ("%data%", bio.role);
    $("#header").prepend(rolebio);
    var namebio = HTMLheaderName.replace
    ("%data%", bio.name);
    $("#header").prepend(namebio);
    var imagebio = HTMLbioPic.replace
    ("%data%", bio.biopic);
    $("#header").append(imagebio);
    var welcomebio = HTMLwelcomeMsg.replace
    ("%data%", bio.welcomeMessage);
    $("#header").append(welcomebio);
    var mobilebio = HTMLmobile.replace
    ("%data%", bio.contacts.mobile);
    $("#topContacts").append(mobilebio);
    $("#footerContacts").append(mobilebio);
    var emailbio = HTMLemail.replace
    ("%data%", bio.contacts.email);
    $("#topContacts").append(emailbio);
    $("#footerContacts").append(emailbio);
    var githubbio = HTMLgithub.replace
    ("%data%", bio.contacts.github);
    $("#topContacts").append(githubbio);
    $("#footerContacts").append(githubbio);
    var twitterbio = HTMLtwitter.replace
    ("%data%", bio.contacts.twitter);
    $("#topContacts").append(twitterbio);
    $("#footerContacts").append(twitterbio);
    var locationbio = HTMLlocation.replace
    ("%data%", bio.contacts.location);
    $("#topContacts").append(locationbio);
    $("#footerContacts").append(locationbio);

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
};

// Calls the displayBio function to display the data in the bio object on the web page

bio.display();

// A function to display work information via JQuery selectors to append data to 
// HTML using variables declared in the helper.js file.
// Using FOR loop to display work information from the work object

work.display = function() {
    for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
    	$("#workExperience").append(HTMLworkStart);
    	var formattedWork = HTMLworkEmployer.replace
    	("%data%", work.jobs[indexCount].employer);
    	var formattedTitle = HTMLworkTitle.replace
    	("%data%", work.jobs[indexCount].title);
    	var formattedEmployerTitle = formattedWork + formattedTitle;
    	$(".work-entry:last").append(formattedEmployerTitle);
    	var formattedDate = HTMLworkDates.replace
    	("%data%", work.jobs[indexCount].dates);
    	var formattedLocation = HTMLworkLocation.replace
    	("%data%", work.jobs[indexCount].location);
    	var formattedDateLocation = formattedDate + formattedLocation;
    	$(".work-entry:last").append(formattedDateLocation);
    	var formattedDescription = HTMLworkDescription.replace
    	("%data%", work.jobs[indexCount].description);
    	$(".work-entry:last").append(formattedDescription);
        }
};

// Calls the displayWork function to display the data in the work object on the web page

work.display();

// A function to display projects information via JQuery selectors to append data to 
// HTML using variables declared in the helper.js file.
// Using an IF statement to append the images if they exist from the iamges array and 
// a FOR loop to display the images within the images array

projects.display = function() {
    for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
    	$("#projects").append(HTMLprojectStart);
    	var formattedProjectsTitle = HTMLprojectTitle.replace
    	("%data%", projects.projects[indexCount].title);
    	$(".project-entry:last").append(formattedProjectsTitle);
    	var formattedProjectsDate = HTMLprojectDates.replace
    	("%data%", projects.projects[indexCount].dates);
    	$(".project-entry:last").append(formattedProjectsDate);
    	var formattedProjectsDescription = HTMLprojectDescription.replace
    	("%data%", projects.projects[indexCount].description);
    	$(".project-entry:last").append(formattedProjectsDescription);

        if (projects.projects[indexCount].images.length > 0) {
           for (var Count = 0; Count < projects.projects[indexCount].images.length; Count++) {
           	   var formattedProjectsImages = HTMLprojectImage.replace
           	   ("%data%", projects.projects[indexCount].images[Count]);
           	   $(".project-entry:last").append(formattedProjectsImages);
           	   }
          	}
     }
 };

// Calls the projects.display function to display the data in the projects object on the web page

projects.display();

// A function to display education information via JQuery selectors to append data to 
// HTML using variables declared in the helper.js file.
// Using 2 FOR in loops, the first one to select data in the schools array and the second 
// FOR loop to display the data within the onlinecourses array

education.display = function () {
    for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
        $("#education").append(HTMLschoolStart);
        var formattedname = HTMLschoolName.replace
        ("%data%", education.schools[indexCount].name);
        var formatteddegree = HTMLschoolDegree.replace
        ("%data%", education.schools[indexCount].degree);
        var formattednamedegree = formattedname + formatteddegree;
        $(".education-entry:last").append(formattednamedegree);
        var formattedLocation = HTMLschoolLocation.replace
        ("%data%", education.schools[indexCount].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDates = HTMLschoolDates.replace
        ("%data%", education.schools[indexCount].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace
        ("%data%", education.schools[indexCount].majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedURL = HTMLschoolURL.replace
        ("%data%", education.schools[indexCount].url);
        $(".education-entry:last").append(formattedURL);
        }

        for (var indexCount = 0; indexCount < education.onlineCourses.length; indexCount++) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            var formattedtitle = HTMLonlineTitle.replace
            ("%data%", education.onlineCourses[indexCount].title);
            var formattedschool = HTMLonlineSchool.replace
            ("%data%", education.onlineCourses[indexCount].school);
            var formattedtitleschool = formattedtitle + formattedschool;
            $(".education-entry:last").append(formattedtitleschool);
            var formatteddate = HTMLonlineDates.replace
            ("%data%", education.onlineCourses[indexCount].date);
            $(".education-entry:last").append(formatteddate);
            var formattedurl = HTMLonlineURL.replace
            ("%data%", education.onlineCourses[indexCount].url);
            $(".education-entry:last").append(formattedurl);
            }
};

// Calls the displayEducation function to display the data in the education object on the web page

education.display();

// A JQUery selector to append the Google Map to the web page, which dsiplays the locations from the
// bio, work and education

$("#mapDiv").append(googleMap);