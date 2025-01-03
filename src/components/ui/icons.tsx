type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	Logo: (props: IconProps) => (
		<svg
			width="1951"
			height="1803"
			viewBox="0 0 1951 1803"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<ellipse cx="568.5" cy="1241" rx="568.5" ry="562" fill="#FF0000" />
			<ellipse cx="1382.5" cy="1241" rx="568.5" ry="562" fill="#0F0F0F" fillOpacity="0.55" />
			<ellipse cx="985.5" cy="562" rx="568.5" ry="562" fill="#272727" />
		</svg>
	),
};
