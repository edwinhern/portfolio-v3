import Link from "next/link";

import { cn } from "@/lib/utils";
import { SocialMedia } from "./social-media";

export const Introduction: React.FC<React.ComponentProps<"div">> = ({ ...props }) => {
	return (
		<div {...props} className={cn("space-y-4", props.className)}>
			<h1 className="animate-in font-bold text-lg text-primary">Welcome!</h1>

			<p className="animate-in font-light leading-relaxed" style={{ "--index": 1 } as React.CSSProperties}>
				I&apos;m a software engineer in Dallas, TX building for the web with a design-first mindset. On the side, I
				manage{" "}
				<Link
					className="text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-primary/80"
					href="https://hernserver.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Hernandez Server"
				>
					self-hosted
				</Link>{" "}
				solutions for media and productivity tools.
			</p>

			<p className="animate-in font-light leading-relaxed" style={{ "--index": 2 } as React.CSSProperties}>
				My favorite tech stack for building apps is <span className="font-semibold">Next.js</span>,{" "}
				<span className="font-semibold">React</span>, and <span className="font-semibold">TypeScript</span> for the
				frontend and <span className="font-semibold">Java</span> for the backend.
			</p>

			<SocialMedia className="animate-in" style={{ "--index": 3 } as React.CSSProperties} />
		</div>
	);
};
