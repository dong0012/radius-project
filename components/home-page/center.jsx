import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function Center({centerContent}) {
  return (
      <section >
         <div
  className="content bg-cover bg-center h-[450px] w-full"
  style={{ backgroundImage: `url('${centerContent.pic}')` }}
>
        <div className="relative">
      <div className="absolute left-[5%] mt-[8%] w-[45%] max-w-[1200px] bg-[#212121] bg-opacity-95 p-6 text-white  shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{centerContent.title}</h2>
        <p>{centerContent.content}</p>
        <p className="pt-6">{centerContent.detail}</p>
      </div>
    </div>
          </div>
      </section>
  );
}
