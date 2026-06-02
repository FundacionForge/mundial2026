// ================================================================
// CONFIG — COMPLETAR ANTES DE PUBLICAR
// ================================================================
const CONFIG = {
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwsCzzkQ-YyuzA7GA2aBE7z_u8Ok7XumuJZ44M0OuQe0Skadz_S30lq6cAgvvFDN7W6/exec',
  ADMIN_PASS: 'mundial2026',
};

// Fecha del inicio del Mundial (cierre por defecto si no se configura otra)
const FECHA_MUNDIAL = new Date('2026-06-11T12:00:00');

// 48 equipos clasificados al Mundial 2026 (USA · CAN · MEX)
// Fuente: Jugadoresmundial2026.json (lista oficial de participantes)
const EQUIPOS_2026 = [
  "Alemania", "Arabia Saudita", "Argelia", "Argentina",
  "Australia", "Austria", "Bélgica", "Bosnia y Herzegovina",
  "Brasil", "Cabo Verde", "Canadá", "Colombia",
  "Corea del Sur", "Costa de Marfil", "Croacia", "Curazao",
  "Ecuador", "Egipto", "Escocia", "España",
  "Estados Unidos", "Francia", "Ghana", "Haití",
  "Inglaterra", "Irak", "Irán", "Japón",
  "Jordania", "Marruecos", "México", "Noruega",
  "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay",
  "Portugal", "Qatar", "República Checa", "República Democrática del Congo",
  "Senegal", "Sudáfrica", "Suecia", "Suiza",
  "Túnez", "Turquía", "Uruguay", "Uzbekistán",
].sort();

