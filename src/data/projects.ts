export interface ProjectData {
	title: string;
	slug: string;
	stack: string[];
	problem: string;
	approach: string;
	impact: string;
	active?: boolean;
	badge?: string;
}

export const projects: ProjectData[] = [
	{
		title: "CarGurus Recommendation Engine MCP",
		slug: "reco-mcp",
		stack: ["Kotlin", "MCP", "Claude", "http4k", "PostgreSQL"],
		problem:
			"Developers and AI agents had no programmatic way to interact with the recommendation engine.",
		approach:
			"Building an MCP server that exposes the engine as structured tools, letting AI agents query strategies, construct payloads, and inspect live configurations.",
		impact:
			"Establishes the foundation for AI-native development workflows where agents autonomously debug and iterate on recommendation logic.",
		active: true,
	},
	{
		title: "Vehicle Vibes Recommendation Algorithm",
		slug: "vibes-recommender",
		stack: ["Kotlin", "AWS Bedrock", "Claude", "Lucene HNSW", "PostgreSQL"],
		problem:
			"Attribute-based recommendations only surfaced near-identical listings, missing meaningful alternatives.",
		approach:
			"Used Claude to classify vehicles into semantic dimensions, encoded as vectors and indexed for sub-millisecond nearest-neighbor retrieval.",
		impact:
			"80–115ms production latency across tens of millions of listings. Enabled cross-make and cross-model recommendations beyond traditional filtering.",
	},
	{
		title: "GRID: Graphical Recommendation Interface and Designer",
		slug: "grid",
		stack: [
			"SvelteKit",
			"Kotlin",
			"Terraform",
			"Claude",
			"OpenAI",
			"AWS Lambda",
		],
		problem:
			"Testing recommendations required manual curl requests and raw JSON, which was slow and inaccessible to non-engineers.",
		approach:
			"Built an internal platform with form-based, raw JSON, and AI-powered natural language interfaces for constructing recommendation queries.",
		impact:
			"Became the primary testing and debugging tool. Reduced iteration from minutes to seconds and opened access to non-engineering stakeholders.",
	},
	{
		title: "Stardate Distributed Job System",
		slug: "stardate",
		stack: ["Kotlin", "AWS Batch", "Terraform", "Sentry", "React"],
		problem:
			"Unreliable cron infrastructure caused duplicate runs, data corruption, and frequent production incidents.",
		approach:
			"Built a multi-region job orchestration platform with retries, monitoring, and a React operations console.",
		impact:
			"Eliminated duplicate job incidents and replaced manual SSH workflows with full operational visibility across regions.",
	},
	{
		title: "Recommendation DSL",
		slug: "filter-v2",
		stack: ["Kotlin", "PostgreSQL", "Lucene", "http4k"],
		problem:
			"Defining recommendation logic required engineering changes, bottlenecking product and personalization teams.",
		approach:
			"Designed a configurable DSL that parses and executes recommendation strategies dynamically at runtime.",
		impact:
			"Teams deploy recommendation strategies without code changes. Turnaround dropped from days to minutes.",
	},
	{
		title: "Persona-Listing Binary Matching Engine",
		slug: "persona-matching",
		stack: ["Kotlin", "BigInteger", "Caffeine Cache", "PostgreSQL"],
		badge: "Patent Pending",
		problem:
			"Matching millions of listings against thousands of personas took 24 hours, too slow for daily updates.",
		approach:
			"Replaced iterative comparisons with bitwise encoding, reducing each match to a single operation.",
		impact:
			"72x faster: 24 hours down to ~20 minutes, enabling multiple daily inventory refreshes.",
	},
];
