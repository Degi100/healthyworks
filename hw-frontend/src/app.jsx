import { RouterNavigationLinks } from "./Components/Navigation/RouterNavigationLinks";
import { RouterNavigationRoutes } from "./Components/Navigation/RouterNavigationRoutes";
import "./app.scss";

export const App = () => {
  return (
    <>
      <div className="navRoutes">
        <RouterNavigationLinks />
        <RouterNavigationRoutes />
      </div>
    </>
  );
};
