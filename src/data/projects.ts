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
			"No programmatic interface existed for interacting with the recommendation engine—developers and AI agents relied on source code exploration or tribal knowledge to discover endpoints, parameters, and system state.",
		approach:
			"I am building a Model Context Protocol (MCP) server that exposes the recommendation engine as structured tools and resources. This enables AI agents to query strategies, construct valid filter/v2 payloads, inspect live A/B configurations, and retrieve listing metadata through a unified interface.",
		impact:
			"In progress—establishes the foundation for AI-native development workflows, enabling agents like Claude to autonomously debug, test, and iterate on recommendation logic.",
		active: true,
	},
	{
		title: "Vehicle Vibes Recommendation Algorithm",
		slug: "vibes-recommender",
		stack: ["Kotlin", "AWS Bedrock", "Claude", "Lucene HNSW", "PostgreSQL"],
		problem:
			"Attribute-based recommendations failed to capture semantic similarity—users browsing a vehicle were limited to near-identical listings rather than meaningful alternatives.",
		approach:
			"I designed a semantic recommendation system using Claude via AWS Bedrock to classify vehicles across multiple dimensions, encoding each into a 6D vector space. These vectors are indexed in an in-memory Lucene HNSW graph for sub-millisecond nearest-neighbor retrieval across tens of millions of listings.",
		impact:
			"Delivered 80–115ms production latency with 100% Bedrock call success. Generated hundreds of thousands of semantic clusters across tens of millions listings, enabling cross-make and cross-model recommendations beyond traditional filtering.",
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
			"Testing recommendation logic required manual curl requests and raw JSON payloads—slow, error-prone, and inaccessible to non-engineering stakeholders.",
		approach:
			"I built a full-stack internal platform with three interaction modes: raw JSON editing with validation, a schema-driven form builder, and an AI interface (Quorra) that translates natural language into valid filter/v2 requests. The system is backed by a live schema service and deployed via Terraform-managed infrastructure.",
		impact:
			"Adopted as the primary tool for recommendation testing and debugging. Reduced iteration time from minutes to seconds and enabled non-engineers to construct valid queries independently.",
	},
	{
		title: "Stardate Distributed Job System",
		slug: "stardate",
		stack: ["Kotlin", "AWS Batch", "Terraform", "Sentry", "React"],
		problem:
			"Batch jobs ran on unreliable cron infrastructure with no retries, monitoring, or execution guarantees—resulting in duplicate runs, data corruption, and frequent production incidents.",
		approach:
			"I designed and implemented a multi-region job orchestration platform with retry policies, exponential backoff, and Sentry-based monitoring. The system enforces single-instance execution with configurable concurrency and provides a React-based operations console.",
		impact:
			"Eliminated duplicate job incidents and stabilized batch processing. Gave operations full visibility into job health across regions, replacing manual SSH-based workflows.",
	},
	{
		title: "filter/v2 Recommendation DSL",
		slug: "filter-v2",
		stack: ["Kotlin", "PostgreSQL", "Lucene", "http4k"],
		problem:
			"Defining complex recommendation logic required engineering changes, creating bottlenecks for product and personalization teams.",
		approach:
			"I evolved the filter/v2 API into a fully configurable DSL with predicate-based execution, quantifier logic, synthetic personas, and user history filtering. The evaluator parses and executes expressions dynamically at runtime.",
		impact:
			"Enabled teams to define and deploy recommendation strategies without code changes, reducing turnaround from days to minutes. Backed by comprehensive testing suites covering all operators and field types.",
	},
	{
		title: "Persona-Listing Binary Matching Engine",
		slug: "persona-matching",
		stack: ["Kotlin", "BigInteger", "Caffeine Cache", "PostgreSQL"],
		badge: "Patent Pending",
		problem:
			"Matching millions of listings against thousands of personas required O(n×m) comparisons, resulting in 24-hour runtimes—too slow for daily inventory updates.",
		approach:
			"I replaced iterative matching with a bitwise encoding strategy, representing listings and personas as BigIntegers and reducing matching to a single operation using bitwise logic. Cached representations further optimized repeated evaluations.",
		impact:
			"Reduced runtime from 24 hours to ~20 minutes (72x improvement), enabling multiple daily inventory refreshes and significantly increasing system responsiveness.",
	},
];
