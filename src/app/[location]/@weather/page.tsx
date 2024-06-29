import LocationNotFound from "@/components/LocationNotFound";
import WeatherComponents from "@/components/WeatherComponents";
import { getResolvedLatLong } from "@/lib/location-info";

type TWeatherPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}: TWeatherPageProps) => {
  const locationWithLatLon = await getResolvedLatLong(
    location,
    latitude,
    longitude
  );
  if (locationWithLatLon?.lat & locationWithLatLon?.lon) {
    return (
      <WeatherComponents
        latitude={locationWithLatLon?.lat}
        longitude={locationWithLatLon?.lon}
      />
    );
  } else {
    return <LocationNotFound />;
  }
};

export default WeatherPage;
