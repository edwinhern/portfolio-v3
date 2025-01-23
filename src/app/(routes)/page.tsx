import { buttonVariants } from "@/components/ui/button";
import { IconArrowUpRight } from "justd-icons";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col gap-4">
			<div className="space-y-4">
				<h1 className="font-light text-muted-foreground">Welcome!</h1>
				<p className="font-light">
					I&apos;m a software engineer in Dallas, TX building for the web with a design-first mindset. On the
					side, I create{" "}
					<Link className="text-primary underline" href="https://youtube.com/@edwinhern">
						YouTube
					</Link>{" "}
					videos about tech and productivity.
				</p>

				<p className="font-light">
					My favorite tech stack for building apps is <span className="font-semibold">Next.js</span>,{" "}
					<span className="font-semibold">React</span>, and <span className="font-semibold">TypeScript</span>{" "}
					for the frontend and <span className="font-semibold">Java</span> for the backend.
				</p>
				<p className="font-light">
					I currently work as a <span className="font-semibold">Software Engineer</span> at{" "}
					<span className="font-semibold">Motorola Solutions</span>.
				</p>
			</div>

			<div className="flex gap-3">
				<Link
					className={buttonVariants({ variant: "outline" })}
					href="https://github.com/edwinhern"
					target="_blank"
					aria-label="Github"
				>
					Github
					<IconArrowUpRight className="size-4 text-tertiary" />
				</Link>
				<Link
					className={buttonVariants({ variant: "outline" })}
					href="https://linkedin.com/in/edwinhern"
					target="_blank"
					aria-label="LinkedIn"
				>
					LinkedIn
					<IconArrowUpRight className="h-4 w-4" />
				</Link>

				<Link className={buttonVariants({ variant: "outline" })} href="mailto:edwinhern.16@gmail.com">
					Collab
					<IconArrowUpRight className="h-4 w-4 text-tertiary" />
				</Link>
			</div>
		</div>
	);
}