// ================================================================
// JUGADORES — Lista oficial y FIJA de las 48 selecciones (1260 jugadores)
// Fuente: Jugadoresmundial2026.json. Formato: "Nombre Apellido (ABR)".
// No se modifica desde APIs externas (ver INIT).
// ================================================================
const SELECCIONES = [
  { pais: "Alemania", players: [
    "Aleksandar Pavlovic (ALE)",
    "Alexander Nübel (ALE)",
    "Angelo Stiller (ALE)",
    "Antonio Rüdiger (ALE)",
    "David Raum (ALE)",
    "Deniz Undav (ALE)",
    "Felix Nmecha (ALE)",
    "Florian Wirtz (ALE)",
    "Jamal Musiala (ALE)",
    "Jamie Leweling (ALE)",
    "Jonathan Tah (ALE)",
    "Joshua Kimmich (ALE)",
    "Kai Havertz (ALE)",
    "Lennart Karl (ALE)",
    "Leon Goretzka (ALE)",
    "Leroy Sané (ALE)",
    "Malick Thiaw (ALE)",
    "Manuel Neuer (ALE)",
    "Maximilian Beier (ALE)",
    "Nadiem Amiri (ALE)",
    "Nathaniel Brown (ALE)",
    "Nick Woltemade (ALE)",
    "Nico Schlotterbeck (ALE)",
    "Oliver Baumann (ALE)",
    "Pascal Gross (ALE)",
    "Waldemar Anton (ALE)"
  ] },
  { pais: "Arabia Saudita", players: [
    "Abdulelah Al Amri (KSA)",
    "Abdullah Al Hamdan (KSA)",
    "Abdullah Al Khaibari (KSA)",
    "Ahmed Alkassar (KSA)",
    "Alaa Al Hejji (KSA)",
    "Ali Lajami (KSA)",
    "Ali Majrashi (KSA)",
    "Ayman Yahya (KSA)",
    "Feras Al Brikan (KSA)",
    "Hassan Kadesh (KSA)",
    "Hassan Tambakti (KSA)",
    "Jehad Thakri (KSA)",
    "Khalid Al Ghannam (KSA)",
    "Mohamed Al Owais (KSA)",
    "Mohamed Kanno (KSA)",
    "Mohammed Abu Alshamat (KSA)",
    "Moteb Al Harbi (KSA)",
    "Musab Al Juwayr (KSA)",
    "Nasser Al Dawsari (KSA)",
    "Nawaf Al Aqidi (KSA)",
    "Nawaf Boushal (KSA)",
    "Saleh Al Shehri (KSA)",
    "Salem Al Dawsari (KSA)",
    "Saud Abdulhamid (KSA)",
    "Sultan Mandash (KSA)",
    "Ziyad Al Johani (KSA)"
  ] },
  { pais: "Argelia", players: [
    "Achraf Abada (ALG)",
    "Adil Boulbina (ALG)",
    "Aïssa Mandi (ALG)",
    "Amine Gouiri (ALG)",
    "Anis Hadj Moussa (ALG)",
    "Farès Chaïbi (ALG)",
    "Fares Ghedjemis (ALG)",
    "Hicham Boudaoui (ALG)",
    "Houssem Aouar (ALG)",
    "Ibrahim Maza (ALG)",
    "Jaouen Hadjam (ALG)",
    "Luca Zidane (ALG)",
    "Melvin Masstil (ALG)",
    "Mohamed Amine Amoura (ALG)",
    "Mohamed Amine Tougai (ALG)",
    "Nabil Bentaleb (ALG)",
    "Nadir Benbouali (ALG)",
    "Oussama Benbot (ALG)",
    "Rafik Belghali (ALG)",
    "Ramiz Zerrouki (ALG)",
    "Ramy Bensebaini (ALG)",
    "Rayan Ait Nouri (ALG)",
    "Riyad Mahrez (ALG)",
    "Samir Chergui (ALG)",
    "Yassine Titraoui (ALG)",
    "Zinedine Belaid (ALG)"
  ] },
  { pais: "Argentina", players: [
    "Alexis Mac Allister (ARG)",
    "Cristian Romero (ARG)",
    "Emiliano Martínez (ARG)",
    "Enzo Fernández (ARG)",
    "Exequiel Palacios (ARG)",
    "Facundo Medina (ARG)",
    "Gerónimo Rulli (ARG)",
    "Giovani Lo Celso (ARG)",
    "Giuliano Simeone (ARG)",
    "Gonzalo Montiel (ARG)",
    "Jose Manuel López (ARG)",
    "Juan Musso (ARG)",
    "Julián Álvarez (ARG)",
    "Lautaro Martínez (ARG)",
    "Leandro Paredes (ARG)",
    "Leonardo Balerdi (ARG)",
    "Lionel Messi (ARG)",
    "Lisandro Martínez (ARG)",
    "Nahuel Molina (ARG)",
    "Nico Paz (ARG)",
    "Nicolás González (ARG)",
    "Nicolás Otamendi (ARG)",
    "Nicolás Tagliafico (ARG)",
    "Rodrigo De Paul (ARG)",
    "Thiago Almada (ARG)",
    "Valentín Barco (ARG)"
  ] },
  { pais: "Australia", players: [
    "Aiden O'Neill (AUS)",
    "Ajdin Hrustic (AUS)",
    "Alessandro Circati (AUS)",
    "Awer Mabil (AUS)",
    "Aziz Behich (AUS)",
    "Cameron Burgess (AUS)",
    "Cameron Devlin (AUS)",
    "Connor Metcalfe (AUS)",
    "Cristian Volpato (AUS)",
    "Harry Souttar (AUS)",
    "Jackson Irvine (AUS)",
    "Jacob Italiano (AUS)",
    "Jason Geria (AUS)",
    "Jordan Bos (AUS)",
    "Kai Trewin (AUS)",
    "Lucas Herrington (AUS)",
    "Mathew Leckie (AUS)",
    "Mathew Ryan (AUS)",
    "Milos Degenek (AUS)",
    "Mohamed Toure (AUS)",
    "Nestory Irankunda (AUS)",
    "Nishan Velupillay (AUS)",
    "Patrick Beach (AUS)",
    "Paul Izzo (AUS)",
    "Paul Okon-Engstler (AUS)",
    "Tete Yengi (AUS)"
  ] },
  { pais: "Austria", players: [
    "Alessandro Schopf (AUT)",
    "Alexander Prass (AUT)",
    "Alexander Schlager (AUT)",
    "Carney Chukwuemeka (AUT)",
    "Christoph Baumgartner (AUT)",
    "David Affengruber (AUT)",
    "David Alaba (AUT)",
    "Florian Grillitsch (AUT)",
    "Florian Wiegele (AUT)",
    "Kevin Danso (AUT)",
    "Konrad Laimer (AUT)",
    "Marcel Sabitzer (AUT)",
    "Marco Friedl (AUT)",
    "Marko Arnautovic (AUT)",
    "Michael Gregoritsch (AUT)",
    "Michael Svoboda (AUT)",
    "Nicolas Seiwald (AUT)",
    "Patrick Pentz (AUT)",
    "Patrick Wimmer (AUT)",
    "Paul Wanner (AUT)",
    "Philipp Lienhart (AUT)",
    "Philipp Mwene (AUT)",
    "Romano Schmid (AUT)",
    "Sasa Kalajdzic (AUT)",
    "Stefan Posch (AUT)",
    "Xaver Schlager (AUT)"
  ] },
  { pais: "Bélgica", players: [
    "Alexis Saelemaekers (BEL)",
    "Amadou Onana (BEL)",
    "Arthur Theate (BEL)",
    "Axel Witsel (BEL)",
    "Brandon Mechele (BEL)",
    "Charles De Ketelaere (BEL)",
    "Diego Moreira (BEL)",
    "Dodi Lukebakio (BEL)",
    "Hans Vanaken (BEL)",
    "Jérémy Doku (BEL)",
    "Joaquin Seys (BEL)",
    "Kevin De Bruyne (BEL)",
    "Koni De Winter (BEL)",
    "Leandro Trossard (BEL)",
    "Matias Fernandez-Pardo (BEL)",
    "Maxim De Cuyper (BEL)",
    "Mike Penders (BEL)",
    "Nathan Ngoy (BEL)",
    "Nicolas Raskin (BEL)",
    "Romelu Lukaku (BEL)",
    "Senne Lammens (BEL)",
    "Thibaut Courtois (BEL)",
    "Thomas Meunier (BEL)",
    "Timothy Castagne (BEL)",
    "Youri Tielemans (BEL)",
    "Zeno Debast (BEL)"
  ] },
  { pais: "Bosnia y Herzegovina", players: [
    "Amar Dedic (BIH)",
    "Amar Memic (BIH)",
    "Amir Hadziahmetovic (BIH)",
    "Armin Gigovic (BIH)",
    "Benjamin Tahirovic (BIH)",
    "Dennis Hadzikadunic (BIH)",
    "Dzenis Burnic (BIH)",
    "Edin Dzeko (BIH)",
    "Ermedin Demirovic (BIH)",
    "Ermin Mahmic (BIH)",
    "Esmir Bajraktarevic (BIH)",
    "Haris Tabakovic (BIH)",
    "Ivan Basic (BIH)",
    "Ivan Sunjic (BIH)",
    "Jovo Lukic (BIH)",
    "Kerim Alajbegovic (BIH)",
    "Martin Zlomislic (BIH)",
    "Nidal Celik (BIH)",
    "Nihad Mujakic (BIH)",
    "Nikola Katic (BIH)",
    "Nikola Vasilj (BIH)",
    "Osman Hadzikic (BIH)",
    "Samed Bazdar (BIH)",
    "Sead Kolasinac (BIH)",
    "Stjepan Radeljic (BIH)",
    "Tarik Muharemovic (BIH)"
  ] },
  { pais: "Brasil", players: [
    "Alex Sandro (BRA)",
    "Alisson (BRA)",
    "Bremer (BRA)",
    "Bruno Guimarães (BRA)",
    "Casemiro (BRA)",
    "Danilo (BRA)",
    "Danilo Santos (BRA)",
    "Douglas Santos (BRA)",
    "Éderson (BRA)",
    "Endrick (BRA)",
    "Fabinho (BRA)",
    "Gabriel Magalhães (BRA)",
    "Gabriel Martinelli (BRA)",
    "Igor Thiago (BRA)",
    "Léo Pereira (BRA)",
    "Lucas Paquetá (BRA)",
    "Luiz Henrique (BRA)",
    "Marquinhos (BRA)",
    "Matheus Cunha (BRA)",
    "Neymar (BRA)",
    "Raphinha (BRA)",
    "Rayan (BRA)",
    "Roger Ibañez (BRA)",
    "Vinícius Júnior (BRA)",
    "Wesley (BRA)",
    "Weverton (BRA)"
  ] },
  { pais: "Cabo Verde", players: [
    "CJ dos Santos (CPV)",
    "Dailon Livramento (CPV)",
    "Deroy Duarte (CPV)",
    "Diney (CPV)",
    "Garry Rodrigues (CPV)",
    "Gilson Benchimol (CPV)",
    "Helio Varela (CPV)",
    "Jamiro Monteiro (CPV)",
    "Joao Paulo (CPV)",
    "Jovane Cabral (CPV)",
    "Kelvin Pires (CPV)",
    "Kevin Pina (CPV)",
    "Laros Duarte (CPV)",
    "Logan Costa (CPV)",
    "Marcio Rosa (CPV)",
    "Nuno da Costa (CPV)",
    "Pico (CPV)",
    "Ryan Mendes (CPV)",
    "Sidny Lopes Cabral (CPV)",
    "Steven Moreira (CPV)",
    "Stopira (CPV)",
    "Telmo Arcanjo (CPV)",
    "Vozinha (CPV)",
    "Wagner Pina (CPV)",
    "Willy Semedo (CPV)",
    "Yannick Semedo (CPV)"
  ] },
  { pais: "Canadá", players: [
    "Alfie Jones (CAN)",
    "Ali Ahmed (CAN)",
    "Alistair Johnston (CAN)",
    "Alphonso Davies (CAN)",
    "Cyle Larin (CAN)",
    "Dayne St. Clair (CAN)",
    "Derek Cornelius (CAN)",
    "Ismaël Koné (CAN)",
    "Jacob Shaffelburg (CAN)",
    "Joel Waterman (CAN)",
    "Jonathan David (CAN)",
    "Jonathan Osorio (CAN)",
    "Liam Millar (CAN)",
    "Luc de Fougerolles (CAN)",
    "Marcelo Flores (CAN)",
    "Mathieu Choinière (CAN)",
    "Maxime Crépeau (CAN)",
    "Moïse Bombito (CAN)",
    "Nathan Saliba (CAN)",
    "Niko Sigur (CAN)",
    "Owen Goodman (CAN)",
    "Promise David (CAN)",
    "Richie Laryea (CAN)",
    "Stephen Eustáquio (CAN)",
    "Tajon Buchanan (CAN)",
    "Tani Oluwaseyi (CAN)"
  ] },
  { pais: "Colombia", players: [
    "Álvaro Montero (COL)",
    "Camilo Vargas (COL)",
    "Carlos Andrés Gómez (COL)",
    "Cucho Hernández (COL)",
    "Daniel Muñoz (COL)",
    "David Ospina (COL)",
    "Davinson Sánchez (COL)",
    "Deiver Machado (COL)",
    "Gustavo Puerta (COL)",
    "James Rodríguez (COL)",
    "Jaminton Campaz (COL)",
    "Jefferson Lerma (COL)",
    "Jhon Arias (COL)",
    "Jhon Córdoba (COL)",
    "Jhon Lucumí (COL)",
    "Johan Mojica (COL)",
    "Jorge Carrascal (COL)",
    "Juan Camilo Portilla (COL)",
    "Juan Fernando Quintero (COL)",
    "Kevin Castaño (COL)",
    "Luis Díaz (COL)",
    "Luis Suárez (COL)",
    "Richard Ríos (COL)",
    "Santiago Arias (COL)",
    "Willer Ditta (COL)",
    "Yerry Mina (COL)"
  ] },
  { pais: "Corea del Sur", players: [
    "Bae Jun-Ho (KOR)",
    "Cho Kyu-Sung (KOR)",
    "Hwang Hee-Chan (KOR)",
    "Hwang In-Beom (KOR)",
    "Jens Castrop (KOR)",
    "Jo Hyun-Woo (KOR)",
    "Jo Yu-Min (KOR)",
    "Kim Jin-Kyu (KOR)",
    "Kim Min-Jae (KOR)",
    "Kim Moon-Hwan (KOR)",
    "Kim Seung-Gyu (KOR)",
    "Kim Tae-Hyun (KOR)",
    "Lee Dong-Gyeong (KOR)",
    "Lee Han-Beom (KOR)",
    "Lee Jae-Sung (KOR)",
    "Lee Kang-In (KOR)",
    "Lee Ki-Hyeok (KOR)",
    "Lee Tae-Seok (KOR)",
    "Oh Hyun-Kyu (KOR)",
    "Paik Seung-Ho (KOR)",
    "Park Jin-Seop (KOR)",
    "Seol Young-Woo (KOR)",
    "Son Heung-Min (KOR)",
    "Song Bum-Keun (KOR)",
    "Um Ji-Sung (KOR)",
    "Yang Hyun-Jun (KOR)"
  ] },
  { pais: "Costa de Marfil", players: [
    "Alban Lafont (CIV)",
    "Amad Diallo (CIV)",
    "Ange-Yoan Bonny (CIV)",
    "Bazoumana Touré (CIV)",
    "Christ Inao Oulaï (CIV)",
    "Clément Akpa (CIV)",
    "Elye Wahi (CIV)",
    "Emmanuel Agbadou (CIV)",
    "Evan Ndicka (CIV)",
    "Evann Guessand (CIV)",
    "Franck Kessié (CIV)",
    "Ghislain Konan (CIV)",
    "Guela Doué (CIV)",
    "Ibrahim Sangaré (CIV)",
    "Jean Michaël Seri (CIV)",
    "Mohamed Koné (CIV)",
    "Nicolas Pépé (CIV)",
    "Odilon Kossounou (CIV)",
    "Oumar Diakité (CIV)",
    "Ousmane Diomande (CIV)",
    "Parfait Guiagon (CIV)",
    "Seko Fofana (CIV)",
    "Simon Adingra (CIV)",
    "Wilfried Singo (CIV)",
    "Yahia Fofana (CIV)",
    "Yan Diomande (CIV)"
  ] },
  { pais: "Croacia", players: [
    "Andrej Kramaric (CRO)",
    "Ante Budimir (CRO)",
    "Dominik Kotarski (CRO)",
    "Dominik Livakovic (CRO)",
    "Duje Caleta-Car (CRO)",
    "Igor Matanovic (CRO)",
    "Ivan Perisic (CRO)",
    "Ivor Pandur (CRO)",
    "Josip Stanisic (CRO)",
    "Josip Sutalo (CRO)",
    "Josko Gvardiol (CRO)",
    "Kristijan Jakic (CRO)",
    "Luka Modric (CRO)",
    "Luka Sucic (CRO)",
    "Luka Vuskovic (CRO)",
    "Marco Pasalic (CRO)",
    "Marin Pongracic (CRO)",
    "Mario Pasalic (CRO)",
    "Martin Baturina (CRO)",
    "Martin Erlic (CRO)",
    "Mateo Kovacic (CRO)",
    "Nikola Moro (CRO)",
    "Nikola Vlasic (CRO)",
    "Petar Musa (CRO)",
    "Petar Sucic (CRO)",
    "Toni Fruk (CRO)"
  ] },
  { pais: "Curazao", players: [
    "Ar'jany Martha (CUW)",
    "Armando Obispo (CUW)",
    "Brandley Kuwas (CUW)",
    "Deveron Fonville (CUW)",
    "Eloy Room (CUW)",
    "Gervane Kastaneer (CUW)",
    "Godfried Roemeratoe (CUW)",
    "Jearl Margaritha (CUW)",
    "Jeremy Antonisse (CUW)",
    "Joshua Brenet (CUW)",
    "Juninho Bacuna (CUW)",
    "Jürgen Locadia (CUW)",
    "Juriën Gaari (CUW)",
    "Kenji Gorré (CUW)",
    "Kevin Felida (CUW)",
    "Leandro Bacuna (CUW)",
    "Livano Comenencia (CUW)",
    "Riechedly Bazoer (CUW)",
    "Roshon van Eijma (CUW)",
    "Sherel Floranus (CUW)",
    "Shurandy Sambo (CUW)",
    "Sontje Hansen (CUW)",
    "Tahith Chong (CUW)",
    "Trevor Doornbusch (CUW)",
    "Tyrese Noslin (CUW)",
    "Tyrick Bodak (CUW)"
  ] },
  { pais: "Ecuador", players: [
    "Alan Franco (ECU)",
    "Alan Minda (ECU)",
    "Ángelo Preciado (ECU)",
    "Anthony Valencia (ECU)",
    "Denil Castillo (ECU)",
    "Enner Valencia (ECU)",
    "Félix Torres (ECU)",
    "Gonzalo Plata (ECU)",
    "Gonzalo Valle (ECU)",
    "Hernán Galíndez (ECU)",
    "Jackson Porozo (ECU)",
    "Jeremy Arévalo (ECU)",
    "Joel Ordóñez (ECU)",
    "John Yeboah (ECU)",
    "Jordy Alcívar (ECU)",
    "Jordy Caicedo (ECU)",
    "Kendry Páez (ECU)",
    "Kevin Rodríguez (ECU)",
    "Moisés Caicedo (ECU)",
    "Moisés Ramírez (ECU)",
    "Nilson Angulo (ECU)",
    "Pedro Vite (ECU)",
    "Pervis Estupiñán (ECU)",
    "Piero Hincapié (ECU)",
    "Willian Pacho (ECU)",
    "Yaimar Medina (ECU)"
  ] },
  { pais: "Egipto", players: [
    "Ahmed Fatouh (EGI)",
    "Ahmed Zizo (EGI)",
    "Aqtay Abdallah (EGI)",
    "El Mahdi Soliman (EGI)",
    "Emam Ashour (EGI)",
    "Haissem Hassan (EGI)",
    "Hamdy Fathy (EGI)",
    "Hamza Abdelkarim (EGI)",
    "Hossam Abdelmaguid (EGI)",
    "Ibrahim Adel (EGI)",
    "Karim Hafez (EGI)",
    "Mahmoud Saber (EGI)",
    "Mahmoud Trezeguet (EGI)",
    "Marwan Ateya (EGI)",
    "Mohamed Abdelmonemn (EGI)",
    "Mohamed Alaa (EGI)",
    "Mohamed El Shenawy (EGI)",
    "Mohamed Hany (EGI)",
    "Mohamed Salah (EGI)",
    "Mohanad Lasheen (EGI)",
    "Mostafa Shobeir (EGI)",
    "Mostafa Ziko (EGI)",
    "Nabil Emad (EGI)",
    "Omar Marmoush (EGI)",
    "Rami Rabia (EGI)",
    "Tarek Alaa (EGI)",
    "Yasser Ibrahim (EGI)"
  ] },
  { pais: "Escocia", players: [
    "Aaron Hickey (ESC)",
    "Andy Robertson (ESC)",
    "Angus Gunn (ESC)",
    "Anthony Ralston (ESC)",
    "Ben Gannon-Doak (ESC)",
    "Billy Gilmour (ESC)",
    "Ché Adams (ESC)",
    "Craig Gordon (ESC)",
    "Dom Hyam (ESC)",
    "Finlay Curtis (ESC)",
    "George Hirst (ESC)",
    "Grant Hanley (ESC)",
    "Jack Hendry (ESC)",
    "John McGinn (ESC)",
    "John Souttar (ESC)",
    "Kenny McLean (ESC)",
    "Kieran Tierney (ESC)",
    "Lawrence Shankland (ESC)",
    "Lewis Ferguson (ESC)",
    "Liam Kelly (ESC)",
    "Lyndon Dykes (ESC)",
    "Nathan Patterson (ESC)",
    "Ross Stewart (ESC)",
    "Ryan Christie (ESC)",
    "Scott McKenna (ESC)",
    "Scott McTominay (ESC)"
  ] },
  { pais: "España", players: [
    "Álex Baena (ESP)",
    "Álex Grimaldo (ESP)",
    "Aymeric Laporte (ESP)",
    "Borja Iglesias (ESP)",
    "Dani Olmo (ESP)",
    "David Raya (ESP)",
    "Eric García (ESP)",
    "Fabián Ruiz (ESP)",
    "Ferran Torres (ESP)",
    "Gavi (ESP)",
    "Joan García (ESP)",
    "Lamine Yamal (ESP)",
    "Marc Cucurella (ESP)",
    "Marc Pubill (ESP)",
    "Marcos Llorente (ESP)",
    "Martín Zubimendi (ESP)",
    "Mikel Merino (ESP)",
    "Mikel Oyarzabal (ESP)",
    "Nico Williams (ESP)",
    "Pau Cubarsí (ESP)",
    "Pedri (ESP)",
    "Pedro Porro (ESP)",
    "Rodri (ESP)",
    "Unai Simón (ESP)",
    "Víctor Muñoz (ESP)",
    "Yéremy Pino (ESP)"
  ] },
  { pais: "Estados Unidos", players: [
    "Alejandro Zendejas (USA)",
    "Alex Freeman (USA)",
    "Antonee Robinson (USA)",
    "Auston Trusty (USA)",
    "Brenden Aaronson (USA)",
    "Chris Brady (USA)",
    "Chris Richards (USA)",
    "Christian Pulisic (USA)",
    "Cristian Roldan (USA)",
    "Folarin Balogun (USA)",
    "Gio Reyna (USA)",
    "Haji Wright (USA)",
    "Joe Scally (USA)",
    "Malik Tillman (USA)",
    "Mark McKenzie (USA)",
    "Matt Freese (USA)",
    "Matt Turner (USA)",
    "Max Arfsten (USA)",
    "Miles Robinson (USA)",
    "Ricardo Pepi (USA)",
    "Sebastian Berhalter (USA)",
    "Sergiño Dest (USA)",
    "Tim Ream (USA)",
    "Tim Weah (USA)",
    "Tyler Adams (USA)",
    "Weston McKennie (USA)"
  ] },
  { pais: "Francia", players: [
    "Adrien Rabiot (FRA)",
    "Aurélien Tchouaméni (FRA)",
    "Bradley Barcola (FRA)",
    "Brice Samba (FRA)",
    "Dayot Upamecano (FRA)",
    "Desiré Doué (FRA)",
    "Ibrahima Konaté (FRA)",
    "Jean-Philippe Mateta (FRA)",
    "Jules Koundé (FRA)",
    "Kylian Mbappé (FRA)",
    "Lucas Digne (FRA)",
    "Lucas Hernández (FRA)",
    "Maghnes Akliouche (FRA)",
    "Malo Gusto (FRA)",
    "Manu Koné (FRA)",
    "Marcus Thuram (FRA)",
    "Maxence Lacroix (FRA)",
    "Michael Olise (FRA)",
    "Mike Maignan (FRA)",
    "N'Golo Kanté (FRA)",
    "Rayan Cherki (FRA)",
    "Robin Risser (FRA)",
    "Theo Hernández (FRA)",
    "Warren Zaïre-Emery (FRA)",
    "William Saliba (FRA)"
  ] },
  { pais: "Ghana", players: [
    "Abdul Fatawu Issahaku (GHA)",
    "Abdul Mumin (GHA)",
    "Alexander Djiku (GHA)",
    "Alidu Seidu (GHA)",
    "Antoine Semenyo (GHA)",
    "Augustine Boakye (GHA)",
    "Baba Abdul Rahman (GHA)",
    "Benjamin Asare (GHA)",
    "Brandon Thomas-Asante (GHA)",
    "Caleb Yirenkyi (GHA)",
    "Christopher Bonsu Baah (GHA)",
    "Elisha Owusu (GHA)",
    "Ernest Nuamah (GHA)",
    "Gideon Mensah (GHA)",
    "Iñaki Williams (GHA)",
    "Jerome Opoku (GHA)",
    "Jonas Adjetey (GHA)",
    "Jordan Ayew (GHA)",
    "Joseph Anang (GHA)",
    "Kamal Deen Sulemana (GHA)",
    "Kojo Oppong Peprah (GHA)",
    "Kwasi Sibo (GHA)",
    "Lawrence Ati-Zigi (GHA)",
    "Marvin Senaya (GHA)",
    "Paul Reverson (GHA)",
    "Solomon Agbasi (GHA)",
    "Thomas Partey (GHA)"
  ] },
  { pais: "Haití", players: [
    "Alexandre Pierre (HAI)",
    "Carl Fred Sainté (HAI)",
    "Carlens Arcus (HAI)",
    "Danley Jean Jacques (HAI)",
    "Derrick Etienne (HAI)",
    "Dominique Simon (HAI)",
    "Don Deedson Louicius (HAI)",
    "Duckens Nazon (HAI)",
    "Duke Lacroix (HAI)",
    "Frantzdy Pierrot (HAI)",
    "Hannes Delcroix (HAI)",
    "Jean-Kévin Duverne (HAI)",
    "Jean-Ricner Bellegarde (HAI)",
    "Johny Placide (HAI)",
    "Josué Casimir (HAI)",
    "Josue Duverger (HAI)",
    "Keeto Thermoncy (HAI)",
    "Lenny Joseph (HAI)",
    "Leverton Pierre (HAI)",
    "Martin Expérience (HAI)",
    "Ricardo Adé (HAI)",
    "Ruben Providence (HAI)",
    "Wilguens Paugain (HAI)",
    "Wilson Isidor (HAI)",
    "Woodensky Pierre (HAI)",
    "Yassin Fortuné (HAI)"
  ] },
  { pais: "Inglaterra", players: [
    "Anthony Gordon (ING)",
    "Bukayo Saka (ING)",
    "Dan Burn (ING)",
    "Dean Henderson (ING)",
    "Declan Rice (ING)",
    "Djed Spence (ING)",
    "Eberechi Eze (ING)",
    "Elliot Anderson (ING)",
    "Ezri Konsa (ING)",
    "Harry Kane (ING)",
    "Ivan Toney (ING)",
    "James Trafford (ING)",
    "Jarell Quansah (ING)",
    "John Stones (ING)",
    "Jordan Henderson (ING)",
    "Jordan Pickford (ING)",
    "Jude Bellingham (ING)",
    "Kobbie Mainoo (ING)",
    "Marc Guéhi (ING)",
    "Marcus Rashford (ING)",
    "Morgan Rogers (ING)",
    "Nico O'Reilly (ING)",
    "Noni Madueke (ING)",
    "Ollie Watkins (ING)",
    "Reece James (ING)",
    "Tino Livramento (ING)"
  ] },
  { pais: "Irak", players: [
    "Ahmed Basil (IRQ)",
    "Ahmed Qasem (IRQ)",
    "Ahmed Yahya (IRQ)",
    "Aimar Sher (IRQ)",
    "Akam Hashim (IRQ)",
    "Ali Al-Hamadi (IRQ)",
    "Ali Jassim (IRQ)",
    "Ali Yousef (IRQ)",
    "Amir Al-Ammari (IRQ)",
    "Aymen Hussein (IRQ)",
    "Fahad Talib (IRQ)",
    "Frans Putros (IRQ)",
    "Hussein Ali (IRQ)",
    "Ibrahim Bayesh (IRQ)",
    "Jalal Hassan (IRQ)",
    "Kevin Yakob (IRQ)",
    "Manaf Younis (IRQ)",
    "Marko Farji (IRQ)",
    "Merchas Doski (IRQ)",
    "Mohanad Ali (IRQ)",
    "Mustafa Saadoon (IRQ)",
    "Rebin Sulaka (IRQ)",
    "Youssef Amyn (IRQ)",
    "Zaid Ismail (IRQ)",
    "Zaid Tahseen (IRQ)",
    "Zidane Iqbal (IRQ)"
  ] },
  { pais: "Irán", players: [
    "Ali Alipour (IRN)",
    "Alireza Beiranvand (IRN)",
    "Alireza Jahanbakhsh (IRN)",
    "Amirhossein Hosseinzadeh (IRN)",
    "Aria Yousefi (IRN)",
    "Danial Eiri (IRN)",
    "Dennis Dargahi (IRN)",
    "Ehsan Hajsafi (IRN)",
    "Hossein Hosseini (IRN)",
    "Hossein Kanaani (IRN)",
    "Mehdi Ghaedi (IRN)",
    "Mehdi Torabi (IRN)",
    "Milad Mohammadi (IRN)",
    "Mohammad Ghorbani (IRN)",
    "Mohammad Mohebi (IRN)",
    "Omid Noorafkan (IRN)",
    "Payam Niazmand (IRN)",
    "Ramin Rezaeian (IRN)",
    "Rouzbeh Cheshmi (IRN)",
    "Saeid Ezatolahi (IRN)",
    "Saleh Hardani (IRN)",
    "Saman Ghoddos (IRN)",
    "Shahriyar Moghanloo (IRN)",
    "Shoka Khalilzadeh (IRN)",
    "Taremi (IRN)"
  ] },
  { pais: "Japón", players: [
    "Ao Tanaka (JAP)",
    "Ayase Ueda (JAP)",
    "Ayumu Seko (JAP)",
    "Daichi Kamada (JAP)",
    "Daizen Maeda (JAP)",
    "Hiroki Ito (JAP)",
    "Junnosuke Suzuki (JAP)",
    "Junya Ito (JAP)",
    "Kaishu Sano (JAP)",
    "Keisuke Goto (JAP)",
    "Keisuke Osako (JAP)",
    "Keito Nakamura (JAP)",
    "Kento Shiogai (JAP)",
    "Ko Itakura (JAP)",
    "Koki Ogawa (JAP)",
    "Ritsu Doan (JAP)",
    "Shogo Taniguchi (JAP)",
    "Takefusa Kubo (JAP)",
    "Takehiro Tomiyasu (JAP)",
    "Tomoki Hayakawa (JAP)",
    "Tsuyoshi Watanabe (JAP)",
    "Wataru Endo (JAP)",
    "Yuito Suzuki (JAP)",
    "Yukinari Sugawara (JAP)",
    "Yūto Nagatomo (JAP)",
    "Zion Suzuki (JAP)"
  ] },
  { pais: "Jordania", players: [
    "Abdallah Al-Fakhouri (JOR)",
    "Abdallah Nasib (JOR)",
    "Ahmad Al-Juiadi (JOR)",
    "Ahmad Assaf (JOR)",
    "Ali Azaizeh (JOR)",
    "Ali Olwan (JOR)",
    "Amer Jamous (JOR)",
    "Anas Badawi (JOR)",
    "Ehsan Haddad (JOR)",
    "Husam Abu Dahab (JOR)",
    "Ibrahim Sabra (JOR)",
    "Ibrahim Sadeh (JOR)",
    "Mohammad Abualnadi (JOR)",
    "Mohammed Abu Hashish (JOR)",
    "Mohammed Abu Zraiq (JOR)",
    "Mohammed Al-Dawoud (JOR)",
    "Mohannad Abu Taha (JOR)",
    "Mousa Al-Tamari (JOR)",
    "Nizar Al-Rashdan (JOR)",
    "Noor Al-Rawabdeh (JOR)",
    "Nour Bani Attiah (JOR)",
    "Odeh Al-Fakhouri (JOR)",
    "Rajaei Ayed (JOR)",
    "Saed Al-Rosna (JOR)",
    "Saleem Obaid (JOR)",
    "Yazan Al-Arab (JOR)",
    "Yazid Abulaila (JOR)",
    "Yousef Abu Al-Jazar (JOR)",
    "Yousef Qashi (JOR)"
  ] },
  { pais: "Marruecos", players: [
    "Abde Ezzalzouli (MAR)",
    "Achraf Hakimi (MAR)",
    "Ahmed Reda Tagnaouti (MAR)",
    "Anass Salah-Eddine (MAR)",
    "Ayoub El Kaabi (MAR)",
    "Ayoube Amaimouni (MAR)",
    "Ayyoub Bouaddi (MAR)",
    "Azzedine Ounahi (MAR)",
    "Bilal El Khannouss (MAR)",
    "Brahim Díaz (MAR)",
    "Chadi Riad (MAR)",
    "Chemsdine Talbi (MAR)",
    "Gessime Yassine (MAR)",
    "Ismael Saibari (MAR)",
    "Issa Diop (MAR)",
    "Munir Kajoui (MAR)",
    "Nayef Aguerd (MAR)",
    "Neil El Aynaoui (MAR)",
    "Noussair Mazraoui (MAR)",
    "Redouane Halhal (MAR)",
    "Samir El Mourabet (MAR)",
    "Sofyan Amrabat (MAR)",
    "Soufiane Rahimi (MAR)",
    "Yassine Bounou (MAR)",
    "Youssef Belammari (MAR)",
    "Zakaria El Ouahdi (MAR)"
  ] },
  { pais: "México", players: [
    "Alexis Vega (MEX)",
    "Álvaro Fidalgo (MEX)",
    "Armando González (MEX)",
    "Brian Gutiérrez (MEX)",
    "Carlos Acevedo (MEX)",
    "César Huerta (MEX)",
    "César Montes (MEX)",
    "Edson Álvarez (MEX)",
    "Erik Lira (MEX)",
    "Gilberto Mora (MEX)",
    "Guillermo Martínez (MEX)",
    "Guillermo Ochoa (MEX)",
    "Israel Reyes (MEX)",
    "Jesús Gallardo (MEX)",
    "Johan Vásquez (MEX)",
    "Jorge Sánchez (MEX)",
    "Julián Quiñones (MEX)",
    "Luis Chávez (MEX)",
    "Luis Romo (MEX)",
    "Mateo Chávez (MEX)",
    "Obed Vargas (MEX)",
    "Orbelín Pineda (MEX)",
    "Raúl Jiménez (MEX)",
    "Raúl Rangel (MEX)",
    "Roberto Alvarado (MEX)",
    "Santiago Gimenez (MEX)"
  ] },
  { pais: "Noruega", players: [
    "Alexander Sørloth (NOR)",
    "Andreas Schjelderup (NOR)",
    "Antonio Nusa (NOR)",
    "David Møller Wolfe (NOR)",
    "Egil Selvik (NOR)",
    "Erling Haaland (NOR)",
    "Fredrik André Bjørkan (NOR)",
    "Fredrik Aursnes (NOR)",
    "Henrik Falchener (NOR)",
    "Jens Petter Hauge (NOR)",
    "Jørgen Strand Larsen (NOR)",
    "Julian Ryerson (NOR)",
    "Kristian Thorstvedt (NOR)",
    "Kristoffer Ajer (NOR)",
    "Leo Østigard (NOR)",
    "Marcus Pedersen (NOR)",
    "Martin Ødegaard (NOR)",
    "Morten Thorsby (NOR)",
    "Ørjan Nyland (NOR)",
    "Oscar Bobb (NOR)",
    "Patrick Berg (NOR)",
    "Sander Berge (NOR)",
    "Sander Tangvik (NOR)",
    "Sondre Langås (NOR)",
    "Thelo Aasgaard (NOR)",
    "Torbjørn Heggem (NOR)"
  ] },
  { pais: "Nueva Zelanda", players: [
    "Alex Paulsen (NZL)",
    "Alex Rufer (NZL)",
    "Ben Old (NZL)",
    "Ben Waine (NZL)",
    "Callan Elliot (NZL)",
    "Callum McCowatt (NZL)",
    "Chris Wood (NZL)",
    "Eli Just (NZL)",
    "Finn Surman (NZL)",
    "Francis De Vries (NZL)",
    "Jesse Randall (NZL)",
    "Joe Bell (NZL)",
    "Kosta Barbarouses (NZL)",
    "Lachlan Bayliss (NZL)",
    "Liberato Cacace (NZL)",
    "Marko Stamenic (NZL)",
    "Matt Garbett (NZL)",
    "Max Crocombe (NZL)",
    "Michael Boxall (NZL)",
    "Michael Woud (NZL)",
    "Nando Pijnaker (NZL)",
    "Ryan Thomas (NZL)",
    "Sarpreet Singh (NZL)",
    "Tim Payne (NZL)",
    "Tommy Smith (NZL)",
    "Tyler Bindon (NZL)"
  ] },
  { pais: "Países Bajos", players: [
    "Bart Verbruggen (PBA)",
    "Brian Brobbey (PBA)",
    "Cody Gakpo (PBA)",
    "Crysencio Summerville (PBA)",
    "Denzel Dumfries (PBA)",
    "Donyell Malen (PBA)",
    "Frenkie de Jong (PBA)",
    "Guus Til (PBA)",
    "Jan Paul van Hecke (PBA)",
    "Jorrel Hato (PBA)",
    "Jurriën Timber (PBA)",
    "Justin Kluivert (PBA)",
    "Mark Flekken (PBA)",
    "Marten de Roon (PBA)",
    "Mats Wieffer (PBA)",
    "Memphis Depay (PBA)",
    "Micky van de Ven (PBA)",
    "Nathan Aké (PBA)",
    "Noa Lang (PBA)",
    "Quinten Timber (PBA)",
    "Robin Roefs (PBA)",
    "Ryan Gravenberch (PBA)",
    "Teun Koopmeiners (PBA)",
    "Tijjani Reijnders (PBA)",
    "Virgil van Dijk (PBA)",
    "Wout Weghorst (PBA)"
  ] },
  { pais: "Panamá", players: [
    "Adalberto Carrasquilla (PAN)",
    "Alberto Quintero (PAN)",
    "Amir Murillo (PAN)",
    "Andrés Andrade (PAN)",
    "Aníbal Godoy (PAN)",
    "Azarias Londoño (PAN)",
    "Carlos Harvey (PAN)",
    "Cecilio Waterman (PAN)",
    "César Blackman (PAN)",
    "César Samudio (PAN)",
    "César Yanis (PAN)",
    "Cristian Martínez (PAN)",
    "Edgardo Fariña (PAN)",
    "Éric Davis (PAN)",
    "Fidel Escobar (PAN)",
    "Ismael Díaz (PAN)",
    "Jiovany Ramos (PAN)",
    "Jorge Gutiérrez (PAN)",
    "José Córdoba (PAN)",
    "José Fajardo (PAN)",
    "José Luis Rodríguez (PAN)",
    "Luis Mejía (PAN)",
    "Orlando Mosquera (PAN)",
    "Roderick Miller (PAN)",
    "Tomás Rodríguez (PAN)",
    "Yoel Bárcenas (PAN)"
  ] },
  { pais: "Paraguay", players: [
    "Alejandro Romero Gamarra Kaku (PAR)",
    "Alex Arce (PAR)",
    "Alexandro Maidana (PAR)",
    "Andrés Cubas (PAR)",
    "Antonio Sanabria (PAR)",
    "Braian Ojeda (PAR)",
    "Damián Bobadilla (PAR)",
    "Diego Gómez (PAR)",
    "Fabián Balbuena (PAR)",
    "Gabriel Avalos (PAR)",
    "Gastón Olveira (PAR)",
    "Gustavo Caballero (PAR)",
    "Gustavo Gómez (PAR)",
    "Gustavo Velázquez (PAR)",
    "Isidro Pitta (PAR)",
    "Jose Canale (PAR)",
    "Juan Caceres (PAR)",
    "Julio Enciso (PAR)",
    "Júnior Alonso (PAR)",
    "Matías Galarza (PAR)",
    "Mauricio Magalhaes (PAR)",
    "Miguel Almirón (PAR)",
    "Omar Alderete (PAR)",
    "Orlando Gill (PAR)",
    "Ramón Sosa (PAR)",
    "Roberto Fernández (PAR)"
  ] },
  { pais: "Portugal", players: [
    "Bernardo Silva (POR)",
    "Bruno Fernandes (POR)",
    "Cristiano Ronaldo (POR)",
    "Diogo Costa (POR)",
    "Diogo Dalot (POR)",
    "Francisco Conceição (POR)",
    "Francisco Trincão (POR)",
    "Gonçalo Guedes (POR)",
    "Gonçalo Inacio (POR)",
    "Gonçalo Ramos (POR)",
    "João Cancelo (POR)",
    "João Félix (POR)",
    "João Neves (POR)",
    "José Sá (POR)",
    "Matheus Nunes (POR)",
    "Nélson Semedo (POR)",
    "Nuno Mendes (POR)",
    "Pedro Neto (POR)",
    "Rafael Leão (POR)",
    "Renato Veiga (POR)",
    "Ricardo Velho (POR)",
    "Rúben Dias (POR)",
    "Rúben Neves (POR)",
    "Rui Silva (POR)",
    "Samú Costa (POR)",
    "Tomás Araújo (POR)",
    "Vitinha (POR)"
  ] },
  { pais: "Qatar", players: [
    "Abdulaziz Hatem (QAT)",
    "Ahmed Alaa (QAT)",
    "Ahmed Fathi (QAT)",
    "Akram Afif (QAT)",
    "Al-Hashmi Al-Hussain (QAT)",
    "Almoez Ali (QAT)",
    "Assim Madibo (QAT)",
    "Ayoub Al-Alawi (QAT)",
    "Edmílson Junior (QAT)",
    "Hassan Al-Haydos (QAT)",
    "Issa Laye (QAT)",
    "Jassim Gaber (QAT)",
    "Karim Boudiaf (QAT)",
    "Lucas Mendes (QAT)",
    "Mahmoud Abunada (QAT)",
    "Meshaal Barsham (QAT)",
    "Mohammed Mannai (QAT)",
    "Mohammed Muntari (QAT)",
    "Mohammed Waad (QAT)",
    "Mubarak Shannan (QAT)",
    "Niall Mason (QAT)",
    "Pedro Miguel (QAT)",
    "Salah Zakaria (QAT)",
    "Sultan Al Brake (QAT)",
    "Tahsin Mohammed (QAT)",
    "Yusuf Abdurisag (QAT)"
  ] },
  { pais: "República Checa", players: [
    "Adam Hlozek (CHE)",
    "Alexandr Sojka (CHE)",
    "David Doudera (CHE)",
    "David Jurásek (CHE)",
    "David Zima (CHE)",
    "Denis Visinsky (CHE)",
    "Hugo Sochurek (CHE)",
    "Jan Kuchta (CHE)",
    "Jaroslav Zeleny (CHE)",
    "Jindrich Stanek (CHE)",
    "Ladislav Krejcí (CHE)",
    "Lukás Cerv (CHE)",
    "Lukás Hornícek (CHE)",
    "Lukás Provod (CHE)",
    "Matej Kovár (CHE)",
    "Michal Sadílek (CHE)",
    "Mojmír Chytil (CHE)",
    "Patrik Schick (CHE)",
    "Pavel Sulc (CHE)",
    "Robin Hranác (CHE)",
    "Stepán Chaloupek (CHE)",
    "Tomás Chory (CHE)",
    "Tomás Holes (CHE)",
    "Tomás Soucek (CHE)",
    "Vladimír Coufal (CHE)",
    "Vladimír Darida (CHE)"
  ] },
  { pais: "República Democrática del Congo", players: [
    "Aaron Tshibola (COD)",
    "Aaron Wan-Bissaka (COD)",
    "Arthur Masuaku (COD)",
    "Axel Tuanzebe (COD)",
    "Brian Cipenga (COD)",
    "Cédric Bakambu (COD)",
    "Chancel Mbemba (COD)",
    "Charles Pickel (COD)",
    "Dylan Batubinsika (COD)",
    "Edo Kayembe (COD)",
    "Fiston Mayele (COD)",
    "Gaël Kakuta (COD)",
    "Gedeon Kalulu (COD)",
    "Joris Kayembe (COD)",
    "Lionel Mpasi (COD)",
    "Matthieu Epolo (COD)",
    "Meschak Elia (COD)",
    "Nathanaël Mbuku (COD)",
    "Ngal'ayel Mukau (COD)",
    "Noah Sadiki (COD)",
    "Samuel Moutoussamy (COD)",
    "Simon Banza (COD)",
    "Steve Kapuadi (COD)",
    "Théo Bongonda (COD)",
    "Timothy Fayulu (COD)",
    "Yoane Wissa (COD)"
  ] },
  { pais: "Senegal", players: [
    "Abdoulaye Seck (SEN)",
    "Antoine Mendy (SEN)",
    "Assane Diao (SEN)",
    "Bamba Dieng (SEN)",
    "Bara Sapoko Ndiaye (SEN)",
    "Cherif Ndiaye (SEN)",
    "Édouard Mendy (SEN)",
    "El Hadji Malick Diouf (SEN)",
    "Habib Diarra (SEN)",
    "Ibrahim Mbaye (SEN)",
    "Idrissa Gana Gueye (SEN)",
    "Ilay Camara (SEN)",
    "Iliman Ndiaye (SEN)",
    "Ismail Jakobs (SEN)",
    "Ismaïla Sarr (SEN)",
    "Kalidou Koulibaly (SEN)",
    "Krépin Diatta (SEN)",
    "Lamine Camara (SEN)",
    "Mamadou Sarr (SEN)",
    "Mory Diaw (SEN)",
    "Moussa Niakhaté (SEN)",
    "Moustapha Mbow (SEN)",
    "Nicolas Jackson (SEN)",
    "Pape Gueye (SEN)",
    "Pape Matar Sarr (SEN)",
    "Pathé Ciss (SEN)",
    "Sadio Mané (SEN)",
    "Yehvann Diouf (SEN)"
  ] },
  { pais: "Sudáfrica", players: [
    "Aubrey Modiba (RSA)",
    "Bradley Cross (RSA)",
    "Evidence Makgopa (RSA)",
    "Ime Okon (RSA)",
    "Iqraam Rayners (RSA)",
    "Jayden Adams (RSA)",
    "Kamogelo Sebelebele (RSA)",
    "Khuliso Mudau (RSA)",
    "Khulumani Ndamane (RSA)",
    "Knosinathi Sibisi (RSA)",
    "Lyle Foster (RSA)",
    "Mbekezeli Mbokazi (RSA)",
    "Olwethu Makhanya (RSA)",
    "Oswin Appollis (RSA)",
    "Relebohile Mofokeng (RSA)",
    "Ricardo Goss (RSA)",
    "Ronwen Williams (RSA)",
    "Samukele Kabini (RSA)",
    "Sipho Chaine (RSA)",
    "Sphephelo Sithole (RSA)",
    "Teboho Mokoena (RSA)",
    "Thabang Matuludi (RSA)",
    "Thalente Mbatha (RSA)",
    "Thapelo Maseko (RSA)",
    "Themba Zwane (RSA)",
    "Tshepang Moremi (RSA)"
  ] },
  { pais: "Suecia", players: [
    "Alexander Bernhardsson (SUE)",
    "Alexander Isak (SUE)",
    "Anthony Elanga (SUE)",
    "Benjamin Nygren (SUE)",
    "Besfort Zeneli (SUE)",
    "Carl Starfelt (SUE)",
    "Daniel Svensson (SUE)",
    "Elliot Stroud (SUE)",
    "Emil Holm (SUE)",
    "Erik Smith (SUE)",
    "Gabriel Gudmundsson (SUE)",
    "Gustaf Lagerbielke (SUE)",
    "Gustaf Nilsson (SUE)",
    "Hjalmar Ekdal (SUE)",
    "Isak Hien (SUE)",
    "Jacob Widell Zetterstrom (SUE)",
    "Jesper Karlström (SUE)",
    "Ken Sema (SUE)",
    "Kristoffer Nordfeldt (SUE)",
    "Lucas Bergvall (SUE)",
    "Mattias Svanberg (SUE)",
    "Taha Ali (SUE)",
    "Victor Lindelöf (SUE)",
    "Viktor Gyökeres (SUE)",
    "Viktor Johansson (SUE)",
    "Yasin Ayari (SUE)"
  ] },
  { pais: "Suiza", players: [
    "Ardon Jashari (SUI)",
    "Aurèle Amenda (SUI)",
    "Breel Embolo (SUI)",
    "Cedric Itten (SUI)",
    "Christian Fassnacht (SUI)",
    "Dan Ndoye (SUI)",
    "Denis Zakaria (SUI)",
    "Djibril Sow (SUI)",
    "Eray Cömert (SUI)",
    "Fabian Rieder (SUI)",
    "Granit Xhaka (SUI)",
    "Gregor Kobel (SUI)",
    "Johan Manzambi (SUI)",
    "Luca Jaquez (SUI)",
    "Manuel Akanji (SUI)",
    "Marvin Keller (SUI)",
    "Michel Aebischer (SUI)",
    "Miro Muheim (SUI)",
    "Nico Elvedi (SUI)",
    "Noah Okafor (SUI)",
    "Remo Freuler (SUI)",
    "Ricardo Rodríguez (SUI)",
    "Rubén Vargas (SUI)",
    "Silvan Widmer (SUI)",
    "Yvon Mvogo (SUI)",
    "Zeki Amdouni (SUI)"
  ] },
  { pais: "Túnez", players: [
    "Abdelmouhib Chamakh (TUN)",
    "Adam Arous (TUN)",
    "Ali Abdi (TUN)",
    "Anis Ben Slimane (TUN)",
    "Aymen Dahmen (TUN)",
    "Dylan Bronn (TUN)",
    "Elias Achouri (TUN)",
    "Elias Saad (TUN)",
    "Ellyes Skhiri (TUN)",
    "Firas Chaouat (TUN)",
    "Hadj Mahmoud (TUN)",
    "Hannibal Mejbri (TUN)",
    "Hazem Mastouri (TUN)",
    "Ismaël Gharbi (TUN)",
    "Khalil Ayari (TUN)",
    "Mohamed Amine Ben Hamida (TUN)",
    "Montassar Talbi (TUN)",
    "Mortadha Ben Ouanes (TUN)",
    "Moutaz Neffati (TUN)",
    "Omar Rekik (TUN)",
    "Raed Chikhaoui (TUN)",
    "Rani Khedira (TUN)",
    "Rayan Elloumi (TUN)",
    "Sabri Ben Hessen (TUN)",
    "Sebastian Tounekti (TUN)",
    "Yan Valery (TUN)"
  ] },
  { pais: "Turquía", players: [
    "Abdülkerim Bardakci (TUR)",
    "Ahmetcan Kaplan (TUR)",
    "Altay Bayindir (TUR)",
    "Arda Güler (TUR)",
    "Atakan Karazor (TUR)",
    "Baris Alper Yilmaz (TUR)",
    "Caglar Söyüncü (TUR)",
    "Can Uzun (TUR)",
    "Eren Elmali (TUR)",
    "Ersin Destanoglu (TUR)",
    "Ferdi Kadioglu (TUR)",
    "Hakan Çalhanoglu (TUR)",
    "Irfan Can Kahveci (TUR)",
    "Ismail Yüksek (TUR)",
    "Kaan Ayhan (TUR)",
    "Karem Akturkoglu (TUR)",
    "Kenan Yildiz (TUR)",
    "Merih Demiral (TUR)",
    "Mert Günok (TUR)",
    "Mert Müldür (TUR)",
    "Orkun Kökçü (TUR)",
    "Ozan Kabak (TUR)",
    "Salih Özcan (TUR)",
    "Samet Akaydin (TUR)",
    "Ugurcan Çakir (TUR)",
    "Yunus Akgün (TUR)",
    "Zeki Çelik (TUR)"
  ] },
  { pais: "Uruguay", players: [
    "Agustín Canobbio (URU)",
    "Brian Rodríguez (URU)",
    "Darwin Núñez (URU)",
    "Emiliano Martínez (URU)",
    "Facundo Pellistri (URU)",
    "Federico Valverde (URU)",
    "Federico Viñas (URU)",
    "Fernando Muslera (URU)",
    "Giorgian De Arrascaeta (URU)",
    "Guillermo Varela (URU)",
    "Joaquín Piquerez (URU)",
    "José María Giménez (URU)",
    "Juan Manuel Sanabria (URU)",
    "Manuel Ugarte (URU)",
    "Mathías Olivera (URU)",
    "Matías Viña (URU)",
    "Maximiliano Araújo (URU)",
    "Nicolás De La Cruz (URU)",
    "Rodrigo Aguirre (URU)",
    "Rodrigo Bentancur (URU)",
    "Rodrigo Zalazar (URU)",
    "Ronald Araújo (URU)",
    "Santiago Bueno (URU)",
    "Santiago Mele (URU)",
    "Sebastián Cáceres (URU)",
    "Sergio Rochet (URU)"
  ] },
  { pais: "Uzbekistán", players: [
    "Abbosek Fayzullaev (UZB)",
    "Abdukodir Khusanov (UZB)",
    "Abdulla Abdullaev (UZB)",
    "Abduvokhid Nematov (UZB)",
    "Akmal Mozgovoy (UZB)",
    "Alisher Odilov (UZB)",
    "Avazbek Ulmasaliev (UZB)",
    "Azizjon Ganiev (UZB)",
    "Botirali Ergashev (UZB)",
    "Dostonbek Khamdamov (UZB)",
    "Eldor Shomurodov (UZB)",
    "Farrukh Sayfiev (UZB)",
    "Ibrohimkhalil Yuldoshev (UZB)",
    "Jakhongir Urozov (UZB)",
    "Jaloliddin Masharipov (UZB)",
    "Jamshid Iskanderov (UZB)",
    "Jasurbek Jaloliddinov (UZB)",
    "Khojiakbar Alijonov (UZB)",
    "Kuvondik Ruziev (UZB)",
    "Mukhammadkodir Hamraliev (UZB)",
    "Nodirbek Abdurazzokov (UZB)",
    "Odiljon Khamrobekov (UZB)",
    "Oston Urunov (UZB)",
    "Otabek Shukurov (UZB)",
    "Rustamjon Ashurmatov (UZB)",
    "Sardorbek Rakhmonov (UZB)",
    "Sherzod Esanov (UZB)",
    "Umarali Rakhmonaliev (UZB)",
    "Umarbek Eshmurodov (UZB)",
    "Utkir Yusupov (UZB)",
    "Vladimir Nazarov (UZB)"
  ] }
];
// Lista plana derivada (para el autocompletado de goleadores)
let JUGADORES_MUNDIAL = SELECCIONES.flatMap(s=>s.players).filter((v,i,a)=>a.indexOf(v)===i).sort();

