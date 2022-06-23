import "../styles/globals.css";
import "../styles/grid.css";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="body-color">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
