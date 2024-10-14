import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import AboutFirstContent from '../../components/about-page/about-first-content'
import FirstContent from '../../components/home-page/first-content'

export default function About() {
  const content = {
    title:'Unparalleled Notification Services in California',
    content:'We pride ourselves as one of only a few operating businesses in California who provide quality notification services for a large range of clientele ranging from wireless telecommunication companies, architectural firms, land surveyors, law firms, civil engineers, government agencies, real estate developers, property owners, homebuilders and more all over Southern & Northern California L.A. Mapping Service, Inc is devoted to providing affordable, professional and certified expedited services. We are committed to the highest level of quality and satisfaction.',
    detail:'',
    pic:'/images/about/first-pic.jpg'
}
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4  ">
        {/* <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
        </div> */}
<AboutFirstContent></AboutFirstContent>
      </section>
<FirstContent content={content}></FirstContent>

    </DefaultLayout>
  );
}
