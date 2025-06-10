document.addEventListener('DOMContentLoaded', () => {
    // DRINKDATA - HÄR LÄGGER DU IN ALLA DINA DRINKAR!
    // Byt ut bild-URL:erna till riktiga bilder du laddar upp i en "images"-mapp eller via en bildtjänst.
    const drinks = [
        // VODKA
        {
            id: 'moscow-mule',
            name: 'Moscow Mule',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1596465492429-c88746c07629?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['vodka'],
            fullIngredients: ['60 ml Vodka', '120 ml Ginger Beer', '15 ml Färsk limejuice'],
            garnish: 'Limeklyfta, myntakvist (valfritt)',
            time: '3 min',
            description: 'En uppfriskande och kryddig drink med en skarp smak av ingefära och syrlighet från lime, perfekt för en varm dag.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Asiatisk mat, snacks, grillat'
            },
            instructions: [
                'Fyll en kopparmugg eller highballglas med is.',
                'Häll i vodka och limejuice.',
                'Fyll på med ginger beer.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta och en myntakvist om så önskas.'
            ]
        },
        {
            id: 'cosmopolitan',
            name: 'Cosmopolitan',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1510626176921-d7cd79075e7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['vodka'], // Normalt med Cointreau/likör, men vodka är huvudingrediens
            fullIngredients: ['45 ml Citronvodka', '25 ml Cointreau (eller annan apelsinlikör)', '25 ml Tranbärsjuice', '10 ml Färsk limejuice'],
            garnish: 'Apelsinzest eller limeklyfta',
            time: '4 min',
            description: 'En elegant och fruktig drink med en balanserad sötma och syrlighet, känd för sin vackra röda färg.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Festliga tillfällen, mingel, före middagen'
            },
            instructions: [
                'Kyl ett cocktailglas (martiniglas).',
                'Fyll en shaker med is.',
                'Häll i citronvodka, Cointreau, tranbärsjuice och limejuice i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda cocktailglaset.',
                'Garnera med en apelsinzest eller limeklyfta.'
            ]
        },
        {
            id: 'vodka-martini',
            name: 'Vodka Martini',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1598462002322-a72266b3f7f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['vodka'],
            fullIngredients: ['60 ml Vodka', '10 ml Torr Vermouth'],
            garnish: 'Oliver eller citrontwist',
            time: '2 min',
            description: 'En sofistikerad och ren drink, där vodkans karaktär står i centrum med en subtil hint av vermouth.',
            profile: {
                sweetness: 'Torr',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Aperitif, eleganta middagar, sällskap'
            },
            instructions: [
                'Kyl ett martiniglas.',
                'Fyll en mixer med is.',
                'Häll i vodka och torr vermouth.',
                'Rör om väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda martiniglaset.',
                'Garnera med oliver eller en citrontwist.'
            ]
        },
        {
            id: 'bloody-mary',
            name: 'Bloody Mary',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['vodka'],
            fullIngredients: ['45 ml Vodka', '90 ml Tomatjuice', '15 ml Färsk citronjuice', 'Worcestershiresås (några stänk)', 'Tabasco (några stänk)', 'Salt och Svartpeppar (efter smak)'],
            garnish: 'Selleristjälk, citronklyfta, oliver',
            time: '5 min',
            description: 'En fyllig och kryddig drink, ofta serverad som brunchdrink. Smakrik med umami, hetta och syrlighet.',
            profile: {
                sweetness: 'Låg',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Brunch, baksmälla, kryddstark mat'
            },
            instructions: [
                'Fukta kanten på ett highballglas med citron och doppa i sellerisalt (valfritt).',
                'Fyll glaset med is.',
                'Häll i vodka, tomatjuice, citronjuice, Worcestershiresås, Tabasco, salt och peppar i glaset.',
                'Rör om väl tills ingredienserna är blandade och drinken är kyld.',
                'Garnera med en selleristjälk, citronklyfta och oliver.'
            ]
        },
        {
            id: 'screwdriver',
            name: 'Screwdriver',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1627914436577-628d002f23b2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['vodka'],
            fullIngredients: ['60 ml Vodka', '120 ml Apelsinjuice'],
            garnish: 'Apelsinskiva',
            time: '2 min',
            description: 'En enkel och fruktig drink, söt och uppfriskande. En klassisk brunchdrink som är lätt att blanda.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, frukost, enkel att dricka'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i vodka.',
                'Fyll på med apelsinjuice.',
                'Rör om försiktigt.',
                'Garnera med en apelsinskiva.'
            ]
        },
        {
            id: 'white-russian',
            name: 'White Russian',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['vodka'], // Inkluderar kaffelikör (Kahlúa) som "likör"
            fullIngredients: ['60 ml Vodka', '30 ml Kaffelikör (t.ex. Kahlúa)', '30 ml Grädde eller Mjölk'],
            garnish: 'Ingen (eller kaffebönor)',
            time: '3 min',
            description: 'En krämig och söt drink med smak av kaffe och vodka. En dessertliknande drink som är mjuk i smaken.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Ingen',
                bitterness: 'Låg (från kaffe)',
                pairsWith: 'Efter middagen, mysiga kvällar, dessert'
            },
            instructions: [
                'Fyll ett rocksglas med is.',
                'Häll i vodka och kaffelikör.',
                'Toppa med grädde eller mjölk och rör försiktigt så att den lägger sig som ett moln ovanpå (eller blanda allt).',
                'Servera direkt.'
            ]
        },
        {
            id: 'espresso-martini',
            name: 'Espresso Martini',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild som Bloody Mary, byt gärna!
            ingredients: ['vodka'],
            fullIngredients: ['50 ml Vodka', '30 ml Kaffelikör', '30 ml Kall espresso', '10 ml Sockerlag (valfritt)'],
            garnish: 'Tre kaffebönor',
            time: '5 min',
            description: 'En stimulerande drink med en rik kaffesmak och en touch av sötma, balanserad med vodka. Perfekt för en energikick.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Medel (från espresso)',
                pairsWith: 'Efter middagen, fest, när du behöver vakna till'
            },
            instructions: [
                'Kyl ett cocktailglas.',
                'Fyll en shaker med is.',
                'Häll i vodka, kaffelikör, kall espresso och sockerlag i shakern.',
                'Skaka mycket väl (minst 15-20 sekunder) tills drinken är väl kyld och ett fint skum bildats.',
                'Sila ner i det kylda cocktailglaset.',
                'Garnera med tre kaffebönor.'
            ]
        },
        {
            id: 'cape-codder',
            name: 'Cape Codder',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1592039209590-7f2832a829f7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Bild på tranbärsdrink
            ingredients: ['vodka'],
            fullIngredients: ['60 ml Vodka', '120 ml Tranbärsjuice', 'Limeklyfta'],
            garnish: 'Limeklyfta',
            time: '2 min',
            description: 'En enkel och uppfriskande drink med en syrlig och lite bitter smak från tranbärsjuicen, balanserad med vodka.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Enkel att dricka, mingel, sommar'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i vodka.',
                'Fyll på med tranbärsjuice.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'sex-on-the-beach',
            name: 'Sex on the Beach',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Används för Moscow Mule också
            ingredients: ['vodka'],
            fullIngredients: ['40 ml Vodka', '20 ml Persikolikör', '40 ml Tranbärsjuice', '40 ml Apelsinjuice'],
            garnish: 'Apelsinskiva och/eller körsbär',
            time: '4 min',
            description: 'En söt och fruktig drink med en mix av persika, tranbär och apelsin. Perfekt för den som gillar söta och enkla smaker.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Stranden, fester, dessert'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i vodka, persikolikör, tranbärsjuice och apelsinjuice.',
                'Rör om försiktigt.',
                'Garnera med en apelsinskiva och/eller ett körsbär.'
            ]
        },
        {
            id: 'godmother',
            name: 'Godmother',
            category: 'vodka',
            image: 'https://images.unsplash.com/photo-1550974955-e41c4f52f36f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Enkel vodkadrink
            ingredients: ['vodka'],
            fullIngredients: ['45 ml Vodka', '30 ml Amaretto'],
            garnish: 'Ingen (valfritt: citrontwist)',
            time: '2 min',
            description: 'En enkel men elegant drink med en söt och nötig smak från Amaretton, balanserad med vodkans renhet.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Efter middagen, dessert, lugna kvällar'
            },
            instructions: [
                'Fyll ett rocksglas med is.',
                'Häll i vodka och Amaretto.',
                'Rör om försiktigt tills drinken är väl kyld.',
                'Servera direkt.'
            ]
        },

        // TEQUILA
        {
            id: 'margarita',
            name: 'Margarita',
            category: 'tequila',
            image: 'https://images.unsplash.com/photo-1556679343-a6119777592c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['tequila'],
            fullIngredients: ['50 ml Tequila Blanco', '25 ml Cointreau/Triple Sec', '25 ml Färsk limejuice'],
            garnish: 'Saltkant på glaset, limehjul',
            time: '5 min',
            description: 'En syrlig och uppfriskande klassiker med en distinkt smak av tequila, balanserad med sötma från likören och syra från lime. Perfekt balanserad!',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Låg',
                pairsWith: 'Mexikansk mat, fest, varma kvällar'
            },
            instructions: [
                'Fukta kanten på ett margaritaglas eller cocktailglas med en limeklyfta och doppa i salt.',
                'Fyll en shaker med is.',
                'Tillsätt tequila, Cointreau/Triple Sec och limejuice i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i det förberedda glaset.',
                'Garnera med en limeklyfta eller ett limehjul.'
            ]
        },
        {
            id: 'paloma',
            name: 'Paloma',
            category: 'tequila',
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['tequila', 'bubbel'], // för Grapefruit soda
            fullIngredients: ['60 ml Tequila Blanco', '10 ml Färsk limejuice', 'Fyll upp med Grapefruit soda (t.ex. Jarritos Grapefruit)'],
            garnish: 'Limeklyfta',
            time: '3 min',
            description: 'Mexikos inofficiella nationaldrink! En lätt, syrlig och uppfriskande drink med en subtil bitterhet från grapefrukten.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Medel',
                bitterness: 'Medel',
                pairsWith: 'Taco-kväll, sommarfester, aperitif'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i tequila och limejuice.',
                'Fyll på med grapefruit soda.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'tequila-sunrise',
            name: 'Tequila Sunrise',
            category: 'tequila',
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Bloody Mary, byt!
            ingredients: ['tequila'],
            fullIngredients: ['60 ml Tequila Blanco', '120 ml Apelsinjuice', '15 ml Grenadine'],
            garnish: 'Apelsinskiva, körsbär',
            time: '4 min',
            description: 'En visuell vacker drink som efterliknar en soluppgång, med en söt och fruktig smak av apelsin och en hint av tequila.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, fester, när du vill ha något sött'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i tequila och apelsinjuice.',
                'Häll försiktigt i grenadinen längs glasets insida så att den sjunker till botten och skapar en "soluppgångs"-effekt.',
                'Rör inte om.',
                'Garnera med en apelsinskiva och ett körsbär.'
            ]
        },
        {
            id: 'mexican-mule',
            name: 'Mexican Mule',
            category: 'tequila',
            image: 'https://images.unsplash.com/photo-1596465492429-c88746c07629?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Moscow Mule, byt!
            ingredients: ['tequila'],
            fullIngredients: ['60 ml Tequila Blanco', '120 ml Ginger Beer', '15 ml Färsk limejuice'],
            garnish: 'Limeklyfta',
            time: '3 min',
            description: 'En tequila-twist på klassisk mule, med en kryddig och uppfriskande smak från ingefära och syrlighet från lime.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Taco-kväll, sommarfester'
            },
            instructions: [
                'Fyll en kopparmugg eller highballglas med is.',
                'Häll i tequila och limejuice.',
                'Fyll på med ginger beer.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'juan-collins',
            name: 'Juan Collins',
            category: 'tequila',
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Bild på Tom Collins, byt!
            ingredients: ['tequila', 'bubbel'], // för sodavatten
            fullIngredients: ['60 ml Tequila Blanco', '30 ml Färsk citronjuice', '20 ml Sockerlag', 'Fyll upp med Sodavatten'],
            garnish: 'Citronskiva, körsbär',
            time: '4 min',
            description: 'En uppfriskande drink med tequila som bas, syrlig från citron och söt från sockerlag, toppad med bubbel.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Ingen',
                pairsWith: 'Sommarfester, BBQ, eftermiddagsdrink'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i tequila, citronjuice och sockerlag.',
                'Rör om väl.',
                'Fyll upp med sodavatten.',
                'Garnera med en citronskiva och ett körsbär.'
            ]
        },
        // WHISKY
        {
            id: 'old-fashioned',
            name: 'Old Fashioned',
            category: 'whiskey',
            image: 'https://images.unsplash.com/photo-1616086705574-884c6efd996d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['whiskey'],
            fullIngredients: ['60 ml Bourbon eller Rågwhiskey', '1 sockerbit (eller 5 ml sockerlag)', '2-3 stänk Angostura Bitter', 'En skvätt vatten (valfritt)'],
            garnish: 'Apelsinzest',
            time: '4 min',
            description: 'En klassisk och robust drink med en djup smak av whiskey, balanserad med sötma och en hint av bitterhet. En sofistikerad drink för finsmakaren.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Ingen',
                bitterness: 'Medel',
                pairsWith: 'Efter middagen, goda samtal, mysiga kvällar'
            },
            instructions: [
                'Lägg sockerbiten i ett rocksglas. Tillsätt bitter och en liten skvätt vatten (eller sockerlag direkt).',
                'Muddla sockerbiten tills den lösts upp (om du använder sockerbit).',
                'Fyll glaset med en stor isbit eller flera mindre.',
                'Häll i whiskey.',
                'Rör om ordentligt (ca 30 sekunder) tills drinken är väl kyld och utspädd.',
                'Tvista en apelsinzest över drinken och släpp ner den.'
            ]
        },
        {
            id: 'whiskey-sour',
            name: 'Whiskey Sour',
            category: 'whiskey',
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Bloody Mary, byt!
            ingredients: ['whiskey'],
            fullIngredients: ['60 ml Bourbon eller Rågwhiskey', '30 ml Färsk citronjuice', '20 ml Sockerlag', 'Äggvita (valfritt, för skum)'],
            garnish: 'Apelsinzest, körsbär',
            time: '5 min',
            description: 'En syrlig och uppfriskande drink med en balanserad sötma. Om äggvita används får den ett vackert skum och en mjukare konsistens.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Låg',
                pairsWith: 'Före middagen, sociala tillfällen'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i whiskey, citronjuice, sockerlag och äggvita (om du använder det).',
                'Skaka först utan is (dry shake) om du använder äggvita, i ca 15 sekunder.',
                'Lägg sedan till is och skaka igen tills drinken är ordentligt kyld.',
                'Sila ner i ett rocksglas med ny is.',
                'Garnera med en apelsinzest och ett körsbär.'
            ]
        },
        {
            id: 'manhattan',
            name: 'Manhattan',
            category: 'whiskey',
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som White Russian, byt!
            ingredients: ['whiskey'],
            fullIngredients: ['60 ml Rågwhiskey eller Bourbon', '20 ml Söt Vermouth', '2 stänk Angostura Bitter'],
            garnish: 'Körsbär',
            time: '3 min',
            description: 'En klassisk och kraftfull drink med en rik, söt och kryddig smak av whiskey och vermouth. En sofistikerad och värmande dryck.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Ingen',
                bitterness: 'Medel',
                pairsWith: 'Efter middagen, eleganta tillställningar, kalla kvällar'
            },
            instructions: [
                'Kyl ett martiniglas eller coupetteglas.',
                'Fyll en mixer med is.',
                'Häll i whiskey, söt vermouth och Angostura Bitter.',
                'Rör om väl tills drinken är ordentligt kyld (ca 30 sekunder).',
                'Sila ner i det kylda glaset.',
                'Garnera med ett körsbär.'
            ]
        },
        {
            id: 'mint-julep',
            name: 'Mint Julep',
            category: 'whiskey',
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Paloma, byt!
            ingredients: ['whiskey'],
            fullIngredients: ['60 ml Bourbon', '10-12 myntablad', '10 ml Sockerlag'],
            garnish: 'Myntakvist',
            time: '5 min',
            description: 'En uppfriskande och aromatisk drink med en stark smak av mynta och bourbon, perfekt för varma dagar. Serveras traditionellt i en kopparmugg.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Sommarfester, Derby-fester, BBQ'
            },
            instructions: [
                'Lägg myntabladen och sockerlagen i botten av en julep-mugg eller rocksglas.',
                'Muddla försiktigt myntan för att frigöra dess oljor (inte mosa!).',
                'Fyll glaset med krossad is.',
                'Häll i bourbon.',
                'Rör om väl tills glaset blir frostigt på utsidan.',
                'Fyll på med mer krossad is om det behövs och garnera generöst med en myntakvist.'
            ]
        },
        {
            id: 'whisky-highball',
            name: 'Whisky Highball',
            category: 'whiskey',
            image: 'https://images.unsplash.com/photo-1632128795123-5e9330a1122a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Högt glas, bra för highball
            ingredients: ['whiskey', 'bubbel'], // för sodavatten/tonic
            fullIngredients: ['60 ml Valfri Whisky', '120 ml Sodavatten eller Tonic Water', 'Citronskiva (valfritt)'],
            garnish: 'Citronskiva',
            time: '2 min',
            description: 'En enkel och uppfriskande drink som låter whiskyns karaktär komma fram, med en lätt kolsyrad känsla. Mycket populär i Japan.',
            profile: {
                sweetness: 'Låg',
                sourness: 'Låg (om citron används)',
                bitterness: 'Låg (om tonic används)',
                pairsWith: 'Enkel att dricka, avslappnade tillfällen, mat'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i whisky.',
                'Fyll på med sodavatten eller tonic water.',
                'Rör om försiktigt en gång.',
                'Garnera med en citronskiva.'
            ]
        },
        // ROM
        {
            id: 'mojito',
            name: 'Mojito',
            category: 'rom',
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['rom', 'bubbel'], // för sodavatten
            fullIngredients: ['60 ml Vit Rom', '25 ml Färsk limejuice', '2 tsk Socker', '8-10 Myntablad', 'Fyll upp med Sodavatten'],
            garnish: 'Myntakvist, limeklyfta',
            time: '7 min',
            description: 'En svalkande och aromatisk drink med en frisk smak av mynta och lime, sötma från socker och en mjuk touch av rom. Perfekt för varma dagar.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Ingen',
                pairsWith: 'Sommarfester, lättare rätter, stranden'
            },
            instructions: [
                'Lägg myntablad och socker i ett highballglas.',
                'Pressa i limejuice och muddla (tryck försiktigt) myntan för att frigöra smakerna.',
                'Fyll glaset med krossad is.',
                'Häll i rom.',
                'Toppa med sodavatten.',
                'Rör om försiktigt.',
                'Garnera med en myntakvist och en limeklyfta.'
            ]
        },
        {
            id: 'daiquiri',
            name: 'Daiquiri',
            category: 'rom',
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['rom'],
            fullIngredients: ['60 ml Vit Rom', '30 ml Färsk limejuice', '20 ml Sockerlag'],
            garnish: 'Limehjul',
            time: '4 min',
            description: 'En perfekt balanserad klassiker: syrlig, söt och stark. En enkel och uppfriskande romdrink.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Ingen',
                pairsWith: 'Sommar, fest, före middagen'
            },
            instructions: [
                'Kyl ett cocktailglas.',
                'Fyll en shaker med is.',
                'Häll i rom, limejuice och sockerlag i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda glaset.',
                'Garnera med ett limehjul.'
            ]
        },
        {
            id: 'pina-colada',
            name: 'Pina Colada',
            category: 'rom',
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['rom'],
            fullIngredients: ['60 ml Ljus Rom', '90 ml Ananasjuice', '30 ml Kokosgrädde'],
            garnish: 'Ananasklyfta, körsbär',
            time: '5 min',
            description: 'En krämig och tropisk drink med söta smaker av ananas och kokos, perfekt för en känsla av semester.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Stranden, semester, dessert'
            },
            instructions: [
                'Blanda alla ingredienser med is i en blender tills den är slät och krämig.',
                'Häll upp i ett hurricane-glas eller stort glas.',
                'Garnera med en ananasklyfta och ett körsbär.'
            ]
        },
        {
            id: 'cuba-libre',
            name: 'Cuba Libre',
            category: 'rom',
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['rom'],
            fullIngredients: ['60 ml Rom (vit eller mörk)', '120 ml Coca-Cola', '15 ml Färsk limejuice'],
            garnish: 'Limeklyfta',
            time: '2 min',
            description: 'En enkel och populär drink med en balanserad sötma från colan och syrlighet från lime, med rom som bas.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Fester, grillkvällar, en avslappnad drink'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i rom och limejuice.',
                'Fyll på med Coca-Cola.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'dark-n-stormy',
            name: 'Dark \'n\' Stormy',
            category: 'rom',
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['rom'],
            fullIngredients: ['60 ml Mörk Rom (helst Gosling\'s Black Seal)', '120 ml Ginger Beer', 'Limeklyfta'],
            garnish: 'Limeklyfta',
            time: '3 min',
            description: 'En kryddig och uppfriskande drink med en stark smak av ingefära och den distinkta karaktären hos mörk rom. Serveras ofta i ett högt glas.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Medel',
                pairsWith: 'Sommar, kryddstark mat, avkoppling'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i ginger beer.',
                'Toppa med den mörka romen genom att försiktigt hälla den över en sked så att den flyter ovanpå ginger beer.',
                'Garnera med en limeklyfta.'
            ]
        },
        // GIN
        {
            id: 'gin-tonic',
            name: 'Gin & Tonic',
            category: 'gin',
            image: 'https://images.unsplash.com/photo-1588636184852-5264b381ec37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['gin', 'bubbel'], // för tonic
            fullIngredients: ['60 ml Gin', '120 ml Tonic Water', 'Färsk limeklyfta eller gurkskiva'],
            garnish: 'Limeklyfta eller gurkskiva',
            time: '3 min',
            description: 'En tidlös klassiker med en balanserad smak av enbär från ginen och bitterljuva toner från tonicen. Kan varieras i oändlighet med olika gin- och tonicmärken.',
            profile: {
                sweetness: 'Medel (från tonicen)',
                sourness: 'Låg (från lime/garnityr)',
                bitterness: 'Medel (från tonicen)',
                pairsWith: 'Aperitif, grillkvällar, sociala tillställningar'
            },
            instructions: [
                'Fyll ett stort glas (helst en copa-glas) med is.',
                'Häll i gin.',
                'Fyll på med tonic water.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta eller gurkskiva.'
            ]
        },
        {
            id: 'negroni',
            name: 'Negroni',
            category: 'gin',
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['gin'], // Kräver även Campari och Söt Vermouth
            fullIngredients: ['30 ml Gin', '30 ml Campari', '30 ml Söt Vermouth'],
            garnish: 'Apelsinskiva',
            time: '3 min',
            description: 'En balanserad bitterljuv klassiker med en komplex smakprofil. Perfekt som aperitif.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Ingen',
                bitterness: 'Hög',
                pairsWith: 'Aperitif, italiensk mat, före middagen'
            },
            instructions: [
                'Fyll ett rocksglas med is.',
                'Häll i gin, Campari och söt vermouth.',
                'Rör om väl tills drinken är ordentligt kyld.',
                'Garnera med en apelsinskiva.'
            ]
        },
        {
            id: 'tom-collins',
            name: 'Tom Collins',
            category: 'gin',
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['gin', 'bubbel'], // för sodavatten
            fullIngredients: ['60 ml Gin', '30 ml Färsk citronjuice', '20 ml Sockerlag', 'Fyll upp med Sodavatten'],
            garnish: 'Citronskiva, körsbär',
            time: '4 min',
            description: 'En uppfriskande och syrlig drink med en lätt sötma och kolsyrad känsla. Perfekt för en varm dag.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Ingen',
                pairsWith: 'Sommarfester, BBQ, eftermiddagsdrink'
            },
            instructions: [
                'Fyll ett collinsglas (högt glas) med is.',
                'Häll i gin, citronjuice och sockerlag.',
                'Rör om väl.',
                'Fyll upp med sodavatten.',
                'Garnera med en citronskiva och ett körsbär.'
            ]
        },
        {
            id: 'dry-martini',
            name: 'Dry Martini',
            category: 'gin',
            image: 'https://images.unsplash.com/photo-1598462002322-a72266b3f7f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['gin'],
            fullIngredients: ['60 ml Gin', '10 ml Torr Vermouth'],
            garnish: 'Oliver eller citrontwist',
            time: '2 min',
            description: 'En klassisk och sofistikerad drink, där ginen är stjärnan med en subtil nyans av vermouth. Elegant och torr.',
            profile: {
                sweetness: 'Torr',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Aperitif, eleganta middagar, sällskap'
            },
            instructions: [
                'Kyl ett martiniglas.',
                'Fyll en mixer med is.',
                'Häll i gin och torr vermouth.',
                'Rör om väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda martiniglaset.',
                'Garnera med oliver eller en citrontwist.'
            ]
        },
        {
            id: 'gimlet',
            name: 'Gimlet',
            category: 'gin',
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['gin'],
            fullIngredients: ['60 ml Gin', '30 ml Färsk limejuice', '15 ml Sockerlag'],
            garnish: 'Limehjul',
            time: '4 min',
            description: 'En frisk och syrlig drink som balanserar ginens botaniska smaker med lime och sötma. En uppfriskande klassiker.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Låg',
                pairsWith: 'Sommar, lättare maträtter, före middagen'
            },
            instructions: [
                'Kyl ett cocktailglas.',
                'Fyll en shaker med is.',
                'Häll i gin, limejuice och sockerlag i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda glaset.',
                'Garnera med ett limehjul.'
            ]
        },
        // BUBBEL
        {
            id: 'mimosa',
            name: 'Mimosa',
            category: 'bubbel',
            image: 'https://images.unsplash.com/photo-1519782977469-c09a3411b026?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['bubbel'],
            fullIngredients: ['75 ml Kallt Mousserande Vin (Prosecco, Cava)', '75 ml Färsk Apelsinjuice'],
            garnish: 'Apelsinskiva (valfritt)',
            time: '2 min',
            description: 'En enkel och elegant brunchdrink. Lätt, bubblig och fruktig med en perfekt balans mellan det torra mousserande vinet och den söta apelsinjuicen.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, frukost, festliga morgnar'
            },
            instructions: [
                'Häll apelsinjuice i ett champagneglas (flöjtglas).',
                'Fyll försiktigt upp med kallt mousserande vin.',
                'Rör om försiktigt en gång.',
                'Garnera med en apelsinskiva om så önskas.'
            ]
        },
        {
            id: 'bellini',
            name: 'Bellini',
            category: 'bubbel',
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['bubbel'],
            fullIngredients: ['75 ml Kallt Mousserande Vin (Prosecco)', '75 ml Persikopuré'],
            garnish: 'Persikaskiva (valfritt)',
            time: '3 min',
            description: 'En söt och fruktig drink med en mjuk persikosmak, balanserad med mousserande vin. Perfekt för brunch eller en festlig aperitif.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, fest, aperitif'
            },
            instructions: [
                'Häll persikopuré i ett champagneglas.',
                'Fyll försiktigt upp med kallt mousserande vin.',
                'Rör om försiktigt en gång.',
                'Garnera med en persikaskiva om så önskas.'
            ]
        },
        {
            id: 'kir-royale',
            name: 'Kir Royale',
            category: 'bubbel',
            image: 'https://images.unsplash.com/photo-1588636184852-5264b381ec37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['bubbel'],
            fullIngredients: ['10 ml Crème de Cassis', '120 ml Mousserande Vin (Champagne eller Crémant)'],
            garnish: 'Hallon eller björnbär',
            time: '2 min',
            description: 'En elegant och söt drink med en djup bärsmak från likören, toppad med bubblor. En fransk klassiker.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Aperitif, festliga tillfällen, dessert'
            },
            instructions: [
                'Häll Crème de Cassis i ett champagneglas.',
                'Fyll försiktigt upp med kallt mousserande vin.',
                'Rör om försiktigt en gång.',
                'Garnera med hallon eller björnbär.'
            ]
        },
        {
            id: 'champagne-cocktail',
            name: 'Champagne Cocktail',
            category: 'bubbel',
            image: 'https://images.unsplash.com/photo-1519782977469-c09a3411b026?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['bubbel'],
            fullIngredients: ['1 sockerbit', '2-3 stänk Angostura Bitter', '15 ml Cognac eller Brandy (valfritt)', 'Fyll upp med Mousserande Vin'],
            garnish: 'Apelsinzest, körsbär',
            time: '3 min',
            description: 'En klassisk och elegant drink med en balans av sötma, bitterhet och bubblor. En festlig drink med anor.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Ingen',
                bitterness: 'Medel',
                pairsWith: 'Fest, nyår, speciella tillfällen'
            },
            instructions: [
                'Lägg sockerbiten i botten av ett champagneglas.',
                'Droppa Angostura Bitter över sockerbiten.',
                'Om du använder cognac, häll i den.',
                'Fyll försiktigt upp glaset med kallt mousserande vin.',
                'Rör om försiktigt en gång.',
                'Garnera med en apelsinzest och ett körsbär.'
            ]
        },
        {
            id: 'aperol-spritz',
            name: 'Aperol Spritz',
            category: 'bubbel',
            image: 'https://images.unsplash.com/photo-1551042171-881c19b06822?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ingredients: ['bubbel'],
            fullIngredients: ['60 ml Aperol', '90 ml Prosecco', '30 ml Sodavatten'],
            garnish: 'Apelsinskiva',
            time: '3 min',
            description: 'En populär italiensk aperitif, fräsch och bitterljuv med en vacker orange färg. Perfekt att njuta av på en solig terrass.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Medel-Hög',
                pairsWith: 'Aperitif, sommar, italiensk mat'
            },
            instructions: [
                'Fyll ett stort vinglas med mycket is.',
                'Häll i Prosecco, sedan Aperol.',
                'Fyll på med sodavatten.',
                'Rör om försiktigt.',
                'Garnera med en apelsinskiva.'
            ]
        },
        // BLANDADE SPRITSORTER (Drinkar som kräver flera av de valda sorterna)
        {
            id: 'long-island-iced-tea',
            name: 'Long Island Iced Tea',
            category: 'blandade',
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['vodka', 'rom', 'gin', 'tequila', 'likor'], // Inkluderar likör för Triple Sec
            fullIngredients: [
                '15 ml Vodka', '15 ml Vit Rom', '15 ml Gin', '15 ml Tequila Blanco', '15 ml Triple Sec',
                '25 ml Färsk citronjuice', '30 ml Sockerlag', 'Toppa med Coca-Cola'
            ],
            garnish: 'Citronklyfta',
            time: '5 min',
            description: 'En potent men förvånansvärt god drink som trots namnet inte innehåller något te. En komplex mix av sprit och syra, maskerad av cola.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Medel',
                bitterness: 'Låg (från cola)',
                pairsWith: 'Fester, när du vill ha något starkt men gott'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i vodka, rom, gin, tequila, Triple Sec, citronjuice och sockerlag i glaset.',
                'Rör om väl för att blanda ingredienserna.',
                'Fyll upp glaset med Coca-Cola.',
                'Garnera med en citronklyfta.'
            ]
        },
        {
            id: 'french-75',
            name: 'French 75',
            category: 'blandade', // Kan vara Gin-baserad, men kräver Bubbel
            image: 'https://images.unsplash.com/photo-1519782977469-c09a3411b026?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma bild, byt!
            ingredients: ['gin', 'bubbel'],
            fullIngredients: ['30 ml Gin', '15 ml Färsk citronjuice', '15 ml Sockerlag', 'Fyll upp med Mousserande Vin'],
            garnish: 'Citron twist',
            time: '4 min',
            description: 'En uppfriskande och elegant drink med en balanserad syrlighet och sötma, toppad med bubblor. Känd för sin friska och festliga karaktär.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, festliga tillfällen, aperitif'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i gin, citronjuice och sockerlag i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett champagneglas (flöjtglas).',
                'Fyll upp med mousserande vin.',
                'Garnera med en citron twist.'
            ]
        }
        // Lägg till fler drinkar här enligt samma format!
    ];

    // Kolla vilken sida vi är på och kör rätt funktion
    if (document.body.id === 'home-page') {
        handleHomePage();
    } else if (document.body.id === 'drink-detail-page') {
        handleDrinkDetailPage();
    }

    function handleHomePage() {
        const getSuggestionsBtn = document.getElementById('getSuggestionsBtn');
        const suggestionsArea = document.getElementById('suggestionsArea');
        const drinkSuggestionsGrid = document.getElementById('drinkSuggestionsGrid');
        const noSuggestionsMessage = document.getElementById('noSuggestionsMessage');

        getSuggestionsBtn.addEventListener('click', () => {
            const selectedAlcohols = Array.from(document.querySelectorAll('.alcohol-options input[type="checkbox"]:checked'))
                                         .map(checkbox => checkbox.value);

            drinkSuggestionsGrid.innerHTML = ''; // Rensa tidigare förslag
            noSuggestionsMessage.classList.add('hidden'); // Dölj meddelandet om inga förslag
            suggestionsArea.classList.add('hidden'); // Dölj förslagområdet initialt

            let matchingDrinks = [];

            // Lägg till drinkar baserat på vald kategori
            selectedAlcohols.forEach(alcohol => {
                const categoryDrinks = drinks.filter(drink =>
                    drink.category === alcohol &&
                    !matchingDrinks.some(md => md.id === drink.id) // Undvik dubletter
                );
                matchingDrinks = matchingDrinks.concat(categoryDrinks);
            });

            // Hantera "Blandade Spritsorter" om de ingår i valda kategorier
            // För varje blandad drink, kontrollera om alla dess 'ingredients' finns bland 'selectedAlcohols'
            const mixedCategoryDrinks = drinks.filter(drink => drink.category === 'blandade');
            mixedCategoryDrinks.forEach(mixedDrink => {
                const hasAllIngredients = mixedDrink.ingredients.every(ingredient => selectedAlcohols.includes(ingredient));
                if (hasAllIngredients && !matchingDrinks.some(md => md.id === mixedDrink.id)) {
                    matchingDrinks.push(mixedDrink);
                }
            });


            if (matchingDrinks.length > 0) {
                // Sortera drinkarna så att de visas i en logisk ordning, t.ex. efter namn eller kategori
                matchingDrinks.sort((a, b) => a.name.localeCompare(b.name));

                matchingDrinks.forEach(drink => {
                    const drinkLink = document.createElement('a');
                    drinkLink.href = `drink.html?id=${drink.id}`; // Länk till den nya sidan med ID
                    drinkLink.classList.add('drink-card');

                    drinkLink.innerHTML = `
                        <img src="${drink.image}" alt="${drink.name}">
                        <div class="drink-card-content">
                            <h3>${drink.name}</h3>
                            <p>${drink.description.split('. ')[0]}.</p> <div class="card-footer">
                                <span>🕒 ${drink.time}</span>
                                <span>✨ ${drink.garnish.split(',')[0]}</span>
                            </div>
                        </div>
                    `;
                    drinkSuggestionsGrid.appendChild(drinkLink);
                });
                suggestionsArea.classList.remove('hidden'); // Visa förslagområdet
            } else {
                noSuggestionsMessage.classList.remove('hidden'); // Visa meddelandet om inga förslag
                suggestionsArea.classList.remove('hidden'); // Visa förslagområdet även om tomt
            }
        });
    }

    function handleDrinkDetailPage() {
        // Hämta drink-ID från URL-parametern
        const urlParams = new URLSearchParams(window.location.search);
        const drinkId = urlParams.get('id');

        if (drinkId) {
            const selectedDrink = drinks.find(drink => drink.id === drinkId);

            if (selectedDrink) {
                // Fyll i detaljer på den nya sidan
                document.getElementById('drinkPageTitle').textContent = selectedDrink.name;
                document.getElementById('detailDrinkImage').src = selectedDrink.image;
                document.getElementById('detailDrinkImage').alt = selectedDrink.name;
                document.getElementById('detailDrinkName').textContent = selectedDrink.name;
                document.getElementById('detailDrinkDescription').textContent = selectedDrink.description;
                document.getElementById('detailDrinkGarnish').textContent = selectedDrink.garnish;
                document.getElementById('detailDrinkTime').textContent = selectedDrink.time;

                document.getElementById('detailDrinkSweetness').textContent = selectedDrink.profile.sweetness;
                document.getElementById('detailDrinkSourness').textContent = selectedDrink.profile.sourness;
                document.getElementById('detailDrinkBitterness').textContent = selectedDrink.profile.bitterness;
                document.getElementById('detailDrinkPairsWith').textContent = selectedDrink.profile.pairsWith;

                // Fyll ingredienslista
                const detailIngredientsList = document.getElementById('detailDrinkIngredientsList');
                detailIngredientsList.innerHTML = '';
                selectedDrink.fullIngredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    detailIngredientsList.appendChild(li);
                });

                // Fyll instruktionslista
                const detailInstructionsList = document.getElementById('detailDrinkInstructionsList');
                detailInstructionsList.innerHTML = '';
                selectedDrink.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.textContent = instruction;
                    detailInstructionsList.appendChild(li);
                });
            } else {
                // Om drinken inte hittas
                document.getElementById('detailDrinkName').textContent = 'Oops! Drinken hittades inte.';
                document.getElementById('detailDrinkDescription').textContent = 'Vi kunde inte hitta information om denna drink. Prova att gå tillbaka till startsidan och välj en ny.';
                document.getElementById('detailDrinkImage').src = 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback bild
            }
        } else {
            // Om inget ID finns i URL:en
            document.getElementById('detailDrinkName').textContent = 'Ingen drink vald!';
            document.getElementById('detailDrinkDescription').textContent = 'Vänligen välj en drink från startsidan för att se dess detaljer.';
            document.getElementById('detailDrinkImage').src = 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback bild
        }
    }
});