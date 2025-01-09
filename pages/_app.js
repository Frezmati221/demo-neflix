import "react-perfect-scrollbar/dist/css/styles.css";
// import 'swiper/swiper.min.css';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/navigation";
import "../public/css/style.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head> */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
