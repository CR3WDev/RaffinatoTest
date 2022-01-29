import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClimbsProvider from "./context/climbs";
import WormPositionProvider from "./context/worm-position";
import { ConfigurationPage } from "./modules/configuration/configuration.page";
import { HomePage } from "./modules/home/home.page";
function App() {
  return (
    <WormPositionProvider>
      <ClimbsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/config" element={<ConfigurationPage />} />
          </Routes>
        </Router>
      </ClimbsProvider>
    </WormPositionProvider>
  );
}

export default App;
