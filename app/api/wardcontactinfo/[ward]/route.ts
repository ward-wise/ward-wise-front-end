import { getWardContactInfo } from "@/app/lib/data";


/* /api/wardcontactinfo/[ward]
responds with one ward's contact info records
**/
export async function GET(request: Request, {
  params,
}: {
  params: { ward: string };
}): Promise<Response> {
  console.log("!!!!!!!", params);
  const ward: number = +params.ward;
  const wardContactInfo = await getWardContactInfo(ward);
  return Response.json({ wardContactInfo });
}
