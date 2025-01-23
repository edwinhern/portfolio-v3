"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme/theme-provider";

export function Providers({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<ThemeProvider enableSystem attribute="class">
			{children}
			<Analytics />
			<SpeedInsights />
		</ThemeProvider>
	);
}
