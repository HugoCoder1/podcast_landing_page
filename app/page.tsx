import Footer from "@/components/design/footer";
import Header from "@/components/design/header";
import Herosection from "@/components/design/hero-section";
import Detailnumber from "@/components/design/section/detailnumber";
import Infofeature from "@/components/design/section/info-feature";
import Listen from "@/components/design/section/listen";
import TopPodcaster from "@/components/design/top-podcaster";
import Weekly from "@/components/design/weekly";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-full mx-auto">
      {/* bg-opacity-[0.382] */}
      <div className="bg-natural flex flex-col pb-[32px] min-h-[962px] h-auto ">
        <Header />
        <Herosection />
      </div>
      <Weekly />
      <TopPodcaster />
      <Detailnumber />
      <Infofeature />
      <Listen />
      <Footer />
    </div>
  );
}
