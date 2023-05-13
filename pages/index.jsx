import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
import Wrapper from "@/components/Wrapper";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm Erick Garcia aka erickDevUP, I'm frontend web developer with react and nextJs "
        />
        <meta
          name="keywords"
          content="erickDevUP , Erick Garcia Frontend Developer , erickDevUP Frontend React Developer,Erick Garcia Nextjs Developer, Erick Garcia Frontend web Developer ,Erick Garcia Frontend React Nextjs Developer, Erick Garcia React developer , Erick Garcia web Developer  "
        />
        <meta name="copyright" content="erickDevUP" />
        <meta name="author" content="erickDevUP" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erickdevup.netlify.app" />
        <meta
          property="og:title"
          content="erickDevUP | Erick Garcia Frontend React Developer"
        />
        <meta
          property="og:description"
          content="I'm Erick Garcia aka erickDevUP, I'm frontend web developer with react and nextJs"
        />
        <meta
          property="og:image"
          content="https://erickdevup.netlify.app/I.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://erickdevup.netlify.app" />
        <meta property="twitter:site" content="@erickdevup" />
        <meta property="twitter:title" content="Erick Garcia" />
        <meta
          property="twitter:description"
          content="Soy frontend web developer 😁
    React  😍"
        />
        <meta
          property="twitter:image"
          content="https://erickdevup.netlify.app/I.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://erickdevup.netlify.app/assets/ih.ico"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="https://erickdevup.netlify.app/assets/ih.ico"
        />
        <title>Erick Garcia | Frontend ReactJs / NextJs Developer</title>
      </Head>
      <Wrapper
        pageIndex={1}
        className="max-w-2xl text-center flex flex-col justify-center"
      >
        <div
          id="Home"
          className="flex sm:justify-between items-center gap-4 sm:gap-0"
        >
          <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold">
            Hi I&apos;m
          </div>
          <div className="sm:h-2 sm:w-[30rem] xs:w-[19rem] rounded-sm bg-blue-400"></div>
        </div>
        <div className="sm:text-[6rem] xs:text-6xl text-4xl text-White font-medium">
          Erick Garcia
        </div>
        <div className="uppercase font-bold xs:text-2xl text-xl text-blue-400 text-end mt-8">
          A frontend web developer
          <br />
          Reactjs / Nextjs
        </div>
      </Wrapper>
      <About></About>
      <Portfolio></Portfolio>
    </>
  );
}
