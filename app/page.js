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
import { hotelData } from "@/lib/data";

export default async function Home() {
  return (
    <>
      <HeroVideo />
      <Intro />
      <Accommodation
        accommodations={hotelData.accommodations}
        dining={hotelData.dining}
      />
      <Event events={hotelData.events} facilities={hotelData.facilities} />
      <ExclusiveOffer exclusiveOffers={hotelData.exclusiveOffers}/>
      <LookInside />
      <InstagramWidget />
      <Address contact={hotelData.contact}/>
      <Reviews />
      <Footer awards={hotelData.awards}/> {/* todo */}
    </>
  );
}
