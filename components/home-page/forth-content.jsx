import { Card, Image, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
const list = [
    {
        title: "Orange",
        img: "/images/fruit-1.jpg",
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: "/images/fruit-2.jpg",
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: "/images/fruit-3.jpg",
        price: "$10.00",
    },
    {
        title: "Lemon",
        img: "/images/fruit-4.jpg",
        price: "$5.30",
    },
];

export default function SecondContent() {
    return (
      <div className="flex flex-col md:flex-row w-full px-4 py-6 md:px-10">
      {/* 右侧图片部分 */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {/* 第一张图片 */}
        <div className="w-full h-[200px]">
          <img
            src="/images/fruit-1.jpg"
            alt="示例图片"
            className="w-full h-full object-cover rounded"
          />
        </div>
    
        {/* 第二张图片 */}
        <div className="w-full h-[200px]">
          <img
            src="/images/fruit-2.jpg"
            alt="示例图片"
            className="w-full h-full object-cover rounded"
          />
        </div>
    
        {/* 第三张图片 */}
        <div className="w-full h-[200px]">
          <img
            src="/images/fruit-3.jpg"
            alt="示例图片"
            className="w-full h-full object-cover rounded"
          />
        </div>
    
        {/* 第四张图片 */}
        <div className="w-full h-[200px]">
          <img
            src="/images/fruit-4.jpg"
            alt="示例图片"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    
      {/* 左侧文字部分 */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">INDUSTRIES WE SERVE</h2>
        <p className="text-base mb-4">
          <span className="font-semibold">We provide services to a variety of industries, including the following:</span>
        </p>
        <div className="flex justify-between w-full">
          <div className="w-1/2 pr-4">
            <ul className="list-disc list-inside">
              <li className="pb-3">New Business</li>
              <li className="pb-3">Permit Expediters</li>
              <li className="pb-3">Engineers</li>
              <li className="pb-3">Land Surveyors</li>
              <li className="pb-3">Land Developers</li>
              <li className="pb-3">City Planners</li>
              <li className="pb-3">Architects</li>
              <li>Management District</li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="list-disc list-inside">
              <li className="pb-3">Community Development Departments</li>
              <li className="pb-3">Public Works</li>
              <li className="pb-3">Government Agencies</li>
              <li className="pb-3">Alcohol Beverage Control</li>
              <li className="pb-3">Neighborhood Councils</li>
              <li className="pb-3">Real Estate Agents</li>
              <li className="pb-3">Homeowners</li>
              <li>And more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}
