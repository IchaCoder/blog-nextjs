const Index = ({ singlePost }) => {
	return (
		<div className="max-w-[50%] mt-14 mx-auto">
			<img src={singlePost.imageUrl} className="w-full h-60" alt="" />
			<h1 className="font-semibold pb-2 text-lg uppercase">
				{singlePost.title}
			</h1>
			<p>{singlePost.summary}</p>
			<h3 className="text-xs pt-2 tracking-widest ">
				Published by: {singlePost.newsSite}
			</h3>
		</div>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
	const posts = await res.json();

	const ids = posts.map((post) => post.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${id}`);
	const singlePost = await res.json();

	return {
		props: {
			singlePost,
		},
	};
};

export default Index;
