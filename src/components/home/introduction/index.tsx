import Link from "next/link";

import { AnimateInGroup } from "@/ui/animate-in";
import { SocialMedia } from "./social-media";

export const Introduction: React.FC = () => {
	return (
		<AnimateInGroup className="space-y-4">
			<h1 className="font-bold text-lg text-primary">Welcome!</h1>
			<p className="font-light leading-relaxed">
				I&apos;m a software engineer in Dallas, TX building for the web with a design-first mindset. On the side, I
				manage{" "}
				<Link
					className="link text-primary underline hover:text-primary/80"
					href="https://hernserver.com/"
					target="_blank"
					rel="noreferrer"
					aria-label="Hernandez Server"
				>
					self-hosted
				</Link>{" "}
				solutions for media and productivity tools.
			</p>
			<p className="font-light leading-relaxed">
				My favorite tech stack for building apps is <span className="font-semibold">Next.js</span>,{" "}
				<span className="font-semibold">React</span>, and <span className="font-semibold">TypeScript</span> for the
				frontend and <span className="font-semibold">Java</span> for the backend.
			</p>
			<SocialMedia />
		</AnimateInGroup>
	);
};
