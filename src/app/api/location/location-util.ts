export type TLocationInfo = {
  location: string;
  latitude: number;
  longitude: number;
};

const data = [
  {
    location: "New York City, USA",
    latitude: 40.712776,
    longitude: -74.005974,
  },
  {
    location: "Tokyo, Japan",
    latitude: 35.689487,
    longitude: 139.691711,
  },
  {
    location: "Paris, France",
    latitude: 48.856613,
    longitude: 2.352222,
  },
  {
    location: "Sydney, Australia",
    latitude: -33.86882,
    longitude: 151.20929,
  },
  {
    location: "Rio de Janeiro, Brazil",
    latitude: -22.906847,
    longitude: -43.172897,
  },
  {
    location: "Cape Town, South Africa",
    latitude: -33.92487,
    longitude: 18.424055,
  },
  {
    location: "Moscow, Russia",
    latitude: 55.755825,
    longitude: 37.617298,
  },
  {
    location: "Mumbai, India",
    latitude: 19.07609,
    longitude: 72.877426,
  },
  {
    location: "Cairo, Egypt",
    latitude: 30.04442,
    longitude: 31.235712,
  },
  {
    location: "Toronto, Canada",
    latitude: 43.65107,
    longitude: -79.347015,
  },
  {
    location: "Dhaka, Bangladesh",
    latitude: 23.810331,
    longitude: 90.412521,
  },
];

const getLocations = async () => {
  return data;
};

const getLocationByName = async (location: string) => {
  if (!location) return null;
  const found = data.find((item: TLocationInfo) =>
    item.location.toLowerCase().includes(location.toLowerCase())
  );
  return found || {};
};

export { getLocationByName, getLocations };
