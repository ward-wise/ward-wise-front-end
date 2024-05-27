import { getWardContactInfo } from "@/app/lib/data";


/* /api/wardcontactinfo/[ward]
responds with one ward's contact info records
**/
export async function GET(request: Request, {
  params,
}: {
  params: { ward: string };
}): Promise<Response> {
  const ward: number = +params.ward;

  //error handling for out of bounds ward
  const errors: string[] = [];
  if (Number.isNaN(ward) || ward < 1 || ward > 50) {
    errors.push("Ward out of bounds. Select a number 1-50.");
  }
  if (errors.length) {
    return Response.json({ errors }, { status: 400 });
  }

  const wardContactInfo = await getWardContactInfo(ward);
  return Response.json({ wardContactInfo });
}
