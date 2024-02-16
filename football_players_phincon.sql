-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 16, 2024 at 01:58 AM
-- Server version: 10.6.4-MariaDB-log
-- PHP Version: 8.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `football_players_phincon`
--

-- --------------------------------------------------------

--
-- Table structure for table `club`
--

CREATE TABLE `club` (
  `club_id` int(11) NOT NULL,
  `club_name` varchar(255) NOT NULL,
  `club_location` varchar(255) NOT NULL,
  `club_img_url` text DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `club`
--

INSERT INTO `club` (`club_id`, `club_name`, `club_location`, `club_img_url`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Liverpool FC', 'Liverpool, England', 'https://cdn.sofifa.net/meta/team/8/30.png', NULL, NULL, NULL),
(2, 'Manchester United', 'Manchester, England', 'https://cdn.sofifa.net/meta/team/14/30.png', NULL, NULL, NULL),
(3, 'AS Roma', 'Rome, Italy', 'https://cdn.sofifa.net/meta/team/37/30.png', NULL, NULL, NULL),
(4, 'Inter Miami', 'Florida, USA', 'https://cdn.sofifa.net/meta/team/239235/30.png', NULL, NULL, NULL),
(5, 'Al-Nassr', 'Riyadh, Saudi Arabia', 'https://cdn.sofifa.net/meta/team/2506/30.png', NULL, NULL, NULL),
(6, 'FC Barcelona', 'Catalonia, Spain', 'https://cdn.sofifa.net/meta/team/83/30.png', NULL, NULL, NULL),
(7, 'Manchester City', 'Manchester, England', 'https://cdn.sofifa.net/meta/team/9/30.png', NULL, NULL, NULL),
(8, 'Chelsea', 'London, England', 'https://cdn.sofifa.net/meta/team/18/30.png', NULL, NULL, NULL),
(9, 'Bournemouth', 'London, England', 'https://cdn.sofifa.net/meta/team/52/60.png', NULL, NULL, NULL),
(10, 'Arsenal', 'London, England', 'https://cdn.sofifa.net/meta/team/19/120.png', '2024-02-07 08:24:02', '2024-02-07 08:24:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `player_id` int(11) NOT NULL,
  `player_name` varchar(255) NOT NULL,
  `club_id` varchar(255) NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `player_img_url` text DEFAULT NULL,
  `player_view_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`player_id`, `player_name`, `club_id`, `is_deleted`, `createdAt`, `updatedAt`, `deletedAt`, `player_img_url`, `player_view_count`) VALUES
(1, 'Mohamed Salah', '1', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/209/331/24_120.png', 0),
(2, 'Virgil Van Dijk', '1', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/203/376/24_120.png', 0),
(3, 'Antony Spin', '2', 0, NULL, '2024-02-07 07:53:13', NULL, 'https://cdn.sofifa.net/players/255/475/24_120.png', 8),
(4, 'Marcus Rashford', '2', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/231/677/24_120.png', 0),
(5, 'Radja Nainggolan', '2', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/178/518/23_120.png', 0),
(6, 'Lionel Messi', '4', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/158/023/24_120.png', 0),
(7, 'Cristiano Ronaldo', '5', 1, NULL, '2024-02-01 09:19:53', '2024-02-01 09:19:53', 'https://cdn.sofifa.net/players/020/801/24_120.png', 0),
(8, 'Kingsley Coman', '10', 0, NULL, '2024-02-08 10:58:55', NULL, 'https://cdn.sofifa.net/players/213/345/24_120.png', 0),
(9, 'Robert Lewandowski', '2', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/188/545/24_120.png', 0),
(10, 'Mario Balotelli', '3', 1, NULL, '2024-02-01 09:18:37', '2024-02-01 09:18:37', 'https://cdn.sofifa.net/players/186/627/24_120.png', 0),
(11, 'Erling Haaland', '7', 0, NULL, NULL, NULL, 'https://cdn.sofifa.net/players/239/085/24_120.png', 0),
(12, 'Raheem Sterling', '8', 0, '2024-02-01 08:36:31', '2024-02-07 06:21:00', NULL, 'https://cdn.sofifa.net/players/202/652/24_120.png', 2),
(13, 'Ilkay Gundogan', '4', 0, '2024-02-01 08:58:26', '2024-02-07 04:29:53', NULL, 'https://cdn.sofifa.net/players/186/942/24_120.png', 5),
(14, 'Thomas Muller', '8', 0, '2024-02-01 09:20:50', '2024-02-01 09:22:21', NULL, 'https://cdn.sofifa.net/players/189/596/24_120.png', 0),
(15, 'Johnny Evans', '2', 0, '2024-02-02 04:19:07', '2024-02-02 04:19:07', NULL, 'https://cdn.sofifa.net/players/169/588/24_120.png', 0),
(16, 'Trent Alexander-Arnold', '1', 0, '2024-02-02 04:19:57', '2024-02-02 04:19:57', NULL, 'https://cdn.sofifa.net/players/231/281/24_120.png', 0),
(17, 'Roberto Firmino', '1', 0, '2024-02-07 07:36:12', '2024-02-07 07:36:12', NULL, 'https://cdn.sofifa.net/players/201/942/24_120.png', 0),
(18, 'Sadio Mane', '1', 0, '2024-02-07 07:37:14', '2024-02-07 07:37:14', NULL, 'https://cdn.sofifa.net/players/208/722/24_120.png', 0),
(19, 'Jerome Boateng', '5', 0, '2024-02-08 13:13:38', '2024-02-08 13:13:38', NULL, 'https://cdn.sofifa.net/players/183/907/23_120.png', 0),
(20, 'Mats Hummels', '5', 0, '2024-02-08 13:14:15', '2024-02-08 13:14:15', NULL, 'https://cdn.sofifa.net/players/178/603/24_120.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `player_position_relation`
--

CREATE TABLE `player_position_relation` (
  `pp_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `player_position_relation`
--

INSERT INTO `player_position_relation` (`pp_id`, `player_id`, `position_id`) VALUES
(3, 2, 3),
(4, 3, 10),
(5, 4, 8),
(6, 4, 9),
(7, 5, 5),
(9, 5, 7),
(10, 7, 8),
(11, 7, 9),
(13, 8, 8),
(15, 9, 9),
(16, 9, 10),
(17, 10, 5),
(18, 10, 9),
(19, 1, 9),
(21, 11, 9),
(23, 12, 10),
(24, 12, 8),
(25, 12, 13),
(27, 13, 6),
(28, 13, 7),
(29, 14, 3);

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `position_id` int(11) NOT NULL,
  `position_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`position_id`, `position_name`) VALUES
(1, 'Goalkeeper'),
(2, 'Right Back'),
(3, 'Center Back'),
(4, 'Left Back'),
(5, 'Defensive Midfielder'),
(6, 'Central Midfielder'),
(7, 'Attacking Midfielder'),
(8, 'Left Wing'),
(9, 'Striker'),
(10, 'Right Wing');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` varchar(255) NOT NULL DEFAULT 'public',
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `otp_code` char(6) DEFAULT NULL,
  `otp_exp` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_role`, `createdAt`, `updatedAt`, `deletedAt`, `otp_code`, `otp_exp`) VALUES
(3, 'Donnie', 'donniy@gmail.com', '$2b$10$Ml/3hYJ6KKHjA.gpApXgye3dIn4vEnCMroOnnXpHxr0g8Zkget6rK', 'public', '2024-02-02 10:23:17', '2024-02-02 10:23:17', NULL, '308213', '2024-02-02 10:27:59'),
(4, 'John', 'donniy2@gmail.com', '$2b$10$Hh.83nqSaJvnzdxYkplH/efuT1v6.VJwAQWBtW0zRNMO/akRwmI1K', 'public', '2024-02-02 09:12:58', '2024-02-02 09:12:58', NULL, NULL, NULL),
(5, 'Jambul', 'hilman_faghmi@gmail.com', '$2b$10$0Ucz8U1lgXkji5VJVd8nV.2KZ5sxELl4yauxx2xn8x4lsU6cR3X9m', 'public', '2024-02-02 09:06:28', '2024-02-02 09:06:28', NULL, NULL, NULL),
(6, 'Gigih Dharmawan', 'gigih@gmail.com', '$2b$10$qqGa5lUNIGSB8Xp3AWTLke6FYP3uG6G4YrEh2Jya7LS/GqdOH0mJC', 'public', '2024-02-02 12:26:46', '2024-02-02 12:26:46', NULL, '221424', '2024-02-02 12:31:38'),
(8, 'Gigih', 'gigihdharmawan@gmail.com', '$2b$10$KFnOCe23D.uqnrt5mF0ScuOG7Q9K5Bc2sIvVtVL1Yau03kJo7unWC', 'public', '2024-02-06 04:28:14', '2024-02-06 04:28:14', NULL, NULL, NULL),
(9, 'Gigih Dharmawan', 'gigihdharmawan2@gmail.com', '$2b$10$RnFTyjKQKXQ7s6SKpZU/3OZ4bcmjR1koyy3NSMWhvu20CotVzrLoe', 'public', '2024-02-06 04:33:09', '2024-02-06 04:33:09', NULL, NULL, NULL),
(15, 'Hilman', 'hilman_fahmi21@yahoo.com', '$2b$10$L2UhtNHrLMRRo0Dy.8MbM.T0vsB2AVMqE8oH9/y4tWaMwT1nMhpPK', 'admin', '2024-02-12 02:49:38', '2024-02-06 06:33:26', NULL, NULL, NULL),
(16, 'Hilman Nurfahmi', 'hilman_fahmi23@yahoo.com', '$2b$10$/WxSAAu9ac4q1.9wJjN/qO.Ogg5zX1x7Vw37F2MjudXr6fBC5.1.6', 'public', '2024-02-06 06:35:33', '2024-02-06 06:35:33', NULL, NULL, NULL),
(17, 'Hilman', 'hilman_fahmi22@yahoo.com', '$2b$10$j41dYEYHWx0otjewTzHpNe9CnCZqZyG8JBBVqUrr9rs1MJMj3cdWi', 'public', '2024-02-06 06:36:27', '2024-02-06 06:36:27', NULL, NULL, NULL),
(18, 'aetateate', 'hilman_fahmi24@yahoo.com', '$2b$10$it5jk0fVvX7oxt66W3EnBOutu6no/LLU591FIDcctmfEXwcM.QEOC', 'public', '2024-02-06 06:36:41', '2024-02-06 06:36:41', NULL, NULL, NULL),
(19, 'aeagsgas', 'hilman_fahmi25@yahoo.com', '$2b$10$rJZs5i7yQ.AlJIEXG7rJSe8Yx2OB//1kYj7fQEDhWO.tboXx57Bma', 'public', '2024-02-06 06:37:06', '2024-02-06 06:37:06', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`club_id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`player_id`);

--
-- Indexes for table `player_position_relation`
--
ALTER TABLE `player_position_relation`
  ADD PRIMARY KEY (`pp_id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`position_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `club`
--
ALTER TABLE `club`
  MODIFY `club_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `player_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `player_position_relation`
--
ALTER TABLE `player_position_relation`
  MODIFY `pp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `position_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
