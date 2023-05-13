import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
export default function About() {
  return (
    <>
      <Wrapper pageIndex={2}>
        <div
          id="About"
          className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0"
        >
          <Image
            src={"/about.png"}
            width={300}
            height={300}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
              I am a passionate frontend developer
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              Need a custom web application that delivers results? You've come
              to the right place. As a skilled developer with expertise in the
              latest technologies and agile methodologies, I can help you create
              a user experience that drives measurable business outcomes. Let's
              work together to take your business to the next level!
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="mailto:erickgarciap779@gmail.com"
                className="text-blue-400 font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/resume.pdf"
                download
                className="text-blue-400 font-semibold text-sm uppercase hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills} />
      </Wrapper>
    </>
  );
}
