# Refleksjons notat - oppgave 3

I oppgave 1 fikk vi en utfordring med å gjenskape et dashboard med responsiv design.

## Relevans fra pensum
Først og fremst fikk vi bruk for egenskapene fra meta taggen i head viewport som lagrer informasjon om 
størrelsen på skjermen til brukeren.

Vi brukte mye semantisk html for å definere de forskjellige delene av siden. 
For å dele opp siden brukte vi header, main, aside og footer.
Det gjorde det rimelig lett å jobbe med de forskjellige elementene

Vi fikk brukt mye css grid, flex og media queries, vi brukte grid og grid area til definere 
grunnstrukturen til siden. Vi delte også opp main med flere grids, det gjorde jobben med å få 
siden responsiv enklere.  

I tillegg fikk vi brukt svg til å tegne en enkel graf med x,y akse og linjer for å presentere data. 

## Tre valg

Vi valgte å bruke css grid, og grid areas for å definere layout på siden.

Vi kunne brukt min-width og max-width, men det ville ført til at siden ikke ville blitt særlig responsiv.
Vi kunne også brukt flexbox, men det vill gjort det vanskeligere å få siden til å se bra ut i telefon størrelse.
vi brukte media queries for å håndtere flere skjermstørrelser ved å sette brekkpunkter hvor layouten på siden forandret seg, vi hadde tre makro layouts og inne i de forskjellige elementene brukte vi mikro layouts for å få ting til passe.  

I hamburger-menyen valgte vi å bruke ren css , det var en utfordring 
Vi løste det ved å bruke linear gradient til å tegne strekene. Vi kunne også valgt å bruke ikoner eller svg for å løse dette 
Vi kunne valgt javascript med en "eventlistener" til å håndtere at brukeren trykket på menyen .

Vi begynte å bruke css variabler, men fant ut at de ikke var så veldig nyttige på et såpass lite prosjekt, men 
vi ser nytten i større prosjekt og i en "ekte" nettside.