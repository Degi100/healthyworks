import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterNavigation } from "./Components/Navigation/RouterNavigation";

import { HealthymanagementPage } from "./pages/HealthymanagementPage";
import { ImpressumPage } from "./pages/ImpressumPage";
import { KontaktPage } from "./pages/KontaktPage";
import { NonsmokePage } from "./pages/NonsmokePage";
import { RelextrainePage } from "./pages/RelextrainePage";
import { StartPage } from "./pages/StartPage";
import { StresstrainePage } from "./pages/StresstrainePage";

export const App = () => {
  return (
    <Router>
      <div className="NavRoutes">
        <Routes>
          <Route path="/" element={<RouterNavigation />} />
          <Route path="/healthy" element={<HealthymanagementPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/contact" element={<KontaktPage />} />
          <Route path="/nonsmoke" element={<NonsmokePage />} />
          <Route path="/relextraine" element={<RelextrainePage />} />
          <Route path="/startpage" element={<StartPage />} />
          <Route pat="/stresstraine" element={<StresstrainePage />} />
        </Routes>
      </div>
    </Router>
  );
};
