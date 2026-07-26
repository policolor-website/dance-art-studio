export interface Room {
  slug: string;
  name: string;
  cabinSlug: string;
  price: number;
  size: number;
  capacity: string;
  beds: string;
  baths: number;
  image: string;
  gallery: string[];
  description: string;
  facilities: string[];
}

export interface Cabin {
  slug: string;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  capacity: string;
  roomsCount: number;
  toilets: number;
  showers: number;
  features: string[];
}

export const cabins: Cabin[] = [
  {
    slug: "cabana-1",
    name: "Cabana 1",
    description: "Cabana 1 dispune de 3 camere duble la parter, 2 toalete, living cu canapea extensibilă și bucătărie proprie complet utilată. Ideală pentru familii sau grupuri mici.",
    image: "/images/cabanele-rus/hotel-38291926.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291926.jpg",
      "/images/cabanele-rus/hotel-38291928.jpg",
      "/images/cabanele-rus/hotel-38291935.jpg",
      "/images/cabanele-rus/hotel-38291945.jpg",
    ],
    capacity: "6 Persoane",
    roomsCount: 3,
    toilets: 2,
    showers: 0,
    features: [
      "3 camere duble la parter",
      "2 toalete",
      "Living cu canapea extensibilă",
      "Bucătărie complet utilată",
    ],
  },
  {
    slug: "cabana-2",
    name: "Cabana 2",
    description: "Cabana 2 este cea mai spațioasă, cu 2 camere triple cu pat extra-large, 2 camere duble la etaj cu pat matrimonial, 3 toalete, 2 dușuri, living mare cu două canapele extensibile și bucătărie proprie complet utilată.",
    image: "/images/cabanele-rus/hotel-38291927.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291927.jpg",
      "/images/cabanele-rus/hotel-38291934.jpg",
      "/images/cabanele-rus/hotel-38291948.jpg",
      "/images/cabanele-rus/hotel-38291960.jpg",
    ],
    capacity: "10 Persoane",
    roomsCount: 4,
    toilets: 3,
    showers: 2,
    features: [
      "2 camere triple cu pat extra-large",
      "2 camere duble la etaj cu pat matrimonial",
      "3 toalete, 2 dușuri",
      "Living mare cu două canapele extensibile",
      "Bucătărie complet utilată",
    ],
  },
  {
    slug: "cabana-3",
    name: "Cabana 3",
    description: "Cabana 3 oferă 4 camere duble cu pat matrimonial la etaj, living cu două canapele extensibile, bucătărie proprie complet utilată, 6 toalete și un duș.",
    image: "/images/cabanele-rus/hotel-38291932.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291932.jpg",
      "/images/cabanele-rus/hotel-38291933.jpg",
      "/images/cabanele-rus/hotel-38291956.jpg",
      "/images/cabanele-rus/hotel-38291961.jpg",
    ],
    capacity: "8 Persoane",
    roomsCount: 4,
    toilets: 6,
    showers: 1,
    features: [
      "4 camere duble cu pat matrimonial la etaj",
      "Living cu două canapele extensibile",
      "Bucătărie complet utilată",
      "6 toalete, 1 duș",
    ],
  },
];

export function getCabinBySlug(slug: string): Cabin | undefined {
  return cabins.find((c) => c.slug === slug);
}

export function getRoomsByCabinSlug(cabinSlug: string): Room[] {
  return rooms.filter((r) => r.cabinSlug === cabinSlug);
}

