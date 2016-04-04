var events;

$(document).ready(function() {
	$('#events').click(function(){
		$.getJSON("http://visittampere.fi:80/api/search","type=event&text=music&limit=5",function (data){
		// save the list of events
		// no real change - just want to force new git commit
		events = data;
		 var infoHTML = "";
		 //output summary of each event to a singleitem element
		 $.each(data, function(event,eventInfo){
			 infoHTML = "<div class = 'panel panel-default'>";
			 infoHTML +="   <div class = 'panel-heading'> <h5>";
			 infoHTML +=      eventInfo.title +"</h5></div>";
			 infoHTML += "  <div class='panel-body'>" + eventInfo.contact_info.address;
			 infoHTML += "    <br />" + "more event information" +  "</div>";
			 infoHTML += "</div>";
		   $("#headlines").append(infoHTML);
		  }); // end of each()
		   
		});// end of getJSON
		return false;
	}); // end click
	
}); // end ready