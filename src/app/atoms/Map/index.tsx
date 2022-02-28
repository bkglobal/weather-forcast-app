import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import WeatherInfoBox from "src/app/atoms/WeatherInfoBox";
import { MapProps } from "./type";

function Map({ location, locationName, weatherData }: MapProps) {

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: location.latitude, lng: location.longitude }}
    >
      <InfoBox
        defaultPosition={{ lat: location.latitude, lng: location.longitude }}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <WeatherInfoBox locationName={locationName} weatherData={weatherData} />
      </InfoBox>
      <Marker position={{ lat: location.latitude, lng: location.longitude }} />
    </GoogleMap>
  )
}
export default withScriptjs(withGoogleMap(Map));
