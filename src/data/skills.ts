// IDE color preview companions
export const themeColors = {
	keyword: "#B580F2",
	string: "#6CD4FF",
	function: "#9AE8C9",
} as const;

export interface SkillRowData {
	items: string[];
	direction: "left" | "right";
	duration: number;
	colorVar: string;
}

export const skillRows: SkillRowData[] = [
	{
		items: [
			"Kotlin",
			"Java",
			"Python",
			"TypeScript",
			"JavaScript",
			"Svelte",
			"Ruby",
			"PostgreSQL",
			"MySQL",
			"MongoDB",
		],
		direction: "left",
		duration: 30,
		colorVar: themeColors.keyword,
	},
	{
		items: [
			"AWS Bedrock",
			"AWS Batch",
			"Lambda",
			"S3",
			"DynamoDB",
			"IAM",
			"SSM",
			"Route53",
			"CloudWatch",
			"Terraform",
			"Docker",
			"Claude Code",
			"OpenAI API",
			"Gemini",
		],
		direction: "right",
		duration: 35,
		colorVar: themeColors.string,
	},
	{
		items: [
			"Apache Lucene",
			"Redis",
			"Flyway",
			"Ktorm",
			"SvelteKit",
			"Node.js",
			"http4k",
			"Koin",
			"Gradle",
			"JUnit 5",
			"Git",
			"TeamCity",
			"Sentry",
		],
		direction: "left",
		duration: 28,
		colorVar: themeColors.function,
	},
];
