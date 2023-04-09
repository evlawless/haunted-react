import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { api } from "~/utils/api";

const TarotLink = ({title, img, alt}:{title:string, img: string, alt:string}) => {
	return (
		<Link href="#" className="hover:animate-pulse">
		<div className="w-36 h-72 p-1 bg-amber-100 hover:shadow-xl hover:shadow-emerald-500">
			<div className="flex flex-col-reverse border border-black w-full h-full bg-gradient-to-br from-emerald-950 to-slate-950">
				<div className="w-full h-8 flex justify-center bg-amber-100 font-tarot text-xl">
				{title}
				</div>
				<div className="w-full h-full overflow-hidden">
					<Image alt={alt} src={img} width={300} height={600}/>
				</div>
			</div>
		</div>
		</Link>
	)
}

const PentagramSpinner = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500">
				{/* star svg lmaooo */}
				<svg className="w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 3l3.536 6.464 6.928.536L14.464 16 17 22.464 10 19.928 3 22.464 5.536 16 0 7.464l6.928-.536L10 3z" clipRule="evenodd" />
				</svg>
			</div>
		</div>
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
					<PentagramSpinner />
					<div className=" w-full flex place-content-around h-full">
						<TarotLink alt="tools" img="/../assets/tools.jpg" title="FIRST PAGE" />
						<TarotLink alt="" img="/../assets/tools.jpg" title="SECOND PAGE" />
						<TarotLink alt="" img="/../assets/tools.jpg" title="THIRD PAGE" />
						<TarotLink alt="" img="/../assets/tools.jpg" title="FOURTH PAGE" />
						<TarotLink alt="" img="/../assets/tools.jpg" title="FIFTH PAGE" />
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
