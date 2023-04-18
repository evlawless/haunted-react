import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useAuth, SignedIn, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";

import { motion } from "framer-motion";

import { api } from "~/utils/api";
import { useState } from "react";

const TarotLink = ({ title, img, alt, onClick, href = "#" }: { title: string, img: string, alt: string, onClick?: () => void, href?: string }) => {
	return (
		<Link href={href} className="hover:animate-pulse" onClick={onClick}>
			<div className="w-40 h-72 p-1 bg-amber-100 hover:shadow-xl hover:shadow-emerald-500">
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
						<TarotLink alt="A Dark Pact (login)" title="SELL your SOUL" href="/pact" img="/assets/pier.jpg"/>
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
