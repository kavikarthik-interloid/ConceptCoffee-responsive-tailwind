import Header from "./components/header";
import HeroSection from "./components/hero-section";
import SpecialItem from "./components/special-items-section";
import ProductHighlight from "./components/productHighlight";
import MenuSection from "./components/menu-section";
import Moments from "./components/moments";
import conceptCoffee from "/69.jpg";
import ConceptDish from "/20.jpg";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SpecialItem />
      <ProductHighlight
        price="28"
        unit="lb"
        heading="Buy Coffee Beans Online"
        description="We pride ourselves in choosing the finest coffee from around the world. A minimum of 50 varieties, chosen to deliver the best experience on the market."
        image={conceptCoffee}
        buyButton="Buy Now"
      />
      <MenuSection />
      <ProductHighlight
        title="About us"
        description="We started as a family owned business with little competition in the area. Today we are surrounded with various restaurants, which makes for a fierce competitive market. In the past customers were prevalent and little advertisement was necessary."
        image={ConceptDish}
        signature="Chef James Concept"
      />

      <Moments />
    </>
  );
}
