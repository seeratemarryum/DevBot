import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
   try {
    const {text}=req.body;
 
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    // Data
// Developer-focused bot responses
const botResponses = {
  "hello": "Hey there! 👋 I’m DevBot, your coding assistant. How can I help you today?",
  "how are you": "I’m fully operational and ready to debug your problems! 😎",
  "what is javascript": "JavaScript is a versatile, high-level programming language primarily used for web development.\n• Runs in browsers and servers (Node.js)\n• Supports functional, event-driven, and object-oriented programming\n• Libraries/Frameworks: React, Angular, Vue\n• Example: Used to make dynamic web pages, handle events, and API calls.",
  "what is python": "Python is a high-level, interpreted language great for web development, automation, and data science.\n• Easy-to-read syntax, dynamically typed\n• Popular frameworks: Django, Flask\n• Libraries: Pandas, NumPy, TensorFlow, PyTorch\n• Example: AI/ML models, web apps, scripting, data analysis.",
  "what is react": "React is a JavaScript library for building user interfaces, maintained by Facebook.\n• Component-based architecture\n• Virtual DOM improves performance\n• Popular for single-page applications (SPAs)\n• Example: Facebook, Instagram, and Netflix UIs use React.",
  "what is node.js": "Node.js is a JavaScript runtime built on Chrome's V8 engine.\n• Enables server-side JS execution\n• Event-driven, non-blocking I/O for scalable applications\n• Popular frameworks: Express.js, Nest.js\n• Example: APIs, web servers, real-time apps like chat apps.",
  "what is typescript": "TypeScript is a superset of JavaScript adding static types.\n• Helps catch errors during development\n• Improves maintainability and scalability\n• Compiles to plain JavaScript\n• Example: Angular projects, large-scale JS applications.",
  "what is git": "Git is a distributed version control system.\n• Tracks changes in code\n• Enables collaboration among developers\n• Commands: git clone, git commit, git push, git pull\n• Example: GitHub and GitLab use Git for version control.",
  "what is github": "GitHub is a platform for hosting Git repositories.\n• Supports collaboration, code reviews, issue tracking\n• Offers CI/CD via GitHub Actions\n• Example: Hosting open-source projects, managing private repos.",
  "what is docker": "Docker is a containerization platform.\n• Packages applications with dependencies into containers\n• Ensures consistent environments across machines\n• Example: Microservices, deployment pipelines.",
  "what is kubernetes": "Kubernetes is an orchestration system for containerized applications.\n• Manages scaling, deployment, and networking of containers\n• Works with Docker and other container runtimes\n• Example: Running large-scale microservices in production.",
  "what is api": "An API (Application Programming Interface) allows software to communicate with other software.\n• Types: REST, GraphQL, SOAP\n• Example: Fetching weather data from OpenWeatherMap API in your app.",
  "what is rest api": "REST API is an API adhering to REST principles.\n• Stateless communication over HTTP\n• Uses standard methods: GET, POST, PUT, DELETE\n• Example: CRUD operations in web applications.",
  "what is sql": "SQL (Structured Query Language) is used to manage relational databases.\n• Commands: SELECT, INSERT, UPDATE, DELETE\n• Example: MySQL, PostgreSQL, SQLite databases.",
  "what is nosql": "NoSQL databases store non-relational data.\n• Types: Document, Key-Value, Column, Graph\n• Examples: MongoDB (Document), Redis (Key-Value).",
  "what is css": "CSS (Cascading Style Sheets) is used to style HTML content.\n• Handles layout, colors, fonts, and animations\n• Example: Styling websites, creating responsive layouts.",
  "what is html": "HTML (HyperText Markup Language) structures web content.\n• Uses tags like <div>, <h1>, <p>\n• Forms the skeleton of web pages.",
  "what is webpack": "Webpack is a module bundler for JavaScript applications.\n• Bundles JS, CSS, images, and assets\n• Supports code splitting and hot module replacement\n• Example: Optimizing React or Vue applications.",
  "what is npm": "NPM (Node Package Manager) manages Node.js packages.\n• Install packages: npm install <package>\n• Useful for dependency management in JS projects.",
  "what is yarn": "Yarn is an alternative to NPM for managing JS dependencies.\n• Faster installs, deterministic versions\n• Example: npm install vs yarn add.",
  "what is api testing": "API testing validates APIs to ensure they work as expected.\n• Tools: Postman, Insomnia, REST-assured\n• Example: Test CRUD operations of your REST API.",
  "what is ci cd": "CI/CD (Continuous Integration / Continuous Deployment)\n• Automates testing and deployment\n• Tools: Jenkins, GitHub Actions, GitLab CI/CD\n• Example: Automatically deploy code after passing tests.",
  "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "bye": "Goodbye! Keep coding and stay awesome! 🚀",
  "thank you": "You're welcome! Happy coding! 💻",
}


const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}