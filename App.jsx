import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Heading";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { AboutUs, ErrorPage } from "./src/components/AboutUs";
import { ContactUs } from "./src/components/ContactUs";
import RestrauntMenu from "./src/components/RestrauntMenu";
import { useOnlineStatus } from "./src/utils/useOnlineStatus";
import { lazy } from "react";
import ShimmerUI from "./src/components/ShimmerUI";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import { CartItems } from "./src/components/CartItems";

const AboutUs = lazy(() =>
  import("./src/components/AboutUs").then((module) => ({
    default: module.AboutUs,
  }))
);
const ErrorPage = lazy(() =>
  import("./src/components/AboutUs").then((module) => ({
    default: module.ErrorPage,
  }))
);
function App() {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <>
        <Provider store={appStore}>
          <Header></Header>
          <h1 className="my-40 mx-4 text-2xl font-bold">
            NO Internet connection
          </h1>
          ;
        </Provider>
      </>
    );
  }
  return (
    <Provider store={appStore}>
      <div className="applayout">
        <Header />
        <div className="mt-32">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resturantMenu/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/AboutUs",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/CartItems",
        element: <CartItems />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
    ],
    errorElement: (
      <Suspense fallback={<ShimmerUI />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
