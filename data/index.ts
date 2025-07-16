export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Student. Builder. Curious.",
    description: "I’m an undergrad with a growing focus on applied AI and GenAI systems. Outside coursework, I spend most of my time building tools, refining ideas, and figuring out what “good software” actually means.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full opacity-10",
    titleClassName: "justify-end",
    img: "/id1image.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "AIML Undergrad",
    description: "Pursuing AI & ML while exploring real world projects, from custom ChatBots to finetuning LLMs. ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "I build things that combine logic, emotion, and velocity",
    description: "I’m a developer who doesn't just ship features I shape narratives. Whether it's a GenAI-powered chatbot or a handcrafted JS animation library, I’m chasing clarity, not complexity. My work is a mix of system thinking and gut feel both matter. I like fast cycles, deliberate decisions, and debugging both code and ideas.",
    className: "lg:col-span-5 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Mostly technical blogs. Sometimes about bugs. Occasionally about ideas.",
    description: "Writing Things Down",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center ",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MediBot - AI Powered Medical chatbot",
    des: "An AI-powered Healthcare LLM-based medical chatbot using Gemini and Pinecone vector search with semantic retrieval (RAG) and deployed the backend via Flask.",
    img: "/medibot.png",
    iconLists: ["/google-gemini-icon.webp", "/flask.png", "/javascript.png", "/pinecone.png", "/tail.svg"],
    link: "https://github.com/risheeee/MediBot",
  },
  {
    id: 2,
    title: "TicketTriage - A FullStack AI Agent ",
    des: "Developed a full-stack ticket management system with an AI agent powered by Inngest to automatically triage, categorize, and route support tickets.",
    img: "/Screenshot 2025-07-14 183342.png",
    iconLists: ["/javascript.png", "/tail.svg", "/inngest.png", "/ollama.png", "/mongo.png"],
    link: "https://github.com/risheeee/fullstack-ticket-ai",
  },
  {
    id: 3,
    title: "Voice controlled AI assistant for Android",
    des: "Built an offline Android AI assistant, using SpeechRecognition, TTS, and Flask. Supported voice-based app control, web search, and meeting scheduling.",
    img: "/voiceagent.jpg",
    iconLists: ["/flask.png", "/android.png", "/google-gemini-icon.webp"],
    link: "https://github.com/ItsSohamPurao/Mobile-AI-Agent",
  },
  {
    id: 4,
    title: "FinSightAI – Financial & Web Intelligence Assistant",
    des: "FinSightAI is a powerful multi-agent system that leverages LLaMA 3 models and specialized tools like DuckDuckGo and YFinance to deliver real-time financial insights and web-sourced intelligence.",
    img: "/finance.webp",
    iconLists: ["/python.webp", "/ollama.png"],
    link: "https://github.com/risheeee",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Rishee was a game-changer for our team. His ability to take complex ideas and translate them into clean, intuitive interfaces blew us away. Beyond just development, he brought strategic insight to the table that improved our product direction significantly.",
    name: "Ananya Mehra",
    title: "Product Manager, Inertia Labs",
  },
  {
    quote:
      "Rishee delivered exactly what we needed — and then some. His attention to detail, quick turnaround, and technical depth made our collaboration smooth and productive. He's the kind of developer who just gets it, even when requirements are ambiguous.",
    name: "David Kim",
    title: "CTO, ClarityMetrics",
  },
  {
    quote:
      "What sets Rishee apart is his ability to listen. He took the time to understand our goals and constraints, and built a solution that not only worked — it scaled. Super reliable and proactive throughout.",
    name: "Fatima Rizvi",
    title: "Founder, EduCatalyst",
  },
  {
    quote:
      "We needed someone who could plug into our fast-moving project and deliver with minimal oversight. Rishee did exactly that. His code was clean, well-documented, and thoughtfully structured. Highly recommended.",
    name: "James Peterson",
    title: "Lead Engineer, RevoStack",
  },
  {
    quote:
      "Rishee's mix of creativity and engineering precision is rare. He doesn't just write code — he solves business problems. Our app is better because of his contributions.",
    name: "Aarav Deshmukh",
    title: "CEO, Tracklytics",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Intern - Suvidha Foundation",
    desc: "Fine-tuned and benchmarked large language models, optimizing summarization performance through extensive experimentation and ROUGE-based evaluation.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Research in collaboration with IITM-Pune",
    desc: " Ongoing research on identifying severe rainfall pockets in Mumbai using AI and machine learning methods.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/risheeee", // Replace with your GitHub URL
  },
  {
    id: 2,
    img: "/hashnode2.png",
    link: "https://hashnode.com/@rushedcomet", // Replace with your Twitter URL
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/rishee-panchal", // Replace with your LinkedIn URL
  },
];