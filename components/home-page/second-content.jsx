import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function SecondContent() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full min-h-screen px-2 sm:px-4 md:px-8 lg:px-16 py-4">
  {/* 左侧图片部分 */}
  <div className="w-full md:w-1/2 p-2 sm:p-4">
    <img
      src="/images/left.jpg"
      alt="示例图片"
      className="w-full h-auto rounded"
    />
  </div>
  
  {/* 右侧文字部分 */}
  <div className="w-full md:w-1/2 p-2 sm:p-4">
    <h2 className="text-2xl font-bold mb-4">
      High-Quality Radius Maps for Diverse Applications
    </h2>
    <p className="text-base">
      L.A. Mapping Service, Inc. offers High-Quality Radius Maps, a vital tool for a multitude of applications spanning from urban development to environmental analysis.
    </p>
    <br/>
    <p className="text-base">
      These maps are invaluable for a variety of stakeholders, including real estate developers who rely on them for site selection and land development, urban planners for city development projects, and governmental agencies for regulatory and planning purposes. Beyond Radius Maps, our portfolio includes Vicinity Maps and Land Use Maps, essential for comprehensive area planning and zoning considerations.
    </p>
    <br/>
    <p className="text-base">
      Our commitment to delivering user-friendly, accurate maps makes them not just tools for analysis but also instruments for strategic decision-making. Choose L.A. Mapping Service, Inc. for Radius Maps that blend precision with practicality, catering to a broad spectrum of professional mapping needs.
    </p>
  </div>
</div>
  );
}
