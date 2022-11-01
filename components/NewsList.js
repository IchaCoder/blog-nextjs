import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const NewsList = ({ posts }) => {
	return (
		<div className=" md:max-w-[50%] mx-auto">
			{posts.map((post) => {
				return (
					<Link
						href="/posts/[id]"
						className="border border-blue-400 rounded-lg p-3 cursor-pointer my-4"
						as={`/posts/${post.id}`}
						key={post.id}
					>
						<h1 className="font-semibold pb-1">{post.title}</h1>
						<p>{post.content}</p>
						<h3 className="text-xs pt-2 tracking-widest ">
							Published by: {post.newsSite}
						</h3>
					</Link>
				);
			})}
		</div>
	);
};

export default NewsList;
