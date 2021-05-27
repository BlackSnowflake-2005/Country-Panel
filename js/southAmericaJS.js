let questions = [
    {
        numb: 1,
        question: "Buenos Aries is the capital of?",
        answer: "Argentina",
        options: [
            "Argentina",
            "Colombia",
            "Canada",
            "Venezuela"
        ]
    },
    {
        numb: 2,
        question: "Sucré is the capital of?",
        answer: "Bolivia",
        options: [
            "Georgetown",
            "Uruguay",
            "Bolivia",
            "Peru"
        ]
    },
    {
        numb: 3,
        question: "Brasília is the capital of?",
        answer: "Brazil",
        options: [
            "Montevideo",
            "Brazil",
            "Peru",
            "Chile"
        ]
    },
    {
        numb: 4,
        question: "Santiago is the capital of?",
        answer: "Chile",
        options: [
            "Brazil",
            "Chile",
            "Colombia",
            "Mexico"
        ]
    },
    {
        numb: 5,
        question: "Bogotá is the capital of?",
        answer: "Colombia",
        options: [
            "Lima",
            "Venezuela",
            "suriname",
            "Colombia"
        ]
    },
    {
        numb: 6,
        question: "Quito is the capital of?",
        answer: "Ecuador",
        options: [
            "Guyana",
            "Chile",
            "Ecuador",
            "Uruguay"
        ]
    },
    {
        numb: 7,
        question: "Georgetown is the capital of?",
        answer: "Guyana",
        options: [
            "Guyana",
            "Montevideo",
            "Paramaribo",
            "Sierra Leone"
        ]
    },
    {
        numb: 8,
        question: "Asunción is the capital of?",
        answer: "Paraguay",
        options: [
            "Lima",
            "Paraguay",
            "venezuela",
            "Tanzania"
        ]
    },
    {
        numb: 9,
        question: "Lima is the capital of?",
        answer: "Peru",
        options: [
            "Peru",
            "Chile",
            "Colombia",
            "Togo"
        ]
    },
    {
        numb: 10,
        question: "Paramaribo is the capital of?",
        answer: "Suriname",
        options: [
            "Guyana",
            "Montevideo",
            "Suriname",
            "Swaziland"
        ]
    },
    {
        numb: 11,
        question: "Montevideo is the capital of?",
        answer: "Uruguay",
        options: [
            "Georgetown",
            "Uruguay",
            "Fiji",
            "Peru"
        ]
    },
    {
        numb: 12,
        question: "Caracas is the capital of?",
        answer: "Sucre",
        options: [
            "Sucre",
            "Swaziland",
            "Suriname",
            "Venezuela"
        ]
    },
    
];

