import "./App.scss";
import { useState } from "react";

import AppBar from "components/app-bar/AppBar.component";
import MobileAppBar from "components/mobile-app-bar/MobileAppBar.component";
import HeroSection from "components/hero-section/HeroSection.component";

function App() {
  let [openMobileAppBar, setOpenMobileAppBar] = useState(false);

  return (
    <>
      <AppBar openMobileMenu={() => setOpenMobileAppBar(true)} />
      <MobileAppBar
        open={openMobileAppBar}
        closeMobileMenu={() => setOpenMobileAppBar(false)}
      />
      <HeroSection />
    </>
  );
}

export default App;
