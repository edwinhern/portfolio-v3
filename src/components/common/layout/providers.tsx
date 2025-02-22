"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/common/theme/provider";

export function Providers({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<ThemeProvider defaultTheme="light" enableSystem attribute="class">
			{children}
			<Analytics />
			<SpeedInsights />
		</ThemeProvider>
	);
}
