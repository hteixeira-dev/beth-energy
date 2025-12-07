// app/page.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Energia from "../components/Energia";
import Comparativo from "../components/Comparativo";
import Feed from "../components/Feed";
import CallToAction from "../components/CallToAction";
import Payments from "../components/Payments";


export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-500 text-white">
      <Header />
      <Hero />
      <Sobre />
      <Energia />
      <Comparativo />
      <Feed />
      <CallToAction />
      <Payments />
      {/* próximas seções */}
    </main>
  );
}
