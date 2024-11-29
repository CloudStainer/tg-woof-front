USE posts;  

SET NAMES utf8mb4;  

SET FOREIGN_KEY_CHECKS = 0;  

-- ----------------------------  
-- Table structure for post  
-- ----------------------------  
DROP TABLE IF EXISTS `post`;  
CREATE TABLE `post` (  
  `wallet_address` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,  
  `token_amount` INT UNSIGNED NULL DEFAULT NULL,  
  `daily_count` INT UNSIGNED NULL DEFAULT 2000,  
  `monthly_amount` INT UNSIGNED NULL DEFAULT NULL,  
  `premium` INT UNSIGNED NULL DEFAULT NULL,
  `register_date` DATETIME,  
  PRIMARY KEY (`wallet_address`) USING BTREE  
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;  

-- ----------------------------  
-- Table structure for airdrop  
-- ----------------------------  
DROP TABLE IF EXISTS `airdrop`;  
CREATE TABLE `airdrop` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `wallet_address` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,  
  `weekly_airdrop` INT DEFAULT 270,  
  `monthly_airdrop` INT DEFAULT 888,  
  `weekly_endtime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  `monthly_endtime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  PRIMARY KEY (`id`) USING BTREE,
  FOREIGN KEY (`wallet_address`) REFERENCES `post`(`wallet_address`) ON DELETE CASCADE  
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;  

-- ----------------------------  
-- Table structure for transaction  
-- ----------------------------  
DROP TABLE IF EXISTS `transaction`;  
CREATE TABLE `transaction` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `wallet_address` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,  
  `token_amount` INT UNSIGNED NOT NULL,  
  `transaction_method` INT NOT NULL,  
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  PRIMARY KEY (`id`) USING BTREE,  
  FOREIGN KEY (`wallet_address`) REFERENCES `post`(`wallet_address`) ON DELETE CASCADE  
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;  

SET FOREIGN_KEY_CHECKS = 1;