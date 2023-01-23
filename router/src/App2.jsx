import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/faq";
import Contact, { contactAction } from "./pages/help/contact";
import NotFound from "./pages/notFound";
import Careers, { careerLoader } from "./pages/careers/careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/careerDetails";
import CareerError from "./pages/careers/careerError";

//layout
import RootLayout from "./layout/rootLayout";
import HelpLayout from "./layout/helpLayout";
import CareersLayout from "./layout/CareersLayout";

//router function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careerLoader} />

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      {/* //error 404, custom page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App2() {
  return <RouterProvider router={router} />;
}

export default App2;
