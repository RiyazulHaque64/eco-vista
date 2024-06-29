import AQIComponent from "@/components/AQIComponent";
import LocationNotFound from "@/components/LocationNotFound";
import { getResolvedLatLong } from "@/lib/location-info";

type TAQIPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}: TAQIPageProps) => {
  const locationWithLatLon = await getResolvedLatLong(
    location,
    latitude,
    longitude
  );
  if (locationWithLatLon?.lat && locationWithLatLon?.lon) {
    return (
      <AQIComponent
        latitude={locationWithLatLon?.lat}
        longitude={locationWithLatLon.lon}
      />
    );
  } else {
    return <LocationNotFound />;
  }
};

export default AQIPage;
