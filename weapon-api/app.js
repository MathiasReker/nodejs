const app = require('express')();

const weapons = new Map,
    specs = new Map,
    types = new Map,
    currencies = new Map,
    manufacturers = new Map,
    countries = new Map;

let weaponId = 1,
    typeId = 1,
    currencyId = 1,
    manufacturerId = 1,
    countryId = 1;

function addAttr(id, attr, map, showId = false) {
    if (showId) {
        attr = {
            id: id, ...attr
        };
    }

    map.set(id, attr);
}

function addWeapons(list) {
    list.forEach(el => {
        addAttr(weaponId++, el, weapons);
    });
}

function addCurrencies(list) {
    list.forEach(el => {
        addAttr(currencyId++, el, currencies);
    });
}

function addTypes(list) {
    list.forEach(el => {
        addAttr(typeId++, el, types);
    });
}

function addManufacturers(list) {
    list.forEach(el => {
        addAttr(manufacturerId++, el, manufacturers);
    });
}

function addCountries(list) {
    list.forEach(el => {
        addAttr(countryId++, el, countries);
    });
}

function addSpecs(id, el) {
    el.name = weapons.get(id);

    addAttr(id, el, specs, true);
}

function response(res, map) {
    const objects = [];
    map.forEach((el, id) => {
        objects.push({
            [id]: el
        });
    });

    res.send(objects);
}

function responseById(res, req, map) {
    const object = map.get(+req.params.id);

    res.send(object);
}

addTypes(['Riffle', 'Pistol']);

addCurrencies(['USD', 'EUR']);

addCountries(['Russia', 'USA', 'China']);

addManufacturers([{
    country: countries.get(1),
    name: 'Kalashnikov Concern',
}, {
    country: countries.get(3),
    name: 'Norinco',
}, {
    country: countries.get(2),
    name: 'Colt\'s Manufacturing Company, LLC',
}]);

addWeapons(['ak-47', 'm4-a']);

addSpecs(1, {
    price: 700,
    currency: currencies.get(1),
    recoil: 30,
    fireRate: 600,
    ammo: '30/120',
    type: types.get(1),
    manufacturers: [manufacturers.get(1), manufacturers.get(2)],
});

addSpecs(2, {
    price: 900,
    currency: currencies.get(1),
    recoil: 21,
    fireRate: 600,
    ammo: '20/75',
    type: types.get(1),
    manufacturers: [manufacturers.get(3), manufacturers.get(2)],
});

app.get('/weapons', (req, res) => {
    response(res, weapons);
});

app.get('/weapons/:id', (req, res) => {
    responseById(res, req, specs);
});

app.get('/manufacturers', (req, res) => {
    response(res, manufacturers);
});

app.get('/manufacturers/:id', (req, res) => {
    responseById(res, req, manufacturers);
});

app.get('/types', (req, res) => {
    response(res, types);
});

app.get('/currencies', (req, res) => {
    response(res, currencies);
});

app.listen(8080);
