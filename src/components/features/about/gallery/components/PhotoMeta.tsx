// import Halo from "@/components/common/Halo";
import clsx from "clsx";
import localFont from "next/font/local";

// const ticketingFont = localFont({
// 	src: "../../../../../public/ticketing.woff2",
// 	display: "swap",
// });

interface PhotoMetaProps {
	fileName: string;
	meta?: React.ReactNode;
}

export function PhotoMeta({ fileName, meta }: Readonly<PhotoMetaProps>) {
	return (
		<div className="flex items-center">
			<span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[length:280px] bg-[url('/photopaper.png')] bg-repeat" />
			<div className="z-[1] px-6">
				<div className={clsx("flex flex-col gap-1 uppercase")}>
					<p className="text-secondary">{fileName}</p>
					{meta && <p className="text-secondary text-sm">{meta}</p>}
				</div>
			</div>
		</div>
	);
}
