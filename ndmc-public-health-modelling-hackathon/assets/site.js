const organisers = [
  {
    id: "mulugeta-geremew-geleso",
    name: "Mulugeta Geremew Geleso",
    photo: "assets/people/mulugeta-geremew-geleso.jpg",
    role: "Lead Organiser & Lead Facilitator · NDMC, EPHI",
    category: "Organising and facilitation",
    lead: true,
    bio: "Mulugeta Geremew Geleso is a mathematical and statistical modeller working at the intersection of public-health analytics, disease modelling, geospatial intelligence, forecasting and data-to-policy translation. He leads the Data Analytics, Modelling and Visualization Division at NDMC, EPHI, and led the design, coordination and facilitation of this hackathon.",
    skills: "Public-health modelling · Analytics and modelling · Evidence translation · Facilitation",
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
    role: "Technical Facilitator · Git and GitHub",
    category: "Technical facilitation",
    bio: "Dr Mesfin Diro is a computational data scientist and Addis Ababa University faculty member specialising in machine learning, deep learning, modelling, high-performance computing and scientific-computing training. He delivered the Git and GitHub sessions and supported the families' collaborative development workflow.",
    skills: "Technical facilitation · Git and GitHub · Machine learning · Scientific computing",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mesfindiro"],
      ["GitHub", "https://github.com/mesfind"]
    ]
  },
  {
    id: "leykun-getaneh",
    name: "Leykun Getaneh",
    photo: "assets/people/leykun-getaneh.png",
    role: "Technical Facilitator",
    category: "Technical facilitation",
    bio: "Leykun Getaneh is a data scientist, statistician and lecturer working on disease modelling, forecasting and decision-support tools. He provided technical facilitation, data support and review throughout the hackathon.",
    skills: "Technical facilitation · Data science · Disease modelling · Forecasting",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/leykun-getaneh-gebeye-39a17890"],
      ["GitHub", "https://github.com/leykunget"]
    ]
  }
];

