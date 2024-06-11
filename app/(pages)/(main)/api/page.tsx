import { Hyperlink } from "@/app/components/ui/Hyperlink";

export default function Page () {
    return (
      <div className="p-4 sm:p-12 flex flex-col gap-8">
        <h1 className="text-xl text-center font-bold">API Documentation</h1>
        <p>
          Welcome to the Ward Wise API. This is a JSON API which provides data
          gathered and processed by the Ward Wise team.
        </p>

        <Hyperlink href="/faqs#data">Where does your data come from?</Hyperlink>

        {/* Endpoint Descriptions */}
        <div className="flex flex-col gap-8">
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
                url: "wardwisechicago.org/api/ward",
              },
              {
                description: (
                  <p>
                    Or, get information for a specific ward at{" "}
                    <span className="italic">.../ward</span>.
                  </p>
                ),
                method: "GET",
                url: "wardwisechicago.org/api/ward/47",
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

        <p className="text-center text-sm md:w-1/2 md:mx-auto">
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
    );
}
/* TODO: If we start adding routes with methods other than GET
(Like a form to update ward contact info, or something), we will have to add
logic to display the different endpoints. This is a quickfix with hardcoded GET styling. */
function Endpoint({ title, id, entries }: { title: string, id?: string, entries: {description: JSX.Element; method: string; url: string}[] }) {
  return (
    <div id={id}>
      <h2 className="font-bold">{title}</h2>
      {entries.map((e, i) =>
        <>
          <div className={i > 0 ? "mt-4" : ""}>
            {e.description}
          </div>
          <span className="bg-green-400 rounded-sm px-1 text-white">{e.method}</span>
          <p className="inline ml-2 bg-slate-600 rounded-sm text-white px-4 font-mono"> {e.url}
          </p>
        </>
      )}
    </div>
  );
}
