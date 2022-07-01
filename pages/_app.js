import "../styles/globals.css";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      ></link>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
