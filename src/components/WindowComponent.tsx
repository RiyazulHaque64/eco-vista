import { getWindInfo } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

type TWindowComponentProps = {
  latitude: number;
  longitude: number;
};

const WindowComponent = async ({
  latitude,
  longitude,
}: TWindowComponentProps) => {
  const windowInfo = await getWindInfo(latitude, longitude);
  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={150}
          height={150}
        />
        <h3 className="feature-title">{windowInfo?.speed} meter/sec</h3>
        <span className="feature-name">{windowInfo?.deg} degrees</span>
      </div>
    </Card>
  );
};

export default WindowComponent;
