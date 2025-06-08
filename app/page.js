import Footer from "@/component/footer";
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
import {
  getAccommodations,
  getDining,
  getFacilities,
  getEvents,
  getExclusiveOffers,
  getContact,
  getAwards,
} from "@/services";

export default async function Home() {
const accommodations = await getAccommodations();
const dining = await getDining();
const events = await getEvents();
const facilities = await getFacilities();
const exclusiveOffers = await getExclusiveOffers();
const contact = await getContact();
const awards = await getAwards();

  return (
    <>
      <HeroVideo />
      <Intro />
      <Accommodation accommodations={accommodations} dining={dining} />
      <Event events={events} facilities={facilities} />
      <ExclusiveOffer exclusiveOffers={exclusiveOffers} />
      <LookInside />
      <InstagramWidget />
      <Address contact={contact} />
      <Reviews />
      <Footer awards={awards} />
    </>
  );
}
