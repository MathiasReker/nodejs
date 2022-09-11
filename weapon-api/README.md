# Weapon REST API

## Steps to setup

1. Clone the application

```bash
git clone https://github.com/MathiasReker/nodejs.git && cd nodejs/weapon-api
```

2. Install the dependencies

```bash
npm install
```

3. Start the application

```bash
node app.js
```

The app will start running at http://localhost:8080

## Explore Rest APIs

| HTTP Method | Endpoint            | Description                       | Sample Request payload    |
|-------------|---------------------|-----------------------------------|---------------------------|
| GET         | /weapons            | Returns all weapons               | [JSON](#weapons)          |
| GET         | /weapons/{id}       | Returns weapon by id              | [JSON](#weapons-id)       |
| GET         | /manufacturers      | Returns all weapon manufacturers  | [JSON](#manufacturers)    |
| GET         | /manufacturers/{id} | Returns weapon manufacturer by id | [JSON](#manufacturers-id) |
| GET         | /types              | Returns weapon types              | [JSON](#types)            |
| GET         | /currencies         | Returns all currencies            | [JSON](#currencies)       |

## Sample JSON Request Payloads

##### <a id="weapons">Weapons -> /weapons</a>

```json
[
  {
    "1": "ak-47"
  },
  {
    "2": "m4-a"
  }
]
```

##### <a id="weapons-id">Weapon ID -> /weapons/{id}</a>

```json
{
  "id": 1,
  "price": 700,
  "currency": "USD",
  "recoil": 30,
  "fireRate": 600,
  "ammo": "30/120",
  "type": "Riffle",
  "manufacturers": [
    {
      "country": "Russia",
      "name": "Kalashnikov Concern"
    },
    {
      "country": "China",
      "name": "Norinco"
    }
  ],
  "name": "ak-47"
}
```

##### <a id="manufacturers">Manufacturers -> /manufacturers</a>

```json
[
  {
    "1": {
      "country": "Russia",
      "name": "Kalashnikov Concern"
    }
  },
  {
    "2": {
      "country": "China",
      "name": "Norinco"
    }
  },
  {
    "3": {
      "country": "USA",
      "name": "Colt's Manufacturing Company, LLC"
    }
  }
]
```

##### <a id="manufacturers-id">Manufacturer ID -> /manufacturers/{id}</a>

```json
{
  "country": "Russia",
  "name": "Kalashnikov Concern"
}
```

##### <a id="types">Types -> /types</a>

```json
[
  {
    "1": "Riffle"
  },
  {
    "2": "Pistol"
  }
]
```

##### <a id="currencies">Currencies -> /currencies</a>

```json
[
  {
    "1": "USD"
  },
  {
    "2": "EUR"
  }
]
```