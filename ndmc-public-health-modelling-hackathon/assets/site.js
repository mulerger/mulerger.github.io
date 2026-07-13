const organisers = [
  {
    id: "mulugeta-geremew-geleso",
    name: "Mulugeta Geremew Geleso",
    photo: "assets/people/mulugeta-geremew-geleso.jpg",
    role: "Lead Organiser & Lead Facilitator · NDMC, EPHI",
    category: "Hackathon leadership",
    lead: true,
    bio: "Mulugeta Geremew Geleso is a mathematical and statistical modeller working at the intersection of public-health analytics, disease modelling, geospatial intelligence, forecasting and data-to-policy translation. He leads the Data Analytics, Modelling and Visualization Division at NDMC, EPHI, and led the design, coordination and facilitation of this hackathon.",
    skills: "Public-health modelling · Analytics leadership · Evidence translation · Facilitation",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mulugeta-geremew-0485729a/"],
      ["GitHub", "https://github.com/mulerger"],
      ["Google Scholar", "https://scholar.google.com/citations?hl=en&user=I1fdT14AAAAJ"]
    ]
  },
  {
    id: "mesfin-diro",
    name: "Dr Mesfin Diro",
    photo: "assets/people/mesfin-diro.png",
    role: "Organiser, Facilitator & Technical Mentor",
    category: "Coordination and technical support",
    bio: "Dr Mesfin Diro is a computational data scientist and Addis Ababa University faculty member specialising in machine learning, deep learning, modelling, high-performance computing and scientific-computing training. He supported overall coordination, mentoring and the collaborative Git/GitHub workflow used by the family teams.",
    skills: "Facilitation · Technical mentorship · Machine learning · Git/GitHub",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mesfindiro"],
      ["GitHub", "https://github.com/mesfind"]
    ]
  },
  {
    id: "dawit-melese",
    name: "Dr Dawit Melese",
    photo: "assets/people/dawit-melese.jpg",
    role: "Organiser & Modelling Facilitator",
    category: "Technical support",
    bio: "Dr Dawit Melese is a public-health modeller whose work includes malaria network modelling and intervention analysis. He supported participant selection and helped teams strengthen their modelling approaches, interpretation and prototype development.",
    skills: "Public-health modelling · Technical mentorship · Prototype review",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/dawit-melese-phd-27b779137/"],
      ["GitHub", "https://github.com/dawitmeleseg"]
    ]
  },
  {
    id: "mandefro-legesse",
    name: "Mandefro Legesse",
    role: "Participant Selection & Coordination",
    category: "Programme coordination",
    bio: "Mandefro Legesse supported application screening, participant selection, participant coordination and access to the programme data and context needed by the family teams.",
    skills: "Participant coordination · Selection · Data support",
    links: []
  },
  {
    id: "leykun-getaneh",
    name: "Leykun Getaneh",
    photo: "assets/people/leykun-getaneh.png",
    role: "Git/GitHub Lead & Technical Mentor",
    category: "Collaborative development",
    bio: "Leykun Getaneh is a data scientist, statistician and lecturer working on disease modelling, forecasting and decision-support tools. He led practical Git and GitHub support and contributed technical mentorship, data provision and review throughout the hackathon.",
    skills: "Git/GitHub · Data science · Disease modelling · Forecasting",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/leykun-getaneh-gebeye-39a17890"],
      ["GitHub", "https://github.com/leykunget"]
    ]
  },
  {
    id: "kassahun-abdisa",
    name: "Kassahun Abdisa",
    role: "Participant & Data Coordination",
    category: "Programme coordination",
    bio: "Kassahun Abdisa supported participant coordination and helped connect family teams with the data, programme context and follow-up needed to progress their work.",
    skills: "Participant coordination · Data support · Follow-up",
    links: []
  },
  {
    id: "anwar-taju",
    name: "Anwar Taju",
    role: "Logistics & Documentation",
    category: "Event delivery",
    bio: "Anwar Taju is a technical contributor with the NDMC Data Analytics, Modelling and Visualization team. He contributed to application screening, event documentation and logistical coordination across the six-day programme.",
    skills: "Logistics · Documentation · Technical support",
    links: [["GitHub", "https://github.com/AnwarTaju"]]
  },
  {
    id: "samson-warkaye",
    name: "Samson Warkaye",
    role: "Documentation & Resource Mobilisation",
    category: "Event delivery",
    bio: "Samson Warkaye supported event documentation, resource mobilisation and coordination of the processes used to review and carry the family outputs forward.",
    skills: "Documentation · Resource mobilisation · Coordination",
    links: []
  },
  {
    id: "fitsum-bekele",
    name: "Fitsum Bekele",
    role: "Organising Committee",
    category: "Event delivery",
    bio: "Fitsum Bekele contributed to resource mobilisation, event organisation and the review processes supporting the family presentations and outputs.",
    skills: "Event organisation · Resource mobilisation · Output review",
    links: []
  },
  {
    id: "fikreyohannes-shewangizaw",
    name: "Fikreyohannes Fikereyohans Shewangizaw",
    role: "Logistics Coordinator",
    category: "Event delivery",
    bio: "Fikreyohannes Fikereyohans Shewangizaw supported on-site logistics and practical coordination across the hackathon programme.",
    skills: "Logistics · On-site coordination",
    links: []
  },
  {
    id: "chalie-mulu",
    name: "Chalie Mulu",
    role: "Data Support",
    category: "Technical support",
    bio: "Chalie Mulu supported the provision and interpretation of programme data used by the family teams during prototype development.",
    skills: "Data support · Programme context",
    links: []
  }
];

