import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import {
	Box,
	Grid,
	Separator,
	Table,
	Text,
	VStack,
} from "@blenx-dev/ui/components";;
import { CodeBlock } from "@/components/ui/CodeBlock/code-block";	
export const Route = createFileRoute("/docs/components/data-table")({
	component: DataTableDoc,
});

const FEATURES = [
	{
		title: "Sorting",
		desc: "Single or multi-column sort with ascending/descending indicators",
	},
	{
		title: "Global Search",
		desc: "Client or server-side search across all columns",
	},
	{
		title: "Pagination",
		desc: "Page navigation with smart ellipsis and configurable page size",
	},
	{
		title: "Column Visibility",
		desc: "Toggle column visibility via a dropdown menu",
	},
	{
		title: "Row Selection",
		desc: "Checkbox-based single or multi-row selection",
	},
	{
		title: "Column Resizing",
		desc: "Drag-to-resize column widths",
	},
	{
		title: "Column Pinning",
		desc: "Pin columns to the left or right side",
	},
	{
		title: "Sticky Header",
		desc: "Fixed header that remains visible while scrolling",
	},
	{
		title: "Row Actions",
		desc: "Per-row action buttons (edit, delete, etc.)",
	},
	{
		title: "Bulk Actions",
		desc: "Actions on selected rows (delete, export, etc.)",
	},
	{
		title: "Skeleton Loading",
		desc: "Animated placeholder while data loads",
	},
	{
		title: "Empty & Error States",
		desc: "Built-in empty and error states with custom slot overrides",
	},
	{
		title: "Infinite Scroll",
		desc: "Auto or manual infinite loading with IntersectionObserver",
	},
	{
		title: "Server Mode",
		desc: "Manual pagination, sorting, and filtering for server-backed tables",
	},
];

const PROPS = [
	[
		"columns",
		"ColumnDef<TData, unknown>[]",
		"Column definitions from @tanstack/react-table",
	],
	["data", "TData[] | undefined", "Table data array"],
	["mode", '"client" | "server" | "infinite"', "Defaults to client"],
	["isLoading", "boolean", "Show skeleton loader"],
	["isFetching", "boolean", "Show fetching indicator bar"],
	["isError", "boolean", "Show error state"],
	["errorMessage", "string", "Custom error message"],
	["pageCount", "number", "Total pages for server mode"],
	[
		"fetchNextPage",
		"() => void",
		"Function to fetch next page (infinite mode)",
	],
	["hasNextPage", "boolean", "Whether more pages exist (infinite mode)"],
	[
		"isFetchingNextPage",
		"boolean",
		"Loading state for next page (infinite mode)",
	],
	["features", "TableFeatures", "Enable/disable specific features"],
	["size", '"sm" | "md" | "lg"', "Row density"],
	["infiniteScroll", "InfiniteScrollConfig", "Infinite scroll configuration"],
	["columnPinning", "ColumnPinningOptions", "Columns to pin left/right"],
	[
		"slots",
		"TableSlots<TData>",
		"Custom nodes for toolbar, pagination, empty, loading, error",
	],
	["rowActions", "RowAction<TData>[]", "Per-row action definitions"],
	["initialSorting", "SortingState", "Initial sort state"],
	[
		"initialPagination",
		"PaginationState",
		"Initial pagination (pageIndex, pageSize)",
	],
	["initialColumnFilters", "ColumnFiltersState", "Initial column filters"],
	["initialGlobalFilter", "string", "Initial global search value"],
	["initialColumnVisibility", "VisibilityState", "Initial column visibility"],
	["initialRowSelection", "RowSelectionState", "Initial row selection"],
	[
		"callbacks",
		"TableCallbacks<TData>",
		"State change and row click callbacks",
	],
	[
		"tableOptions",
		"Partial<TableOptions<TData>>",
		"Passed directly to useReactTable",
	],
];

const FEATURE_KEYS = [
	["sorting", "Single/multi-column sort with sort direction indicators"],
	["globalSearch", "Client or server-side text search"],
	["pagination", "Page controls with smart ellipsis"],
	["columnVisibility", "Dropdown to show/hide columns"],
	["rowSelection", "Checkbox-based row selection"],
	["columnResizing", "Drag-to-resize columns"],
	["columnPinning", "Pin columns left or right"],
	["stickyHeader", "Header stays visible on scroll"],
	["rowActions", "Action buttons per row"],
	["bulkActions", "Actions on selected rows"],
];

const SHADCN_ADD_CODE = "npx shadcn@latest add data-table";
const TANSTACK_INSTALL_CODE = "npm install @tanstack/react-table";

