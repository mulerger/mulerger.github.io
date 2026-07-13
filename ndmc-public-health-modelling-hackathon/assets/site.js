const organisers = [
  {
    id: "mulugeta-geremew-geleso",
    name: "Mulugeta Geremew Geleso",
    photo: "../profile.jpg",
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
    photo: "https://github.com/mesfind.png?size=320",
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
    photo: "https://github.com/dawitmeleseg.png?size=320",
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
    photo: "https://github.com/leykunget.png?size=320",
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

const legacyHackers = [
  {
    id: "fentahun-bikale-kebede",
    name: "Fentahun Bikale Kebede",
    photo: "https://github.com/Fentahun60.png?size=320",
    role: "Monitoring and Evaluation Specialist · Ministry of Health",
    category: "Family 1 · Zero-dose mapping",
    bio: "Fentahun Bikale Kebede is a Monitoring and Evaluation Specialist at Ethiopia's Ministry of Health. In the zero-dose family, he contributed to data preparation, modelling and interpretation for district-level immunisation mapping.",
    skills: "R · Python · Stata",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/fentahun-bikale-kebede-8800b336b"],
      ["GitHub", "https://github.com/Fentahun60"]
    ]
  },
  {
    id: "fetlework-gubena-arage",
    name: "Fetlework Gubena Arage",
    role: "Lecturer · University of Gondar",
    category: "Family 1 · Zero-dose mapping",
    bio: "Fetlework Gubena Arage is a lecturer at the University of Gondar. She joined the zero-dose family to support data preparation, modelling and interpretation for district-level immunisation analysis.",
    skills: "R · Python · Stata",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/fetlework-gubena-5a3195259"],
      ["GitHub", "https://github.com/fetle1"]
    ]
  },
  {
    id: "girma-moges-mengistu",
    name: "Girma Moges Mengistu",
    photo: "https://github.com/GirmaMM.png?size=320",
    role: "Researcher and Lecturer · Hawassa University",
    category: "Family 1 · Zero-dose mapping",
    bio: "Girma Moges Mengistu is a researcher and lecturer at Hawassa University. He contributed programming, data management and modelling skills to the zero-dose burden and immunisation mapping challenge.",
    skills: "R · Python · Stata · SQL",
    links: [["GitHub", "https://github.com/GirmaMM"]]
  },
  {
    id: "mahider-ayalew-mengist",
    name: "Mahider Ayalew Mengist",
    role: "Researcher and Lecturer · Debre Berhan University",
    category: "Family 1 · Zero-dose mapping",
    bio: "Mahider Ayalew Mengist is a researcher and lecturer at Debre Berhan University's Asrat Woldeyes Health Science Campus. She contributed statistical analysis and interpretation to the zero-dose mapping challenge.",
    skills: "R · Stata",
    links: []
  },
  {
    id: "werkneh-melkie-tilahun",
    name: "Werkneh Melkie Tilahun",
    role: "Lecturer · Debre Markos University",
    category: "Family 1 · Zero-dose mapping",
    bio: "Werkneh Melkie Tilahun is a lecturer at Debre Markos University. He brought statistical, programming and geospatial skills to the district-level zero-dose and immunisation mapping family.",
    skills: "R · Python · Stata · SPSS · ArcGIS",
    links: [["ResearchGate", "https://www.researchgate.net/profile/Werkneh-Tilahun"]]
  },
  {
    id: "addisalem-workie-demsash",
    name: "Addisalem Workie Demsash",
    photo: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=q0kqIC4AAAAJ&citpid=1",
    photoPosition: "center 25%",
    role: "Lecturer · Debre Berhan University",
    category: "Family 2 · Malaria allocation",
    bio: "Addisalem Workie Demsash is a lecturer at Debre Berhan University. He contributed a broad programming and statistical toolkit to malaria resource-allocation analytics and development of the family's modelling workflow.",
    skills: "R · Python · Stata · MATLAB · SQL · JavaScript",
    links: [
      ["ORCID", "https://orcid.org/0000-0002-9356-8126"],
      ["Google Scholar", "https://scholar.google.com/citations?user=q0kqIC4AAAAJ&hl=en"],
      ["ResearchGate", "https://www.researchgate.net/profile/Addisalem-Workie-2/publications"]
    ]
  },
  {
    id: "ewnetu-abebe-kassie",
    name: "Ewnetu Abebe Kassie",
    photo: "https://github.com/Ewnetu8.png?size=320",
    role: "Academic Research Assistant I · AASTU",
    category: "Family 2 · Malaria allocation",
    bio: "Ewnetu Abebe Kassie is an Academic Research Assistant at Addis Ababa Science and Technology University. He supported malaria resource-allocation analysis through programming, modelling and prototype development.",
    skills: "R · Python · MATLAB",
    links: [["GitHub", "https://github.com/Ewnetu8"]]
  },
  {
    id: "getahun-mulugeta-awoke",
    name: "Getahun Mulugeta Awoke",
    role: "Assistant Professor and PhD Candidate · Debre Berhan University",
    category: "Family 2 · Malaria allocation",
    bio: "Getahun Mulugeta Awoke is an assistant professor and PhD candidate at Debre Berhan University. He contributed public-health research, statistical programming and interpretation to the malaria allocation family.",
    skills: "R · Python · Stata",
    links: [["ORCID", "https://orcid.org/0000-0001-7181-3664"]]
  },
  {
    id: "martha-muluneh-mengesha",
    name: "Martha Muluneh Mengesha",
    role: "Research Administration Assistant · Armauer Hansen Research Institute",
    category: "Family 2 · Malaria allocation",
    bio: "Martha Muluneh Mengesha works at the Armauer Hansen Research Institute. She contributed data preparation, analysis and documentation skills to the malaria resource-allocation prototype.",
    skills: "R · Python · Stata · SQL · SPSS",
    links: [["Kaggle", "https://www.kaggle.com/marthamulunehmengesh"]]
  },
  {
    id: "wondaya-fenta-zewdia",
    name: "Wondaya Fenta Zewdia",
    role: "Researcher · ECAA",
    category: "Family 2 · Malaria allocation",
    bio: "Wondaya Fenta Zewdia is a researcher at ECAA. He contributed experience spanning statistical programming, GIS, data analysis and modelling to the malaria resource-allocation challenge.",
    skills: "R · Python · Stata · MATLAB · SQL · SAS · GIS · SPSS",
    links: []
  },
  {
    id: "shimels-derso-kebede",
    name: "Shimels Derso Kebede",
    photo: "https://github.com/shimelsD.png?size=320",
    role: "Lecturer · Wollo University",
    category: "Family 3 · Measles alerts",
    bio: "Shimels Derso Kebede is a lecturer at Wollo University. He contributed statistical programming, database and software skills to the development of measles outbreak alert rules.",
    skills: "R · Python · Stata · SQL · Java",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/shimels-derso-kebede"],
      ["GitHub", "https://github.com/shimelsD"],
      ["Portfolio", "https://shimelsd.netlify.app"]
    ]
  },
  {
    id: "yebelay-berelie-berehan",
    name: "Yebelay Berelie Berehan",
    photo: "https://github.com/Yebelay.png?size=320",
    role: "Researcher and Lecturer · Debre Markos University",
    category: "Family 3 · Measles alerts",
    bio: "Yebelay Berelie Berehan is a researcher and lecturer at Debre Markos University. He supported statistical analysis, interpretation and documentation for the measles alert-threshold challenge.",
    skills: "R · Stata",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/yebelay/"],
      ["GitHub", "https://github.com/Yebelay"]
    ]
  },
  {
    id: "zenebe-abebe-gebreegziabher",
    name: "Zenebe Abebe Gebreegziabher",
    role: "Lecturer · Debre Berhan University",
    category: "Family 3 · Measles alerts",
    bio: "Zenebe Abebe Gebreegziabher is a lecturer at Debre Berhan University. He contributed statistical programming and modelling support to the measles outbreak alert-threshold family.",
    skills: "R · Python · Stata",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/zenebe-abebe-gebreegziabher-87b052211/"],
      ["ResearchGate", "https://www.researchgate.net/profile/Zenebe-Abebe"]
    ]
  },
  {
    id: "zinabu-bekele-tadese",
    name: "Zinabu Bekele Tadese",
    photo: "https://zinabu-b.github.io/img/about.png",
    photoPosition: "center 20%",
    role: "Lecturer · Samara University",
    category: "Family 3 · Measles alerts",
    bio: "Zinabu Bekele Tadese is a lecturer at Samara University. He contributed programming, data and front-end development skills to the measles alert-threshold prototype and its presentation.",
    skills: "Python · Stata · SQL · HTML · CSS",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/zinabubekele12/"],
      ["Portfolio", "https://zinabu-b.github.io/"],
      ["GitHub", "https://github.com/zinabu-b"]
    ]
  },
  {
    id: "assefa-legesse-sisay",
    name: "Assefa Legesse Sisay",
    role: "Lecturer and Data Manager · Jimma University & Gilgel Gibe HDSS",
    category: "Family 4 · Measles transmission",
    bio: "Assefa Legesse Sisay is a lecturer and data manager at Jimma University and Gilgel Gibe HDSS. He contributed data management, statistical analysis and modelling skills to the measles transmission challenge.",
    skills: "R · Python · Stata · SQL",
    links: [["LinkedIn", "https://www.linkedin.com/in/assefa-legesse-sisay-543160323/"]]
  },
  {
    id: "manalebish-debalike-asfaw",
    name: "Manalebish Debalike Asfaw",
    photo: "https://researchid.co/uploads/manalebish.webp",
    role: "Assistant Professor · Addis Ababa University",
    category: "Family 4 · Measles transmission",
    bio: "Manalebish Debalike Asfaw is an assistant professor at Addis Ababa University. She contributed mathematical and computational modelling skills to the measles transmission and elimination-pathways challenge.",
    skills: "R · Python · MATLAB",
    links: []
  },
  {
    id: "zerihun-mekoya-demissie",
    name: "Zerihun Mekoya Demissie",
    photo: "https://www.haramaya.edu.et/cncs/wp-content/uploads/sites/8/bb-plugin/cache/Zerihun-Mekoya-square.jpg",
    role: "PhD Student in Mathematical Modelling · Haramaya University",
    category: "Family 4 · Measles transmission",
    bio: "Zerihun Mekoya Demissie is a PhD student in mathematical modelling and epidemiology at Haramaya University. He contributed dynamical modelling and computational analysis to the measles transmission family.",
    skills: "Python · MATLAB",
    links: []
  }
];

