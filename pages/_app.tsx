import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme, Container } from "@nextui-org/react";
import { Navigation } from "Components";
import { Be_Vietnam_Pro } from "@next/font/google";

const inter = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700"],
});

const darkTheme = createTheme({ type: "dark" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Container className={inter.className}>
        <Navigation />
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
}