// Función para enriquecer/actualizar la lista desde football-data.org (gratuita, sin key)
// Se llama al cargar si hay conexión; si falla usa la lista base de arriba
async function cargarJugadoresDesdeAPI() {
  // football-data.org ofrece competiciones de selecciones
  // API pública para Copa del Mundo: endpoint /v4/competitions/WC/teams
  // Nota: requiere key gratuita en x-auth-token header
  // Como alternativa, usamos Open Football Data (JSON estático de GitHub)
  try {
    const url = 'https://raw.githubusercontent.com/openfootball/world-cup/master/2026/squads.json';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    let res;
    try {
      res = await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timeoutId);
    }
    if (!res.ok) throw new Error('no ok');
    const data = await res.json();
    if (data && Array.isArray(data.squads)) {
      const apiPlayers = [];
      data.squads.forEach(squad => {
        (squad.players || []).forEach(p => {
          const name = p.name || '';
          if (name && !apiPlayers.includes(name)) apiPlayers.push(name);
        });
      });
      if (apiPlayers.length > 50) {
        JUGADORES_MUNDIAL = apiPlayers.sort();
        console.log(`[mundIAl] ${apiPlayers.length} jugadores cargados desde API`);
      }
    }
  } catch(e) {
    console.log('[mundIAl] API jugadores no disponible, usando lista base local');
  }
}


