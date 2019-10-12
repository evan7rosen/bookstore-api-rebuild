exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          author: "Jennie Hobbs",
          title: "irure est duis",
          pages: 172,
          genre_id: 2
        },
        {
          author: "Quinn Warner",
          title: "sunt cupidatat velit",
          pages: 996,
          genre_id: 2
        },
        {
          author: "Norman Tyler",
          title: "amet sit ullamco",
          pages: 954,
          genre_id: 1
        },
        {
          author: "Valencia Newman",
          title: "amet minim sit",
          pages: 287,
          genre_id: 2
        },
        {
          author: "Mcmahon Meyer",
          title: "consequat aliqua eu",
          pages: 567,
          genre_id: 3
        },
        {
          author: "Norton Middleton",
          title: "elit dolore voluptate",
          pages: 693,
          genre_id: 3
        },
        {
          author: "Della Buckner",
          title: "commodo enim pariatur",
          pages: 969,
          genre_id: 3
        },
        {
          author: "Nelson Rich",
          title: "do quis sunt",
          pages: 863,
          genre_id: 2
        },
        {
          author: "Douglas Huff",
          title: "do eiusmod dolor",
          pages: 469,
          genre_id: 1
        },
        {
          author: "Cornelia Sheppard",
          title: "et nostrud duis",
          pages: 735,
          genre_id: 3
        },
        {
          author: "Carpenter Herrera",
          title: "elit qui aute",
          pages: 654,
          genre_id: 1
        },
        {
          author: "Deena Hanson",
          title: "proident duis culpa",
          pages: 677,
          genre_id: 2
        },
        {
          author: "Owen Kelly",
          title: "ea anim do",
          pages: 813,
          genre_id: 3
        },
        {
          author: "Lara Gates",
          title: "irure quis nulla",
          pages: 947,
          genre_id: 2
        },
        {
          author: "Rhodes Casey",
          title: "culpa do voluptate",
          pages: 990,
          genre_id: 1
        },
        {
          author: "Rhea Shepherd",
          title: "ullamco aliqua reprehenderit",
          pages: 490,
          genre_id: 1
        },
        {
          author: "Levine Mccall",
          title: "labore fugiat elit",
          pages: 986,
          genre_id: 1
        },
        {
          author: "Haley Ball",
          title: "aliqua ipsum culpa",
          pages: 237,
          genre_id: 2
        },
        {
          author: "Crane Davis",
          title: "et ipsum irure",
          pages: 679,
          genre_id: 2
        },
        {
          author: "Antonia Bryan",
          title: "ut ut est",
          pages: 862,
          genre_id: 2
        },
        {
          author: "Sutton Valdez",
          title: "nostrud aliqua duis",
          pages: 893,
          genre_id: 2
        },
        {
          author: "Shannon Langley",
          title: "excepteur minim ad",
          pages: 715,
          genre_id: 1
        },
        {
          author: "Consuelo David",
          title: "adipisicing laboris nisi",
          pages: 971,
          genre_id: 2
        },
        {
          author: "Wagner Patterson",
          title: "magna ipsum enim",
          pages: 636,
          genre_id: 1
        },
        {
          author: "Alicia Parsons",
          title: "id culpa Lorem",
          pages: 823,
          genre_id: 1
        },
        {
          author: "Harrington Underwood",
          title: "est laborum aliquip",
          pages: 634,
          genre_id: 1
        },
        {
          author: "Dora Wynn",
          title: "consequat fugiat ex",
          pages: 374,
          genre_id: 3
        },
        {
          author: "Caitlin Wilcox",
          title: "ea elit amet",
          pages: 669,
          genre_id: 2
        },
        {
          author: "Olson Barber",
          title: "laboris consectetur cillum",
          pages: 724,
          genre_id: 2
        },
        {
          author: "Boyd Kaufman",
          title: "minim amet deserunt",
          pages: 860,
          genre_id: 3
        },
        {
          author: "Delacruz Harris",
          title: "et quis reprehenderit",
          pages: 293,
          genre_id: 2
        },
        {
          author: "Kemp Fischer",
          title: "quis ex et",
          pages: 261,
          genre_id: 3
        },
        {
          author: "Peck Padilla",
          title: "aute ullamco labore",
          pages: 773,
          genre_id: 1
        },
        {
          author: "Weeks Haynes",
          title: "id Lorem occaecat",
          pages: 563,
          genre_id: 1
        },
        {
          author: "Florine Walton",
          title: "Lorem et amet",
          pages: 560,
          genre_id: 1
        },
        {
          author: "Marie Harding",
          title: "anim quis in",
          pages: 185,
          genre_id: 3
        },
        {
          author: "Lula Finley",
          title: "eiusmod eiusmod pariatur",
          pages: 392,
          genre_id: 2
        },
        {
          author: "Guerra Randall",
          title: "voluptate id consequat",
          pages: 184,
          genre_id: 2
        },
        {
          author: "Minerva Mayo",
          title: "labore ipsum aliquip",
          pages: 181,
          genre_id: 1
        },
        {
          author: "Bright Palmer",
          title: "dolor anim amet",
          pages: 662,
          genre_id: 3
        },
        {
          author: "Wolfe Conner",
          title: "ipsum esse commodo",
          pages: 366,
          genre_id: 3
        },
        {
          author: "York Roth",
          title: "sint do cupidatat",
          pages: 451,
          genre_id: 3
        },
        {
          author: "Brewer Hays",
          title: "ullamco id enim",
          pages: 807,
          genre_id: 2
        },
        {
          author: "Carter Gallagher",
          title: "nostrud in enim",
          pages: 742,
          genre_id: 1
        },
        {
          author: "Hattie Hodges",
          title: "mollit qui in",
          pages: 208,
          genre_id: 2
        },
        {
          author: "Hansen Nielsen",
          title: "quis consequat qui",
          pages: 421,
          genre_id: 3
        },
        {
          author: "Davenport Lara",
          title: "aliqua enim minim",
          pages: 167,
          genre_id: 2
        },
        {
          author: "Ball Fields",
          title: "id tempor pariatur",
          pages: 324,
          genre_id: 2
        },
        {
          author: "Bentley Meadows",
          title: "deserunt cupidatat cupidatat",
          pages: 988,
          genre_id: 1
        },
        {
          author: "Lelia Preston",
          title: "laboris esse in",
          pages: 922,
          genre_id: 3
        },
        {
          author: "Burris Mercer",
          title: "quis consequat consectetur",
          pages: 472,
          genre_id: 3
        },
        {
          author: "Christina Mullins",
          title: "fugiat commodo velit",
          pages: 536,
          genre_id: 3
        },
        {
          author: "Carla Holmes",
          title: "ex laborum minim",
          pages: 141,
          genre_id: 1
        },
        {
          author: "Wendy Gregory",
          title: "ad laboris laboris",
          pages: 618,
          genre_id: 2
        },
        {
          author: "Moses Aguirre",
          title: "laboris mollit ex",
          pages: 275,
          genre_id: 2
        },
        {
          author: "Penelope Newton",
          title: "ad magna tempor",
          pages: 543,
          genre_id: 3
        },
        {
          author: "Ila Mcpherson",
          title: "et commodo in",
          pages: 611,
          genre_id: 1
        },
        {
          author: "Patton Massey",
          title: "est laboris fugiat",
          pages: 951,
          genre_id: 1
        },
        {
          author: "Ford Patrick",
          title: "do incididunt ad",
          pages: 200,
          genre_id: 2
        },
        {
          author: "Chrystal Page",
          title: "voluptate id qui",
          pages: 261,
          genre_id: 1
        },
        {
          author: "Elizabeth Holloway",
          title: "esse dolore ad",
          pages: 951,
          genre_id: 1
        },
        {
          author: "Madge Carpenter",
          title: "exercitation velit duis",
          pages: 865,
          genre_id: 3
        },
        {
          author: "Barton Wilkinson",
          title: "elit est ad",
          pages: 851,
          genre_id: 3
        },
        {
          author: "Sally Calderon",
          title: "eu sunt fugiat",
          pages: 244,
          genre_id: 1
        },
        {
          author: "Felecia Nixon",
          title: "esse consectetur incididunt",
          pages: 742,
          genre_id: 2
        },
        {
          author: "Gregory Carson",
          title: "nulla excepteur non",
          pages: 362,
          genre_id: 2
        },
        {
          author: "Geraldine Larsen",
          title: "deserunt ut aliquip",
          pages: 199,
          genre_id: 3
        },
        {
          author: "Sue Salazar",
          title: "sit culpa sint",
          pages: 805,
          genre_id: 1
        },
        {
          author: "Leona Fitzgerald",
          title: "nostrud do do",
          pages: 652,
          genre_id: 1
        },
        {
          author: "Karen Jefferson",
          title: "proident aliqua duis",
          pages: 459,
          genre_id: 3
        },
        {
          author: "Wilkerson Duncan",
          title: "do magna cillum",
          pages: 818,
          genre_id: 1
        },
        {
          author: "Henson Albert",
          title: "Lorem et exercitation",
          pages: 167,
          genre_id: 2
        },
        {
          author: "Amparo Mcdaniel",
          title: "labore est laboris",
          pages: 890,
          genre_id: 1
        },
        {
          author: "Yvonne Mendoza",
          title: "deserunt sit eiusmod",
          pages: 190,
          genre_id: 3
        },
        {
          author: "Guthrie Ashley",
          title: "Lorem adipisicing magna",
          pages: 687,
          genre_id: 1
        },
        {
          author: "Essie Lane",
          title: "aute culpa aute",
          pages: 241,
          genre_id: 3
        },
        {
          author: "Mccarthy Cruz",
          title: "aliqua voluptate proident",
          pages: 924,
          genre_id: 2
        },
        {
          author: "Lilia Melton",
          title: "mollit officia nulla",
          pages: 496,
          genre_id: 3
        },
        {
          author: "Page Sparks",
          title: "quis officia et",
          pages: 838,
          genre_id: 1
        },
        {
          author: "Katrina Wood",
          title: "Lorem fugiat in",
          pages: 384,
          genre_id: 3
        },
        {
          author: "Eula Turner",
          title: "mollit quis amet",
          pages: 618,
          genre_id: 1
        },
        {
          author: "Nancy Waters",
          title: "ullamco culpa est",
          pages: 962,
          genre_id: 1
        },
        {
          author: "Earline Rhodes",
          title: "adipisicing elit est",
          pages: 510,
          genre_id: 2
        },
        {
          author: "Goff Norton",
          title: "nulla esse enim",
          pages: 447,
          genre_id: 1
        },
        {
          author: "Atkinson Leonard",
          title: "irure laboris dolore",
          pages: 776,
          genre_id: 3
        },
        {
          author: "Day Mcbride",
          title: "et laborum eu",
          pages: 111,
          genre_id: 1
        },
        {
          author: "Brittney Lindsay",
          title: "ipsum exercitation id",
          pages: 169,
          genre_id: 3
        },
        {
          author: "Herring Blackwell",
          title: "deserunt labore nulla",
          pages: 911,
          genre_id: 2
        },
        {
          author: "Noreen Cash",
          title: "nisi nostrud esse",
          pages: 219,
          genre_id: 3
        },
        {
          author: "Rachel Woodward",
          title: "minim ullamco et",
          pages: 465,
          genre_id: 3
        },
        {
          author: "Coleen Battle",
          title: "adipisicing veniam tempor",
          pages: 636,
          genre_id: 3
        },
        {
          author: "Hurley Hendrix",
          title: "consequat aliquip quis",
          pages: 400,
          genre_id: 2
        },
        {
          author: "Zimmerman Nash",
          title: "duis velit ad",
          pages: 624,
          genre_id: 3
        },
        {
          author: "Lucille Gould",
          title: "aute aute aute",
          pages: 667,
          genre_id: 1
        },
        {
          author: "Obrien Sweeney",
          title: "cupidatat labore amet",
          pages: 636,
          genre_id: 3
        },
        {
          author: "Rosa Petty",
          title: "deserunt laborum enim",
          pages: 225,
          genre_id: 2
        },
        {
          author: "Serrano Copeland",
          title: "occaecat dolore Lorem",
          pages: 821,
          genre_id: 2
        },
        {
          author: "Jenny Freeman",
          title: "laboris velit esse",
          pages: 559,
          genre_id: 2
        },
        {
          author: "Kristy Owen",
          title: "est exercitation nostrud",
          pages: 589,
          genre_id: 2
        },
        {
          author: "Merritt Rasmussen",
          title: "et fugiat nostrud",
          pages: 272,
          genre_id: 3
        },
        {
          author: "Hampton Thornton",
          title: "sunt irure mollit",
          pages: 413,
          genre_id: 3
        },
        {
          author: "Lorena Coffey",
          title: "proident duis dolor",
          pages: 277,
          genre_id: 1
        },
        {
          author: "Johanna Bowers",
          title: "do tempor excepteur",
          pages: 676,
          genre_id: 3
        },
        {
          author: "England Quinn",
          title: "aliquip et aute",
          pages: 652,
          genre_id: 1
        },
        {
          author: "Parrish Bailey",
          title: "in cupidatat do",
          pages: 394,
          genre_id: 1
        },
        {
          author: "Laurel Mcfadden",
          title: "occaecat deserunt exercitation",
          pages: 437,
          genre_id: 2
        },
        {
          author: "Whitney Burton",
          title: "id laboris est",
          pages: 985,
          genre_id: 2
        },
        {
          author: "Stanton Campos",
          title: "sint incididunt do",
          pages: 440,
          genre_id: 2
        },
        {
          author: "Bailey Cooke",
          title: "nisi cupidatat eu",
          pages: 638,
          genre_id: 3
        },
        {
          author: "Georgette Grant",
          title: "anim anim ut",
          pages: 339,
          genre_id: 1
        },
        {
          author: "Downs Mclaughlin",
          title: "dolore nostrud sunt",
          pages: 725,
          genre_id: 2
        },
        {
          author: "Hebert Brooks",
          title: "quis sit consequat",
          pages: 764,
          genre_id: 3
        },
        {
          author: "Alexandria Ewing",
          title: "elit id quis",
          pages: 480,
          genre_id: 3
        },
        {
          author: "Hanson Avery",
          title: "magna adipisicing aute",
          pages: 689,
          genre_id: 1
        },
        {
          author: "Susanne Trujillo",
          title: "mollit eu quis",
          pages: 459,
          genre_id: 2
        },
        {
          author: "Velazquez Mays",
          title: "consectetur minim enim",
          pages: 359,
          genre_id: 2
        },
        {
          author: "Silvia Dotson",
          title: "voluptate exercitation cillum",
          pages: 852,
          genre_id: 2
        },
        {
          author: "Noel Houston",
          title: "ut laboris fugiat",
          pages: 516,
          genre_id: 1
        },
        {
          author: "Chaney Barrera",
          title: "proident nisi qui",
          pages: 278,
          genre_id: 2
        },
        {
          author: "Alvarado Berg",
          title: "qui culpa id",
          pages: 296,
          genre_id: 1
        },
        {
          author: "Adrian Lott",
          title: "et Lorem non",
          pages: 574,
          genre_id: 2
        },
        {
          author: "Hall Anderson",
          title: "nisi voluptate velit",
          pages: 918,
          genre_id: 1
        },
        {
          author: "Sheri Reynolds",
          title: "quis elit adipisicing",
          pages: 546,
          genre_id: 2
        },
        {
          author: "Roberta Larson",
          title: "aliquip laborum fugiat",
          pages: 352,
          genre_id: 1
        },
        {
          author: "Fields Carver",
          title: "nisi est pariatur",
          pages: 882,
          genre_id: 1
        },
        {
          author: "Jill Watkins",
          title: "nostrud culpa sunt",
          pages: 708,
          genre_id: 1
        },
        {
          author: "Juliette Yang",
          title: "eiusmod fugiat sint",
          pages: 183,
          genre_id: 3
        },
        {
          author: "Sosa Silva",
          title: "tempor elit aute",
          pages: 353,
          genre_id: 1
        },
        {
          author: "Reilly Solis",
          title: "eiusmod reprehenderit qui",
          pages: 317,
          genre_id: 2
        },
        {
          author: "Dotson Noble",
          title: "ea elit elit",
          pages: 974,
          genre_id: 3
        },
        {
          author: "Barron Gross",
          title: "id qui in",
          pages: 428,
          genre_id: 3
        },
        {
          author: "Amie Maddox",
          title: "elit do dolor",
          pages: 248,
          genre_id: 1
        },
        {
          author: "Underwood Barron",
          title: "elit nostrud ut",
          pages: 133,
          genre_id: 1
        },
        {
          author: "Banks Bernard",
          title: "exercitation nostrud commodo",
          pages: 496,
          genre_id: 1
        },
        {
          author: "Juarez Jennings",
          title: "amet minim mollit",
          pages: 731,
          genre_id: 3
        },
        {
          author: "Mclean Kerr",
          title: "est consectetur cillum",
          pages: 287,
          genre_id: 3
        },
        {
          author: "Aurora Wright",
          title: "enim minim esse",
          pages: 154,
          genre_id: 2
        },
        {
          author: "Cole Harper",
          title: "ut nostrud est",
          pages: 802,
          genre_id: 3
        },
        {
          author: "Mavis Ruiz",
          title: "sit excepteur culpa",
          pages: 733,
          genre_id: 1
        },
        {
          author: "Paula Wilkerson",
          title: "ea esse ea",
          pages: 542,
          genre_id: 2
        },
        {
          author: "Leanna Gaines",
          title: "in id duis",
          pages: 759,
          genre_id: 2
        },
        {
          author: "Janet Lee",
          title: "sint minim est",
          pages: 517,
          genre_id: 2
        },
        {
          author: "Ola Gallegos",
          title: "deserunt reprehenderit nostrud",
          pages: 365,
          genre_id: 2
        },
        {
          author: "Louella Crosby",
          title: "nisi ex esse",
          pages: 940,
          genre_id: 2
        },
        {
          author: "Coleman Hess",
          title: "proident ipsum consequat",
          pages: 375,
          genre_id: 3
        },
        {
          author: "Petty Fuentes",
          title: "consequat esse quis",
          pages: 965,
          genre_id: 1
        },
        {
          author: "Rush Stanley",
          title: "esse consequat reprehenderit",
          pages: 542,
          genre_id: 2
        },
        {
          author: "Boyer Gray",
          title: "mollit mollit laboris",
          pages: 782,
          genre_id: 2
        },
        {
          author: "Alison Booker",
          title: "dolore consectetur reprehenderit",
          pages: 579,
          genre_id: 3
        },
        {
          author: "Waller Dejesus",
          title: "cillum magna deserunt",
          pages: 311,
          genre_id: 1
        },
        {
          author: "Kasey Riley",
          title: "sit do nulla",
          pages: 942,
          genre_id: 2
        },
        {
          author: "Gilliam Suarez",
          title: "veniam elit elit",
          pages: 502,
          genre_id: 3
        },
        {
          author: "Peggy Todd",
          title: "nisi do velit",
          pages: 246,
          genre_id: 2
        },
        {
          author: "Irma Farmer",
          title: "irure mollit exercitation",
          pages: 739,
          genre_id: 1
        },
        {
          author: "Myrtle Dyer",
          title: "sit est nulla",
          pages: 688,
          genre_id: 1
        },
        {
          author: "Koch Bishop",
          title: "cillum aute pariatur",
          pages: 973,
          genre_id: 3
        },
        {
          author: "Farley Bowen",
          title: "aute ipsum aliqua",
          pages: 924,
          genre_id: 2
        },
        {
          author: "Hubbard Swanson",
          title: "mollit culpa amet",
          pages: 350,
          genre_id: 3
        },
        {
          author: "Audrey Alford",
          title: "sint consectetur esse",
          pages: 673,
          genre_id: 3
        },
        {
          author: "Corrine Castillo",
          title: "voluptate elit magna",
          pages: 389,
          genre_id: 3
        },
        {
          author: "Chapman Olsen",
          title: "tempor incididunt dolor",
          pages: 438,
          genre_id: 1
        },
        {
          author: "Courtney Hubbard",
          title: "in cupidatat consectetur",
          pages: 939,
          genre_id: 2
        },
        {
          author: "Jami Sherman",
          title: "sunt amet culpa",
          pages: 268,
          genre_id: 1
        },
        {
          author: "Grace Whitfield",
          title: "magna nostrud cupidatat",
          pages: 571,
          genre_id: 2
        },
        {
          author: "Leticia Hendricks",
          title: "deserunt et minim",
          pages: 238,
          genre_id: 1
        },
        {
          author: "Mai Mccarthy",
          title: "tempor ad reprehenderit",
          pages: 979,
          genre_id: 3
        },
        {
          author: "Pollard Mcguire",
          title: "labore enim minim",
          pages: 287,
          genre_id: 1
        },
        {
          author: "Serena Snow",
          title: "excepteur sint veniam",
          pages: 707,
          genre_id: 2
        },
        {
          author: "Jacobson Bush",
          title: "elit laborum elit",
          pages: 254,
          genre_id: 2
        },
        {
          author: "Mathews Rosa",
          title: "fugiat sint culpa",
          pages: 486,
          genre_id: 2
        },
        {
          author: "Mallory Garza",
          title: "minim ipsum aute",
          pages: 255,
          genre_id: 2
        },
        {
          author: "Lilian Watts",
          title: "eu exercitation et",
          pages: 573,
          genre_id: 1
        },
        {
          author: "Riggs Morris",
          title: "aliquip do ullamco",
          pages: 558,
          genre_id: 3
        },
        {
          author: "Janna Santana",
          title: "ea laboris culpa",
          pages: 839,
          genre_id: 3
        },
        {
          author: "Booth Bennett",
          title: "cillum aliquip fugiat",
          pages: 116,
          genre_id: 1
        },
        {
          author: "Castaneda Christian",
          title: "occaecat consequat excepteur",
          pages: 496,
          genre_id: 1
        },
        {
          author: "Weaver Chen",
          title: "sint culpa amet",
          pages: 200,
          genre_id: 3
        },
        {
          author: "Christi Perkins",
          title: "mollit voluptate deserunt",
          pages: 890,
          genre_id: 2
        },
        {
          author: "Ruth Vance",
          title: "ad nostrud sunt",
          pages: 933,
          genre_id: 2
        },
        {
          author: "Hester Guy",
          title: "dolor elit consectetur",
          pages: 770,
          genre_id: 1
        },
        {
          author: "Ballard Dominguez",
          title: "ipsum labore velit",
          pages: 734,
          genre_id: 3
        },
        {
          author: "Cleo Franks",
          title: "ut id ea",
          pages: 837,
          genre_id: 3
        },
        {
          author: "Paulette Mcdonald",
          title: "ipsum cillum est",
          pages: 450,
          genre_id: 3
        },
        {
          author: "Barbra Doyle",
          title: "ea laboris sit",
          pages: 682,
          genre_id: 2
        },
        {
          author: "Nikki Barrett",
          title: "duis est in",
          pages: 726,
          genre_id: 2
        },
        {
          author: "Case Frazier",
          title: "consectetur deserunt in",
          pages: 535,
          genre_id: 2
        },
        {
          author: "Selena Weiss",
          title: "labore tempor ut",
          pages: 986,
          genre_id: 3
        },
        {
          author: "Jana French",
          title: "adipisicing sunt ipsum",
          pages: 625,
          genre_id: 2
        },
        {
          author: "Ada Oliver",
          title: "est ad occaecat",
          pages: 612,
          genre_id: 2
        },
        {
          author: "Angelina Oneal",
          title: "amet adipisicing sit",
          pages: 995,
          genre_id: 3
        },
        {
          author: "Casey Rutledge",
          title: "quis velit qui",
          pages: 352,
          genre_id: 2
        },
        {
          author: "Clara Taylor",
          title: "non cupidatat esse",
          pages: 375,
          genre_id: 2
        },
        {
          author: "Kristin Bean",
          title: "id amet consectetur",
          pages: 133,
          genre_id: 1
        },
        {
          author: "Barrett Kirkland",
          title: "magna id consectetur",
          pages: 744,
          genre_id: 3
        },
        {
          author: "Fay Cochran",
          title: "proident amet ad",
          pages: 569,
          genre_id: 1
        },
        {
          author: "Britt Blankenship",
          title: "fugiat officia pariatur",
          pages: 227,
          genre_id: 3
        },
        {
          author: "Lynch Macdonald",
          title: "nisi velit consequat",
          pages: 723,
          genre_id: 2
        },
        {
          author: "Mathis Bradshaw",
          title: "proident adipisicing elit",
          pages: 708,
          genre_id: 1
        },
        {
          author: "Sloan Ferguson",
          title: "laboris magna proident",
          pages: 296,
          genre_id: 2
        },
        {
          author: "Richard Holt",
          title: "minim proident tempor",
          pages: 516,
          genre_id: 2
        }
      ]);
    });
};
