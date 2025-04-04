import { Car } from '../types/car';

export const cars: Car[] = [
  {
    id: 1,
    name: "Audi Q5",
    price: "30 164 €",
    image: "https://media.ed.edmunds-media.com/audi/q5/2015/oem/2015_audi_q5_4dr-suv_20t-premium-plus-quattro_fq_oem_1_1600.jpg",
    status: "Occasion",
    specs: "3.0L • 423ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "23 809 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Hybride" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Argent" }
    ],
    options: [
      "Système audio premium",
      "GPS",
      "Sièges en cuir",
      "Toit panoramique"
    ],
    description: "Audi Q5 bien entretenu avec options haut de gamme. Parfait pour les familles."
  },
  {
    id: 2,
    name: "Mercedes Classe S",
    price: "31 666 €",
    image: "https://images.caradisiac.com/logos/4/6/7/9/264679/S8-essai-mercedes-classe-s-2021-le-futur-est-aujourd-hui-187944.jpg",
    status: "Occasion",
    specs: "3.0L • 193ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "26 860 km" },
      { label: "Année", value: "2021" },
      { label: "Carburant", value: "Électrique" },
      { label: "Boîte de vitesse", value: "Automatique 9 rapports" },
      { label: "Couleur", value: "Blanc" }
    ],
    options: [
      "Caméra de recul",
      "Toit ouvrant",
      "GPS",
      "Sièges chauffants"
    ],
    description: "Mercedes Classe S luxueuse avec faible kilométrage. Véhicule premium."
  },
  {
    id: 3,
    name: "Porsche Panamera",
    price: "32 104 €",
    image: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/36EPAOzO-XLcPdn_QHS-(edit).jpg?t=169147242111",
    status: "Occasion",
    specs: "3.0L • 517ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "116 768 km" },
      { label: "Année", value: "2016" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Argent" }
    ],
    options: [
      "Toit ouvrant",
      "Caméra de recul",
      "GPS",
      "Sièges sport"
    ],
    description: "Porsche Panamera puissante avec options sportives. Idéale pour les longs trajets."
  },
  {
    id: 4,
    name: "BMW Série 3",
    price: "37 155 €",
    image: "https://www.largus.fr/images/images/bmw-serie3-restylee-2015-01.jpg?width=1224&quality=80",
    status: "Occasion",
    specs: "3.0L • 186ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "60 015 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Rouge" }
    ],
    options: [
      "Système audio premium",
      "GPS",
      "Toit ouvrant",
      "Sièges chauffants"
    ],
    description: "BMW Série 3 dynamique avec de nombreuses options. Parfaite pour la ville."
  },
  {
    id: 5,
    name: "Mercedes GLS",
    price: "39 972 €",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mercedes-Benz_X167_GLS_580_4Matic_Cavansite_Blue_%281%29.jpg/640px-Mercedes-Benz_X167_GLS_580_4Matic_Cavansite_Blue_%281%29.jpg",
    status: "Occasion",
    specs: "3.0L • 564ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "50 018 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 9 rapports" },
      { label: "Couleur", value: "Marron" }
    ],
    options: [
      "Cuir",
      "GPS",
      "Toit panoramique"
    ],
    description: "Mercedes GLS spacieuse et confortable. Idéale pour les grandes familles."
  },
  {
    id: 6,
    name: "Mercedes Classe C",
    price: "42 962 €",
    image: "https://cdn.motor1.com/images/mgl/e2EMp/s1/mercedes-c-klasse-limousine-2021.webp",
    status: "Neuf",
    specs: "3.0L • 581ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "0 km" },
      { label: "Année", value: "2024" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Argent" }
    ],
    options: [
      "Caméra de recul",
      "Système audio premium",
      "Sièges chauffants",
      "Toit ouvrant"
    ],
    description: "Nouvelle Mercedes Classe C avec finition haut de gamme. Livraison immédiate."
  },
  {
    id: 7,
    name: "Lexus UX",
    price: "46 256 €",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lexus_UX_250h_IMG_0385.jpg/1200px-Lexus_UX_250h_IMG_0385.jpg",
    status: "Occasion",
    specs: "3.0L • 472ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "108 572 km" },
      { label: "Année", value: "2018" },
      { label: "Carburant", value: "Électrique" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Vert" }
    ],
    options: [
      "Système audio premium",
      "GPS",
      "Sièges en cuir"
    ],
    description: "Lexus UX économique et élégante. Parfaite pour la ville."
  },
  {
    id: 8,
    name: "BMW X5",
    price: "47 912 €",
    image: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/7a0a3c6148108c9c64425dd85e0181fa3cccb652/photos/KDqGQxaG-Trxy2oWWmS-(edit).jpg?t=165015455933",
    status: "Occasion",
    specs: "3.0L • 476ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "128 958 km" },
      { label: "Année", value: "2017" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Blanc" }
    ],
    options: [
      "GPS",
      "Sièges en cuir",
      "Toit ouvrant"
    ],
    description: "BMW X5 spacieux et puissant. Idéal pour les longs trajets."
  },
  {
    id: 9,
    name: "Porsche Cayenne",
    price: "48 468 €",
    image: "https://www.largus.fr/images/images/Porsche-Cayenne-restylage-2014-08.jpg",
    status: "Occasion",
    specs: "3.0L • 448ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "36 271 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Argent" }
    ],
    options: [
      "Toit ouvrant",
      "GPS",
      "Caméra de recul",
      "Sièges sport"
    ],
    description: "Porsche Cayenne luxueuse et performante. Parfaite pour les amateurs de SUV sportifs."
  },
  {
    id: 10,
    name: "Mercedes Classe C",
    price: "61 396 €",
    image: "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/cars/mercedes/c-class/mercedes--classe-c-berline--2021/mercedes--classe-c-berline--2021-m-1.jpg",
    status: "Occasion",
    specs: "3.0L • 171ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "100 241 km" },
      { label: "Année", value: "2019" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Rouge" }
    ],
    options: [
      "Toit ouvrant",
      "GPS",
      "Sièges chauffants"
    ],
    description: "Mercedes Classe C économique et confortable. Idéale pour les trajets quotidiens."
  },
  {
    id: 11,
    name: "Audi Q7",
    price: "68 901 €",
    image: "https://picolio.auto123.com/auto123-media/articles/2016/7/62477/Audi-Q7-TFSI-Quattro-2017_001fr.JPG",
    status: "Occasion",
    specs: "3.0L • 247ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "19 783 km" },
      { label: "Année", value: "2017" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Rouge" }
    ],
    options: [
      "Sièges chauffants",
      "Caméra de recul",
      "GPS",
      "Cuir",
      "Toit panoramique"
    ],
    description: "Audi Q7 spacieux avec faible kilométrage. Intérieur premium bien équipé."
  },
  {
    id: 12,
    name: "Porsche Cayenne",
    price: "69 624 €",
    image: "https://image-annonce.lacentrale.fr/1096x829/W102328278_STANDARD_0.jpg",
    status: "Occasion",
    specs: "3.0L • 248ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "122 760 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Marron" }
    ],
    options: [
      "Toit ouvrant",
      "Caméra de recul",
      "Jantes 21\"",
      "Régulateur adaptatif"
    ],
    description: "Porsche Cayenne Diesel robuste avec options confort. Entretien Porsche à jour."
  },
  {
    id: 13,
    name: "Mercedes GLE",
    price: "72 340 €",
    image: "https://i.gaw.to/content/photos/57/03/570398-2024-mercedes-benz-gle-the-luxury-of-choice.jpeg",
    status: "Neuf",
    specs: "3.0L • 171ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "0 km" },
      { label: "Année", value: "2024" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Bleu" }
    ],
    options: [
      "Pack AMG Line",
      "Toit panoramique",
      "Écrans MBUX",
      "Sièges multicontours",
      "Climatisation 4 zones"
    ],
    description: "Nouveau Mercedes GLE 2024 avec technologies dernier cri. Livrable immédiatement."
  },
  {
    id: 14,
    name: "BMW X7",
    price: "73 582 €",
    image: "https://mkt-vehicleimages-prd.autotradercdn.ca/photos/chrome/Expanded/White/2023BMS290001/2023BMS29000101.jpg",
    status: "Neuf",
    specs: "3.0L • 347ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "0 km" },
      { label: "Année", value: "2023" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Argent" }
    ],
    options: [
      "Pack Excellence",
      "Toit Sky Lounge",
      "Bowers & Wilkins Diamond",
      "Sièges massants",
      "Portes soft-close"
    ],
    description: "BMW X7 neuf, summum du luxe allemand. Espace intérieur exceptionnel."
  },
  {
    id: 15,
    name: "Mercedes Classe C",
    price: "75 561 €",
    image: "https://images.caradisiac.com/logos-ref/gamme/gamme--mercedes-classe-c/S8-gamme--mercedes-classe-c.jpg",
    status: "Occasion",
    specs: "3.0L • 567ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "82 235 km" },
      { label: "Année", value: "2022" },
      { label: "Carburant", value: "Électrique" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Rouge" }
    ],
    options: [
      "Pack AMG",
      "Toit panoramique",
      "Écran géant MBUX",
      "Freins perforés",
      "Différentiel AMG"
    ],
    description: "Classe C AMG électrique performante. Technologie de pointe et ligne sportive."
  },
  {
    id: 16,
    name: "BMW Série 7",
    price: "75 623 €",
    image: "https://i.gaw.to/vehicles/photos/34/44/344414-2020-bmw-7-series.jpg?640x400",
    status: "Occasion",
    specs: "3.0L • 565ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "103 659 km" },
      { label: "Année", value: "2020" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Noir" }
    ],
    options: [
      "Pack M Sport",
      "Affichage tête haute",
      "Sièges ventilés",
      "Ride Control Professionnel",
      "Portes soft-close"
    ],
    description: "BMW Série 7 haut de gamme. Confort et technologies premium garantis."
  },
  {
    id: 17,
    name: "BMW X5",
    price: "75 786 €",
    image: "https://i.gaw.to/vehicles/photos/40/19/401956-2020-bmw-x5.jpg?1024x640",
    status: "Occasion",
    specs: "3.0L • 407ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "124 331 km" },
      { label: "Année", value: "2020" },
      { label: "Carburant", value: "Électrique" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Gris" }
    ],
    options: [
      "Pack M Sport",
      "Toit panoramique",
      "Sièges chauffants",
      "HUD",
      "BVA Sport"
    ],
    description: "BMW X5 électrique bien équipé. Autonomie réelle de 380 km."
  },
  {
    id: 18,
    name: "Porsche Taycan",
    price: "76 412 €",
    image: "https://annuelauto.ca/wp-content/uploads/2022/06/taycan-turbo-a.jpg",
    status: "Occasion",
    specs: "3.0L • 559ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "82 294 km" },
      { label: "Année", value: "2017" },
      { label: "Carburant", value: "Hybride" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Vert" }
    ],
    options: [
      "Pack Performance",
      "Jantes 21\" Turbo Design",
      "Sièges 18 voies",
      "Chargement rapide 270 kW",
      "PCCB"
    ],
    description: "Porsche Taycan hybride rare. Performances exceptionnelles et ligne racée."
  },
  {
    id: 19,
    name: "Porsche Taycan",
    price: "78 467 €",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg",
    status: "Occasion",
    specs: "3.0L • 261ch • Manuelle",
    additionalSpecs: [
      { label: "Kilométrage", value: "57 047 km" },
      { label: "Année", value: "2016" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Manuelle 6 rapports" },
      { label: "Couleur", value: "Blanc" }
    ],
    options: [
      "Pack Chrono",
      "Caméra 360°",
      "Sièges memory",
      "Toit vitré",
      "Volant chauffant"
    ],
    description: "Taycan Diesel économique. Confort Porsche avec consommation raisonnable."
  },
  {
    id: 20,
    name: "Tesla Model X",
    price: "79 417 €",
    image: "https://mkt-vehicleimages-prd.autotradercdn.ca/photos/chrome/Expanded/White/2019TSS010001/2019TSS01000101.jpg",
    status: "Occasion",
    specs: "3.0L • 207ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "116 250 km" },
      { label: "Année", value: "2019" },
      { label: "Carburant", value: "Hybride" },
      { label: "Boîte de vitesse", value: "Automatique 1 rapport" },
      { label: "Couleur", value: "Noir" }
    ],
    options: [
      "Plaid Mode",
      "Portes Falcon",
      "Autopilot Full",
      "Toit panoramique",
      "Système audio Premium"
    ],
    description: "Tesla Model X iconique. Technologie avant-gardiste et espace familial."
  },
  {
    id: 21,
    name: "Porsche Panamera",
    price: "82 321 €",
    image: "https://i.gaw.to/content/photos/28/07/280739_Porsche_Panamera_2017_Cure_de_rajeunissement_pour_la_superstar.jpg",
    status: "Occasion",
    specs: "2.9L V6 • 440ch • PDK",
    additionalSpecs: [
      { label: "Kilométrage", value: "40 810 km" },
      { label: "Année", value: "2017" },
      { label: "Carburant", value: "Hybride rechargeable" },
      { label: "Boîte de vitesse", value: "PDK 8 rapports" },
      { label: "Couleur", value: "Rouge Carmin" }
    ],
    options: [
      "Pack Sport Chrono",
      "Intérieur cuir full Meridian",
      "Porsche Active Suspension",
      'Jantes 21" Sport Classic',
      "Systeme audio BOSE®"
    ],
    description: "Panamera hybride exceptionnellement bien conservé. Premier propriétaire, historique Porsche complet."
  },
  {
    id: 22,
    name: "Mercedes GLS",
    price: "83 625 €",
    image: "https://i.gaw.to/content/photos/22/89/228933_2017_Mercedes-Benz_GLS_Class.jpg",
    status: "Occasion Premium",
    specs: "4.0L V8 • 585ch • 9G-TRONIC",
    additionalSpecs: [
      { label: "Kilométrage", value: "112 191 km" },
      { label: "Année", value: "2017" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 9 rapports" },
      { label: "Couleur", value: "Noir Obsidien" }
    ],
    options: [
      "Pack AMG Line Exclusive",
      "Intérieur Designo Nappa",
      "Système Magic Vision Control",
      "Toit panoramique électrique",
      "Climatisation 4 zones"
    ],
    description: "GLS 500 4MATIC de collection. Véhicule allemand avec options haut de gamme."
  },
  {
    id: 23,
    name: "Tesla Model 3",
    price: "85 384 €",
    image: "https://cdn.motor1.com/images/mgl/1Z4b89/s1/nuova-tesla-model-3-2023.jpg",
    status: "Neuf",
    specs: "Dual Motor • 510ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "0 km" },
      { label: "Année", value: "2023" },
      { label: "Autonomie", value: "547 km (WLTP)" },
      { label: "Accélération", value: "3.3s (0-100km/h)" },
      { label: "Couleur", value: "Bleu Zanzibar" }
    ],
    options: [
      "Pack Performance",
      "Autopilot Full-Self Driving",
      'Jantes 20" Uberturbine',
      "Toit vitré téinté",
      "Intérieur blanc vegan"
    ],
    description: "Model 3 Performance neuve avec toutes les dernières mises à jour logicielles."
  },
  {
    id: 24,
    name: "Audi Q5",
    price: "87 992 €",
    image: "https://cdnwp.dealerk.com/650cb20d/uploads/sites/7/2021/10/img_article_nouvelleq5_audi_1920x1080px.png",
    status: "Occasion vérifiée",
    specs: "3.0 TDI • 286ch • Tiptronic",
    additionalSpecs: [
      { label: "Kilométrage", value: "131 893 km" },
      { label: "Année", value: "2021" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Bleu Navarre" }
    ],
    options: [
      "Pack S line Competition",
      "Audi Virtual Cockpit Plus",
      "Sièges sport S embossés",
      "Rétroviseurs auto-dimming",
      "Hayon électrique"
    ],
    description: "Q5 TDI ultra-équipé avec seulement 2 propriétaires. Contrôle technique récent."
  },
  {
    id: 25,
    name: "Lexus UX",
    price: "91 624 €",
    image: "https://i.gaw.to/vehicles/photos/40/21/402101-2020-lexus-ux.jpg",
    status: "Occasion hybride",
    specs: "2.0L Hybrid • 184ch • E-CVT",
    additionalSpecs: [
      { label: "Kilométrage", value: "23 585 km" },
      { label: "Année", value: "2020" },
      { label: "Consommation", value: "4.5L/100km" },
      { label: "Garantie", value: "Jusqu'en 2026" },
      { label: "Couleur", value: "Noir Obsidian" }
    ],
    options: [
      "Pack F Sport",
      "Mark Levinson® Premium Sound",
      "Heads-Up Display",
      "Clé digitale smartphone",
      "Protection châssis"
    ],
    description: "Lexus UX 250h comme neuve avec garantie prolongée. Intérieur immaculé."
  },
  {
    id: 26,
    name: "BMW Série 3",
    price: "93 297 €",
    image: "https://www.automobile-magazine.fr/asset/cms/198854/config/146547/p90462506-highres.jpg",
    status: "Occasion récente",
    specs: "3.0L • 374ch • Steptronic",
    additionalSpecs: [
      { label: "Kilométrage", value: "19 285 km" },
      { label: "Année", value: "2022" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Rouge Sunset" }
    ],
    options: [
      "Pack M Sport Pro",
      "Freins M Compound",
      "Différentiel M Sport",
      "Alcantara/Hexagon Anthracite",
      "M Sport Exhaust"
    ],
    description: "340i xDrive quasi neuve. Options rares et entretien BMW exclusif."
  },
  {
    id: 27,
    name: "Tesla Model X",
    price: "94 855 €",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-tesla-model-x-101-1671475309.jpeg?crop=0.404xw:0.364xh;0.381xw,0.295xh&resize=2048:*",
    status: "Neuf",
    specs: "Plaid • 1,020ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "0 km" },
      { label: "Année", value: "2023" },
      { label: "Autonomie", value: "528 km (EPA)" },
      { label: "Accélération", value: "2.5s (0-100km/h)" },
      { label: "Couleur", value: "Gris Midnight" }
    ],
    options: [
      "Configuration 6 places",
      "Yoke Steering Wheel",
      '22" Turbine Wheels',
      "Full Self-Driving Capability",
      "Premium Interior"
    ],
    description: "Model X Plaid neuve avec toutes les options. Livraison sous 2 semaines."
  },
  {
    id: 28,
    name: "Audi A6",
    price: "101 529 €",
    image: "https://i.gaw.to/vehicles/photos/40/30/403069-2023-audi-a6.jpg",
    status: "Neuf",
    specs: "3.0 TFSI • 340ch • Tiptronic",
    additionalSpecs: [
      { label: "Kilométrage", value: "0 km" },
      { label: "Année", value: "2023" },
      { label: "Carburant", value: "Essence mild-hybrid" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Rouge Tango" }
    ],
    options: [
      "Pack Black Edition",
      "Matrix LED HD",
      "Sièges ventilés/massants",
      "Audi Phone Box Light",
      "Sonorisation Bang & Olufsen"
    ],
    description: "A6 allroad neuve avec finition exclusive. Disponible immédiatement."
  },
  {
    id: 29,
    name: "Mercedes GLE",
    price: "106 480 €",
    image: "https://svolavacky.cz/wp-content/uploads/2024/03/mercedes-benz-gle-class-2017-recall.jpg",
    status: "Occasion certifiée",
    specs: "3.0L • 367ch • 9G-TRONIC",
    additionalSpecs: [
      { label: "Kilométrage", value: "144 567 km" },
      { label: "Année", value: "2017" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Automatique 9 rapports" },
      { label: "Couleur", value: "Marron Designo" }
    ],
    options: [
      "Pack AMG Night",
      "Air Body Control",
      "Climatisation énergétique",
      "MB-Tex/Dinamica",
      "Kit de remorquage"
    ],
    description: "GLE 350 d 4MATIC en excellent état. Vérification complète effectuée."
  },
  {
    id: 30,
    name: "Tesla Model S",
    price: "124 159 €",
    image: "https://i.gaw.to/vehicles/photos/40/25/402547-2021-tesla-model-s.jpg",
    status: "Occasion premium",
    specs: "Long Range • 670ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "106 422 km" },
      { label: "Année", value: "2021" },
      { label: "Autonomie", value: "652 km (EPA)" },
      { label: "Accélération", value: "3.1s (0-100km/h)" },
      { label: "Couleur", value: "Bleu Deep Metallic" }
    ],
    options: [
      "Full Self-Driving",
      '21" Arachnid Wheels',
      "Premium Audio",
      "Glass Roof",
      "White Interior"
    ],
    description: "Model S Long Range avec toutes les mises à jour. Batterie remplacée en 2023."
  },
  {
    id: 31,
    name: "Lexus NX",
    price: "126 042 €",
    image: "https://journalmetro.com/wp-content/uploads/2015/03/auto_2015_lexus_nx_c100.jpg?fit=2000%2C1333",
    status: "Occasion hybride",
    specs: "2.5L Hybrid • 197ch • E-CVT",
    additionalSpecs: [
      { label: "Kilométrage", value: "58 949 km" },
      { label: "Année", value: "2015" },
      { label: "Consommation", value: "5.3L/100km" },
      { label: "Garantie", value: "Jusqu'en 2025" },
      { label: "Couleur", value: "Blanc Pearl" }
    ],
    options: [
      "Pack Luxury",
      "Mark Levinson® Audio",
      "Heated/Ventilated Seats",
      "Heads-Up Display",
      "360° Camera"
    ],
    description: "NX 300h exceptionnellement bien entretenu. Service Lexus complet."
  },
  {
    id: 32,
    name: "Porsche Macan",
    price: "126 149 €",
    image: "https://cdn.automobile-propre.com/uploads/2019/02/Porsche-Macan-e%CC%81lectrique.jpg",
    status: "Occasion sport",
    specs: "2.0L • 265ch • PDK",
    additionalSpecs: [
      { label: "Kilométrage", value: "148 552 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 7 rapports" },
      { label: "Couleur", value: "Blanc Carrara" }
    ],
    options: [
      "Pack Sport Design",
      'Jantes 21" RS Spyder',
      "Chassis Sport PASM",
      "Volant Sport Design",
      "Rétroviseurs auto-dimming"
    ],
    description: "Macan de base bien équipé. Parfait premier Porsche."
  },
  {
    id: 33,
    name: "Mercedes Classe C",
    price: "128 884 €",
    image: "https://i.gaw.to/content/photos/16/71/167188_La_Mercedes-Benz_Classe_C_2015.jpg",
    status: "Occasion premium",
    specs: "2.1L • 204ch • 7G-TRONIC",
    additionalSpecs: [
      { label: "Kilométrage", value: "109 236 km" },
      { label: "Année", value: "2015" },
      { label: "Carburant", value: "Diesel" },
      { label: "Boîte de vitesse", value: "Automatique 7 rapports" },
      { label: "Couleur", value: "Noir Iridium" }
    ],
    options: [
      "Pack AMG Line",
      "Intérieur cuir Designo",
      "Toit panoramique",
      "Climatisation THERMATIC",
      "Rétroviseurs mémoire"
    ],
    description: "Classe C 220d Business Elegance. Entretien Mercedes complet."
  },
  {
    id: 34,
    name: "Lexus NX",
    price: "135 051 €",
    image: "https://i.gaw.to/content/photos/47/71/477149-lexus-nx-2022-cinq-choses-a-savoir.jpeg",
    status: "Occasion récente",
    specs: "2.4L Turbo • 275ch • Direct Shift-8",
    additionalSpecs: [
      { label: "Kilométrage", value: "34 525 km" },
      { label: "Année", value: "2022" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Gris Graphite" }
    ],
    options: [
      "Pack F Sport Design",
      "Mark Levinson® 17 speakers",
      "Heads-Up Display",
      "Climatisation 3 zones",
      "Lexus Safety System+ 2.5"
    ],
    description: "NX 350 F Sport comme neuve. Garantie jusqu'en 2028."
  },
  {
    id: 35,
    name: "Porsche Macan",
    price: "135 195 €",
    image: "https://hips.hearstapps.com/hmg-prod/images/2019-porsche-macan-s-202-1569262878.jpg?resize=980:*",
    status: "Occasion certifiée",
    specs: "3.0L • 354ch • PDK",
    additionalSpecs: [
      { label: "Kilométrage", value: "61 323 km" },
      { label: "Année", value: "2019" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 7 rapports" },
      { label: "Couleur", value: "Rouge Guards" }
    ],
    options: [
      "Pack Sport Chrono",
      'Jantes 21" RS Spyder',
      "Intérieur cuir Bordeaux",
      "Porsche Torque Vectoring+",
      "Rétroviseurs chauffants"
    ],
    description: "Macan S premium avec historique Porsche. Contrôle technique récent."
  },
  {
    id: 36,
    name: "Mercedes Classe C",
    price: "136 137 €",
    image: "https://cdn.motor1.com/images/mgl/yErxb/s1/mercedes-c-klasse-limousine-2021.webp",
    status: "Occasion récente",
    specs: "2.0L • 258ch • 9G-TRONIC",
    additionalSpecs: [
      { label: "Kilométrage", value: "34 032 km" },
      { label: "Année", value: "2021" },
      { label: "Carburant", value: "Hybride rechargeable" },
      { label: "Boîte de vitesse", value: "Automatique 9 rapports" },
      { label: "Couleur", value: "Vert Emerald" }
    ],
    options: [
      "Pack AMG Line Premium+",
      "MBUX Augmented Reality",
      "Climatisation THERMOTRONIC",
      "Burmester® Surround Sound",
      "Digital Light"
    ],
    description: "Classe C 300e hybride premium. Faible consommation (1.6L/100km)."
  },
  {
    id: 37,
    name: "Porsche Panamera",
    price: "137 165 €",
    image: "https://www.largus.fr/images/images/porsche-panamera-2020-av.jpg",
    status: "Occasion premium",
    specs: "2.9L V6 • 330ch • PDK",
    additionalSpecs: [
      { label: "Kilométrage", value: "93 856 km" },
      { label: "Année", value: "2020" },
      { label: "Carburant", value: "Hybride rechargeable" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Argent GT Metallic" }
    ],
    options: [
      "Pack Executive",
      "Toit panoramique",
      "Sièges massants 18 voies",
      "Porsche InnoDrive",
      "Rear Axle Steering"
    ],
    description: "Panamera 4 E-Hybrid spacieux. Parfait pour les longs trajets."
  },
  {
    id: 38,
    name: "Audi A8",
    price: "143 122 €",
    image: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/07/22/26F20ABC-1CCF-462A-BC62-73797411BDB6/98.jpg?crop=3508,1974,x0,y259&width=1900&height=1069&optimize=high&format=webply",
    status: "Occasion luxe",
    specs: "3.0L • 286ch • Tiptronic",
    additionalSpecs: [
      { label: "Kilométrage", value: "39 335 km" },
      { label: "Année", value: "2020" },
      { label: "Carburant", value: "Hybride mild" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Rouge Toscana" }
    ],
    options: [
      "Pack Business Luxury",
      "Sièges massants/ventilés",
      "B&O 3D Sound System",
      "Audi AI Parking Pilot",
      "Toit solaire panoramique"
    ],
    description: "A8 L 50 TDI ultra luxueuse. Véhicule de direction bien entretenu."
  },
  {
    id: 39,
    name: "Audi Q7",
    price: "146 897 €",
    image: "https://i.gaw.to/vehicles/photos/40/23/402350-2021-audi-q7.jpg?1024x640",
    status: "Occasion premium",
    specs: "3.0L • 340ch • Tiptronic",
    additionalSpecs: [
      { label: "Kilométrage", value: "76 881 km" },
      { label: "Année", value: "2021" },
      { label: "Carburant", value: "Essence" },
      { label: "Boîte de vitesse", value: "Automatique 8 rapports" },
      { label: "Couleur", value: "Noir Mythos" }
    ],
    options: [
      "Pack S line Competition",
      "Audi Virtual Cockpit Plus",
      "Sièges massants/ventilés",
      "Toit panoramique électrique",
      "Système son Bang & Olufsen"
    ],
    description: "Q7 55 TFSI quasiment neuve. Tous les options haut de gamme."
  },
  {
    id: 40,
    name: "Porsche Taycan",
    price: "149 971 €",
    image: "https://www.largus.fr/images/images/porsche-taycan-turbo-s_1.jpg",
    status: "Occasion sport",
    specs: "Dual Motor • 625ch • Automatique",
    additionalSpecs: [
      { label: "Kilométrage", value: "47 141 km" },
      { label: "Année", value: "2021" },
      { label: "Autonomie", value: "440 km (WLTP)" },
      { label: "Accélération", value: "2.8s (0-100km/h)" },
      { label: "Couleur", value: "Rouge Carmine" }
    ],
    options: [
      "Pack Performance Plus",
      'Jantes 21" Mission E Design',
      "Porsche Ceramic Composite Brakes",
      "Intérieur cuir Race-Tex",
      "Porsche Electric Sport Sound"
    ],
    description: "Taycan Turbo S collector. Une des premières séries bien équipées."
  }
];