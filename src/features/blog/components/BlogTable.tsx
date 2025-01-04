"use client";

import { Table } from "@/components/ui";
import type { getBlogPosts } from "@/features/blog/blog.utils";
import { useMemo } from "react";
import type { ColumnProps } from "react-aria-components";

interface BlogTableProps {
	posts: Awaited<ReturnType<typeof getBlogPosts>>;
}

export const BlogTable = ({ posts }: BlogTableProps) => {
	const columns = useMemo(() => {
		return [
			{ id: "year", label: "Year", width: "10%", justify: "justify-start" },
			{ id: "date", label: "Date", width: "12%", justify: "justify-start" },
			{ id: "title", label: "Title", width: "63%", isRowHeader: true, justify: "justify-start" },
			{ id: "views", label: "Views", width: "15%", justify: "justify-end" },
		];
	}, []) satisfies ColumnProps[];

	return (
		<Table aria-label="blog posts">
			<Table.Header columns={columns}>
				{(column) => <Table.Column {...column}>{column.label}</Table.Column>}
			</Table.Header>
			<Table.Body items={posts}>
				{(item) => (
					<Table.Row
						key={item.id}
						href={`/blog/${item.slug}`}
						className="cursor-pointer transition-colors hover:bg-secondary/10"
					>
						<Table.Cell className="py-4">{new Date(item.date).getFullYear()}</Table.Cell>
						<Table.Cell className="py-4">
							{new Date(item.date)
								.toLocaleDateString("en-US", {
									day: "2-digit",
									month: "2-digit",
								})
								.replace(/\//g, "/")}
						</Table.Cell>
						<Table.Cell className="py-4">{item.title}</Table.Cell>
						<Table.Cell className="py-4 text-end">{item.views.toLocaleString()}</Table.Cell>
					</Table.Row>
				)}
			</Table.Body>
		</Table>
	);
};
