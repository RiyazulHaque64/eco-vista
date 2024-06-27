import { getWeatherInfo } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

type TWeatherComponentsProps = {
  latitude: number;
  longitude: number;
};
const WeatherComponents = async ({
  latitude,
  longitude,
}: TWeatherComponentsProps) => {
  const weatherInfo = await getWeatherInfo(latitude, longitude);
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_rain.png"
          alt="rain icon"
          width={150}
          height={150}
        />
        <h3 className="feature-title">{weatherInfo?.description}</h3>
        <span className="feature-name">{weatherInfo?.main}</span>
      </div>
    </Card>
  );
};

export default WeatherComponents;
