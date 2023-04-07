import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

//fonts
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({
  weight:"300",
  subsets:['latin'],
  variable:'--font-josefinSans'
})


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
