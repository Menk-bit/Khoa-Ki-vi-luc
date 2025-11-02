import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Lock, User, Calendar } from "lucide-react";

export default function Destinations() {
  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M24.0146 13.9746L24.127 14.3193H37.4824L26.9717 21.9561L26.6777 22.1699L26.79 22.5156L30.8037 34.8701L20.2939 27.2344L20 27.0215L19.7061 27.2344L9.19531 34.8701L13.21 22.5156L13.3223 22.1699L13.0283 21.9561L2.51758 14.3193H15.873L15.9854 13.9746L20 1.61719L24.0146 13.9746Z"
            fill="#F6FF00"
            stroke="black"
          />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-sage">
      <Header />

      <main>
        {/* Hero Image */}
        <div className="w-full h-[720px] relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7e3b579bd8b557aac80c376a7255dacba658d6f9?width=2884"
            alt="Tà Xùa landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
          <div className="absolute bottom-20 left-20 text-white">
          </div>
        </div>

        {/* Activities Section */}
        <section className="px-20 py-16">
          <div className="grid grid-cols-2 gap-8 mb-16">
            {/* Trekking */}
            <div>
              <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-4">
                Trekking & chinh phục<br />Sống lưng Khủng long
              </h2>
              <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px] mb-6">
                Địa điểm: Bản Chống Tra, xã Háng Đồng, huyện Bắc Yên, Sơn La<br />
                Bao gồm service gì: Dẫn đường, đồ bảo hộ, ăn nhẹ, xe đưa đón, check-in đỉnh mây
              </p>
              <button className="bg-brand-dark-green text-brand-accent-green font-poppins text-2xl font-bold tracking-[-0.48px] px-8 py-3 rounded-[20px] border-2 border-brand-accent-green hover:bg-brand-dark-green/90 transition-colors">
                Xem thêm
              </button>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0876a891ccf80e55a46494cb21be8af2162c5c69?width=1250"
                alt="Trekking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1413888794a478213b06f5ea8359bb662d185896?width=1248"
                alt="Tea fields"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-4">
                Tham quan đồi chè<br />Shan tuyết cổ thụ
              </h2>
              <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px] mb-6">
                Địa điểm: Bản Bẹ, xã Tà Xùa<br />
                Bao gồm service gì: Dẫn tour, hái chè, sao chè, thưởng trà, chụp ảnh cùng cây chè cổ.
              </p>
              <button className="bg-brand-dark-green text-brand-accent-green font-poppins text-2xl font-bold tracking-[-0.48px] px-8 py-3 rounded-[20px] border-2 border-brand-accent-green hover:bg-brand-dark-green/90 transition-colors">
                Xem thêm
              </button>
            </div>
          </div>
        </section>

        {/* Local Business Section */}
        <section className="px-20 py-16">
          <h2 className="text-black font-inter text-5xl font-bold tracking-[-0.96px] mb-12">
            Local business 1
          </h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Homestay PKL */}
            <div>
              <div className="w-full h-[735px] rounded-lg overflow-hidden mb-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/321a003f28e4301bb4ebed8d1cf86cc0a3dc90c5?width=1470"
                  alt="Homestay PKL"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px] mb-2">
                Homestay PKL
              </h3>
              <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px] mb-2">
                Homestay giữa mây trời Tây Bắc
              </p>
              <p className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                900.000 – 1.400.000 VND/đêm
              </p>
            </div>

            {/* Restaurants */}
            <div className="space-y-8">
              <div>
                <div className="w-full h-[284px] rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/33b648e0cfea99d47b21b71fdcb743308933a169?width=1030"
                    alt="HL quán"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px] mb-1">
                  HL quán
                </h3>
                <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px] mb-1">
                  Tinh hoa ẩm thực Tây Bắc
                </p>
                <p className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                  500.000 – 800.000 VND/mâm
                </p>
              </div>

              <div>
                <div className="w-full h-[284px] rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b369f63837b01feaf670e59097e62738e1d1aea1?width=1030"
                    alt="NQT restaurant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-black font-poppins text-2xl font-bold tracking-[-0.48px] mb-1">
                  NQT restaurant
                </h3>
                <p className="text-[#828282] font-poppins text-2xl font-medium tracking-[-0.48px] mb-1">
                  Lẩu siêu ngon, thịt nướng thơm lừng, no say quên lối
                </p>
                <p className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                  400.000 - 700 000 VND/mâm
                </p>
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="mt-16 space-y-4">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-[#454545]" />
                <span className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                  Sóng mạng
                </span>
              </div>
              <StarRating />
            </div>

            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4">
                <Lock className="w-10 h-10 text-[#454545]" />
                <span className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                  An toàn
                </span>
              </div>
              <StarRating />
            </div>

            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4">
                <User className="w-10 h-10 text-[#454545]" />
                <span className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                  Vị trí so với trung tâm
                </span>
              </div>
              <StarRating />
            </div>

            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4">
                <Calendar className="w-10 h-10 text-[#454545]" />
                <span className="text-black font-poppins text-2xl font-medium tracking-[-0.48px]">
                  Di chuyển
                </span>
              </div>
              <StarRating />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
