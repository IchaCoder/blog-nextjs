import Link from "next/link";
import Nav from "./Nav";
const Layout = ({ children }) => {
	return (
		<div>
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