const QUICK_START_CODE = `import { DataTable } from "@blenx-dev/ui/components";
import { createColumnHelper } from "@tanstack/react-table"

interface User {
  name: string
  email: string
  role: string
}

const columns = [
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("role", { header: "Role" }),
]

function UsersPage() {
  const { data, isLoading } = useQuery(...)

  return (
    <DataTable
      columns={columns}
      data={data ?? []}
      isLoading={isLoading}
      features={{ sorting: true, pagination: true }}
    />
  )
}`;

const SERVER_MODE_CODE = `function ServerTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0, pageSize: 10,
  })

  const { data, isLoading } = useQuery({
    queryKey: ["users", sorting, pagination],
    queryFn: () => fetchUsers({ sorting, pagination }),
  })

  return (
    <DataTable
      mode="server"
      columns={columns}
      data={data?.rows ?? []}
      pageCount={data?.pageCount}
      isLoading={isLoading}
      callbacks={{
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
      }}
    />
  )
}`;

const INFINITE_MODE_CODE = `function InfiniteTable() {
  const { data, fetchNextPage, hasNextPage,
          isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: ({ pageParam }) => fetchUsers(pageParam),
      initialPageParam: 0,
      getNextPageParam: (last) => last.nextCursor,
    })

  const flatData = useMemo(
    () => data?.pages.flatMap((p) => p.rows) ?? [],
    [data],
  )

  return (
    <DataTable
      mode="infinite"
      columns={columns}
      data={flatData}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      infiniteScroll={{ mode: "auto" }}
    />
  )
}`;

const CUSTOM_SLOTS_CODE = `function CustomTable() {
  const { data } = useQuery(...)

  return (
    <DataTable
      columns={columns}
      data={data}
      slots={{
        empty: <YourEmptyState />,
        loading: <YourSkeleton />,
        error: <YourErrorState />,
        toolbar: <CustomToolbar />,
        pagination: <CustomPagination />,
      }}
    />
  )
}`;

const ROW_ACTIONS_CODE = `function ActionsTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      features={{ rowActions: true }}
      rowActions={[
        {
          label: "Edit",
          icon: <PencilIcon />,
          onClick: (row) => editUser(row.id),
        },
        {
          label: "Delete",
          icon: <TrashIcon />,
          onClick: (row) => deleteUser(row.id),
          variant: "destructive",
          disabled: (row) => row.status === "archived",
        },
      ]}
    />
  )
}`;

