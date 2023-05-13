import Link from "next/link";
import { WrapperProps } from "@/Types";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillMessage,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { EmailIcon, Linkedin, TelegramIcon } from "./icon";

export default function Wrapper({
  pageIndex,
  children,
  className,
}: WrapperProps) {
  const socialClassNames = "text-3xl cursor-pointer text-White";
  const blur = pageIndex == 1 ? "bg-Blur" : "";
  return (
    <section className={className}>
      <div
        className={
          "fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[50rem] md:h-[50rem]  md:-left-10 md:-top-40 -z-10  rounded-full blur-3xl " +
          blur
        }
      ></div>
      <>{children}</>

      <div className="fixed bottom-12 left-6 hidden md:flex items-center flex-col gap-4">
        <Link href={"https://github.com/erickDevUp/"} target={"_blank"}>
          <AiFillGithub className={socialClassNames} />
        </Link>
        <Link href={"https://linkedin.com/in/erickdevup"} target={"_blank"}>
          <Linkedin />
        </Link>
        <Link href={"mailto:erickgarciap779@gmail.com"} target={"_blank"}>
          <EmailIcon />
        </Link>
        <Link href={"https://t.me/erickDevUp"} target={"_blank"}>
          <TelegramIcon />
        </Link>
        <Link href={"https://twitter.com/erickdevup/"} target={"_blank"}>
          <AiFillTwitterCircle className={socialClassNames} />
        </Link>
      </div>
    </section>
  );
}
