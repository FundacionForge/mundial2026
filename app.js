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
let JUGADORES_MUNDIAL = [
  "Aaron Hickey (ESC)", "Aaron Tshibola (COD)", "Aaron Wan-Bissaka (COD)", "Abbosek Fayzullaev (UZB)",
  "Abdallah Al-Fakhouri (JOR)", "Abdallah Nasib (JOR)", "Abde Ezzalzouli (MAR)", "Abdelmouhib Chamakh (TUN)",
  "Abdoulaye Seck (SEN)", "Abdukodir Khusanov (UZB)", "Abdul Fatawu Issahaku (GHA)", "Abdul Mumin (GHA)",
  "Abdulaziz Hatem (QAT)", "Abdulelah Al Amri (KSA)", "Abdülkerim Bardakci (TUR)", "Abdulla Abdullaev (UZB)",
  "Abdullah Al Hamdan (KSA)", "Abdullah Al Khaibari (KSA)", "Abduvokhid Nematov (UZB)", "Achraf Abada (ALG)",
  "Achraf Hakimi (MAR)", "Adalberto Carrasquilla (PAN)", "Adam Arous (TUN)", "Adam Hlozek (CHE)",
  "Adil Boulbina (ALG)", "Adrien Rabiot (FRA)", "Agustín Canobbio (URU)", "Ahmad Al-Juiadi (JOR)",
  "Ahmad Assaf (JOR)", "Ahmed Alaa (QAT)", "Ahmed Alkassar (KSA)", "Ahmed Basil (IRQ)",
  "Ahmed Fathi (QAT)", "Ahmed Fatouh (EGI)", "Ahmed Qasem (IRQ)", "Ahmed Reda Tagnaouti (MAR)",
  "Ahmed Yahya (IRQ)", "Ahmed Zizo (EGI)", "Ahmetcan Kaplan (TUR)", "Aiden O'Neill (AUS)",
  "Aimar Sher (IRQ)", "Aïssa Mandi (ALG)", "Ajdin Hrustic (AUS)", "Akam Hashim (IRQ)",
  "Akmal Mozgovoy (UZB)", "Akram Afif (QAT)", "Al-Hashmi Al-Hussain (QAT)", "Alaa Al Hejji (KSA)",
  "Alan Franco (ECU)", "Alan Minda (ECU)", "Alban Lafont (CIV)", "Alberto Quintero (PAN)",
  "Alejandro Romero Gamarra Kaku (PAR)", "Alejandro Zendejas (USA)", "Aleksandar Pavlovic (ALE)", "Alessandro Circati (AUS)",
  "Alessandro Schopf (AUT)", "Alex Arce (PAR)", "Álex Baena (ESP)", "Alex Freeman (USA)",
  "Álex Grimaldo (ESP)", "Alex Paulsen (NZL)", "Alex Rufer (NZL)", "Alex Sandro (BRA)",
  "Alexander Bernhardsson (SUE)", "Alexander Djiku (GHA)", "Alexander Isak (SUE)", "Alexander Nübel (ALE)",
  "Alexander Prass (AUT)", "Alexander Schlager (AUT)", "Alexander Sørloth (NOR)", "Alexandr Sojka (CHE)",
  "Alexandre Pierre (HAI)", "Alexandro Maidana (PAR)", "Alexis Mac Allister (ARG)", "Alexis Saelemaekers (BEL)",
  "Alexis Vega (MEX)", "Alfie Jones (CAN)", "Ali Abdi (TUN)", "Ali Ahmed (CAN)",
  "Ali Al-Hamadi (IRQ)", "Ali Alipour (IRN)", "Ali Azaizeh (JOR)", "Ali Jassim (IRQ)",
  "Ali Lajami (KSA)", "Ali Majrashi (KSA)", "Ali Olwan (JOR)", "Ali Yousef (IRQ)",
  "Alidu Seidu (GHA)", "Alireza Beiranvand (IRN)", "Alireza Jahanbakhsh (IRN)", "Alisher Odilov (UZB)",
  "Alisson (BRA)", "Alistair Johnston (CAN)", "Almoez Ali (QAT)", "Alphonso Davies (CAN)",
  "Altay Bayindir (TUR)", "Álvaro Fidalgo (MEX)", "Álvaro Montero (COL)", "Amad Diallo (CIV)",
  "Amadou Onana (BEL)", "Amar Dedic (BIH)", "Amar Memic (BIH)", "Amer Jamous (JOR)",
  "Amine Gouiri (ALG)", "Amir Al-Ammari (IRQ)", "Amir Hadziahmetovic (BIH)", "Amir Murillo (PAN)",
  "Amirhossein Hosseinzadeh (IRN)", "Anas Badawi (JOR)", "Anass Salah-Eddine (MAR)", "Andreas Schjelderup (NOR)",
  "Andrej Kramaric (CRO)", "Andrés Andrade (PAN)", "Andrés Cubas (PAR)", "Andy Robertson (ESC)",
  "Ange-Yoan Bonny (CIV)", "Ángelo Preciado (ECU)", "Angelo Stiller (ALE)", "Angus Gunn (ESC)",
  "Aníbal Godoy (PAN)", "Anis Ben Slimane (TUN)", "Anis Hadj Moussa (ALG)", "Ante Budimir (CRO)",
  "Anthony Elanga (SUE)", "Anthony Gordon (ING)", "Anthony Ralston (ESC)", "Anthony Valencia (ECU)",
  "Antoine Mendy (SEN)", "Antoine Semenyo (GHA)", "Antonee Robinson (USA)", "Antonio Nusa (NOR)",
  "Antonio Rüdiger (ALE)", "Antonio Sanabria (PAR)", "Ao Tanaka (JAP)", "Aqtay Abdallah (EGI)",
  "Ar'jany Martha (CUW)", "Arda Güler (TUR)", "Ardon Jashari (SUI)", "Aria Yousefi (IRN)",
  "Armando González (MEX)", "Armando Obispo (CUW)", "Armin Gigovic (BIH)", "Arthur Masuaku (COD)",
  "Arthur Theate (BEL)", "Assane Diao (SEN)", "Assim Madibo (QAT)", "Atakan Karazor (TUR)",
  "Aubrey Modiba (RSA)", "Augustine Boakye (GHA)", "Aurèle Amenda (SUI)", "Aurélien Tchouaméni (FRA)",
  "Auston Trusty (USA)", "Avazbek Ulmasaliev (UZB)", "Awer Mabil (AUS)", "Axel Tuanzebe (COD)",
  "Axel Witsel (BEL)", "Ayase Ueda (JAP)", "Ayman Yahya (KSA)", "Aymen Dahmen (TUN)",
  "Aymen Hussein (IRQ)", "Aymeric Laporte (ESP)", "Ayoub Al-Alawi (QAT)", "Ayoub El Kaabi (MAR)",
  "Ayoube Amaimouni (MAR)", "Ayumu Seko (JAP)", "Ayyoub Bouaddi (MAR)", "Azarias Londoño (PAN)",
  "Aziz Behich (AUS)", "Azizjon Ganiev (UZB)", "Azzedine Ounahi (MAR)", "Baba Abdul Rahman (GHA)",
  "Bae Jun-Ho (KOR)", "Bamba Dieng (SEN)", "Bara Sapoko Ndiaye (SEN)", "Baris Alper Yilmaz (TUR)",
  "Bart Verbruggen (PBA)", "Bazoumana Touré (CIV)", "Ben Gannon-Doak (ESC)", "Ben Old (NZL)",
  "Ben Waine (NZL)", "Benjamin Asare (GHA)", "Benjamin Nygren (SUE)", "Benjamin Tahirovic (BIH)",
  "Bernardo Silva (POR)", "Besfort Zeneli (SUE)", "Bilal El Khannouss (MAR)", "Billy Gilmour (ESC)",
  "Borja Iglesias (ESP)", "Botirali Ergashev (UZB)", "Bradley Barcola (FRA)", "Bradley Cross (RSA)",
  "Brahim Díaz (MAR)", "Braian Ojeda (PAR)", "Brandley Kuwas (CUW)", "Brandon Mechele (BEL)",
  "Brandon Thomas-Asante (GHA)", "Breel Embolo (SUI)", "Bremer (BRA)", "Brenden Aaronson (USA)",
  "Brian Brobbey (PBA)", "Brian Cipenga (COD)", "Brian Gutiérrez (MEX)", "Brian Rodríguez (URU)",
  "Brice Samba (FRA)", "Bruno Fernandes (POR)", "Bruno Guimarães (BRA)", "Bukayo Saka (ING)",
  "Caglar Söyüncü (TUR)", "Caleb Yirenkyi (GHA)", "Callan Elliot (NZL)", "Callum McCowatt (NZL)",
  "Cameron Burgess (AUS)", "Cameron Devlin (AUS)", "Camilo Vargas (COL)", "Can Uzun (TUR)",
  "Carl Fred Sainté (HAI)", "Carl Starfelt (SUE)", "Carlens Arcus (HAI)", "Carlos Acevedo (MEX)",
  "Carlos Andrés Gómez (COL)", "Carlos Harvey (PAN)", "Carney Chukwuemeka (AUT)", "Casemiro (BRA)",
  "Cecilio Waterman (PAN)", "Cédric Bakambu (COD)", "Cedric Itten (SUI)", "César Blackman (PAN)",
  "César Huerta (MEX)", "César Montes (MEX)", "César Samudio (PAN)", "César Yanis (PAN)",
  "Chadi Riad (MAR)", "Chancel Mbemba (COD)", "Charles De Ketelaere (BEL)", "Charles Pickel (COD)",
  "Ché Adams (ESC)", "Chemsdine Talbi (MAR)", "Cherif Ndiaye (SEN)", "Cho Kyu-Sung (KOR)",
  "Chris Brady (USA)", "Chris Richards (USA)", "Chris Wood (NZL)", "Christ Inao Oulaï (CIV)",
  "Christian Fassnacht (SUI)", "Christian Pulisic (USA)", "Christoph Baumgartner (AUT)", "Christopher Bonsu Baah (GHA)",
  "CJ dos Santos (CPV)", "Clément Akpa (CIV)", "Cody Gakpo (PBA)", "Connor Metcalfe (AUS)",
  "Craig Gordon (ESC)", "Cristian Martínez (PAN)", "Cristian Roldan (USA)", "Cristian Romero (ARG)",
  "Cristian Volpato (AUS)", "Cristiano Ronaldo (POR)", "Crysencio Summerville (PBA)", "Cucho Hernández (COL)",
  "Cyle Larin (CAN)", "Daichi Kamada (JAP)", "Dailon Livramento (CPV)", "Daizen Maeda (JAP)",
  "Damián Bobadilla (PAR)", "Dan Burn (ING)", "Dan Ndoye (SUI)", "Dani Olmo (ESP)",
  "Danial Eiri (IRN)", "Daniel Muñoz (COL)", "Daniel Svensson (SUE)", "Danilo (BRA)",
  "Danilo Santos (BRA)", "Danley Jean Jacques (HAI)", "Darwin Núñez (URU)", "David Affengruber (AUT)",
  "David Alaba (AUT)", "David Doudera (CHE)", "David Jurásek (CHE)", "David Møller Wolfe (NOR)",
  "David Ospina (COL)", "David Raum (ALE)", "David Raya (ESP)", "David Zima (CHE)",
  "Davinson Sánchez (COL)", "Dayne St. Clair (CAN)", "Dayot Upamecano (FRA)", "Dean Henderson (ING)",
  "Declan Rice (ING)", "Deiver Machado (COL)", "Denil Castillo (ECU)", "Denis Visinsky (CHE)",
  "Denis Zakaria (SUI)", "Deniz Undav (ALE)", "Dennis Dargahi (IRN)", "Dennis Hadzikadunic (BIH)",
  "Denzel Dumfries (PBA)", "Derek Cornelius (CAN)", "Deroy Duarte (CPV)", "Derrick Etienne (HAI)",
  "Desiré Doué (FRA)", "Deveron Fonville (CUW)", "Diego Gómez (PAR)", "Diego Moreira (BEL)",
  "Diney (CPV)", "Diogo Costa (POR)", "Diogo Dalot (POR)", "Djed Spence (ING)",
  "Djibril Sow (SUI)", "Dodi Lukebakio (BEL)", "Dom Hyam (ESC)", "Dominik Kotarski (CRO)",
  "Dominik Livakovic (CRO)", "Dominique Simon (HAI)", "Don Deedson Louicius (HAI)", "Donyell Malen (PBA)",
  "Dostonbek Khamdamov (UZB)", "Douglas Santos (BRA)", "Duckens Nazon (HAI)", "Duje Caleta-Car (CRO)",
  "Duke Lacroix (HAI)", "Dylan Batubinsika (COD)", "Dylan Bronn (TUN)", "Dzenis Burnic (BIH)",
  "Eberechi Eze (ING)", "Éderson (BRA)", "Edgardo Fariña (PAN)", "Edin Dzeko (BIH)",
  "Edmílson Junior (QAT)", "Edo Kayembe (COD)", "Édouard Mendy (SEN)", "Edson Álvarez (MEX)",
  "Egil Selvik (NOR)", "Ehsan Haddad (JOR)", "Ehsan Hajsafi (IRN)", "El Hadji Malick Diouf (SEN)",
  "El Mahdi Soliman (EGI)", "Eldor Shomurodov (UZB)", "Eli Just (NZL)", "Elias Achouri (TUN)",
  "Elias Saad (TUN)", "Elisha Owusu (GHA)", "Elliot Anderson (ING)", "Elliot Stroud (SUE)",
  "Ellyes Skhiri (TUN)", "Eloy Room (CUW)", "Elye Wahi (CIV)", "Emam Ashour (EGI)",
  "Emil Holm (SUE)", "Emiliano Martínez (ARG)", "Emiliano Martínez (URU)", "Emmanuel Agbadou (CIV)",
  "Endrick (BRA)", "Enner Valencia (ECU)", "Enzo Fernández (ARG)", "Eray Cömert (SUI)",
  "Eren Elmali (TUR)", "Éric Davis (PAN)", "Eric García (ESP)", "Erik Lira (MEX)",
  "Erik Smith (SUE)", "Erling Haaland (NOR)", "Ermedin Demirovic (BIH)", "Ermin Mahmic (BIH)",
  "Ernest Nuamah (GHA)", "Ersin Destanoglu (TUR)", "Esmir Bajraktarevic (BIH)", "Evan Ndicka (CIV)",
  "Evann Guessand (CIV)", "Evidence Makgopa (RSA)", "Exequiel Palacios (ARG)", "Ezri Konsa (ING)",
  "Fabián Balbuena (PAR)", "Fabian Rieder (SUI)", "Fabián Ruiz (ESP)", "Fabinho (BRA)",
  "Facundo Medina (ARG)", "Facundo Pellistri (URU)", "Fahad Talib (IRQ)", "Farès Chaïbi (ALG)",
  "Fares Ghedjemis (ALG)", "Farrukh Sayfiev (UZB)", "Federico Valverde (URU)", "Federico Viñas (URU)",
  "Felix Nmecha (ALE)", "Félix Torres (ECU)", "Feras Al Brikan (KSA)", "Ferdi Kadioglu (TUR)",
  "Fernando Muslera (URU)", "Ferran Torres (ESP)", "Fidel Escobar (PAN)", "Finlay Curtis (ESC)",
  "Finn Surman (NZL)", "Firas Chaouat (TUN)", "Fiston Mayele (COD)", "Florian Grillitsch (AUT)",
  "Florian Wiegele (AUT)", "Florian Wirtz (ALE)", "Folarin Balogun (USA)", "Francis De Vries (NZL)",
  "Francisco Conceição (POR)", "Francisco Trincão (POR)", "Franck Kessié (CIV)", "Frans Putros (IRQ)",
  "Frantzdy Pierrot (HAI)", "Fredrik André Bjørkan (NOR)", "Fredrik Aursnes (NOR)", "Frenkie de Jong (PBA)",
  "Gabriel Avalos (PAR)", "Gabriel Gudmundsson (SUE)", "Gabriel Magalhães (BRA)", "Gabriel Martinelli (BRA)",
  "Gaël Kakuta (COD)", "Garry Rodrigues (CPV)", "Gastón Olveira (PAR)", "Gavi (ESP)",
  "Gedeon Kalulu (COD)", "George Hirst (ESC)", "Gerónimo Rulli (ARG)", "Gervane Kastaneer (CUW)",
  "Gessime Yassine (MAR)", "Ghislain Konan (CIV)", "Gideon Mensah (GHA)", "Gilberto Mora (MEX)",
  "Gilson Benchimol (CPV)", "Gio Reyna (USA)", "Giorgian De Arrascaeta (URU)", "Giovani Lo Celso (ARG)",
  "Giuliano Simeone (ARG)", "Godfried Roemeratoe (CUW)", "Gonçalo Guedes (POR)", "Gonçalo Inacio (POR)",
  "Gonçalo Ramos (POR)", "Gonzalo Montiel (ARG)", "Gonzalo Plata (ECU)", "Gonzalo Valle (ECU)",
  "Granit Xhaka (SUI)", "Grant Hanley (ESC)", "Gregor Kobel (SUI)", "Guela Doué (CIV)",
  "Guillermo Martínez (MEX)", "Guillermo Ochoa (MEX)", "Guillermo Varela (URU)", "Gustaf Lagerbielke (SUE)",
  "Gustaf Nilsson (SUE)", "Gustavo Caballero (PAR)", "Gustavo Gómez (PAR)", "Gustavo Puerta (COL)",
  "Gustavo Velázquez (PAR)", "Guus Til (PBA)", "Habib Diarra (SEN)", "Hadj Mahmoud (TUN)",
  "Haissem Hassan (EGI)", "Haji Wright (USA)", "Hakan Çalhanoglu (TUR)", "Hamdy Fathy (EGI)",
  "Hamza Abdelkarim (EGI)", "Hannes Delcroix (HAI)", "Hannibal Mejbri (TUN)", "Hans Vanaken (BEL)",
  "Haris Tabakovic (BIH)", "Harry Kane (ING)", "Harry Souttar (AUS)", "Hassan Al-Haydos (QAT)",
  "Hassan Kadesh (KSA)", "Hassan Tambakti (KSA)", "Hazem Mastouri (TUN)", "Helio Varela (CPV)",
  "Henrik Falchener (NOR)", "Hernán Galíndez (ECU)", "Hicham Boudaoui (ALG)", "Hiroki Ito (JAP)",
  "Hjalmar Ekdal (SUE)", "Hossam Abdelmaguid (EGI)", "Hossein Hosseini (IRN)", "Hossein Kanaani (IRN)",
  "Houssem Aouar (ALG)", "Hugo Sochurek (CHE)", "Husam Abu Dahab (JOR)", "Hussein Ali (IRQ)",
  "Hwang Hee-Chan (KOR)", "Hwang In-Beom (KOR)", "Ibrahim Adel (EGI)", "Ibrahim Bayesh (IRQ)",
  "Ibrahim Maza (ALG)", "Ibrahim Mbaye (SEN)", "Ibrahim Sabra (JOR)", "Ibrahim Sadeh (JOR)",
  "Ibrahim Sangaré (CIV)", "Ibrahima Konaté (FRA)", "Ibrohimkhalil Yuldoshev (UZB)", "Idrissa Gana Gueye (SEN)",
  "Igor Matanovic (CRO)", "Igor Thiago (BRA)", "Ilay Camara (SEN)", "Iliman Ndiaye (SEN)",
  "Ime Okon (RSA)", "Iñaki Williams (GHA)", "Iqraam Rayners (RSA)", "Irfan Can Kahveci (TUR)",
  "Isak Hien (SUE)", "Isidro Pitta (PAR)", "Ismael Díaz (PAN)", "Ismaël Gharbi (TUN)",
  "Ismaël Koné (CAN)", "Ismael Saibari (MAR)", "Ismail Jakobs (SEN)", "Ismail Yüksek (TUR)",
  "Ismaïla Sarr (SEN)", "Israel Reyes (MEX)", "Issa Diop (MAR)", "Issa Laye (QAT)",
  "Ivan Basic (BIH)", "Ivan Perisic (CRO)", "Ivan Sunjic (BIH)", "Ivan Toney (ING)",
  "Ivor Pandur (CRO)", "Jack Hendry (ESC)", "Jackson Irvine (AUS)", "Jackson Porozo (ECU)",
  "Jacob Italiano (AUS)", "Jacob Shaffelburg (CAN)", "Jacob Widell Zetterstrom (SUE)", "Jakhongir Urozov (UZB)",
  "Jalal Hassan (IRQ)", "Jaloliddin Masharipov (UZB)", "Jamal Musiala (ALE)", "James Rodríguez (COL)",
  "James Trafford (ING)", "Jamie Leweling (ALE)", "Jaminton Campaz (COL)", "Jamiro Monteiro (CPV)",
  "Jamshid Iskanderov (UZB)", "Jan Kuchta (CHE)", "Jan Paul van Hecke (PBA)", "Jaouen Hadjam (ALG)",
  "Jarell Quansah (ING)", "Jaroslav Zeleny (CHE)", "Jason Geria (AUS)", "Jassim Gaber (QAT)",
  "Jasurbek Jaloliddinov (UZB)", "Jayden Adams (RSA)", "Jean Michaël Seri (CIV)", "Jean-Kévin Duverne (HAI)",
  "Jean-Philippe Mateta (FRA)", "Jean-Ricner Bellegarde (HAI)", "Jearl Margaritha (CUW)", "Jefferson Lerma (COL)",
  "Jehad Thakri (KSA)", "Jens Castrop (KOR)", "Jens Petter Hauge (NOR)", "Jeremy Antonisse (CUW)",
  "Jeremy Arévalo (ECU)", "Jérémy Doku (BEL)", "Jerome Opoku (GHA)", "Jesper Karlström (SUE)",
  "Jesse Randall (NZL)", "Jesús Gallardo (MEX)", "Jhon Arias (COL)", "Jhon Córdoba (COL)",
  "Jhon Lucumí (COL)", "Jindrich Stanek (CHE)", "Jiovany Ramos (PAN)", "Jo Hyun-Woo (KOR)",
  "Jo Yu-Min (KOR)", "Joan García (ESP)", "João Cancelo (POR)", "João Félix (POR)",
  "João Neves (POR)", "Joao Paulo (CPV)", "Joaquín Piquerez (URU)", "Joaquin Seys (BEL)",
  "Joe Bell (NZL)", "Joe Scally (USA)", "Joel Ordóñez (ECU)", "Joel Waterman (CAN)",
  "Johan Manzambi (SUI)", "Johan Mojica (COL)", "Johan Vásquez (MEX)", "John McGinn (ESC)",
  "John Souttar (ESC)", "John Stones (ING)", "John Yeboah (ECU)", "Johny Placide (HAI)",
  "Jonas Adjetey (GHA)", "Jonathan David (CAN)", "Jonathan Osorio (CAN)", "Jonathan Tah (ALE)",
  "Jordan Ayew (GHA)", "Jordan Bos (AUS)", "Jordan Henderson (ING)", "Jordan Pickford (ING)",
  "Jordy Alcívar (ECU)", "Jordy Caicedo (ECU)", "Jorge Carrascal (COL)", "Jorge Gutiérrez (PAN)",
  "Jorge Sánchez (MEX)", "Jørgen Strand Larsen (NOR)", "Joris Kayembe (COD)", "Jorrel Hato (PBA)",
  "Jose Canale (PAR)", "José Córdoba (PAN)", "José Fajardo (PAN)", "José Luis Rodríguez (PAN)",
  "Jose Manuel López (ARG)", "José María Giménez (URU)", "José Sá (POR)", "Joseph Anang (GHA)",
  "Joshua Brenet (CUW)", "Joshua Kimmich (ALE)", "Josip Stanisic (CRO)", "Josip Sutalo (CRO)",
  "Josko Gvardiol (CRO)", "Josué Casimir (HAI)", "Josue Duverger (HAI)", "Jovane Cabral (CPV)",
  "Jovo Lukic (BIH)", "Juan Caceres (PAR)", "Juan Camilo Portilla (COL)", "Juan Fernando Quintero (COL)",
  "Juan Manuel Sanabria (URU)", "Juan Musso (ARG)", "Jude Bellingham (ING)", "Jules Koundé (FRA)",
  "Julián Álvarez (ARG)", "Julián Quiñones (MEX)", "Julian Ryerson (NOR)", "Julio Enciso (PAR)",
  "Juninho Bacuna (CUW)", "Júnior Alonso (PAR)", "Junnosuke Suzuki (JAP)", "Junya Ito (JAP)",
  "Jürgen Locadia (CUW)", "Juriën Gaari (CUW)", "Jurriën Timber (PBA)", "Justin Kluivert (PBA)",
  "Kaan Ayhan (TUR)", "Kai Havertz (ALE)", "Kai Trewin (AUS)", "Kaishu Sano (JAP)",
  "Kalidou Koulibaly (SEN)", "Kamal Deen Sulemana (GHA)", "Kamogelo Sebelebele (RSA)", "Karem Akturkoglu (TUR)",
  "Karim Boudiaf (QAT)", "Karim Hafez (EGI)", "Keeto Thermoncy (HAI)", "Keisuke Goto (JAP)",
  "Keisuke Osako (JAP)", "Keito Nakamura (JAP)", "Kelvin Pires (CPV)", "Ken Sema (SUE)",
  "Kenan Yildiz (TUR)", "Kendry Páez (ECU)", "Kenji Gorré (CUW)", "Kenny McLean (ESC)",
  "Kento Shiogai (JAP)", "Kerim Alajbegovic (BIH)", "Kevin Castaño (COL)", "Kevin Danso (AUT)",
  "Kevin De Bruyne (BEL)", "Kevin Felida (CUW)", "Kevin Pina (CPV)", "Kevin Rodríguez (ECU)",
  "Kevin Yakob (IRQ)", "Khalid Al Ghannam (KSA)", "Khalil Ayari (TUN)", "Khojiakbar Alijonov (UZB)",
  "Khuliso Mudau (RSA)", "Khulumani Ndamane (RSA)", "Kieran Tierney (ESC)", "Kim Jin-Kyu (KOR)",
  "Kim Min-Jae (KOR)", "Kim Moon-Hwan (KOR)", "Kim Seung-Gyu (KOR)", "Kim Tae-Hyun (KOR)",
  "Knosinathi Sibisi (RSA)", "Ko Itakura (JAP)", "Kobbie Mainoo (ING)", "Kojo Oppong Peprah (GHA)",
  "Koki Ogawa (JAP)", "Koni De Winter (BEL)", "Konrad Laimer (AUT)", "Kosta Barbarouses (NZL)",
  "Krépin Diatta (SEN)", "Kristian Thorstvedt (NOR)", "Kristijan Jakic (CRO)", "Kristoffer Ajer (NOR)",
  "Kristoffer Nordfeldt (SUE)", "Kuvondik Ruziev (UZB)", "Kwasi Sibo (GHA)", "Kylian Mbappé (FRA)",
  "Lachlan Bayliss (NZL)", "Ladislav Krejcí (CHE)", "Lamine Camara (SEN)", "Lamine Yamal (ESP)",
  "Laros Duarte (CPV)", "Lautaro Martínez (ARG)", "Lawrence Ati-Zigi (GHA)", "Lawrence Shankland (ESC)",
  "Leandro Bacuna (CUW)", "Leandro Paredes (ARG)", "Leandro Trossard (BEL)", "Lee Dong-Gyeong (KOR)",
  "Lee Han-Beom (KOR)", "Lee Jae-Sung (KOR)", "Lee Kang-In (KOR)", "Lee Ki-Hyeok (KOR)",
  "Lee Tae-Seok (KOR)", "Lennart Karl (ALE)", "Lenny Joseph (HAI)", "Leo Østigard (NOR)",
  "Léo Pereira (BRA)", "Leon Goretzka (ALE)", "Leonardo Balerdi (ARG)", "Leroy Sané (ALE)",
  "Leverton Pierre (HAI)", "Lewis Ferguson (ESC)", "Liam Kelly (ESC)", "Liam Millar (CAN)",
  "Liberato Cacace (NZL)", "Lionel Messi (ARG)", "Lionel Mpasi (COD)", "Lisandro Martínez (ARG)",
  "Livano Comenencia (CUW)", "Logan Costa (CPV)", "Luc de Fougerolles (CAN)", "Luca Jaquez (SUI)",
  "Luca Zidane (ALG)", "Lucas Bergvall (SUE)", "Lucas Digne (FRA)", "Lucas Hernández (FRA)",
  "Lucas Herrington (AUS)", "Lucas Mendes (QAT)", "Lucas Paquetá (BRA)", "Luis Chávez (MEX)",
  "Luis Díaz (COL)", "Luis Mejía (PAN)", "Luis Romo (MEX)", "Luis Suárez (COL)",
  "Luiz Henrique (BRA)", "Luka Modric (CRO)", "Luka Sucic (CRO)", "Luka Vuskovic (CRO)",
  "Lukás Cerv (CHE)", "Lukás Hornícek (CHE)", "Lukás Provod (CHE)", "Lyle Foster (RSA)",
  "Lyndon Dykes (ESC)", "Maghnes Akliouche (FRA)", "Mahmoud Abunada (QAT)", "Mahmoud Saber (EGI)",
  "Mahmoud Trezeguet (EGI)", "Malick Thiaw (ALE)", "Malik Tillman (USA)", "Malo Gusto (FRA)",
  "Mamadou Sarr (SEN)", "Manaf Younis (IRQ)", "Manu Koné (FRA)", "Manuel Akanji (SUI)",
  "Manuel Neuer (ALE)", "Manuel Ugarte (URU)", "Marc Cucurella (ESP)", "Marc Guéhi (ING)",
  "Marc Pubill (ESP)", "Marcel Sabitzer (AUT)", "Marcelo Flores (CAN)", "Marcio Rosa (CPV)",
  "Marco Friedl (AUT)", "Marco Pasalic (CRO)", "Marcos Llorente (ESP)", "Marcus Pedersen (NOR)",
  "Marcus Rashford (ING)", "Marcus Thuram (FRA)", "Marin Pongracic (CRO)", "Mario Pasalic (CRO)",
  "Mark Flekken (PBA)", "Mark McKenzie (USA)", "Marko Arnautovic (AUT)", "Marko Farji (IRQ)",
  "Marko Stamenic (NZL)", "Marquinhos (BRA)", "Marten de Roon (PBA)", "Martin Baturina (CRO)",
  "Martin Erlic (CRO)", "Martin Expérience (HAI)", "Martin Ødegaard (NOR)", "Martin Zlomislic (BIH)",
  "Martín Zubimendi (ESP)", "Marvin Keller (SUI)", "Marvin Senaya (GHA)", "Marwan Ateya (EGI)",
  "Matej Kovár (CHE)", "Mateo Chávez (MEX)", "Mateo Kovacic (CRO)", "Matheus Cunha (BRA)",
  "Matheus Nunes (POR)", "Mathew Leckie (AUS)", "Mathew Ryan (AUS)", "Mathías Olivera (URU)",
  "Mathieu Choinière (CAN)", "Matias Fernandez-Pardo (BEL)", "Matías Galarza (PAR)", "Matías Viña (URU)",
  "Mats Wieffer (PBA)", "Matt Freese (USA)", "Matt Garbett (NZL)", "Matt Turner (USA)",
  "Matthieu Epolo (COD)", "Mattias Svanberg (SUE)", "Mauricio Magalhaes (PAR)", "Max Arfsten (USA)",
  "Max Crocombe (NZL)", "Maxence Lacroix (FRA)", "Maxim De Cuyper (BEL)", "Maxime Crépeau (CAN)",
  "Maximilian Beier (ALE)", "Maximiliano Araújo (URU)", "Mbekezeli Mbokazi (RSA)", "Mehdi Ghaedi (IRN)",
  "Mehdi Torabi (IRN)", "Melvin Masstil (ALG)", "Memphis Depay (PBA)", "Merchas Doski (IRQ)",
  "Merih Demiral (TUR)", "Mert Günok (TUR)", "Mert Müldür (TUR)", "Meschak Elia (COD)",
  "Meshaal Barsham (QAT)", "Michael Boxall (NZL)", "Michael Gregoritsch (AUT)", "Michael Olise (FRA)",
  "Michael Svoboda (AUT)", "Michael Woud (NZL)", "Michal Sadílek (CHE)", "Michel Aebischer (SUI)",
  "Micky van de Ven (PBA)", "Miguel Almirón (PAR)", "Mike Maignan (FRA)", "Mike Penders (BEL)",
  "Mikel Merino (ESP)", "Mikel Oyarzabal (ESP)", "Milad Mohammadi (IRN)", "Miles Robinson (USA)",
  "Milos Degenek (AUS)", "Miro Muheim (SUI)", "Mohamed Abdelmonemn (EGI)", "Mohamed Al Owais (KSA)",
  "Mohamed Alaa (EGI)", "Mohamed Amine Amoura (ALG)", "Mohamed Amine Ben Hamida (TUN)", "Mohamed Amine Tougai (ALG)",
  "Mohamed El Shenawy (EGI)", "Mohamed Hany (EGI)", "Mohamed Kanno (KSA)", "Mohamed Koné (CIV)",
  "Mohamed Salah (EGI)", "Mohamed Toure (AUS)", "Mohammad Abualnadi (JOR)", "Mohammad Ghorbani (IRN)",
  "Mohammad Mohebi (IRN)", "Mohammed Abu Alshamat (KSA)", "Mohammed Abu Hashish (JOR)", "Mohammed Abu Zraiq (JOR)",
  "Mohammed Al-Dawoud (JOR)", "Mohammed Mannai (QAT)", "Mohammed Muntari (QAT)", "Mohammed Waad (QAT)",
  "Mohanad Ali (IRQ)", "Mohanad Lasheen (EGI)", "Mohannad Abu Taha (JOR)", "Moïse Bombito (CAN)",
  "Moisés Caicedo (ECU)", "Moisés Ramírez (ECU)", "Mojmír Chytil (CHE)", "Montassar Talbi (TUN)",
  "Morgan Rogers (ING)", "Mortadha Ben Ouanes (TUN)", "Morten Thorsby (NOR)", "Mory Diaw (SEN)",
  "Mostafa Shobeir (EGI)", "Mostafa Ziko (EGI)", "Moteb Al Harbi (KSA)", "Mousa Al-Tamari (JOR)",
  "Moussa Niakhaté (SEN)", "Moustapha Mbow (SEN)", "Moutaz Neffati (TUN)", "Mubarak Shannan (QAT)",
  "Mukhammadkodir Hamraliev (UZB)", "Munir Kajoui (MAR)", "Musab Al Juwayr (KSA)", "Mustafa Saadoon (IRQ)",
  "N'Golo Kanté (FRA)", "Nabil Bentaleb (ALG)", "Nabil Emad (EGI)", "Nadiem Amiri (ALE)",
  "Nadir Benbouali (ALG)", "Nahuel Molina (ARG)", "Nando Pijnaker (NZL)", "Nasser Al Dawsari (KSA)",
  "Nathan Aké (PBA)", "Nathan Ngoy (BEL)", "Nathan Patterson (ESC)", "Nathan Saliba (CAN)",
  "Nathanaël Mbuku (COD)", "Nathaniel Brown (ALE)", "Nawaf Al Aqidi (KSA)", "Nawaf Boushal (KSA)",
  "Nayef Aguerd (MAR)", "Neil El Aynaoui (MAR)", "Nélson Semedo (POR)", "Nestory Irankunda (AUS)",
  "Neymar (BRA)", "Ngal'ayel Mukau (COD)", "Niall Mason (QAT)", "Nick Woltemade (ALE)",
  "Nico Elvedi (SUI)", "Nico O'Reilly (ING)", "Nico Paz (ARG)", "Nico Schlotterbeck (ALE)",
  "Nico Williams (ESP)", "Nicolás De La Cruz (URU)", "Nicolás González (ARG)", "Nicolas Jackson (SEN)",
  "Nicolás Otamendi (ARG)", "Nicolas Pépé (CIV)", "Nicolas Raskin (BEL)", "Nicolas Seiwald (AUT)",
  "Nicolás Tagliafico (ARG)", "Nidal Celik (BIH)", "Nihad Mujakic (BIH)", "Niko Sigur (CAN)",
  "Nikola Katic (BIH)", "Nikola Moro (CRO)", "Nikola Vasilj (BIH)", "Nikola Vlasic (CRO)",
  "Nilson Angulo (ECU)", "Nishan Velupillay (AUS)", "Nizar Al-Rashdan (JOR)", "Noa Lang (PBA)",
  "Noah Okafor (SUI)", "Noah Sadiki (COD)", "Nodirbek Abdurazzokov (UZB)", "Noni Madueke (ING)",
  "Noor Al-Rawabdeh (JOR)", "Nour Bani Attiah (JOR)", "Noussair Mazraoui (MAR)", "Nuno da Costa (CPV)",
  "Nuno Mendes (POR)", "Obed Vargas (MEX)", "Odeh Al-Fakhouri (JOR)", "Odiljon Khamrobekov (UZB)",
  "Odilon Kossounou (CIV)", "Oh Hyun-Kyu (KOR)", "Oliver Baumann (ALE)", "Ollie Watkins (ING)",
  "Olwethu Makhanya (RSA)", "Omar Alderete (PAR)", "Omar Marmoush (EGI)", "Omar Rekik (TUN)",
  "Omid Noorafkan (IRN)", "Orbelín Pineda (MEX)", "Ørjan Nyland (NOR)", "Orkun Kökçü (TUR)",
  "Orlando Gill (PAR)", "Orlando Mosquera (PAN)", "Oscar Bobb (NOR)", "Osman Hadzikic (BIH)",
  "Oston Urunov (UZB)", "Oswin Appollis (RSA)", "Otabek Shukurov (UZB)", "Oumar Diakité (CIV)",
  "Ousmane Diomande (CIV)", "Oussama Benbot (ALG)", "Owen Goodman (CAN)", "Ozan Kabak (TUR)",
  "Paik Seung-Ho (KOR)", "Pape Gueye (SEN)", "Pape Matar Sarr (SEN)", "Parfait Guiagon (CIV)",
  "Park Jin-Seop (KOR)", "Pascal Gross (ALE)", "Pathé Ciss (SEN)", "Patrick Beach (AUS)",
  "Patrick Berg (NOR)", "Patrick Pentz (AUT)", "Patrick Wimmer (AUT)", "Patrik Schick (CHE)",
  "Pau Cubarsí (ESP)", "Paul Izzo (AUS)", "Paul Okon-Engstler (AUS)", "Paul Reverson (GHA)",
  "Paul Wanner (AUT)", "Pavel Sulc (CHE)", "Payam Niazmand (IRN)", "Pedri (ESP)",
  "Pedro Miguel (QAT)", "Pedro Neto (POR)", "Pedro Porro (ESP)", "Pedro Vite (ECU)",
  "Pervis Estupiñán (ECU)", "Petar Musa (CRO)", "Petar Sucic (CRO)", "Philipp Lienhart (AUT)",
  "Philipp Mwene (AUT)", "Pico (CPV)", "Piero Hincapié (ECU)", "Promise David (CAN)",
  "Quinten Timber (PBA)", "Raed Chikhaoui (TUN)", "Rafael Leão (POR)", "Rafik Belghali (ALG)",
  "Rajaei Ayed (JOR)", "Rami Rabia (EGI)", "Ramin Rezaeian (IRN)", "Ramiz Zerrouki (ALG)",
  "Ramón Sosa (PAR)", "Ramy Bensebaini (ALG)", "Rani Khedira (TUN)", "Raphinha (BRA)",
  "Raúl Jiménez (MEX)", "Raúl Rangel (MEX)", "Rayan (BRA)", "Rayan Ait Nouri (ALG)",
  "Rayan Cherki (FRA)", "Rayan Elloumi (TUN)", "Rebin Sulaka (IRQ)", "Redouane Halhal (MAR)",
  "Reece James (ING)", "Relebohile Mofokeng (RSA)", "Remo Freuler (SUI)", "Renato Veiga (POR)",
  "Ricardo Adé (HAI)", "Ricardo Goss (RSA)", "Ricardo Pepi (USA)", "Ricardo Rodríguez (SUI)",
  "Ricardo Velho (POR)", "Richard Ríos (COL)", "Richie Laryea (CAN)", "Riechedly Bazoer (CUW)",
  "Ritsu Doan (JAP)", "Riyad Mahrez (ALG)", "Roberto Alvarado (MEX)", "Roberto Fernández (PAR)",
  "Robin Hranác (CHE)", "Robin Risser (FRA)", "Robin Roefs (PBA)", "Roderick Miller (PAN)",
  "Rodri (ESP)", "Rodrigo Aguirre (URU)", "Rodrigo Bentancur (URU)", "Rodrigo De Paul (ARG)",
  "Rodrigo Zalazar (URU)", "Roger Ibañez (BRA)", "Romano Schmid (AUT)", "Romelu Lukaku (BEL)",
  "Ronald Araújo (URU)", "Ronwen Williams (RSA)", "Roshon van Eijma (CUW)", "Ross Stewart (ESC)",
  "Rouzbeh Cheshmi (IRN)", "Rúben Dias (POR)", "Rúben Neves (POR)", "Ruben Providence (HAI)",
  "Rubén Vargas (SUI)", "Rui Silva (POR)", "Rustamjon Ashurmatov (UZB)", "Ryan Christie (ESC)",
  "Ryan Gravenberch (PBA)", "Ryan Mendes (CPV)", "Ryan Thomas (NZL)", "Sabri Ben Hessen (TUN)",
  "Sadio Mané (SEN)", "Saed Al-Rosna (JOR)", "Saeid Ezatolahi (IRN)", "Salah Zakaria (QAT)",
  "Saleem Obaid (JOR)", "Saleh Al Shehri (KSA)", "Saleh Hardani (IRN)", "Salem Al Dawsari (KSA)",
  "Salih Özcan (TUR)", "Saman Ghoddos (IRN)", "Samed Bazdar (BIH)", "Samet Akaydin (TUR)",
  "Samir Chergui (ALG)", "Samir El Mourabet (MAR)", "Samú Costa (POR)", "Samuel Moutoussamy (COD)",
  "Samukele Kabini (RSA)", "Sander Berge (NOR)", "Sander Tangvik (NOR)", "Santiago Arias (COL)",
  "Santiago Bueno (URU)", "Santiago Gimenez (MEX)", "Santiago Mele (URU)", "Sardorbek Rakhmonov (UZB)",
  "Sarpreet Singh (NZL)", "Sasa Kalajdzic (AUT)", "Saud Abdulhamid (KSA)", "Scott McKenna (ESC)",
  "Scott McTominay (ESC)", "Sead Kolasinac (BIH)", "Sebastian Berhalter (USA)", "Sebastián Cáceres (URU)",
  "Sebastian Tounekti (TUN)", "Seko Fofana (CIV)", "Senne Lammens (BEL)", "Seol Young-Woo (KOR)",
  "Sergiño Dest (USA)", "Sergio Rochet (URU)", "Shahriyar Moghanloo (IRN)", "Sherel Floranus (CUW)",
  "Sherzod Esanov (UZB)", "Shogo Taniguchi (JAP)", "Shoka Khalilzadeh (IRN)", "Shurandy Sambo (CUW)",
  "Sidny Lopes Cabral (CPV)", "Silvan Widmer (SUI)", "Simon Adingra (CIV)", "Simon Banza (COD)",
  "Sipho Chaine (RSA)", "Sofyan Amrabat (MAR)", "Solomon Agbasi (GHA)", "Son Heung-Min (KOR)",
  "Sondre Langås (NOR)", "Song Bum-Keun (KOR)", "Sontje Hansen (CUW)", "Soufiane Rahimi (MAR)",
  "Sphephelo Sithole (RSA)", "Stefan Posch (AUT)", "Stepán Chaloupek (CHE)", "Stephen Eustáquio (CAN)",
  "Steve Kapuadi (COD)", "Steven Moreira (CPV)", "Stjepan Radeljic (BIH)", "Stopira (CPV)",
  "Sultan Al Brake (QAT)", "Sultan Mandash (KSA)", "Taha Ali (SUE)", "Tahith Chong (CUW)",
  "Tahsin Mohammed (QAT)", "Tajon Buchanan (CAN)", "Takefusa Kubo (JAP)", "Takehiro Tomiyasu (JAP)",
  "Tani Oluwaseyi (CAN)", "Tarek Alaa (EGI)", "Taremi (IRN)", "Tarik Muharemovic (BIH)",
  "Teboho Mokoena (RSA)", "Telmo Arcanjo (CPV)", "Tete Yengi (AUS)", "Teun Koopmeiners (PBA)",
  "Thabang Matuludi (RSA)", "Thalente Mbatha (RSA)", "Thapelo Maseko (RSA)", "Thelo Aasgaard (NOR)",
  "Themba Zwane (RSA)", "Théo Bongonda (COD)", "Theo Hernández (FRA)", "Thiago Almada (ARG)",
  "Thibaut Courtois (BEL)", "Thomas Meunier (BEL)", "Thomas Partey (GHA)", "Tijjani Reijnders (PBA)",
  "Tim Payne (NZL)", "Tim Ream (USA)", "Tim Weah (USA)", "Timothy Castagne (BEL)",
  "Timothy Fayulu (COD)", "Tino Livramento (ING)", "Tomás Araújo (POR)", "Tomás Chory (CHE)",
  "Tomás Holes (CHE)", "Tomás Rodríguez (PAN)", "Tomás Soucek (CHE)", "Tommy Smith (NZL)",
  "Tomoki Hayakawa (JAP)", "Toni Fruk (CRO)", "Torbjørn Heggem (NOR)", "Trevor Doornbusch (CUW)",
  "Tshepang Moremi (RSA)", "Tsuyoshi Watanabe (JAP)", "Tyler Adams (USA)", "Tyler Bindon (NZL)",
  "Tyrese Noslin (CUW)", "Tyrick Bodak (CUW)", "Ugurcan Çakir (TUR)", "Um Ji-Sung (KOR)",
  "Umarali Rakhmonaliev (UZB)", "Umarbek Eshmurodov (UZB)", "Unai Simón (ESP)", "Utkir Yusupov (UZB)",
  "Valentín Barco (ARG)", "Victor Lindelöf (SUE)", "Víctor Muñoz (ESP)", "Viktor Gyökeres (SUE)",
  "Viktor Johansson (SUE)", "Vinícius Júnior (BRA)", "Virgil van Dijk (PBA)", "Vitinha (POR)",
  "Vladimír Coufal (CHE)", "Vladimír Darida (CHE)", "Vladimir Nazarov (UZB)", "Vozinha (CPV)",
  "Wagner Pina (CPV)", "Waldemar Anton (ALE)", "Warren Zaïre-Emery (FRA)", "Wataru Endo (JAP)",
  "Wesley (BRA)", "Weston McKennie (USA)", "Weverton (BRA)", "Wilfried Singo (CIV)",
  "Wilguens Paugain (HAI)", "Willer Ditta (COL)", "William Saliba (FRA)", "Willian Pacho (ECU)",
  "Willy Semedo (CPV)", "Wilson Isidor (HAI)", "Woodensky Pierre (HAI)", "Wout Weghorst (PBA)",
  "Xaver Schlager (AUT)", "Yahia Fofana (CIV)", "Yaimar Medina (ECU)", "Yan Diomande (CIV)",
  "Yan Valery (TUN)", "Yang Hyun-Jun (KOR)", "Yannick Semedo (CPV)", "Yasin Ayari (SUE)",
  "Yasser Ibrahim (EGI)", "Yassin Fortuné (HAI)", "Yassine Bounou (MAR)", "Yassine Titraoui (ALG)",
  "Yazan Al-Arab (JOR)", "Yazid Abulaila (JOR)", "Yehvann Diouf (SEN)", "Yéremy Pino (ESP)",
  "Yerry Mina (COL)", "Yoane Wissa (COD)", "Yoel Bárcenas (PAN)", "Youri Tielemans (BEL)",
  "Yousef Abu Al-Jazar (JOR)", "Yousef Qashi (JOR)", "Youssef Amyn (IRQ)", "Youssef Belammari (MAR)",
  "Yuito Suzuki (JAP)", "Yukinari Sugawara (JAP)", "Yunus Akgün (TUR)", "Yusuf Abdurisag (QAT)",
  "Yūto Nagatomo (JAP)", "Yvon Mvogo (SUI)", "Zaid Ismail (IRQ)", "Zaid Tahseen (IRQ)",
  "Zakaria El Ouahdi (MAR)", "Zeki Amdouni (SUI)", "Zeki Çelik (TUR)", "Zeno Debast (BEL)",
  "Zidane Iqbal (IRQ)", "Zinedine Belaid (ALG)", "Zion Suzuki (JAP)", "Ziyad Al Johani (KSA)",
].filter((v,i,a)=>a.indexOf(v)===i).sort();

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