const FASES_ELIM = [
  {id:'16avos', label:'Dieciseisavos de final', pts:1,  cruces:16},
  {id:'8vos',   label:'Octavos de final',       pts:2,  cruces:8},
  {id:'4tos',   label:'Cuartos de final',        pts:3,  cruces:4},
  {id:'semis',  label:'Semifinales',             pts:5,  cruces:2},
  {id:'3ro',    label:'Tercer puesto',           pts:5,  cruces:1},
  {id:'final',  label:'Final',                   pts:20, cruces:1},
];

// Ventanas de carga de pronóstico (el cierre se aplica 12 hs antes del primer
// partido de la fase). "semifinal" agrupa semis + 3er puesto + final en una sola carga.
const FASES_ELIM_WIN = [
  {id:'16avos',    label:'Dieciseisavos'},
  {id:'8vos',      label:'Octavos'},
  {id:'4tos',      label:'Cuartos'},
  {id:'semifinal', label:'Semifinal + Final'},
];

let currentStep=1, adminLogged=false, currentTab='fase1', filtroActivo='';
let allData={participantes:[],puntosEquipos:{},golesJugadores:{},resultadosElim:{},campeonFinal:'',fechaLimite:'',cierresElim:{},forzarPronosticos:''};
let dashParts=[];          // participantes tal como se muestran en la tabla (para el click)
let currentPronoIdx=-1;    // fila abierta en el visor de pronóstico

