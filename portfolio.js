import emoji from "react-easy-emoji";

export const greetings = {
	name: "Muhammad Numan",
	title: "Hi all, I'm Numan",
	description:
		"I'm passionate Full Stack developer having hands on experience of developing applications using Java, JavaScript, TypeScript, React js, Node js, Nest js, Angular js and express js",
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
		"PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				"⚡ Building full stack applications using MEAN and MERN stack.",
				"⚡ Mobile application development using Java & React-native.",
				"⚡ Designing user infterfaces using view libraries like Bootstrapp, tailwind and Material ui.",
				"⚡ Building RESTful APIs in Node js.",
				"⚡ Database Management with SQL, TypeOrm, Sequelize.",
				,
			],
			softwareSkills: [
				{
					skillName: "Java",
					fontAwesomeClassname: "vscode-icons:file-type-java",
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
					skillName: "Angular",
					fontAwesomeClassname: "logos:angular",
				},
				{
					skillName: "Node",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Nest",
					fontAwesomeClassname: "vscode-icons:file-type-nestjs",
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
				"⚡ Experience of working on multiple cloud platforms",

				"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				,

				"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				,
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
		desc: "I have been working as full stack engineer. Developing and designing applications using various technologies.",
	},
	{
		role: "Junior Software Engineer",
		company: "Devflovv",
		companylogo: "/img/icons/common/devflovv.jpg",
		date: "Feb 2022 – April 2022",
		desc: "Coordinated with backend developers and integrated Restful API’s with frontend. Got experience with React and bootstrap. Worked on platform called “Augmentt” which manages and secure SaaS applications.",
		// descBullets: [F
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Mern stack Internee",
		company: "SpyreSync",
		companylogo: "/img/icons/common/spyreSync.png",
		date: "Nov 2021 - Feb 2022",
		desc: "Joined software industry and started learning JavaScript and other web technologies. Learned best coding practices and standards to ensure software quality. Learned popular frameworks and libraries like React, Node and Express js",
	},
];

export const projects = [
	{
		name: "Kartedia Application",
		desc: "Online plfatform for companies and oraganizations to buy and design templates, flyers, banners and cards. Core modules are template editor, chat application, projects and store. Organization need to register through subscription plan and they can design cards using template editor or buy templates avaible in store. Admin of the institute can print hundreds of records by just one click using their template.",
		github: "",
		link: "https://drive.google.com/file/d/14VK9wh6UJcfB6JJZnVivTTDe5OPHXlw1/view?usp=share_link",
	},
	{
		name: "Visual impaired Assistance (Android)",
		desc: "It is a platform that focuses bringing sight to visually impaired and low vision people by turning the visual world into an audible experience.By utilizing computer vision technology user with low vision or visually impaired can see the objects which is close to him and can be accessed easily.",
		github: "https://github.com/mehrnuman123",
	},
	{
		name: "McGrath (Real estate agent)",
		desc: "McGrath is Real Estate agent application for Sales, Investments, Rentals and Property Management, and boast an enviable reputation as ‘the agent you can recommend’.",
		github: "",
		link: "https://www.mcgrathgroup.com.au/",
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
		name: "Employment Law Alliance",
		desc: "The Employment Law Alliance (ELA) is your global partner for HR Legal Solutions wherever you do business.",
		link: "https://www.ela.law/",
	},
	{
		name: "Shopit",
		desc: "Full fledge e-commerce application including payment method.",
		github: "https://github.com/mehrnuman123",
	},
	{
		name: "Paksitan Tourist Guid (Android)",
		desc: "Android application to promote tourism in pakistan. It contain all the necessery information require for tourist.",
		github: "https://github.com/mehrnuman123",
	},
];

export const feedbacks = [
	{
		name: "Mike W",
		feedback: "It was really amazing to work with him, He is a highly understanding human being. Looking forward to future projects.",
	},
	{
		name: "Shawn T",
		feedback: "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Muhammad Numan",
	description:
		"A passionate Full Stack Web Developer and Mobile Application developer.",
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
