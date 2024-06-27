import LocationInfo from "@/components/LocationInfo";

type TLocationPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const LocationPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}: TLocationPageProps) => {
  return <LocationInfo latitude={latitude} longitude={longitude} />;
};

export default LocationPage;
