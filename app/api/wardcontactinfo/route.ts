import { getAllWardContactInfo } from "@/app/lib/data";


/* /api/wardcontactinfo
responds with all ward contact info records
**/
export async function GET(): Promise<Response> {
  const wardContactInfos = await getAllWardContactInfo();
  return Response.json({ wardContactInfos });
}
