CREATE DATABASE Serenity;
USE Serenity;


CREATE TABLE Accounts (Email VARCHAR(60), Password VARCHAR(60));
CREATE TABLE Books (Title VARCHAR(60), Author VARCHAR(60), Publication_Year INT, Synopsis VARCHAR(1500), Pages INT);
CREATE TABLE Profile (Email VARCHAR(60), Title VARCHAR(60), Pages INT);

INSERT INTO Books (Title, Author, Publication_Year, Synopsis, Pages)
VALUES ('Feeling Blah', 'Tanith Carey', 2023, 'Do you ever feel indifferent about life? Your emotions have flatlined 
and enjoyment feels like a distant memory. This is "anhedonia"
 - and this book provides a science-based explanation of why we suffer from us 
 and what to do about it', 292), 
 ('The Fun Habit', 'Mike Rucker', 2022, 'Discover the latest compelling scientific evidence for the revitalizing value 
 of fun and how having fun can help you achieve better work-life balance, reduce stress and much more.', 330), 
 ('The Friendship Maze', 'Tanith Carey', 2023, 'Friendship battles among children have existed since the words "you cant play with us"
 were first uttered in the playground. But the worry is that today it seems there is no minimum age limit to being hurtful to others. 
 Unkind or exclusive behaviour appears to be starting sooner than ever - even in nursery school - and continues throughout the school system.
 As a result, friendship issues top the list of a parents concerns, and, from the other side of the school gates, they can often feel powerless. 
 This book will change that as parenting writer Tanith Carey analyses the increasingly complex shifting social pressures changing the face of childhood,
 having drawn on extensive research on childrens friendships. She offers practical solutions for building your childs social skills for a happier, more 
 carefree childhood, including how to: Help your child deal with classroom and social media politics. Inoculate your child against the effects of peer-group pressure, 
 cliquiness and exclusion. Learn whats really going on in your childs social circle. Bully-proof your child throughout school. Work out when to step in and step 
 out of your childs conflicts. Help your child make friends if they are stuck on the side-lines.', 256);

SELECT * from Accounts;
SELECT * from Books;
SELECT * from Profile;