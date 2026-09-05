// Central content data — replace image URLs and text with real client content later.
//
// PROJECT IMAGES: drop your own photos into public/projects/<project-id>/ and list
// their filenames in the `images` array below (see public/projects/README.md).
// Each project can have any number of images — the Projects section automatically
// cycles through whatever is listed here, no code changes needed.

export interface Project {
  id: string;
  category: 'kitchen' | 'rooms' | 'bathrooms' | 'construction' | 'panel';
  title: { fr: string; en: string };
  location: string;
  description: { fr: string; en: string };
  services: { fr: string[]; en: string[] };
  images: string[];
  imageAlt: { fr: string; en: string };
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    category: 'kitchen',
title: {
    fr: 'Préparation électrique avant rénovation de cuisine',
    en: 'Electrical preparation ahead of a kitchen renovation'
  },    location: 'Lyon, France',
   description: {
    fr: 'Mise à nu complète de la pièce avant rénovation, avec dépose des anciennes finitions et préparation du passage des câbles en plafond pour la future installation électrique de la cuisine.',
    en: 'Complete strip-out of the room ahead of renovation, with removal of the old finishes and preparation of ceiling cable routing for the kitchen\'s future electrical installation.'
  },
 services: {
    fr: ['Préparation du réseau électrique', 'Passage des câbles en plafond', 'Dépose des anciennes installations'],
    en: ['Electrical network preparation', 'Ceiling cable routing', 'Removal of old installations']
  },
  