// Email con el que el usuario quedó identificado (al cargar o al ver su pronóstico)
function getKnownEmail(){
  try{ return (localStorage.getItem('mund_email') || currentElimEmail || '').toLowerCase().trim(); }
  catch(e){ return (currentElimEmail||'').toLowerCase().trim(); }
}
function setKnownEmail(e){
  e=(e||'').toLowerCase().trim();
  try{ localStorage.setItem('mund_email', e); }catch(_){}
  currentElimEmail = e;
}

// Goleadores elegidos en Step 4
let golesElegidos=[];

// ================================================================
// INIT
// ================================================================
window.addEventListener('load',()=>{
  // Aviso si se está viendo desde github.com/blob en lugar de GitHub Pages
  if (location.hostname === 'github.com') {
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#7f1d1d;color:#fca5a5;padding:12px 20px;font-size:14px;text-align:center;font-family:sans-serif';
    banner.innerHTML = '⚠️ <strong>URL incorrecta.</strong> Abre la app desde GitHub Pages: <a href="https://fundacionforge.github.io/mundial2026/" style="color:#fbbf24;font-weight:bold">fundacionforge.github.io/mundial2026</a>';
    document.body.prepend(banner);
  }

  buildTeamPickers();
  buildGoleadoresPickers();
  populateCampeonSelect();
  aplicarNavCacheada();                // evita el "flash" de Pronósticos al cargar
  if(accesoAdmin()) showPage('admin'); // apertura inmediata si entran por /#admin
  window.addEventListener('hashchange',()=>{ if(accesoAdmin()) showPage('admin'); });
  loadDashboard().then(()=>{
    if(!window.__navConfigurada){ window.__navConfigurada=true; configurarNav(); }
  });
  iniciarCountdown();
  // La lista de jugadores ahora es fija y autoritativa (cargada desde
  // Jugadoresmundial2026.json). NO se enriquece desde APIs externas para
  // evitar que se pisen los nombres con datos incompletos/erróneos.
});

// ================================================================
// COUNTDOWN + BLOQUEO AUTOMÁTICO DEL FORMULARIO
// ================================================================
function getFechaLimite(){
  if(allData.fechaLimite) return new Date(allData.fechaLimite);
  return FECHA_MUNDIAL;
}

function iniciarCountdown(){
  tickCountdown();
  setInterval(tickCountdown, 1000);
}

function tickCountdown(){
  const limite = getFechaLimite();
  const ahora = new Date();
  const diff = limite - ahora;

  if(diff <= 0){
    // Bloquear formulario
    document.getElementById('countdownWrap').style.display='none';
    document.getElementById('formCerradoBanner').style.display='block';
    document.getElementById('pronoFormContent').style.display='none';
    return;
  }

  // Formulario abierto
  document.getElementById('formCerradoBanner').style.display='none';
  document.getElementById('pronoFormContent').style.display='block';

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));
  const s = Math.floor((diff%(1000*60))/1000);

  document.getElementById('cdDias').textContent  = String(d).padStart(2,'0');
  document.getElementById('cdHoras').textContent = String(h).padStart(2,'0');
  document.getElementById('cdMins').textContent  = String(m).padStart(2,'0');
  document.getElementById('cdSegs').textContent  = String(s).padStart(2,'0');
}

// ================================================================
// BUILDERS
// ================================================================
function buildTeamPickers(){
  const opts=EQUIPOS_2026.map(e=>`<option value="${e}">${e}</option>`).join('');
  ['mejoresPicker','peoresPicker'].forEach((id,i)=>{
    const bad=i===1;
    document.getElementById(id).innerHTML=[1,2,3,4,5].map(n=>`
      <div class="team-row">
        <div class="team-num ${bad?'bad':''}">${n}</div>
        <div class="select-wrap" style="flex:1">
          <select class="${bad?'peores-sel':'mejores-sel'}" onchange="checkCruce()">
            <option value="" disabled selected>Elige un equipo</option>${opts}
          </select>
        </div>
      </div>`).join('');
  });
}

function buildGoleadoresPickers(){
  golesElegidos=[];
  renderGolChips();
  actualizarNumGol();
}

function populateCampeonSelect(){
  const opts=EQUIPOS_2026.map(e=>`<option value="${e}">${e}</option>`).join('');
  ['campeon','campeonFinal'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.innerHTML+=opts;
  });
}

// ---- AUTOCOMPLETE GOLEADORES ----
function onGolInput(q){
  const dd = document.getElementById('golDropdown');
  if(!q.trim()){ dd.classList.remove('open'); dd.innerHTML=''; return; }
  const resultados = JUGADORES_MUNDIAL
    .filter(j=>j.toLowerCase().includes(q.toLowerCase()) && !golesElegidos.includes(j))
    .slice(0,50);
  if(!resultados.length){ dd.classList.remove('open'); dd.innerHTML=''; return; }
  dd.innerHTML = resultados.map((j,i)=>`<div class="autocomplete-item" data-idx="${i}" onmousedown="elegirGol('${j.replace(/'/g,"\\'")}')"><span>⚽</span> ${j}</div>`).join('');
  dd.classList.add('open');
}

function onGolKeydown(e){
  const dd = document.getElementById('golDropdown');
  const items = dd.querySelectorAll('.autocomplete-item');
  const active = dd.querySelector('.ac-active');
  if(e.key==='ArrowDown'){
    e.preventDefault();
    const next = active ? active.nextElementSibling : items[0];
    if(next){ active && active.classList.remove('ac-active'); next.classList.add('ac-active'); }
  } else if(e.key==='ArrowUp'){
    e.preventDefault();
    const prev = active ? active.previousElementSibling : items[items.length-1];
    if(prev){ active && active.classList.remove('ac-active'); prev.classList.add('ac-active'); }
  } else if(e.key==='Enter'){
    e.preventDefault();
    if(active) elegirGol(active.textContent.replace('⚽','').trim());
    else {
      const q = document.getElementById('golSearchInput').value.trim();
      if(q && !golesElegidos.includes(q)) elegirGol(q);
    }
  } else if(e.key==='Escape'){
    dd.classList.remove('open');
  }
}

function elegirGol(nombre){
  nombre = nombre.trim();
  if(!nombre || golesElegidos.length>=5 || golesElegidos.includes(nombre)) return;
  golesElegidos.push(nombre);
  renderGolChips();
  actualizarNumGol();
  document.getElementById('golSearchInput').value='';
  document.getElementById('golDropdown').classList.remove('open');
  document.getElementById('golDropdown').innerHTML='';
  document.getElementById('errorGoles').style.display='none';
  if(golesElegidos.length<5) document.getElementById('golSearchInput').focus();
}

// ---- Panel de ayuda: todos los equipos y sus jugadores ----
function sinPais(n){ return n.replace(/\s*\([A-Za-z]{2,4}\)\s*$/,''); }

function abrirAyudaJugadores(){
  const s=document.getElementById('jugAyudaSearch'); if(s) s.value='';
  renderAyudaJugadores('');
  document.getElementById('jugadoresOverlay').style.display='flex';
}
function cerrarAyudaJugadores(){
  document.getElementById('jugadoresOverlay').style.display='none';
}
function filtrarAyudaJugadores(q){ renderAyudaJugadores(q); }

function renderAyudaJugadores(q){
  q=(q||'').toLowerCase().trim();
  const cont=document.getElementById('jugadoresAyudaBody');
  if(!cont) return;
  const html=SELECCIONES.map(s=>{
    const paisMatch=s.pais.toLowerCase().includes(q);
    const list=(!q||paisMatch)?s.players:s.players.filter(p=>p.toLowerCase().includes(q));
    if(!list.length) return '';
    const chips=list.map(p=>{
      const sel=golesElegidos.includes(p);
      return `<button class="jug-chip ${sel?'sel':''}" onclick="elegirGolDesdeAyuda('${p.replace(/'/g,"\\'")}')">${sinPais(p)}</button>`;
    }).join('');
    return `<div class="jug-grupo"><div class="jug-pais">${s.pais} <span style="opacity:.55;font-weight:400">(${list.length})</span></div><div class="jug-chips">${chips}</div></div>`;
  }).join('');
  cont.innerHTML = html || '<div style="color:var(--text-muted);padding:1rem;text-align:center">Sin resultados</div>';
}

function elegirGolDesdeAyuda(nombre){
  if(golesElegidos.includes(nombre)){ notify('Ese jugador ya está elegido'); return; }
  if(golesElegidos.length>=5){ notify('Ya elegiste 5 goleadores'); return; }
  elegirGol(nombre);
  const s=document.getElementById('jugAyudaSearch');
  renderAyudaJugadores(s?s.value:'');
  notify(sinPais(nombre)+' agregado ⚽');
}

function quitarGol(idx){
  golesElegidos.splice(idx,1);
  renderGolChips();
  actualizarNumGol();
}

function renderGolChips(){
  document.getElementById('golChips').innerHTML = golesElegidos.map((g,i)=>`
    <div class="gol-chip">⚽ ${g}<button onclick="quitarGol(${i})" title="Quitar">×</button></div>`).join('');
}

function actualizarNumGol(){
  const n = golesElegidos.length+1;
  const wrap = document.getElementById('golPickerWrap');
  if(golesElegidos.length>=5){
    wrap.style.display='none';
  } else {
    wrap.style.display='block';
    document.getElementById('golNumIndicator').textContent=n;
  }
}

// ================================================================
// VALIDACIÓN CRUZADA mejores ≠ peores
// ================================================================
function checkCruce(){
  const mejores=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value).filter(Boolean);
  const peoresSels=[...document.querySelectorAll('.peores-sel')];
  let cruces=[];
  peoresSels.forEach(sel=>{
    const isMala=mejores.includes(sel.value);
    sel.style.borderColor=isMala?'var(--red)':'';
    sel.style.boxShadow=isMala?'0 0 0 3px rgba(248,113,113,.2)':'';
    if(isMala && sel.value) cruces.push(sel.value);
  });
  const errEl=document.getElementById('errorCruce');
  if(errEl){
    if(cruces.length){
      errEl.style.display='block';
      errEl.textContent=`⚠️ "${cruces[0]}" ya está en tus mejores. Un equipo no puede estar en ambas listas.`;
    } else {
      errEl.style.display='none';
    }
  }
}

// ================================================================
// NAVEGACIÓN
// ================================================================
function goStep(n){
  if(n>currentStep && !validateStep(currentStep)) return;
  document.getElementById(`step${currentStep}`).style.display='none';
  currentStep=n;
  document.getElementById(`step${currentStep}`).style.display='block';
  updateStepUI();
  if(n===6) buildResumen();
  window.scrollTo({top:0,behavior:'smooth'});
}

// Paso 1 → 2: además de validar el formato, avisa al instante si el email ya
// tiene un pronóstico cargado (sin tener que llegar al final).
async function siguienteDesdeStep1(btn){
  if(!validateStep(1)) return;
  const email = document.getElementById('emailInput').value.trim().toLowerCase();
  const txt = btn ? btn.textContent : '';
  if(btn){ btn.disabled=true; btn.textContent='Verificando…'; }
  let existe=false;
  try{
    const res = await fetch(CONFIG.SCRIPT_URL+'?action=checkEmail&email='+encodeURIComponent(email));
    const data = await res.json();
    existe = !!(data && data.exists);
  }catch(e){ existe=false; } // si el chequeo falla, igual se valida al enviar
  if(btn){ btn.disabled=false; btn.textContent=txt; }
  if(existe){
    const err=document.getElementById('emailError');
    err.style.display='block';
    err.innerHTML='😊 <strong>¡Ya tenemos tu pronóstico!</strong> Este email ya está registrado. Cada participante puede enviar uno solo. Mira la tabla para ver cómo te va.';
    notify('Ese email ya tiene un pronóstico cargado');
    return;
  }
  goStep(2);
}

