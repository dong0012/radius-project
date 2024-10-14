import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function FirstContent({ content }) {
  return (
    <section >
      <div
        className="content bg-cover bg-center h-[550px] w-full"
        style={{ backgroundImage: `url('${content.pic}')` ,
        backgroundAttachment: 'fixed'}}
      >
        <div className="relative">
    <div className="absolute left-[5%] mt-[8%] w-[90%] md:w-[45%] max-w-[1200px] bg-[#212121] bg-opacity-95 p-6 text-white shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{content.title}</h2>
      <p className="text-sm md:text-base">{content.content}</p>
      <p className="pt-6 text-sm md:text-base">{content.detail}</p>
      <div className="pt-10">
      <a href="tel:626-383-5050" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/images/icon/telephone.svg" alt="telephone" style={{ width: '24px', height: '24px' }} />
  </div>
  <span style={{ marginLeft: '10px' }}>626-383-5050</span>
</a>
      </div>
     
    </div>
  </div>
      </div>
    </section>
  );
}
