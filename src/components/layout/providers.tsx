import { ThemeProvider } from "@/layout/theme-provider";
import { TooltipProvider } from "@/ui/tooltip";

export function Providers({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<ThemeProvider defaultTheme="light" enableSystem attribute="class">
			<TooltipProvider delayDuration={200}>{children}</TooltipProvider>
		</ThemeProvider>
	);
}
