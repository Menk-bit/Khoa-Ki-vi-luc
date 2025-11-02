import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-sage flex flex-col">
      <Header />
      
      <main className="flex-1 px-20 py-32 flex flex-col items-center justify-center">
        <h1 className="text-brand-dark-green font-inter text-8xl font-bold tracking-[-1.28px] mb-4">
          404
        </h1>
        <h2 className="text-black font-inter text-4xl font-bold tracking-[-0.96px] mb-8">
          Page Not Found
        </h2>
        <p className="text-black/75 font-poppins text-2xl font-medium tracking-[-0.48px] mb-12 text-center max-w-2xl">
          Sorry, the page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <Link 
          to="/"
          className="bg-brand-accent-green text-brand-dark-green font-poppins text-xl font-bold tracking-[-0.48px] px-8 py-4 rounded-[20px] border border-brand-header-green hover:bg-brand-accent-green/80 transition-colors"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
