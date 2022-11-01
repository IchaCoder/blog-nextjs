import Link from "next/link";
const Nav = () => {
	return (
		<nav className="flex bg-blue-400 p-4 text-xl gap-4">
			<div>News</div>
			<ul className="flex gap-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
