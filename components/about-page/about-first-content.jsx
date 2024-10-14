import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function AboutFirstContent() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between w-full min-h-screen px-5 md:px-20 pt-10">
  {/* 左侧图片部分 */}
  <div className="w-full md:w-1/2 mb-6 md:mb-0">
    <img
      src="/images/about-pic.jpg"
      alt="示例图片"
      className="w-full h-auto rounded shadow-lg"
    />
  </div>
  
  {/* 右侧文字部分 */}
  <div className="w-full md:w-1/2 fs-12 p-5 md:p-10">
    <h2 className="text-2xl font-bold mb-4">High-Quality Radius Maps for Diverse Applications</h2>
    <p className="text-base mb-4">
      L.A. Mapping Service, Inc. offers high-quality radius maps, a vital tool for a multitude of applications spanning from urban development to environmental analysis.
    </p>
    
    <p className="text-base mb-4">
      These maps are invaluable for a variety of stakeholders, including real estate developers who rely on them for site selection and land development, urban planners for city development projects, and governmental agencies for regulatory and planning purposes. Beyond radius maps, our portfolio includes vicinity maps and land use maps, essential for comprehensive area planning and zoning considerations.
    </p>

    <p className="text-base">
      Our commitment to delivering user-friendly, accurate maps makes them not just tools for analysis but also instruments for strategic decision-making. Choose L.A. Mapping Service, Inc. for radius maps that blend precision with practicality, catering to a broad spectrum of professional mapping needs.
    </p>
  </div>
</div>
  );
}
