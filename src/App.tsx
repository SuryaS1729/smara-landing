import SmaraPage from "./SmaraPage"

import FeaturesList from "./components/FeaturesList"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import ScrollIndicator from "./components/ScrollIndicator"


function App() {
  return (
    <>
      {/* <Header /> */}
      <SmaraPage />
      <ScrollIndicator />
      <FeaturesList />
      <Pricing />
      <Footer />
    </>
  )
}

export default App

