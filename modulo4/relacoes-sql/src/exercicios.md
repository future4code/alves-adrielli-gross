CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

-- Exercício 1. a) O FOREIGN KEY é uma relação de um item da tabela com o PRIMARY KEY de outra tabela.

SELECT * FROM Movie;
SELECT * FROM Rating;

-- 1. b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "1", 
  "Muito bom!",
  10,
  "001"
), 
(
  "2", 
  "Médio",
  7,
  "002" 
),
(
  "3", 
  "Bom",
  8,
  "003" 
),
(
  "4", 
  "Muito bom",
  10,
  "004" 
);

-- 1. c) Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 7
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "1", 
  "Muito bom!",
  10,
  "009"
);

-- 1. d)
ALTER TABLE Movie DROP COLUMN rating;
-- 1. e) Não deu certo porque tem um elemento de uma outra tabela referenciando este filme. Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-adrielli-gross`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
DELETE FROM Movie WHERE id = "001";

-- Exercício 2. a) É uma relação N:M, uma tabela intermediaria no qual relaciona duas outras tabela atraves de duas FOREIGN KEY.
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- 2. b)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "001", 
  "001"
), 
(
  "002", 
  "001"
),
(
  "003", 
  "001"
),
(
  "001", 
  "002"
),
(
  "002", 
  "002"
),
(
  "003", 
  "002"
);

-- 2. c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-adrielli-gross`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "011", 
  "011"
);

-- 2. d) Não deu certo porque tem um elemento de uma outra tabela referenciando este filme.

-- Exercício 3. a) ON é a relação que a operação procura.
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- 3. b)
SELECT title, Movie.id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;


