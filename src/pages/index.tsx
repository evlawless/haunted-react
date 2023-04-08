import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { api } from "~/utils/api";

const TarotLink = ({title}:{title:string}) => {
	return (
		<Link href="#" className="hover:animate-pulse">
		<div className="w-36 h-72 p-1 bg-amber-100 hover:shadow-xl hover:shadow-emerald-500">
			<div className="flex flex-col-reverse border border-black w-full h-full bg-gradient-to-br from-emerald-950 to-slate-950">
				<div className="w-full h-8 flex justify-center bg-amber-100 font-tarot text-xl">
				{title}
				</div>
				<div className="w-full h-full overflow-hidden">
					<Image alt="a random image" src={"https://picsum.photos/100/200"} width={300} height={600}/>
				</div>
			</div>
		</div>
		</Link>
	)
}

const Home: NextPage = () => {
	const hello = api.example.hello.useQuery({ text: "from tRPC" });

	return (
		<>
			<Head>
				<title>Create Haunted App</title>
				<meta name="description" content="A haunted website built with the T3 Stack" />
				<link rel="icon" href="/favicon.ico" />
				
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-black">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
					<h1 className="text-5xl font-extrabold tracking-tight text-rose-200 sm:text-[5rem]">
						Create <span className="text-rose-300">HAUNTED</span> App
					</h1>
					<div className=" w-full flex place-content-around h-full">
						<TarotLink title="FIRST PAGE" />
						<TarotLink title="SECOND PAGE" />
						<TarotLink title="THIRD PAGE" />
						<TarotLink title="FOURTH PAGE" />
						<TarotLink title="FIFTH PAGE" />
					</div>
					{/* <p className="text-2xl text-rose-100">
						{hello.data ? hello.data.greeting : "Loading tRPC query..."}
					</p> */}
				</div>
			</main>
		</>
	);
};

export default Home;
