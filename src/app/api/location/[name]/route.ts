import { NextRequest } from "next/server";
import { getLocationByName } from "../location-util";

export const GET = async (
  request: NextRequest,
  { params }: { params: Record<string, any> }
) => {
  const location = await getLocationByName(params.name);
  return Response.json(location);
};
