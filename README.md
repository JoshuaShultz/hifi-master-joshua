# HI-FI - Markdown -Uge 1
HI-FI projektet blev udarbejdet fra den 18. september til den 6. oktober 2017 opgaven blev stillet på github og forklaret i klassen. Det første jeg gjorde var at ligge en plan for hvad jeg skulle gøre hvad om muligt.

##### Planen for Uge 1  
- Udvikle et design  
- Skitser og Wireframes  
- Undersøge frameworks  
- Opbygge Databasen  
- Statiske sider 
- Billideredigering

#### Mandag d. 18
Første dag på projektet og jeg er allerede i fuld igang med at designe mine skitser af designet derefter lavede jeg wireframes for at have et mere præcist design at gå efter. Det tog lidt længere tid end forventet dog er jeg tilfreds med designet af siden. Jeg sørger for at have sidens funktion med i designet så godt jeg kan.
###### Nåede mål
- Udvikle og designe 80%
- Skiter og Wireframes 40%

#### Tirsdag d. 19
Nu er det tirsdag eftermiddag og jeg er startet på html og css kodning, jeg blev desværre nødt til at starte forefra imorgen da jeg har besluttet at kører siden i bootstrap da det er hurtiger og nemmere. Foruden det er jeg også blevet færdig med Wireframes og skitserne.
###### Nåede mål
- Skiter og Wireframes 100%
- Undersøge frameworks 100%  
- Udvikle og designe 90%
- Statiske sider 30%

#### onsdag d. 20
Idag har jeg ledt efter forskellige moduler til f.eks. Navigationsbar og login forberedende moduler. det går støt og rolig der ud af. Indexsiden er blevet lavet og har sammenhængende navigation mellem Index, produkt- og kontakt-siden. Da jeg skulle til at kigge på slideshow fandt jeg ud af at alle billiderne var i både forskellige formater og størrelse hvilket fik mig til at skabe nye filer med samme størrelse og format jeg brugte progammet: Illustrator da selvom det var en særdeles langsommelig process var betydeligt hurtiger end hvis jeg skulle have brugt illustrator. 
###### Nåede mål
af data undersøgte jeg det grundig hvad andre gjorde. Meget af det grafiske arbejde skulle egentlig bare overståes og det blev det gjordt i denne uge.

#### Torsdag d. 21
Så blev det torsdag og idag lavede jeg databasen. men da jeg så på billiderne i egenskaber var de betydeligt for store så derefter skalerede jeg alle billiderne ned til 50% via en online editor sådan at de cirka var 100px x 200px. da jeg var færdig med det lavede jeg alle databasens produkter med relationer o.s.v. jeg et ER diagram en styleguide og et sitemap over hjemmesiden.
###### Nåede mål
- Udvikle og designe 100%
- Billideredigering 100%
- Opbygge Databasen 80%
- Udvikle og designe 100%

#### fredag d. 22
Fredag den sidste dag i denne uge og det er tid til at organisere lidt og få et overblik jeg har tilføjet nogle af de sidste features på bootstrap siden så som responsive design som breakpoints og bootstrap desktop classes eftersom siden blev udviklet mobile first. de sidste relationer blev også dannet i databasen. de sidste ting er ved at falde på plads.

###### Ugens fremskridt.
- Udvikle et design  100%
- Skitser og Wireframes 100%
- Undersøge frameworks 100%
- Opbygge Databasen 100%
- Statiske sider 100%
- Billideredigering 10er 100%
- Fetch data 80%

## Evaluering Uge 1
(OBS var syg torsdag og fredag)
Set i backspejlet burde jeg havde haft mere fokus allerede her på fetch fra databasen men jeg valgte at øve mig ekstra i at bruge bootstrap eftersom jeg før den første uge her ikke var særligt rutineret i praksis i bootstrap. selvom jeg ikke arbejdede med udtrækning 

# HI-FI - Markdown -Uge 2
##### Planen for Uge 2  
- Oprettelse af api
- Node server  
- Fetch Data  
- Data element  
- Dynamiske side 
- Søge med api
- Infodropdown
- Mappeordning

#### Mandag d.25
Nu er det mandag og det er tid til at gøre siden dynamisk med info fra databsen via et api, så jeg startede med at sætte apiet op fra franks model sådan at jeg via apiet kan kalde på databasen via et npm install mysql2, express og restify. jeg organiserede blandt andet også hele mit mappesystem.
###### Nåede mål
- Mappeordning 100%
- Oprettelse af api 40%
- Node frontend server 40%

#### Tirsdag d.26
Takket være Emil berg fik jeg forklaret helt hvordan apiet fungere efter det lavet videre på dets routes. efter at have lave apiet færdigt fetchede jeg apiet fra et script tag i html dokumentet i produkter. der var en hel del problemer med at få alle data ind fra databsen hvilket skyldes nogle simple fejlstavninger i databasen.
###### Nåede mål
- Mappeordning 100%
- Oprettelse af api 80%
- Node frontend serv

