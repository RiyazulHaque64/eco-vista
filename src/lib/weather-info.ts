export const getWeatherInfo = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data: any = await response.json();
    return data?.weather[0];
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getTemperatureInfo = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data: any = await response.json();
    return data?.main;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getWindInfo = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data: any = await response.json();
    return data?.wind;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getAQIInfo = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data: any = await response.json();
    return data?.list[0];
  } catch (error: any) {
    console.error(error.message);
  }
};
