import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import FirstContent from '../../components/home-page/first-content'
import SecondContent from '../../components/home-page/second-content'
import ThirdContent from '../../components/home-page/third-content'
import ForthContent from '../../components/home-page/forth-content'
import FifthContent from '../../components/home-page/fifth-content'
import SixContent from '../../components/home-page/sixth-content'
import ServiceContent from '../../components/service-content'

export default function Telecommunications() {
  const content = {
    title:'Property Ownership and Occupant List Services',
    content:'L.A Mapping Service, Inc. is a full-service Radius Map provider in Southern California',
    detail:'Get your Property Ownership and Occupant List today!',
    pic:'/images/property-ownership/pic-01.jpg'
}
const list_content ={
  left:[
    "Conditional Use Permit (CUP)",
    "Minor Conditional Use Permit (MCUP)",
    "Wireless Telecommunications Permit (WTP)",
    "Temporary Use Permit",
    "Minor Use Permit Major Use Permit",
    "Zone Variance (ZV)",
    "Coastal Development Permit (CDP)",
    "Site Plan Review (SPR)",
    "Environmental Impact Report"
  ],
  middle:[
    "Conditional Use Permit (CUP)",
    "Minor Conditional Use Permit (MCUP)",
    "Wireless Telecommunications Permit (WTP)",
    "Temporary Use Permit",
    "Minor Use Permit Major Use Permit",
    "Zone Variance (ZV)",
    "Coastal Development Permit (CDP)",
    "Site Plan Review (SPR)",
    "Environmental Impact Report"
  ],
  right:[
    "Conditional Use Permit (CUP)",
    "Minor Conditional Use Permit (MCUP)",
    "Wireless Telecommunications Permit (WTP)",
    "Temporary Use Permit",
    "Minor Use Permit Major Use Permit",
    "Zone Variance (ZV)",
    "Coastal Development Permit (CDP)",
    "Site Plan Review (SPR)",
    "Environmental Impact Report"
  ]
}
  return (
    <DefaultLayout>
      <FirstContent content={content}></FirstContent>
      <div className="w-full h-[20px]"></div>
      <SecondContent></SecondContent>
      {/* <div className="w-full h-[20px]"></div> */}
      <ThirdContent></ThirdContent>
      {/* <div className="w-full h-[20px]"></div> */}
      <ForthContent></ForthContent>
      <ServiceContent></ServiceContent>
      <FifthContent></FifthContent>
      {/* <FirstContent></FirstContent> */}
      <SixContent listContent={list_content}></SixContent>



    </DefaultLayout>
  );
}
