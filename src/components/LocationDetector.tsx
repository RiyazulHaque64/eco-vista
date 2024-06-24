"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, searchParams, router]);

  return (
    <div className="flex felx-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <div>
          <h2 className="text-green-500">Detecting Location...</h2>
        </div>
      )}
    </div>
  );
};

export default LocationDetector;
