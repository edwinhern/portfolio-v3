"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { IconBrandVercel, IconFileText, IconGlobe, IconWindow } from "justd-icons";
import Image from "next/image";
import { Button, Heading, Link, buttonStyles } from "ui";

export default function Home() {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
				<Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} />
				<ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
					<li className="mb-2">Get started by editing .</li>
					<li>Save and see your changes instantly.</li>
				</ol>

				<div className="flex flex-col items-center gap-4 sm:flex-row">
					<Button>
						<IconBrandVercel />
						Deploy now
					</Button>
					<Button appearance="plain">Read our docs</Button>
				</div>

				<div className="space-y-2">
					<Heading>The quick brown fox jumps over the lazy dog</Heading>
					<Heading level={2}>The quick brown fox jumps over the lazy dog</Heading>
					<Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
					<Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
				</div>

				<ThemeSwitcher />
			</main>

			<footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
				<Link
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className={buttonStyles({ intent: "primary" })}
				>
					<IconFileText />
					Learn
				</Link>

				<Link
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className={buttonStyles({ intent: "primary" })}
				>
					<IconWindow />
					Examples
				</Link>

				<Link
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className={buttonStyles({ intent: "primary" })}
				>
					<IconGlobe />
					Next.js
				</Link>
			</footer>
		</div>
	);
}