function validateStep(n){
  if(n===1){
    if(!document.getElementById('nombre').value.trim()){notify('Escribe tu nombre 😅');return false}
    const email=document.getElementById('emailInput').value.trim();
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      document.getElementById('emailError').style.display='block';
      document.getElementById('emailError').textContent='⚠️ Ingresa un email válido para identificarte.';
      notify('Ingresa un email válido 📧');return false;
    }
    document.getElementById('emailError').style.display='none';
    if(!document.getElementById('pais').value){notify('¿De dónde eres?');return false}
  }
  if(n===2){
    const sels=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value);
    if(sels.some(v=>!v)){notify('Elige los 5 mejores equipos');return false}
    if(new Set(sels).size<5){notify('No puedes repetir equipos');return false}
  }
  if(n===3){
    const mejores=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value);
    const peores=[...document.querySelectorAll('.peores-sel')].map(s=>s.value);
    if(peores.some(v=>!v)){notify('Elige los 5 peores equipos');return false}
    if(new Set(peores).size<5){notify('No puedes repetir equipos en los peores');return false}
    const cruce=peores.find(p=>mejores.includes(p));
    if(cruce){notify(`"${cruce}" ya está en tus mejores. Elige otro equipo.`);return false}
  }
  if(n===4){
    if(golesElegidos.length<5){
      document.getElementById('errorGoles').style.display='block';
      document.getElementById('errorGoles').textContent=`⚠️ Elige ${5-golesElegidos.length} goleador${golesElegidos.length===4?'':'es'} más para completar los 5.`;
      notify('Elige los 5 goleadores ⚽');return false;
    }
    if(new Set(golesElegidos).size<5){
      notify('Los 5 goleadores deben ser distintos');return false;
    }
  }
  if(n===5){
    if(!document.getElementById('campeon').value){notify('Elige tu campeón 🏆');return false}
  }
  return true;
}

function updateStepUI(){
  for(let i=1;i<=6;i++){
    const dot=document.getElementById(`dot${i}`);
    const lbl=document.getElementById(`lbl${i}`);
    if(i<currentStep){
      dot.className='step-dot done';dot.textContent='✓';
      if(lbl)lbl.className='step-label';
    } else if(i===currentStep){
      dot.className='step-dot active';
      if(i<=5)dot.textContent=i; else dot.textContent='✓';
      if(lbl)lbl.className='step-label active';
    } else {
      dot.className='step-dot';
      if(i<=5)dot.textContent=i; else dot.textContent='✓';
      if(lbl)lbl.className='step-label';
    }
    if(i<6){const line=document.getElementById(`line${i}`);if(line)line.className=i<currentStep?'step-line done':'step-line';}
  }
}

// ================================================================
// RESUMEN
// ================================================================
function buildResumen(){
  const mejores=[...document.querySelectorAll('.mejores-sel')].map(s=>s.value);
  const peores=[...document.querySelectorAll('.peores-sel')].map(s=>s.value);
  const campeon=document.getElementById('campeon').value;
  document.getElementById('resumen').innerHTML=`
    <div class="summary-group">
      <div class="summary-title">👤 Participante</div>
      <div class="summary-chips"><span class="chip chip-green">${document.getElementById('nombre').value} — ${document.getElementById('pais').value}</span></div>
    </div>
    <div class="summary-group">
      <div class="summary-title">⭐ Mis 5 mejores <small style="opacity:.6">(sus puntos suman)</small></div>
      <div class="summary-chips">${mejores.map(e=>`<span class="chip chip-green">${e}</span>`).join('')}</div>
    </div>
    <div class="summary-group">
      <div class="summary-title">💀 Mis 5 peores <small style="opacity:.6">(sus puntos restan)</small></div>
      <div class="summary-chips">${peores.map(e=>`<span class="chip chip-red">${e}</span>`).join('')}</div>
    </div>
    <div class="summary-group">
      <div class="summary-title">🥅 Mis 5 goleadores <small style="opacity:.6">(cada gol suma)</small></div>
      <div class="summary-chips">${golesElegidos.map(g=>`<span class="chip chip-gold">${g}</span>`).join('')}</div>
    </div>
    <div class="summary-group">
      <div class="summary-title">🏆 Mi campeón</div>
      <div class="summary-chips"><span class="chip chip-gold">${campeon} — +20 pts si acierto</span></div>
    </div>`;
}

// ================================================================
// ENVÍO con verificación de email duplicado
// ================================================================
async function enviarPronostico(){
  const btn=document.getElementById('btnEnviar');
  btn.textContent='📡 Enviando...';btn.disabled=true;

  const email = document.getElementById('emailInput').value.trim().toLowerCase();

  // Verificar si el email ya existe
  try{
    const res = await fetch(CONFIG.SCRIPT_URL+'?action=checkEmail&email='+encodeURIComponent(email));
    const data = await res.json();
    if(data && data.exists){
      document.getElementById('step6').style.display='none';
      document.getElementById('stepDuplicado').style.display='block';
      btn.textContent='🚀 Enviar mi pronóstico';btn.disabled=false;
      return;
    }
  }catch(e){
    // Si el check falla, el backend también lo valida con el campo email
  }

  const payload={
    action:'addParticipante',
    nombre:document.getElementById('nombre').value.trim(),
    email:email,
    pais:document.getElementById('pais').value,
    mejores:[...document.querySelectorAll('.mejores-sel')].map(s=>s.value).join(','),
    peores:[...document.querySelectorAll('.peores-sel')].map(s=>s.value).join(','),
    goleadores:golesElegidos.join(','),
    campeon:document.getElementById('campeon').value,
    timestamp:new Date().toISOString(),
  };
  try{
    await fetch(CONFIG.SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    });
    setKnownEmail(email); // queda identificado para poder ver su propio pronóstico
    document.getElementById('step6').style.display='none';
    document.getElementById('step7').style.display='block';
  }catch(e){
    notify('Error al enviar. Intenta de nuevo.');
    btn.textContent='🚀 Enviar mi pronóstico';btn.disabled=false;
  }
}

// ================================================================
// DASHBOARD
// ================================================================
async function loadDashboard(){
  try{
    const res=await fetch(CONFIG.SCRIPT_URL+'?action=getData');
    allData=await res.json();
    renderDashboard();
  }catch(e){renderDemoData();}
}

function renderDemoData(){
  allData={
    participantes:[
      {nombre:'María López',    pais:'Argentina',mejores:'Argentina,Francia,Brasil,España,Alemania',  peores:'Arabia Saudita,Bolivia,Indonesia,Ghana,Siria',    goleadores:'Messi,Mbappé,Vinicius Jr.,Kane,Lewandowski', campeon:'Argentina'},
      {nombre:'Carlos Ruiz',    pais:'México',   mejores:'Brasil,España,Inglaterra,Portugal,Francia', peores:'Honduras,Arabia Saudita,Bolivia,Ghana,Guatemala', goleadores:'Vinicius Jr.,Kane,Mbappé,Messi,Benzema',     campeon:'Brasil'},
      {nombre:'Ana Müller',     pais:'Colombia', mejores:'Alemania,Francia,España,Argentina,Portugal',peores:'Arabia Saudita,Bolivia,Siria,Ghana,Indonesia',    goleadores:'Havertz,Mbappé,Musiala,Bellingham,Wirtz',campeon:'Alemania'},
      {nombre:'Pedro Silva',    pais:'Uruguay',  mejores:'Brasil,Argentina,Francia,Inglaterra,España',peores:'Bolivia,Ghana,Siria,Arabia Saudita,Indonesia',    goleadores:'Vinicius Jr.,Rodrygo,Messi,Neymar,Mbappé',   campeon:'Brasil'},
      {nombre:'Sophie Martin',  pais:'Chile',    mejores:'Francia,Brasil,Argentina,España,Alemania',  peores:'Arabia Saudita,Bolivia,Indonesia,Siria,Ghana',   goleadores:'Mbappé,Dembélé,Griezmann,Díaz (L.),Messi',  campeon:'Francia'},
      {nombre:'James Wilson',   pais:'Perú',     mejores:'Inglaterra,Francia,Brasil,España,Argentina',peores:'Arabia Saudita,Bolivia,Indonesia,Siria,Ghana',   goleadores:'Kane,Bellingham,Saka,Rashford,Mbappé',   campeon:'Inglaterra'},
      {nombre:'Laura González', pais:'Ecuador',  mejores:'España,Brasil,Argentina,Francia,Portugal',  peores:'Arabia Saudita,Siria,Bolivia,Ghana,Indonesia',   goleadores:'Yamal,Mbappé,Vinicius Jr.,Messi,Pedri',      campeon:'España'},
    ],
    puntosEquipos:{'Argentina':9,'Brasil':7,'Francia':6,'España':8,'Alemania':5,'Arabia Saudita':1,'Bolivia':0,'Siria':0},
    golesJugadores:{'Messi':3,'Mbappé':4,'Vinicius Jr.':2,'Kane':2,'Lewandowski':1,'Havertz':1,'Bellingham':2,'Dembélé':1,'Yamal':2},
    resultadosElim:{'16avos_1':'Argentina','16avos_2':'Francia'},
    campeonFinal:'',
    fechaLimite:''
  };
  renderDashboard();
}

function calcPuntos(p,tab){
  const mejores=(p.mejores||'').split(',').map(s=>s.trim()).filter(Boolean);
  const peores=(p.peores||'').split(',').map(s=>s.trim()).filter(Boolean);
  const goles=(p.goleadores||'').split(',').map(s=>s.trim()).filter(Boolean);
  let pf1=0;
  mejores.forEach(e=>{pf1+=allData.puntosEquipos[e]||0;});
  peores.forEach(e=>{pf1-=allData.puntosEquipos[e]||0;});
  goles.forEach(g=>{pf1+=allData.golesJugadores[g]||0;});
  let pf2=0;
  FASES_ELIM.forEach(fase=>{
    for(let c=1;c<=fase.cruces;c++){
      const ganador=(allData.resultadosElim[`${fase.id}_${c}`]||'').trim();
      if(!ganador)continue;
      const pick=(p[`pick_${fase.id}_${c}`]||'').trim();
      if(pick===ganador)pf2+=fase.pts;
    }
  });
  const bonus=(allData.campeonFinal&&p.campeon&&p.campeon.trim()===allData.campeonFinal.trim())?20:0;
  if(tab==='fase1')return pf1;
  if(tab==='fase2')return pf2;
  return pf1+pf2+bonus;
}

function renderDashboard(){
  actualizarTabsDashboard();
  const todos=[...(allData.participantes||[])]
    .sort((a,b)=>calcPuntos(b,currentTab)-calcPuntos(a,currentTab))
    .slice(0,100); // máximo 100 registros en la tabla

  const filtro=filtroActivo.toLowerCase().trim();
  const tbody=document.getElementById('tablaBody');

  if(!todos.length){
    tbody.innerHTML='<tr><td colspan="4" style="text-align:center;padding:3rem;color:var(--text-muted)">Aún no hay participantes inscriptos</td></tr>';
    return;
  }

  // Puntajes ya ordenados de mayor a menor
  const scores=todos.map(p=>calcPuntos(p,currentTab));
  const n=scores.length;
  const maxScore=scores[0];
  const minScore=scores[n-1];
  const hasSpread=maxScore!==minScore; // si todos empatan no marcamos a nadie
  // Líder/es: todos los que comparten el mejor puntaje.
  // Últimos 4: las 4 peores posiciones, extendido a empates en el corte.
  const loserCutoff=(n>=5 && hasSpread)?scores[n-4]:null;

  dashParts=todos; // referencia para abrir el pronóstico al cliquear una fila

  tbody.innerHTML=todos.map((p,i)=>{
    const pts=scores[i];
    const rank=scores.findIndex(s=>s===pts)+1; // empates comparten posición
    const isLeader=hasSpread && n>=2 && pts===maxScore;
    const isLoser=loserCutoff!==null && pts<=loserCutoff && !isLeader;
    let rankClass='rank-n', rowClass='';
    if(isLeader){rankClass='rank-1';rowClass='leader';}
    else if(isLoser){rankClass='rank-last';rowClass='loser';}
    const initials=(p.nombre||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const hasCamp=allData.campeonFinal&&p.campeon&&p.campeon.trim()===allData.campeonFinal.trim();
    const ptsClass=pts>0?'pts-pos':pts<0?'pts-neg':'pts-zero';
    const nombre=p.nombre||'';
    const isMatch=filtro&&nombre.toLowerCase().includes(filtro);
    const hidden=filtro&&!isMatch?'hidden-row':'';
    const hl=isMatch?'highlight':'';
    const crown=isLeader?' 👑':'';
    return `<tr class="${hidden} ${rowClass} ${hl}" onclick="abrirPronostico(${i})" style="cursor:pointer" title="Ver pronóstico">
      <td><div class="rank-badge ${rankClass}">${rank}</div></td>
      <td><div class="player-cell">
        <div class="avatar">${initials}</div>
        <div><div class="player-name">${nombre}${crown}</div><div class="player-country">${p.pais||''}</div></div>
      </div></td>
      <td style="text-align:right"><span class="pts ${ptsClass}">${pts>0?'+':''}${pts}</span></td>
      <td style="text-align:right;font-size:13px;color:var(--text-muted)">${p.campeon||'—'}${hasCamp?' 🏆':''}</td>
    </tr>`;
  }).join('');
}

function filtrarTabla(val){
  filtroActivo=val;
  renderDashboard();
}

function hayElimDisponible(){
  return FASES_ELIM_WIN.some(w=>elimState(w.id).known);
}

function showTab(tab,btn){
  // "Tabla Eliminatorias" no se puede elegir hasta que la fase esté disponible
  if(tab==='fase2' && !hayElimDisponible()) return;
  currentTab=tab;
  renderDashboard();
}

// Grisar "Tabla Eliminatorias" hasta que se habilite y marcar la solapa activa.
function actualizarTabsDashboard(){
  const hayElim=hayElimDisponible();
  const f2=document.getElementById('tabFase2');
  if(f2) f2.classList.toggle('disabled', !hayElim);
  if(currentTab==='fase2' && !hayElim) currentTab='total';
  [['tabFase1','fase1'],['tabFase2','fase2'],['tabTotal','total']].forEach(([id,t])=>{
    const b=document.getElementById(id); if(b) b.classList.toggle('active', currentTab===t);
  });
}

// ================================================================
// ELIMINATORIAS — carga de pronósticos por fase (por email)
// ================================================================
let currentElimEmail='', currentElimPart=null, currentElimWin='', elimSel={}, elimCountdownTimer=null;

function loadElimPage(){
  // Refresca datos y, si ya estaba identificado, re-renderiza
  fetch(CONFIG.SCRIPT_URL+'?action=getData')
    .then(r=>r.json()).then(d=>{ if(d&&d.participantes) allData=d; })
    .catch(()=>{})
    .finally(()=>{ if(currentElimEmail) identificarElim(); });
}

function cr(clave){ return (allData.crucesElim||{})[clave] || {}; }

function clavesDeVentana(win){
  if(win==='16avos') return Array.from({length:16},(_,i)=>'16avos_'+(i+1));
  if(win==='8vos')   return Array.from({length:8 },(_,i)=>'8vos_'+(i+1));
  if(win==='4tos')   return Array.from({length:4 },(_,i)=>'4tos_'+(i+1));
  if(win==='semifinal') return ['semis_1','semis_2','final_1','3ro_1'];
  return [];
}
// Cruces que necesitan matchup conocido para que la ventana se considere "abierta"
function clavesBaseVentana(win){
  return win==='semifinal' ? ['semis_1','semis_2'] : clavesDeVentana(win);
}

function elimState(win){
  const base=clavesBaseVentana(win);
  const cruces=allData.crucesElim||{};
  const known = base.length>0 && base.every(k=>cruces[k] && cruces[k].home && cruces[k].away);
  const dl=(allData.deadlines||{})[win]||'';
  const closed = dl ? (new Date() > new Date(dl)) : false;
  return {known, dl, closed};
}

function identificarElim(){
  const email=document.getElementById('elimEmail').value.trim().toLowerCase();
  const err=document.getElementById('elimGateError');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    err.style.display='block'; err.textContent='⚠️ Ingresa un email válido.'; return;
  }
  const part=(allData.participantes||[]).find(p=>(p.email||'').toLowerCase().trim()===email);
  if(!part){
    err.style.display='block';
    err.textContent='No encontramos ese email. Primero carga tu pronóstico inicial en la pestaña ⚽ Pronósticos.';
    document.getElementById('elimContent').innerHTML='';
    return;
  }
  err.style.display='none';
  setKnownEmail(email); currentElimPart=part;
  renderElimContent(part);
}

