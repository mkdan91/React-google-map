
export const fetchData = (data) => {
  var dict = data.reduce((prev, client, arr) => {
    if (!prev[client.Country])
      prev[client.Country] = {};

    if (!prev[client.Country][client.City])
      prev[client.Country][client.City] = [];

    prev[client.Country][client.City].push([client.CompanyName, client.Address]);
    return prev;
  }, {});

  return dict;
}

export const geocodeAddress = (adress, google) => {
  var coords = { lat: 0, lng: 0 };
  var geocoder = new google.maps.Geocoder();
  var strAdress = adress.country + ' ' + adress.city + ' ' + adress.street;
  geocoder.geocode({ 'address': strAdress }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      coords.lat = results[0].geometry.location.lat();
      coords.lng = results[0].geometry.location.lng();
    }
  });
  return coords;
}
