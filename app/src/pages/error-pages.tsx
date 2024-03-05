import { useRouteError } from "react-router-dom";

interface MyErrorType {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as MyErrorType;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
