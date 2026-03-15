# Task 2 - API (Application Programming Interface)


## What is an API?

An API (Application Programming Interface) is a way for two different
software applications to communicate with each other. It acts as a
messenger that takes a request from one application, sends it to another,
and returns the response back.

A simple analogy: In a restaurant, the waiter takes your order to the
kitchen and brings back your food. The waiter is like an API — it connects
you (the user) to the kitchen (the server) without you needing to go there
yourself.

---

## How API Works
```
User Input (City/Currency)
        ↓
Our Web App sends HTTP Request
        ↓
External API Server receives request
        ↓
API Server fetches live data
        ↓
Returns JSON response
        ↓
Our App displays the data to user
```

---

## What I Built — Currency Converter

I built a **live Currency Converter web app** using the
**ExchangeRate API** (api.exchangerate-api.com). The app allows users
to convert between major world currencies using live exchange rates
fetched directly from the API.

---

## Features of the App

- Convert between 11 major currencies including USD, EUR, GBP, INR,
JPY, AUD, CAD, CHF, CNY, SGD and AED
- Live exchange rates fetched in real time from ExchangeRate API
- Swap button to instantly reverse the conversion direction
- Quick conversion chips for popular pairs like USD→INR, EUR→INR
- Shows exact exchange rate used for the conversion

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Structure of the webpage |
| CSS | Styling and layout |
| JavaScript | Logic and API calls |
| ExchangeRate API | Live currency exchange rates |
| Fetch API | Making HTTP requests to the API |

---

## How the API Call Works
```javascript
const res = await fetch(
  `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
);
const data = await res.json();
const rate = data.rates[toCurrency];
const result = amount * rate;
```

- `fetch()` sends an HTTP GET request to the API
- The API returns a JSON object with all exchange rates
- We extract the rate for our target currency
- Multiply by the amount to get the converted value

---

## What is JSON?

JSON (JavaScript Object Notation) is the format APIs use to send data.
It looks like this:
```json
{
  "base": "USD",
  "rates": {
    "INR": 83.45,
    "EUR": 0.92,
    "GBP": 0.79
  }
}
```

---

## What I Learned

- What an API is and how it works
- How to make HTTP requests using JavaScript fetch()
- How to parse and use JSON data returned by an API
- How live data can be fetched and displayed in real time
- How to build a functional web app using HTML, CSS and JavaScript

---

## Pics

![Currency Converter App](pics/task2_currency_converter.png)

---

## Conclusion

Through this task I learned how APIs work in real world applications.
The Currency Converter app fetches live exchange rates and displays
them instantly — this is exactly how apps like Google Finance and
banking apps work. APIs are fundamental to modern software development
and this task gave me hands on experience in using them.

---

*Report by: Prajwal Dhannur*