import { SocialMedia } from "./social-media";

export const Introduction: React.FC = () => {
	return (
		<div className="space-y-4">
			<h1 className="font-bold text-primary text-xl">Welcome!</h1>
			<p className="font-light leading-relaxed">
				I build products for the web, optimize the systems that run them, and use AI to go faster at both. Currently at
				Liberty Mutual. On the side, I run a self-hosted server for apps, AI models, and tools I want to exist.
			</p>
			<SocialMedia />
		</div>
	);
};
