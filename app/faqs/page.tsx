export default function FAQs() {
  return (
    <>
      <h1>Frequently Asked Questions</h1>

      <h2>What is a ward?</h2>
      <p>
        The city of Chicago is divided into 50 legistlative areas, called
        &quot;wards&quot;. Each ward contains rougly 50,000 residents, and can
        overlap with multiple neighborhoods. Ward boundaries are redrawn every 8
        years and were last redrawn in 2023.
      </p>
      <p>See the list of wards:</p>
      <a href="https://www.chicago.gov/city/en/about/wards.html">
        https://www.chicago.gov/city/en/about/wards.html
      </a>

      <h2>What is an alder?</h2>
      <p>
        Each ward elects an alder, who is essentially a mini-mayor. They provide
        ward services and vote on citywide legistlation in the Chicago City
        Council.
      </p>
      <p>Learn more about what an alder does:</p>
      <a href="https://www.citybureau.org/newswire/2023/1/24/what-does-an-alderman-do">
        https://www.citybureau.org/newswire/2023/1/24/what-does-an-alderman-do
      </a>

      <h2>What are aldermanic menu funds?</h2>
      <p>
        &quot;Every year, the City of Chicago allocates &apos;menu money&apos;
        to each of the 50 alders to spend at their discretion on capital
        improvements within their ward. In the past, alders received $1.32
        million a year. In 2021, the amount increased to $1.5 million. Menu
        money funds can only be spent on capital projects and not operating
        costs; for example, they can fund a public bench or street repaving, but
        it cannot fund an after-school program or snacks. Most broadly, the
        money can be spent on infrastructure projects on public land. This
        budget is the main source of funding local infrastructure improvements
        like:
        <ul>
          <li>street repaving</li>
          <li>pedestrian safety projects</li>
          <li>lighting</li>
          <li>traffic calming, and</li>
          <li>sidewalk repairs&quot;</li>
        </ul>
      </p>
      <p>
        Source:{" "}
        <a href="https://www.participatepbchicago.org/pages/menumoney">
          PB Chicago
        </a>
      </p>
      <p>
        Alders are provided a{" "}
        <a href="https://www.wardwisechicago.org/#/menu-items">
          list of standard menue items
        </a>
        they can implement across their ward. They can choose to spend money on
        projects that aren&apos;t on the list too. It is entirely up to
        alders&apos; discretion how and where they spend their menu funds,
        though some alders choose to involve the community through participatory
        budgeting.
      </p>

      <h2>What is participatory budgeting?</h2>
      <p>
        Participatory budgeting (PB) is the practice of having the community
        directly decide how to spend public budgets. A typical PB process goes
        like this:
      </p>
      <ol>
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
      <p>
        Only a handful of wards currently use PB budgeting, but that number is
        growing.
        <br />
        Learn more about participatory budgeting in Chicago here:{" "}
        <a href="https://www.participatepbchicago.org/pages/pbgeneralinfo">
          https://www.participatepbchicago.org/pages/pbgeneralinfo
        </a>
      </p>

      <h2>What is Vision Zero?</h2>
      <p>
        Menu iteams that make streets safer are denoted with the Vision Zero
        logo in the menu item list. Vision Zero is an effort to bring the number
        of yearly traffic fatalities down to zero.
        <br />
        You can learn more here:{" "}
        <a href="https://activetrans.org/our-work/walking/vision-zero">
          https://activetrans.org/our-work/walking/vision-zero
        </a>
      </p>

      <h2>
        How can I influence menu funds and infrastructure spending in my ward?
      </h2>
      <p>
        Reach out to your ward office!
        <br />
        {/* TODO: should link Find My Ward tool here */}
        You can use our Find My Ward tool to get their contact information. If
        your ward does participatory budgeting, ask how you can be involved. If
        not, don&apos;t despair! You can still contact your alder to discuss
        your infrastructure idea (and ask them to consider participatory
        budgeting).
      </p>
      <p>Two pieces of advice:</p>
      <ol>
        <li>Phone calls are generally more impactful than emails.</li>
        <li>
          Try to find other people who care about the same issue. Convince them
          to contact your ward office too! Many voices have more influence than
          a single voice alone.
        </li>
      </ol>

      <h2>Where does your data come from?</h2>
      <p>
        Since 2012, the Chicago Office of Budget and Management has published
        PDFs of itemized aldermanic menu spending to their{" "}
        <a href="https://www.chicago.gov/city/en/depts/obm/provdrs/cap_improve/svcs/cip-archive.html">
          Capital Improvement Archive
        </a>
        . Our site is using raw data extracted from these PDFs by journalist{" "}
        <a href="https://jakejeromesmith.wordpress.com/">Jake Smith</a>.
      </p>
      <p>
        Researcher John C. Ruf submitted a FOIA request to get aldermanic
        spending data going back to 2005. Those PDFs are available{" "}
        <a href="https://github.com/JohnCRuf/alderman_machine/tree/master/tasks/initialdata/output">
          here
        </a>
        . We hope to incorporate that data into our site in the near future.
      </p>
      <p>
        The standard menu item descriptions and cost information comes from the
        2023 Neighborhood Infrastructure Menu Program packet that was sent out
        to ward offices.
      </p>

      <h2>Can I get involved with Ward Wise?</h2>
      <p>
        Sure! Our data analysis and website source code are{" "}
        <a href="https://github.com/ward-wise">publicly available on GitHub</a>.
        Ward Wise is a breakout group under{" "}
        <a href="https://chihacknight.org/">Chi Hack Night</a>. We meet every
        Tuesday night.
      </p>

      <h2>Do you have new features planned for the site?</h2>
      <p>
        See our{" "}
        <a href="https://github.com/ward-wise/alderman-spending-data-viz/issues">
          issues list on GitHub
        </a>
        .
      </p>

      <h2>I have another question not on this list!</h2>
      <p>Send us an email at wardwisechicago@gmail.com and we&apos;ll do our best to respond!</p>
    </>
  );
}
