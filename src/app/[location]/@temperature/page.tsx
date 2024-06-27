import TemperatureComponent from "@/components/TemperatureComponent";

type TTemperaturePageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const TemperaturePage = ({
  params: { location },
  searchParams: { latitude, longitude },
}: TTemperaturePageProps) => {
  return <TemperatureComponent latitude={latitude} longitude={longitude} />;
};

export default TemperaturePage;