const programmeCoordination = [
  {
    id: "dawit-melese",
    name: "Dr Dawit Melese",
    photo: "assets/people/dawit-melese.jpg",
    role: "Programme Coordination · NDMC, EPHI",
    category: "Programme coordination",
    bio: "Dr Dawit Melese is a public-health modeller whose work includes malaria network modelling and intervention analysis. He contributed to programme coordination, participant selection, technical review and support to the hackathon families.",
    skills: "Programme coordination · Public-health modelling · Technical review",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/dawit-melese-phd-27b779137/"],
      ["GitHub", "https://github.com/dawitmeleseg"]
    ]
  },
  {
    id: "anwar-taju-habib",
    name: "Anwar Taju Habib",
    photo: "assets/people/anwar-taju-habib.jpg",
    role: "Programme Coordination · NDMC, EPHI",
    category: "Programme coordination",
    bio: "Anwar Taju Habib is a data analyst and health-data specialist at NDMC, EPHI. He contributed to application screening, event documentation and logistical coordination across the six-day programme.",
    skills: "Programme coordination · Data analysis · Documentation · Logistics",
    links: [
      ["NDMC profile", "https://ndmc.ephi.gov.et/profile/anwar-taju/"],
      ["LinkedIn", "https://www.linkedin.com/in/anwar-taju-7585881ab/"],
      ["GitHub", "https://github.com/AnwarTaju"]
    ]
  },
  {
    id: "samson-warkaye-lamma",
    name: "Samson Warkaye Lamma",
    photo: "assets/people/samson-warkaye-lamma.jpg",
    role: "Programme Coordination · NDMC, EPHI",
    category: "Programme coordination",
    bio: "Samson Warkaye Lamma is a GIS expert at NDMC, EPHI, specialising in spatial-data integration, analysis and mapping. He supported event documentation, resource mobilisation and coordination of the family outputs.",
    skills: "Programme coordination · GIS · Spatial analysis · Documentation",
    links: [
      ["NDMC profile", "https://ndmc.ephi.gov.et/profile/samson-warkaye-lamma/"],
      ["LinkedIn", "https://www.linkedin.com/in/samson-warkaye-0852a698/"]
    ]
  },
  {
    id: "fitsum-bekele-endeshaw",
    name: "Fitsum Bekele Endeshaw",
    photo: "assets/people/fitsum-bekele-endeshaw.jpg",
    role: "Programme Coordination · NDMC, EPHI",
    category: "Programme coordination",
    bio: "Fitsum Bekele Endeshaw is a climate and health data analyst at NDMC, EPHI. He contributed to resource mobilisation, event organisation and the review processes supporting the family presentations and outputs.",
    skills: "Programme coordination · Climate and health analytics · Event organisation",
    links: [
      ["NDMC profile", "https://ndmc.ephi.gov.et/profile/fitsum-bekele-endeshaw/"],
      ["LinkedIn", "https://www.linkedin.com/in/fitsum-bekele-endeshaw-145288179/"]
    ]
  },
  {
    id: "fikreyohannes-shewangizaw",
    name: "Fikreyohannes Shewangizaw",
    photo: "assets/people/fikreyohannes-shewangizaw.jpg",
    role: "Programme Coordination · NDMC, EPHI",
    category: "Programme coordination",
    bio: "Fikreyohannes Shewangizaw is a senior web application developer at NDMC, EPHI. He supported on-site logistics and practical coordination across the hackathon programme.",
    skills: "Programme coordination · Web development · On-site logistics",
    links: [
      ["NDMC profile", "https://ndmc.ephi.gov.et/profile/fikreyohannes-shewangizaw/"],
      ["LinkedIn", "https://www.linkedin.com/in/fikreyohans-shewangizaw-a61a60188/"]
    ]
  },
  {
    id: "chalie-mulu-belete",
    name: "Chalie Mulu Belete",
    photo: "assets/people/chalie-mulu-belete.jpg",
    photoPosition: "center 20%",
    role: "Programme Coordination · NDMC, EPHI",
    category: "Programme coordination",
    bio: "Chalie Mulu Belete is a geospatial epidemiologist at NDMC, EPHI, working on spatial-data integration, mapping and public-health analysis. He supported the provision and interpretation of programme data used by the hackathon families.",
    skills: "Programme coordination · Geospatial epidemiology · GIS · Data support",
    links: [
      ["NDMC profile", "https://ndmc.ephi.gov.et/profile/chalie-mulu-belete/"],
      ["LinkedIn", "https://www.linkedin.com/in/chaliembelete8264/"]
    ]
  }
];

