import {Accordion, AccordionItem} from "@nextui-org/react";

export default function AccordionComponent({content}) {
  return (
    <div className="p-20"
    style={{ backgroundImage: `url('/images/home/forth-pic.jpg')` ,
      backgroundBlendMode: 'darken',
      backgroundColor: `rgba(0, 0, 0, 0.5)`
    }}
    >
      <div className="pt-12 font-bold text-3xl">Frequently Asked Questions</div>
        <Accordion variant="splitted" >
          {
            content.map((item,index)=>(
              <AccordionItem key={index} aria-label={item} title={item.question}>
              <div>
                {
                  item.answer.map((answerItem)=>(
                    <div>
                    <p>{answerItem}</p><br/>

                    </div>
                  ))
                }
              </div>
            </AccordionItem>
            ))
          }
    {/* <AccordionItem key="1" aria-label="Accordion 1" title="Why is LA Mapping Service so popular?">
      <div>
        <p>
      LA Mapping Service has been providing high-quality mapping services to customers throughout California for years. When it comes to mapping services, you won't find a more reliable and accurate company than LA Mapping Service.
        </p>
        <p>
        Contact our team today for all your mapping service needs. Whether you're looking for a radius map, certified affidavits, or certified notary services, LA Mapping Service has got you covered.
        </p>
      </div>
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="What services does LA Mapping Service Provide?">
    <div>
        <p>
        LA Mapping provides high-quality mapping services, radius maps, certified affidavits, and certified notary services.
        </p>
        <p>
        Please contact us today, and a member of our team will be happy to assist you with all your mapping-related needs.
        </p>
      </div>
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" title="What are some benefits of high-quality mapping services?">
    <div>
        <p>
        Accurate Navigation: High-quality mapping services provide precise and up-to-date maps, making it easier for residents and visitors to navigate the city. This reduces the likelihood of getting lost and improves overall traffic flow.
        </p>
        <p>
        Emergency Response: Accurate maps are crucial for emergency services, allowing them to respond quickly and effectively to incidents such as fires, accidents, or medical emergencies. They can also help with disaster preparedness and response.
        </p>
        <p>
        Urban Planning: City planners can use mapping services to make informed decisions about land use, infrastructure development, and transportation planning. This helps in creating more efficient and sustainable cities.
        </p>
      </div>
    </AccordionItem>
    <AccordionItem key="4" aria-label="Accordion 4" title="How can I get in touch with you?">
    <div>
        <p>
        LA Mapping Service can be reached by phone at 909-595-0903, by email at info@lamapping.com, or by submitting one of the contact forms on our website.
        </p>
        <p>
        When you contact LA Mapping Service, you can expect fast and friendly assistance with all your mapping service needs.
        </p>
      </div>
    </AccordionItem> */}
  </Accordion>
    </div>
    
  );
}
