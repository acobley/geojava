var watchID = navigator.geolocation.watchPosition(function(position) {  
  document.getElementById('geo').innerHTML ="Lat " +position.coords.latitude +", Long"+ position.coords.longitude
  //call="http://maps.google.com/maps/api/geocode/json?latlng="+position.coords.latitude=","+position.coords.longitude+"&sensor=false&region=nzThen%20you%20can%20use%20that%20XML%20to%20get%20whatever%20details%20you%20need,%20including%20the%20Citylink|improve%20this%20answeredited%20Oct%2012%20'10%20at%2019:59answered%20Oct%2012%20'10%20at%2019:49PostMan2,6551022Was%20this%20post%20useful%20to%20you?up%20vote0down%20voteIf%20you're%20looking%20for%20free%20(as%20freedom)%20sources,%20you%20can%20use%20Geonames%20API%20findNearbyPlaceName.For%20example%20the%20following%20returns%20nearest%20Placename:http://api.geonames.org/findNearbyPlaceName?lat=47.3&lng=9&username=demoMore%20information%20is%20available%20herehttp://www.geonames.org/export/web-services.html#findNearbyPlaceNameAnother option is getting data from Freebase. Instead of single point it takes bounded box:http://api.freebase.com/api/service/geosearch?location=[30.2,50.4,30.6,50.8]&location_type=/location/citytown&inside=true&indent=1link|improve this answeredited Apr 6 at 7:36answered Apr 6 at 7:28Maksym Kozlenko34624feedbackYour Answerlog in orNameEmailHome PageNot the answer you're looking for? Browse other questions tagged geolocation gps or ask your own question.Hello World!This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free, no registration required.about �� faq ��taggedgeolocation �� 1630gps �� 1553asked12 months agoviewed484 timesactive6 months ago"
  p1=position.coords.latitude;
  p2=position.coords.longitude;
 
  findstuff(p1,p2,"cheese");
  //alert("" +position.coords.latitude +","+ position.coords.longitude);  
} ,
function(position){  
  //alert("Error getting position" );  
} 
, {enableHighAccuracy:true, maximumAge:30000, timeout:27000}
);  



function findstuff(p1,p2,stuff){
loc=p1+","+p2;
url="http://ajax.googleapis.com/ajax/services/search/local?v=1.0&sll="+loc+"&radius=1&q="+stuff+"%20loc:"+loc+"&key=AIzaSyBRqkq8vYqlDHjL0-HvxN4OWKk3PVJ-rCg&callback=?";

  $.getJSON(url,function(d1) {
    results=d1.responseData.results;
    Places="";
     for (i=0;i<results.length;i++){
        place=results[i];
        title=place.title;
        address="<address>";
        for (j=0;j<place.addressLines.length;j++){
           address=address+place.addressLines[j]+"<br>";
        }
        address=address+"</address>";
        phone=place.phoneNumbers[0].number;
        Places=Places+"<h2>"+title+"</h2>"+address+"<br>"+phone;
     }
     document.getElementById('places').innerHTML =""+Places;
     
  });

}