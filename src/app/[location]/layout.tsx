import Image from "next/image";
import { ReactNode } from "react";

const LocationLayout = ({
  children,
  aqi,
  temperature,
  weather,
  window,
}: {
  children: ReactNode;
  aqi: ReactNode;
  temperature: ReactNode;
  weather: ReactNode;
  window: ReactNode;
}) => {
  return (
    <div className="wrapper">
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="Background Image"
      />
      <div className="overlay"></div>
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {aqi}
            {temperature}
            {weather}
            {window}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationLayout;
