import { IconCircleInfo, IconTriangleExclamation } from "justd-icons";
import type { ReactNode } from "react";

interface AlertProps {
	children: ReactNode;
	type: "warning" | "info";
}

const Alert = ({ children, type }: AlertProps) => (
	<div className="mt-7 flex gap-2 rounded-md border border-secondary p-4 text-tertiary">
		<div className="w-fit">
			{type === "warning" ? (
				<IconTriangleExclamation className="h-5 w-5" />
			) : (
				<IconCircleInfo className="h-5 w-5" />
			)}
		</div>
		<div className="not-prose text-sm">{children}</div>
	</div>
);

export default Alert;
