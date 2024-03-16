import { Metadata } from "next";
import { Hyperlink } from "../../components/ui/Hyperlink";

export const metadata: Metadata = {
  title: 'FAQs',
};

export default function FAQs() {
  return (
    <div className="flex items-center flex-col">
      <div className="max-w-prose">
        <h1 className="text-4xl mt-4 lg:mt-8 mb-16">Frequently Asked Questions</h1>


        <FAQ title={"What is a ward?"}>
          <p className="mb-4">
            The city of Chicago is divided into 50 legistlative areas, called
            &quot;wards&quot;. Each ward contains rougly 50,000 residents, and can
            overlap with multiple neighborhoods. Ward boundaries are redrawn every 8
            years and were last redrawn in 2023.
          </p>
          <Hyperlink href="https://www.chicago.gov/city/en/about/wards.html">
            {"View the city's list of wards"}
          </Hyperlink>
        </FAQ>


        <FAQ title={"What is an alder?"}>
          <p className="mb-4">
            Each ward elects an alder, who is essentially a mini-mayor. They provide
            ward services and vote on citywide legistlation in the Chicago City
            Council.
          </p>
          <Hyperlink href="https://www.citybureau.org/newswire/2023/1/24/what-does-an-alderman-do">
            Learn more about what an alder does
          </Hyperlink>
        </FAQ>

        <FAQ title={"What are aldermanic menu funds?"}>
          <div className="mb-10">
            <p>
              &quot;Every year, the City of Chicago allocates &apos;menu money&apos;
              to each of the 50 alders to spend at their discretion on capital
              improvements within their ward. In the past, alders received $1.32
              million a year. In 2021, the amount increased to $1.5 million.
              <br />
              Menu money funds can only be spent on capital projects and not operating
              costs; for example, they can fund a public bench or street repaving, but
              it cannot fund an after-school program or snacks. Most broadly, the
              money can be spent on infrastructure projects on public land. This
              budget is the main source of funding local infrastructure improvements
              like:
            </p>
            <ul className="ml-8 list-disc">
              <li>street repaving</li>
              <li>pedestrian safety projects</li>
              <li>lighting</li>
              <li>traffic calming, and</li>
              <li>sidewalk repairs&quot;</li>
            </ul>
            <div className="w-full">
              <p className="text-xs text-right">
                Source:{" "}
                <Hyperlink href="https://www.participatepbchicago.org/pages/menumoney">
                  PB Chicago
                </Hyperlink>
              </p>
            </div>
          </div>
          <p>
            Alders are provided a{" "}
            <Hyperlink href="https://www.wardwisechicago.org/#/menu-items">
              list of standard menu items
            </Hyperlink>
            {" "} they can implement across their ward. They can choose to spend money on
            projects that aren&apos;t on the list too. It is entirely up to
            alders&apos; discretion how and where they spend their menu funds,
            though some alders choose to involve the community through participatory
            budgeting.
          </p>
        </FAQ>

        <FAQ title={"What is participatory budgeting?"}>
          <p>
            Participatory budgeting (PB) is the practice of having the community
            directly decide how to spend public budgets.
            Only a handful of wards currently use PB budgeting, but that number is
            growing. A typical PB process goes like this:
          </p>
          <ol className="ml-8 space-y-2 mt-2 list-decimal mb-6">
            <li>Residents submit PB project ideas</li>
            <li>
              A group of volunteers evaluates the ideas based on need and
              feasibility
            </li>
            <li>
              Residents vote on the final list of ideas to determine which ideas get
              funding
            </li>
            <li>
              The ward office works with CDOT to implement the winning project ideas
            </li>
          </ol>
          <Hyperlink href="https://www.participatepbchicago.org/pages/pbgeneralinfo">
            Learn more about participatory budgeting in Chicago
          </Hyperlink>
        </FAQ>

        <FAQ title={"What is Vision Zero?"}>
          <p className="mb-4">
            Menu iteams that make streets safer are denoted with the Vision Zero
            logo in the menu item list. Vision Zero is an effort to bring the number
            of yearly traffic fatalities down to zero.
            <br />
          </p>
          <Hyperlink href="https://activetrans.org/our-work/walking/vision-zero">
            Vision Zero Overview
          </Hyperlink>
        </FAQ>

        <FAQ title={"How can I influence menu funds and infrastructure spending in my ward?"}>
          <p className="mb-4">
            {/* TODO: should link Find My Ward tool here */}
            Reach out to your ward office! You can use our Find My Ward tool to get their contact information. If
            your ward does participatory budgeting, ask how you can be involved.If
            not, don&apos;t despair! You can still contact your alder to discuss
            your infrastructure idea (and ask them to consider participatory
            budgeting).
          </p >
          <p>Two pieces of advice:</p>
          <ol className="ml-8 space-y-2 mt-2 list-decimal">
            <li>Phone calls are generally more impactful than emails.</li>
            <li>
              Try to find other people who care about the same issue. Convince them
              to contact your ward office too! Many voices have more influence than
              a single voice alone.
            </li>
          </ol>
        </FAQ >

        <FAQ title={"Where does your data come from?"}>
          <ul className="ml-8 space-y-2 list-disc">
            <li>
              Since 2012, the Chicago Office of Budget and Management has published
              PDFs of itemized aldermanic menu spending to their{" "}
              <Hyperlink href="https://www.chicago.gov/city/en/depts/obm/provdrs/cap_improve/svcs/cip-archive.html">
                Capital Improvement Archive
              </Hyperlink>
              . Our site is using raw data extracted from these PDFs by journalist{" "}
              <Hyperlink href="https://jakejeromesmith.wordpress.com/">Jake Smith</Hyperlink>.
            </li>
            <li>
              Researcher John C. Ruf submitted a FOIA request to get aldermanic
              spending data going back to 2005. Those PDFs are available{" "}
              <Hyperlink href="https://github.com/JohnCRuf/alderman_machine/tree/master/tasks/initialdata/output">
                here
              </Hyperlink>
              . We hope to incorporate that data into our site in the near future.
            </li>
            <li>
              The standard menu item descriptions and cost information comes from the
              2023 Neighborhood Infrastructure Menu Program packet that was sent out
              to ward offices.
            </li>
          </ul>
        </FAQ>

        <FAQ title={"Can I get involved with Ward Wise?"}>
          <p>
            Sure! Our data analysis and website source code are{" "}
            <Hyperlink href="https://github.com/ward-wise">publicly available on GitHub</Hyperlink>.
            Ward Wise is a breakout group under{" "}
            <Hyperlink href="https://chihacknight.org/">Chi Hack Night</Hyperlink>. We meet every
            Tuesday night.
          </p>
        </FAQ>

        <FAQ title={"Do you have new features planned for the site?"}>
          <p>
            See our{" "}
            <Hyperlink href="https://github.com/ward-wise/ward-wise-front-end/issues">
              issues list on GitHub
            </Hyperlink>
            .
          </p>
        </FAQ>

        <FAQ title={"I have another question not on this list!"}>
          <p>Send us an email at <Hyperlink href="mailto:wardwisechicago@gmail.com">wardwisechicago@gmail.com</Hyperlink> and we&apos;ll do our best to respond!</p>
        </FAQ>

      </div>
    </div>
  );
}

function FAQ({ title, children }: { title: string, children: any }) {
  return (
    <div className="mb-20 mt-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="my-2">
        {children}
      </div>
    </div>
  );
}
