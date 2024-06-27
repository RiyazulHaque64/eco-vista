"use client";

import { getLocationLatLongList } from "@/lib/location-info";
import Image from "next/image";
import { useEffect, useState } from "react";

type TLocationSwitcherProps = {
  latitude: number;
  longitude: number;
};

const LocationSwitcher = ({ latitude, longitude }: TLocationSwitcherProps) => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationList() {
      const locationsList = await getLocationLatLongList();
      setLocations(locationsList);
    }
    getLocationList();
  }, []);
  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={40}
          height={40}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            <li>Kolkata</li>
            <li>Dhaka</li>
            <li>London</li>
            <li>Amsterdam</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
