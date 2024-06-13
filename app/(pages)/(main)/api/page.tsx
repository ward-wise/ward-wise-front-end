import { Metadata } from "next";
import { Hyperlink } from "@/app/components/ui/Hyperlink";

export const metadata: Metadata = {
  title: 'API',
  openGraph: {
    title: 'Ward Wise API',
  }
};

export default function Page() {
  return (
    <div className="flex items-center flex-col py-6 mx-6">
      <div className="max-w-prose flex flex-col gap-y-8">
        <h1 className="text-4xl mt-4 lg:mt-8 mb-4">API Documentation</h1>
        <p>
          Welcome to the Ward Wise API. This is a JSON API which provides data
          gathered and processed by the Ward Wise team.
        </p>

        <Hyperlink href="/faqs#data">Where does your data come from?</Hyperlink>

        {/* Endpoint Descriptions */}
        <div className="flex flex-col gap-16 mt-8">
          {/* Ward Contact Info */}
          <Endpoint
            title="/wardcontactinfo/[ward]"
            id="wardcontactinfo"
            entries={[
              {
                description: (
                  <p>
                    Get contact and web presence info for alders and ward
                    offices. Access information for all wards at{" "}
                    <span className="italic">/wardcontactinfo</span>
                  </p>
                ),
                method: "GET",
                url: "wardwisechicago.org/api/wardcontactinfo",
              },
              {
                description: (
                  <p>
                    Or, get information for a specific ward at{" "}
                    <span className="italic">.../ward</span>.
                  </p>
                ),
                method: "GET",
                url: "wardwisechicago.org/api/wardcontactinfo/47",
              },
            ]}
          />

          {/* Spending Items */}
          <Endpoint
            title="/spendingitems"
            id="spendingitems"
            entries={[
              {
                description: (
                  <p>
                    Get information about aldermanic menu expenditures from 2005
                    to the present day.
                  </p>
                ),
                method: "GET",
                url: "wardwisechicago.org/api/spendingitems",
              },
              {
                description: (
                  <p>
                    You can filter spending item results with query strings, to
                    get results by <span className="italic">ward</span>,{" "}
                    <span className="italic">year</span>, and/or{" "}
                    <span className="italic">category</span>.
                  </p>
                ),
                method: "GET",
                url: "wardwisechicago.org/api/spendingitems?ward=12&year=2023&category=Street%20Resurfacing",
              },
            ]}
          />
        </div>

        <p className="text-center text-sm mt-24 mb-8">
          Having trouble getting the information you want? Have an idea for
          another way that we could use or provide access to our data? Drop us a
          line on{" "}
          <a
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ward-wise/ward-wise-front-end"
          >
            GitHub.
          </a>{" "}
          Having a great time using our data for something interesting? Let us
          know that, too!
        </p>
      </div>
    </div>
  );
}
/* TODO: If we start adding routes with methods other than GET
(Like a form to update ward contact info, or something), we will have to add
logic to display the different endpoints. This is a quickfix with hardcoded GET styling. */
function Endpoint({ title, id, entries }: { title: string, id?: string, entries: { description: JSX.Element; method: string; url: string }[] }) {
  return (
    <div id={id}>
      <h2 className="font-bold">{title}</h2>
      {entries.map((e, i) =>
        <>
          <div className={i > 0 ? "mt-4" : ""}>
            {e.description}
          </div>
          <span className="bg-green-400 rounded-sm px-1 text-white">{e.method}</span>
          <p className="inline ml-2 bg-slate-600 rounded-sm text-white px-4 font-mono break-all"> {e.url}
          </p>
        </>
      )}
    </div>
  );
}
