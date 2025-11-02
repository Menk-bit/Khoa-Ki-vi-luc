import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  const footerColumns = [
    {
      title: "Topic",
      links: ["Page", "Page", "Page"],
    },
    {
      title: "Topic",
      links: ["Page", "Page", "Page"],
    },
    {
      title: "Topic",
      links: ["Page", "Page", "Page"],
    },
  ];

  return (
    <footer className="w-full h-[264px] bg-white relative">
      <div className="absolute top-0 left-20 w-[1280px] h-px bg-[#E6E6E6]" />
      
      <div className="px-20 py-12">
        <div className="flex justify-between">
          <div>
            <h3 className="text-brand-dark-green font-poppins text-2xl font-medium tracking-[-0.48px] mb-8">
              TaXua Connect
            </h3>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                <Facebook className="w-5 h-5 text-[#828282]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                <Linkedin className="w-5 h-5 text-[#828282]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                <Youtube className="w-5 h-5 text-[#828282]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                <Instagram className="w-5 h-5 text-[#828282]" />
              </button>
            </div>
          </div>

          <div className="flex gap-[219px]">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h4 className="text-black font-inter text-base font-medium leading-[150%]">
                  {column.title}
                </h4>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-[#454545] font-inter text-base font-medium leading-[150%] hover:text-brand-dark-green transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
