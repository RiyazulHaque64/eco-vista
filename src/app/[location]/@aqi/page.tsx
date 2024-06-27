import AQIComponent from "@/components/AQIComponent";

type TAQIPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const AQIPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}: TAQIPageProps) => {
  return <AQIComponent latitude={latitude} longitude={longitude} />;
};

export default AQIPage;
