function renderTemplate(elementId, template) {
  document.getElementById(elementId).innerHTML = template;
}

let skills = [
  { name: "Python", value: 90 },
  { name: "JavaScript", value: 80 },
  { name: "Web Development", value: 70 },
  { name: "Graphic Design", value: 60 },
  { name: "Memes", value: 100 },
];

let socials = [
  { name: "Twitter", link: "https://twitter.com/le_dapung" },
  { name: "GitHub", link: "https://github.com/daffarahman" },
  { name: "Instagram", link: "https://instagram.com/_daffa_rahman" },
];

let skillDataTemplate = "";
skills.forEach((skill) => {
  skillDataTemplate += `
    <h4 style="margin-top: 15px;">${skill.name}</h4>
    <div class="progress shadow-sm" style="height: 6px;">
        <div class="progress-bar bg-danger" role="progressbar" style="width: ${skill.value}%;" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`;
});
renderTemplate("skill-data", skillDataTemplate);

let socialDataTemplate = "";
socials.forEach((social) => {
  socialDataTemplate += `
    <a class="btn btn-primary shadow-sm" href="${social.link}" role="button">${social.name}</a>`;
});
renderTemplate("social-links", socialDataTemplate);
