import "./app.scss";
import { RouterNavigationLinks } from "./Components/Navigation/RouterNavigationLinks";
import { RouterNavigationRoutes } from "./Components/Navigation/RouterNavigationRoutes";



export const App = () => {
  return (
    <>
      <div className="NavRoutes">
        <RouterNavigationLinks />
        <RouterNavigationRoutes />
      </div>
    </>
  );
};