let data = [
    {
        number: 1,
        country: 'Argentina',
        capital: ' Buenos Aires ',
        currency: 'Argentine Peso (ARS)($)',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Argentina',
        flag: 'flags/SouthAmerica/Argentina.png',
        info: [
            'The Name Argentina comes from the Latin word for sliver \'argentum\'. By land area Argentina is the 2nd largest country '
            +'in South America and the 8th largest country in the world. Spanish is the official language of Argentina but there are many other'
            + 'languages spoken throughout the country.',
            'Argentina is also a nation of spectacular natural wonders. The glaciers and mountains of Patagonia are splendorous and the waterfalls'
             +'in Iguazu are the biggest and most beautiful in the world. Enjoy the greatest hiking in the world, experience amazing excursions,' 
             +'and partake in numerous sports activities.'

            
        ]
    },
    {
        number: 2,
        country: 'Bolivia',
        capital: 'Sucré',
        currency: 'Boliviano (BOB)',
        language: 'Spanish and 36 indigenous languages',
        link: ' https://en.wikipedia.org/wiki/Bolivia',
        flag: 'flags/SouthAmerica/Bolivia.png',
        info: [
            'Bolivia is a country with a varied terrain spanning Andes Mountains, the Atacama Desert and Amazon Basin rainforest.', 
            'Bolivia boasts many breathtaking sites, although the most famous is undoubtedly its otherworldy salt flats. Known as' 
            +'the Salar de Uyuni, this spectacular great white expanse is the largest and highest in the world.'
            
        ]
    },
    {
        number: 3,
        country: 'Brazil',
        capital: ' Brasília',
        currency: 'Real (R$) (BRL)',
        language: 'Portuguese',
        link: ' https://en.wikipedia.org/wiki/Brazil',
        flag: 'flags/SouthAmerica/Brazil.png',
        info: [
           'Brazil is the largest country in South America and the fifth largest nation in the world. It forms an enormous triangle '
            +'on the eastern side of the continent with a 4,500-mile (7,400-kilometer) coastline along the Atlantic Ocean.',

            'Brazil is famous for its iconic carnival festival and its talented soccer players like Pelé and Neymar. Brazil is also known '
            +'for its tropical beaches, exquisite waterfalls, and the Amazon rainforest.'

        ]
    },
    {
        number: 4,
        country: 'Chile',
        capital: 'Santiago',
        currency: 'Chilean peso (CLP)‎',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Chile',
        flag: 'flags/SouthAmerica/Chile.png',
        info: [
            'Chile is the longest narrow country in the world stretching from the north to the south over 4,300 km/ 2,670 miles. The Atacama desert '
            +'in the country\'s north is the largest dry desert in the world. The Easter Island in the Pacific Ocean off the Chilean coast is the most '
            +'remote inhabited island of the world.',

            'Even though Chile is internationally known for its succulent red wines and its devilish pisco, Chile also has a strong and diverse beer culture!'

        ]
    },
    {
        number: 5,
        country: 'Colombia',
        capital: 'Bogotá',
        currency: 'Colombian peso (COP)',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Colombia',
        flag: 'flags/SouthAmerica/Colombia.png',
        info: [
           'Colombia is the second most biodiverse country in the world, after only Brazil which is 10 times its size, and one of only 17 “megadiverse” '
            +'countries. It has the highest amount of species by area in the world, including more species of bird than all of Europe and North America combined.',

           'Colombia is famous for its arepas and specialty coffee, as well as the kindness of its people. It\'s known for its culturally rich heritage where art, music '
           +'and theater mix, and its diverse landscapes from deserts to snow-covered mountains. It also has its share of famous people like Shakira and Sofia Vergara.'
        ]
    },
    {
        number: 6,
        country: 'Ecuador',
        capital: 'Quito',
        currency: 'United States dollar(USD)',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Ecuador',
        flag: 'flags/SouthAmerica/Ecuador.png',
        info: [
            'Ecuador is a country straddling the equator on South America’s west coast. Its diverse landscape encompasses Amazon jungle, '
             +'Andean highlands and the wildlife-rich Galápagos Islands. ',
            'Ecuador is the only country in the world that is named after a geographical feature. Ecuador has the world\'s'
             +'first and second UNESCO World Heritage Sites: Galapagos Islands and Quito.'
           
        ]
    },
    {
        number: 7,
        country: 'Guyana',
        capital: 'Georgetown',
        currency: ' Guyanese dollar (GYD)',
        language: 'English and 10 indigenous languages',
        link: 'https://en.wikipedia.org/wiki/Guyana',
        flag: 'flags/SouthAmerica/Guyana.png',
        info: [
            'Guyana is Known as the ‘land of many waters,’ the world’s widest and longest single-drop waterfall is located on Guyana’s '
            +'Potaro River in the Kaieteur National Park. ',

           'Guyana is the only English-speaking country of South America. The country\'s chief economic'
            +'assets have been its natural resources, mainly its pristine rainforests, sugarcane plantations, rice fields, and bauxite and gold reserves.'

        ]
    },
    {
        number: 8,
        country: 'Paraguay',
        capital: 'Asunción',
        currency: 'Guaraní (PYG)',
        language: 'Spanish , Guarani',
        link: 'https://en.wikipedia.org/wiki/Paraguay',
        flag: 'flags/SouthAmerica/Paraguay.png',
        info: [
            'Paraguay is a landlocked country between Argentina, Brazil and Bolivia, home to large '
            +'swaths of swampland, subtropical forest and chaco, wildernesses comprising savanna and scrubland.',
            'Paraguay has several beautiful nicknames. The most famous are \'the heart of South America\', \'the land of water\' and '
            +'\'the island surrounded by mainland\'. Largest navy: Although Paraguay only has land borders, it has a large navy.'
            
        ]
    },
    {
        number: 9,
        country: 'Peru',
        capital: 'Lima',
        currency: 'Sol (PEN)',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Peru',
        flag: 'flags/SouthAmerica/Peru.png',
        info: [
            'Peru is a country in South America that\'s home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. ',
            'Peru is known as the Land of the Incas, an ancient civilization that came from the Peruvian highlands in the early 1200s. The Incas ruled Peru for over'
             +'300 years until the Spanish conquered them in 1572. At its peak, the Incas were one of the largest Empires in the world.'
        ]
    },
    {
        number: 10,
        country: 'Suriname',
        capital: 'Paramaribo',
        currency: 'Surinamese dollar (SRD)',
        language: 'Dutch and 8 indigenous languages',
        link: 'https://en.wikipedia.org/wiki/Suriname',
        flag: 'flags/SouthAmerica/Suriname.png',
        info: [
            'Suriname is a small country on the northeastern coast of South America. It\'s defined by vast swaths of tropical rainforest,'
           + 'Dutch colonial architecture and a melting-pot culture.',
            'Suriname is one of the smallest countries in South America, yet its population is one of the most ethnically diverse in the region. Its'
           + 'economy is dependent on its extensive supply of natural resources, most notably bauxite, of which it is one of the top producers in the world.'
        ]
    },
    {
        number: 11,
        country: 'Uruguay',
        capital: 'Montevideo',
        currency: 'Uruguayan peso (UYU)',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Uruguay',
        flag: 'flags/SouthAmerica/Uruguay.png',
        info: [
            'The country\'s name comes from the Uruguay river and means river of the painted birds in the Guarani language. The river starts in' 
           + ' Brazil, ends in the Río de la Plata Basin and forms the border between Uruguay and Argentina. Every single house in Uruguay has its own unique name.',
           'Uruguay Has The World\'s Longest National Anthem. Uruguay Became The First Country To Supply A Laptop For Free To Every Schoolchild.' 
        ]
    },
    {
        number: 12,
        country: 'VeneZuela',
        capital: 'Caracas',
        currency: 'Bolívar Soberano (VES)',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Venezuela',
        flag: 'flags/SouthAmerica/Venezuela.png',
        info: [
            'Venezuela is a country on the northern coast of South America with diverse natural attractions. Along its Caribbean coast are tropical resort islands'
             +' including Isla de Margarita and the Los Roques archipelago. ',
            'Venezuela is known widely for its petroleum industry, the environmental diversity of its territory, and its natural features.'
            + 'Home to a huge diversity of wildlife in a variety of protected habitats, Venezuela is considered to be among the 17 most megadiverse countries in the world.'
        ]
    },
    
];