#### Torsdag d.28
Det er nu endelig torsdag og jeg har været igennem flere løsninger til at loade data ind i forskellige elementer så det endte med at jeg fik hjælp af Emil igen til løsningen på det så det vi gjorde var man laver en "Skabelon" og lave foreach med en genereret id der kopiere htmlen og paster den for hver gang der bliver fetched et element.
###### Nåede mål
- Oprettelse af API 100%
- Fetch data 100%
- Dynamiske side 70%

#### fredag d.29
Fredagen er her og jeg har fuldført skabelon elementet og integreret et google kort på kontaktsiden der manglede kun et element mere til elementet der skulle kopieres et dropdown panel med mere info om pruduktet hvilket var et langt sværer arbejde end jeg troede fordi det panel jeg integrerede var lang sværer end jeg troede fordi panelet brugte et id. både forside og kantaktside loader data fra databasen.
###### Nåede mål
- Dynamiske side 100%

###### Ugens fremskridt.
- Oprettelse af api 100%
- Node server 100%
- Fetch Data 100%
- Data element 80% 
- Dynamiske side 100% 
- Søge med api 100%
- Infodropdown 80%
- Mappeordning 100%

## Evaluering Uge 2
I denne uge fokuserede jeg særligt på data og data udskrivelse og i min optik gik det meget godt selvom der var en del frem og tilbage i udviklingprocessen selvom man har fundet en løsning der virker er det desværre ikke altid den rigtige løsning hvilket jeg kan relatere til i lyset af praktikugen. jeg nåede desværre ikke integrere søgning på siden ligeså nåede jeg heller ikke at finde en løsning på infodropdown eftersom alle de elementer jeg har set bruger IDer. Der har været lidt svært at finde hjælp på internettet til at fetche data fra databasen da de fleste bruger det javabaseret databaseprogram Mongodb


##### Planen for Uge 3 
- Kategorier
- Infodropdown
- Søgning    
- Login  
- Data element 
- Info Dropdown 
- Aflevering

#### Mandag d.2
Idag fandt jeg løsningen på sidste uges problem med mine element dropdown ved hjælp af gennemsøgning på internetet i alt for lang tid jeg fandt et panel der kunne det samme og kun brugte classes og en smule javascript til at dropdown med info, nu var der kun et problem den starter med at være nede så jeg måtte analysere javascriptet og jeg fandt ud af at det blev gjordt ved at tilføje en class ved javascript hver gang man trykker. så måden jeg ville gøre det modsatte var at tilføje den class der skulle lukke den og fjerne den med javascript, men jeg kunne ikke få det til at virke og tidsbudgettet er ved at løbe ud.
###### Nåede mål
- Data element 90%
- Info Dropdown 90%

#### Tirsdag d.3
Idag arbejdede jeg med at lave søgefunktion ved at tilføje først en app get i APIet og derefter behandle de data i javascriptet ved at først clear alle dataelementer og derefter søge fra inputet på navn, beskrivelse og pris, dette fungere i teorien men der er et problem med at vise produkterne fordi de forsvinder efter 5 millisekunder(estimeret) 
###### Nåede mål
-Søgning 90%

#### Onsdag d.4
Idag prøvede jeg at lave en søgefunktion via jquary og datafilter hvilket var en særdeles besværlig process, selom jeg brugte lang tid på det måtte jeg konkludere at jeg ikke kunne på Id kopierings systemet til at duplikere for hver element i databasen. 
###### Nåede mål
- Kategorier 50%

