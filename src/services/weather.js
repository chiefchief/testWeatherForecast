const FORECAST_KEY = "0a7ec726c8554766ae0141220191007";
const ONE_MORE_KEY = "669fe115da39422181f7ada405f54e1f";

export const getWeather = async (lat, lng) => {
  const URL =
    "https://api.apixu.com/v1/current.json?key=" +
    FORECAST_KEY +
    "&q=" +
    lat +
    "," +
    lng;
  let obj = {};
  await fetch(URL)
    .then(res => res.json())
    .then(data => {
      obj = {
        city: `${data.location.name}, ${data.location.country}`,
        lat: data.location.lat,
        lng: data.location.lon,
        temperature: data.current.feelslike_c
      };
    });
  return obj;
};

export const getForecast = async (lat, lng) => {
  const URL = `https://api.apixu.com/v1/forecast.json?key=${FORECAST_KEY}&q=${lat},${lng}&days=7`;
  let arr = [];
  await fetch(URL)
    .then(res => res.json())
    .then(data => {
      arr = data.forecast.forecastday;
    });
  return arr;
};

export const getLatLng = async city => {
  const address = city.replace(/ /g, "+");
  const url1 = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${ONE_MORE_KEY}`;
  let obj = {
    lat: "50.431782",
    lng: "30.516382"
  };
  await fetch(url1)
    .then(res => res.json())
    .then(body => {
      obj = body.results[0].geometry;
    });
  return obj;
};

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
