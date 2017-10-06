-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 05. 10 2017 kl. 14:14:27
-- Serverversion: 5.6.24
-- PHP-version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `praktiskweb`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `id` int(11) NOT NULL,
  `navn` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kategori`
--

INSERT INTO `kategori` (`id`, `navn`) VALUES
(1, 'cd');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontaktform`
--

CREATE TABLE IF NOT EXISTS `kontaktform` (
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `subject` varchar(40) NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `producent`
--

CREATE TABLE IF NOT EXISTS `producent` (
  `id` int(11) NOT NULL,
  `navn` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `producent`
--

INSERT INTO `producent` (`id`, `navn`) VALUES
(1, 'Producent 1');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkter`
--

CREATE TABLE IF NOT EXISTS `produkter` (
  `id` int(11) NOT NULL,
  `navn` varchar(20) NOT NULL,
  `pris` varchar(255) NOT NULL,
  `fk_kategori` int(20) NOT NULL,
  `fk_producent` int(11) NOT NULL,
  `beskrivelse` varchar(255) NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkter`
--

INSERT INTO `produkter` (`id`, `navn`, `pris`, `fk_kategori`, `fk_producent`, `beskrivelse`, `img`) VALUES
(1, 'Greenforrest 3422 CD', '450,- DKK', 1, 1, 'Greenforrest 3422, er den ultimative CD-afspiller. denne sprit nye model er klar til at indtage din stue og fylde den med lyd.', '\\img\\cd_afspiller_1-01.jpg'),
(2, 'Roomuse 3231 CD', '360,- DKK', 1, 1, 'Roomuse 3231, er den mere praktiske CD-afspiller. Denne model er klar til at tjene din stue og fylde den med lyd og musik.', '\\img\\cd_afspiller_4-01.jpg'),
(3, 'Compact 2344', '280,- DKK', 1, 1, 'Compact 2344, er den ultra kompakte CD-afspiller. Modellen er særligt designet til at kunne pakkes hvor pladsmangel er ralevant.', '\\img\\cd_afspiller_3-01.jpg'),
(4, 'CompactXD 7463', '666,- DKK', 1, 1, 'CompactXD 7463, er en smart CD-afspiller med talegenkendelse og massere af funktioner. super hurtig til at indlæse disks.', '\\img\\cd_afspiller_4-01.jpg'),
(5, 'Usher 3455', '750,- DKK', 1, 1, 'Usher 3455, er den perfekte løsning for dig hvis du ofte ser DVD-film og ønsker både at kunne beskytte og regulere på lyden.', '\\img\\dvd_afspiller_1-01.jpg'),
(6, 'Lazer 5403', '325,- DKK', 1, 1, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\dvd_afspiller_2-01.jpg'),
(7, 'Coldfire 2674', '400,- DKK', 3, 3, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys', '\\img\\effekt_forstker_1-01.jpg'),
(8, 'Cronex 4957', '324,- DKK', 3, 3, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\effekt_forstker_2-01.jpg'),
(9, 'Nmare 3405', '3554,- DKK', 3, 3, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\effekt_forstker_3-01.jpg'),
(10, 'Fromla 5435', '687,- DKK', 4, 4, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\forforstærker_1-01.jpg'),
(11, 'Framexa 4789', '768,- DKK', 4, 4, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\forforstærker_2-01.jpg'),
(12, 'Demonamp 4523', '1256,- DKK', 4, 4, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\forforstærker_3-01.jpg'),
(13, 'Damnson 4200', '978,- DKK', 5, 5, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\hoejtaler_1-01.jpg'),
(14, 'Erct 9001', '567,- DKK', 5, 5, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\hoejtaler_2-01.jpg'),
(15, 'Viniger 2302', '785,- DKK', 5, 5, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\hoejtaler_3-01.jpg'),
(16, 'Kazoo 3432', '477,- DKK', 6, 6, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\int_forstk_1-01.jpg'),
(17, 'Thick 3123', '784,- DKK', 6, 6, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\int_forstk_2-01.jpg'),
(18, 'Jakeman 4343', '234,- DKK', 6, 6, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\int_forstk_3-01.jpg'),
(19, 'Drool 4302', '2344,- DKK', 7, 7, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\pladespiller_1-01.jpg'),
(20, 'AmpDad 3234', '566,- DKK', 7, 7, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\pladespiller_2-01.jpg'),
(21, 'Baxter 9382', '253,- DKK', 7, 7, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\pladespiller_3-01.jpg'),
(22, 'Minor 3490', '475,- DKK', 8, 8, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\pladespiller_4-01.jpg'),
(23, 'Madirab 3243', '677,- DKK', 8, 8, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\ror_forstk_1-01.jpg'),
(24, 'Rahab 5345', '987,- DKK', 8, 8, 'Lazer 5403, er den bedste devd aflæser der kan findes på markedet. Perfekt til at se høj kvalitets film på. ingen støj eller lys.', '\\img\\ror_forstk_2-01.jpg'),
(26, '', '', 0, 0, '', '');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `producent`
--
ALTER TABLE `producent`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD PRIMARY KEY (`id`), ADD KEY `fk_kategori` (`fk_kategori`), ADD KEY `fk_producent` (`fk_producent`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Tilføj AUTO_INCREMENT i tabel `producent`
--
ALTER TABLE `producent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Tilføj AUTO_INCREMENT i tabel `produkter`
--
ALTER TABLE `produkter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `kategori`
--
ALTER TABLE `kategori`
ADD CONSTRAINT `kategori_ibfk_1` FOREIGN KEY (`id`) REFERENCES `produkter` (`fk_kategori`);

--
-- Begrænsninger for tabel `producent`
--
ALTER TABLE `producent`
ADD CONSTRAINT `producent_ibfk_1` FOREIGN KEY (`id`) REFERENCES `produkter` (`fk_producent`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
