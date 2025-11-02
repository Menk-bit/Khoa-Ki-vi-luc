import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Plan() {
  return (
    <div className="min-h-screen bg-brand-sage">
      <Header />

      <main className="px-8 lg:px-20 py-12">
        <section className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-1/2">
              <h1 className="text-[64px] font-inter font-bold text-[#033323] tracking-[-1.28px] mb-6">
                Plan 1
              </h1>
              <p className="text-[#000000bf] font-poppins text-2xl font-medium mb-8">
                Một hành trình không ồn ào, không gấp gáp, mà trọn vẹn cho những tâm hồn muốn chậm lại để chiêm ngưỡng và cảm nhận.
              </p>

              <div className="space-y-6 text-[#111827]">
                <div>
                  <h3 className="font-poppins font-bold text-lg mb-2">Ngày 1: Hà Nội → Tà Xùa (200km, khoảng 6-7h đi xe)</h3>
                  <ul className="list-disc pl-5 text-[#4b5563]">
                    <li>Sáng: Xuất phát từ Hà Nội (có thể đi xe khách hoặc thuê xe riêng). Trên đường đi dừng ở Trạm dừng Thanh Sơn (Phú Thọ) để nghỉ, chụp ảnh núi đồi.</li>
                    <li>Chiều: Đến Bắc Yên – cửa ngõ vào Tà Xùa. Check-in homestay/nhà nghỉ.</li>
                    <li>Chiều muộn: Đi bộ nhẹ quanh bản, ngắm hoàng hôn ở sống lưng khủng long Háng Đồng – một trong những điểm săn mây đẹp.</li>
                    <li>Tối: Ăn tối với món đặc sản (lợn bản, gà đồi, cá suối). Nghỉ ngơi để chuẩn bị dậy sớm hôm sau săn mây.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-lg mb-2">Ngày 2: Săn mây – Ngắm núi – Chill cùng thiên nhiên</h3>
                  <ul className="list-disc pl-5 text-[#4b5563]">
                    <li>Sáng sớm (4h30–5h): Lên đỉnh sống lưng khủng long hoặc đỉnh Tà Xùa để săn mây. Đây là highlight số 1 ở Tà Xùa, cảm giác như đi giữa biển mây.</li>
                    <li>Sáng muộn: Về lại homestay ăn sáng. Sau đó đi tham quan cây táo mèo cổ thụ – một biểu tượng thiên nhiên của Tà Xùa.</li>
                    <li>Trưa: Ăn trưa nhẹ, nghỉ ngơi.</li>
                    <li>Chiều: Tham quan bản làng người H’Mông – ngắm cảnh ruộng bậc thang, đời sống người dân. Có thể mua mật ong, táo mèo khô về làm quà.</li>
                    <li>Tối: Quây quần bên bếp lửa ở homestay, thưởng thức rượu ngô/rượu táo mèo.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-lg mb-2">Ngày 3: Thưởng ngoạn – Trở về</h3>
                  <ul className="list-disc pl-5 text-[#4b5563]">
                    <li>Sáng: Dậy sớm tản bộ quanh bản, chụp ảnh bình minh, uống trà ngắm mây lững lờ.</li>
                    <li>Sáng muộn: Tham quan thác nước Háng Đồng hoặc rừng nguyên sinh Tà Xùa (nếu có thời gian).</li>
                    <li>Trưa: Ăn trưa, chuẩn bị hành lý.</li>
                    <li>Chiều: Khởi hành về Hà Nội.</li>
                    <li>Tối: Về đến Hà Nội, kết thúc hành trình.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-poppins font-semibold">Tips:</h4>
                  <ul className="pl-5 list-disc text-[#4b5563] mt-2">
                    <li>Đi vào mùa tháng 10 – tháng 3: dễ săn mây, khí hậu mát, trời quang.</li>
                    <li>Mang theo áo ấm, giày leo núi nhẹ, máy ảnh/điện thoại pin khỏe để chụp cảnh.</li>
                    <li>Nên chọn homestay có view núi/mây để mỗi sáng thức dậy đã thấy cảnh đẹp.</li>
                    <li>Nếu không thích di chuyển nhiều, chỉ cần chọn 2–3 điểm săn mây + bản làng.</li>
                  </ul>
                </div>

                <div className="flex gap-4 mt-2">
                  <a href="#" className="inline-flex items-center gap-3 bg-[#B0C2AD] text-[#033323] font-poppins font-bold px-6 py-3 rounded-[20px]">
                    Homestay, nhà hàng
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-3 bg-[#B0C2AD] text-[#033323] font-poppins font-bold px-6 py-3 rounded-[20px]">
                    Service provider
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bdabe34d9ca017150473ef1252af35202bd39d31?width=2562"
                alt="Plan hero"
                className="w-full h-[650px] object-cover rounded-lg"
              />

              <div className="grid grid-cols-1 gap-6">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/a4b662b169f43ccaeae528e979e828a74e2b5453?width=2562" alt="plan-cta-1" className="w-full h-[436px] object-cover rounded-lg" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/9e3bb85dce83e0d8e1972c6101432257c35ba3f9?width=2560" alt="plan-cta-2" className="w-full h-[436px] object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Một số plan khác */}
          <div className="mt-12">
            <h2 className="text-4xl font-inter font-bold mb-6">Một số plan khác</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/012576269c560356d4d98ec4d992ec787f6d06d8?width=808" alt="plan-thumb-1" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-poppins font-semibold">Săn Mây Gọi Bình Minh</h4>
                <p className="text-[#828282]">Hành trình ngắm mây sớm, check-in đỉnh sống lưng khủng long, thưởng trà và đặc sản bản.</p>
              </div>

              <div className="space-y-2">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/9d4372bc77b8ba1aa3ac5448fbfdd22f83b9bf74?width=808" alt="plan-thumb-2" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-poppins font-semibold">Lạc Giữa Mây Trời Tây Bắc</h4>
                <p className="text-[#828282]">Dành cho tín đồ sống ảo, trải nghiệm homestay mây bay, khám phá bản làng và cảnh núi hùng vĩ</p>
              </div>

              <div className="space-y-2">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/7d2b5a8d61769d460ff7d5d53852d0406c3a3357?width=808" alt="plan-thumb-3" className="w-full h-56 object-cover rounded-lg" />
                <h4 className="font-poppins font-semibold">Tà Xùa Chill & Grill</h4>
                <p className="text-[#828282]">Plan cho nhóm bạn: săn mây sáng, tối đốt lửa trại, BBQ giữa sương núi, chill cực phê.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