const decisionMakers = [
  {
    id: "mulat-nigus",
    name: "Mulat Nigus",
    role: "Senior Expert, Manager & Advisor on Immunization Programmes · National EPI, Ministry of Health",
    category: "Decision-maker",
    bio: "Mulat Nigus, MPH, is a senior National EPI expert, manager and advisor on immunization programmes at Ethiopia's Ministry of Health. His work includes national immunization coverage and service-quality evaluation, E-NITAG development, measles supplemental immunization, hepatitis B birth-dose policy and equitable vaccine access. He joined the hackathon to connect analytical outputs with immunization planning and equity priorities.",
    skills: "Immunization programmes · National EPI · Measles · Coverage and equity",
    links: [
      ["Research profile", "https://openalex.org/A5034861484"],
      ["National coverage study", "https://doi.org/10.11604/pamj.2022.42.101.18299"],
      ["Measles SIA study", "https://doi.org/10.11604/pamj.supp.2020.37.36.26614"]
    ]
  },
  {
    id: "mandefro-kebede",
    name: "Mandefro Kebede",
    role: "Head, Surveillance and Disease Intelligence Division · EPHI",
    category: "Decision-maker",
    bio: "Mandefro Kebede is Head of the Surveillance and Disease Intelligence Division at EPHI. His work spans national sentinel surveillance, outbreak and epidemic intelligence, respiratory-virus epidemiology, genomic investigation and public-health emergency response. He joined the hackathon to connect modelling outputs with surveillance and response priorities.",
    skills: "Disease surveillance · Disease intelligence · Epidemic response · Public-health emergency management",
    links: [
      ["Stanford project", "https://globalhealth.stanford.edu/programs/ai-driven-early-warning-system-for-childhood-disease-surges-in-ethiopia/"],
      ["Research profile", "https://openalex.org/A5059319293"],
      ["Publications", "https://pubmed.ncbi.nlm.nih.gov/?term=Kebede+Mandefro%5BAuthor%5D"]
    ]
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
  const match = person.category?.match(/(?:Team|Family)\s+(\d)/i);
  return match ? `family-${match[1]}` : "";
}

function getCardLabel(person, type) {
  if (person.cardLabel) return person.cardLabel;
  if (person.lead) return "Lead Organiser & Lead Facilitator";
  if (type === "organiser") return "Technical Facilitator";
  if (type === "coordination") return "Programme Coordination";
  if (type === "decision-maker") return "Decision-Maker";
  const family = person.category?.match(/Family\s+\d/i)?.[0];
  return family ? `Hacker · ${family}` : "Hacker";
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
  const typeClass = type === "organiser"
    ? "organiser"
    : type === "coordination"
      ? "coordination"
      : type === "decision-maker"
        ? "decision-maker"
        : "";
  button.className = `person-card ${typeClass} ${person.lead ? "lead-card" : ""}`.trim();
  button.dataset.personId = person.id;
  button.dataset.personType = type;
  button.dataset.family = getFamily(person);
  button.dataset.search = `${person.name} ${person.role} ${person.category} ${getCardLabel(person, type)} ${person.skills || ""}`.toLowerCase();
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
  category.textContent = getCardLabel(person, type);

  copy.append(name, role, category);
  button.append(avatar, copy);
  return button;
}

document.querySelectorAll("[data-people-grid]").forEach(grid => {
  const type = grid.dataset.peopleGrid;
  const people = type === "staff"
    ? [
        ...organisers.map(person => ({ person, personType: "organiser" })),
        ...programmeCoordination.map(person => ({ person, personType: "coordination" }))
      ]
    : type === "decision-makers"
      ? decisionMakers.map(person => ({ person, personType: "decision-maker" }))
      : hackers.map(person => ({ person, personType: "hacker" }));
  people.forEach(({ person, personType }) => grid.append(createPersonCard(person, personType)));
});

const dialog = document.querySelector("#profile-dialog");
let lastProfileTrigger = null;

function findPerson(id) {
  const organiser = organisers.find(person => person.id === id);
  if (organiser) return { person: organiser, type: "organiser" };
  const coordination = programmeCoordination.find(person => person.id === id);
  if (coordination) return { person: coordination, type: "coordination" };
  const decisionMaker = decisionMakers.find(person => person.id === id);
  if (decisionMaker) return { person: decisionMaker, type: "decision-maker" };
  const hacker = hackers.find(person => person.id === id);
  return hacker ? { person: hacker, type: "hacker" } : null;
}

function openProfile(person, type, updateHash = true) {
  if (!dialog) return;

  const avatar = dialog.querySelector("[data-dialog-avatar]");
  avatar.style.background = type === "organiser"
    ? "var(--brand-green)"
    : type === "coordination"
      ? "var(--brand-blue-dark)"
      : type === "decision-maker"
        ? "#8a6620"
        : "var(--nav)";
  populateAvatar(avatar, person);
  dialog.querySelector("[data-dialog-name]").textContent = person.name;
  dialog.querySelector("[data-dialog-role]").textContent = person.role;
  dialog.querySelector("[data-dialog-category]").textContent = getCardLabel(person, type);
  dialog.querySelector("[data-dialog-bio]").textContent = person.bio;
  dialog.querySelector("[data-dialog-skills]").textContent = person.skills ? `Focus and tools: ${person.skills}` : "";

  const links = dialog.querySelector("[data-dialog-links]");
  links.replaceChildren();
  links.hidden = !(person.links || []).length;
  (person.links || []).forEach(([label, url], index) => {
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
