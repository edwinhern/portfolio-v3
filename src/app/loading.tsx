function WorkSkeleton() {
	return (
		<div className="flex items-center gap-4">
			<div className="size-12 rounded-md bg-muted" />
			<div className="flex-1 space-y-2">
				<div className="h-4 w-40 rounded bg-muted" />
				<div className="h-3 w-24 rounded bg-muted" />
			</div>
		</div>
	);
}

function ProjectSkeleton() {
	return (
		<div className="space-y-2">
			<div className="h-4 w-48 rounded bg-muted" />
			<div className="h-3 w-full max-w-sm rounded bg-muted" />
		</div>
	);
}

export default function Loading() {
	return (
		<div className="flex animate-pulse flex-col space-y-12 md:space-y-24">
			<div className="space-y-4">
				<div className="h-8 w-32 rounded bg-muted" />
				<div className="h-4 w-full max-w-md rounded bg-muted" />
				<div className="h-4 w-3/4 max-w-md rounded bg-muted" />
				<div className="flex gap-4 pt-2">
					<div className="h-10 w-24 rounded-md bg-muted" />
					<div className="h-10 w-24 rounded-md bg-muted" />
					<div className="h-10 w-24 rounded-md bg-muted" />
				</div>
			</div>
			<div className="space-y-12 md:space-y-24">
				<div className="space-y-4">
					<div className="h-6 w-20 rounded bg-muted" />
					<div className="space-y-3">
						<WorkSkeleton />
						<WorkSkeleton />
						<WorkSkeleton />
					</div>
				</div>
				<div className="space-y-4">
					<div className="h-6 w-24 rounded bg-muted" />
					<div className="space-y-6">
						<ProjectSkeleton />
						<ProjectSkeleton />
						<ProjectSkeleton />
					</div>
				</div>
			</div>
		</div>
	);
}
