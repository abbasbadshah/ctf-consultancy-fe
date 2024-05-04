import { createBrowserRouter } from "react-router-dom";
import App from "../pages";
import Homepage from "../pages/Home";
import HomepageTwo from "../pages/HomeTwo";
import HomepageThree from "../pages/HomeThree";
import HomepageFour from "../pages/HomeFour";
import HomepageFive from "../pages/HomeFive";
import HomepageSix from "../pages/HomeSix";
import HomepageSeven from "../pages/HomeSeven";
import HomepageEight from "../pages/HomeEight";
import HomepageNine from "../pages/Homenine";
import HomepageTen from "../pages/HomeTen";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ServiceDetails from "../pages/ServiceDetails";
import ServicePage from "../pages/ServicePage";
import ContactPageOne from "../pages/ContactPageOne";
import ContactPageTwo from "../pages/ContactPageTwo";
import ContactPageThree from "../pages/ContactPageThree";
import PricingPageOne from "../pages/PricingPageOne";
import PricingPageTwo from "../pages/PricingPageTwo";
import CareerPage from "../pages/CareerPage";
import CareerDetailsPage from "../pages/CareerDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import BlogPage from "../pages/BlogPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import PortfolioDetailsPage from "../pages/PortfolioDetailsPage";
import PortfolioOnePage from "../pages/PortfolioOnePage";
import PortfolioThreePage from "../pages/PortfolioThreePage";
import PortfolioFourPage from "../pages/PortfolioFourPage";
import FaqOnePage from "../pages/FaqOnePage";
import FaqTwoPage from "../pages/FaqTwoPage";
import FaqThreePage from "../pages/FaqThreePage";
import FaqFourPage from "../pages/FaqFourPage";
import WebDevelopmentPlans from "../pages/WebDevPricing";
import DigitalMarketingPlan from "../pages/DigitalMarketingPricing";
import GraphicDesigningPlans from "../pages/GraphicDesigningPricing";
import ContentWritingPlans from "../pages/ContentWritingPricing";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/home-2",
    element: <HomepageTwo />,
  },
  {
    path: "/home-3",
    element: <HomepageThree />,
  },
  {
    path: "/home-4",
    element: <HomepageFour />,
  },
  {
    path: "/home-5",
    element: <HomepageFive />,
  },
  {
    path: "/home-6",
    element: <HomepageSix />,
  },
  {
    path: "/home-7",
    element: <HomepageSeven />,
  },
  {
    path: "/home-8",
    element: <HomepageEight />,
  },
  {
    path: "/home-9",
    element: <HomepageNine />,
  },
  {
    path: "/home-10",
    element: <HomepageTen />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },

  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/service-details",
    element: <ServiceDetails />,
  },
  {
    path: "/contact",
    element: <ContactPageOne />,
  },
  {
    path: "/contact-2",
    element: <ContactPageTwo />,
  },
  {
    path: "/contact-3",
    element: <ContactPageThree />,
  },
  {
    path: "/pricing-2",
    element: <PricingPageOne />,
  },
  {
    path: "/pricing",
    element: <PricingPageTwo />,
  },
  {
    path: "/web-development-plan",
    element: <WebDevelopmentPlans />,
  },
  {
    path: "/digital-marketing-plan",
    element: <DigitalMarketingPlan />,
  },
  {
    path: "/graphic-designing-plan",
    element: <GraphicDesigningPlans />,
  },
  {
    path: "/content-writing-plan",
    element: <ContentWritingPlans />,
  },
  {
    path: "/career",
    element: <CareerPage />,
  },
  {
    path: "/career-details",
    element: <CareerDetailsPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoonPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog-details",
    element: <BlogDetailsPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioOnePage />,
  },

  {
    path: "/portfolio-3",
    element: <PortfolioThreePage />,
  },
  {
    path: "/portfolio-4",
    element: <PortfolioFourPage />,
  },
  {
    path: "/portfolio-details",
    element: <PortfolioDetailsPage />,
  },
  {
    path: "/faq",
    element: <FaqOnePage />,
  },
  {
    path: "/faq-2",
    element: <FaqTwoPage />,
  },
  {
    path: "/faq-3",
    element: <FaqThreePage />,
  },
  {
    path: "/faq-4",
    element: <FaqFourPage />,
  },
]);
