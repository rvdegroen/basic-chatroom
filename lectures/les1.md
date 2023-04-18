- we gaan een real-time chat omgeving realiseren, vandaag in een groepje, komende 2 weken gaan we in een groepje het toepassen. / zoiets is als teams
- Tekenen van de data-stromingen is ingewikkelde
- het is een multi user environment

# Opdracht

- opzet en eindopdracht
- realtime uitleg
- barebone chat app
- deploy op adaptable (cyclic doet geen sockets)
- opdracht voor vandaag

we leren hoe we een real time app bouwen waarbij sockets openblijven

##

- rest request: delete, post, get, etc.
- mariadb

- net als /public, gaan we een /socket.io maken
- connectie die ALTIJD open blijven staan, ze hebben een state (erver)
- als je kan met 40 mensen chatten, dan zijn er 40 sockets open

- socket vanaf een cleint een bericht op zet, de socket die kijkt wat doe ik ermee en propageert dat naar alle clients (dat je het terug ziet)
- rond communicatie
- 6 verschillende handelingen kunnen op een client gezet worden
- een real time game, heeft heel veel communicatie op de server

# single threaded event loop

# nl ziet = online streamingsdienst

# waarom geen sockets?

- livetv werkt op schem, het programma is altijd op de minuut uitgewerkt
- het interval is makkelijker hierdoor

# waarom wil je socket zien?

- updaten van een document in een server kan wel via sockets: het is een user interactie en die wil je instantly zien

# to do list

- pls watch the service worker video

- look up video on how to make a real time explanation video
- tutorial on how to make a real time chatroom
- video real time web sockets video
- video single threaded event loop

github/blanger/multiplayer-game

# code voorbeeld

- socket.io doet een heleboel voor je
- het lukt niet goed om een socket.io socket te openen, dan valt ie terug naar long REST
- event.preventDefault for form removes refreshing the website and prevents it from going to another page
- hij emit een value op de cosket van de input.message
- proageren line 13
- listeners and triggeren is een observeable pattern
- book reasuble elements of object orientated software
- messages.scrollTop = messages.scrollHeight

# notes: form autocomplete:on

# server side

- express
- app
- http.creatserver(app) (app is express)
- io = socket.io(http)
- path
- env (env port || 4242)

app.use(express.static(path.resolve("public")))

<!-- on is a listener -->

io.on("connection", (socket)) => {
cosnole.log("whatever")

<!-- als je wilt luisteren dan doe je dat op de socket -->

    socket.on("message" , (message) => {
        <!-- HIER WORD GEPROGRAGEERT, dan worden alle messages ge-emit naar clients -->
        io.emit("message", message)
    })

    <!-- je kan ook gebruikers interactie wilt -->
    socket.on("disconnect", ( ) => {
        console.log("user disconnected")
    })

}

- je kan zelf bepalen wat voor event een user gebruikt, kan ook pijtljes of een jump of een hit.

http.listen(port)

# deployen naar adaptable
