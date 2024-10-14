import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
export default function SixContent({listContent}) {
    return (
        <div
            style={{ backgroundImage: `url('/images/home/third-pic.jpg')`, backgroundColor: `rgba(0, 0, 0, 0.5)`, backgroundBlendMode: 'darken' }} >
            <div className="flex flex-col items-center justify-center">
                <div className="pt-12 font-bold text-3xl">CASE TYPES</div>
                <p className="py-6">You may need a radius map and notification package if you are filing an application for any of these cases.</p>
            </div>

            <div className="flex flex-wrap justify-center  p-4"
            >
                {/* 单个 div 样式 */}
                <div className="w-full md:w-[28%] h-[500px] bg-[#557b9a] text-white">
                    {/* <h2 className="text-2xl font-bold p-10">
                    Printing & Mailing
                </h2> */}
                    <div className="p-4">
                        <ul className="list-disc list-inside p-5">
                            {
                                listContent.left.map((item)=>(
                                    <li className="pb-2 text-base">{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-[28%] h-[500px] bg-[#212121] text-white">
                    {/* <h2 className="text-2xl font-bold p-10" >Public Hearing Signs</h2> */}
                    <div className="p-4">
                        <ul className="list-disc list-inside p-5">
                        {
                                listContent.middle.map((item)=>(
                                    <li className="pb-2 text-base">{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-[25%] h-[500px] bg-[#557b9a] text-white">
                    <div className="p-4">
                        <ul className="list-disc list-inside p-5">
                        {
                                listContent.right.map((item)=>(
                                    <li className="pb-2 text-base">{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}