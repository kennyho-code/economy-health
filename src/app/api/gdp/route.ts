import { getGdpData } from "@/lib/getGdpData";

export async function GET(request: Request) {
  const data = await getGdpData();
  return Response.json({ message: "TEST!" });
}
