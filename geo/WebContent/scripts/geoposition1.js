var watchID = navigator.geolocation.getCurrentPosition(
function(position) {  
  document.getElementById('geo').innerHTML ="" +position.coords.latitude +","+ position.coords.longitude
} ,
function(position){  
  alert("Error getting position" );  
} 
, {enableHighAccuracy:true, maximumAge:30000, timeout:27000}
);  


