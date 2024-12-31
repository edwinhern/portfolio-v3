"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { RouterProvider } from "react-aria-components";

import { ThemeProvider } from "./theme/theme-provider";

declare module "react-aria-components" {
	interface RouterConfig {
		routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
	}
}

export function Providers({ children }: Readonly<PropsWithChildren>) {
	const router = useRouter();

	return (
		<RouterProvider navigate={router.push}>
			<ThemeProvider enableSystem attribute="class">
				{children}
				<Analytics />
				<SpeedInsights />
			</ThemeProvider>
		</RouterProvider>
	);
}
