import emoji from "react-easy-emoji";

export const greetings = {
	name: "Muhammad Noman",
	title: "Hi all, I'm Noman",
	description:
		"I'm a dynamic and results-oriented full-stack developer with a proven track record of delivering cutting-edge technology solutions. With 3+ years of hands-on experience, I specialize in crafting reliable applications that push the boundaries of innovation.",
	resumeLink:
		"",
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
				"⚡ Proficient in Python/Django, PHP, JavaScript/TypeScript.",
				"⚡ Expertise in React, Angular, Node, Nest, Next & Express Js/Ts",
				"⚡ Adept at React-Native for creating cross-platform applications.",
				"⚡ Experienced in both relational and non-relational databases..",
				"⚡ Skilled in implementing and managing CI/CD pipelines, automating infrastructure, and optimizing development processes on cloud platforms like AWS, Azure, etc",
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
		schoolName: "Karelia University of Applied Sciences, Finland",
		subHeader: "Information Communication Technology",
		duration: "August 2023 - June 2024",
		desc: "Major in big data and cloud platforms",
		grade: "",
		descBullets: [
		],
	},
	{
		schoolName: "University of South Asia, Pakistan",
		subHeader: "Bachelor of Computer Science",
		duration: "September 2017 - June 2021",
		desc: "Major in Software development and Artificial Intelligence",
		grade: "Grade B",
		descBullets: [
		],
	},
];

export const experience = [
	{
		role: "Software Engineer (MERN)",
		company: "Argon tech Inc.",
		companylogo: "/img/icons/common/argon.png",
		date: "Aug 2023 – Dec 2023",
		desc: "Worked as web3 developer in blockchain based project using MERN stack technologies.",
	},
	{
		role: "Associate Software Engineer (Full stack developer)",
		company: "OptimaGeeks",
		companylogo: "/img/icons/common/optimaGeeks.png",
		date: "Jun 2022 – Jun 2023",
		desc: "Worked as full stack engineer. Developed and designed applications using various technologies and languages.",
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
		name: "Kartedia",
		desc: "The aim of this project was to empower teams with collaborative chat, versatile template design, streamlined team management, and data-driven dynamic printing.I developed this application from scratch, and successfully met the requirements using Angular, Nest, Node and PostgreSQL",
		github: "",
		link: "https://kartedia.com/",
	},
	{
		name: "Galileo Protocol",
		desc: "I have contributed to the development of Galileo Protocol, a platform for luxury asset tokenisation in NFT marketplace. The tools and technologies I employed for the success of this project, include Blockchain, Metamask wallet, Polygon, Node Js, Express Js & PostgreSQL",
		github: "",
		link: "https://kartedia.com/",
	},
	{
		name: "McGrath (Real estate agent)",
		desc: "McGrath is Real Estate agent application for Sales, Investments, Rentals and Property Management, and boast an enviable reputation as ‘the agent you can recommend’. I worked as Node js developer in this application",
		github: "",
		link: "https://www.mcgrathgroup.com.au/",
	},
	{
		name: "Augmentt",
		desc: "Augmentt is a centralized SaaS security platform built for MSPs. It is developed to deliver scalable managed security services for Microsoft and cloud apps. To give visibility across all end-users to easily audit, protect and detect security threats for a holistic approach to cyber security.I contributed to the success of this project by using React Js, Bootstrap and react-bootstrap Tables.",
		link: "https://www.augmentt.com ",
	},
	{
		name: "Parserr",
		desc: "Parserr is an email data parsing tool that takes features above and beyond. I contributed to the success of this project using React js and Third party integrations like Zapier, HubSpot, Google sheets.",
		link: "https://parserr.com",
	},
	{
		name: "Shopit",
		desc: "Full fledge e-commerce application including payment method. I developed this application using React, Node, Express, MongoDB, Stripe.",
		github: "https://github.com/mehrnuman123",
	},
	{
		name: "Visual impaired Assistance (Android)",
		desc: "It is a platform that focuses bringing sight to visually impaired and low vision people by turning the visual world into an audible experience.By utilizing computer vision technology user with low vision or visually impaired can see the objects which is close to him and can be accessed easily.",
		github: "https://github.com/mehrnuman123",
	},
];

export const feedbacks = [
	{
		name: "Omro T.",
		feedback: "Working with Muhammad on a full-stack project was fantastic! His skills in both Node.js and React.js made everything run smoothly. I appreciate his timely work and top-notch quality. I found him a great talent and highly recommended him for full-stack development",
	},
	{
		name: "Mehmet K.",
		feedback: "Exceptional Experience! Hired a full stack developer for my project, and the results were beyond expectations. The use of Django Python and React for the frontend showcased a high level of professionalism.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Muhammad Noman",
	description:
		"A passionate Full Stack Developer",
	author: "Muhammad Noman",
	image: "",
	url: "",
	keywords: [
		"muhammad Noman",
		"mehrnuman",
		"Full stack developer",
		"MEAN and MERN stack developer",
	],
}
