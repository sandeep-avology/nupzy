import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./shared/components/layout/layout";
import Home from "./pages/Home/home";
import Party from "./pages/Party-Hotels/party";
import Spa from "./pages/Spa-Hotels/spa";
import Casino from "./pages/Casino-Hotels/casino";
import Budget from "./pages/Budget-Hotels/budget";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Privacy from "./pages/PrivacyPolicy/privacy";
import Terms from "./pages/TermsConditions/terms";
import Personal from "./pages/PersonalDataPolicy/Personal";
import Refunds from "./pages/RefundsPolicy/refunds";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="party-hotels" element={<Party />} />
          <Route path="spa-hotels" element={<Spa />} />
          <Route path="casino-hotels" element={<Casino />} />
          <Route path="budget-hotels" element={<Budget />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-&-condition" element={<Terms />} />
          <Route path="personal-data-policy" element={<Personal />} />
          <Route path="refunds-policy" element={<Refunds />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
