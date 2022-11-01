// import "../styles/globals.css";
import "../styles/styles.css";
import Layout from "../components/Layout";
import { AppProvider } from "../context";

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</AppProvider>
	);
}

export default MyApp;
