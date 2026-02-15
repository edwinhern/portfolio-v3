"use client";

import { cn } from "@/lib/utils";
import { AnimateInGroup } from "@/ui/animate-in";
import { buttonVariants } from "@/ui/button";

export default function GlobalError({ reset }: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
	return (
		<div className="flex flex-col gap-2">
			<AnimateInGroup>
				<h1 className="font-bold text-lg text-primary">Something went wrong!</h1>
				<p className="max-w-md font-light leading-relaxed">
					An unexpected error occurred. Please try again or come back later.
				</p>
				<div className="h-2" />
				<button type="button" className={cn(buttonVariants({ variant: "outline" }), "max-w-fit")} onClick={reset}>
					Try again
				</button>
			</AnimateInGroup>
		</div>
	);
}
