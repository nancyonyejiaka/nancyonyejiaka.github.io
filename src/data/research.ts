export interface ResearchData {
	title: string;
	description: string[];
	pdf?: string;
}

export const research: ResearchData[] = [
	{
		title:
			"Master\u2019s Project: Automatic Code Refactoring with Large Language Models",
		description: [
			"Engineered a dynamic JavaScript ground truth repository powering LLM-driven code smell detection and automated refactoring, enabling consistent, scalable code quality analysis.",
			"Designed an AI-assisted code review workflow that improved the scalability and consistency of evaluating student submissions, allowing teaching assistants to deliver faster, higher-quality feedback.",
		],
		pdf: "/papers/automatic-code-refactoring.pdf",
	},
	{
		title:
			"Artificial Intelligence in Poker: A Comparative Analysis of Decision-Making Using Search Algorithms",
		description: [
			"Built and benchmarked Expectiminimax, Monte Carlo Tree Search, and Deep Q-Learning agents for Texas Hold\u2019em, outperforming baseline strategies and analyzing decision-making tradeoffs in stochastic environments.",
		],
		pdf: "/papers/ai-in-poker.pdf",
	},
];
