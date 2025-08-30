import { ThemeProvider } from "@/common/theme/provider";

export function Providers({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<ThemeProvider defaultTheme="light" enableSystem attribute="class">
			{children}
		</ThemeProvider>
	);
}