export const rooms: Room[] = [
  {
    slug: "camera-dubla-1",
    name: "Camera dublă 1",
    cabinSlug: "cabana-1",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/camera-12415450.jpg",
    gallery: [
      "/images/cabanele-rus/camera-12415450.jpg",
      "/images/cabanele-rus/hotel-38291936.jpg",
      "/images/cabanele-rus/hotel-38291937.jpg",
    ],
    description:
      "Camera dublă 1 este situată la parterul Cabanei 1, oferind acces facil și o atmosferă intimă. Camera dispune de pat matrimonial și baie comună cu duș.\n\nFiecare cameră beneficiază de WiFi gratuit, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Prosoape, halat de baie și uscător de păr sunt puse la dispoziție.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Bucătăria comună a cabanei este complet utilată.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-2",
    name: "Camera dublă 2",
    cabinSlug: "cabana-1",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/hotel-38291936.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291936.jpg",
      "/images/cabanele-rus/hotel-38291938.jpg",
      "/images/cabanele-rus/hotel-38291939.jpg",
    ],
    description:
      "Camera dublă 2 este situată la parterul Cabanei 1, oferind acces facil și o atmosferă intimă. Camera dispune de pat matrimonial și baie comună cu duș.\n\nFiecare cameră beneficiază de WiFi gratuit, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Prosoape, halat de baie și uscător de păr sunt puse la dispoziție.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Bucătăria comună a cabanei este complet utilată.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-3",
    name: "Camera dublă 3",
    cabinSlug: "cabana-1",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/hotel-38291937.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291937.jpg",
      "/images/cabanele-rus/hotel-38291938.jpg",
      "/images/cabanele-rus/hotel-38291939.jpg",
    ],
    description:
      "Camera dublă 3 este situată la parterul Cabanei 1, oferind acces facil și o atmosferă intimă. Camera dispune de pat matrimonial și baie comună cu duș.\n\nFiecare cameră beneficiază de WiFi gratuit, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Prosoape, halat de baie și uscător de păr sunt puse la dispoziție.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Bucătăria comună a cabanei este complet utilată.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-tripla-1",
    name: "Camera triplă 1",
    cabinSlug: "cabana-2",
    price: 100,
    size: 18,
    capacity: "3 Persoane",
    beds: "Pat extra-large",
    baths: 1,
    image: "/images/cabanele-rus/camera-12415479.jpg",
    gallery: [
      "/images/cabanele-rus/camera-12415479.jpg",
      "/images/cabanele-rus/hotel-38291958.jpg",
      "/images/cabanele-rus/hotel-38291946.jpg",
    ],
    description:
      "Camera triplă 1 cu pat extra-large, situată în Cabana 2. Spațioasă și luminoasă, perfectă pentru familii sau grupuri.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Living mare cu două canapele extensibile.",
    facilities: ["WiFi gratuit", "TV", "Pat extra-large", "Birou", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-tripla-2",
    name: "Camera triplă 2",
    cabinSlug: "cabana-2",
    price: 100,
    size: 18,
    capacity: "3 Persoane",
    beds: "Pat extra-large",
    baths: 1,
    image: "/images/cabanele-rus/camera-12415487.jpg",
    gallery: [
      "/images/cabanele-rus/camera-12415487.jpg",
      "/images/cabanele-rus/hotel-38291947.jpg",
      "/images/cabanele-rus/hotel-38291948.jpg",
    ],
    description:
      "Camera triplă 2 cu pat extra-large, situată în Cabana 2. Spațioasă și luminoasă, perfectă pentru familii sau grupuri.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Living mare cu două canapele extensibile.",
    facilities: ["WiFi gratuit", "TV", "Pat extra-large", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-etaj-c2-1",
    name: "Camera dublă la etaj 1",
    cabinSlug: "cabana-2",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/camera-12415459.jpg",
    gallery: [
      "/images/cabanele-rus/camera-12415459.jpg",
      "/images/cabanele-rus/hotel-38291940.jpg",
      "/images/cabanele-rus/hotel-38291941.jpg",
    ],
    description:
      "Camera dublă la etaj 1 cu pat matrimonial, situată în Cabana 2. Oferă priveliște asupra grădinii și munților.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-etaj-c2-2",
    name: "Camera dublă la etaj 2",
    cabinSlug: "cabana-2",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/camera-12415464.jpg",
    gallery: [
      "/images/cabanele-rus/camera-12415464.jpg",
      "/images/cabanele-rus/hotel-38291942.jpg",
      "/images/cabanele-rus/hotel-38291943.jpg",
    ],
    description:
      "Camera dublă la etaj 2 cu pat matrimonial, situată în Cabana 2. Oferă priveliște asupra grădinii și munților.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-etaj-c3-1",
    name: "Camera dublă la etaj 1",
    cabinSlug: "cabana-3",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/camera-12415470.jpg",
    gallery: [
      "/images/cabanele-rus/camera-12415470.jpg",
      "/images/cabanele-rus/hotel-38291944.jpg",
      "/images/cabanele-rus/hotel-38291945.jpg",
    ],
    description:
      "Camera dublă la etaj 1 cu pat matrimonial, situată în Cabana 3. Oferă priveliște asupra grădinii și munților din jur.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Living cu două canapele extensibile.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-etaj-c3-2",
    name: "Camera dublă la etaj 2",
    cabinSlug: "cabana-3",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/hotel-38291938.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291938.jpg",
      "/images/cabanele-rus/hotel-38291939.jpg",
      "/images/cabanele-rus/hotel-38291954.jpg",
    ],
    description:
      "Camera dublă la etaj 2 cu pat matrimonial, situată în Cabana 3. Oferă priveliște asupra grădinii și munților din jur.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Living cu două canapele extensibile.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-etaj-c3-3",
    name: "Camera dublă la etaj 3",
    cabinSlug: "cabana-3",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/hotel-38291940.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291940.jpg",
      "/images/cabanele-rus/hotel-38291941.jpg",
      "/images/cabanele-rus/hotel-38291955.jpg",
    ],
    description:
      "Camera dublă la etaj 3 cu pat matrimonial, situată în Cabana 3. Oferă priveliște asupra grădinii și munților din jur.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Living cu două canapele extensibile.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
  {
    slug: "camera-dubla-etaj-c3-4",
    name: "Camera dublă la etaj 4",
    cabinSlug: "cabana-3",
    price: 100,
    size: 16,
    capacity: "3 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/cabanele-rus/hotel-38291941.jpg",
    gallery: [
      "/images/cabanele-rus/hotel-38291941.jpg",
      "/images/cabanele-rus/hotel-38291942.jpg",
      "/images/cabanele-rus/hotel-38291956.jpg",
    ],
    description:
      "Camera dublă la etaj 4 cu pat matrimonial, situată în Cabana 3. Oferă priveliște asupra grădinii și munților din jur.\n\nDispune de WiFi, TV, frigider, plită, cuptor cu microunde și ustensile de bucătărie complete. Baie comună cu duș.\n\nOaspeții au acces la piscină încălzită cu vedere, șemineu, terasă și grătar. Living cu două canapele extensibile.",
    facilities: ["WiFi gratuit", "TV", "Pat matrimonial", "Frigider", "Plită", "Cuptor cu microunde", "Mașină de spălat rufe", "Mașină de spălat vase", "Aparat de cafea/ceai", "Prosoape", "Halat de baie", "Uscător de păr", "Plasă de țânțari", "Parchet", "Intrare privată", "Acces piscină încălzită", "Șemineu"],
  },
];

