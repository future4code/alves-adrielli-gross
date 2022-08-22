-- Exercício 1. a)

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY, -- VARCHAR é para texto de 255 caracteres, PRIMARY KEY é um UNIQUE NOT NULL
    name VARCHAR (255) NOT NULL, -- NOT NULL é para não aceitar valor nulo
    salary FLOAT NOT NULL, -- FLOAT é para numeros não inteiros
    birth_date DATE NOT NULL, -- DATE é para data
    gender VARCHAR(6) NOT NULL
);
SHOW DATABASES;
SHOW TABLES;

-- 1. b) O primeiro mostra todos os bancos de dados e o segundo mostra todas as tabelas do banco de dados atual.
-- 1. c) O DESCRIBE mostra as estruturas e propriedades da tabela.
DESCRIBE Actor;

-- Exercício 2. a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
), 
(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- 2. b) Error Code: 1062 Duplicate entry '002' for key 'PRIMARY'. O erro aconteceu por ter uma PRIMARY KEY repetida.
-- 2. c) Error Code: 1136. Collumn count doesn't match value count at row 1. As colunas não batem com os valores fornecidos.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- 2. d) Error Code: 1364. Field 'name' doesn't have a default value. O nome não tem valor.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Pessoa",
  400000,
  "1949-04-18", 
  "male"
);

-- 2. e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Data de nascimento incorreta.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES( 
  "006", 
  "Pessoa1",
  552455,
  "1987-09-13", 
  "male"
),(
  "007", 
  "Pessoa2",
  522454,
  "1974-10-26", 
  "female"
);

-- 3. a) 
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
-- 3. b)
SELECT salary from Actor WHERE name = "Tony Ramos";
-- 3. c) Retorna uma linha de nulls 
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";
-- 3. d)
SELECT id, name, salary from Actor WHERE salary > 500000;
-- 3. e) Error Code: 1054. Unknown column 'nome' in 'field list'. Nome não encontrado na coluna da tabela.
SELECT id, name from Actor WHERE id = "002";


-- Exercício 4. a) * engloba todos os itens da tabela. A query retornou os atores/atrizes que começam com a letra A ou J e ganham mais que 300000.
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- 4. b) 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
-- 4. c)
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
-- 4. d)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%" ) AND salary BETWEEN 350000 AND 900000;

-- Exercício 5. a)
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating FLOAT NOT NULL
);

-- 5. b)
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
),
(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
),
(
  "004", 
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000-09-10", 
  9
);

-- Exercício 6. a) 
SELECT id, title, rating from Movie WHERE id = "003";
-- 6. b)
SELECT * from Movie WHERE title = "O Auto da Compadecida";
-- 6. c)
SELECT id, title, synopsis from Movie WHERE rating > 7;

-- Exercício 7. a)
SELECT * FROM Movie WHERE (title LIKE "%vida%");
-- 7. b) 
SELECT * FROM Movie WHERE (title LIKE "%vida%" OR synopsis LIKE "%vida%");
-- 7. c)
SELECT * from Movie WHERE release_date < "2022-08-22";
-- 7. d)
SELECT * from Movie WHERE  release_date < CURDATE() AND rating > 7 AND (title LIKE "%vida%" OR synopsis LIKE "%vida%");







