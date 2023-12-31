import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HealthymanagementPage } from '../../pages/HealthymanagementPage';
import { ImpressumPage } from '../../pages/ImpressumPage';
import { KontaktPage } from '../../pages/KontaktPage';
import { NonsmokePage } from '../../pages/NonsmokePage';
import { RelextrainePage } from '../../pages/RelextrainePage';
import { StartPage } from '../../pages/StartPage';
import { StresstrainePage } from '../../pages/StresstrainePage';
import { UnternehmenPage } from '../../pages/UnternehmenPage';
import { Leistungen } from '../../pages/Leistungen'

import { Not__Found as Error404} from "../../pages/Not__Found";

export const RouterNavigationRoutes = () => {
  return (
    <>
      <div className="NavRoutes">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/healthymanagement" element={<HealthymanagementPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/nonsmoke" element={<NonsmokePage />} />
          <Route path="/relextraine" element={<RelextrainePage />} />
          <Route path="/stresstraine" element={<StresstrainePage />} />
          <Route path="/unternehmen" element={<UnternehmenPage />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};
