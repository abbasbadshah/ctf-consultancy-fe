import CtaSection from "../sections/home-2/Cta";
import HeroSection from "../sections/home-2/Hero";
import IntegrationSection from "../sections/home-2/Integration";
import VideoSection from "../sections/home-2/Video";
import PricingSection from "../sections/home-2/Pricing/PricingSection";
import FeatureSection from "../sections/home-2/Feature/FeatureSection";
import ContentSection from "../sections/home-2/Contentone/ContentSectionOne";
import ContentSectionTwo from "../sections/home-2/ContentTwo/ContentSectionTwo";
import TestimonialSection from "../sections/home-2/Testimonial/TestimonialSection";
import Ticker from "../sections/home-2/Ticker/Ticker";
import FooterLayoutTwo from "../components/Footer/FooterTwo/FooterLayoutTwo";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/PageWrapper/PageWrapper";
const HomepageTwo = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-2.png"
          signUpButtonClass="btn-masco btn-masco--header   btn-secondary-l02 btn-fill--up"
        />
        <HeroSection />
        <FeatureSection />
        <ContentSection />
        <ContentSectionTwo />
        <VideoSection />
        <TestimonialSection />
        <Ticker />
        <PricingSection />
        <IntegrationSection />
        <CtaSection />
        <FooterLayoutTwo
          socialClass="list-social--hvr-black"
          className="footer-padding-default footer-l02"
          logo="logo-2.png"
        />{" "}
      </Layout>
    </>
  );
};

export default HomepageTwo;
