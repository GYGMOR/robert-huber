export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  price: string;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  power: string;
  image: string;
  location: string;
  category: "Neuwagen" | "Vorführwagen" | "Occasion";
  isFeatured?: boolean;
  highlights?: string;
  bodyType?: string;
  driveTrain?: string;
}

export const mockVehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Mercedes-AMG",
    model: "G 63 " + "Magno Edition",
    price: "245'900",
    year: "2024",
    mileage: "50",
    fuel: "Benzin",
    transmission: "Automatik",
    power: "585 PS",
    image: "/auto-Bilder/test1.jpg",
    location: "Villmergen",
    category: "Neuwagen",
    highlights: "AMG Line | Magno Pack | Night-Paket II | Burmester Surround-Sound",
    bodyType: "SUV",
    driveTrain: "Allrad 4MATIC",
  },
  {
    id: "2",
    brand: "Mercedes-Benz",
    model: "S 580 d 4MATIC",
    price: "168'500",
    year: "2023",
    mileage: "4'200",
    fuel: "Hybrid",
    transmission: "Automatik",
    power: "510 PS",
    image: "/auto-Bilder/test2.jpg",
    location: "Muri",
    category: "Vorführwagen",
    highlights: "Luxus-Paket | Fond-Entertainment | Panorama-Dach | Hinterachslenkung",
    bodyType: "Limousine",
    driveTrain: "Allrad 4MATIC",
  },
  {
    id: "3",
    brand: "Mercedes-AMG",
    model: "GT 63 S E Performance",
    price: "212'000",
    year: "2024",
    mileage: "100",
    fuel: "Hybrid",
    transmission: "Automatik",
    power: "843 PS",
    image: "/auto-Bilder/test3.jpg",
    location: "Windisch",
    category: "Neuwagen",
    highlights: "E-Performance | Keramik-Bremsen | Aerodynamik-Paket | AMG Tracks",
    bodyType: "Sportwagen",
    driveTrain: "Allrad 4MATIC+",
  },
  {
    id: "4",
    brand: "Mercedes-EQ",
    model: "EQS 580 4MATIC",
    price: "154'000",
    year: "2023",
    mileage: "1'500",
    fuel: "Elektro",
    transmission: "Automatik",
    power: "523 PS",
    image: "/auto-Bilder/test4.jpg",
    location: "Mellingen",
    category: "Vorführwagen",
    highlights: "Hyperscreen | Digital Light | Premium Plus Paket | Exklusiv Interieur",
    bodyType: "Limousine",
    driveTrain: "Allrad 4MATIC",
  },
  {
    id: "5",
    brand: "Mercedes-AMG",
    model: "SL 63 4MATIC+",
    price: "198'700",
    year: "2023",
    mileage: "2'800",
    fuel: "Benzin",
    transmission: "Automatik",
    power: "585 PS",
    image: "/auto-Bilder/test5.jpg",
    location: "Villmergen",
    category: "Occasion",
    highlights: "V8 Biturbo | Verdeck in Schwarz | AMG Dynamic Plus | Nappa Leder",
    bodyType: "Cabriolet",
    driveTrain: "Allrad 4MATIC+",
  },
  {
    id: "6",
    brand: "Mercedes-Benz",
    model: "GLE 450 d 4MATIC",
    price: "128'900",
    year: "2024",
    mileage: "20",
    fuel: "Diesel",
    transmission: "Automatik",
    power: "367 PS",
    image: "/auto-Bilder/test6.jpg",
    location: "Fahrwangen",
    category: "Neuwagen",
    highlights: "AMG Line Exterieur | Night-Paket | Airmatic | Anhängevorrichtung",
    bodyType: "SUV",
    driveTrain: "Allrad 4MATIC",
  },
];

export const mockLocations = [
  {
    id: "villmergen",
    name: "Villmergen",
    address: "Anglikerstrasse 12, 5612 Villmergen",
    phone: "056 619 17 17",
    image: "/auto-Bilder/orte/villmergen.jpg",
  },
  {
    id: "muri",
    name: "Muri",
    address: "Luzernerstrasse 46, 5630 Muri",
    phone: "056 675 70 70",
    image: "/auto-Bilder/orte/muri.jpg",
  },
  {
    id: "windisch",
    name: "Windisch",
    address: "Mülligerstrasse 1, 5210 Windisch",
    phone: "056 460 27 27",
    image: "/auto-Bilder/orte/windisch.jpg",
  },
  {
    id: "mellingen",
    name: "Mellingen",
    address: "Lenzburgerstrasse 2, 5507 Mellingen",
    phone: "056 481 83 83",
    image: "",
  },
  {
    id: "fahrwangen",
    name: "Fahrwangen",
    address: "Sarmenstorferstrasse 2, 5615 Fahrwangen",
    phone: "056 676 60 60",
    image: "",
  },
  {
    id: "seon",
    name: "Seon",
    address: "Lenzburgerstrasse 17, 5703 Seon",
    phone: "062 769 70 70",
    image: "/auto-Bilder/orte/seon.jpg",
  },
];


export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  phone: string;
  email: string;
}

export const mockTeam: TeamMember[] = [
  {
    id: "1",
    name: "Michael Robert",
    role: "Geschäftsführer",
    department: "Management",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2&w=800&h=800&q=80",
    phone: "056 619 17 17",
    email: "m.robert@roberthuber.ch",
  },
  {
    id: "2",
    name: "Sandra Huber",
    role: "Verkaufsleiterin",
    department: "Verkauf",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=800&h=800&q=80",
    phone: "056 619 17 21",
    email: "s.huber@roberthuber.ch",
  },
  {
    id: "3",
    name: "Thomas Wagner",
    role: "Serviceberater",
    department: "Aftersales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=800&h=800&q=80",
    phone: "056 619 17 38",
    email: "t.wagner@roberthuber.ch",
  },
  {
    id: "4",
    name: "Elena Fischer",
    role: "Marketing Specialist",
    department: "Administration",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=800&h=800&q=80",
    phone: "056 619 17 44",
    email: "e.fischer@roberthuber.ch",
  },
  {
    id: "5",
    name: "Lukas Weber",
    role: "AMG Performance Experte",
    department: "Verkauf",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=800&h=800&q=80",
    phone: "056 619 17 25",
    email: "l.weber@roberthuber.ch",
  },
  {
    id: "6",
    name: "Janine Steiner",
    role: "Kundenbetreuung",
    department: "Reception",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=facearea&facepad=2&w=800&h=800&q=80",
    phone: "056 619 17 50",
    email: "j.steiner@roberthuber.ch",
  },
];

export const mockNews = [
  {
    id: "1",
    title: "Der neue AMG GT ist eingetroffen",
    date: "15.03.2024",
    excerpt: "Erleben Sie die neueste Generation der Driving Performance. Ab sofort bei uns in Villmergen zur Besichtigung.",
    image: "https://images.pexels.com/photos/16378417/pexels-photo-16378417/free-photo-of-mercedes-amg-gt.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
  {
    id: "2",
    title: "Frühlings-Check Aktion",
    date: "10.03.2024",
    excerpt: "Machen Sie Ihr Fahrzeug bereit für die warme Jahreszeit. Sichern Sie sich jetzt Ihren Termin für den Profi-Check.",
    image: "https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
  {
    id: "3",
    title: "Elektromobilität bei Robert Huber",
    date: "05.03.2024",
    excerpt: "Wir bauen unsere Ladeinfrastruktur weiter aus. Profitieren Sie von unserer Expertise in Sachen EQ-Modelle.",
    image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=2000",
  },
];
