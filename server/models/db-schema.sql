CREATE TABLE votes (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  createdAt datetime NOT NULL,
  votedFor int NOT NULL,
  votedAgainst int NOT NULL,
);

INSERT INTO votes (createdAt, votedFor, votedAgainst)
VALUES  (NOW(), 1, 2);