const hackers = window.ndmcHackers || legacyHackers;

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
  button.className = `person-card ${type === "organiser" ? "organiser" : ""}`;
  button.dataset.personId = person.id;
  button.dataset.personType = type;
  button.setAttribute("aria-label", `Read the biography of ${person.name}`);

  const avatar = document.createElement("span");
  avatar.className = "avatar";
  avatar.setAttribute("aria-hidden", "true");
  populateAvatar(avatar, person);

  const name = document.createElement("h3");
  name.textContent = person.name;

  const role = document.createElement("p");
  role.className = "person-role";
  role.textContent = person.role;

  const category = document.createElement("span");
  category.className = `person-category ${person.lead ? "lead" : ""}`;
  category.textContent = person.lead ? "Lead organiser & facilitator" : person.category;

  button.append(avatar, name, role, category);
  return button;
}

document.querySelectorAll("[data-people-grid]").forEach(grid => {
  const type = grid.dataset.peopleGrid;
  const people = type === "organisers" ? organisers : hackers;
  people.forEach(person => grid.append(createPersonCard(person, type === "organisers" ? "organiser" : "hacker")));
});

const dialog = document.querySelector("#profile-dialog");

function openProfile(person, type) {
  if (!dialog) return;

  const avatar = dialog.querySelector("[data-dialog-avatar]");
  avatar.style.background = type === "organiser" ? "var(--green)" : "var(--nav)";
  populateAvatar(avatar, person);
  dialog.querySelector("[data-dialog-name]").textContent = person.name;
  dialog.querySelector("[data-dialog-role]").textContent = person.role;
  dialog.querySelector("[data-dialog-category]").textContent = person.category;
  dialog.querySelector("[data-dialog-bio]").textContent = person.bio;
  dialog.querySelector("[data-dialog-skills]").textContent = person.skills ? `Focus and tools: ${person.skills}` : "";

  const links = dialog.querySelector("[data-dialog-links]");
  links.replaceChildren();
  if (person.links.length) {
    person.links.forEach(([label, url], index) => {
      const link = document.createElement("a");
      link.className = `profile-link ${index > 0 ? "secondary" : ""}`;
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${label} ↗`;
      links.append(link);
    });
  } else {
    const missing = document.createElement("p");
    missing.className = "links-missing";
    missing.textContent = "No verified public LinkedIn or GitHub profile was available.";
    links.append(missing);
  }

  document.body.classList.add("dialog-open");
  dialog.showModal();
}

document.addEventListener("click", event => {
  const card = event.target.closest("[data-person-id]");
  if (!card) return;
  const list = card.dataset.personType === "organiser" ? organisers : hackers;
  const person = list.find(item => item.id === card.dataset.personId);
  if (person) openProfile(person, card.dataset.personType);
});

if (dialog) {
  const closeDialog = () => {
    dialog.close();
    document.body.classList.remove("dialog-open");
  };

  dialog.querySelector("[data-dialog-close]").addEventListener("click", closeDialog);
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.querySelector("[data-primary-nav]");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("open", !open);
  });

  primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("open");
  }));
}