let currentStep=1, adminLogged=false, currentTab='total', filtroActivo='';
let allData={participantes:[],puntosEquipos:{},golesJugadores:{},resultadosElim:{},campeonFinal:'',fechaLimite:'',cierresElim:{}};

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
    banner.innerHTML = '⚠️ <strong>URL incorrecta.</strong> Abrí la app desde GitHub Pages: <a href="https://adolforigacci.github.io/mundial2026/" style="color:#fbbf24;font-weight:bold">adolforigacci.github.io/mundial2026</a>';
    document.body.prepend(banner);
  }

  buildTeamPickers();
  buildGoleadoresPickers();
  populateCampeonSelect();
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
    .slice(0,8);
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

function validateStep(n){
  if(n===1){
    if(!document.getElementById('nombre').value.trim()){notify('Escribe tu nombre 😅');return false}
    const email=document.getElementById('emailInput').value.trim();
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      document.getElementById('emailError').style.display='block';
      document.getElementById('emailError').textContent='⚠️ Ingresá un email válido para identificarte.';
      notify('Ingresá un email válido 📧');return false;
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
      document.getElementById('errorGoles').textContent=`⚠️ Elegí ${5-golesElegidos.length} goleador${golesElegidos.length===4?'':'es'} más para completar los 5.`;
      notify('Elegí los 5 goleadores ⚽');return false;
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
    return `<tr class="${hidden} ${rowClass} ${hl}">
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

function showTab(tab,btn){
  currentTab=tab;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderDashboard();
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
    err.style.display='block'; err.textContent='⚠️ Ingresá un email válido.'; return;
  }
  const part=(allData.participantes||[]).find(p=>(p.email||'').toLowerCase().trim()===email);
  if(!part){
    err.style.display='block';
    err.textContent='No encontramos ese email. Primero cargá tu pronóstico inicial en la pestaña ⚽ Pronósticos.';
    document.getElementById('elimContent').innerHTML='';
    return;
  }
  err.style.display='none';
  currentElimEmail=email; currentElimPart=part;
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
  const btn=(team)=>`<button class="team-pick ${sel===team&&team?'sel':''}" ${team?`onclick="pickTeam('${clave}','${(team||'').replace(/'/g,"\\'")}')"`:'disabled'}>${team||'—'}</button>`;
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
    html+=`<div class="cruce-card"><div class="cruce-label">Final — ¿Campeón? (1º)</div><div style="font-size:12px;color:var(--text-muted)">Elegí primero el ganador de cada semifinal.</div></div>`;
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
  if(faltan.length){ notify('Completá todos los pronósticos de la fase antes de guardar.'); return; }
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

  // "Eliminatorias" solo aparece cuando ya hay cruces para cargar
  bElim.style.display = hayElim ? '' : 'none';

  let orden, activaBtn, activaPage;
  if(openElim){
    orden=[bElim,bTablas,bProde,bAdmin]; activaBtn=bElim;   activaPage='elim';
  } else if(grupoOpen){
    orden=[bProde,bTablas,bElim,bAdmin]; activaBtn=bProde;  activaPage='prode';
  } else {
    orden=[bTablas,bElim,bProde,bAdmin]; activaBtn=bTablas; activaPage='dashboard';
  }
  orden.forEach(b=>nav.appendChild(b)); // reordena en el DOM
  if(accesoAdmin()) showPage('admin'); else showPage(activaPage, activaBtn);
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
  if(!val){notify('Elegí una fecha primero');return;}
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
function notify(msg){
  const n=document.getElementById('notif');n.textContent=msg;n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'),3000);
}