export const facilities = [
  { icon: "pool", label: "Piscină încălzită", desc: "Piscină cu vedere la munte" },
  { icon: "hot_tub", label: "2 Ciubere încălzite", desc: "Jacuzzi exterior pentru relaxare" },
  { icon: "fireplace", label: "Șemineu", desc: "Atmosferă caldă și intimă" },
  { icon: "car", label: "Parcare gratuită", desc: "Parcare privată la fața locului" },
  { icon: "wifi", label: "WiFi gratuit", desc: "Internet în toate spațiile" },
  { icon: "garden", label: "Grădină 1,9 ha", desc: "Spațiu verde generos cu Valea Răchițele" },
  { icon: "bbq", label: "Grătar & Ceaun", desc: "Grătar profesional, ceaun și disc" },
  { icon: "kids", label: "Loc de joacă", desc: "Trambulină, tobogan, hamace" },
  { icon: "pets", label: "Ponei & Husky", desc: "Chico și Zoro, plimbări pentru copii" },
  { icon: "kitchen", label: "Bucătărie proprie", desc: "Complet utilată în fiecare cabană" },
  { icon: "restaurant", label: "Restaurant", desc: "Hanu` lu` Cobâlă vis-a-vis" },
  { icon: "archery", label: "Tir cu arcul", desc: "Săgeți cu vârf de oțel și badminton" },
];

