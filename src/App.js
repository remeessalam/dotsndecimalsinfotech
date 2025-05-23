import { Route, Routes } from "react-router-dom";
import AOS, { refresh } from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./componets/landingPages/LandingHeader";
import LandingFooter from "./componets/landingPages/LandingFooter";
import WebsiteHeader from "./componets/website/WebsiteHeader";
import WebsiteFooter from "./componets/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./componets/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./componets/SpinnerContext";
import ScrollToTop from "./componets/common/ScrollToTop";
import WhatsAppIconPopUp from "./componets/common/WhatsAppIconPopUp";
import {
  developmentServiceDetails,
  landingPageContent,
} from "./data/servicesPageDetalls";
import PrivacyPolicy from "./pages/PrivacyPolicy";
const Thankyou = lazy(() => import("./pages/Thankyou"));

AOS.init({
  once: true,
  duration: 500,
});
export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <WhatsAppIconPopUp />
        <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              path={path}
              element={
                <>
                  <WebsiteHeader name={name} />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}
          {/* Thankyou page */}
          <Route
            path="/thankyou"
            element={
              <>
                <Thankyou />
              </>
            }
          />{" "}
          {/* Privacy Policy page */}
          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
          {landingPageContent.map((obj) => (
            <Route
              path={`/${obj.id}`}
              element={
                <>
                  <LandingHeader />
                  <LandingPage page={obj.id} />
                  <LandingFooter />
                </>
              }
            />
          ))}
          {/* Landing Pages */}
          {/* <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          /> */}
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}
