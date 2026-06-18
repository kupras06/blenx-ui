import { EmptyState01 } from "./empty-state-01";
import { FolderOpenIcon } from "@phosphor-icons/react";

export function EmptyState01Demo() {
	return (
		<EmptyState01
			icon={<FolderOpenIcon size={28} />}
			title="No documents yet"
			description="Get started by creating your first document. It will appear here once created."
			action={{ label: "Create document", handleClick: () => {} }}
			secondaryAction={{ label: "Learn more", handleClick: () => {} }}
		/>
	);
}
