import ToDo from "../../Assets/Images/projects/ToDo.png";
import calculator from "../../Assets/Images/projects/calculator.png";
import passwordGenerator from "../../Assets/Images/projects/passwordGenerator.png";

const projects = [
	{
		name: "ToDo Application",
		descriptionEN: "Todo List app with MERN stack for efficient task management. Features user authentication, secure access, and CRUD operations for seamless task handling.",
		tools: ["React", "Bootstrap", "Node","Mongo"],
		website: "https://advanced-to-do-host.vercel.app/",
		github: "https://github.com/subhadip-kundu/ToDo-Advanced",
		img: ToDo,
	},
	{
		name: "Arithmetic Calculator",
		descriptionEN: "User-friendly calculator with digital display for basic arithmetic: addition, subtraction, multiplication, and division.",
		tools: ["HTML", "CSS", "JavaScript"],
		website: "https://arithmatic-number-calculator.netlify.app",
		github: "https://github.com/subhadip-kundu/Simple-calculator",
		img: calculator,
	},
	{
		name: "FitApp",
		descriptionEN: "JavaScript password generator creates secure, random passwords with letters, numbers, and characters for robust online authentication.",
		tools: ["React", "Tailwind", "JavaScript"],
		website: "https://random-custom-password-generator.netlify.app/",
		github: "https://github.com/subhadip-kundu/Random-custom-password-generator",
		img: passwordGenerator,
	},
];

export default projects;
