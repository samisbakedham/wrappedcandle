import Providers from '../components/common/Providers';
import '../styles/globals.css';

function Application({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);

    return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
}

export default Application;
