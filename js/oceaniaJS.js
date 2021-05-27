let questions = [
    {
        numb: 1,
        question: "Canberra is the capital of?",
        answer: "Australia",
        options: [
            "Australia",
            "Solomon Islands",
            "Kiribati",
            "Ghana"
        ]
    },
    {
        numb: 2,
        question: "Suva is the capital of?",
        answer: "Fiji",
        options: [
            "Palau",
            "Tonga",
            "Fiji",
            "Marshall Islands"
        ]
    },
    {
        numb: 3,
        question: "Tarawa is the capital of?",
        answer: "Kiribati",
        options: [
            "Cape Verde",
            "Kiribati",
            "Grenada",
            "Timor-Leste"
        ]
    },
    {
        numb: 4,
        question: "Majuro is the capital of?",
        answer: "Marshall Islands",
        options: [
            "Nauru",
            "Tuvalu",
            "Fiji",
            "Marshall Islands"
        ]
    },
    {
        numb: 5,
        question: "Palikir is the capital of?",
        answer: "Micronesia",
        options: [
            "Gabon",
            "Kenya",
            "Micronesia",
            "Papua New Guinea"
        ]
    },
    {
        numb: 6,
        question: "Yaren is the capital of?",
        answer: "Nauru",
        options: [
            "Benin",
            "Mauritania",
            "Cuba",
            "Nauru"
        ]
    },
    {
        numb: 7,
        question: "Wellington is the capital of?",
        answer: "New Zealand",
        options: [
            "Barbados",
            "Netherlands",
            "New Zealand",
            "Timor-Leste"
        ]
    },
    {
        numb: 8,
        question: "Port Moresby is the capital of?",
        answer: "Papua New Guinea",
        options: [
            "Vanuatu",
            "Palau",
            "Fiji",
            "Papua New Guinea"
        ]
    },
    {
        numb: 9,
        question: "Honiara is the capital of?",
        answer: "Solomon Islands",
        options: [
            "Solomon Islands",
            "Tonga",
            "Finland",
            "Micronesia"
        ]
    },
    {
        numb: 10,
        question: "Nuku’alofa is the capital of?",
        answer: "Tonga",
        options: [
            "Burundi",
            "Tonga",
            "Australia",
            "United States"
        ]
    },
    {
        numb: 11,
        question: "Funafuti is the capital of?",
        answer: "Tuvalu",
        options: [
            "Micronesia",
            "Solomon Islands",
            "Fiji",
            "Tuvalu"
        ]
    },
    {
        numb: 12,
        question: "Port Vila is the capital of?",
        answer: "Vanuatu",
        options: [
            "Timor-Leste",
            "Vanuatu",
            "Kiribati",
            "Palau"
        ]
    },
    {
        numb: 13,
        question: "Apia is the capital of?",
        answer: "Samoa",
        options: [
            "Marshall Islands",
            "Indonesia",
            "Samoa",
            "New Zealand"
        ]
    },
    {
        numb: 14,
        question: "Ngerulmud is the capital of?",
        answer: "Palau",
        options: [
            "Palau",
            "Canada",
            "Solomon Islands",
            "Tuvalu"
        ]
    },
    {
        numb: 15,
        question: "Dili is the capital of?",
        answer: "Timor-Leste",
        options: [
            "Netherlands",
            "Fiji",
            "Macedonia",
            "Timor-Leste"
        ]
    }
];