const hackers = Array.isArray(window.ndmcHackers) ? window.ndmcHackers : [];

function getInitials(name) {
  return name
    .replace(/^Dr\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

function getFamily(person) {
  const match = person.category?.match(/Family\s+(\d)/i);
  return match ? `family-${match[1]}` : "";
}

function populateAvatar(avatar, person) {
  avatar.replaceChildren();
  avatar.textContent = getInitials(person.name);

  if (!person.photo) return;

  const photo = document.createElement("img");
  photo.src = person.photo;
  photo.alt = "";
  photo.loading = "lazy";
  photo.decoding = "async";
  photo.referrerPolicy = "no-referrer";
  if (person.photoPosition) photo.style.objectPosition = person.photoPosition;
  photo.addEventListener("error", () => photo.remove(), { once: true });
  avatar.append(photo);
}

function createPersonCard(person, type) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `person-card ${type === "organiser" ? "organiser" : ""} ${person.lead ? "lead-card" : ""}`.trim();
  button.dataset.personId = person.id;
  button.dataset.personType = type;
  button.dataset.family = getFamily(person);
  button.dataset.search = `${person.name} ${person.role} ${person.category} ${person.skills || ""}`.toLowerCase();
  button.setAttribute("aria-label", `View the profile of ${person.name}`);
  button.setAttribute("aria-haspopup", "dialog");

  const avatar = document.createElement("span");
  avatar.className = "avatar";
  avatar.setAttribute("aria-hidden", "true");
  populateAvatar(avatar, person);

  const copy = document.createElement("span");
  copy.className = "person-card-copy";

  const name = document.createElement("h3");
  name.textContent = person.name;

  const role = document.createElement("p");
  role.className = "person-role";
  role.textContent = person.role;

  const category = document.createElement("span");
  category.className = `person-category ${person.lead ? "lead" : ""}`;
  category.textContent = person.lead ? "Lead organiser & facilitator" : person.category;

  copy.append(name, role, category);
  button.append(avatar, copy);
  return button;
}

document.querySelectorAll("[data-people-grid]").forEach(grid => {
  const type = grid.dataset.peopleGrid;
  const people = type === "organisers" ? organisers : hackers;
  people.forEach(person => grid.append(createPersonCard(person, type === "organisers" ? "organiser" : "hacker")));
});

const filterButtons = [...document.querySelectorAll("[data-directory-filter]")];
const searchInput = document.querySelector("[data-directory-search]");
const resultCount = document.querySelector("[data-directory-count]");
const emptyResults = document.querySelector("[data-empty-results]");
let activeFilter = "all";

function applyDirectoryFilters() {
  const query = searchInput?.value.trim().toLowerCase() || "";
  const cards = [...document.querySelectorAll("[data-person-id]")];
  let visible = 0;

  cards.forEach(card => {
    const typeMatches = activeFilter === "all"
      || (activeFilter === "organisers" && card.dataset.personType === "organiser")
      || card.dataset.family === activeFilter;
    const queryMatches = !query || card.dataset.search.includes(query);
    card.hidden = !(typeMatches && queryMatches);
    if (!card.hidden) visible += 1;
  });

  document.querySelectorAll("[data-people-section]").forEach(section => {
    section.hidden = !section.querySelector("[data-person-id]:not([hidden])");
  });

  if (resultCount) resultCount.textContent = `${visible} ${visible === 1 ? "person" : "people"}`;
  if (emptyResults) emptyResults.hidden = visible !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.directoryFilter;
    filterButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    applyDirectoryFilters();
  });
});

