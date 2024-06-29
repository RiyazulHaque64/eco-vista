import LocationNotFound from "@/components/LocationNotFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

type TTemperaturePageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}: TTemperaturePageProps) => {
  const locationWithLatLon = await getResolvedLatLong(
    location,
    latitude,
    longitude
  );
  if (locationWithLatLon?.lat && locationWithLatLon?.lon) {
    return (
      <TemperatureComponent
        latitude={locationWithLatLon.lat}
        longitude={locationWithLatLon?.lon}
      />
    );
  } else {
    return <LocationNotFound />;
  }
};

export default TemperaturePage;
