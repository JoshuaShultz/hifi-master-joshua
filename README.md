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
###### Nåede målaf data undersøgte jeg det grundig hvad andre gjorde. Meget af det grafiske arbejde skulle egentlig bare overståes og det blev det gjordt i denne uge.

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



## Evaluering Uge 1
(OBS var syg torsdag og fredag)
Set i backspejlet burde jeg havde haft mere fokus allerede her på fetch fra databasen men jeg valgte at øve mig ekstra i at bruge bootstrap eftersom jeg før den første uge her ikke var særligt rutineret i praksis i bootstrap. selvom jeg ikke arbejdede med udtrækning 

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

## Evaluering Uge 2
I denne uge fokuserede jeg særligt på data og data udskrivelse og i min optik gik det meget godt selvom der var en del frem og tilbage i udviklingprocessen selvom man har fundet en løsning der virker er det desværre ikke altid den rigtige løsning hvilket jeg kan relatere til i lyset af praktikugen. jeg nåede desværre ikke integrere søgning på siden ligeså nåede jeg heller ikke at finde en løsning på infodropdown eftersom alle de elementer jeg har set bruger IDer. Der har været lidt svært at finde hjælp på internettet til at fetche data fra databasen da de fleste bruger det javabaseret databaseprogram Mongodb

###### Ugens fremskridt.
- Oprettelse af api 100%
- Node server 100%
- Fetch Data 100%
- Data element 80% 
- Dynamiske side 100% 
- Søge med api 100%
- Infodropdown 80%
- Mappeordning 100%

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
- Logind (CMS)
- produkt (cms)
