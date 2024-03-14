import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Hyperlink } from "../../components/ui/Hyperlink";

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    // <div className="max-w-2xl mx-auto p-6">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full justify-between text-md">
        <div className="mb-16">
          <h2 className="text-3xl my-4">About the project</h2>
          <p>
            Every year, Chicago alderpersons get $1.5 million in <b>menu money</b>
            &nbsp;to spend at their discretion on capital improvements in their
            ward. Our group is making menu money spending data more accessible to
            the public and creating tools to help with&nbsp;
            <Hyperlink href="https://www.participatepbchicago.org/pages/pbgeneralinfo">
              participatory budgeting
            </Hyperlink>
            &nbsp;processes.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl my-4">About us</h2>
          <p className="mb-8">
            Ward Wise is a breakout group under{" "}
            <Hyperlink href="https://chihacknight.org/">Chi Hack Night</Hyperlink>. Our source code is available
            on <Hyperlink href="https://github.com/ward-wise">GitHub</Hyperlink>. We use
            data scraped from the{" "}
            <Hyperlink href="https://www.chicago.gov/city/en/depts/obm/provdrs/cap_improve/svcs/cip-archive.html">
              Chicago Capital Improvements Archive
            </Hyperlink>{" "}
            by Jake Smith and John C. Ruf.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl my-4">Ways to get involved</h2>
          <ul className="list-disc ml-4">
            <li className="mb-4">
              Join the ward-wise channel on the <Hyperlink href="http://slackme.chihacknight.org/">Chi Hack Night Slack</Hyperlink> to stay up to
              date with what we&apos;re currently discussing and working on!
            </li>
            <li className="mb-4">
              View our open Github issues related to&nbsp;
              <Hyperlink href="https://github.com/ward-wise/data-analysis/issues">
                data analysis
              </Hyperlink>
              &nbsp;and&nbsp;
              <Hyperlink href="https://github.com/ward-wise/ward-wise-front-end/issues">
                data visualizations
              </Hyperlink>
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
              <Hyperlink href="https://sidewalk-chicago.cs.washington.edu/explore">
                Project Sidewalk
              </Hyperlink>
              &nbsp;(not related to us, but they do cool work!)
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
