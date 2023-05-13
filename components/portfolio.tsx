import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import Services from "@/components/Services";
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
export default function Portfolio() {
  return (
    <>
      <Wrapper pageIndex={3}>
        <div className="flex flex-col pt-40 items-center text-center" id="port">
          <div
            className="uppercase font-semibold text-sm text-WhiteGray"
            id="Portfolio"
          >
            - Portfolio
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            My Projects
          </div>

          <p className="text-WhiteGray text-base mt-10 leading-8 w-[80%]">
            I have been working as a contract on various blockchain projects
            like Frontend Developer NextJs / Chakraui in which I have interacted
            with API, building Landing pages, made Form validation, creation of
            KYC processes with document and identity validation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-Blur p-4  rounded-lg">
                <div className="w-full  relative group">
                  <img className="cursor-pointer" src={project.img} alt="" />
                  <div className="absolute w-full h-full  bg-blue-400 top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
                    <Link href={project.github}>
                      <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                    <Link href={project.live}>
                      <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="text-White mt-2 text-start ">
                  {project.name}
                </div>
                <p className="text-WhiteGray text-start text-sm mt-6 leading-7 h-[85px]">
                  {project.description}
                </p>
                <div className="flex mt-2 flex-wrap gap-2  ">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full py-2 px-3 text-white text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
