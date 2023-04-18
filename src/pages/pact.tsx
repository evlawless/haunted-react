import { SignIn, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const Pact = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-slate-900 to-rose-950">
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
		</div>
	)
}

export default Pact;