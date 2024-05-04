import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CtaSection from "../sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "../components/Footer/FooterOne";
import PricingSection from "../sections/inner-pages/PriceTwo/DigitalMarketingPricing/PricingSection";
import Layout from "../components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const DigitalMarketingPlan = () => {
  return (
    <div>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Web Development Plans" text="Web Development Plans" />
        <PricingSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </div>
  );
};

export default DigitalMarketingPlan;
