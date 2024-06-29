import LocationInfo from "@/components/LocationInfo";
import LocationNotFound from "@/components/LocationNotFound";
import { getResolvedLatLong } from "@/lib/location-info";

type TLocationPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}: TLocationPageProps) => {
  const locationWithLatLon = await getResolvedLatLong(
    location,
    latitude,
    longitude
  );
  if (locationWithLatLon?.lat && locationWithLatLon?.lon) {
    return (
      <LocationInfo
        latitude={locationWithLatLon?.lat}
        longitude={locationWithLatLon?.lon}
      />
    );
  } else {
    return <LocationNotFound />;
  }
};

export default LocationPage;