export const reviews = [
  {
    name: "Ion Burlan",
    rating: 5,
    text: "Personal nota 10! Locație superba! Recomand cu toată încrederea! Vom reveni cu siguranță!",
  },
  {
    name: "Oaspete verificat",
    rating: 5,
    text: "Mâncare excelentă, tradițională, gazde foarte ospitaliere. O experiență autentică în Maramureș!",
  },
  {
    name: "Călător individual",
    rating: 5,
    text: "Foarte relaxantă locația, nu ești deloc în aglomerație (rural), un loc unde te poți relaxa și încărca bateriile. Oamenii foarte primitori și deschiși la vorbă, de nota 10+. De mâncare chiar nu am ce să mai zic, TOP!",
  },
  {
    name: "Familie cu copil mic",
    rating: 5,
    text: "Copiii s-au bucurat de ponei, trambulină și loc de joacă. Cabanele sunt curate, confortabile și au tot ce ai nevoie. Gazdele sunt minunate!",
  },
  {
    name: "Grup de prieteni",
    rating: 5,
    text: "Am închiriat integral și ne-am simțit excelent. Piscina, ciuberele și grătarul profesional au făcut minuni. Recomandăm pentru grupuri!",
  },
  {
    name: "Cuplu tânăr",
    rating: 5,
    text: "Un loc de poveste în inima Maramureșului. Șemineu, piscină cu vedere la munte și liniște deplină. Perfect pentru o escapadă romantică.",
  },
];

export const blogPosts = [
  {
    slug: "maramuresul-traditional-obiective-unesco",
    title: "Maramureșul tradițional — Obiective UNESCO",
    excerpt: "Biserica de lemn din Budești, unde se păstrează cămașa de zale a haiducului Pintea Viteazul, este doar unul dintre obiectivele UNESCO din zonă...",
    image: "/images/cabanele-rus/hotel-38291944.jpg",
  },
  {
    slug: "circuitul-turistic-cavnic-si-breb",
    title: "Circuitul turistic Cavnic și Breb",
    excerpt: "La doar 5 km de Cabanele Rus se află pârtiile de schi de la Cavnic și Casele Prințului Charles din Breb, introduse în circuitul turistic...",
    image: "/images/cabanele-rus/hotel-38291930.jpg",
  },
  {
    slug: "bucurii-culinare-traditie-maramureseana",
    title: "Bucurii culinare — Tradiție maramureșeană",
    excerpt: "La Cabanele Rus se servește mic dejun, prânz și cină tradițională maramureșeană. Opțiuni All inclusive și Ultra All Inclusive disponibile...",
    image: "/images/cabanele-rus/hotel-38291934.jpg",
  },
];

export type GalleryCategory = "toate" | "camere" | "exterior" | "facilitati";

export interface GalleryImage {
  src: string;
  category: "camere" | "exterior" | "facilitati";
  title: string;
}

