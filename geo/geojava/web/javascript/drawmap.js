function initialize() {

	var mapOptions = {

		zoom : 15,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var watchID = navigator.geolocation.watchPosition(function(position) {
		document.getElementById('geo').innerHTML = ""
				+ position.coords.latitude + "," + position.coords.longitude
		p1 = position.coords.latitude;
		p2 = position.coords.longitude;

		drawmap(p1, p2); 
	}, function(position) {
		 alert("Error getting position" );
	}, {
		enableHighAccuracy : true,
		maximumAge : 30000,
		timeout : 27000
	});

	function drawmap(p1, p2) {
		map.setCenter(new google.maps.LatLng(p1, p2));

	}
}