function renderElimContent(part){
  const cont=document.getElementById('elimContent');
  if(!cont) return;
  const open=FASES_ELIM_WIN.find(w=>{const s=elimState(w.id);return s.known && !s.closed;});
  let html=`<div style="font-size:13px;color:var(--text-muted);margin-bottom:1rem">Hola <strong style="color:var(--verde)">${part.nombre||part.email||''}</strong> 👋</div>`;
  if(open){
    currentElimWin=open.id;
    elimSel={};
    clavesDeVentana(open.id).forEach(k=>{ if(part.picks && part.picks[k]) elimSel[k]=part.picks[k]; });
    html+=`<div class="elim-win-title">${open.label} <span class="elim-badge open">Abierta</span></div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:.75rem">Cierra: <span id="elimDeadlineTxt">—</span> · faltan <span id="elimCountdown" style="color:var(--gold);font-weight:700">—</span></div>
      <div id="elimFormArea">${buildElimFormInner(open.id)}</div>
      <button class="btn btn-primary" style="margin-top:1rem;width:100%" onclick="submitElimPicks()">💾 Guardar pronóstico de ${open.label}</button>`;
  } else {
    currentElimWin='';
    html+=`<div class="admin-card"><div class="admin-desc">Por ahora no hay ninguna fase abierta para cargar. La próxima ventana se habilita cuando se definan los cruces de la siguiente fase, y cierra 12 hs antes del primer partido.</div></div>`;
  }
  html+=renderElimResumen(part);
  cont.innerHTML=html;
  if(open) iniciarCountdownElim(open.id);
}

function buildElimFormInner(win){
  if(win==='semifinal') return buildSemifinalForm();
  return clavesDeVentana(win).map((k,idx)=>{
    const c=cr(k);
    return crucePickCard('Cruce '+(idx+1), k, c.home, c.away);
  }).join('');
}

function crucePickCard(label, clave, home, away){
  const sel=elimSel[clave]||'';
  const btn=(team)=>{
    const isSel = !!team && sel===team;
    return `<button class="team-pick ${isSel?'sel':''}" ${team?`onclick="pickTeam('${clave}','${(team||'').replace(/'/g,"\\'")}')"`:'disabled'}>${isSel?'✓ ':''}${team||'—'}</button>`;
  };
  return `<div class="cruce-card"><div class="cruce-label">${label}</div><div class="cruce-teams">${btn(home)}${btn(away)}</div></div>`;
}

function perdedorSemi(clave){
  const c=cr(clave), w=elimSel[clave];
  if(!w||!c.home||!c.away) return '';
  return w===c.home ? c.away : c.home;
}

function buildSemifinalForm(){
  const s1=cr('semis_1'), s2=cr('semis_2');
  let html='';
  html+=crucePickCard('Semifinal 1', 'semis_1', s1.home, s1.away);
  html+=crucePickCard('Semifinal 2', 'semis_2', s2.home, s2.away);
  const finalistas=[elimSel['semis_1'],elimSel['semis_2']].filter(Boolean);
  if(finalistas.length===2){
    html+=crucePickCard('Final — ¿Campeón? (1º)', 'final_1', finalistas[0], finalistas[1]);
  } else {
    html+=`<div class="cruce-card"><div class="cruce-label">Final — ¿Campeón? (1º)</div><div style="font-size:12px;color:var(--text-muted)">Elige primero el ganador de cada semifinal.</div></div>`;
  }
  const perdedores=[perdedorSemi('semis_1'),perdedorSemi('semis_2')].filter(Boolean);
  if(perdedores.length===2){
    html+=crucePickCard('Tercer puesto (3º)', '3ro_1', perdedores[0], perdedores[1]);
  } else {
    html+=`<div class="cruce-card"><div class="cruce-label">Tercer puesto (3º)</div><div style="font-size:12px;color:var(--text-muted)">Se habilita al elegir los ganadores de las semis.</div></div>`;
  }
  html+=buildPodioResumen(finalistas);
  return html;
}

function buildPodioResumen(finalistas){
  const camp=elimSel['final_1']||'';
  const sub = (finalistas.length===2 && camp) ? (finalistas.find(t=>t!==camp)||'') : '';
  const tercero=elimSel['3ro_1']||'';
  const perdedores=[perdedorSemi('semis_1'),perdedorSemi('semis_2')].filter(Boolean);
  const cuarto = (perdedores.length===2 && tercero) ? (perdedores.find(t=>t!==tercero)||'') : '';
  const row=(pos,team)=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(22,101,52,.2)"><span style="color:var(--text-muted)">${pos}</span><strong>${team||'—'}</strong></div>`;
  return `<div class="cruce-card" style="margin-top:12px"><div class="cruce-label">Tu podio</div>
    ${row('🥇 1º Campeón',camp)}${row('🥈 2º Subcampeón',sub)}${row('🥉 3º',tercero)}${row('4º',cuarto)}</div>`;
}

function pickTeam(clave, team){
  elimSel[clave]=team;
  if(currentElimWin==='semifinal') sanitizeSemifinal();
  const area=document.getElementById('elimFormArea');
  if(area) area.innerHTML=buildElimFormInner(currentElimWin);
}

function sanitizeSemifinal(){
  const finalistas=[elimSel['semis_1'],elimSel['semis_2']].filter(Boolean);
  if(!(finalistas.length===2 && finalistas.includes(elimSel['final_1']))) delete elimSel['final_1'];
  const perdedores=[perdedorSemi('semis_1'),perdedorSemi('semis_2')].filter(Boolean);
  if(!(perdedores.length===2 && perdedores.includes(elimSel['3ro_1']))) delete elimSel['3ro_1'];
}

function submitElimPicks(){
  const win=currentElimWin;
  if(!win) return;
  // Re-chequeo de cierre del lado cliente
  if(elimState(win).closed){ notify('La ventana de esta fase ya cerró.'); renderElimContent(currentElimPart); return; }
  const req=clavesDeVentana(win);
  const faltan=req.filter(k=>!elimSel[k]);
  if(faltan.length){ notify('Completa todos los pronósticos de la fase antes de guardar.'); return; }
  const picks={};
  req.forEach(k=>picks[k]=elimSel[k]);
  saveToSheet({action:'updatePicks', email:currentElimEmail, picks:picks, fase:win});
  // Optimista: reflejar localmente
  currentElimPart.picks=Object.assign({}, currentElimPart.picks||{}, picks);
  Object.keys(picks).forEach(k=>currentElimPart['pick_'+k]=picks[k]);
  notify('Pronóstico guardado ✓');
  renderElimContent(currentElimPart);
}

function renderElimResumen(part){
  let html='<div class="elim-win-title" style="font-size:18px;color:var(--text)">Estado de tus fases</div>';
  FASES_ELIM_WIN.forEach(w=>{
    const s=elimState(w.id);
    let badge='pending', txt='Pendiente';
    if(s.known && !s.closed){badge='open';txt='Abierta';}
    else if(s.closed){badge='closed';txt='Cerrada';}
    const claves=clavesDeVentana(w.id);
    const cargados=claves.filter(k=>part.picks && part.picks[k]).length;
    html+=`<div class="cruce-card"><div style="display:flex;justify-content:space-between;align-items:center">
      <span><strong>${w.label}</strong> <span class="elim-badge ${badge}">${txt}</span></span>
      <span style="font-size:12px;color:var(--text-muted)">${cargados}/${claves.length} cargados</span></div></div>`;
  });
  return html;
}

function iniciarCountdownElim(win){
  if(elimCountdownTimer) clearInterval(elimCountdownTimer);
  const dl=(allData.deadlines||{})[win];
  const txtEl=document.getElementById('elimDeadlineTxt');
  if(txtEl) txtEl.textContent = dl ? new Date(dl).toLocaleString('es-AR') : 'a definir';
  const tick=()=>{
    const el=document.getElementById('elimCountdown');
    if(!el){ clearInterval(elimCountdownTimer); return; }
    if(!dl){ el.textContent='—'; return; }
    const diff=new Date(dl)-new Date();
    if(diff<=0){ el.textContent='cerrada'; clearInterval(elimCountdownTimer); renderElimContent(currentElimPart); return; }
    const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
    el.textContent=`${d}d ${h}h ${m}m ${s}s`;
  };
  tick(); elimCountdownTimer=setInterval(tick,1000);
}

