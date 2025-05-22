// page.tsx
import Hero from "@/app/components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "@/app/components/sections/Testominials";
import Screenshots from "@/app/components/sections/Screenshots";
import Main from "@/app/components/global/Footer/Main";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <Main />
    </>
  );
}
