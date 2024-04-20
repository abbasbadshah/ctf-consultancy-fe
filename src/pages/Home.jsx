import HeroSection from "../sections/home-1/Hero/HeroSection";
import TestimonialSection from "../sections/home-1/Testimonial/TestimonialSection";
import BrandSection from "../sections/home-1/Brand/BrandSection";
import CtaSection from "../sections/home-1/Cta/CtaSection";
import PortfolioSection from "../sections/home-1/Portfolio/PortfolioSection";
import ContentSectionOne from "../sections/home-1/ContentOne/ContentOneSection";
import ContentSectionTwo from "../sections/home-1/ContentTwo/ContentTwoSection";
import FaqSection from "../sections/home-1/Faq/FaqSection";
import FooterLayoutOne from "../components/Footer/FooterOne/FooterLayoutOne";
import Header from "../components/Header/Header";
import ServiceSection from "../sections/home-1/Service/ServiceSection";
import Layout from "../components/Layout/PageWrapper/PageWrapper";

let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const Homepage = () => {
  return (
    <>
      <Layout>
        <Header
          scroll={true}
          signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up"
        />
        <HeroSection />
        <BrandSection />
        <ServiceSection />
        <ContentSectionOne />
        <ContentSectionTwo />
        <PortfolioSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default Homepage;
