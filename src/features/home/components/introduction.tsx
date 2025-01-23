import Link from "next/link";

export const Introduction: React.FC = () => {
	return (
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
				<span className="font-semibold">React</span>, and <span className="font-semibold">TypeScript</span> for
				the frontend and <span className="font-semibold">Java</span> for the backend.
			</p>
			<p className="font-light">
				I currently work as a <span className="font-semibold">Software Engineer</span> at{" "}
				<span className="font-semibold">Motorola Solutions</span>.
			</p>
		</div>
	);
};
