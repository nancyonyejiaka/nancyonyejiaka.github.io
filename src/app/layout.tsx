import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
	src: [
		{ path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
		{ path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
		{ path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
	],
	variable: "--font-satoshi",
});

const firaCode = localFont({
	src: [
		{ path: "../fonts/FiraCode-Regular.woff2", weight: "400", style: "normal" },
		{ path: "../fonts/FiraCode-Medium.woff2", weight: "500", style: "normal" },
		{
			path: "../fonts/FiraCode-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{ path: "../fonts/FiraCode-Bold.woff2", weight: "700", style: "normal" },
	],
	variable: "--font-fira",
});

export const metadata: Metadata = {
	title: "Nancy Onyejiaka — Software Engineer",
	description:
		"Software engineer building scalable systems across backend, data, and AI. Experience with distributed systems, high-performance infrastructure, and production-ready applications. Kotlin, TypeScript, AWS.",
	openGraph: {
		title: "Nancy Onyejiaka — Software Engineer",
		description:
			"Software engineer building scalable systems across backend, data, and AI, with experience in distributed systems and high-performance infrastructure.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${satoshi.variable} ${firaCode.variable}`}
			suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.png" type="image/png" />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
					}}
				/>
			</head>
			<body className="min-h-screen antialiased">{children}</body>
		</html>
	);
}
