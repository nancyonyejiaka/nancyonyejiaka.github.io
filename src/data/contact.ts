export interface ContactLink {
	label: string;
	href: string;
	icon: "email" | "linkedin";
	variant: "primary" | "outline";
}

export const contactHeading = "Let\u2019s connect";

export const contactDescription =
	"I\u2019m focused on backend engineering, infrastructure, data, and AI engineering roles where I can build and operate systems at scale, and integrate AI into reliable, high-impact systems. I\u2019m especially interested in teams tackling complex, high-scale problems.";

export const contactLinks: ContactLink[] = [
	{
		label: "Email me",
		href: "mailto:onyejiaka.n@northeastern.edu",
		icon: "email",
		variant: "primary",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/nancyonyejiaka",
		icon: "linkedin",
		variant: "outline",
	},
];
