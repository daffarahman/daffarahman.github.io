let startupsContainer = document.getElementById("startups-container");

let startups = [
  {
    icon: "🏎️",
    name: "Dap Drive",
    description: "Fun driving and shooting game built using ThreeJS",
    revenue: "Free",
    url: "https://dapdrive.netlify.app",
  },
  {
    icon: "🚗",
    name: "Off The Tracks",
    description: "Fun arcade android game",
    revenue: "Free",
    url: "https://play.google.com/store/apps/details?id=com.daffarahman.offthetracks&hl=en",
  },
  {
    icon: "🖼️",
    name: "ThumbMash",
    description: "Rank youtube video thumbnail",
    revenue: "Free",
    url: "https://thumbmash.netlify.app/",
  },
];

startups.forEach((startup) => {
  let startupCard = document.createElement("div");
  "bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-xl transition-shadow duration-300"
    .split(" ")
    .forEach((className) => {
      startupCard.classList.add(className);
    });
  startupCard.innerHTML = `
    <div class="flex items-center gap-3">
        <span class="text-2xl">${startup.icon}</span>
        <h3 class="text-lg font-bold text-gray-800">${startup.name}</h3>
    </div>
    <p class="text-gray-600 mt-2">
        ${startup.description}
    </p>
    <p class="text-blue-600 font-semibold mt-2">${startup.revenue}</p>
    <a
        href="${startup.url}"
        class="mt-4 inline-block px-4 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800"
        target="_blank"
        rel="noopener noreferrer"
    >
        Visit Project
    </a>
  `;
  startupsContainer.appendChild(startupCard);
});
