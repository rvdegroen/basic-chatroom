# data management

longpolling = met een interval
sockets = open verbinding (handiger bij veel verkeer)

- list items na een paar dingen verwijderen (client side) (deel van de data op de server bijhouden/laatste 50 berichte, hele history staat in de server net als whatsapp) = DATA MANAGEMENT

## live code voorbeeld

### longpolling voor ticks/ iedereen tegelijk een bericht op een update stuurt vanaf de server

- hoe je vanaf de server eeb bericht stuurt

- function call(io) {
  io emit ("whatever mesg", "somebody set up us the bomb")
  }

  - emit wahtever

- "somebody set up us the boost" , body van event

voor aanroepen van lijn 14 functie, kan je intrval zeeten:

setinterval(call, 250, io);

- cleint side moet ook een listener schrijven

(code is gecopypaste)

socket.on("whatever", (message) => {
message.appencdhild(object).assign(dcoument.createlement("li"))
})

- listener .on(whatever) geschreven

> zo kan je ticks maken in een game

### hoe je hisotry bijhoudt in de server

bijhouden van het datamodel op de sevr

const historysize = 50;
let history = [];

---

socket.on(message", (message) => {
io.emit("history", history)

---

socket.on("message)
while emit (history.length > historysize) {
hsitory.shift
}
hsitory.push(message)
io.emit("message", message)
})

- shift > bericht weghalen achter de array
- pop > bericht weghalen aan bein van de

client side:

socket.on("history", history) => {
history.forech(message => {
call.message
})
}

---

drawing:
server: emit wwahtever
emit history

client: onwhtever
on.history

- als je op de server wilt bouwen, dan bouw je eerst op de server
- als je op de client wilt bouden, dan bouw je andersom

> staat op ju5tu5/barebonechat > repo name

## dos attack

request mag 8 kb zijn met adaptable, response mag 1 mb zijn.

- te veel emoji's > boven de 8 kb
- server wordt unresponsive
- denial of service dos = in je eentje, ddos is distrubuted met meerdere mensen (anonymous doen dat)
- je kan je beschermen door bepaald verkeer niet doorlaten (congestion vermijden)

# wireflow voor realtime web apps

dataflow diagram

welke data leeft in de context van je app en op welke punten komt de data jouw app binnen. vanaf waar kan data gemanipuleerd worden?

- server vraagt quotes op en dat komt weer op de server,
- database, als de gebruiker connect worden de scores opgevraagd
- het is een game
- de quote moet matchen met de input
- het is een guessing game
- client stuurt input en de highscore word opgeslagen in de database

spotify responsen, client side events, data vanuit de database > allemaal color coded

asciiflow.com

## how to make one:

- teken eerst de grote componentne
- wat is er aanwezig
- pijlen lijnen
- voeg lijenen voor sturen en recieving van data / http request, socket response, type connectie
- voeg de data flow tijdens de readme

# maandag:

- api kiezen en hoe de data flow eruit ziet met asciiflow
- 3 concepten en 1 kiezen
- kern van core functionaliteit van concept uitwerken
- bijhorende data lifeccycle diagram

# Ideeën

## Functies

- emoji;s
- someone's typing
- username
- timestamp
- max size of characters you can send/ max 1 file
- list items na een paar dingen verwijderen (client side) (deel van de data op de server bijhouden/laatste 50 berichte, hele history staat in de server net als whatsapp) = DATA MANAGEMENT
- belletjes toevoegen
- kleur klikken waardoor de achtergrondkleur veranderd
- offline teken geven dat de functie niet meer werkt

## Ideeën

- applicatie met een games app, om games in te loaden als play ding en dan kan je erover praten. de game kan je op een "tafel" leggen zodat iedereen deze kan zien.
