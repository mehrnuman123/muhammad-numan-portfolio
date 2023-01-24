import emoji from "react-easy-emoji";

export const greetings = {
	name: "Muhammad Numan",
	title: "Hi all, I'm Numan",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with React js, Node js, Nest js, Angular js, express js and TypeScript",
	resumeLink:
		"https://drive.google.com/file/d/1wOFI44EtGkylPpKOa04LY68mmA0cVsQ8/view?usp=share_link",
};

export const openSource = {
	githubUserName: "mhern-numan",
};

export const contact = {};

export const socialLinks = {
	url: "https://github.com/mehrnuman123",
	linkedin: "https://www.linkedin.com/in/mhern-3758ba188/",
	github: "https://github.com/mehrnuman123",
	instagram: "https://www.instagram.com/mehrnuman777",
	facebook: "",
	twitter: "",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building full stack applications using MEAN and MERN stack"
				),
				emoji("⚡ Designing user infterfaces using view libraries like Bootstrapp and Material ui "),
				emoji(
					"⚡ Building RESTful APIs in Node js"
				),
			],
			softwareSkills: [
				{
					skillName: "Java",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "Typescript",
					fontAwesomeClassname: "vscode-icons:file-type-typescript",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Next",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "University of South Asia",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2017 - June 2021",
		desc: "Major in Software development and Artificial Intelligence",
		grade: "Grade B",
		descBullets: [
		],
	},
];

export const experience = [
	{
		role: "Associate Software Engineer",
		company: "OptimaGeeks",
		companylogo: "/img/icons/common/optimaGeeks.png",
		date: "Aug 2022 – present",
		desc: "I have been working as MEAN and MERN stack developer.",
	},
	{
		role: "Junior Software Engineer",
		company: "Devflovv",
		companylogo: "/img/icons/common/devflovv.jpg",
		date: "Feb 2022 – April 2022",
		desc: "Coordinated with backend developers and integrated RestfulAPI’s with frontend. Worked with team of senior developers from Canada. Worked on platform called “Augmentt” which manages and secure SaaS applications.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full stack Internee",
		company: "SpyreSync",
		companylogo: "/img/icons/common/spyreSync.png",
		date: "Nov 2021 - Feb 2022",
		desc: "Joined software industry and started learning JavaScript and other web technologies. Learned Best coding practices and standards to ensure software quality. Learned popular frameworks and libraries like React, Node and Express js",
	},
];

export const projects = [
	{
		name: "Kartedia Application",
		desc: "Online Platform to design and buy tempplates for institutes and organiztion to print cards in bulk.This is role base systems comes with full fledge Template Editor Like Photoshop and Chat between users of same institute",
		github: "",
		link: "https://drive.google.com/file/d/14VK9wh6UJcfB6JJZnVivTTDe5OPHXlw1/view?usp=share_link",
	},
	{
		name: "Augmentt",
		desc: "Augmentt helps MSPs uncover Shadow IT, manage their customer’s Microsoft 365 & Google Workspace cloud apps, and enforce security policies to prevent security breaches.",
		link: "https://www.augmentt.com ",
	},
	{
		name: "Parserr",
		desc: "Parserr is an email data parsing tool that takes features above and beyond.",
		link: "https://parserr.com",
	},
	{
		name: "Shopit",
		desc: "Full fledge e-commerce application including payment method.",
		github: "https://github.com/mehrnuman123",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Muhammad Numan",
	description:
		"A passionate Full Stack Web Developer and Mobile Application developer",
	author: "Muhammad Numan",
	image: "",
	url: "",
	keywords: [
		"muhammad Noman",
		"mehrnuman",
		"Full stack developer",
		"MEAN and MERN stack developer",
	],
}
