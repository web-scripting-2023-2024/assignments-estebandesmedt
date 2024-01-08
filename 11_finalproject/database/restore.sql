use vives;

CREATE TABLE `Bachelor_tests` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `student1` VARCHAR(255) NOT NULL,
  `student2` VARCHAR(255),
  `image` VARCHAR(255) NOT NULL,
  `academic_year` INT NOT NULL,
  `company` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
