import { WarningCircleIcon } from "@phosphor-icons/react";
import { ErrorState01 } from "./error-state-01";

export function ErrorState01PageDemo() {
	return (
		<ErrorState01
			icon={<WarningCircleIcon size={28} />}
			title="Something went wrong"
			message="An unexpected error occurred. Please try again or contact support if the problem persists."
			onRetry={() => {}}
			secondaryAction={{ label: "Go home", onClick: () => {} }}
			error={
				new Error(
					"Failed to fetch user data: Network request timed out after 30s",
				)
			}
		/>
	);
}

export function ErrorState01CardDemo() {
	return (
		<ErrorState01
			icon={<WarningCircleIcon size={28} />}
			title="Failed to load data"
			message="Unable to fetch the requested information."
			onRetry={() => {}}
			variant="card"
		/>
	);
}

export function ErrorState01ToastDemo() {
	return (
		<ErrorState01
			icon={<WarningCircleIcon size={20} />}
			title="Upload failed"
			message="The file could not be uploaded. Please check your connection."
			onRetry={() => {}}
			variant="toast"
		/>
	);
}
