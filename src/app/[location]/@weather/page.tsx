import WeatherComponents from "@/components/WeatherComponents";

type TWeatherPageProps = {
  params: {
    location: string;
  };
  searchParams: Record<string, any>;
};

const WeatherPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}: TWeatherPageProps) => {
  return <WeatherComponents latitude={latitude} longitude={longitude} />;
};

export default WeatherPage;
