-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 20. 04:25
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `questionnaire_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option1` varchar(255) NOT NULL,
  `option2` varchar(255) NOT NULL,
  `option3` varchar(255) NOT NULL,
  `option4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `answers`
--

INSERT INTO `answers` (`id`, `user_id`, `question_id`, `option1`, `option2`, `option3`, `option4`) VALUES
(60, 1, 10, 'Válasz11', 'Válasz22', 'Válasz33', 'Válasz42'),
(63, 2, 8, 'Válasz11', 'Válasz24', 'Válasz32', 'Válasz43'),
(70, 1, 8, 'Válasz12', 'Válasz23', 'Válasz32', 'Válasz44'),
(71, 1, 47, 'Válasz11', 'Válasz22', 'Válasz33', 'Válasz44'),
(72, 2, 7, 'Válasz11', 'Válasz22', 'Válasz33', 'Válasz44');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `question1` varchar(255) NOT NULL,
  `question2` varchar(255) NOT NULL,
  `question3` varchar(255) NOT NULL,
  `question4` varchar(255) NOT NULL,
  `option1_1` varchar(255) NOT NULL,
  `option1_2` varchar(255) NOT NULL,
  `option1_3` varchar(255) NOT NULL,
  `option1_4` varchar(255) NOT NULL,
  `option2_1` varchar(255) NOT NULL,
  `option2_2` varchar(255) NOT NULL,
  `option2_3` varchar(255) NOT NULL,
  `option2_4` varchar(255) NOT NULL,
  `option3_1` varchar(255) NOT NULL,
  `option3_2` varchar(255) NOT NULL,
  `option3_3` varchar(255) NOT NULL,
  `option3_4` varchar(255) NOT NULL,
  `option4_1` varchar(255) NOT NULL,
  `option4_2` varchar(255) NOT NULL,
  `option4_3` varchar(255) NOT NULL,
  `option4_4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `questions`
--

INSERT INTO `questions` (`id`, `category`, `title`, `question1`, `question2`, `question3`, `question4`, `option1_1`, `option1_2`, `option1_3`, `option1_4`, `option2_1`, `option2_2`, `option2_3`, `option2_4`, `option3_1`, `option3_2`, `option3_3`, `option3_4`, `option4_1`, `option4_2`, `option4_3`, `option4_4`) VALUES
(7, 'Sport', 'sportos1', 'Kérdés1', 'Kérdés2', 'Kérdés3', 'Kérdés4', 'Válasz11', 'Válasz12', 'Válasz13', 'Válasz14', 'Válasz21', 'Válasz22', 'Válasz23', 'Válasz24', 'Válasz31', 'Válasz32', 'Válasz33', 'Válasz34', 'Válasz41', 'Válasz42', 'Válasz43', 'Válasz44'),
(8, 'Sport', 'sportos2', 'Kérdés1', 'Kérdés2', 'Kérdés3', 'Kérdés4', 'Válasz11', 'Válasz12', 'Válasz13', 'Válasz14', 'Válasz21', 'Válasz22', 'Válasz23', 'Válasz24', 'Válasz31', 'Válasz32', 'Válasz33', 'Válasz34', 'Válasz41', 'Válasz42', 'Válasz43', 'Válasz44'),
(9, 'Sport', 'sportos3', 'Kérdés1', 'Kérdés2', 'Kérdés3', 'Kérdés4', 'Válasz11', 'Válasz12', 'Válasz13', 'Válasz14', 'Válasz21', 'Válasz22', 'Válasz23', 'Válasz24', 'Válasz31', 'Válasz32', 'Válasz33', 'Válasz34', 'Válasz41', 'Válasz42', 'Válasz43', 'Válasz44'),
(10, 'Állatok', 'állatos1', 'Kérdés1', 'Kérdés2', 'Kérdés3', 'Kérdés4', 'Válasz11', 'Válasz12', 'Válasz13', 'Válasz14', 'Válasz21', 'Válasz22', 'Válasz23', 'Válasz24', 'Válasz31', 'Válasz32', 'Válasz33', 'Válasz34', 'Válasz41', 'Válasz42', 'Válasz43', 'Válasz44'),
(47, 'Állatok', 'állatos2', 'Kérdés1', 'Kérdés2', 'Kérdés3', 'Kérdés4', 'Válasz11', 'Válasz12', 'Válasz13', 'Válasz14', 'Válasz21', 'Válasz22', 'Válasz23', 'Válasz24', 'Válasz31', 'Válasz32', 'Válasz33', 'Válasz34', 'Válasz41', 'Válasz42', 'Válasz43', 'Válasz44');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', 'admin@admin', '$2b$10$sbMS5vyuFnmFzOKwXLgjwey/YSal1eQVTspHpTsDETaC3aDGQK/Oq'),
(2, 'user', 'user@user', '$2b$10$XI0pJ8zHpMIqfNAnpPLBfOsov3XW5UBR3WTiQaZapAIwK53lXqKK2');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_users` (`user_id`),
  ADD KEY `FK_questions` (`question_id`);

--
-- A tábla indexei `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT a táblához `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `FK_questions` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
