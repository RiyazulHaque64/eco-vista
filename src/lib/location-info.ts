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
    const response = await fetch(`${process.env.BASE_URL}/api/location}`);
    const data = response.json();
    return data;
  } catch (error: any) {
    console.error(error?.message);
  }
};
