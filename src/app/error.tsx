"use client";

import { IconArrowUpRight } from "@intentui/icons";
import { useCallback } from "react";

import { Button } from "@/ui/button";

interface GlobalErrorProps {
	error: Error & { digest?: string };
	unstable_retry: () => void;
}

export default function GlobalError({ error, unstable_retry }: GlobalErrorProps) {
	console.error(error);

	const handleRetry = useCallback(() => {
		unstable_retry();
	}, [unstable_retry]);

	return (
		<div className="flex flex-col gap-2">
			<h1 className="font-bold text-lg text-primary">Something went wrong!</h1>
			<p className="max-w-md font-light leading-relaxed">
				An unexpected error occurred. Please try again or come back later.
			</p>
			<div className="h-2" />
			<Button type="button" variant="outline" className="max-w-fit" onClick={handleRetry}>
				Try again
				<IconArrowUpRight className="size-4" />
			</Button>
		</div>
	);
}
