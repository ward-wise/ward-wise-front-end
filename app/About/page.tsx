import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    // <div className="max-w-2xl mx-auto p-6">
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full justify-between text-md">
        <h2 className="text-3xl my-6">About the project</h2>
        <p>
          Every year, Chicago alderpersons get $1.5 million in <b>menu money</b>
          &nbsp;to spend at their discretion on capital improvements in their
          ward. Our group is making menu money spending data more accessible to
          the public and creating tools to help with&nbsp;
          <Link href="https://www.participatepbchicago.org/pages/pbgeneralinfo">
            participatory budgeting
          </Link>
          &nbsp;processes.
        </p>
        <h2 className="text-3xl my-6">About us</h2>
        <p className="mb-8">
          Ward Wise is a breakout group under{" "}
          <Link href="https://chihacknight.org/">Chi Hack Night</Link>. Our source code is available
          on <Link href="https://github.com/ward-wise">GitHub</Link>. We use
          data scraped from the{" "}
          <Link href="https://www.chicago.gov/city/en/depts/obm/provdrs/cap_improve/svcs/cip-archive.html">
            Chicago Capital Improvements Archive
          </Link>{" "}
          by Jake Smith and John C. Ruf.
        </p>
        <h2 className="text-3xl my-6">Ways to get involved</h2>
        <ul className="list-disc ml-4">
          <li className="mb-4">
            Join the ward-wise channel on the <Link href="http://slackme.chihacknight.org/">Chi Hack Night Slack</Link> to stay up to
            date with what we&apos;re currently discussing and working on!
          </li>
          <li className="mb-4">
            View our open Github issues related to&nbsp;
            <Link href="https://github.com/ward-wise/data-analysis/issues">
              data analysis
            </Link>
            &nbsp;and&nbsp;
            <Link href="https://github.com/ward-wise/ward-wise-front-end/issues">
              data visualizations
            </Link>
            . If an issue piques your interest, message us on Slack and we&apos;ll
            give you the latest status.
          </li>
          <li className="mb-4">Help us collect ward contact info.</li>
          <li className="mb-4">Help with UI and usability testing.</li>
          <li className="mb-4">
            Do you have connections? Reach out to organizations that could benefit
            from using Ward Wise. They may have data analysis needs that we can
            help them with.
          </li>
          <li className="mb-10">
            Validate image data for&nbsp;
            <Link href="https://sidewalk-chicago.cs.washington.edu/explore">
              Project Sidewalk
            </Link>
            &nbsp;(not related to us, but they do cool work!)
          </li>
        </ul>
      </div>
    </main>
  );
}