// ================================================================
// ADMIN
// ================================================================
function showPage(page,btn){
  if(page==='admin'){
    if(!adminLogged){document.getElementById('loginOverlay').style.display='flex';return;}
    loadAdminData();
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  if(btn) btn.classList.add('active');
  if(page==='dashboard')loadDashboard();
  if(page==='elim')loadElimPage();
}

// Orden/visibilidad de las solapas según la fase activa:
// - Fase de grupos abierta → "Pronósticos" primero y activa; "Eliminatorias" oculta.
// - Hay una ventana de eliminatorias abierta → "Eliminatorias" primero y activa.
// - En cualquier otro caso (torneo en curso sin ventana abierta) → "Tablas" activa.
// Criterio: primero se carga (pronósticos/eliminatorias) y luego se ven las tablas.
function configurarNav(){
  const nav=document.querySelector('nav');
  const bProde =document.getElementById('navProde');
  const bTablas=document.getElementById('navDashboard');
  const bElim  =document.getElementById('navElim');
  const bAdmin =document.getElementById('adminBtn');
  if(!nav||!bProde||!bTablas||!bElim||!bAdmin) return;

  const openElim  = FASES_ELIM_WIN.some(w=>{const s=elimState(w.id);return s.known && !s.closed;});
  const hayElim   = FASES_ELIM_WIN.some(w=>elimState(w.id).known);
  const grupoOpen = new Date() < getFechaLimite();
  const forzarPro = (allData.forzarPronosticos==='1' || allData.forzarPronosticos===true);
  // Una vez que hay eliminatorias disponibles, "Pronósticos" se oculta (la fase de
  // grupos ya terminó), salvo que el Admin fuerce mostrarla.
  const mostrarPro = !hayElim || forzarPro;

  // Tabla activa por defecto: "1ra Ronda" en fase de grupos; "General" cuando ya hay eliminatorias
  if(!window.__tabAutoSet){ window.__tabAutoSet=true; currentTab = hayElim ? 'total' : 'fase1'; }

  bElim.style.display  = hayElim   ? '' : 'none';
  bProde.style.display = mostrarPro ? '' : 'none';

  let orden, activaBtn, activaPage;
  if(openElim){
    orden=[bElim,bTablas,bProde,bAdmin]; activaBtn=bElim;   activaPage='elim';
  } else if(grupoOpen && mostrarPro){
    orden=[bProde,bTablas,bElim,bAdmin]; activaBtn=bProde;  activaPage='prode';
  } else if(hayElim){
    orden=[bElim,bTablas,bProde,bAdmin]; activaBtn=bElim;   activaPage='elim';
  } else {
    orden=[bTablas,bElim,bProde,bAdmin]; activaBtn=bTablas; activaPage='dashboard';
  }
  orden.forEach(b=>nav.appendChild(b)); // reordena en el DOM
  // Recordar la decisión para aplicarla al instante en la próxima carga (sin flash)
  try{ localStorage.setItem('mund_nav', JSON.stringify({hayElim, mostrarPro, activaPage})); }catch(e){}
  if(accesoAdmin()) showPage('admin'); else showPage(activaPage, activaBtn);
}

// Aplica al instante (antes de consultar el backend) la última configuración de
// solapas conocida, para que no se vea el "flash" de Pronósticos mientras carga.
function aplicarNavCacheada(){
  if(accesoAdmin()) return;
  let c; try{ c=JSON.parse(localStorage.getItem('mund_nav')||'null'); }catch(e){ c=null; }
  if(!c) return;
  const bProde=document.getElementById('navProde');
  const bElim =document.getElementById('navElim');
  if(bElim)  bElim.style.display  = c.hayElim    ? '' : 'none';
  if(bProde) bProde.style.display = c.mostrarPro ? '' : 'none';
  if(c.activaPage){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    const pg=document.getElementById('page-'+c.activaPage); if(pg) pg.classList.add('active');
    const map={prode:'navProde',dashboard:'navDashboard',elim:'navElim'};
    const btn=document.getElementById(map[c.activaPage]); if(btn) btn.classList.add('active');
  }
}

// Acceso discreto a Admin: solo por URL con #admin (o ?admin / ruta /admin).
// El botón Admin no figura en el menú.
function accesoAdmin(){
  const h=(location.hash||'').toLowerCase();
  const s=(location.search||'').toLowerCase();
  const p=(location.pathname||'').toLowerCase();
  return h==='#admin' || s.indexOf('admin')>=0 || p.replace(/\/$/,'').endsWith('/admin');
}

// MEJORA: botón "Volver" en el overlay de login
function cerrarLoginOverlay(){
  document.getElementById('loginOverlay').style.display='none';
  document.getElementById('adminPass').value='';
  document.getElementById('loginError').textContent='';
}

function checkLogin(){
  if(document.getElementById('adminPass').value===CONFIG.ADMIN_PASS){
    adminLogged=true;
    document.getElementById('loginOverlay').style.display='none';
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    document.getElementById('page-admin').classList.add('active');
    document.getElementById('adminBtn').classList.add('active');
    loadAdminData();
  }else{document.getElementById('loginError').textContent='Contraseña incorrecta';}
}

async function loadAdminData(){
  try{const res=await fetch(CONFIG.SCRIPT_URL+'?action=getData');allData=await res.json();}
  catch(e){renderDemoData();}
  renderAdminParticipantes();
  renderAdminGoles();
  renderAdminPuntosFase();
  renderAdminEliminatorias();
  renderFechaLimiteAdmin();
  renderDeadlinesElimAdmin();
  renderForzarProAdmin();
}

// ---- ADMIN: forzar visibilidad de la solapa Pronósticos ----
function renderForzarProAdmin(){
  const chk=document.getElementById('forzarProChk');
  if(chk) chk.checked = (allData.forzarPronosticos==='1' || allData.forzarPronosticos===true);
}

async function guardarForzarPro(){
  const chk=document.getElementById('forzarProChk');
  const val = chk.checked ? '1' : '';
  await saveToSheet({action:'updateConfig',key:'forzar_pronosticos',value:val});
  allData.forzarPronosticos = val;
  notify('Preferencia guardada ✓');
}

// ---- ADMIN FECHA LÍMITE ----
function renderFechaLimiteAdmin(){
  const status = document.getElementById('fechaLimiteStatus');
  const input  = document.getElementById('fechaLimiteInput');
  if(allData.fechaLimite){
    const d = new Date(allData.fechaLimite);
    // Convertir a formato datetime-local (local timezone)
    const offset = d.getTimezoneOffset()*60000;
    const localISO = new Date(d-offset).toISOString().slice(0,16);
    input.value = localISO;
    status.textContent = `✅ Cierre configurado: ${d.toLocaleString('es-AR')}`;
    status.style.color='var(--verde)';
  } else {
    input.value='';
    status.textContent='Sin fecha configurada. Se usa el inicio del Mundial (11 Jun 2026 12:00) por defecto.';
    status.style.color='var(--text-muted)';
  }
}

async function guardarFechaLimite(){
  const val = document.getElementById('fechaLimiteInput').value;
  if(!val){notify('Elige una fecha primero');return;}
  const isoFecha = new Date(val).toISOString();
  await saveToSheet({action:'updateConfig',key:'fechaLimite',value:isoFecha});
  allData.fechaLimite=isoFecha;
  notify('Fecha límite guardada ✓');
  renderFechaLimiteAdmin();
}

async function borrarFechaLimite(){
  await saveToSheet({action:'updateConfig',key:'fechaLimite',value:''});
  allData.fechaLimite='';
  notify('Fecha límite eliminada ✓');
  renderFechaLimiteAdmin();
}

// ---- ADMIN FECHAS TOPE ELIMINATORIAS (fallback manual) ----
function isoToLocalInput(iso){
  if(!iso) return '';
  const d = new Date(iso);
  const offset = d.getTimezoneOffset()*60000;
  return new Date(d-offset).toISOString().slice(0,16);
}

function renderDeadlinesElimAdmin(){
  const cont = document.getElementById('deadlinesElimAdmin');
  if(!cont) return;
  const cierres = allData.cierresElim || {};
  cont.innerHTML = FASES_ELIM_WIN.map(f=>`
    <div class="result-row">
      <span class="vs" style="min-width:120px">${f.label}</span>
      <input type="datetime-local" id="dl_${f.id}" value="${isoToLocalInput(cierres[f.id])}"
        style="flex:1;background:rgba(251,191,36,.05);border-color:rgba(251,191,36,.3);font-size:12px;padding:7px 10px">
    </div>`).join('');
}

async function guardarDeadlinesElim(){
  for(const f of FASES_ELIM_WIN){
    const val = document.getElementById('dl_'+f.id).value;
    const iso = val ? new Date(val).toISOString() : '';
    await saveToSheet({action:'updateConfig',key:'cierre_'+f.id,value:iso});
    allData.cierresElim[f.id] = iso;
  }
  const st = document.getElementById('deadlinesElimStatus');
  st.textContent = '✅ Fechas tope guardadas';
  st.style.color = 'var(--verde)';
  notify('Fechas tope guardadas ✓');
}

async function borrarDeadlinesElim(){
  for(const f of FASES_ELIM_WIN){
    await saveToSheet({action:'updateConfig',key:'cierre_'+f.id,value:''});
    allData.cierresElim[f.id] = '';
  }
  renderDeadlinesElimAdmin();
  const st = document.getElementById('deadlinesElimStatus');
  st.textContent = 'Volvió al cálculo automático (12 hs antes del primer partido de cada fase).';
  st.style.color = 'var(--text-muted)';
  notify('Volvió a automático ✓');
}

function renderAdminParticipantes(){
  const p=allData.participantes||[];
  document.getElementById('adminParticipantes').innerHTML=p.length
    ?p.map((x,i)=>`<tr>
        <td style="padding:6px 4px">${i+1}. <strong>${x.nombre}</strong></td>
        <td style="padding:6px 4px;color:var(--text-dim);font-size:11px">${x.email||'—'}</td>
        <td style="padding:6px 4px;text-align:right;color:var(--verde)">${x.pais}</td>
      </tr>`).join('')
    :'<tr><td style="color:var(--text-muted)">Sin inscriptos aún</td></tr>';
}

function renderAdminGoles(){
  const goleadores=[...new Set((allData.participantes||[]).flatMap(x=>(x.goleadores||'').split(',').map(g=>g.trim()).filter(Boolean)))].sort();
  document.getElementById('golesAdmin').innerHTML=goleadores.length
    ?goleadores.map(g=>`<div class="result-row"><span class="team-name">${g}</span><input type="number" class="goals-input" min="0" value="${allData.golesJugadores[g]||0}" data-gol="${g}"><span class="vs">goles</span></div>`).join('')
    :'<div style="color:var(--text-muted);font-size:13px">Los goleadores aparecen aquí una vez que los participantes se inscriban.</div>';
}

function renderAdminPuntosFase(){
  document.getElementById('puntosFaseAdmin').innerHTML=EQUIPOS_2026.map(e=>`
    <div class="result-row">
      <span class="team-name" style="font-size:12px">${e}</span>
      <input type="number" class="goals-input" min="0" value="${allData.puntosEquipos[e]||0}" data-equipo="${e}">
      <span class="vs" style="font-size:11px">pts</span>
    </div>`).join('');
}

function renderAdminEliminatorias(){
  const opts='<option value="">— Sin resultado —</option>'+EQUIPOS_2026.map(e=>`<option value="${e}">${e}</option>`).join('');
  let html='';
  FASES_ELIM.forEach(fase=>{
    html+=`<div class="bracket-section"><div class="bracket-section-title">⚡ ${fase.label} — ${fase.pts} pt${fase.pts>1?'s':''} por acierto</div>`;
    for(let c=1;c<=fase.cruces;c++){
      const key=`${fase.id}_${c}`;
      const val=allData.resultadosElim[key]||'';
      html+=`<div class="result-row">
        <span class="vs">Cruce ${c}</span>
        <div class="select-wrap" style="flex:1">
          <select data-elim="${key}" style="font-size:12px;padding:7px 10px">
            ${opts.replace(`value="${val}"`,`value="${val}" selected`)}
          </select>
        </div>
      </div>`;
    }
    html+='</div>';
  });
  document.getElementById('eliminatoriasAdmin').innerHTML=html;
}

async function guardarGoles(){
  const goles={};document.querySelectorAll('[data-gol]').forEach(i=>{goles[i.dataset.gol]=parseInt(i.value)||0;});
  await saveToSheet({action:'updateGoles',goles});allData.golesJugadores=goles;notify('Goles actualizados ✓');renderDashboard();
}
async function guardarPuntosFase(){
  const puntos={};document.querySelectorAll('[data-equipo]').forEach(i=>{puntos[i.dataset.equipo]=parseInt(i.value)||0;});
  await saveToSheet({action:'updatePuntosFase',puntos});allData.puntosEquipos=puntos;notify('Puntos guardados ✓');renderDashboard();
}
async function guardarEliminatorias(){
  const resultados={};document.querySelectorAll('[data-elim]').forEach(s=>{if(s.value)resultados[s.dataset.elim]=s.value;});
  await saveToSheet({action:'updateEliminatorias',resultados});allData.resultadosElim=resultados;notify('Resultados guardados ✓');renderDashboard();
}
async function guardarCampeon(){
  const val=document.getElementById('campeonFinal').value;
  await saveToSheet({action:'updateCampeon',campeon:val});allData.campeonFinal=val;notify('Campeón guardado ✓');renderDashboard();
}
async function saveToSheet(payload){
  try{await fetch(CONFIG.SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(payload)
  });}
  catch(e){console.log('Error:',e);}
}

// ================================================================
// VISOR DE PRONÓSTICO (al cliquear una fila de la tabla)
// Solo puedes ver tu propio pronóstico: si el sitio ya conoce tu email y
// coincide con la fila, lo muestra; si no, te pide el correo de esa fila.
// ================================================================
function abrirPronostico(i){
  const p=dashParts[i]; if(!p) return;
  currentPronoIdx=i;
  document.getElementById('pronoOverlay').style.display='flex';
  const known=getKnownEmail();
  if(known && known===(p.email||'').toLowerCase().trim()) renderPronoContenido(p);
  else renderPronoGate(p);
}

function cerrarPronostico(){
  document.getElementById('pronoOverlay').style.display='none';
}

function renderPronoGate(p){
  document.getElementById('pronoTitle').textContent='🔒 Ver tu pronóstico';
  document.getElementById('pronoBody').innerHTML=`
    <div style="font-size:14px;color:var(--text);line-height:1.6;margin-bottom:14px">Para ver este pronóstico, ingresa tu correo electrónico. Solo podrás ver el tuyo.</div>
    <input type="email" id="pronoEmailInput" placeholder="tu@email.com" onkeydown="if(event.key==='Enter')confirmarEmailPronostico()" style="margin-bottom:10px">
    <button class="btn btn-primary" style="width:100%" onclick="confirmarEmailPronostico()">Ver pronóstico</button>
    <div id="pronoGateError" style="display:none;color:var(--red);font-size:13px;margin-top:10px"></div>`;
  const inp=document.getElementById('pronoEmailInput'); if(inp) inp.focus();
}

function confirmarEmailPronostico(){
  const p=dashParts[currentPronoIdx]; if(!p) return;
  const email=(document.getElementById('pronoEmailInput').value||'').toLowerCase().trim();
  const err=document.getElementById('pronoGateError');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ err.style.display='block'; err.textContent='⚠️ Ingresa un email válido.'; return; }
  if(email===(p.email||'').toLowerCase().trim()){
    setKnownEmail(email);
    renderPronoContenido(p);
  } else {
    err.style.display='block';
    err.textContent='Solo puedes ver tus propios pronósticos.';
  }
}

function renderPronoContenido(p){
  document.getElementById('pronoTitle').textContent='📋 Pronóstico de '+(p.nombre||'');
  const chips=(csv,cls)=>{
    const arr=(csv||'').split(',').map(s=>s.trim()).filter(Boolean);
    return arr.length? arr.map(x=>`<span class="chip ${cls}">${x}</span>`).join('') : '<span style="color:var(--text-muted)">—</span>';
  };
  const picks=p.picks||{};
  const FAS=[['16avos','Dieciseisavos',16],['8vos','Octavos',8],['4tos','Cuartos',4],['semis','Semifinales',2],['3ro','Tercer puesto',1],['final','Final',1]];
  let elim='', any=false;
  FAS.forEach(([id,label,nc])=>{
    let lines='';
    for(let c=1;c<=nc;c++){
      const k=id+'_'+c, pick=picks[k]; if(!pick) continue; any=true;
      const cr=(allData.crucesElim||{})[k]||{};
      const matchup=(cr.home&&cr.away)?`<span style="color:var(--text-muted)">${cr.home} vs ${cr.away} →</span> `:'';
      lines+=`<div style="font-size:13px;padding:3px 0">${matchup}<strong style="color:var(--verde)">${pick}</strong></div>`;
    }
    if(lines) elim+=`<div style="margin-top:10px"><div class="jug-pais">${label}</div>${lines}</div>`;
  });
  if(!any) elim='<div style="color:var(--text-muted);font-size:13px">Sin pronósticos de eliminatorias cargados todavía.</div>';

  document.getElementById('pronoBody').innerHTML=`
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px">${p.pais||''}</div>
    <div class="summary-group"><div class="summary-title">⭐ 5 mejores</div><div class="summary-chips">${chips(p.mejores,'chip-green')}</div></div>
    <div class="summary-group"><div class="summary-title">💀 5 peores</div><div class="summary-chips">${chips(p.peores,'chip-red')}</div></div>
    <div class="summary-group"><div class="summary-title">🥅 5 goleadores</div><div class="summary-chips">${chips(p.goleadores,'chip-gold')}</div></div>
    <div class="summary-group"><div class="summary-title">🏆 Campeón</div><div class="summary-chips">${chips(p.campeon,'chip-gold')}</div></div>
    <div class="summary-group"><div class="summary-title">⚡ Eliminatorias</div>${elim}</div>`;
}

function notify(msg){
  const n=document.getElementById('notif');n.textContent=msg;n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'),3000);
}
