import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-brand-sage">
      <Header />

      <main className="px-8 lg:px-20 py-12">
        <section className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-[64px] font-inter font-bold mb-6">About</h1>

            <p className="text-[#111827] font-poppins text-2xl mb-6">
              Chúng tôi xây dựng nền tảng này với sứ mệnh kết nối – lan tỏa – gìn giữ. Kết nối để gom lại những dịch vụ nhỏ lẻ trong cộng đồng thành một hệ thống thông minh, nơi mỗi homestay, nhà hàng, điểm tham quan hay dịch vụ bản địa đều có thể hỗ trợ và cộng sinh cùng nhau. Lan tỏa để đưa đến cho du khách những hành trình trọn vẹn, thuận tiện và giàu trải nghiệm, không chỉ dừng lại ở việc “đi và ngắm cảnh”, mà còn chạm vào đời sống, văn hóa và tinh thần của Tà Xùa. Và gìn giữ, để mỗi bước phát triển du lịch đều đi đôi với sự tôn trọng thiên nhiên, giảm thiểu tác động tiêu cực đến môi trường, đồng thời bảo tồn nét đẹp bản sắc địa phương.
            </p>

            <p className="text-[#111827] font-poppins text-2xl mb-6">
              Nhiệm vụ của chúng tôi là:
            </p>

            <ul className="list-disc pl-5 text-[#4b5563] space-y-3">
              <li>
                Xây dựng hệ sinh thái dịch vụ cộng đồng: kết nối các hộ gia đình, cơ sở kinh doanh và dịch vụ du lịch thành một mạng lưới hợp tác, nơi mỗi bên đều được hưởng lợi và cùng nhau phát triển.
              </li>
              <li>
                Đem lại trải nghiệm du lịch thông minh: hỗ trợ du khách lên kế hoạch, tìm kiếm, đặt dịch vụ và nhận gợi ý hành trình tối ưu – tất cả chỉ trong một nền tảng duy nhất.
              </li>
              <li>
                Thúc đẩy phát triển bền vững: khuyến khích mô hình kinh doanh xanh, tái sử dụng tài nguyên, hạn chế rác thải nhựa, và ưu tiên những dịch vụ thân thiện với môi trường.
              </li>
              <li>
                Gìn giữ và lan tỏa văn hóa bản địa: tạo cơ hội cho du khách hiểu, cảm và trải nghiệm đời sống người dân, từ ẩm thực, phong tục đến những câu chuyện truyền miệng, để Tà Xùa không chỉ là một điểm đến, mà là một hành trình sống trong ký ức.
              </li>
            </ul>

          </div>

          <div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/044a0de4a408d365774af384371116b7a7ca1874?width=1016" alt="About image" className="w-full h-auto rounded-lg object-cover" />
          </div>
        </section>

        {/* Sponsors */}
        <section className="max-w-[1200px] mx-auto mt-16">
          <h2 className="text-4xl font-inter font-bold mb-6">TRI ÂN NHÀ TÀI TRỢ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/9aef47e43079ddb979cf6cfc7731187a338b62ef?width=1249" alt="sponsor1" className="w-full h-64 object-cover" />
              <div className="p-4 font-poppins font-bold">NTT 1</div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/304b7358753040d3bb8dfbbd7b140fac7f14256a?width=1249" alt="sponsor2" className="w-full h-64 object-cover" />
              <div className="p-4 font-poppins font-bold">NTT 2</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
