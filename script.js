document.addEventListener('DOMContentLoaded', () => {
    // DRINKDATA - HÄR FINNS ALLA DINA DRINKAR!
    // Byt ut bild-URL:erna till riktiga bilder du laddar upp i en "images"-mapp eller via en bildtjänst.
    const drinks = [
        // VODKA
        {
            id: 'moscow-mule',
            name: 'Moscow Mule',
            category: 'vodka', // Primär kategori
            alcohol: ['vodka'], // Alkoholer som är *nödvändiga* för drinken
            ingredients: ['vodka', 'ingefärsöl', 'limejuice'], // Specifika ingredienser för matchning
            image: 'https://images.unsplash.com/photo-1596465492429-c88746c07629?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Vodka', '120 ml Ginger Beer', '15 ml Färsk limejuice'],
            garnish: 'Limeklyfta, myntakvist (valfritt)',
            time: '3 min',
            description: 'En uppfriskande och kryddig drink med en skarp smak av ingefära och syrlighet från lime, perfekt för en varm dag. Serveras traditionellt i en kopparmugg.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'cointreau', 'limejuice', 'tranbärsjuice'],
            image: 'https://images.unsplash.com/photo-1510626176921-d7cd79075e7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['45 ml Citronvodka', '25 ml Cointreau (eller annan apelsinlikör)', '25 ml Tranbärsjuice', '10 ml Färsk limejuice'],
            garnish: 'Apelsinzest eller limeklyfta',
            time: '4 min',
            description: 'En elegant och fruktig drink med en balanserad sötma och syrlighet, känd för sin vackra röda färg och sofistikerade framtoning.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'torr vermouth'],
            image: 'https://images.unsplash.com/photo-1598462002322-a72266b3f7f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Vodka', '10 ml Torr Vermouth'],
            garnish: 'Oliver eller citrontwist',
            time: '2 min',
            description: 'En sofistikerad och ren drink, där vodkans karaktär står i centrum med en subtil hint av vermouth. En tidlös klassiker för de som uppskattar enkelhet och styrka.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'tomatjuice', 'citronjuice'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['45 ml Vodka', '90 ml Tomatjuice', '15 ml Färsk citronjuice', 'Worcestershiresås (några stänk)', 'Tabasco (några stänk)', 'Salt och Svartpeppar (efter smak)'],
            garnish: 'Selleristjälk, citronklyfta, oliver',
            time: '5 min',
            description: 'En fyllig och kryddig drink, ofta serverad som brunchdrink. Smakrik med umami, hetta och syrlighet, perfekt för att kickstarta dagen.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'apelsinjuice'],
            image: 'https://images.unsplash.com/photo-1627914436577-628d002f23b2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Vodka', '120 ml Apelsinjuice'],
            garnish: 'Apelsinskiva',
            time: '2 min',
            description: 'En enkel och fruktig drink, söt och uppfriskande. En klassisk brunchdrink som är lätt att blanda och passar de flesta smaker.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'kaffelikör'],
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Vodka', '30 ml Kaffelikör (t.ex. Kahlúa)', '30 ml Grädde eller Mjölk'],
            garnish: 'Ingen (eller kaffebönor)',
            time: '3 min',
            description: 'En krämig och söt drink med smak av kaffe och vodka. En dessertliknande drink som är mjuk i smaken och perfekt för en mysig kväll.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'kaffelikör', 'espresso', 'sockerlag'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en passande bild för Espresso Martini
            fullIngredients: ['50 ml Vodka', '30 ml Kaffelikör', '30 ml Kall espresso', '10 ml Sockerlag (valfritt)'],
            garnish: 'Tre kaffebönor',
            time: '5 min',
            description: 'En stimulerande drink med en rik kaffesmak och en touch av sötma, balanserad med vodka. Perfekt för en energikick eller som en uppiggande avslutning på en måltid.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'tranbärsjuice'],
            image: 'https://images.unsplash.com/photo-1592039209590-7f2832a829f7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Vodka', '120 ml Tranbärsjuice', 'Limeklyfta'],
            garnish: 'Limeklyfta',
            time: '2 min',
            description: 'En enkel och uppfriskande drink med en syrlig och lite bitter smak från tranbärsjuicen, balanserad med vodkans renhet. Lätt att blanda och njuta av.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'persikolikör', 'apelsinjuice', 'tranbärsjuice'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['40 ml Vodka', '20 ml Persikolikör', '40 ml Tranbärsjuice', '40 ml Apelsinjuice'],
            garnish: 'Apelsinskiva och/eller körsbär',
            time: '4 min',
            description: 'En söt och fruktig drink med en mix av persika, tranbär och apelsin. Perfekt för den som gillar söta och enkla smaker med en tropisk känsla.',
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
            alcohol: ['vodka'],
            ingredients: ['vodka', 'amaretto'],
            image: 'https://images.unsplash.com/photo-1550974955-e41c4f52f36f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['45 ml Vodka', '30 ml Amaretto'],
            garnish: 'Ingen (valfritt: citrontwist)',
            time: '2 min',
            description: 'En enkel men elegant drink med en söt och nötig smak från Amaretton, balanserad med vodkans renhet. Perfekt som en mild avslutning på en middag.',
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
            alcohol: ['tequila'],
            ingredients: ['tequila', 'cointreau', 'limejuice'],
            image: 'https://images.unsplash.com/photo-1556679343-a6119777592c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['50 ml Tequila Blanco', '25 ml Cointreau/Triple Sec', '25 ml Färsk limejuice'],
            garnish: 'Saltkant på glaset, limehjul',
            time: '5 min',
            description: 'En syrlig och uppfriskande klassiker med en distinkt smak av tequila, balanserad med sötma från likören och syra från lime. Perfekt balanserad och oemotståndlig!',
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
            alcohol: ['tequila', 'bubbel'], // Bubbel för sodavatten
            ingredients: ['tequila', 'grapefruktläsk', 'limejuice'],
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Tequila Blanco', '10 ml Färsk limejuice', 'Fyll upp med Grapefruit soda (t.ex. Jarritos Grapefruit)'],
            garnish: 'Limeklyfta',
            time: '3 min',
            description: 'Mexikos inofficiella nationaldrink! En lätt, syrlig och uppfriskande drink med en subtil bitterhet från grapefrukten. Perfekt för en solig dag.',
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
            alcohol: ['tequila'],
            ingredients: ['tequila', 'apelsinjuice', 'grenadin'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en bild med apelsin och rött!
            fullIngredients: ['60 ml Tequila Blanco', '120 ml Apelsinjuice', '15 ml Grenadine'],
            garnish: 'Apelsinskiva, körsbär',
            time: '4 min',
            description: 'En visuell vacker drink som efterliknar en soluppgång, med en söt och fruktig smak av apelsin och en hint av tequila. Perfekt för en festlig stämning.',
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
            alcohol: ['tequila'],
            ingredients: ['tequila', 'ingefärsöl', 'limejuice'],
            image: 'https://images.unsplash.com/photo-1596465492429-c88746c07629?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['60 ml Tequila Blanco', '120 ml Ginger Beer', '15 ml Färsk limejuice'],
            garnish: 'Limeklyfta',
            time: '3 min',
            description: 'En tequila-twist på klassisk mule, med en kryddig och uppfriskande smak från ingefära och syrlighet från lime. Ett spännande alternativ till originalet.',
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
            alcohol: ['tequila', 'bubbel'], // Bubbel för sodavatten
            ingredients: ['tequila', 'citronjuice', 'sockerlag', 'sodavatten'],
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Tequila Blanco', '30 ml Färsk citronjuice', '20 ml Sockerlag', 'Fyll upp med Sodavatten'],
            garnish: 'Citronskiva, körsbär',
            time: '4 min',
            description: 'En uppfriskande drink med tequila som bas, syrlig från citron och söt från sockerlag, toppad med bubbel. Lätt och läskande.',
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
        {
            id: 'bloody-maria',
            name: 'Bloody Maria',
            category: 'tequila',
            alcohol: ['tequila'],
            ingredients: ['tequila', 'tomatjuice', 'citronjuice'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['45 ml Tequila Blanco', '90 ml Tomatjuice', '15 ml Färsk citronjuice', 'Worcestershiresås (några stänk)', 'Tabasco (några stänk)', 'Sellerisalt, Svartpeppar'],
            garnish: 'Selleristjälk, citronklyfta, jalapeño (valfritt)',
            time: '5 min',
            description: 'En mexikansk variant av Bloody Mary, där tequila ersätter vodkan för en mer örtig och robust smakupplevelse. Perfekt för brunch med en twist.',
            profile: {
                sweetness: 'Låg',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Brunch, kryddstark mat, baksmälla'
            },
            instructions: [
                'Fukta kanten på ett highballglas med lime och doppa i sellerisalt (valfritt).',
                'Fyll glaset med is.',
                'Häll i tequila, tomatjuice, citronjuice, Worcestershiresås, Tabasco, salt och peppar.',
                'Rör om väl tills ingredienserna är blandade och drinken är kyld.',
                'Garnera med en selleristjälk, citronklyfta och eventuellt en jalapeñoskiva.'
            ]
        },
        {
            id: 'el-diablo',
            name: 'El Diablo',
            category: 'tequila',
            alcohol: ['tequila'],
            ingredients: ['tequila', 'creme de cassis', 'limejuice', 'ingefärsöl'],
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['45 ml Tequila Blanco', '15 ml Crème de Cassis', '15 ml Färsk limejuice', 'Fyll upp med Ginger Beer'],
            garnish: 'Limeklyfta',
            time: '4 min',
            description: 'En fruktig och kryddig drink med en spännande kombination av tequila, svartvinbär och ingefärsöl. En djärv och uppfriskande smakupplevelse.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Mexikansk mat, sommarfester, avkoppling'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i tequila, Crème de Cassis och limejuice.',
                'Fyll på med ginger beer.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'matador',
            name: 'Matador',
            category: 'tequila',
            alcohol: ['tequila'],
            ingredients: ['tequila', 'ananasjuice', 'limejuice'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en bild med ananas
            fullIngredients: ['60 ml Tequila Blanco', '90 ml Ananasjuice', '30 ml Färsk limejuice'],
            garnish: 'Ananasklyfta eller limehjul',
            time: '3 min',
            description: 'En tropisk och fruktig drink med tequila som bas, balanserad med den söta ananasen och den syrliga limen. Perfekt för en solig dag.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Medel',
                bitterness: 'Ingen',
                pairsWith: 'Sommar, strand, tropiska rätter'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i tequila, ananasjuice och limejuice i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett kylt cocktailglas eller rocksglas med is.',
                'Garnera med en ananasklyfta eller ett limehjul.'
            ]
        },
        {
            id: 'picador',
            name: 'Picador',
            category: 'tequila',
            alcohol: ['tequila'],
            ingredients: ['tequila', 'cointreau', 'limejuice'],
            image: 'https://images.unsplash.com/photo-1556679343-a6119777592c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Margarita, använd samma eller en egen
            fullIngredients: ['60 ml Tequila Blanco', '30 ml Cointreau/Triple Sec', '20 ml Färsk limejuice'],
            garnish: 'Limeklyfta',
            time: '4 min',
            description: 'En nära släkting till Margarita, med fokus på den rena smaken av tequila, apelsinlikör och lime. Ofta serverad utan saltkant för en renare upplevelse.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Låg',
                pairsWith: 'Mexikansk mat, aperitif'
            },
            instructions: [
                'Kyl ett cocktailglas.',
                'Fyll en shaker med is.',
                'Häll i tequila, Cointreau/Triple Sec och limejuice i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda glaset.',
                'Garnera med en limeklyfta.'
            ]
        },

        // WHISKY
        {
            id: 'old-fashioned',
            name: 'Old Fashioned',
            category: 'whiskey',
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'sockerbit', 'angostura bitter'], // Sockerbit/bitter är grundläggande tillbehör
            image: 'https://images.unsplash.com/photo-1616086705574-884c6efd996d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Bourbon eller Rågwhiskey', '1 sockerbit (eller 5 ml sockerlag)', '2-3 stänk Angostura Bitter', 'En skvätt vatten (valfritt)'],
            garnish: 'Apelsinzest',
            time: '4 min',
            description: 'En klassisk och robust drink med en djup smak av whiskey, balanserad med sötma och en hint av bitterhet. En sofistikerad drink för finsmakaren och en tidlös favorit.',
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
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'citronjuice', 'sockerlag'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Whiskey Sour
            fullIngredients: ['60 ml Bourbon eller Rågwhiskey', '30 ml Färsk citronjuice', '20 ml Sockerlag', 'Äggvita (valfritt, för skum)'],
            garnish: 'Apelsinzest, körsbär',
            time: '5 min',
            description: 'En syrlig och uppfriskande drink med en balanserad sötma. Om äggvita används får den ett vackert skum och en mjukare konsistens. En riktig klassiker.',
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
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'söt vermouth'],
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Manhattan
            fullIngredients: ['60 ml Rågwhiskey eller Bourbon', '20 ml Söt Vermouth', '2 stänk Angostura Bitter'],
            garnish: 'Körsbär',
            time: '3 min',
            description: 'En klassisk och kraftfull drink med en rik, söt och kryddig smak av whiskey och vermouth. En sofistikerad och värmande dryck för den kräsne.',
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
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'mynta', 'sockerlag'],
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Mint Julep
            fullIngredients: ['60 ml Bourbon', '10-12 myntablad', '10 ml Sockerlag'],
            garnish: 'Myntakvist',
            time: '5 min',
            description: 'En uppfriskande och aromatisk drink med en stark smak av mynta och bourbon, perfekt för varma dagar. Serveras traditionellt i en kopparmugg för att hålla kylan.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Sommarfester, Derby-fester, BBQ'
            },
            instructions: [
                'Lägg myntablad och sockerlagen i botten av en julep-mugg eller rocksglas.',
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
            alcohol: ['whiskey', 'bubbel'], // Bubbel för sodavatten
            ingredients: ['whiskey', 'sodavatten'],
            image: 'https://images.unsplash.com/photo-1632128795123-5e9330a1122a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Valfri Whisky', '120 ml Sodavatten eller Tonic Water', 'Citronskiva (valfritt)'],
            garnish: 'Citronskiva',
            time: '2 min',
            description: 'En enkel och uppfriskande drink som låter whiskyns karaktär komma fram, med en lätt kolsyrad känsla. Mycket populär i Japan för sin lättdruckenhet.',
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
        {
            id: 'rob-roy',
            name: 'Rob Roy',
            category: 'whiskey',
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'söt vermouth'],
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Manhattan, använd en egen bild
            fullIngredients: ['60 ml Scotch Whisky', '20 ml Söt Vermouth', '2 stänk Angostura Bitter'],
            garnish: 'Körsbär',
            time: '3 min',
            description: 'Som en Manhattan, men med den rökiga och unika karaktären av skotsk whisky. En fyllig och sofistikerad drink för whiskyälskare.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Ingen',
                bitterness: 'Medel',
                pairsWith: 'Efter middagen, eleganta tillställningar, kalla kvällar'
            },
            instructions: [
                'Kyl ett martiniglas eller coupetteglas.',
                'Fyll en mixer med is.',
                'Häll i Scotch whisky, söt vermouth och Angostura Bitter.',
                'Rör om väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda glaset.',
                'Garnera med ett körsbär.'
            ]
        },
        {
            id: 'sazerac',
            name: 'Sazerac',
            category: 'whiskey',
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'absinth'], // Absinth används för sköljning
            image: 'https://images.unsplash.com/photo-1616086705574-884c6efd996d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en passande bild för Sazerac
            fullIngredients: ['60 ml Rågwhisky', '1 sockerbit', '3 stänk Peychaud\'s Bitter', 'Några droppar Absinth (för att skölja glaset)'],
            garnish: 'Citronzest',
            time: '5 min',
            description: 'En komplex och aromatisk New Orleans-klassiker med djupa smaker av rågwhisky, sötma och en subtil aniston från absinth. En riktig smaksensation.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Ingen',
                bitterness: 'Hög',
                pairsWith: 'Efter middagen, sofistikerade tillfällen'
            },
            instructions: [
                'Skölj ett kylt rocksglas med absinth och kasta ut överskottet.',
                'Lägg sockerbiten i ett mixerglas. Tillsätt Peychaud\'s Bitter och en skvätt vatten (om du använder sockerbit). Muddla tills sockret löst sig.',
                'Fyll mixerglaset med is. Häll i rågwhisky.',
                'Rör om väl tills drinken är ordentligt kyld och utspädd.',
                'Sila ner i det absinth-sköljda glaset (utan is).',
                'Tvista en citronzest över drinken och släpp ner den.'
            ]
        },
        {
            id: 'irish-coffee',
            name: 'Irish Coffee',
            category: 'whiskey',
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'kaffe', 'socker', 'grädde'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en passande bild för Irish Coffee
            fullIngredients: ['45 ml Irländsk Whiskey', '120 ml Hett Kaffe', '2 tsk Brunt Socker', 'Lätt vispad Grädde'],
            garnish: 'Ingen (grädden är garneringen)',
            time: '5 min',
            description: 'En värmande och uppiggande drink med en härlig balans mellan starkt kaffe, söt whiskey och krämig grädde. Perfekt för kyliga dagar eller efter maten.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Låg',
                bitterness: 'Medel (från kaffe)',
                pairsWith: 'Efter middagen, dessert, kalla kvällar'
            },
            instructions: [
                'Värm ett Irish coffee-glas med varmt vatten och häll ut vattnet.',
                'Häll i brunt socker i glaset.',
                'Tillsätt Irländsk whiskey och rör om tills sockret löst sig.',
                'Fyll på med hett kaffe och rör om igen.',
                'Toppa försiktigt med lätt vispad grädde (grädden ska flyta ovanpå).',
                'Servera genast, drick genom grädden.'
            ]
        },
        {
            id: 'penicillin',
            name: 'Penicillin',
            category: 'whiskey',
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'citronjuice', 'honung-ingefärssirap'],
            image: 'https://images.unsplash.com/photo-1632128795123-5e9330a1122a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en passande bild för Penicillin
            fullIngredients: ['60 ml Blended Scotch Whisky', '20 ml Färsk citronjuice', '20 ml Honung-ingefärssirap', '5 ml Islay Single Malt Scotch (för att toppa/flyta)'],
            garnish: 'Kanderad ingefära eller citronzest',
            time: '5 min',
            description: 'En modern klassiker med en rökig och kryddig smakprofil, balanserad med sötma från honung och syrlighet från citron. Värmande och komplex.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Efter middagen, kalla kvällar, när du är lite krasslig'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i blended Scotch, citronjuice och honung-ingefärssirap i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett rocksglas med ny is.',
                'Toppa försiktigt med Islay single malt Scotch (häll den långsamt över baksidan av en sked så att den lägger sig som ett lager).',
                'Garnera med kanderad ingefära eller en citronzest.'
            ]
        },
        {
            id: 'rusty-nail',
            name: 'Rusty Nail',
            category: 'whiskey',
            alcohol: ['whiskey'],
            ingredients: ['whiskey', 'drambuie'],
            image: 'https://images.unsplash.com/photo-1616086705574-884c6efd996d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd en passande bild för Rusty Nail
            fullIngredients: ['60 ml Scotch Whisky', '30 ml Drambuie'],
            garnish: 'Citronzest (valfritt)',
            time: '2 min',
            description: 'En söt och örtig drink med en robust smak av Scotch whisky och de komplexa tonerna från Drambuie. En klassisk efter-middagen-drink.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Efter middagen, dessert, lugna kvällar'
            },
            instructions: [
                'Fyll ett rocksglas med is.',
                'Häll i Scotch whisky och Drambuie.',
                'Rör om väl tills drinken är ordentligt kyld.',
                'Garnera med en citronzest om så önskas.'
            ]
        },

        // ROM
        {
            id: 'mojito',
            name: 'Mojito',
            category: 'rom',
            alcohol: ['rom', 'bubbel'], // Bubbel för sodavatten
            ingredients: ['rom', 'mynta', 'lime', 'socker', 'sodavatten'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Mojito
            fullIngredients: ['60 ml Vit Rom', '25 ml Färsk limejuice', '2 tsk Socker', '8-10 Myntablad', 'Fyll upp med Sodavatten'],
            garnish: 'Myntakvist, limeklyfta',
            time: '7 min',
            description: 'En svalkande och aromatisk drink med en frisk smak av mynta och lime, sötma från socker och en mjuk touch av rom. Perfekt för varma dagar och en riktig festfavorit.',
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
            alcohol: ['rom'],
            ingredients: ['rom', 'limejuice', 'sockerlag'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['60 ml Vit Rom', '30 ml Färsk limejuice', '20 ml Sockerlag'],
            garnish: 'Limehjul',
            time: '4 min',
            description: 'En perfekt balanserad klassiker: syrlig, söt och stark. En enkel och elegant romdrink som är en favorit bland bartenders och drinkälskare.',
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
            alcohol: ['rom'],
            ingredients: ['rom', 'kokosgrädde', 'ananasjuice'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Pina Colada
            fullIngredients: ['60 ml Ljus Rom', '90 ml Ananasjuice', '30 ml Kokosgrädde'],
            garnish: 'Ananasklyfta, körsbär',
            time: '5 min',
            description: 'En krämig och tropisk drink med söta smaker av ananas och kokos, perfekt för en känsla av semester och solsken. Ofta mixad till en slät konsistens.',
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
            alcohol: ['rom'],
            ingredients: ['rom', 'cola', 'lime'], // 'bubbel' för cola
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Cuba Libre
            fullIngredients: ['60 ml Rom (vit eller mörk)', '120 ml Coca-Cola', '15 ml Färsk limejuice'],
            garnish: 'Limeklyfta',
            time: '2 min',
            description: 'En enkel och populär drink med en balanserad sötma från colan och syrlighet från lime, med rom som bas. Lätt att göra och uppskattad av många.',
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
            alcohol: ['rom'],
            ingredients: ['rom', 'ingefärsöl', 'lime'],
            image: 'https://images.unsplash.com/photo-1628172969963-c75c75c8a4c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Dark 'n' Stormy
            fullIngredients: ['60 ml Mörk Rom (traditionellt Gosling\'s Black Seal)', '120 ml Ginger Beer', 'Limeklyfta'],
            garnish: 'Limeklyfta',
            time: '3 min',
            description: 'En kryddig och uppfriskande drink med en stark smak av ingefära och den distinkta karaktären hos mörk rom. Serveras ofta i ett högt glas med romen flytande på toppen.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Medel',
                pairsWith: 'Sommar, kryddstark mat, avkoppling'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i ginger beer.',
                'Toppa med den mörka romen genom att försiktigt hälla den över en sked så att den sjunker till botten och skapar ett mörkt moln.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'mai-tai',
            name: 'Mai Tai',
            category: 'rom',
            alcohol: ['rom'],
            ingredients: ['rom', 'apelsinlikör', 'orgeat', 'limejuice'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Mai Tai
            fullIngredients: ['30 ml Ljus Rom', '30 ml Mörk Rom', '15 ml Apelsinlikör (t.ex. Orange Curaçao)', '15 ml Orgeat (mandelssirap)', '30 ml Färsk limejuice'],
            garnish: 'Myntakvist, ananasklyfta, körsbär',
            time: '5 min',
            description: 'En klassisk tiki-drink fylld med tropiska smaker av rom, apelsin, mandel och lime. Komplex och otroligt smakrik, en riktig semesterdrink.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Tiki-fester, sommar, tropiska rätter'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i ljus rom, mörk rom, apelsinlikör, orgeat och limejuice i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett rocksglas med ny is.',
                'Garnera generöst med en myntakvist, ananasklyfta och ett körsbär.'
            ]
        },
        {
            id: 'hurricane',
            name: 'Hurricane',
            category: 'rom',
            alcohol: ['rom'],
            ingredients: ['rom', 'passionsfruktsjuice', 'apelsinjuice', 'limejuice', 'grenadin'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Hurricane
            fullIngredients: ['60 ml Ljus Rom', '60 ml Mörk Rom', '30 ml Passionsfruktsjuice', '30 ml Apelsinjuice', '15 ml Färsk limejuice', '15 ml Grenadin'],
            garnish: 'Apelsinskiva, körsbär',
            time: '5 min',
            description: 'En kraftfull och fruktig tropisk drink, känd för sin höga alkoholhalt och mix av fruktsmaker. En riktig festbomb med en färgstark framtoning.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Medel',
                bitterness: 'Ingen',
                pairsWith: 'Fester, tropiska teman, sommaren'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i ljus rom, mörk rom, passionsfruktsjuice, apelsinjuice, limejuice och grenadin i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett hurricane-glas fyllt med is.',
                'Garnera med en apelsinskiva och ett körsbär.'
            ]
        },
        {
            id: 'rum-punch',
            name: 'Rum Punch',
            category: 'rom',
            alcohol: ['rom'],
            ingredients: ['rom', 'fruktsafter'], // Detta är en generell punch, specificera ingredienser i fullIngredients
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Rum Punch
            fullIngredients: ['90 ml Rom (valfri, ofta en blandning)', '60 ml Färsk apelsinjuice', '60 ml Ananasjuice', '30 ml Färsk limejuice', '15 ml Grenadin', 'Några stänk Angostura Bitter (valfritt)'],
            garnish: 'Färska frukter, myntakvistar',
            time: '5-10 min (för en portion)',
            description: 'En bred kategori av romdrinkar, ofta serverad i större batcher. En söt och fruktig mix som är perfekt för att servera till många på fest.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Stora fester, BBQ, sommar'
            },
            instructions: [
                'Blanda alla ingredienser (för en portion) i en shaker med is.',
                'Skaka väl och sila ner i ett glas fyllt med is.',
                'För större batcher, blanda allt i en bålskål och kyl väl. Tillsätt frukt och is innan servering.',
                'Garnera med färska frukter och myntakvistar.'
            ]
        },
        {
            id: 'bramble-rom',
            name: 'Bramble (med Rom)',
            category: 'rom',
            alcohol: ['rom'],
            ingredients: ['rom', 'citronjuice', 'sockerlag', 'björnbärslikör'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Bramble
            fullIngredients: ['60 ml Ljus Rom', '30 ml Färsk citronjuice', '15 ml Sockerlag', '15 ml Crème de Mûre (björnbärslikör)'],
            garnish: 'Färska björnbär, citronzest',
            time: '5 min',
            description: 'En fruktig och syrlig drink med rom som bas, förstärkt av den djupa smaken av björnbärslikör. En elegant och somrig twist på originalet.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Låg',
                pairsWith: 'Sommar, dessert, eftermiddagsdrink'
            },
            instructions: [
                'Fyll ett rocksglas med krossad is.',
                'Fyll en shaker med is.',
                'Häll i rom, citronjuice och sockerlag i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i rocksglaset med krossad is.',
                'Häll Crème de Mûre över toppen av drinken så att den "blöder" ner genom isen.',
                'Garnera med färska björnbär och en citronzest.'
            ]
        },
        {
            id: 'hot-buttered-rum',
            name: 'Hot Buttered Rum',
            category: 'rom',
            alcohol: ['rom'],
            ingredients: ['rom', 'smör', 'socker', 'kryddor', 'hett vatten'],
            image: 'https://images.unsplash.com/photo-1620248231945-8f6424564c4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Hot Buttered Rum
            fullIngredients: ['60 ml Mörk Rom', '1 msk Smör (rumstempererat)', '1 msk Farinsocker', 'En nypa kanel', 'En nypa muskot', '120 ml Hett Vatten'],
            garnish: 'Kanelstång',
            time: '5 min',
            description: 'En värmande och fyllig drink, perfekt för kalla kvällar. Med smör, socker och kryddor skapar den en rik och tröstande smakupplevelse.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Ingen',
                bitterness: 'Låg',
                pairsWith: 'Kalla kvällar, efter middagen, vid en brasa'
            },
            instructions: [
                'Lägg smör, farinsocker, kanel och muskot i en värmetålig mugg.',
                'Häll i romen och rör om tills smöret och sockret börjar lösas upp.',
                'Fyll på med hett vatten och rör om väl tills allt är helt löst.',
                'Garnera med en kanelstång.'
            ]
        },

        // GIN
        {
            id: 'gin-tonic',
            name: 'Gin & Tonic',
            category: 'gin',
            alcohol: ['gin'],
            ingredients: ['gin', 'tonic water', 'citron', 'lime'], // 'bubbel' för tonic
            image: 'https://images.unsplash.com/photo-1588636184852-5264b381ec37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Gin', '120 ml Tonic Water', 'Färsk limeklyfta eller gurkskiva'],
            garnish: 'Limeklyfta eller gurkskiva',
            time: '3 min',
            description: 'En tidlös klassiker med en balanserad smak av enbär från ginen och bitterhet från tonic, uppfriskande och lätt att dricka. Perfekt för alla tillfällen.',
            profile: {
                sweetness: 'Låg',
                sourness: 'Medel (från lime)',
                bitterness: 'Medel (från tonic)',
                pairsWith: 'Mingel, sommar, lättare rätter'
            },
            instructions: [
                'Fyll ett highballglas eller copa-glas med mycket is.',
                'Häll i gin.',
                'Fyll på med tonic water.',
                'Rör om försiktigt.',
                'Garnera med en limeklyfta eller en gurkskiva.'
            ]
        },
        {
            id: 'negroni',
            name: 'Negroni',
            category: 'gin',
            alcohol: ['gin'],
            ingredients: ['gin', 'campari', 'söt vermouth'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Negroni
            fullIngredients: ['30 ml Gin', '30 ml Campari', '30 ml Söt Vermouth'],
            garnish: 'Apelsinskiva eller apelsinzest',
            time: '2 min',
            description: 'En bitter och balanserad italiensk klassiker med en komplex smak av gin, örtig Campari och söt vermouth. En aperitif som väcker aptiten.',
            profile: {
                sweetness: 'Medel-Låg',
                sourness: 'Ingen',
                bitterness: 'Hög',
                pairsWith: 'Aperitif, italiensk mat, före middagen'
            },
            instructions: [
                'Fyll ett rocksglas med is.',
                'Häll i gin, Campari och söt vermouth.',
                'Rör om väl tills drinken är ordentligt kyld (ca 20-30 sekunder).',
                'Garnera med en apelsinskiva eller apelsinzest.'
            ]
        },
        {
            id: 'tom-collins',
            name: 'Tom Collins',
            category: 'gin',
            alcohol: ['gin', 'bubbel'], // Bubbel för sodavatten
            ingredients: ['gin', 'citronjuice', 'sockerlag', 'sodavatten'],
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Gin', '30 ml Färsk citronjuice', '20 ml Sockerlag', 'Fyll upp med Sodavatten'],
            garnish: 'Citronskiva, körsbär',
            time: '4 min',
            description: 'En uppfriskande och läskande drink med en balanserad syrlighet och sötma, toppad med bubbel. Perfekt för varma dagar och lätt att dricka.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Sommarfester, BBQ, eftermiddagsdrink'
            },
            instructions: [
                'Fyll ett highballglas med is.',
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
            alcohol: ['gin'],
            ingredients: ['gin', 'torr vermouth'],
            image: 'https://images.unsplash.com/photo-1598462002322-a72266b3f7f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Martini
            fullIngredients: ['60 ml Gin', '10 ml Torr Vermouth'],
            garnish: 'Oliver eller citrontwist',
            time: '2 min',
            description: 'En ikonisk och ren drink med en skarp smak av gin, förstärkt av den subtila örtigheten från torr vermouth. Den ultimata aperitifen för den sofistikerade.',
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
            id: 'french-75',
            name: 'French 75',
            category: 'gin',
            alcohol: ['gin', 'bubbel'], // Bubbel för Champagne/Prosecco
            ingredients: ['gin', 'citronjuice', 'sockerlag', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för French 75
            fullIngredients: ['30 ml Gin', '15 ml Färsk citronjuice', '15 ml Sockerlag', 'Fyll upp med Champagne/Prosecco'],
            garnish: 'Citronzest',
            time: '4 min',
            description: 'En elegant och festlig drink med en balanserad syrlighet och sötma, toppad med lyxigt bubbel. Perfekt för firanden och speciella tillfällen.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Firanden, brunch, aperitif'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i gin, citronjuice och sockerlag i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett kylt champagneflöjt eller coupetteglas.',
                'Fyll upp med Champagne/Prosecco.',
                'Garnera med en citronzest.'
            ]
        },
        {
            id: 'gimlet',
            name: 'Gimlet',
            category: 'gin',
            alcohol: ['gin'],
            ingredients: ['gin', 'lime cordial'],
            image: 'https://images.unsplash.com/photo-1556679343-a6119777592c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Gimlet
            fullIngredients: ['60 ml Gin', '30 ml Lime Cordial (t.ex. Rose\'s Lime Cordial)'],
            garnish: 'Limehjul',
            time: '2 min',
            description: 'En skarp och syrlig drink med en balanserad sötma från lime cordial. En klassisk och uppfriskande gin-drink för den som uppskattar renhet och syrlighet.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Hög',
                bitterness: 'Låg',
                pairsWith: 'Aperitif, varma dagar, före middagen'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i gin och lime cordial i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i ett kylt coupetteglas eller cocktailglas.',
                'Garnera med ett limehjul.'
            ]
        },
        {
            id: 'gin-fizz',
            name: 'Gin Fizz',
            category: 'gin',
            alcohol: ['gin', 'bubbel'], // Bubbel för sodavatten
            ingredients: ['gin', 'citronjuice', 'sockerlag', 'äggvita', 'sodavatten'],
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Gin Fizz
            fullIngredients: ['60 ml Gin', '30 ml Färsk citronjuice', '20 ml Sockerlag', '1 Äggvita (valfritt)', 'Fyll upp med Sodavatten'],
            garnish: 'Citronzest',
            time: '6 min',
            description: 'En lätt och luftig drink med ett krämigt skum, syrlig från citron och söt från sockerlag, balanserad med gin. Perfekt för brunch eller en uppfriskande start på kvällen.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Brunch, sommar, lättare måltider'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i gin, citronjuice, sockerlag och äggvita (om du använder det).',
                'Skaka först utan is (dry shake) i ca 15 sekunder för att emulgera äggvitan.',
                'Lägg sedan till is och skaka igen tills drinken är ordentligt kyld.',
                'Sila ner i ett highballglas (utan is).',
                'Fyll upp med sodavatten och rör försiktigt så att skummet behålls.',
                'Garnera med en citronzest.'
            ]
        },
        {
            id: 'clover-club',
            name: 'Clover Club',
            category: 'gin',
            alcohol: ['gin'],
            ingredients: ['gin', 'hallonsirap', 'citronjuice', 'äggvita'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Clover Club
            fullIngredients: ['45 ml Gin', '20 ml Hallonsirap', '20 ml Färsk citronjuice', '1 Äggvita'],
            garnish: 'Hallon',
            time: '6 min',
            description: 'En vacker och sammetslen drink med en fruktig smak av hallon, balanserad syrlighet från citron och en krämig konsistens från äggvita. En elegant och sofistikerad drink.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Före middagen, dessert, festliga tillfällen'
            },
            instructions: [
                'Fyll en shaker med is.',
                'Häll i gin, hallonsirap, citronjuice och äggvita.',
                'Skaka först utan is (dry shake) i ca 15 sekunder för att emulgera äggvitan.',
                'Lägg sedan till is och skaka igen tills drinken är ordentligt kyld.',
                'Sila ner i ett kylt coupetteglas eller cocktailglas.',
                'Garnera med färska hallon.'
            ]
        },
        {
            id: 'southside',
            name: 'Southside',
            category: 'gin',
            alcohol: ['gin'],
            ingredients: ['gin', 'limejuice', 'sockerlag', 'mynta'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Southside
            fullIngredients: ['60 ml Gin', '30 ml Färsk limejuice', '20 ml Sockerlag', '6-8 Myntablad'],
            garnish: 'Myntakvist, limeklyfta',
            time: '5 min',
            description: 'En uppfriskande och aromatisk gin-drink, lik en Mojito men med gin som bas. Frisk smak av mynta och lime, perfekt för varma dagar.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel-Hög',
                bitterness: 'Låg',
                pairsWith: 'Sommarfester, lättare rätter, stranden'
            },
            instructions: [
                'Lägg myntablad, limejuice och sockerlag i en shaker.',
                'Muddla försiktigt myntan för att frigöra oljorna.',
                'Fyll shakern med is och häll i gin.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Dubbelsila (genom fin sil) ner i ett kylt coupetteglas eller rocksglas med is.',
                'Garnera med en myntakvist och en limeklyfta.'
            ]
        },
        {
            id: 'aviation',
            name: 'Aviation',
            category: 'gin',
            alcohol: ['gin'],
            ingredients: ['gin', 'maraschino-likör', 'creme de violette', 'citronjuice'],
            image: 'https://images.unsplash.com/photo-1556679343-a6119777592c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Aviation (blå/lila)
            fullIngredients: ['60 ml Gin', '15 ml Maraschino-likör', '7.5 ml Crème de Violette', '20 ml Färsk citronjuice'],
            garnish: 'Körsbär',
            time: '4 min',
            description: 'En vacker, ljusblå drink med en komplex smakprofil: blommig från violett, fruktig från maraschino och balanserad syrlighet från citron. En unik klassiker.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Före middagen, speciella tillfällen'
            },
            instructions: [
                'Kyl ett cocktailglas.',
                'Fyll en shaker med is.',
                'Häll i gin, Maraschino-likör, Crème de Violette och citronjuice i shakern.',
                'Skaka väl tills drinken är ordentligt kyld.',
                'Sila ner i det kylda glaset.',
                'Garnera med ett körsbär.'
            ]
        },

        // BUBBEL
        {
            id: 'mimosa',
            name: 'Mimosa',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['apelsinjuice', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Mimosa
            fullIngredients: ['75 ml Apelsinjuice (färskpressad rekommenderas)', '75 ml Kall Champagne eller Prosecco'],
            garnish: 'Apelsinskiva (valfritt)',
            time: '2 min',
            description: 'En enkel och solig brunchklassiker, lätt söt och uppfriskande. Den lätta bubblande texturen och den fruktiga apelsinsmaken gör den oemotståndlig.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, frukost, firanden'
            },
            instructions: [
                'Häll apelsinjuice i ett champagneflöjtglas.',
                'Fyll försiktigt upp med kall Champagne eller Prosecco.',
                'Rör om försiktigt en gång.',
                'Garnera med en apelsinskiva om så önskas.'
            ]
        },
        {
            id: 'bellini',
            name: 'Bellini',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['persikopuré', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Bellini
            fullIngredients: ['50 ml Persikopuré (från färska persikor eller frysta/konserverade)', '100 ml Kall Prosecco'],
            garnish: 'Persikaskiva (valfritt)',
            time: '3 min',
            description: 'En elegant italiensk klassiker med en söt och fruktig smak av persika, toppad med det torra bubblet från Prosecco. En lyxig och lättdrucken aperitif.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, aperitif, speciella tillfällen'
            },
            instructions: [
                'Häll persikopuré i ett champagneflöjtglas.',
                'Fyll försiktigt upp med kall Prosecco.',
                'Rör om försiktigt så att purén blandas med bubblet.',
                'Garnera med en persikaskiva om så önskas.'
            ]
        },
        // French 75 finns redan under Gin, men är relevant här också.
        {
            id: 'kir-royale',
            name: 'Kir Royale',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['creme de cassis', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Kir Royale
            fullIngredients: ['15 ml Crème de Cassis (svartvinbärslikör)', '120 ml Kall Champagne eller Mousserande Vin'],
            garnish: 'Svartvinbär (valfritt)',
            time: '2 min',
            description: 'En enkel men elegant fransk drink med en söt och djup smak av svartvinbär, vackert blandat med det torra och bubbliga vinet. En klassisk aperitif.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Låg',
                bitterness: 'Låg',
                pairsWith: 'Aperitif, firanden, före middagen'
            },
            instructions: [
                'Häll Crème de Cassis i botten av ett champagneflöjtglas.',
                'Fyll försiktigt upp med kall Champagne eller mousserande vin.',
                'Servera direkt.'
            ]
        },
        {
            id: 'champagne-cocktail',
            name: 'Champagne Cocktail',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['sockerbit', 'angostura bitter', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['1 Sockerbit', '2-3 stänk Angostura Bitter', '120 ml Kall Champagne eller Prosecco', 'Citronzest'],
            garnish: 'Citronzest',
            time: '3 min',
            description: 'En klassisk och elegant drink som lyfter fram bubbelns karaktär med en hint av sötma och bitterhet. En sofistikerad och festlig drink.',
            profile: {
                sweetness: 'Låg-Medel',
                sourness: 'Ingen',
                bitterness: 'Medel',
                pairsWith: 'Firanden, aperitif, speciella tillfällen'
            },
            instructions: [
                'Lägg sockerbiten i botten av ett champagneflöjtglas.',
                'Droppa Angostura Bitter över sockerbiten.',
                'Fyll försiktigt upp med kall Champagne eller Prosecco.',
                'Garnera med en citronzest.'
            ]
        },
        {
            id: 'aperol-spritz',
            name: 'Aperol Spritz',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['aperol', 'bubbel', 'sodavatten'],
            image: 'https://images.unsplash.com/photo-1517454025078-a92631526978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            fullIngredients: ['60 ml Aperol', '90 ml Prosecco', '30 ml Sodavatten'],
            garnish: 'Apelsinskiva',
            time: '3 min',
            description: 'En populär och uppfriskande italiensk aperitif med en balanserad sötma och bitterhet, toppad med bubbel. Perfekt för varma sommardagar.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Medel',
                pairsWith: 'Aperitif, italiensk mat, sommar'
            },
            instructions: [
                'Fyll ett stort vinglas med mycket is.',
                'Häll i Aperol, sedan Prosecco och till sist en skvätt sodavatten.',
                'Rör om försiktigt.',
                'Garnera med en apelsinskiva.'
            ]
        },
        {
            id: 'rossini',
            name: 'Rossini',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['jordgubbspuré', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild för Rossini
            fullIngredients: ['50 ml Jordgubbspuré (från färska/frysta jordgubbar)', '100 ml Kall Prosecco'],
            garnish: 'Färsk jordgubbe',
            time: '3 min',
            description: 'En söt och fruktig variant av Bellini, med färsk jordgubbspuré och Prosecco. En somrig och elegant drink med en vacker färg.',
            profile: {
                sweetness: 'Hög',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, sommar, dessert'
            },
            instructions: [
                'Häll jordgubbspuré i ett champagneflöjtglas.',
                'Fyll försiktigt upp med kall Prosecco.',
                'Rör om försiktigt så att purén blandas med bubblet.',
                'Garnera med en färsk jordgubbe.'
            ]
        },
        {
            id: 'spritz-veneziano',
            name: 'Spritz Veneziano',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['aperol', 'prosecco', 'sodavatten'], // Liknar Aperol Spritz, men ibland med en oliv
            image: 'https://images.unsplash.com/photo-1517454025078-a92631526978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['60 ml Aperol', '90 ml Prosecco', '30 ml Sodavatten'],
            garnish: 'Grön oliv eller apelsinskiva',
            time: '3 min',
            description: 'Den ursprungliga venetianska spritzen, med en bitterljuv smak av Aperol och Prosecco. En uppfriskande och lättsam drink, perfekt för aperitivo.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Medel',
                pairsWith: 'Aperitif, italiensk mat, sommar'
            },
            instructions: [
                'Fyll ett stort vinglas med mycket is.',
                'Häll i Aperol, sedan Prosecco och till sist en skvätt sodavatten.',
                'Rör om försiktigt.',
                'Garnera med en grön oliv eller en apelsinskiva.'
            ]
        },
        {
            id: 'bucks-fizz',
            name: 'Buck\'s Fizz',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['apelsinjuice', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1589155799190-e55507851306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Samma som Mimosa, använd en egen
            fullIngredients: ['50 ml Apelsinjuice (färskpressad rekommenderas)', '100 ml Kall Champagne'],
            garnish: 'Apelsinskiva (valfritt)',
            time: '2 min',
            description: 'Mycket lik Mimosa, men traditionellt med en högre andel bubbel för en lättare och mindre söt drink. En klassisk brunchfavorit.',
            profile: {
                sweetness: 'Medel',
                sourness: 'Låg',
                bitterness: 'Ingen',
                pairsWith: 'Brunch, frukost, firanden'
            },
            instructions: [
                'Häll apelsinjuice i ett champagneflöjtglas.',
                'Fyll försiktigt upp med kall Champagne.',
                'Rör om försiktigt en gång.',
                'Garnera med en apelsinskiva om så önskas.'
            ]
        },
        {
            id: 'death-in-the-afternoon',
            name: 'Death in the Afternoon',
            category: 'bubbel',
            alcohol: ['bubbel'],
            ingredients: ['absinth', 'bubbel'],
            image: 'https://images.unsplash.com/photo-1596796338497-b67f65a1217e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['30 ml Absinth', '120 ml Kall Champagne eller Mousserande Vin'],
            garnish: 'Ingen',
            time: '2 min',
            description: 'En unik och kraftfull drink uppfunnen av Ernest Hemingway. Smaken är aniskryddig och komplex, dämpad av bubbel. För den äventyrlige drinkaren.',
            profile: {
                sweetness: 'Torr',
                sourness: 'Ingen',
                bitterness: 'Hög (från absinth)',
                pairsWith: 'Efter middagen, när du vill prova något annorlunda'
            },
            instructions: [
                'Häll absinth i ett champagneflöjtglas.',
                'Fyll försiktigt upp med kall Champagne eller mousserande vin.',
                'Servera genast.'
            ]
        },

        // BLANDADE SPRITSORTER
        {
            id: 'long-island-iced-tea',
            name: 'Long Island Iced Tea',
            category: 'blandade',
            alcohol: ['vodka', 'tequila', 'rom', 'gin'], // Alla relevanta alkoholer
            ingredients: ['vodka', 'tequila', 'rom', 'gin', 'triple sec', 'citronjuice', 'sockerlag', 'cola'],
            image: 'https://images.unsplash.com/photo-1579294273030-a1f9a2631557?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['15 ml Vodka', '15 ml Tequila', '15 ml Ljus Rom', '15 ml Gin', '15 ml Triple Sec', '25 ml Färsk citronjuice', '15 ml Sockerlag', 'Fyll upp med Coca-Cola'],
            garnish: 'Citronskiva',
            time: '5 min',
            description: 'Känd för sin höga alkoholhalt och sitt utseende som påminner om iste. En komplex men förvånansvärt balanserad drink med en mix av flera spritsorter och kolsyrad läsk.',
            profile: {
                sweetness: 'Medel-Hög',
                sourness: 'Medel',
                bitterness: 'Låg',
                pairsWith: 'Fester, när du vill ha en stark drink'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i vodka, tequila, ljus rom, gin, triple sec, citronjuice och sockerlag.',
                'Rör om väl.',
                'Fyll upp med Coca-Cola.',
                'Rör om försiktigt igen.',
                'Garnera med en citronskiva.'
            ]
        },
        {
            id: 'corpse-reviver-no-2',
            name: 'Corpse Reviver No. 2',
            category: 'blandade',
            alcohol: ['gin'],
            ingredients: ['gin', 'cointreau', 'lillet blanc', 'citronjuice', 'absinth'],
            image: 'https://images.unsplash.com/photo-1556679343-a6119777592c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Använd passande bild
            fullIngredients: ['20 ml Gin', '20 ml Cointreau/Triple Sec', '20 ml Lillet Blanc', '20 ml Färsk citronjuice', '1 stänk Absinth (för att skölja glaset)'],
            garnish: 'Körsbär eller citrontwist',
            time: '4 min',
            description: 'En återupplivande och komplex drink med en balanserad syrlighet och en hint av aniston från absinth. Känd för sin förmåga att "väcka liv" efter en lång natt.',
            profile: {
                sweetness: 'Medel-Låg',
                sourness: 'Hög',
                bitterness: 'Medel',
                pairsWith: 'Brunch, baksmälla, aperitif'
            },