import { RouterNavigationLinks } from "./Components/Navigation/RouterNavigationLinks";
import { RouterNavigationRoutes } from "./Components/Navigation/RouterNavigationRoutes";
import "./app.scss";
import "./media-breakpoints.scss";

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
