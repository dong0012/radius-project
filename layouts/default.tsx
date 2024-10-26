import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Header } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      {/* <Head /> */}
      <Header />
      <main className="dark text-foreground bg-background">
        {children}
      </main>
      <footer className="bg-[#212121] text-white py-8">
      <div className="container mx-auto px-4">
        {/* 上层：三栏布局 */}
        <div className="flex flex-wrap justify-between">
          {/* 第一列：公司信息 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">HOME</a></li>
              <li><a href="#" className="hover:underline">ABOUT</a></li>
              <li><a href="#" className="hover:underline">PUBLIC HEARING SIGNS</a></li>
              <li><a href="#" className="hover:underline">CONTACT</a></li>
            </ul>
          </div>

          {/* 第二列：快速链接 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li><a href="#" className="hover:underline">Radius Maps</a></li>
              <li><a href="#" className="hover:underline">Ownership & Occupants</a></li>
              <li><a href="#" className="hover:underline">Certified Affidavits</a></li>
              <li><a href="#" className="hover:underline">Printing & Mailing</a></li>
              <li><a href="#" className="hover:underline">Public Hearing Signs</a></li>
              <li><a href="#" className="hover:underline">Notory & Certification</a></li>
            </ul>
          </div>

          {/* 第三列：社交媒体链接 */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div >
              <div>Radius Map 4 Less,Inc</div>
              <div>1073 Kendall Drive</div>
              <div>San Gabriel,CA 91775</div>
              <div>626-386-8086</div>
              <div>support@radiusmap4less.com</div>
            </div>
          </div>
        </div>

        {/* 底层：版权信息 */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
