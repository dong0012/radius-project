import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
export default function FifthContent() {


    return (
        <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 md:px-20 py-10">
  {/* 单个服务卡片 */}
  {[
    { title: "Radius Maps", description: "All of our radius maps are created in the highest quality and to scale using GIS, AutoCAD, etc." },
    { title: "Ownership & Occupant Lists", description: "We use the latest county assessor’s data software available." },
    { title: "Certified Affidavits & Notary Service", description: "We provide a certified affidavit guaranteeing the accuracy of each list." },
    { title: "Printing & Mailing", description: "We offer high-quality printing, envelopes, postage and mailing services when needed." },
    { title: "Public Hearing Signs", description: "Need a sign? All signs are professionally installed." },
    { title: "Wireless Telecommunications", description: "We provide services to all major wireless telecommunications providers." },
  ].map((service, index) => (
    <div key={index} className="w-full md:w-[30%] h-[200px] bg-[#212121] text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
      <p>{service.description}</p>
    </div>
  ))}
</div>
    );
}