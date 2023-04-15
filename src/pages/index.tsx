import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { dark } from "@clerk/themes";

import { useAuth, SignedIn, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";

import { motion } from "framer-motion";

import { api } from "~/utils/api";
import { useState } from "react";

const TarotLink = ({ title, img, alt, onClick, href = "#" }: { title: string, img: string, alt: string, onClick?: () => void, href?: string }) => {
	return (
		<Link href={href} className="hover:animate-pulse" onClick={onClick}>
			<div className="w-36 h-72 p-1 bg-amber-100 hover:shadow-xl hover:shadow-emerald-500">
				<div className="flex flex-col-reverse border border-black w-full h-full bg-gradient-to-br from-emerald-950 to-slate-950">
					<div className="w-full h-8 flex justify-center bg-amber-100 font-tarot text-xl">
						{title}
					</div>
					<div className="w-full h-full overflow-hidden">
						<Image alt={alt} src={img} width={300} height={600} />
					</div>
				</div>
			</div>
		</Link>
	)
}

const PactTarotLink = () => {
	const [focus, setFocus] = useState(false);

	return (
		<motion.div layout>
			{
				focus ?
					(<div className="bg-gradient-to-r from-teal-600 to-purple-950">
						<SignedIn>
							<div>
								<SignOutButton />
							</div>
						</SignedIn>
						<SignedOut>
							<SignIn
								appearance={{
									baseTheme: dark
								}}
							/>
						</SignedOut>
					</div>) :
					<TarotLink title="SELL your SOUL" img="/assets/tools.jpg" alt="A Dark Pact (login)" onClick={() => { setFocus((f) => !f) }} />
			}
		</motion.div>
	)
}

const PentagramSpinner = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="animate-ping rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500 flex items-center justify-center">
				{/* star svg lmaooo */}
				<Image src="/assets/pentagram.svg" width={100} height={100} alt="pentagram" />
			</div>
		</div>
	)
}


const Home: NextPage = () => {
	// const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
					{/* <PentagramSpinner /> */}
					<div className=" w-full flex place-content-around h-full">
						<TarotLink alt="tools" img="/assets/city.jpg" title="FIRST PAGE" />
						<TarotLink alt="" img="/assets/forks.jpg" title="SECOND PAGE" />
						<PactTarotLink />
						<TarotLink alt="" img="/assets/trees.jpg" title="FOURTH PAGE" />
						<TarotLink alt="" img="/assets/tools.jpg" title="ONE of GHOST" />
					</div>
					{/* <p className="text-2xl text-rose-100">
						{hello.data ? hello.data.greeting : "Loading tRPC query... (figure out a thing for this)"}
					</p> */}
				</div>
			</main>
		</>
	);
};

export default Home;
