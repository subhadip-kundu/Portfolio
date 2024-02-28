import ToDo from "../../Assets/Images/projects/ToDo.png";
import calculator from "../../Assets/Images/projects/calculator.png";
import passwordGenerator from "../../Assets/Images/projects/passwordGenerator.png";
import pokedex from "../../Assets/Images/projects/pokedex.png";
import weather from "../../Assets/Images/projects/Weather.jpg";

const projects = [
  {
    name: "ToDo Application",
    descriptionEN:
      "Todo List app with MERN stack for efficient task management. Features user authentication, secure access, and CRUD operations for seamless task handling.",
    tools: ["React", "Bootstrap", "Node", "Mongo"],
    website: "https://advanced-to-do-host.vercel.app/",
    github: "https://github.com/subhadip-kundu/ToDo-Advanced",
    img: ToDo,
  },
  {
    name: "Pokédex",
    descriptionEN:
      "JavaScript password generator creates secure, random passwords with letters, numbers, and characters for robust online authentication.",
    tools: ["HTML", "CSS", "JavaScript","Ajax"],
    website: "https://real-time-weather-usign-ajax.netlify.app/",
    github: "https://github.com/subhadip-kundu/Weather-application-using-api-and-ajax",
    img: pokedex,
  },
  {
    name: "WeatherApp",
    descriptionEN:
      "JavaScript password generator creates secure, random passwords with letters, numbers, and characters for robust online authentication.",
    tools: ["React", "JavaScript", "PokéAPI"],
    website: "https://pokedex-by-subh.netlify.app/",
    github: "https://github.com/subhadip-kundu/Pokedex",
    img: weather,
  },
  {
    name: "Arithmetic Calculator",
    descriptionEN:
      "User-friendly calculator with digital display for basic arithmetic: addition, subtraction, multiplication, and division.",
    tools: ["HTML", "CSS", "JavaScript"],
    website: "https://arithmatic-number-calculator.netlify.app",
    github: "https://github.com/subhadip-kundu/Simple-calculator",
    img: calculator,
  },
  {
    name: "Password Generator",
    descriptionEN:
      "JavaScript password generator creates secure, random passwords with letters, numbers, and characters for robust online authentication.",
    tools: ["React", "Tailwind", "JavaScript"],
    website: "https://random-custom-password-generator.netlify.app/",
    github:
      "https://github.com/subhadip-kundu/Random-custom-password-generator",
    img: passwordGenerator,
  },
];

export default projects;
