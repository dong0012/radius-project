import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent({ content }) {
  return (
    <div className="p-20"
      style={{
        backgroundImage: `url('/images/home/forth-pic.jpg')`,
        backgroundBlendMode: 'darken',
        backgroundColor: `rgba(0, 0, 0, 0.5)`
      }}
    >
      <div className="pt-12 font-bold text-3xl">Frequently Asked Questions</div>
      <Accordion variant="splitted" >
        {
          content.map((item, index) => (
            <AccordionItem key={index} aria-label={item} title={item.question}>
              <div>
                {
                  item.answer.map((answerItem) => (
                    <div>
                      <p>{answerItem}</p><br />

                    </div>
                  ))
                }
              </div>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>

  );
}
