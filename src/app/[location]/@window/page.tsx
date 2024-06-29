import LocationNotFound from "@/components/LocationNotFound";
import WindowComponent from "@/components/WindowComponent";
import { getResolvedLatLong } from "@/lib/location-info";

type TWindowPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const WindowPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}: TWindowPageProps) => {
  const locationWithLatLon = await getResolvedLatLong(
    location,
    latitude,
    longitude
  );
  if (locationWithLatLon?.lat && locationWithLatLon?.lon) {
    return (
      <WindowComponent
        latitude={locationWithLatLon?.lat}
        longitude={locationWithLatLon?.lon}
      />
    );
  } else {
    return <LocationNotFound />;
  }
};

export default WindowPage;
