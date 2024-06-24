import { getLocations } from "./location-util";

export const GET = async () => {
  const locations = await getLocations();
  return Response.json(locations);
};