let data = [
    {
        number: 1,
        country: 'Australia',
        capital: 'Canberra',
        currency: 'Australian Dollar AU$ (AUD)',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Australia',
        flag: 'flags/oceania/australiaFlag.png',
        info: [
            'Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the' 
            + 'Australian continent, the island of Tasmania, and' 
            + 'numerous smaller islands. It is the largest country in' 
            + 'Oceania and the world\'s sixth-largest country by total area.',

            'Australia is globally famous for its natural wonders, wide-open spaces, beaches, deserts,'
            + '"The Bush", and "The Outback". Australia is one of the world\'s most highly urbanised countries;'
            + 'it\'s well known for its attractive mega cities such as Sydney, Melbourne, Brisbane, and Perth.'
        ]
    },
    {
        number: 2,
        country: 'Fiji',
        capital: 'Suva',
        currency: 'Fijian dollar  FJ$ (FJD)',
        language: 'Fijian, English, Fiji Hindi',
        link: 'https://en.wikipedia.org/wiki/Fiji',
        flag: 'flags/oceania/fijiFlag.png',
        info: [
            'Fiji, a country in the South Pacific. It\'s famed for rugged landscapes, palm-lined beaches and coral' 
            + 'reefs with clear lagoons. Its major islands, Viti Levu and Vanua Levu, contain most of the population.',

            'Fiji is known as the \'Soft Coral Capital of the World\', with the Great Astrolabe Reef surrounding its 333' 
            + 'islands and atolls, so an underwater adventure should be high on your to-do list when'
            + 'visiting Fiji. If you\'re a keen diver'
            + 'you can experience hundreds of different species of fish and coral.'
        ]
    },
    {
        number: 3,
        country: 'Kiribati',
        capital: 'Tarawa',
        currency: 'Australian Dollar AU$ (AUD)',
        language: 'English , Gilbertese',
        link: 'https://en.wikipedia.org/wiki/Kiribati',
        flag: 'flags/oceania/kiribatiFlag.png',
        info: [
            'Kiribati, officially the Republic of Kiribati, is an independent island nation in the central Pacific Ocean.' 
            + 'The permanent population is over 119,000,' 
            + 'more than half of whom live on Tarawa atoll.' 
            + 'The state comprises 32 atolls and one raised coral island, Banaba.',

            'Kiribati is most famous for its world class flyfishing, great scuba diving, and astounding seabird wildlife.'
            + 'There is currently only one airline with service to the most famous of the country\'s islands, Christmas Island'
            + '(Kiritimati).'
        ]
    },
    {
        number: 4,
        country: 'Marshall Islands',
        capital: 'Majuro',
        currency: 'United States dollar US$ (‎USD‎)‎',
        language: 'Marshallese, English',
        link: 'https://en.wikipedia.org/wiki/Marshall_Islands',
        flag: 'flags/oceania/marshallIslandsFlag.png',
        info: [
            'The Marshall Islands, officially the Republic of the Marshall Islands is an island country and'
            + 'an associated state of the United States near the Equator in the Pacific Ocean, slightly west' 
            + 'of the International Date Line.',

            'The Marshall Islands form a nation of scattered atolls and remote islands,' 
            + 'which are known for their marine life and diving opportunities. Many of the atolls are dotted with Flame' 
            + 'of the Forest, hibiscus and different-coloured plumeria flowers. There are also at least 160 species of'
            +  'coral surrounding the islands.'
        ]
    },
    {
        number: 5,
        country: 'Micronesia',
        capital: 'Palikir',
        currency: 'United States dollar US$ (‎USD‎)',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Micronesia',
        flag: 'flags/oceania/micronesiaFlag.png',
        info: [
            'Micronesia is a subregion of Oceania, comprising thousands of small islands in the western Pacific Ocean.'
            + 'It has a close shared cultural history with three other island regions—the Philippines to the west, '
            + 'Polynesia to the east, and Melanesia to the south—as well as with the wider community of Austronesian' 
            + ' peoples.',

            'Micronesian culture, the beliefs and practices of the indigenous peoples of the ethnogeographic group of '
            + 'Pacific Islands known as Micronesia.'
        ]
    },
    {
        number: 6,
        country: 'Nauru',
        capital: 'Yaren',
        currency: 'Australian Dollar AU$ (AUD)',
        language: 'Nauruan, English‎',
        link: 'https://en.wikipedia.org/wiki/Nauru',
        flag: 'flags/oceania/nauruFlag.png',
        info: [
            'Nauru officially the Republic of Nauru (Nauruan: Repubrikin Naoero) and formerly known as Pleasant Island, '
            +'is an island country and microstate in Oceania.',

            'It features a coral reef and white-sand beaches fringed with palms, including Anibare Bay on the east coast. '
            + 'I\'nland, tropical vegetation surrounds Buada Lagoon. The rocky outcrop of Command Ridge, the island\'s highest'
            + 'point, has a rusty Japanese outpost from WWII.'
        ]
    },
    {
        number: 7,
        country: 'New Zealand',
        capital: 'Wellington',
        currency: 'New Zealand dollar NZ$ (‎NZD‎)‎',
        language: 'English, Māori, NZ Sign Language',
        link: 'https://en.wikipedia.org/wiki/New_Zealand',
        flag: 'flags/oceania/newZealandFlag.png',
        info: [
            'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the '
            + 'North Island and the South Island —and more than 700 smaller islands, covering a total area of 268,021 '
            + 'square kilometres.',

            'New Zealand is famous for its national rugby team, its indigenous Maori culture and its picturesque landscape.'
        ]
    },
    {
        number: 8,
        country: 'Papua New Guinea',
        capital: 'Port Moresby',
        currency: 'Kina K (PGK)',
        language: 'English, Hiri Motu, PNG',
        link: 'https://en.wikipedia.org/wiki/Papua_New_Guinea',
        flag: 'flags/oceania/papuaNewGuineaFlag.png',
        info: [
            'Papua New Guinea, in the southwestern Pacific, encompasses the eastern half of New Guinea and its offshore islands.',

            ' A country of immense cultural and biological diversity, it’s known for its beaches and coral reefs. '
            + 'Inland are active volcanoes, granite Mt. Wilhelm, dense rainforest and hiking routes like the Kokoda Trail.'
            + ' There are also traditional tribal villages, many with their own languages.'
        ]
    },
    {
        number: 9,
        country: 'Solomon Islands',
        capital: 'Honiara',
        currency: 'Solomon Islands dollar SB$ (SBD)',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Solomon_Islands',
        flag: 'flags/oceania/solomonIslandsFlag.png',
        info: [
            'Solomon Islands is a sovereign state consisting of six major islands and over 900 smaller islands in Oceania.',

            'The Solomon Islands, a nation of hundreds of islands in the South Pacific, has many WWII-era sites. '
            + 'Guadalcanal, a province and one of the archipelago’s largest islands, honors fallen Allied soldiers at its '
            + 'U.S. War Memorial. Guadalcanal is also home to the nation’s capital, Honiara, whose bustling Central Market '
            + 'showcases the islands’ produce and traditional handicrafts.'
        ]
    },
    {
        number: 10,
        country: 'Tonga',
        capital: 'Nuku’alofa',
        currency: 'Paʻanga T$ (TOP)',
        language: 'English, Tongan',
        link: 'https://en.wikipedia.org/wiki/Tonga',
        flag: 'flags/oceania/tongaFlag.png',
        info: [
            'Tonga officially named the Kingdom of Tonga is a Polynesian country, and also an archipelago comprising 169 islands, of which 36 are inhabited.',

            'The main island, Tongatapu, is protected by lagoons and limestone cliffs. It’s home to the rural capital'
            + ' of Nuku\'alofa, as well as beach resorts, plantations and the Ha\'amonga ʻa Maui, a monumental coral gate '
            + 'from the 1200s.'
        ]
    },
    {
        number: 11,
        country: 'Tuvalu',
        capital: 'Funafuti',
        currency: 'Tuvaluan dollar, Australian dollar (AUD)',
        language: 'English, Tuvaluan',
        link: 'https://en.wikipedia.org/wiki/Tuvalu',
        flag: 'flags/oceania/tuvaluFlag.png',
        info: [
            'Tuvalu is an island country in the Polynesian subregion of Oceania in the Pacific Ocean. Its islands are '
            + 'situated about midway between Hawaii and Australia.',

            'Tuvalu, in the South Pacific, is an independent island nation within the British Commonwealth. '
            + 'Its 9 islands comprise small, thinly populated atolls and reef islands with palm-fringed beaches and '
            + 'WWII sites. Off Funafuti, the capital, the Funafuti Conservation Area offers calm waters for diving and '
            + 'snorkelling among sea turtles and tropical fish, plus several uninhabited islets sheltering sea birds.'
        ]
    },
    {
        number: 12,
        country: 'Vanuatu',
        capital: 'Port Vila',
        currency: 'Vatu (VUV)',
        language: 'Bislama, English, French',
        link: 'https://en.wikipedia.org/wiki/Vanuatu',
        flag: 'flags/oceania/vanuatuFlag.png',
        info: [
            'Vanuatu ,officially the Republic of Vanuatu), is an island country located in the South '
            +'Pacific Ocean.',

            'Vanuatu is a South Pacific Ocean nation made up of roughly 80 islands that stretch 1,300 kilometers. '
            + 'The islands offer scuba diving at coral reefs, underwater caverns and wrecks such as the WWII-era troopship SS '
            + 'President Coolidge. Harborside Port Vila, the nation’s capital and economic center, is on the island of Efate. '
            + 'The city is home to the Vanuatu National Museum, which explores the nation’s Melanesian culture.'
        ]
    },
    {
        number: 13,
        country: 'Samoa',
        capital: 'Apia',
        currency: 'Tālā WS$ (WST)',
        language: 'Samoan, English',
        link: 'https://en.wikipedia.org/wiki/Samoa',
        flag: 'flags/oceania/samoaFlag.png',
        info: [
            'Samoa, officially the Independent State of Samoa and until 1997 known as Western Samoa, is a Polynesian island country'
            + ' consisting of two main islands, two smaller, inhabited islands, and several smaller, uninhabited islands, including'
            + ' the Aleipata Islands.',

            'Samoa is an exotic destination with numerous attractions, both natural and cultural. The landscape of Samoa features '
            + 'volcanic islands, lava fields, tropical rainforests, long stretches of sandy beaches, waterfalls, mountains, caves, etc.'
        ]
    },
    {
        number: 14,
        country: 'Palau',
        capital: 'Ngerulmud',
        currency: 'United States Dollar US$ (USD)',
        language: 'Palauan, English',
        link: 'https://en.wikipedia.org/wiki/Palau',
        flag: 'flags/oceania/palauFlag.png',
        info: [
            'Palau, officially the Republic of Palau and historically Belau, Palaos or Pelew, is an island country in the western Pacific.',

            'The nation has approximately 340 islands and connects the western chain of the Caroline Islands with parts of the Federated '
            + 'States of Micronesia. It has a total area of 466 square kilometers (180 square miles).'
        ]
    },
    {
        number: 15,
        country: 'Timor-Leste',
        capital: 'Dili',
        currency: 'United States Dollar $ (USD)',
        language: ' Tetum, Portuguese',
        link: 'https://en.wikipedia.org/wiki/East_Timor',
        flag: 'flags/oceania/timorLesteFlag.png',
        info: [
            'Timor is an island at the southern end of Maritime Southeast Asia, in the north of the Timor Sea. The island is divided '
            + 'between the sovereign states of East Timor on the eastern part and Indonesia on the western part.',

            'Timor-Leste is known for Diving, whale-watching, trekking, biking, great scenery, stunning mountain driving and beautiful white-sand beaches.'
        ]
    },
];