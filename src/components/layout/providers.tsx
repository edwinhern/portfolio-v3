import { ThemeProvider } from "@/layout/theme-provider";

export function Providers({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<ThemeProvider defaultTheme="light" enableSystem attribute="class">
			{children}
		</ThemeProvider>
	);
}