  images: [
       '/data/project1/1.jpeg',
       '/data/project1/2.jpeg',
       '/data/project1/3.jpeg',
       '/data/project1/4.jpeg',
       '/data/project1/5.jpeg',
       '/data/project1/6.jpeg',
    ],
 imageAlt: {
    fr: 'Pièce mise à nu avec passage des câbles au plafond avant rénovation',
    en: 'Stripped-out room with ceiling cable routing ahead of renovation'
  }

  }, 

  {
    id: 'proj-2',
    category: 'rooms',
 title: {
    fr: 'Éclairage LED décoratif sur mobilier',
    en: 'Decorative LED lighting integrated into furniture'
  },
      location: 'Bordeaux, France',
     description: {
    fr: 'Intégration d\'un ruban LED sur un fauteuil de relaxation, avec raccordement soigné du câblage le long de la structure pour un éclairage d\'ambiance discret et personnalisé.',
    en: 'Integration of LED strip lighting into a relaxation chair, with wiring neatly routed along the frame for a subtle, custom ambient lighting effect.'
  },
 services: {
    fr: ['Éclairage LED sur mesure', 'Raccordement câblage discret', 'Éclairage d\'ambiance'],
    en: ['Custom LED lighting', 'Discreet wiring integration', 'Ambient lighting']
  },
      images: [
      '/data/project2/1.jpeg',
      '/data/project2/2.jpeg',
      '/data/project2/3.jpeg',
      '/data/project2/4.jpeg',
    ],
 imageAlt: {
    fr: 'Fauteuil équipé d\'un éclairage LED bleu intégré',
    en: 'Chair fitted with integrated blue LED lighting'
  }
  },

  {
    id: 'proj-3',
    category: 'rooms',
title: {
    fr: 'Installation électrique d\'une chambre avec mur d\'accent',
    en: 'Electrical installation for a bedroom with an accent wall'
  },
      location: 'Bordeaux, France',
     description: {
    fr: 'Installation des prises et interrupteurs d\'une chambre repeinte avec mur d\'accent, incluant la pose des appareillages électriques en finition murale et leur intégration harmonieuse avec la décoration.',
    en: 'Installation of sockets and switches for a bedroom finished with an accent wall, including fitting of the wall-mounted electrical fixtures and their careful integration with the room\'s decor.'
  },
 services: {
    fr: ['Pose de prises murales', 'Installation d\'interrupteurs', 'Finitions électriques'],
    en: ['Wall socket installation', 'Switch installation', 'Electrical finishing']
  },
      images: [
      '/data/project3/1.jpeg',
      '/data/project3/2.jpeg',
      '/data/project3/3.jpeg',
      '/data/project3/4.jpeg',
      '/data/project3/5.jpeg',
    ],
 imageAlt: {
    fr: 'Chambre terminée avec mur d\'accent jaune et prises murales',
    en: 'Finished bedroom with a yellow accent wall and wall sockets'
  }
  },


  {
    id: 'proj-4',
    category: 'rooms',
  title: {
    fr: 'Éclairage mural et appareillage pour salon',
    en: 'Wall lighting and switchgear for a living room'
  },
      location: 'Bordeaux, France',
     description: {
    fr: 'Installation d\'appliques murales décoratives associées à plusieurs prises et interrupteurs en partie basse du mur, pour un éclairage d\'appoint pratique et une distribution électrique bien pensée.',
    en: 'Installation of decorative wall sconces paired with multiple sockets and switches along the lower wall, providing practical accent lighting and a well-planned electrical layout.'
  },
  services: {
    fr: ['Appliques murales', 'Pose de prises et interrupteurs', 'Distribution électrique murale'],
    en: ['Wall sconces', 'Socket and switch installation', 'Wall-mounted electrical distribution']
  },
      images: [
      '/data/project4/1.jpeg',
      '/data/project4/2.jpeg',
      '/data/project4/3.jpeg',
    ],
 imageAlt: {
    fr: 'Salon fini avec appliques murales et prises électriques',
    en: 'Finished living room with wall sconces and electrical sockets'
  }
  },


  {
    id: 'proj-5',
    category: 'rooms',
 title: {
    fr: 'Éclairage LED périphérique en cours d\'installation',
    en: 'Perimeter LED lighting mid-installation'
  },
      location: 'Bordeaux, France',
    description: {
    fr: 'Pose d\'un éclairage LED en corniche périphérique au plafond, encore en phase de chantier, avec câblage apparent avant la finition des murs et la protection du sol.',
    en: 'Installation of perimeter cove LED lighting along the ceiling, still at the construction stage, with cabling visible ahead of wall finishing and floor protection being laid.'
  },
services: {
    fr: ['Éclairage LED en corniche', 'Passage de câbles', 'Préparation avant finitions'],
    en: ['Cove LED lighting', 'Cable routing', 'Pre-finishing preparation']
  },
      images: [
      '/data/project5/1.jpeg',
      '/data/project5/2.jpeg',
    ],
 imageAlt: {
    fr: 'Pièce en cours de chantier avec éclairage LED périphérique installé au plafond',
    en: 'Room under construction with perimeter LED lighting installed along the ceiling'
  }
  },


  {
    id: 'proj-6',
    category: 'bathrooms',
title: {
      fr: 'Éclairage encastré étanche pour salle de bain',
      en: 'Waterproof recessed lighting for bathroom'
    },
        location: 'Toulouse, France',
   description: {
      fr: 'Installation de spots encastrés étanches (IP65) au-dessus de la baignoire et de la douche, garantissant un éclairage optimal et sécurisé pour les zones humides.',
      en: 'Installation of waterproof (IP65) recessed spotlights above the bathtub and shower area, ensuring optimal and safe lighting for wet zones.'
    },
services: {
      fr: ['Spots étanches (IP65)', 'Mise aux normes de sécurité', 'Éclairage de douche'],
      en: ['Waterproof spotlights (IP65)', 'Safety compliance wiring', 'Shower lighting']
    },
        images: [
      '/data/project6/1.jpeg',
      '/data/project6/2.jpeg',
      '/data/project6/3.jpeg',
      '/data/project6/4.jpeg',
    ],
imageAlt: {
      fr: 'Salle de bain moderne avec baignoire, finition marbre et spots de plafond allumés',
      en: 'Modern bathroom with bathtub, marble finish, and lit ceiling spotlights'
    }
    },

  {
    id: 'proj-7',
    category: 'bathrooms',
title: {
      fr: 'Installation d\'un miroir LED rétroéclairé',
      en: 'Backlit LED mirror installation'
    },
        location: 'Toulouse, France',
   description: {
      fr: 'Câblage dissimulé et montage d\'un miroir rond avec rétroéclairage LED intégré, offrant un éclairage doux pour le visage et une prise murale à proximité.',
      en: 'Concealed wiring and mounting of a round mirror with integrated LED backlighting, providing soft facial illumination and a nearby wall outlet.'
    },
services: {
      fr: ['Miroir lumineux', 'Câblage dissimulé', 'Prises de salle de bain'],
      en: ['Illuminated mirror', 'Concealed wiring', 'Bathroom outlets']
    },
        images: [
      '/data/project7/1.jpeg',
      '/data/project7/2.jpeg',
    ],
imageAlt: {
      fr: 'Meuble-lavabo de salle de bain chaleureux avec un miroir rond rétroéclairé',
      en: 'Warm bathroom vanity featuring a round glowing backlit mirror'
    }
    },


  {
    id: 'proj-8',
    category: 'bathrooms',
title: {
      fr: 'Préparation électrique pour espace lavabo',
      en: 'Electrical prep for bathroom vanity area'
    },
        location: 'Toulouse, France',
   description: {
      fr: 'Travaux de rénovation électrique incluant le tirage de câbles pour un miroir rectangulaire et l\'installation d\'interrupteurs dans un espace lavabo minimaliste.',
      en: 'Electrical renovation work including cable routing for a rectangular vanity mirror and switch installation in a minimalist sink area.'
    },
services: {
      fr: ['Câblage de rénovation', 'Préparation pour miroir', 'Installation d\'interrupteurs'],
      en: ['Renovation wiring', 'Mirror prep', 'Switch installation']
    },
        images: [
      '/data/project8/1.jpeg',
      '/data/project8/2.jpeg',
      '/data/project8/3.jpeg',
    ],
imageAlt: {
      fr: 'Espace lavabo minimaliste en cours d\'installation électrique',
      en: 'Minimalist bathroom sink area during electrical installation'
    }
    },

   {
    id: 'proj-9',
    category: 'rooms',
 title: {
    fr: 'Installation de spots encastrés au plafond',
    en: 'Recessed ceiling spotlight installation'
  },
      location: 'Bordeaux, France',
    description: {
    fr: 'Pose d\'une rangée de spots encastrés au plafond associée à une applique murale, offrant un éclairage homogène et une finition soignée pour la pièce.',
    en: 'Installation of a row of recessed ceiling spotlights paired with a wall sconce, delivering even lighting and a clean finish for the room.'
  },
  services: {
    fr: ['Spots encastrés au plafond', 'Applique murale', 'Éclairage homogène'],
    en: ['Recessed ceiling spotlights', 'Wall sconce', 'Even lighting distribution']
  },
      images: [
      '/data/project9/1.jpeg',
      '/data/project9/2.jpeg',
      '/data/project9/3.jpeg',
    ],
 imageAlt: {
    fr: 'Plafond fini avec rangée de spots encastrés allumés',
    en: 'Finished ceiling with a row of lit recessed spotlights'
  }
  },

   {
    id: 'proj-10',
    category: 'rooms',
title: {
      fr: 'Éclairage indirect en corniche (Faux plafond)',
      en: 'Indirect cove lighting (Dropped ceiling)'
    },
        location: 'Bordeaux, France',
   description: {
      fr: 'Installation d\'un éclairage LED périphérique continu à l\'intérieur d\'une corniche de faux plafond pour un look moderne et sans éblouissement.',
      en: 'Installation of seamless perimeter LED lighting inside a dropped ceiling cove for a modern, glare-free look.'
    },
services: {
      fr: ['Éclairage en corniche', 'Profilés LED', 'Câblage pour faux plafond'],
      en: ['Cove lighting', 'LED profiles', 'Dropped ceiling wiring']
    },
        images: [
      '/data/project10/1.jpeg',
    ],
imageAlt: {
      fr: 'Pièce en construction présentant un éclairage LED indirect au plafond',
      en: 'Room under construction featuring indirect LED ceiling lighting'
    }
    },


   {
    id: 'proj-11',
    category: 'rooms',
title: {
      fr: 'Installation d\'éclairage en saillie sur plafond brut',
      en: 'Surface-mounted lighting on raw ceiling'
    },
        location: 'Bordeaux, France',
   description: {
      fr: 'Montage d\'une rampe d\'éclairage avec ampoules apparentes directement sur un plafond texturé non fini pour un style industriel ou de rénovation.',
      en: 'Mounting of a lighting batten with exposed bulbs directly onto an unfinished textured ceiling for an industrial or renovation style.'
    },
services: {
      fr: ['Éclairage en saillie', 'Câblage apparent', 'Style industriel'],
      en: ['Surface-mounted lighting', 'Exposed wiring', 'Industrial style']
    },
        images: [
      '/data/project11/1.jpeg',
    ],
imageAlt: {
      fr: 'Plafond brut non fini avec une rangée d\'ampoules apparentes allumées',
      en: 'Raw unfinished ceiling with a row of lit exposed light bulbs'
    }
    },

  {
    id: 'proj-12',
    category: 'construction',
title: {
      fr: 'Raccordement électrique pour chaudière',
      en: 'Electrical connection for boiler system'
    },
        location: 'Paris, France',
   description: {
      fr: 'Câblage et raccordement électrique sécurisé pour un système de chauffage ou une chaudière murale en cours d\'installation.',
      en: 'Wiring and secure electrical connection for a heating system or wall-mounted boiler currently being installed.'
    },
services: {
      fr: ['Raccordement chauffage', 'Câblage sécurisé', 'Installation technique'],
      en: ['Heating connection', 'Secure wiring', 'Technical installation']
    },
        images: [
      '/data/project12/1.jpeg',
      '/data/project12/2.jpeg',
      '/data/project12/3.jpeg',
    ],
imageAlt: {
      fr: 'Unité de chauffage murale ouverte montrant les composants internes et le câblage',
      en: 'Open wall-mounted heating unit showing internal components and wiring'
    }
    },

    {
    id: 'proj-13',
    category: 'construction',
title: {
      fr: 'Rénovation électrique complète d\'appartement',
      en: 'Complete apartment electrical renovation'
    },
        location: 'Paris, France',
   description: {
      fr: 'Préparation et passage des gaines électriques dans tout un appartement en cours de rénovation totale avant la pose des cloisons.',
      en: 'Preparation and routing of electrical conduits throughout an apartment undergoing total renovation before drywall installation.'
    },
services: {
      fr: ['Rénovation totale', 'Passage de gaines', 'Préparation cloisons'],
      en: ['Total renovation', 'Conduit routing', 'Drywall prep']
    },
        images: [
      '/data/project13/1.jpeg',
      '/data/project13/2.jpeg',
      '/data/project13/3.jpeg',
    ],
imageAlt: {
      fr: 'Appartement en plein chantier avec matériaux de construction et fils apparents',
      en: 'Apartment in full construction mode with building materials and exposed wires'
    }
    },

    {
    id: 'proj-14',
    category: 'construction',
title: {
      fr: 'Câblage structurel pour bâtiment ancien',
      en: 'Structural wiring for old building'
    },
        location: 'Paris, France',
  description: {
      fr: 'Travaux électriques lourds et mise aux normes dans un bâtiment ancien avec poutres apparentes et murs en pierre.',
      en: 'Heavy electrical work and standard compliance upgrading in an old building with exposed wooden beams and stone walls.'
    },
services: {
      fr: ['Mise aux normes', 'Rénovation lourde', 'Câblage structurel'],
      en: ['Standard compliance', 'Heavy renovation', 'Structural wiring']
    },
        images: [
      '/data/project14/1.jpeg',
    ],
imageAlt: {
      fr: 'Ouvrier sur une échelle dans un bâtiment ancien en rénovation lourde',
      en: 'Worker on a ladder in an old building undergoing heavy renovation'
    }
    },

    {
    id: 'proj-15',
    category: 'construction',
title: {
      fr: 'Pré-câblage pour éclairage de plafond',
      en: 'Pre-wiring for ceiling lighting'
    },
        location: 'Paris, France',
 description: {
      fr: 'Tirage des câbles et attente électrique au plafond et aux murs dans une pièce récemment plâtrée, prêts pour l\'installation des luminaires.',
      en: 'Cable pulling and electrical waiting points on the ceiling and walls in a freshly plastered room, ready for fixture installation.'
    },
services: {
      fr: ['Tirage de câbles', 'Attente électrique', 'Préparation luminaires'],
      en: ['Cable pulling', 'Electrical rough-in', 'Lighting prep']
    },
        images: [
      '/data/project15/1.jpeg',
      '/data/project15/2.jpeg',
    ],
imageAlt: {
      fr: 'Pièce plâtrée avec fils électriques pendants au plafond et une échelle',
      en: 'Plastered room with hanging electrical wires from the ceiling and a ladder'
    }
    },

      {
    id: 'proj-16',
    category: 'construction',
title: {
      fr: 'Pieuvre électrique et câblage dans cloisons',
      en: 'Electrical spider and partition wiring'
    },
        location: 'Paris, France',
   description: {
      fr: 'Installation d\'un réseau de câbles électriques complexes (pieuvre) à travers les montants métalliques avant la fermeture des murs.',
      en: 'Installation of a complex electrical cable network (spider) through metal studs before wall closure.'
    },
services: {
      fr: ['Pieuvre électrique', 'Câblage dans montants', 'Installation encastrée'],
      en: ['Electrical spider', 'Stud wiring', 'Concealed installation']
    },
        images: [
      '/data/project16/1.jpeg',
    ],
imageAlt: {
      fr: 'Faisceau massif de câbles électriques passant par l\'ossature métallique d\'un mur',
      en: 'Massive bundle of electrical cables passing through a metal wall frame'
    }
    },

  {
    id: 'proj-17',
    category: 'panel',
title: {
      fr: 'Câblage de tableau électrique en cours',
      en: 'Electrical panel wiring in progress'
    },
        location: 'Marseille, France',
  description: {
      fr: 'Installation et passage des câbles dans un tableau de répartition principal avant la connexion finale et le rangement.',
      en: 'Installation and routing of wires in a main distribution board prior to final connection and cable management.'
    },
services: {
      fr: ['Câblage de tableau', 'Tableau principal', 'Préparation électrique'],
      en: ['Panel wiring', 'Main distribution board', 'Electrical prep']
    },
        images: [
      '/data/project17/1.jpeg',
      '/data/project17/2.jpeg',
      '/data/project17/3.jpeg',
    ],
imageAlt: {
      fr: 'Tableau électrique ouvert avec des fils non organisés pendants',
      en: 'Open electrical panel with hanging unorganized wires'
    }
    },

    {
    id: 'proj-18',
    category: 'panel',
title: {
      fr: 'Baie de brassage et gestion des câbles',
      en: 'Patch panel and cable management'
    },
        location: 'Marseille, France',
  description: {
      fr: 'Rangement précis et routage des câbles dans une baie de brassage pour une organisation claire et professionnelle des réseaux.',
      en: 'Precise cable management and routing within a network patch panel for clear and professional network organization.'
    },
services: {
      fr: ['Baie de brassage', 'Gestion des câbles', 'Câblage structuré'],
      en: ['Patch panel setup', 'Cable management', 'Structured cabling']
    },
        images: [
      '/data/project18/1.jpeg',
      '/data/project18/2.jpeg',
    ],
imageAlt: {
      fr: 'Baie de réseau très bien organisée avec des câbles gris soigneusement bouclés',
      en: 'Highly organized network rack with neatly looped grey cables'
    }
    },

  {
    id: 'proj-19',
    category: 'panel',
title: {
      fr: 'Tableau électrique résidentiel moderne',
      en: 'Modern residential electrical panel'
    },
        location: 'Marseille, France',
 description: {
      fr: 'Installation d\'un tableau de répartition standard à plusieurs rangées avec disjoncteurs et intégration d\'un compteur moderne.',
      en: 'Installation of a standard multi-row distribution board with circuit breakers and modern meter integration.'
    },
services: {
      fr: ['Installation de disjoncteurs', 'Tableau moderne', 'Intégration compteur'],
      en: ['Breaker installation', 'Modern distribution board', 'Meter integration']
    },
        images: [
      '/data/project19/1.jpeg',
      '/data/project19/2.jpeg',
      '/data/project19/3.jpeg',
    ],
imageAlt: {
      fr: 'Tableau de distribution électrique résidentiel blanc propre avec compteur',
      en: 'Clean white residential electrical distribution board with meter'
    }
    },

   {
    id: 'proj-20',
    category: 'panel',
title: {
      fr: 'Rénovation et remplacement de tableau',
      en: 'Panel renovation and replacement'
    },
        location: 'Marseille, France',
  description: {
      fr: 'Mise à niveau d\'un ancien panneau électrique, montrant la préparation du mur et les conduits apparents pendant la transition.',
      en: 'Upgrading an old electrical board, showing wall preparation and exposed conduits during the transition phase.'
    },

services: {
      fr: ['Remplacement de tableau', 'Mise aux normes', 'Câblage de rénovation'],
      en: ['Panel upgrade', 'Standard compliance', 'Renovation wiring']
    },
        images: [
      '/data/project20/1.jpeg',
      '/data/project20/2.jpeg',
    ],
imageAlt: {
      fr: 'Panneau électrique partiellement rénové sur un mur avec conduits apparents',
      en: 'Partially renovated electrical panel on a wall with exposed wall conduits'
    }
    },

     {
    id: 'proj-21',
    category: 'panel',
title: {
      fr: 'Installation de coffret électrique divisionnaire',
      en: 'Subpanel or junction box installation'
    },
        location: 'Marseille, France',
  description: {
      fr: 'Montage d\'un petit coffret électrique divisionnaire fermé à l\'intérieur d\'un placard pour une distribution de circuit localisée.',
      en: 'Mounting of a small, closed electrical subpanel inside a utility closet for localized circuit distribution.'
    },
services: {
      fr: ['Coffret divisionnaire', 'Câblage utilitaire', 'Boîte de jonction'],
      en: ['Subpanel installation', 'Utility wiring', 'Junction box']
    },
        images: [
      '/data/project21/1.jpeg',
      '/data/project21/2.jpeg',

    ],
imageAlt: {
      fr: 'Petit boîtier électrique blanc fermé monté à l\'intérieur d\'un placard',
      en: 'Small closed white electrical box mounted inside a closet'
    }
    },

      {
    id: 'proj-22',
    category: 'panel',
title: {
      fr: 'Tableau de répartition finalisé',
      en: 'Finalized distribution board'
    },
        location: 'Marseille, France',
  description: {
      fr: 'Un tableau de distribution électrique à plusieurs rangées entièrement équipé et organisé, avec des disjoncteurs clairement alignés, prêt à l\'emploi.',
      en: 'A fully populated and organized multi-row electrical distribution board with clearly aligned circuit breakers, ready for use.'
    },
services: {
      fr: ['Organisation des disjoncteurs', 'Assemblage final', 'Distribution sécurisée'],
      en: ['Breaker organization', 'Final assembly', 'Safe distribution']
    },
        images: [
      '/data/project22/1.jpeg',
      '/data/project22/2.jpeg',
      
    ],
imageAlt: {
      fr: 'Tableau électrique blanc propre et entièrement assemblé avec trois rangées',
      en: 'Fully assembled clean white electrical panel with three rows of breakers'
    }
    },

      {
    id: 'proj-23',
    category: 'panel',
title: {
      fr: 'Passage de câbles pour tableau électrique',
      en: 'Cable routing for electrical panel'
    },
        location: 'Marseille, France',
  description: {
      fr: 'Raccordement des câbles d\'alimentation principaux entrant dans un tableau de répartition via une goulotte technique.',
      en: 'Connection of main power cables entering a distribution board via a technical trunking system.'
    },
services: {
      fr: ['Goulotte technique', 'Câblage d\'alimentation', 'Tableau électrique'],
      en: ['Cable trunking', 'Power wiring', 'Electrical panel']
    },
        images: [
      '/data/project23/1.jpeg',
      '/data/project23/2.jpeg',
      
    ],
imageAlt: {
      fr: 'Tableau électrique blanc avec câbles exposés entrant par le haut',
      en: 'White electrical panel with exposed cables entering from the top'
    }
    },

      {
    id: 'proj-24',
    category: 'panel',
title: {
      fr: 'Câblage interne de tableau de répartition',
      en: 'Internal distribution board wiring'
    },
        location: 'Marseille, France',
description: {
      fr: 'Vue détaillée de l\'organisation interne, du câblage et du raccordement des disjoncteurs dans un tableau électrique en cours de montage.',
      en: 'Detailed view of the internal organization, wiring, and connection of circuit breakers in an electrical panel being assembled.'
    },
services: {
      fr: ['Câblage interne', 'Raccordement disjoncteurs', 'Montage de tableau'],
      en: ['Internal wiring', 'Breaker connection', 'Panel assembly']
    },
        images: [
      '/data/project24/1.jpeg',
      '/data/project24/2.jpeg',
      '/data/project24/3.jpeg',

      
    ],
imageAlt: {
      fr: 'Tableau électrique ouvert montrant les disjoncteurs et le câblage interne',
      en: 'Open electrical panel showing circuit breakers and internal wiring'
    }
    },

      {
    id: 'proj-25',
    category: 'panel',
title: {
      fr: 'Coffret de répartition compact',
      en: 'Compact distribution box'
    },
        location: 'Marseille, France',
description: {
      fr: 'Installation finalisée d\'un petit tableau électrique propre et discret, parfaitement intégré à l\'espace résidentiel.',
      en: 'Finalized installation of a small, clean, and discreet electrical panel, perfectly integrated into the residential space.'
    },
services: {
      fr: ['Coffret compact', 'Finition soignée', 'Installation résidentielle'],
      en: ['Compact panel', 'Neat finish', 'Residential installation']
    },
        images: [
      '/data/project25/1.jpeg',
      '/data/project25/2.jpeg',
      '/data/project25/3.jpeg',
      
    ],
imageAlt: {
      fr: 'Petit coffret électrique blanc fermé fixé au mur',
      en: 'Small closed white electrical box mounted on the wall'
    }
    },

      {
    id: 'proj-26',
    category: 'panel',
title: {
      fr: 'Câblage de précision pour disjoncteurs',
      en: 'Precision wiring for circuit breakers'
    },
        location: 'Marseille, France',
description: {
      fr: 'Travail minutieux de connexion des conducteurs de phase, neutre et terre sur deux rangées de disjoncteurs modulaires.',
      en: 'Meticulous work connecting phase, neutral, and earth conductors across two rows of modular circuit breakers.'
    },
services: {
      fr: ['Câblage de précision', 'Tableau modulaire', 'Sécurité électrique'],
      en: ['Precision wiring', 'Modular panel', 'Electrical safety']
    },
        images: [
      '/data/project26/1.jpeg',
      '/data/project26/2.jpeg',
    ],
imageAlt: {
      fr: 'Gros plan sur un câblage soigné rouge, bleu et vert/jaune dans un tableau électrique',
      en: 'Close-up of neat red, blue, and green/yellow wiring in an electrical panel'
    }
    },

      {
    id: 'proj-27',
    category: 'panel',
title: {
      fr: 'Tableau électrique encastré avec bornier',
      en: 'Recessed electrical panel with terminal block'
    },
        location: 'Marseille, France',
description: {
      fr: 'Mise en place d\'un tableau de distribution encastré, illustrant les rangées de modules et le bornier de terre de protection inférieur.',
      en: 'Setup of a recessed distribution panel, illustrating the rows of modules and the bottom protective earth terminal block.'
    },
services: {
      fr: ['Tableau encastré', 'Mise à la terre', 'Bornier électrique'],
      en: ['Recessed panel', 'Grounding', 'Electrical terminal block']
    },
        images: [
      '/data/project27/1.jpeg',
      '/data/project27/2.jpeg',
      '/data/project27/3.jpeg'
      
    ],
imageAlt: {
      fr: 'Tableau électrique encastré avec bornier de terre vert visible',
      en: 'Recessed electrical panel with visible green earth terminal block'
    }
    },

      {
    id: 'proj-28',
    category: 'panel',
title: {
      fr: 'Armoire électrique multi-rangées',
      en: 'Multi-row electrical cabinet'
    },
        location: 'Marseille, France',
description: {
      fr: 'Installation d\'une grande armoire de distribution électrique avec porte de protection, adaptée pour les installations complexes.',
      en: 'Installation of a large electrical distribution cabinet with a protective door, suitable for complex installations.'
    },
services: {
      fr: ['Armoire électrique', 'Installation complexe', 'Distribution multi-rangées'],
      en: ['Electrical cabinet', 'Complex installation', 'Multi-row distribution']
    },
        images: [
      '/data/project28/1.jpeg',      
    ],
imageAlt: {
      fr: 'Grande armoire électrique blanche avec porte ouverte montrant plusieurs rangées',
      en: 'Large white electrical cabinet with open door showing multiple rows'
    }
    },

  {
    id: 'proj-29',
    category: 'kitchen',
title: {
    fr: 'Installation d\'éclairage LED sous plan de travail',
    en: 'Under-cabinet LED lighting installation'
  },
      location: 'Lille, France',
    description: {
    fr: 'Pose et raccordement d\'un ruban LED sous les meubles hauts pour éclairer le plan de travail, avec intégration soignée le long de la crédence et raccordement des équipements électroménagers encastrés.',
    en: 'Installation and wiring of LED strip lighting under the wall units to light the worktop, neatly integrated along the splashback, alongside connection of the built-in kitchen appliances.'
  },
 services: {
    fr: ['Éclairage LED sous plan de travail', 'Raccordement électroménager encastré', 'Finitions électriques cuisine'],
    en: ['Under-cabinet LED lighting', 'Built-in appliance wiring', 'Kitchen electrical finishing']
  },
      images: [
      '/data/project29/1.jpeg',      
    ],
 imageAlt: {
    fr: 'Installation d\'un ruban LED sous les meubles de cuisine en cours de finition',
    en: 'LED strip light being installed under kitchen units, mid-finish'
  }

  },

  {
    id: 'proj-30',
    category: 'kitchen',
 title: {
    fr: 'Éclairage design pour cuisine avec îlot central',
    en: 'Designer lighting for a kitchen with a central island'
  },
      location: 'Lille, France',
 description: {
    fr: 'Installation électrique complète de l\'éclairage d\'une cuisine avec îlot central : suspensions décoratives au-dessus de l\'îlot, spots encastrés au plafond et éclairage LED intégré sous les meubles hauts.',
    en: 'Complete lighting installation for a kitchen with a central island, including decorative pendant lights above the island, recessed ceiling spotlights and integrated LED lighting under the wall units.'
  },
  services: {
    fr: ['Suspensions décoratives', 'Spots encastrés', 'Éclairage LED intégré', 'Raccordement électroménager'],
    en: ['Decorative pendant lighting', 'Recessed spotlights', 'Integrated LED lighting', 'Appliance wiring']
  },
      images: [
      '/data/project30/1.jpeg',
    ],
 imageAlt: {
    fr: 'Cuisine terminée avec suspensions au-dessus de l\'îlot et éclairage intégré',
    en: 'Finished kitchen with pendant lights over the island and integrated lighting'
  }

},

];

