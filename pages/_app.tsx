import "../styles/globals.css";
import "../styles/loadingAnimation.css";
import "../styles/analytic.css";
import "../styles/mdBlogs.module.css";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

/**
 * @return {JSX.Element}
 */

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={pageProps.session} refetchOnWindowFocus={true}>
          <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
