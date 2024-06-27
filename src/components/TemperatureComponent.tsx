import { getTemperatureInfo } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

type TTemperatureComponentProps = {
  latitude: number;
  longitude: number;
};
const TemperatureComponent = async ({
  latitude,
  longitude,
}: TTemperatureComponentProps) => {
  const temperatureInfo = await getTemperatureInfo(latitude, longitude);
  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_tempareture.png"
          alt="rain icon"
          width={150}
          height={150}
        />
        <h3 className="feature-title">{temperatureInfo?.temp}°C</h3>
        <span className="feature-name">
          Feels Like {temperatureInfo?.feels_like}°C
        </span>
      </div>
    </Card>
  );
};

export default TemperatureComponent;