export const galleryImages: GalleryImage[] = [
  // Exterior
  { src: "/images/cabanele-rus/hotel-38291926.jpg", category: "exterior", title: "Exterior cabană cu piscină" },
  { src: "/images/cabanele-rus/hotel-38291927.jpg", category: "exterior", title: "Fațada cu terasă" },
  { src: "/images/cabanele-rus/hotel-38291932.jpg", category: "exterior", title: "Grădină cu cabană" },
  { src: "/images/cabanele-rus/hotel-38291933.jpg", category: "exterior", title: "Vedere exterioară" },
  { src: "/images/cabanele-rus/hotel-38291944.jpg", category: "exterior", title: "Vedere de sus" },
  { src: "/images/cabanele-rus/hotel-38291951.jpg", category: "exterior", title: "Grădină cu ponei" },
  { src: "/images/cabanele-rus/hotel-38291952.jpg", category: "exterior", title: "Câini Husky" },
  { src: "/images/cabanele-rus/hotel-38291953.jpg", category: "exterior", title: "Peisaj natură" },
  { src: "/images/cabanele-rus/hotel-38291954.jpg", category: "exterior", title: "Vedere cabană" },
  { src: "/images/cabanele-rus/hotel-38291957.jpg", category: "exterior", title: "Exterior noaptea" },
  { src: "/images/cabanele-rus/hotel-38291964.jpg", category: "exterior", title: "Grădină peisaj" },
  { src: "/images/cabanele-rus/hotel-38291965.jpg", category: "exterior", title: "Exterior" },
  // Interior
  { src: "/images/cabanele-rus/hotel-38291928.jpg", category: "exterior", title: "Living cu șemineu" },
  { src: "/images/cabanele-rus/hotel-38291934.jpg", category: "exterior", title: "Living / sală de mese" },
  { src: "/images/cabanele-rus/hotel-38291935.jpg", category: "exterior", title: "Bucătărie" },
  { src: "/images/cabanele-rus/hotel-38291945.jpg", category: "exterior", title: "Living cu canapea" },
  { src: "/images/cabanele-rus/hotel-38291948.jpg", category: "exterior", title: "Bucătărie complet echipată" },
  { src: "/images/cabanele-rus/hotel-38291955.jpg", category: "exterior", title: "Detalii decor" },
  { src: "/images/cabanele-rus/hotel-38291956.jpg", category: "exterior", title: "Sală de mese" },
  { src: "/images/cabanele-rus/hotel-38291960.jpg", category: "exterior", title: "Living zonă relaxare" },
  { src: "/images/cabanele-rus/hotel-38291961.jpg", category: "exterior", title: "Bucătărie" },
  // Camere
  { src: "/images/cabanele-rus/camera-12415450.jpg", category: "camere", title: "Camera dublă la parter" },
  { src: "/images/cabanele-rus/camera-12415459.jpg", category: "camere", title: "Camera dublă la etaj" },
  { src: "/images/cabanele-rus/camera-12415464.jpg", category: "camere", title: "Camera dublă la etaj" },
  { src: "/images/cabanele-rus/camera-12415470.jpg", category: "camere", title: "Camera dublă la etaj" },
  { src: "/images/cabanele-rus/camera-12415479.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/cabanele-rus/camera-12415487.jpg", category: "camere", title: "Camera dublă family" },
  { src: "/images/cabanele-rus/camera-12415495.jpg", category: "camere", title: "Camera dublă family" },
  { src: "/images/cabanele-rus/hotel-38291936.jpg", category: "camere", title: "Cameră dublă" },
  { src: "/images/cabanele-rus/hotel-38291937.jpg", category: "camere", title: "Cameră dublă" },
  { src: "/images/cabanele-rus/hotel-38291938.jpg", category: "camere", title: "Cameră cu vedere" },
  { src: "/images/cabanele-rus/hotel-38291940.jpg", category: "camere", title: "Cameră dublă" },
  { src: "/images/cabanele-rus/hotel-38291941.jpg", category: "camere", title: "Cameră etaj" },
  { src: "/images/cabanele-rus/hotel-38291946.jpg", category: "camere", title: "Camera dublă family" },
  { src: "/images/cabanele-rus/hotel-38291947.jpg", category: "camere", title: "Camera dublă family" },
  { src: "/images/cabanele-rus/hotel-38291958.jpg", category: "camere", title: "Cameră dublă" },
  { src: "/images/cabanele-rus/hotel-38291939.jpg", category: "camere", title: "Baie / duș" },
  { src: "/images/cabanele-rus/hotel-38291959.jpg", category: "camere", title: "Baie / duș" },
  // Facilități
  { src: "/images/cabanele-rus/hotel-38291930.jpg", category: "facilitati", title: "Piscină cu vedere" },
  { src: "/images/cabanele-rus/hotel-38291931.jpg", category: "facilitati", title: "Terasă cu mese" },
  { src: "/images/cabanele-rus/hotel-38291942.jpg", category: "facilitati", title: "Terasă cu grătar" },
  { src: "/images/cabanele-rus/hotel-38291943.jpg", category: "facilitati", title: "Piscină / jacuzzi" },
  { src: "/images/cabanele-rus/hotel-38291949.jpg", category: "facilitati", title: "Terasă exterior" },
  { src: "/images/cabanele-rus/hotel-38291950.jpg", category: "facilitati", title: "Piscină cu vedere" },
  { src: "/images/cabanele-rus/hotel-38291962.jpg", category: "facilitati", title: "Terasă" },
  { src: "/images/cabanele-rus/hotel-38291963.jpg", category: "facilitati", title: "Piscină" },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

export interface Activity {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  gallery: string[];
}

export const activities: Activity[] = [
  {
    slug: "piscina-incalzita",
    title: "Piscină încălzită cu vedere",
    shortDescription:
      "Piscină exterioară încălzită cu vedere spectaculoasă la munte, disponibilă în toate sezoanele.",
    description:
      "Bucurați-vă de o piscină exterioară încălzită cu vedere spectaculoasă la munții din Maramureș. Indiferent de sezon, piscina este locul ideal pentru relaxare după o zi de drumeție sau schi.\n\nPiscina este încălzită și disponibilă pe tot parcursul anului, oferind o experiență unică de relaxare în mijlocul naturii. Apa caldă și peisajul montan creează o atmosferă de neuitat.\n\nLângă piscină găsiți șezlonguri pentru relaxare și 2 ciubere exterioare încălzite (jacuzzi) pentru o experiență completă de wellness.",
    image: "/images/cabanele-rus/hotel-38291930.jpg",
    icon: "🏊",
    gallery: [
      "/images/cabanele-rus/hotel-38291930.jpg",
      "/images/cabanele-rus/hotel-38291943.jpg",
      "/images/cabanele-rus/hotel-38291950.jpg",
      "/images/cabanele-rus/hotel-38291963.jpg",
    ],
  },
  {
    slug: "plimbari-cu-poneii",
    title: "Plimbări cu poneii",
    shortDescription:
      "Cei 2 ponei drăgălași, Chico și Zoro, vă așteaptă la plimbare. Distracție garantată pentru copii!",
    description:
      "Cei 2 ponei drăgălași, Chico și Zoro, vă așteaptă la plimbare pe proprietatea de 1,9 ha. Copiii se pot bucura de plimbări cu poneii în siguranță, sub supravegherea gazdelor.\n\nPoneii sunt blânzi și prietenoși, perfecți pentru copii de toate vârstele. Plimbările cu poneii sunt o activitate care aduce bucurie și zâmbete, creând amintiri de neuitat.\n\nPe lângă ponei, pe proprietate găsiți și 2 câini Husky prietenoși, care completează experiența rurală autentică.",
    image: "/images/cabanele-rus/hotel-38291951.jpg",
    icon: "�",
    gallery: [
      "/images/cabanele-rus/hotel-38291951.jpg",
      "/images/cabanele-rus/hotel-38291952.jpg",
    ],
  },
  {
    slug: "curse-cu-sanii-trase-de-husky",
    title: "Curse cu sanii trase de Husky",
    shortDescription:
      "La doar 2 minute de cabanele noastre se organizează curse cu sanii trase de câini Husky.",
    description:
      "La doar 2 minute de cabanele noastre se organizează curse cu sanii trase de câini Husky. O experiență unică în Maramureș, perfectă pentru iubitorii de animale și de aventură.\n\nCâinii Husky sunt dresați pentru a trage sania și oferă o experiență plină de adrenalină și distracție. Activitatea este disponibilă în sezonul de iarnă, când zăpada acoperă peisajul maramureșean.\n\nPe proprietate avem propriii noștri câini Husky prietenoși, pe care îi puteți cunoaște și mângâia.",
    image: "/images/cabanele-rus/hotel-38291952.jpg",
    icon: "�",
    gallery: [
      "/images/cabanele-rus/hotel-38291952.jpg",
      "/images/cabanele-rus/hotel-38291953.jpg",
    ],
  },
  {
    slug: "schi-cavnic",
    title: "Schi la Cavnic",
    shortDescription:
      "La numai 10 minute de noi se găsesc pârtiile de ski de la Cavnic (5 km).",
    description:
      "La numai 10 minute de cabanele noastre se găsesc pârtiile de ski de la Cavnic, la 5 km distanță. Pârtiile oferă trasee de dificultate variată, de la începători la avansați.\n\nSezonul de schi se întinde de obicei din decembrie până în martie, iar echipament de schi poate fi închiriat la fața locului. Pârtiile din Cavnic sunt ideale pentru familii și grupuri de prieteni.\n\nDupă o zi pe pârtie, reveniți la cabane pentru a vă relaxa la piscină încălzită sau la ciuberele exterioare.",
    image: "/images/cabanele-rus/hotel-38291944.jpg",
    icon: "⛷️",
    gallery: [
      "/images/cabanele-rus/hotel-38291944.jpg",
      "/images/cabanele-rus/hotel-38291954.jpg",
    ],
  },
  {
    slug: "drumeții-creasta-cocosului",
    title: "Drumeție pe Creasta Cocoșului",
    shortDescription:
      "Traseu montan spectaculos în Munții Gutinului — Creasta Cocoșului, o aventură de neuitat.",
    description:
      "Creasta Cocoșului din Munții Gutinului este un traseu montan spectaculos, care oferă priveliști panoramice unice asupra Maramureșului. Traseul este potrivit pentru drumeți cu experiență și oferă peisaje de o frumusețe rară.\n\nDrumeția pe Creasta Cocoșului te poartă prin formațiuni stâncoase unice, păduri de conifere și pajiști alpine. Este o experiență care îmbină efortul fizic cu recompensa peisagistică extraordinară.\n\nRecomandăm echipament adecvat de munte, apă și o cameră foto pentru a imortaliza peisajele spectaculoase.",
    image: "/images/cabanele-rus/hotel-38291953.jpg",
    icon: "🥾",
    gallery: [
      "/images/cabanele-rus/hotel-38291953.jpg",
      "/images/cabanele-rus/hotel-38291954.jpg",
    ],
  },
  {
    slug: "calarie-casa-pascu",
    title: "Călărie — Centrul Casa Pașcu",
    shortDescription:
      "Centrul de Călărie Casa Pașcu la doar 1 km de cabanele noastre.",
    description:
      "Centrul de Călărie Casa Pașcu, situat la doar 1 km de cabanele noastre, oferă lecții de călărie pentru începători și plimbări organizate pentru cei mai experimentați.\n\nCaii sunt docili și bine dresați, perfecți pentru explorarea traseelor montane din jurul Budeștiului. Plimbările călare te duc prin peisaje spectaculoase, pe poteci forestiere și prin poieni cu flori sălbatice.\n\nEste o experiență unică care îmbină dragostea pentru animale cu pasiunea pentru natură și aventură.",
    image: "/images/cabanele-rus/hotel-38291951.jpg",
    icon: "🐎",
    gallery: [
      "/images/cabanele-rus/hotel-38291951.jpg",
    ],
  },
  {
    slug: "bazine-apă-sarată-ocna-șugatag",
    title: "Bazine cu apă sărată — Ocna Șugatag",
    shortDescription:
      "La 13 km de cabanele noastre, bazinele cu apă sărată de la Ocna Șugatag.",
    description:
      "La doar 13 km de cabanele noastre se află bazinele cu apă sărată de la Ocna Șugatag. Apa sărată are proprietăți terapeutice recunoscute, fiind ideală pentru relaxare și tratament.\n\nBazinele oferă o experiență de relaxare completă, cu apă sărată încălzită și un cadru natural spectaculos. Este locul perfect pentru a vă relaxa după o zi de explorat Maramureșul.\n\nOcna Șugatag este o stațiune balneară renumită, cu o tradiție îndelungată în tratamente cu apă sărată.",
    image: "/images/cabanele-rus/hotel-38291943.jpg",
    icon: "💧",
    gallery: [
      "/images/cabanele-rus/hotel-38291943.jpg",
      "/images/cabanele-rus/hotel-38291950.jpg",
    ],
  },
  {
    slug: "izvor-borcut",
    title: "Izvor BORCUT — Apă minerală",
    shortDescription:
      "La 0,8 km, un izvor din care țâșnește apă minerală carbogazoasă cu numeroase beneficii pentru organism.",
    description:
      "La doar 0,8 km de cabanele noastre se află izvorul BORCUT, din care țâșnește apă minerală carbogazoasă cu numeroase beneficii pentru organism.\n\nApă minerală proaspătă, direct din sursă, este o atracție pentru turiștii care apreciază calitatea și puritatea naturii. Izvorul BORCUT este cunoscut pentru proprietățile sale terapeutice și pentru gustul unic al apei carbogazoase naturale.\n\nO plimbare scurtă până la izvor este o activitate plăcută pentru toți oaspeții, oferind și ocazia de a admira peisajul rural din Budești.",
    image: "/images/cabanele-rus/hotel-38291953.jpg",
    icon: "🌊",
    gallery: [
      "/images/cabanele-rus/hotel-38291953.jpg",
    ],
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}