searchInput?.addEventListener("input", applyDirectoryFilters);
if (filterButtons.length || searchInput) applyDirectoryFilters();

const dialog = document.querySelector("#profile-dialog");
let lastProfileTrigger = null;

function findPerson(id) {
  const organiser = organisers.find(person => person.id === id);
  if (organiser) return { person: organiser, type: "organiser" };
  const hacker = hackers.find(person => person.id === id);
  return hacker ? { person: hacker, type: "hacker" } : null;
}

function openProfile(person, type, updateHash = true) {
  if (!dialog) return;

  const avatar = dialog.querySelector("[data-dialog-avatar]");
  avatar.style.background = type === "organiser" ? "var(--brand-green)" : "var(--nav)";
  populateAvatar(avatar, person);
  dialog.querySelector("[data-dialog-name]").textContent = person.name;
  dialog.querySelector("[data-dialog-role]").textContent = person.role;
  dialog.querySelector("[data-dialog-category]").textContent = person.lead ? "Lead organiser & facilitator" : person.category;
  dialog.querySelector("[data-dialog-bio]").textContent = person.bio;
  dialog.querySelector("[data-dialog-skills]").textContent = person.skills ? `Focus and tools: ${person.skills}` : "";

  const links = dialog.querySelector("[data-dialog-links]");
  links.replaceChildren();
  links.hidden = !person.links.length;
  person.links.forEach(([label, url], index) => {
    const link = document.createElement("a");
    link.className = `profile-link ${index > 0 ? "secondary" : ""}`;
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `${label} ↗`;
    links.append(link);
  });

  document.body.classList.add("dialog-open");
  if (!dialog.open) dialog.showModal();
  if (updateHash) history.replaceState(null, "", `#${person.id}`);
}

function closeProfile(restoreFocus = true) {
  if (!dialog?.open) return;
  const id = dialog.querySelector("[data-dialog-name]")?.textContent;
  dialog.close();
  document.body.classList.remove("dialog-open");
  if (location.hash && findPerson(location.hash.slice(1))) history.replaceState(null, "", `${location.pathname}${location.search}`);
  if (restoreFocus && lastProfileTrigger) lastProfileTrigger.focus();
  lastProfileTrigger = null;
}

document.addEventListener("click", event => {
  const card = event.target.closest("[data-person-id]");
  if (!card) return;
  const result = findPerson(card.dataset.personId);
  if (!result) return;
  lastProfileTrigger = card;
  openProfile(result.person, result.type);
});

if (dialog) {
  dialog.querySelector("[data-dialog-close]").addEventListener("click", () => closeProfile());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeProfile();
  });
  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeProfile();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

  const hashProfile = findPerson(location.hash.slice(1));
  if (hashProfile) requestAnimationFrame(() => openProfile(hashProfile.person, hashProfile.type, false));
}

const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.querySelector("[data-primary-nav]");

function closeNavigation() {
  if (!navToggle || !primaryNav) return;
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  primaryNav.classList.remove("open");
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("open", !open);
  });

  primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeNavigation));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeNavigation();
  });
}

const backToTop = document.createElement("button");
backToTop.type = "button";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");
backToTop.textContent = "↑";
document.body.append(backToTop);

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 700);
}, { passive: true });

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
