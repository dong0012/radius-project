import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function ThirdContent() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full min-h-screen p-4 ">
            {/* 左侧文字部分 */}
            <div className="w-full md:w-1/2 p-4 fs-12 ml-[5%]" >
                <h2 className="text-2xl font-bold mb-4">Advanced Radius and Custom Mapping Solutions</h2>
                <p className="text-base">
                    All of our radius maps are created to the highest quality and scale using GIS, AutoCAD, and various other types of mapping software.
                </p>
                <br />
                <p className="text-base">
                    We provide accurate maps of any size radius. (100 ft radius (100'), 300 ft radius (300'), 500 ft radius (500'), 1000 ft radius (1000'), etc.)
                </p>
                <br />
                <p className="text-base">- Radius Maps</p>
                <p className="text-base">- Assessor’s Parcel Maps</p>
                <p className="text-base">- Ownership Maps</p>
                <p className="text-base">- Land Use Maps</p>
                <p className="text-base">- Vicinity Maps</p>
                <p className="text-base">- Zoning Maps</p>
                <p className="text-base">- Adjacent Owners Maps</p>
                <p className="text-base">- Photographic Survey Maps</p>
                <p className="text-base">- Aerial Photo Maps</p>
                <p className="text-base">- Blank Maps</p>
                <p className="text-base">- Assessor’s Parcel Maps</p>
                <p className="text-base">- Posted Signs</p>
                <p className="text-base">- California State Coastal Commission</p>
                <p className="text-base">- Haul Route</p>
                <br />
                <p className="text-base">Ask about a free digital file with your Radius Map Package.</p>




            </div>
            {/* 右侧图片部分 */}
            <div className="w-full md:w-1/2 p-4 fs-12 flex flex-col items-center">
                <img
                    src="/images/thirdpic.jpg"
                    alt="示例图片"
                    className="w-full md:w-[400px] h-auto rounded"
                />
                <img
                    src="/images/forthpic.jpg"
                    alt="示例图片"
                    className="w-full md:w-[400px] h-auto rounded"
                />
                {/* <div className="content bg-[url('/images/left.jpg')] bg-cover bg-center h-[300px] w-full"></div> */}

            </div>
        </div>
    );
}
