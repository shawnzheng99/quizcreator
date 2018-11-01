CREATE TABLE `question` (
  `id` int(100) NOT NULL COMMENT 'question id',
  `body` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'question',
  `answers` varchar(400) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'answers',
  `correct` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'correct answers',
  `tag` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'easy_or_hard'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='questions';