import Link from "next/link";

import { AnimateInGroup } from "@/ui/animate-in";
import { SocialMedia } from "./social-media";

export const Introduction: React.FC = () => {
	return (
		<AnimateInGroup className="space-y-4">
			<h1 className="font-bold text-primary text-xl">Welcome!</h1>
			<p className="font-light leading-relaxed">
				I build products for the web, optimize the systems that run them, and use AI to go faster at both. Currently at
				Liberty Mutual. On the side, I run a{" "}
				<Link
					className="link"
					href="https://hernserver.com/"
					target="_blank"
					rel="noreferrer"
					aria-label="Hernandez Server"
				>
					self-hosted server
				</Link>{" "}
				for apps, AI models, and tools I want to exist.
			</p>
			<SocialMedia />
		</AnimateInGroup>
	);
};
