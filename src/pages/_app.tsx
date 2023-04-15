import { type AppType } from "next/app";
import { ClerkProvider } from '@clerk/nextjs';

import { api } from "~/utils/api";


import "~/styles/globals.css";

//fonts
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({
	weight: "300",
	subsets: ['latin'],
	variable: '--font-josefinSans'
})


const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ClerkProvider {...pageProps}>
			<Component {...pageProps} />
		</ClerkProvider>
	);
};

export default api.withTRPC(MyApp);