#### Torsdag d.5
Torsdag forsøgte jeg at igen at få den til at duplikere mine elementer, men da så jeg at hele systemet baserede sig på classes i boxens header så jeg endte med at konkludere at for at skulle kunne tilføje en specifik class til hver skulle jeg ikke kun lave databasen om og lave en udbygning i APIet til at få javascript til at tilføje en class. Så det var klart at det var vigtigere at fokuserer på det sidste i søgningen.
###### Nåede mål
- Ingen nåede mål :(

#### fredag d.6
Fredag afleveringsdag fuld fart og fokus på søgning jeg fandt ud af at søgningens fejlen skyldes af uforklarelige årsager udelukkende af at søgningen var i navigationsbaren. Så fik vi at vide at der skulle afleveres på 365 så jeg ordnede jeg mappestrukturen og skrevet den sidste markdown for idag.
###### Nåede mål
-aflevering

## Evaluering Uge 3
Den sidste uge har været særligt lærerig og vigtig for at få sat alt den information vi lærte de sidste forrige uger i praksis. selvom jeg nogle gange har være lidt fustreret med projektet har det været givdigt for routine og forståelse 

##### Planen for Uge 4 
I denne uge vil jeg særligt fokusere på to opgaver nemlig logind system og et cms til produkter. 
## Mål
- statisk
- Produkt 
- tilføj
- rediger
- produktliste

#### Mandag d.6
Mandag, jeg er gået igange med at lave en admin administrerede side til at kunne ændre mine produkter, så jeg startede først med at lave en statisk side til hele adminpanelet. så efter noget søgen fik jeg den påkrævede viden til at udbygge mit api til at trække produktinfo ind på panelets første side med oversigten over alle produkterne.
###### Nåede mål
- statisk 60%
- Produkt 100%
- produktliste 20%

#### Tirsdag d.7
Idag fik jeg endelig krammet på hvordan jeg skulle loade alle produkterne ind gennem min route, som jeg egentligt bare kopierede og rettede til med de tilsvarende data som skulle loades ind. Desuden har jeg opdateret det statiske design på opret produkt siden.
###### Nåede mål
- tilføje 60%
- statisk 70%
- produktliste 100%

#### Onsdag d.8
Idag kiggede jeg lidt på hvordan jeg kunne tilføje produkter til min hjemmeside via mit adminpanel, her brugte jeg en udlagt opgave som oprindeligt var beregnet til at gemme beskeder i databasen, hvilket ville virke perfekt til at tilføje produkter med deres relevante oplysninger.
###### Nåede mål
- tilføje 100%
- statisk 80%

#### Torsdag d.9
Idag er jeg begyndt på at forsøge at lave funktionen til at kunne redigere, jeg har allerede fået loaded mit indholde ind, men jeg skal finde en metode til at få overskrevet de eksiterende data i databasen. jeg har nu prøvet at overskrive dataerne ved at opdatere min databasen når man trykker på bekræft.
###### Nåede mål
- Redigere 100%
- statisk 90%

#### Fredag d.10
Ved ikke med sikkerhed hvad der skete, men måtte installere alle modulerne igen, så jeg vil gætte på jeg har droppet alle node modulerne i en eller anden form for mappe koruption. Derefter lavede jeg en funktion til at kunne slette produkter fra databasen 
###### Nåede mål
- GENOPRETNING 100%
-  Slette %100

## Evaluering Uge 4
Denne uge har været ganske lærrig og jeg har fordybet forståelsen for hvordan jeg både kan tilføje funktioner ved modifikationer eller tilføjelser, gennem moduler og tilføjelser af javascript. ikke den mest produktive uge men den mest lærerige

##### Planen for Uge 5
- Mappesystemet
- redirect
- logind
- logud
- beskeder
- frontend

#### Mandag d.13
Idag har jeg arbejdet med at oprette loginsystemet ved hjælp af den fremlagte kode på github og lave en Admin mappe med seperat frontend system og planlægger hvordan jeg vil gøre det umuligt at komme ind på admin siden uden at have login token i local storage, udover det har jeg tænkt mig at lave mit eget besked system til kunder med spørgsmål, klager og beskeder til moderatorer og butiksejere.
###### Nåede mål
- Mappesystemet 100%
- frontend 45%

#### Tirsdag d.14
Idag har jeg arbejdet med lukke normale brugere ud ved a kun kunne komme ind gennem Tokens du får når du logger ind, derefter lavede jeg en landingpage for når du endten logger ud eller prøver at komme ind uaftoriseret, ligeså har jeg også lavet javascripten til at redirect dig til landingpagen.
###### Nåede mål
- redirect 70%
- logind 80%
- frontend 60%

#### Onsdag d.15
Idag har jeg tænkt mig at lave mit eget besked system til kunder med spørgsmål, klager og beskeder, jeg startede med at ændre min kontaktside til de classes jeg havde valgt dataerne skulle gemmes som for at gøre proscessen at trække dem ind i adminpanelet nemmere.
derefter brugte jeg samme kode som produktsiden bare med andre data til at trække dataerne ind i kontakten.
###### Nåede mål
- beskeder 100%
- frontend 80%

#### Torsdag d.16
Idag har jeg tilføjet at man bliver redirected tilbage til produktlisten når du trykker bekræft på opret produkterne. efter det har jeg sikret du ikke kan kommer rundt på admin siden uden den token i local storage, ellers ryger man ud til en landingpage. her har jeg tilføjet en lille navigation til at kunne komme til de forskellige sider efter hvilket formål du har.
###### Nåede mål
- frontend 100%
- logind 100%

#### Fredag d.17
Idag lavede jeg først logud ved at slette din session token sådan at man bliver smidt ud til landingpage.
###### Nåede mål
- logud 100%

## Evaluering Uge 5
Denne uge har særligt været både lærererig og rutinedannende, i den forstand at jeg både har lært en masse nye måder at gøre tingene på men også hvordan jeg kan omformatere min kode til at tilpasse de forskellige foremål.

##### Planen for Uge 6 
I denne uge vil jeg forsøge at optimere brugerens oplevelse så som at loade produktdata in på en side hver gang du vælger et produkt.
## Mål
- Produkt side
- billideupload
