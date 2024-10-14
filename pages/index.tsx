import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import FirstContent from '../components/home-page/first-content'
import SecondContent from '../components/home-page/second-content'
import ThirdContent from '../components/home-page/third-content'
import ForthContent from '../components/home-page/forth-content'
import FifthContent from '../components/home-page/fifth-content'
import SixContent from '../components/home-page/sixth-content'
import Center from '../components/home-page/center'
import AccordionComponent from '../components/accordion'
import ServiceContent from '../components/service-content'

export default function IndexPage() {
  const content = {
    title:'Comprehensive Compliance and Mapping Solutions: Your One-Stop Service Hub',
    content:'Navigating Legal Requirements with Precision and Ease - From Radius Mapping to Notary Services',
    detail:'Begin Your Compliance Journey with Us - Get Started Now!',
    pic:'/images/background.jpg'
}
const centerContent ={
  title:'Providing mapping services for all Cities and Counties in California',
    content:'We provide mapping services for all cities in all counties throughout the entire state of California.',
    detail:'List of cities & counties in California we provide services for:',
    pic:'/images/home/second-pic.jpg'
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
const question_content =[
  {
    question:'Why is LA Mapping Service so popular?',
    answer:[
      "LA Mapping Service has been providing high-quality mapping services to customers throughout California for years. When it comes to mapping services, you won't find a more reliable and accurate company than LA Mapping Service.",
      "Contact our team today for all your mapping service needs. Whether you're looking for a radius map, certified affidavits, or certified notary services, LA Mapping Service has got you covered."
    ]
  },
  {
    question:'What services does LA Mapping Service Provide?',
    answer:[
      "LA Mapping provides high-quality mapping services, radius maps, certified affidavits, and certified notary services.",
      "Please contact us today, and a member of our team will be happy to assist you with all your mapping-related needs."
    ]
  },
  {
    question:'What are some benefits of high-quality mapping services?',
    answer:[
      "Accurate Navigation: High-quality mapping services provide precise and up-to-date maps, making it easier for residents and visitors to navigate the city. This reduces the likelihood of getting lost and improves overall traffic flow.",
      "Emergency Response: Accurate maps are crucial for emergency services, allowing them to respond quickly and effectively to incidents such as fires, accidents, or medical emergencies. They can also help with disaster preparedness and response.",
      "Urban Planning: City planners can use mapping services to make informed decisions about land use, infrastructure development, and transportation planning. This helps in creating more efficient and sustainable cities.",
      "Infrastructure Maintenance: High-quality maps can help municipalities track the condition of roads, bridges, utilities, and other infrastructure. This information is vital for maintenance and repairs, ensuring that infrastructure remains safe and functional.",
      "Public Transportation: Mapping services can enhance public transportation systems by providing real-time information on routes, schedules, and vehicle locations. This can encourage greater use of public transit and reduce congestion.",
      "Environmental Conservation: Accurate maps can aid in the preservation of natural resources and ecosystems by identifying and protecting areas of ecological significance. This is important for maintaining environmental balance.",
    ]
  },
  {
    question:'How can I get in touch with you?',
    answer:[
      "LA Mapping Service can be reached by phone at 909-595-0903, by email at info@lamapping.com, or by submitting one of the contact forms on our website.",
      "When you contact LA Mapping Service, you can expect fast and friendly assistance with all your mapping service needs."
    ]
  },

]

  return (
    <DefaultLayout>
      <FirstContent content={content}></FirstContent>
      <div className="w-full h-[20px]"></div>
      {/* <SecondContent></SecondContent> */}
      {/* <div className="w-full h-[20px]"></div> */}
      {/* <ThirdContent></ThirdContent> */}
      {/* <div className="w-full h-[20px]"></div> */}
      <div className="p-10">
      <ForthContent></ForthContent>

      </div>
      <ServiceContent></ServiceContent>
      <FifthContent></FifthContent>
      {/* <Center centerContent ={centerContent}></Center> */}
      <FirstContent content={centerContent}></FirstContent>

      <SixContent listContent={list_content}></SixContent>
      <AccordionComponent content={question_content}></AccordionComponent>


    </DefaultLayout>
  );
}