function DataTableDoc() {
	return (
		<VStack>
			{/* ─── Header ───────────────────────────────────────── */}
			<VStack gap="small">
				<DocHeading variant="h1" title="DataTable" />
				<Text variant="body2" color="secondary">
					A feature-rich data table built on TanStack Table with sorting,
					pagination, selection, column visibility, resizing, pinning, infinite
					scroll, and server-side support.
				</Text>
			</VStack>

			<Separator tone="subtle" />

			{/* ─── Features Grid ──────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Features" />
				<Grid columns={5}>
					{FEATURES.map((f) => (
						<Box key={f.title} withBorder padding="medium">
							<Text variant="h6">{f.title}</Text>
							<Text variant="body2" color="secondary">
								{f.desc}
							</Text>
						</Box>
					))}
				</Grid>
			</Box>

			<Separator tone="subtle" />

			{/* ─── Installation ────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Installation" />
				<Text>
					Add the DataTable component and its sub-components via the shadcn CLI:
				</Text>
				<CodeBlock language="bash" code={SHADCN_ADD_CODE} />
				<Text>You also need TanStack Table as a peer dependency:</Text>
				<CodeBlock language="bash" code={TANSTACK_INSTALL_CODE} />
			</Box>

			<Separator tone="subtle" />

			{/* ─── Quick Start ──────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Quick Start" />
				<Text>Basic client-side table with sorting and pagination:</Text>
				<CodeBlock code={QUICK_START_CODE} />
			</Box>
			<Separator tone="subtle" />

			{/* ─── Props ──────────────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Props" />
				<Table
					color="secondary"
					columnData={[
						{
							key: "props",
							header: "Props",
						},
						{
							key: "type",
							header: "Type",
						},
						{
							key: "description",
							header: "Description",
						},
					]}
					rowData={PROPS.map(([prop, type, desc]) => ({
						props: prop,
						type,
						description: desc,
					}))}
				/>
			</Box>

			{/* ─── Modes ──────────────────────────────────────────────── */}
			<VStack>
				<DocHeading variant="h2" title="Modes" />

				<DocHeading variant="h3" title="Client Mode" />
				<Text>
					All data is loaded upfront. Pagination, sorting, and filtering happen
					entirely on the client. This is the default mode.
				</Text>

				<DocHeading variant="h3" title="Server Mode" />
				<Text>
					Pagination, sorting, and filtering callbacks fire so you can fetch
					data from an API. Pass <Text variant="code">mode="server"</Text> and
					provide <Text variant="code">pageCount</Text>. Use the{" "}
					<Text variant="code">callbacks</Text> prop to handle state changes:
				</Text>
				<CodeBlock code={SERVER_MODE_CODE} />

				<DocHeading variant="h3" title="Infinite Mode" />
				<Text>
					Uses TanStack Query's <Text variant="code">useInfiniteQuery</Text> to
					append pages as the user scrolls. Supports auto (IntersectionObserver)
					and manual ("Load more" button) modes:
				</Text>
				<CodeBlock code={INFINITE_MODE_CODE} />
			</VStack>

			<Separator tone="subtle" />

			{/* ─── Features Config ─────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Feature Flags" />
				<Text>
					Use the <Text variant="code">features</Text> prop to toggle individual
					features. All default to <Text variant="code">false</Text> except
					sorting, global search, pagination, and column visibility which
					default to <Text variant="code">true</Text>:
				</Text>
				<Table
					columnData={[
						{ key: "flag", header: "Flag" },
						{ key: "default", header: "Default" },
						{ key: "description", header: "Description" },
					]}
					rowData={FEATURE_KEYS.map(([key, desc]) => ({
						flag: key,
						default:
							key === "sorting" ||
							key === "globalSearch" ||
							key === "pagination" ||
							key === "columnVisibility"
								? "true"
								: "false",
						description: desc,
					}))}
				/>
			</Box>

			<Separator tone="subtle" />

			{/* ─── Sub-components ─────────────────────────────────────── */}
			<Box>
				<Box marginY="medium">
					<DocHeading variant="h2" title="Sub-components" />
					<Text variant="body3">
						DataTable is composed of several sub-components that handle
						different features. Most render automatically when the corresponding
						feature flag is enabled, but you can also replace them via the{" "}
						<Text variant="code">slots</Text> prop.
					</Text>
				</Box>

				<Grid>
					<Box>
						<Text variant="h6">DataTableToolbar</Text>
						<Text variant="body2" color="secondary">
							Global search input, column visibility toggle, and bulk action
							buttons. Renders automatically when features are enabled.
						</Text>
					</Box>
					<Box>
						<Text variant="h6">DataTablePagination</Text>
						<Text variant="body2" color="secondary">
							Page navigation with previous/next, page numbers with ellipsis,
							and result count. Renders automatically in client mode.
						</Text>
					</Box>
					<Box>
						<Text variant="h6">DataTableColumnToggle</Text>
						<Text variant="body2" color="secondary">
							Dropdown menu for toggling column visibility by name.
						</Text>
					</Box>
					<Box>
						<Text variant="h6">DataTableEmpty</Text>
						<Text variant="body2" color="secondary">
							Empty state shown when no rows match. Override via{" "}
							<Text variant="code">slots.empty</Text>.
						</Text>
					</Box>
					<Box>
						<Text variant="h6">DataTableLoading</Text>
						<Text variant="body2" color="secondary">
							Skeleton placeholder rows shown during initial load. Override via{" "}
							<Text variant="code">slots.loading</Text>.
						</Text>
					</Box>
					<Box>
						<Text variant="h6">DataTableError</Text>
						<Text variant="body2" color="secondary">
							Error state with retry button. Override via{" "}
							<Text variant="code">slots.error</Text>.
						</Text>
					</Box>
					<Box>
						<Text variant="h6">DataTableInfiniteLoader</Text>
						<Text variant="body2" color="secondary">
							Auto (IntersectionObserver) or manual "Load more" infinite scroll
							footer. Renders automatically in infinite mode.
						</Text>
					</Box>
				</Grid>
			</Box>
			<Separator tone="subtle" />

			{/* ─── Custom Slots ─────────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Custom Slots" />
				<Text>
					Override any built-in state component using the{" "}
					<Text variant="code">slots</Text> prop:
				</Text>
				<CodeBlock code={CUSTOM_SLOTS_CODE} />
			</Box>

			<Separator tone="subtle" />

			{/* ─── Row Actions ──────────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Row Actions" />
				<Text>
					Define per-row action buttons with optional icons and disabled state:
				</Text>
				<CodeBlock code={ROW_ACTIONS_CODE} />
			</Box>

			<Separator tone="subtle" />

			{/* ─── Sizes ─────────────────────────────────────────────────── */}
			<Box>
				<DocHeading variant="h2" title="Sizes" />
				<Text>
					Three density options via the <Text variant="code">size</Text> prop:
				</Text>
				<VStack gap="xxsmall" render={<ul />}>
					<li>
						<Text>
							<Text variant="code">sm</Text> — Compact. Best for dense data
							(36px rows, smaller padding).
						</Text>
					</li>
					<li>
						<Text>
							<Text variant="code">md</Text> — Default. Standard density.
						</Text>
					</li>
					<li>
						<Text>
							<Text variant="code">lg</Text> — Comfortable. More whitespace
							(60px rows, larger padding).
						</Text>
					</li>
				</VStack>
			</Box>
		</VStack>
	);
}
