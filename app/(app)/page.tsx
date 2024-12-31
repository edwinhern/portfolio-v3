"use client";

import { Link, buttonStyles } from "@/components/ui";
import { IconArrowUpRight } from "justd-icons";

export default function Home() {
	return (
		<div className="flex flex-col gap-16 md:gap-24">
			<div className="flex flex-col gap-8">
				<div className="space-y-4">
					<h1 className="animate-in font-semibold text-3xl text-primary tracking-tight">hey, Edwin here!</h1>
					<p className="max-w-lg animate-in text-muted-fg" style={{ "--index": 1 } as React.CSSProperties}>
						I&apos;m a software engineer in Dallas, TX building for the web with a design-first mindset. On
						the side, I create{" "}
						<Link intent="primary" href="https://youtube.com/@edwinhern">
							YouTube
						</Link>{" "}
						videos about tech and productivity.
					</p>
				</div>

				<div className="flex animate-in gap-3 text-sm" style={{ "--index": 2 } as React.CSSProperties}>
					<Link
						className={buttonStyles({ intent: "primary", size: "small" })}
						href="https://github.com/edwinhern"
						target="_blank"
					>
						Github
						<IconArrowUpRight className="h-4 w-4 text-tertiary" />
					</Link>
					<Link
						className={buttonStyles({ intent: "primary", size: "small" })}
						href="https://linkedin.com/in/edwinhern"
						target="_blank"
					>
						LinkedIn
						<IconArrowUpRight className="h-4 w-4 text-tertiary" />
					</Link>

					<Link
						className={buttonStyles({ intent: "primary", size: "small" })}
						href="mailto:edwinhern.16@gmail.com"
					>
						Collab
						<IconArrowUpRight className="h-4 w-4 text-tertiary" />
					</Link>
				</div>
			</div>
		</div>
	);
}
