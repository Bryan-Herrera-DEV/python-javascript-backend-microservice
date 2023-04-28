import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BASE_PATH, HOME_PATH } from "./utils/paths";
import LandingLayout from "./layout/LandingLayout";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={BASE_PATH} element={<Navigate to={HOME_PATH} />} />
          <Route path={BASE_PATH} element={<LandingLayout />}>
            <Route path={HOME_PATH} element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
