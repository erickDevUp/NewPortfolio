import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "#Home", label: "Home" },
  { path: "#About", label: "About" },
  { path: "#Portfolio", label: "Portfolio" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 9,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 178,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 742,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.jpeg",
    name: "Hshort",
    description:
      "Prototype short-form video player using the Hive #blockchain, the @3speak api with the videos of @3shortss *Mobile only",
    tools: ["NextJs", "CssModules"],
  },
  {
    id: 2,
    img: "/project2.jpeg",
    name: "React E-commerce Cars",
    description:
      "Luxury car e-commerce is an example of how to create a web platform, adapted to various devices and easy to use.",
    tools: ["React", "CSS"],
  },
  {
    id: 3,
    img: "/project3.jpeg",
    name: "ClimateStyles",
    description:
      "Our weather forecast web application is an easy-to-use tool with a visually appealing design. With a connection to a trusted third-party weather API",
    tools: ["React", "CSS"],
  },
  {
    id: 4,
    img: "/project4.jpeg",
    name: "TodoMorph",
    description:
      "Minimalist and elegant to-do list is an excellent option for those looking for a highly productive tool with a visually appealing design.",
    tools: ["React", "CSS"],
  },
  {
    id: 5,
    img: "/project5.jpeg",
    name: "SeeingStars",
    description:
      "This Telegram bot offers a daily dose of astronomy by sending you a breathtaking photo of space along with some interesting news about the field",
    tools: ["NodeJS", "Telegraf"],
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 65 },
  { name: "ReactJS", level: 70 },
  { name: "NextJS", level: 75 },
  { name: "Sass", level: 65 },
  { name: "ChakraUI", level: 75 },
  { name: "TaildwindCss", level: 70 },
  { name: "NodeJS", level: 70 },
  { name: "Git/Github", level: 70 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "AungThaPyay 2 Road, TharKayTa,Yangon" },
  { id: 2, title: "Phone", text: "+959-883-271-929" },
  { id: 3, title: "Email", text: "yelinko.2002@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
