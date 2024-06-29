import { getLocationByName } from "@/app/api/location/location-util";

export const getLocationInfo = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = response.json();
    return data;
  } catch (error: any) {
    console.error(error?.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error?.message);
  }
};

export const getResolvedLatLong = async (
  location: string,
  lat: number,
  lon: number
) => {
  if (lat & lon) {
    return {
      lat,
      lon,
    };
  }
  const locationWithLatLon: any = await getLocationByName(location);

  if ((locationWithLatLon?.latitude, locationWithLatLon?.longitude)) {
    const lat = locationWithLatLon.latitude;
    const lon = locationWithLatLon.longitude;
    return {
      lat,
      lon,
    };
  }
};
