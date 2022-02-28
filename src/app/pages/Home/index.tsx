import { useEffect, useState } from "react";
import { TWeatherServiceData } from "src/services/weather/type";
import { fetchOpenWeatherData } from "src/services/weather/weather.service";
import Skeleton from "src/app/atoms/Loader/Skeleton";
import Map from "src/app/atoms/Map";
import { TLocation } from "src/app/atoms/Map/type";
import LocationPermissionBox from "src/app/molecules/HomeSections/LocationPermissionBox";
import Sidebar from "src/app/molecules/HomeSections/Sidebar";

function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showLocationPermissionScreen, setShowLocationPermissionScreen] = useState<boolean>(false);
  const [location, setLocation] = useState<TLocation>({ latitude: 0, longitude: 0 });
  const [weatherData, setWeatherData] = useState<TWeatherServiceData | null>(null);

  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        handleFetchOpenWeatherData(position.coords.latitude, position.coords.longitude, Math.floor(Date.now() / 1000));
        setLoading(false);
      }, (error) => {
        if (error.code === 1) {
          // User Denied Geolocation.
          setShowLocationPermissionScreen(true);
          setLoading(false);
        }
      });
    } else {
      setShowLocationPermissionScreen(true);
      setLoading(false);
    }
  }, []);
  if (showLocationPermissionScreen) return <LocationPermissionBox />;

  const handleFetchOpenWeatherData = async (latitude: number, longitude: number, timestamp: number) => {
      const data = await fetchOpenWeatherData(latitude, longitude, timestamp);
      setWeatherData(data);
  }

  const onTimeChange = (timestamp: number) => {
    handleFetchOpenWeatherData(location.latitude, location.longitude, timestamp);
  }

  if (loading || !weatherData) return <Skeleton />;

  return (
    <div className="h-screen flex-1">
      <Sidebar onTimeChange={onTimeChange} />
      <Map
        location={location}
        locationName={weatherData.timezone}
        weatherData={weatherData?.current}
        googleMapURL="//maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCj5zfRjN8ono7-eyPrv6E8YSXVDfR57tc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
export default Home;
