import { useRouteError } from "react-router-dom";
export const AboutUs = () => {
  return (
    <>
      <div>
        <h1>About Us Page</h1>
      </div>
    </>
  );
};

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>
        {error.status} {error.statusText}
      </h1>
      <h2>{error.data}</h2>
    </div>
  );
};
