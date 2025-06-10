document.addEventListener('DOMContentLoaded', () => {
    const getSuggestionsBtn = document.getElementById('getSuggestionsBtn');
    const suggestionsArea = document.getElementById('suggestionsArea');
    const drinkSuggestionsGrid = document.getElementById('drinkSuggestionsGrid');
    const noSuggestionsMessage = document.getElementById('noSuggestionsMessage');

    const drinkModal = document.getElementById('drinkModal');
    const closeButton = document.querySelector('.close-button');
    const modalDrinkImage = document.getElementById('modalDrinkImage');
    const modalDrinkName = document.getElementById('modalDrinkName');
    const modalDrinkDescription = document.getElementById('modalDrinkDescription');
    const modalDrinkGarnish = document.getElementById('modalDrinkGarnish');
    const modalDrinkTime = document.getElementById('modalDrinkTime');
    const modalDrinkSweetness = document.getElementById('modalDrinkSweetness');
    const modalDrinkSourness = document.getElementById('modalDrinkSourness');
    const modalDrinkBitterness = document.getElementById('modalDrinkBitterness');
    const modalDrinkPairsWith = document.getElementById('modalDrinkPairsWith');
    const modalDrinkIngredientsList = document.getElementById('modalDrinkIngredientsList');
    const modalDrinkInstructionsList = document.getElementById('modalDrinkInstructionsList');

    // Objekt med drinkar och deras ingredienser, beskrivningar, etc.
    // LÄGG TILL EGNA BILD-URL:er HÄR! Du kan använda Unsplash, Pexels eller egna bilder.
    const drinks = [
        {
            id: 'vodka-soda',
            name: 'Vodka Soda',
            image: 'https://source.unsplash.com/random/400x300/?vodkasoda', // Exempelbild
            ingredients: ['vodka', 'bubbelvatten', 'juice'], // Juice för lime/citron
            fullIngredients: ['60 ml Vodka', '120 ml Bubbelvatten', 'Färsk limeklyfta (för juice och garnityr)'],
            garnish: 'Limeklyfta',
            time: '2 min',
            description: 'En lätt och uppfriskande drink, perfekt för den som vill ha något enkelt och rent. Minimal sötma och fokus på spritens karaktär.',
            profile: {
                sweetness: 'Låg',
                sourness: 'Låg (om inte mycket lime/citron tillsätts)',
                bitterness: 'Ingen',
                pairsWith: 'Sällskap, lättare maträtter, en varm sommardag'
            },
            instructions: [
                'Fyll ett highballglas med is.',
                'Häll i vodka.',
                'Fyll på med bubbelvatten.',
                'Pressa i en limeklyfta och rör om försiktigt.',
                'Garnera med en limeklyfta.'
            ]
        },
        {
            id: 'gin-tonic',
            name: 'Gin & Tonic',
            image: 'https://source.unsplash.com/random/400x300/?ginandtonic',
            ingredients: ['gin', 'bubbelvatten'], // Bubbelvatten för tonic
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
            id: 'margarita',
            name: 'Margarita',
            image: 'https://source.unsplash.com/random/400x300/?margarita',
            ingredients: ['tequila', 'likor', 'juice'], // Likör för Cointreau/Triple Sec, Juice för lime
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
            id: 'mojito',
            name: 'Mojito',
            image: 'https://source.unsplash.com/random/400x300/?mojito',
            ingredients: ['rom', 'bubbelvatten', 'juice'], // Juice för lime
            fullIngredients: ['60 ml Vit Rom', '25 ml Färsk limejuice', '2 tsk Socker', '8-10 Myntablad', 'Bubbelvatten'],
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
                'Toppa med bubbelvatten.',
                'Rör om försiktigt.',
                'Garnera med en myntakvist och en limeklyfta.'
            ]
        },
        {
            id: 'old-fashioned',
            name: 'Old Fashioned',
            image: 'https://source.unsplash.com/random/400x300/?oldfashioned',
            ingredients: ['whiskey', 'bitter'],
            fullIngredients: ['60 ml Bourbon eller Rågwhiskey', '1 sockerbit (eller 5 ml sockerlag)', '2-3 stänk Angostura Bitter', 'En skvätt vatten'],
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
            id: 'mimosa',
            name: 'Mimosa',
            image: 'https://source.unsplash.com/random/400x300/?mimosa',
            ingredients: ['vin', 'juice'], // Vin för mousserande, Juice för apelsin
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
        // Lägg till fler drinkar här med samma struktur
        {
            id: 'long-island-iced-tea',
            name: 'Long Island Iced Tea',
            image: 'https://source.unsplash.com/random/400x300/?longislandicedtea',
            ingredients: ['vodka', 'rom', 'gin', 'tequila', 'likor', 'juice'], // Likör för Triple Sec, Juice för citron/lime
            fullIngredients: [
                '15 ml Vodka', '15 ml Vit Rom', '15 ml Gin', '15 ml Tequila', '15 ml Triple Sec (likör)',
                '25 ml Färsk citronjuice', '30 ml Sockerlag', 'Toppa med Coca-Cola'
            ],
            garnish: 'Citronklyfta',
            time: '5 min',
            description: 'En potent men förvånansvärt god drink som trots namnet inte innehåller någon te. En komplex mix av sprit och syra, maskerad av cola.',
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
        }
    ];

    getSuggestionsBtn.addEventListener('click', () => {
        const selectedAlcohols = Array.from(document.querySelectorAll('.alcohol-options input[type="checkbox"]:checked'))
                                     .map(checkbox => checkbox.value);

        drinkSuggestionsGrid.innerHTML = ''; // Rensa tidigare förslag
        noSuggestionsMessage.classList.add('hidden'); // Dölj meddelandet om inga förslag
        suggestionsArea.classList.add('hidden'); // Dölj förslagområdet initialt

        const matchingDrinks = drinks.filter(drink =>
            drink.ingredients.every(ingredient => selectedAlcohols.includes(ingredient))
        );

        if (matchingDrinks.length > 0) {
            matchingDrinks.forEach(drink => {
                const drinkCard = document.createElement('div');
                drinkCard.classList.add('drink-card');
                drinkCard.dataset.drinkId = drink.id; // Lägg till ID för att identifiera vid klick

                drinkCard.innerHTML = `
                    <img src="${drink.image}" alt="${drink.name}">
                    <div class="drink-card-content">
                        <h3>${drink.name}</h3>
                        <p>${drink.description.split('. ')[0]}.</p> <div class="card-footer">
                            <span>🕒 ${drink.time}</span>
                            <span>✨ ${drink.garnish.split(',')[0]}</span>
                        </div>
                    </div>
                `;
                drinkSuggestionsGrid.appendChild(drinkCard);
            });
            suggestionsArea.classList.remove('hidden'); // Visa förslagområdet
        } else {
            noSuggestionsMessage.classList.remove('hidden'); // Visa meddelandet om inga förslag
            suggestionsArea.classList.remove('hidden'); // Visa förslagområdet även om tomt
        }
    });

    // Hantera klick på drinkkort för att öppna modal
    drinkSuggestionsGrid.addEventListener('click', (event) => {
        const drinkCard = event.target.closest('.drink-card');
        if (drinkCard) {
            const drinkId = drinkCard.dataset.drinkId;
            const selectedDrink = drinks.find(drink => drink.id === drinkId);

            if (selectedDrink) {
                modalDrinkImage.src = selectedDrink.image;
                modalDrinkImage.alt = selectedDrink.name;
                modalDrinkName.textContent = selectedDrink.name;
                modalDrinkDescription.textContent = selectedDrink.description;
                modalDrinkGarnish.textContent = selectedDrink.garnish;
                modalDrinkTime.textContent = selectedDrink.time;

                modalDrinkSweetness.textContent = selectedDrink.profile.sweetness;
                modalDrinkSourness.textContent = selectedDrink.profile.sourness;
                modalDrinkBitterness.textContent = selectedDrink.profile.bitterness;
                modalDrinkPairsWith.textContent = selectedDrink.profile.pairsWith;

                // Fyll ingredienslista
                modalDrinkIngredientsList.innerHTML = '';
                selectedDrink.fullIngredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    modalDrinkIngredientsList.appendChild(li);
                });

                // Fyll instruktionslista
                modalDrinkInstructionsList.innerHTML = '';
                selectedDrink.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.textContent = instruction;
                    modalDrinkInstructionsList.appendChild(li);
                });

                drinkModal.style.display = 'flex'; // Visa modalen (flex för centrering)
            }
        }
    });

    // Stäng modalen när man klickar på X
    closeButton.addEventListener('click', () => {
        drinkModal.style.display = 'none';
    });

    // Stäng modalen när man klickar utanför innehållet
    window.addEventListener('click', (event) => {
        if (event.target === drinkModal) {
            drinkModal.style.display = 'none';
        }
    });
});