import { Footer } from "@/component/footer";
import { Accommodation } from "@/component/landing/accommodation";
import { Address } from "@/component/landing/address";
import { Event } from "@/component/landing/event";
import { ExclusiveOffer } from "@/component/landing/exclusive-offer";
import { HeroVideo } from "@/component/landing/hero-video";
import { InstagramWidget } from "@/component/landing/instagram-widget";
import { Intro } from "@/component/landing/intro";
import { LookInside } from "@/component/landing/look-inside";
import { Reviews } from "@/component/landing/reviews";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Intro />
      <Accommodation />
      <Event />
      <ExclusiveOffer />
      <LookInside />
      <InstagramWidget />
      <Address />
      <Reviews />
      <Footer /> {/* todo */}
    </>
  );
}
