import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import CtaSection from "../sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "../components/Footer/FooterOne";
import PortfolioSection from "../sections/inner-pages/PortfolioFour/Portfolio";
import Layout from "../components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const PortfolioFourPage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Portfolio Minimal" text="Portfolio" />
        <PortfolioSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default PortfolioFourPage;