export interface Review {
  id: string;
  name: string;
  rating: number;
  project: { fr: string; en: string };
  text: { fr: string; en: string };
}

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Camille D.',
    rating: 5,
    project: { fr: 'Rénovation appartement', en: 'Apartment renovation' },
    text: {
      fr: 'Un travail minutieux et une communication claire du début à la fin. Le tableau est impeccable et parfaitement expliqué.',
      en: 'Meticulous work and clear communication from start to finish. The panel is spotless and clearly explained.',
    },
  },
  {
    id: 'rev-2',
    name: 'Thomas R.',
    rating: 5,
    project: { fr: 'Installation borne de recharge', en: 'EV charger installation' },
    text: {
      fr: 'Intervention rapide, propre et parfaitement dans les temps. Je recommande sans hésiter.',
      en: 'Fast, clean intervention, right on schedule. I recommend without hesitation.',
    },
  },
  {
    id: 'rev-3',
    name: 'Sophie L.',
    rating: 5,
    project: { fr: 'Domotique maison', en: 'Home automation' },
    text: {
      fr: 'Des conseils précieux pour adapter la domotique à notre mode de vie. Résultat très professionnel.',
      en: 'Valuable advice to adapt the automation to how we live. Very professional result.',
    },
  },
  {
    id: 'rev-4',
    name: 'Marc B.',
    rating: 5,
    project: { fr: 'Mise aux normes', en: 'Compliance upgrade' },
    text: {
      fr: 'Diagnostic clair, devis transparent, et un chantier livré dans les délais annoncés.',
      en: 'Clear diagnosis, transparent quote, and the job delivered on the promised schedule.',
    },
  },
  {
    id: 'rev-5',
    name: 'Élodie M.',
    rating: 5,
    project: { fr: 'Éclairage extérieur', en: 'Outdoor lighting' },
    text: {
      fr: 'Le rendu lumineux de notre jardin a complètement transformé nos soirées d\'été.',
      en: 'The lighting completely transformed how we use our garden in the evenings.',
    },
  },
];

export interface Certification {
  id: string;
  title: { fr: string; en: string };
  issuer: string;
  year: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: { fr: 'Habilitation électrique B1V-B2V-BR-BC', en: 'Electrical authorisation B1V-B2V-BR-BC' },
    issuer: 'Organisme certifié',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  },
  {
    id: 'cert-2',
    title: { fr: 'Qualification RGE / IRVE', en: 'RGE / IRVE qualification' },
    issuer: 'Qualifelec',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80',
  },
  {
    id: 'cert-3',
    title: { fr: 'Certification NF C 15-100', en: 'NF C 15-100 certification' },
    issuer: 'Consuel',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80',
  },
];

export const companyInfo = {
  phone: '+33 6 51 19 07 77',
  email: 'contact.wizzo.75@gmail.com',
  whatsapp: '+33651190777',
  instagram: 'https://www.instagram.com/wizzo_75?igsi=MWJxZTI3ZWU1eWJiMQ==',
  ownerName: 'Nom Prénom',
};

export const stats = {
  years: 10,
  projectsCount: 120,
  satisfaction: 100,
};
