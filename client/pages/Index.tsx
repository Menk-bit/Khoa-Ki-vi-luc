import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const destinations = [
    {
      title: "Homestay PHD",
      description: "PHD mang đến không gian chill giữa núi rừng, view săn mây cực đỉnh trong căn phòng ấm cúng",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0876a891ccf80e55a46494cb21be8af2162c5c69?width=1250",
    },
    {
      title: "Tour săn mây HDM",
      description: "Chạm biển mây, ngắm bình minh rực rỡ, sống ảo giữa núi rừng hùng vĩ",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9d4372bc77b8ba1aa3ac5448fbfdd22f83b9bf74?width=808",
    },
    {
      title: "Trải nghiệm làm bánh dày VTH",
      description: "Trải nghiệm giã bánh dày cùng người H'Mông – vui nhộn, ấm áp và đậm hương vị truyền thống núi rừng",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/fc4d7e1e4059cf35a8650642b750570056b39f12?width=850",
    },
  ];

  const plans = [
    {
      title: "Tên plan 1",
      description: "Miêu tả plan như plan cho người thích đi bộ, thích đi xe, thích phượt...",
    },
    {
      title: "Tên plan 2",
      description: "Miêu tả plan như plan cho người thích đi bộ, thích đi xe, thích phượt...",
    },
    {
      title: "Tên plan 3",
      description: "Miêu tả plan như plan cho người thích đi bộ, thích đi xe, thích phượt...",
    },
  ];

  const testimonials = [
    {
      quote: "A terrific piece of praise",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A fantastic bit of feedback",
      name: "Name",
      description: "Description",
    },
    {
      quote: "A genuinely glowing review",
      name: "Name",
      description: "Description",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-sage">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-20 pt-8 pb-12">
          <h1 className="text-brand-dark-green font-inter text-[64px] font-bold tracking-[-1.28px] leading-normal mb-4">
            TaXua Connect
          </h1>
          <p className="text-black/75 font-poppins text-2xl font-medium tracking-[-0.48px] mb-6">
            Cộng đồng xanh, trải nghiệm trọn vẹn
          </p>

          {/* Hero CTAs linking to Destination, Plan, About pages */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-3 bg-brand-accent-green text-brand-dark-green font-poppins text-lg font-semibold px-5 py-3 rounded-[20px] border border-brand-header-green hover:bg-brand-accent-green/80 transition-colors"
            >
              Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/plan"
              className="inline-flex items-center gap-3 bg-white text-brand-dark-green font-poppins text-lg font-semibold px-5 py-3 rounded-[20px] border border-[#E6E6E6] hover:bg-white/90 transition-colors"
            >
              Plan
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-white text-brand-dark-green font-poppins text-lg font-semibold px-5 py-3 rounded-[20px] border border-[#E6E6E6] hover:bg-white/90 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="w-full h-[640px] rounded-lg overflow-hidden relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51ef3e490af5ec5d3a543edf7ccdc80baebd131b?width=2560"
              alt="Tà Xùa landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission Statement */}
        <section className="px-20 py-16 flex flex-col items-center">
          <p className="text-black/75 text-center font-poppins text-2xl font-medium tracking-[-0.48px] max-w-[877px] mb-6">
            Với sứ mệnh kết nối các dịch vụ du lịch cộng đồng tại Tà Xùa trong một hệ sinh thái thông minh và bền vững, chúng tôi mong muốn không chỉ đem lại trải nghiệm thuận tiện, trọn vẹn cho du khách, mà còn góp phần gìn giữ bản sắc văn hóa, bảo vệ môi trường và thúc đẩy kinh tế địa phương.
          </p>
          <p className="text-black text-center font-poppins text-2xl font-bold tracking-[-0.48px] max-w-[852px]">
            &quot;Đừng bao giờ ngần ngại đi xa hơn nữa, vượt qua mọi đại dương, mọi biên giới, mọi quốc gia và mọi đức tin.&quot; – Amin Maalouf
          </p>
        </section>

        {/* Decorative Images */}
        <div className="px-20 mb-16 flex justify-center gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d8f3b2212c673523bb89a87f7af12805ddd1ad27?width=850"
            alt="Decorative"
            className="w-[425px] h-[403px] object-cover rounded-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e3bffe0e11f3200df302e5dcd443b197c3016750?width=791"
            alt="Decorative"
            className="w-[396px] h-[403px] object-cover rounded-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fc4d7e1e4059cf35a8650642b750570056b39f12?width=850"
            alt="Decorative"
            className="w-[425px] h-[406px] object-cover rounded-lg"
          />
        </div>

        {/* Destinations Section */}
        <section className="px-20 py-16">
          <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-12">
            Những điểm đến thú vị
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {destinations.map((dest, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="w-full h-[403px] rounded-lg overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px] mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px]">
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 bg-brand-accent-green text-brand-dark-green font-poppins text-2xl font-bold tracking-[-0.48px] px-6 py-3 rounded-[20px] border border-brand-header-green hover:bg-brand-accent-green/80 transition-colors">
            <ArrowRight className="w-6 h-6" />
          </button>
        </section>

        {/* Travel Plans Section */}
        <section className="px-20 py-16">
          <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-12">
            Kế hoạch du lịch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {plans.map((plan, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px]">
                    {plan.title}
                  </h3>
                  <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px]">
                    {plan.description}
                  </p>
                </div>
              ))}
              
              <div className="flex items-center gap-4">
                <Link to="/plan" className="bg-brand-accent-green text-brand-dark-green font-poppins text-2xl font-bold tracking-[-0.48px] px-6 py-3 rounded-[20px] border border-brand-header-green hover:bg-brand-accent-green/80 transition-colors">
                  Xem thêm
                </Link>
                <Link to="/plan" className="bg-brand-dark-green text-brand-accent-green px-6 py-2 rounded-[20px] border-2 border-brand-accent-green hover:bg-brand-dark-green/90 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="w-full h-[704px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a130e1b26c6d0fbb50e26e2ae233c4fce641dc4e?width=2600"
                alt="Travel plan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Green System Section */}
        <section className="px-20 py-16">
          <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-12">
            Hệ thống xanh
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="w-full h-[341px] rounded-lg overflow-hidden mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f0b3ae226923b126f4622b1fcf918f33b8fc08dc?width=1248"
                  alt="Waste management"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px] mb-2">
                ♻️ Quản lý rác thải
              </h3>
              <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px]">
                Trang web cung cấp lịch thu gom rác rõ ràng cho từng khu vực, kèm thông báo nhắc nhở để người dân và du khách xử lý rác đúng thời điểm.
              </p>
            </div>

            <div>
              <div className="w-full h-[341px] rounded-lg overflow-hidden mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/20319796178e087b167368d30e079a83d8de2cfc?width=1250"
                  alt="Water system"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px] mb-2">
                💧 Hệ thống nước
              </h3>
              <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px]">
                Người dùng có thể theo dõi mức sử dụng nước, phát hiện rò rỉ và cập nhật nguồn nước sạch ngay trên nền tảng.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-20 py-16">
          <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-12">
            Trải nghiệm và đánh giá
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E6E6E6] p-8 flex flex-col gap-12"
              >
                <p className="text-black font-inter text-2xl font-medium leading-[150%]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-black font-inter text-base font-medium leading-[150%]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#828282] font-inter text-base font-medium leading-[150%]">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full h-[236px] bg-[#F7F7F7] flex items-center justify-between px-20">
          <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px]">
            TRẢI NGHIỆM NGAY
          </h2>
          <Link to="/" className="bg-brand-accent-green text-brand-dark-green font-poppins text-2xl font-bold tracking-[-0.48px] px-12 py-6 rounded-[20px] border-2 border-brand-header-green hover:bg-brand-accent-green/80 transition-colors">
            Email
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
