export interface Course {
  slug: string;
  name: string;
  ageRange: string;
  level: string;
  duration: string;
  schedule: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  curriculum: string[];
}

export interface Teacher {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements: string[];
}

export const courses: Course[] = [
  {
    slug: "ballet-babies",
    name: "Ballet Bebeluși",
    ageRange: "3-5 ani",
    level: "Inițiere",
    duration: "45 min",
    schedule: "Sâmbătă 10:00",
    price: 120,
    image: "/images/ballet/ballet-girl.jpg",
    gallery: [
      "/images/ballet/ballet-girl.jpg",
      "/images/ballet/ballet-jump.jpg",
      "/images/ballet/ballet-shoes.jpg",
    ],
    description:
      "Cursul de Ballet Bebeluși introduce cei mici în lumea magică a baletului prin joc, muzică și mișcare. Copiii învață noțiuni de bază de coordonare, ritm și expresie corporală într-un mediu plăcut și sigur.\n\nOrele sunt concepute pentru a stimula imaginația și creativitatea, folosind povești și jocuri de rol care îi ajută să descopere bucuria mișcării. Accentul se pune pe dezvoltarea motricității fine, echilibrului și încrederii în sine.\n\nLa finalul anului, cei mici participă la un spectacol de gală unde prezintă familiei ce au învățat.",
    curriculum: [
      "Mișcare și ritm prin joc",
      "Coordinare și echilibru",
      "Exprimare corporală și mimică",
      "Noțiuni de bază poziții balet",
      "Povești dansate și imaginație",
      "Spectacol de final de an",
    ],
  },
  {
    slug: "ballet-copii",
    name: "Ballet Copii",
    ageRange: "6-9 ani",
    level: "Începători",
    duration: "60 min",
    schedule: "Marți & Joi 17:00",
    price: 180,
    image: "/images/ballet/ballet-jump.jpg",
    gallery: [
      "/images/ballet/ballet-jump.jpg",
      "/images/ballet/ballet-group.jpg",
      "/images/ballet/ballet-road.jpg",
    ],
    description:
      "Cursul de Ballet Copii este dedicat copiilor care doresc să învețe tehnica clasică de balet. Elevii descoperă pozițiile fundamentale, exercițiile la bară și în centru, într-un program structurat și progresiv.\n\nPe lângă tehnică, copiii învață disciplina, răbdarea și munca în echipă — valori esențiale dansului clasic. Orele combină exerciții tehnice cu momente creative și improvizatie.\n\nElevii participă la examene de nivel și la spectacole anuale, având ocazia să danseze pe scenă în fața publicului.",
    curriculum: [
      "Poziții fundamentale balet (I-V)",
      "Exerciții la bară",
      "Exerciții în centru",
      "Sărituri și allegro",
      "Flexibilitate și întinderi",
      "Examene de nivel și spectacole",
    ],
  },
  {
    slug: "ballet-adolescenti",
    name: "Ballet Adolescenți",
    ageRange: "10-14 ani",
    level: "Intermediari",
    duration: "90 min",
    schedule: "Luni, Miercuri, Vineri 18:00",
    price: 250,
    image: "/images/ballet/dancer-stage.jpg",
    gallery: [
      "/images/ballet/dancer-stage.jpg",
      "/images/ballet/ballet-black-dress.jpg",
      "/images/ballet/ballet-bw.jpg",
    ],
    description:
      "Cursul de Ballet Adolescenți este destinat elevilor cu experiență care doresc să își perfecționeze tehnica și să aprofundeze studiul baletului clasic. Programul include tehnică avansată la bară, pointe, variații din repertoriul clasic și pregătire pentru competiții.\n\nElevii lucrează individual și în grup, dezvoltând atât tehnica cât și expresia artistică. Accentul se pune pe precizie, grație și interpretare.\n\nCursul include pregătire pentru examene internaționale și participare la competiții naționale și internaționale de balet.",
    curriculum: [
      "Tehnică avansată la bară și centru",
      "Pointe (pentru elevii pregătiți)",
      "Variații din repertoriu clasic",
      "Pas de deux",
      "Pregătire competiții și examene",
      "Spectacole și gala anuală",
    ],
  },
  {
    slug: "ballet-adulti",
    name: "Ballet Adulți",
    ageRange: "18+ ani",
    level: "Toate nivelurile",
    duration: "75 min",
    schedule: "Marți & Joi 19:30",
    price: 200,
    image: "/images/ballet/ballet-dancing.jpg",
    gallery: [
      "/images/ballet/ballet-dancing.jpg",
      "/images/ballet/ballet-white.jpg",
      "/images/ballet/ballet-shoes.jpg",
    ],
    description:
      "Cursul de Ballet Adulți este destinat persoanelor care doresc să descopere sau să redescopere baletul, indiferent de nivel sau experiență anterioară. Orele combină tehnică clasică cu exerciții de flexibilitate și tonifiere.\n\nBaletul pentru adulți oferă multiple beneficii: îmbunătățirea posturii, tonifierea musculară, flexibilitate, coordonare și relaxare. Este o modalitate elegantă și plăcută de a face mișcare.\n\nNiciun nivel anterior nu este necesar — cursul se adaptează începătorilor dar și celor care au mai făcut balet în trecut.",
    curriculum: [
      "Tehnică clasică adaptată",
      "Flexibilitate și postură",
      "Tonifiere și condiție fizică",
      "Exerciții la bară și centru",
      "Coregrafii simple",
      "Relaxare și well-being",
    ],
  },
  {
    slug: "ballet-avansati",
    name: "Ballet Avansați / Pre-profesional",
    ageRange: "14+ ani",
    level: "Avansați",
    duration: "120 min",
    schedule: "Luni-Sâmbătă (program intens)",
    price: 400,
    image: "/images/ballet/ballet-bw.jpg",
    gallery: [
      "/images/ballet/ballet-bw.jpg",
      "/images/ballet/ballet-black-dress.jpg",
      "/images/ballet/dancer-stage.jpg",
    ],
    description:
      "Programul Pre-profesional este destinat elevilor talentați care vizează o carieră în dans. Programul intensiv include tehnică avansată, pointe, repertoriu, pas de deux, dans contemporan și pregătire fizică specifică.\n\nElevii beneficiază de pregătire individualizată, participare la competiții internaționale și masterclass-uri cu invitați speciali. Programul este structurat pentru a pregăti elevii pentru audition-uri la companii și academii de balet.\n\nAdmiterea se face pe bază de audiție. Numărul de locuri este limitat.",
    curriculum: [
      "Tehnică avansată și pointe",
      "Repertoriu clasic și neoclasic",
      "Pas de deux și parteneriat",
      "Dans contemporan",
      "Pregătire fizică și nutriție",
      "Audiții și competiții internaționale",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const teachers: Teacher[] = [
  {
    slug: "fondatoare",
    name: "Echipa Dance Art",
    role: "Fondatoare & Profesor Principal",
    image: "/images/ballet/dancer-stage.jpg",
    bio: "Echipa Dance Art Studio este formată din profesioniști cu peste 15 ani de experiență în baletul clasic, care au dansat în producții naționale și internaționale înainte de a dedica viața predării.",
    achievements: [
      "Absolventă Academia de Balet",
      "15+ ani experiență scenica",
      "Certificare pedagogică balet",
      "Membru al asociației profesionale de dans",
    ],
  },
  {
    slug: "maria",
    name: "Maria",
    role: "Profesor Ballet Copii",
    image: "/images/ballet/ballet-girl.jpg",
    bio: "Maria specializează în predarea baletului pentru copii, cu o abordare prietenoasă și creativă. Are o pasiune deosebită pentru lucrul cu cei mici.",
    achievements: [
      "Absolventă Conservator de Dans",
      "Specializare pedagogie copii",
      "10+ ani experiență cu copii",
      "Coregraf spectacole copii",
    ],
  },
  {
    slug: "alexandra",
    name: "Alexandra",
    role: "Profesor Pointe & Repertoriu",
    image: "/images/ballet/ballet-black-dress.jpg",
    bio: "Alexandra este specialist în tehnică pointe și repertoriu clasic. A fost prim-balerină și predă tehnica avansată elevilor care vizează performanța.",
    achievements: [
      "Prim-balerină companie națională",
      "Specializare pointe și repertoriu",
      "Masterclass-uri internaționale",
      "Juriu competiții de balet",
    ],
  },
];

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return teachers.find((t) => t.slug === slug);
}

export const facilities = [
  { icon: "mirror", label: "Oglinzi profesionale", desc: "Oglinzi pe întreg peretele" },
  { icon: "floor", label: "Parchet profesional", desc: "Parchet dans, rezistent" },
  { icon: "barre", label: "Bare de balet", desc: "Bare reglabile pe două niveluri" },
  { icon: "piano", label: "Pian live", desc: "Pianist acompaniator" },
  { icon: "sound", label: "Sistem audio", desc: "Sistem audio profesional" },
  { icon: "ac", label: "Aer condiționat", desc: "Climatizare pentru confort" },
  { icon: "lockers", label: "Vestiar", desc: "Vestiar cu dulapuri individuale" },
  { icon: "water", label: "Apă și refresh", desc: "Zonă de hidratare" },
  { icon: "stage", label: "Scenă de repetiție", desc: "Mini-scenă pentru spectacole" },
  { icon: "costumes", label: "Costume", desc: "Depozitare costume de scenă" },
  { icon: "parking", label: "Parcare gratuită", desc: "Parcare pentru părinți" },
  { icon: "wifi", label: "WiFi gratuit", desc: "Internet în toată școala" },
];

export const reviews = [
  {
    name: "Laura Popescu",
    rating: 5,
    text: "Fiica mea a crescut enorm de când vine la Dance Art Studio. Nu doar ca tehnică, dar și ca încredere în sine. Profesorii sunt extraordinari și cu multă pasiune!",
  },
  {
    name: "Andrei Mihalache",
    rating: 5,
    text: "Cea mai bună școală de balet din oraș. Atmosfera este caldă, profesională și copiii învață cu plăcere. Recomand cu toată încrederea!",
  },
  {
    name: "Cristina Dumitrescu",
    rating: 5,
    text: "Fac cursul de adulți de 2 ani și m-am îndrăgostit de balet. M-am îmbunătățit postura, flexibilitatea și starea generală de spirit. O echipă minunată!",
  },
  {
    name: "Mihaela Georgescu",
    rating: 5,
    text: "Spectacolul de final de an a fost absolut superb. Se vede munca și dedicația profesorilor. Suntem o familie a baletului aici.",
  },
  {
    name: "Radu Ionescu",
    rating: 5,
    text: "Fiica mea a fost admisă la Academia de Balet după pregătirea la Dance Art Studio. Programul pre-profesional este de un nivel excepțional. Mulțumim!",
  },
  {
    name: "Elena Vasilescu",
    rating: 5,
    text: "O școală unde copiii învață disciplina și arta cu bucurie. Comunicarea cu părinții este excelentă, iar progresul este vizibil. Recomand!",
  },
];

export const blogPosts = [
  {
    slug: "beneficiile-baletului-copii",
    title: "Beneficiile baletului pentru copii",
    excerpt: "Baletul dezvoltă nu doar corpul, dar și mintea. Descoperă cum dansul clasic ajută copiii să crească armonios — de la postură la încredere în sine...",
    image: "/images/ballet/ballet-girl.jpg",
  },
  {
    slug: "spectacol-gala-anuala",
    title: "Gala anuală — Spectacol de balet",
    excerpt: "Elevii Dance Art Studio au prezentat un spectacol excepțional la Gala Anuală. Coregrafii clasice și contemporane, costume și emoție pe scenă...",
    image: "/images/ballet/dancer-stage.jpg",
  },
  {
    slug: "scoaterea-papucilor-pointe",
    title: "Ghid complet pentru pantofi pointe",
    excerpt: "Când este momentul potrivit pentru a începe pointe? Ce trebuie să știi despre pantofii de pointe, pregătirea piciorului și selecția corectă...",
    image: "/images/ballet/ballet-shoes.jpg",
  },
];

export type GalleryCategory = "toate" | "spectacole" | "repetitii" | "studio";

export interface GalleryImage {
  src: string;
  category: "spectacole" | "repetitii" | "studio";
  title: string;
}

export const galleryImages: GalleryImage[] = [
  // Spectacole
  { src: "/images/ballet/dancer-stage.jpg", category: "spectacole", title: "Spectacol de gală" },
  { src: "/images/ballet/ballet-group.jpg", category: "spectacole", title: "Dans de grup pe scenă" },
  { src: "/images/ballet/ballet-black-dress.jpg", category: "spectacole", title: "Solo pe scenă" },
  { src: "/images/ballet/ballet-bw.jpg", category: "spectacole", title: "Moment artistic" },
  { src: "/images/ballet/ballet-jump.jpg", category: "spectacole", title: "Săritură de balet" },
  { src: "/images/ballet/ballet-dancing.jpg", category: "spectacole", title: "Performanță scenică" },
  // Repetiții
  { src: "/images/ballet/ballet-girl.jpg", category: "repetitii", title: "Repetiție cu cei mici" },
  { src: "/images/ballet/ballet-white.jpg", category: "repetitii", title: "Pregătire repetiție" },
  { src: "/images/ballet/ballet-road.jpg", category: "repetitii", title: "Exercițiu individual" },
  // Studio
  { src: "/images/ballet/ballet-shoes.jpg", category: "studio", title: "Pantofi de balet" },
  { src: "/images/ballet/ballet-bw.jpg", category: "studio", title: "Studio — poză artistică" },
  { src: "/images/ballet/dancer-stage.jpg", category: "studio", title: "Studio — pregătire" },
];

export interface Event {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  gallery: string[];
}

export const events: Event[] = [
  {
    slug: "gala-anuala",
    title: "Gala Anuală de Balet",
    shortDescription:
      "Spectacolul de final de an unde toți elevii școlii dansează pe scenă în fața familiei și prietenilor.",
    description:
      "Gala Anuală este evenimentul cel mai așteptat al anului. Toți elevii Dance Art Studio, de la cei mici la avansați, urcă pe scenă și prezintă coregrafii pregătite pe parcursul anului.\n\nSpectacolul include variații clasice, coregrafii contemporane și momente speciale. Costumele, decorul și muzica sunt pregătite cu atenție pentru a oferi o experiență de neuitat.\n\nGala este o ocazie pentru elevi de a trăi emoția scenei și de a arăta progresul făcut. Este deschisă publicului și are loc într-o sală de spectacol profesională.",
    image: "/images/ballet/dancer-stage.jpg",
    icon: "🎭",
    gallery: [
      "/images/ballet/dancer-stage.jpg",
      "/images/ballet/ballet-group.jpg",
      "/images/ballet/ballet-black-dress.jpg",
    ],
  },
  {
    slug: "competitii-nationale",
    title: "Competiții Naționale",
    shortDescription:
      "Elevii avansați participă la competiții naționale de balet, reprezentând Dance Art Studio.",
    description:
      "Elevii din programul pre-profesional participă la competiții naționale de balet, unde sunt evaluați de jurați internaționali. Competițiile oferă ocazia de a compara nivelul tehnic, de a câștiga experiență scenică și de a face vizibilitate.\n\nPregătirea pentru competiții este intensivă și include repetiții individuale, coregrafii personalizate și pregătire psihologică. Elevii noștri au obținut numeroase premii și mențiuni de-a lungul anilor.\n\nParticiparea la competiții este opțională și se face pe bază de selecție.",
    image: "/images/ballet/ballet-bw.jpg",
    icon: "🏆",
    gallery: [
      "/images/ballet/ballet-bw.jpg",
      "/images/ballet/ballet-jump.jpg",
    ],
  },
  {
    slug: "masterclass",
    title: "Masterclass-uri cu invitați",
    shortDescription:
      "Masterclass-uri susținute de balerini și coregrafi invitați din companii naționale și internaționale.",
    description:
      "Pe parcursul anului, Dance Art Studio organizează masterclass-uri cu invitați speciali — balerini, coregrafi și pedagogi din companii naționale și internaționale.\n\nMasterclass-urile oferă elevilor ocazia unică de a învăța de la profesioniști cu experiență scenică, de a descoperi stiluri diferite și de a primi feedback personalizat. Sunt deschise atât elevilor școlii cât și dansatorilor externi.\n\nProgramul masterclass-urilor este anunțat în avans și necesită înscriere separată.",
    image: "/images/ballet/ballet-black-dress.jpg",
    icon: "✨",
    gallery: [
      "/images/ballet/ballet-black-dress.jpg",
      "/images/ballet/dancer-stage.jpg",
    ],
  },
  {
    slug: "examene-nivel",
    title: "Examene de Nivel",
    shortDescription:
      "Examene recunoscute internațional care atestă nivelul tehnic al elevilor noștri.",
    description:
      "Dance Art Studio pregătește elevii pentru examene de nivel recunoscute internațional, care atestă competența tehnică în baletul clasic. Examenele sunt susținute în fața unui juriu extern și oferă o recunoaștere oficială a nivelului atins.\n\nPregătirea pentru examene este structurată și progresiv, urmărind un syllabus recunoscut. Elevii care promovează examenele primesc certificat și diplomă.\n\nExamenele sunt opționale și se adresează elevilor care doresc o recunoaștere oficială a pregătirii lor.",
    image: "/images/ballet/ballet-shoes.jpg",
    icon: "📜",
    gallery: [
      "/images/ballet/ballet-shoes.jpg",
      "/images/ballet/ballet-white.jpg",
    ],
  },
  {
    slug: "tabara-balet",
    title: "Tabără de Balet",
    shortDescription:
      "Tabără de vară intensivă cu program de balet, dans contemporan și activități recreative.",
    description:
      "Tabăra de Balet Dance Art Studio este un program de vară intensiv care combină pregătirea tehnică de balet cu dans contemporan, stretching, workshops și activități recreative.\n\nTabăra este deschisă elevilor de toate vârstele și nivelurile. Programul zilnic include cursuri de tehnică, coregrafii, improvisație și momente de relaxare. Este o ocazie excelentă pentru a progresa rapid într-un mediu prietenos și motivant.\n\nTabăra are loc în luna iulie și necesită înscriere anticipată. Locurile sunt limitate.",
    image: "/images/ballet/ballet-girl.jpg",
    icon: "☀️",
    gallery: [
      "/images/ballet/ballet-girl.jpg",
      "/images/ballet/ballet-jump.jpg",
    ],
  },
  {
    slug: "spectacol-craciun",
    title: "Spectacol de Crăciun",
    shortDescription:
      "Spectacol tematic de Crăciun cu coregrafii speciale și momente festive.",
    description:
      "Spectacolul de Crăciun este un eveniment tradițional al Dance Art Studio, unde elevii prezintă coregrafii inspirate din sezonul festiv. De la Spărgătorul de Nuci la momente originale, spectacolul aduce magia sărbătorilor pe scenă.\n\nSpectacolul este deschis publicului și are loc în luna decembrie. Elevii lucrează la coregrafii speciale începând din toamnă, iar costumele și decorurile sunt pregătite tematic.\n\nEste un eveniment cu intrare liberă pentru familie și prieteni, care încheie anul cu magie și emoție.",
    image: "/images/ballet/ballet-white.jpg",
    icon: "🎄",
    gallery: [
      "/images/ballet/ballet-white.jpg",
      "/images/ballet/dancer-stage.jpg",
    ],
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
