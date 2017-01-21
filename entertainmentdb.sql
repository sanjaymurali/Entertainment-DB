-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 20, 2017 at 12:27 AM
-- Server version: 5.7.15
-- PHP Version: 5.6.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `entertainmentdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `biography`
--

CREATE TABLE `biography` (
  `id` int(11) NOT NULL,
  `name` varchar(5000) NOT NULL,
  `bio` text NOT NULL,
  `imgurl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `biography`
--

INSERT INTO `biography` (`id`, `name`, `bio`, `imgurl`) VALUES
(1, 'Leonardo DiCaprio', 'Few actors in the world have had a career quite as diverse as Leonardo DiCaprio\'s. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as Critters 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Romeo + Juliet (1996) and Titanic (1997), to then become a leading man in Hollywood blockbusters, made by internationally renowned directors such as Martin Scorsese and Christopher Nolan.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'),
(2, 'Robert Downey Jr.', 'Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing list of credits to his name, he has managed to stay new and fresh even after over four decades in the business.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg'),
(3, 'Mark Ruffalo', 'Mark Ruffalo was born in Kenosha, Wisconsin, to Marie Rose (Hebert), a stylist and hairdresser, and Frank Lawrence Ruffalo, a construction painter. His father\'s ancestry is Italian, and his mother is of half French-Canadian and half Italian descent. Mark moved with his family to Virginia Beach, Virginia, where he lived out most of his teenage years. Following high school, Mark moved with his family to San Diego and soon migrated north, eventually settling in Los Angeles. He took classes at the Stella Adler Conservatory and subsequently co-founded the Orpheus Theatre Company, an Equity-Waiver establishment, where he worked in nearly every capacity. From acting, writing, directing and producing to running the lights and building sets while building his resume. Bartending for nearly nine years to make ends meet and ready to give it all up, a chance meeting and resulting collaboration with playwright/screenwriter Kenneth Lonergan changed everything.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5MjMwNjAzNF5BMl5BanBnXkFtZTcwMzkyNDg1Mw@@._V1_UX214_CR0,0,214,317_AL_.jpg'),
(4, 'Bryan Cranston', 'Bryan Lee Cranston is an American actor, voice actor, writer and director. He is perhaps best-known for his roles as "Walter White" on the AMC drama series, Breaking Bad (2008), for which he has won four consecutive Outstanding Lead Actor in a Drama Series Emmy Awards, and as "Hal", the father on the Fox situation comedy, Malcolm in the Middle (2000). Other notable roles include "Dr. Tim Whatley" on Seinfeld (1989), Doug Heffernan\'s neighbor on The King of Queens (1998), astronaut Buzz Aldrin in From the Earth to the Moon (1998), and Ted Mosby\'s boss on How I Met Your Mother (2005).', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_UX214_CR0,0,214,317_AL_.jpg'),
(5, 'Mila Kunis', 'The talented Milena "Mila" Markovna Kunis was born to a Jewish family in Chernivtsi, Ukraine, USSR (now independent Ukraine). Her mother, Elvira, is a physics teacher, her father, Mark Kunis, is a mechanical engineer, and she has an older brother named Michael. After attending one semester of college between gigs, she realized that she wanted to act for the rest of her life. She started acting when she was just 9 years old, when her father heard about an acting class on the radio and decided to enroll Mila in it. There, she met her future agent. Her first gig was in 1995, in which she played a character named Melinda in Make a Wish, Molly (1995). From there, her career skyrocketed into big-budget films. Although she is mostly known for playing Jackie Burkhart in That \'70s Show (1998), she has shown the world that she can do so much more. Her breakthrough film was Forgetting Sarah Marshall (2008), in which she played a free-spirited character named Rachel Jensen.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODQyNTQyNzY4MV5BMl5BanBnXkFtZTcwODg5MDA3MQ@@._V1_UY317_CR25,0,214,317_AL_.jpg'),
(6, 'Scarlett Johansson', 'carlett Johansson was born in New York City. Her mother, Melanie Sloan, is from an Ashkenazi Jewish family, and her father, Karsten Johansson, is Danish. She has a sister, Vanessa Johansson, who is also an actress, a brother, Adrian, a twin brother, Hunter Johansson, born three minutes after her, and a paternal half-brother, Christian. Her grandfather was writer Ejner Johansson.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg'),
(7, 'Jessica Chastain', 'Jessica Michelle Chastain was born in Sacramento, California, and was raised in a middle-class household in a northern California suburb. Her mother, Jerri Chastain, is a vegan chef whose family is originally from Kansas, and her stepfather is a fireman. She discovered dance at the age of nine and was in a dance troupe by age thirteen. She began performing in Shakespearean productions all over the Bay area.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_UX214_CR0,0,214,317_AL_.jpg'),
(8, 'Grant Gustin', 'Thomas Grant Gustin was born on January 14, 1990 in Norfolk, Virginia, to Tina Lynne (Sweeney), a pediatric nurse, and Thomas Avery Gustin. In 2008, he graduated from Granby High School and went on to attend the BFA Music Theatre Program at Elon University in North Carolina for two years. He left school to take the role of Baby John in the Broadway Revival Tour of West Side Story, and performed with the tour from its opening on September 30, 2010 through September 23, 2011. On November 8, 2011, he debuted on the television series Glee as Sebastian Smythe, a member of the Dalton Academy Warblers.', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxOTM4MzI4MF5BMl5BanBnXkFtZTcwMTc0MjQyNA@@._V1_UY317_CR20,0,214,317_AL_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `movieid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `userid`, `movieid`) VALUES
(1, 1, 1),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `plot` varchar(10000) NOT NULL,
  `year` int(4) NOT NULL,
  `runtime` varchar(3000) NOT NULL,
  `rating` double NOT NULL,
  `director` varchar(1000) NOT NULL,
  `actor` varchar(10000) NOT NULL,
  `genre` varchar(5000) DEFAULT NULL,
  `language` varchar(500) NOT NULL,
  `imdbid` varchar(300) DEFAULT NULL,
  `imgurl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `title`, `plot`, `year`, `runtime`, `rating`, `director`, `actor`, `genre`, `language`, `imdbid`, `imgurl`) VALUES
(1, 'The Avengers', 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.', 2012, '143 min', 8.1, 'Joss Whedon', 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth', 'Action, Sci-Fi', 'English, Russian', 'tt0848228', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg'),
(2, 'The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.', 2008, '152 min', 9, 'Christopher Nolan', 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine', 'Action, Crime, Drama', 'English, Mandarin', 'tt0468569', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'),
(3, 'X-Men: Days of Future Past', 'Sentinels, robots that were created for the purpose of hunting down mutants were released in 1973. 50 years later the Sentinels would also hunt humans who aid mutants. Charles Xavier and his X-Men try their best to deal with the Sentinels but they are able to adapt and deal with all mutant abilities. Charles decides to go back in time and change things. He asks Kitty Pryde who can send a person\'s consciousness into the person\'s past to send him but she can only send someone back a few weeks because if she sends someone back further it could harm them. So Logan decides to go back himself because he might be able to withstand it. So Charles tells him that it\'s Mystique who\'s responsible because when she learned about the Sentinels she sought out Bolivar Trask the man who created them and killed him. She would be caught and studied and her ability to change was somehow added to the Sentinels which is why they can adapt. Logan must go to the younger Charles and ask him to help; problem is that he was despondent at that time and without his powers because he took a drug which allows him to walk but takes away his powers. Logan is also told to find Magneto.', 2014, '132 min', 8, 'Bryan Singer', 'Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence', 'Action, Adventure, Sci-Fi', 'English, Vietnamese, French', 'tt1877832', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'),
(4, 'Guardians of the Galaxy', 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.', 2014, '121 min', 8.1, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'Action, Adventure, Sci-Fi', 'English', 'tt2015381', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg'),
(5, '21 Jump Street', 'In high school, Schmidt (Jonah Hill) was a dork and Jenko (Channing Tatum) was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.', 2012, '109 min', 7.2, 'Phil Lord, Christopher Miller', 'Jonah Hill, Channing Tatum, Brie Larson, Dave Franco', 'Action, Comedy, Crime', 'English', 'tt1232829', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NzQ3OTg3NF5BMl5BanBnXkFtZTcwMjk5OTcxNw@@._V1_SX300.jpg'),
(6, 'Kingsman: The Secret Service', 'A spy organization recruits an unrefined, but promising street kid into the agency\'s ultra-competitive training program, just as a global threat emerges from a twisted tech genius.', 2014, '129 min', 7.7, 'Matthew Vaughn', 'Adrian Quinton, Colin Firth, Mark Strong, Jonno Davies', 'Action, Adventure, Comedy', 'English, Arabic, Swedish', 'tt2802144', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjgwMDM4Ml5BMl5BanBnXkFtZTgwMTk3NTIwNDE@._V1_SX300.jpg'),
(7, 'Ted', 'John Bennett, a man whose childhood wish of bringing his teddy bear to life came true, now must decide between keeping the relationship with the bear or his girlfriend, Lori.', 2012, '106 min', 7, 'Seth MacFarlane', 'Mark Wahlberg, Mila Kunis, Seth MacFarlane, Joel McHale', 'Animation, Comedy, Fantasy', 'English, Ukrainian', 'tt1637725', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_SX300.jpg'),
(8, 'Bad Moms', 'Amy has a seemingly perfect life - a great marriage, over-achieving kids, a beautiful home and a career. However, she\'s overworked, over-committed and exhausted to the point that she\'s about to snap. Fed up, she joins forces with two other over-stressed moms on a quest to liberate themselves from conventional responsibilities - going on a wild, un-mom-like binge of long overdue freedom, fun and self-indulgence - putting them on a collision course with PTA Queen Bee Gwendolyn and her clique of devoted perfect moms.', 2016, '100 min', 6.3, 'Jon Lucas, Scott Moore', 'Mila Kunis, Kathryn Hahn, Kristen Bell, Christina Applegate', 'Comedy', 'English, Russian', 'tt4651520', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIwNzE5MTgwNl5BMl5BanBnXkFtZTgwNjM4OTA0OTE@._V1_SX300.jpg'),
(9, 'Madras', 'Kaali (Karthi) is the local Chennai guy, the darling of his mom and the most literate person in his gang, he has a happy go lucky life with his best friend Kalairasanand (Kalaiyarasan). Things go wrong when there arises an issue of a WALL that stands tall amidst a chilling superstitious rumor and finally two groups fight around it.', 2014, '156 min', 8, 'Pa. Ranjith', 'Karthi, Catherine Tresa, Kalaiyarasan, Jayabalan', 'Action, Drama, War', 'Tamil', 'tt3822388', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzJjZmU2MmUtN2E0Zi00MmNjLTgwMWUtYmRjMGNhNzExMjI4XkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_SX300.jpg'),
(10, 'The Flash', 'After being struck by lightning, Barry Allen wakes up from his coma to discover he\'s been given the power of super speed, becoming a superhero, The Flash, fighting crime in Central City.', 2014, '43 min', 8.2, 'N/A', 'Grant Gustin, Candice Patton, Danielle Panabaker, Carlos Valdes', 'Action, Adventure, Drama', 'English', 'tt3107288', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NTgwNTA4NF5BMl5BanBnXkFtZTgwMDQ0MDUxMDI@._V1_SX300.jpg'),
(11, 'Supergirl', 'Years ago, Krypton was about to explode and Kal-El was sent to Earth to escape that fate. However, his older cousin, Kara, was also intended to accompany the infant as his protector. Unfortunately, Kara was accidentally diverted into the timeless Phantom Zone for years before finally arriving on Earth decades later and found by her cousin who had grown into Superman. Years later, Kara Danvers is a young professional adrift in a thankless job until a fateful crisis ignites a sense of purpose using Kryptonian powers she had long hidden. Inspired, Kara decides to emulate her cousin\'s superheroic ways, only to find her foster sister introducing her to the secret Department of Extra-Normal Operations, dedicated to fighting alien menaces including those Kara inadvertently led to Earth. Now with such help, the Maid of Might takes her place as Earth\'s newest champion with new friends and enemies challenging her world.', 2015, '43 min', 6.5, 'N/A', 'Melissa Benoist, Mehcad Brooks, Chyler Leigh, Jeremy Jordan', 'Action, Adventure, Drama', 'English', 'tt4016454', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5Mjg2MDAxMl5BMl5BanBnXkFtZTgwMjE0NDg4OTE@._V1_SX300.jpg'),
(12, 'Arrow', 'Oliver Queen and his father are lost at sea when their luxury yacht sinks, apparently in a storm. His father dies, but Oliver survives for five years on an uncharted island and eventually returns home. But he wasn\'t alone on the island where he learned not only how to fight and survive but also of his father\'s corruption and unscrupulous business dealings. He returns to civilization a changed man, determined to put things right. He disguises himself with the hood of one of his mysterious island mentors, arms himself with a bow and sets about hunting down the men and women who have corrupted his city.', 2012, '42 min', 7.9, 'N/A', 'Stephen Amell, David Ramsey, Willa Holland, Paul Blackthorne', 'Action, Adventure, Crime', 'English', 'tt2193021', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTc3OTg4MV5BMl5BanBnXkFtZTgwMjE5MTIxMDI@._V1_SX300.jpg'),
(13, 'Legends of Tomorrow', 'Focuses on time-traveling rogue Rip Hunter, who has to recruit a rag-tag team of heroes and villains to help prevent an apocalypse that could impact not only Earth, but all of time.', 2016, '42 min', 7.1, 'N/A', 'Victor Garber, Brandon Routh, Arthur Darvill, Caity Lotz', 'Action, Adventure, Drama', 'English', 'tt4532368', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQyMjg4MjE5NF5BMl5BanBnXkFtZTgwMzE5MTIxMDI@._V1_SX300.jpg'),
(14, 'Modern Family', 'Three different, but related families face trials and tribulations in their own uniquely comedic ways.', 2009, '22 min', 8.5, 'N/A', 'Ed O\'Neill, Sofía Vergara, Julie Bowen, Ty Burrell', 'Comedy, Romance', 'English', 'tt1442437', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwMzcwNjgwMV5BMl5BanBnXkFtZTgwMjQwNDc4OTE@._V1_SX300.jpg'),
(15, 'The Big Bang Theory', 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.', 2007, '22 min', 8.4, 'N/A', 'Johnny Galecki, Jim Parsons, Kaley Cuoco, Simon Helberg', 'Comedy, Romance', 'English, Hindi, Italian, Russian, Mandarin, Klingon', 'tt0898266', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNDMxNjQyN15BMl5BanBnXkFtZTgwNzA4NDQwMDI@._V1_SX300.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `url` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `url`, `image`) VALUES
(1, '\'Gilmore Girls\': Lauren Graham Filmed Multiple Reactions to the Final Four Words', 'By now, most Gilmore Girls fans know the final four words that show creator Amy Sherman-Palladino thought up all those years ago (and if you don’t,...', 'http://www.ew.com/article/2016/11/30/gilmore-girls-lauren-graham-final-four-words', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/gilmore-girls.jpg?itok=KTgUq5Kv'),
(2, 'Prince Harry Meets Rihanna During Barbados\' Toast to the Nation', 'Prince Harry was a little starry-eyed when he was introduced to Rihanna during a trip to Barbados on Wednesday. The two met and shook hands during...', 'http://www.ew.com/article/2016/11/30/prince-harry-rihanna-barbados', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/rihanna-prince-harry_0.jpg?itok=jvjR8jf3'),
(3, 'Sundance Film Festival Announces First Wave of 2017 Films', 'Three years after the premiere of their hit rom-com Obvious Child, Jenny Slate and writer-director Gillian Robespierre are returning to Sundance....', 'http://www.ew.com/article/2016/11/30/sundance-film-festival-2017-lineup-announced', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/landline-still-1_31124303631_o.jpg?itok=0r2BY97v'),
(4, 'Bob Dylan Bails on Obama\'s Nobel Prize Meet-and-Greet', 'Another day, another update on the saga of Bob Dylan and his Nobel Prize. Dylan skipped out on Wednesday’s meet-and-greet with American Nobel Prize...', 'http://www.ew.com/article/2016/11/30/bob-dylan-obama-nobel-prize', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/bob-dylan-barack-obama.jpg?itok=yzz-pIJW'),
(5, '\'Masters of Sex\' Not Returning for a Fifth Season', 'The lessons are over. Masters of Sex has concluded its run as Showtime has opted not to renew the period drama for a fifth season, according to...', 'http://www.ew.com/article/2016/11/30/masters-of-sex-canceled-showtime', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/masters-of-sex.jpg?itok=3U4I0-6C'),
(6, '\'Westworld\': 4 Intriguing Season Finale Photos', 'Westworld is rolling out its last batch of photos for its final episode of the show’s first season – and they’re pretty intriguing. One image below...', 'http://www.ew.com/article/2016/11/30/westworld-season-finale-photos', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/1480537963/Ed-Harris-as-Man-in-Black%2C-Evan-Rachel-Wood-as-Dolores---credit-John-P.-Johnson-HBO.jpg?itok=9pdoitO9'),
(7, 'Horror Film \'Abattoir\' Has the Ultimate Murder House — Exclusive Clip', 'Abattoir is the latest terror tale from director Darren Lynn Bousman (Saw II-IV, Repo! The Genetic Opera) and stars Jessica Lowndes (90210) as a...', 'http://www.ew.com/article/2016/11/30/abattoir-exclusive-clip', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/abattoir.jpg?itok=sUza0ihf'),
(8, '\'Gilmore Girls\': Jared Padalecki, Milo Ventimiglia remember Jess and Dean\'s season 3 throwdown', 'During Gilmore Girls’ original seven-season run, there weren’t many instances of violence. Typically, the biggest fight in any episode would...', 'http://www.ew.com/article/2016/11/30/gilmore-girls-jared-padalecki-milo-ventimiglia-dean-jess-season-3-fight', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/43987239222.jpg?itok=ewDocMIf'),
(9, '\'SNL\' Star Vanessa Bayer Opens Up About Childhood Battle with Cancer', 'This article originally appeared on PEOPLE.com. When Vanessa Bayer was just freshman in high school, she was diagnosed with leukemia. While the...', 'http://www.ew.com/article/2016/11/30/snl-vanessa-bayer-childhood-battle-cancer', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/vanessa-bayer.jpg?itok=uuTNxKM0'),
(10, '\'The Witch\' Directed By Wes Anderson Is a Wacky Take on Horror', 'What if The Witch was simply about a down on their luck family forced to find happiness in the woods? Thankfully, the stylings of Wes Anderson...', 'http://www.ew.com/article/2016/11/30/witch-directed-wes-anderson-video', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/goat.jpg?itok=QDcmpMiA'),
(11, '\'Gilmore Girls\': Lauren Graham Filmed Multiple Reactions to the Final Four Words', 'By now, most Gilmore Girls fans know the final four words that show creator Amy Sherman-Palladino thought up all those years ago (and if you don’t,...', 'http://www.ew.com/article/2016/11/30/gilmore-girls-lauren-graham-final-four-words', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/gilmore-girls.jpg?itok=KTgUq5Kv'),
(12, 'Prince Harry Meets Rihanna During Barbados\' Toast to the Nation', 'Prince Harry was a little starry-eyed when he was introduced to Rihanna during a trip to Barbados on Wednesday. The two met and shook hands during...', 'http://www.ew.com/article/2016/11/30/prince-harry-rihanna-barbados', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/rihanna-prince-harry_0.jpg?itok=jvjR8jf3'),
(13, 'Sundance Film Festival Announces First Wave of 2017 Films', 'Three years after the premiere of their hit rom-com Obvious Child, Jenny Slate and writer-director Gillian Robespierre are returning to Sundance....', 'http://www.ew.com/article/2016/11/30/sundance-film-festival-2017-lineup-announced', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/landline-still-1_31124303631_o.jpg?itok=0r2BY97v'),
(14, 'Bob Dylan Bails on Obama\'s Nobel Prize Meet-and-Greet', 'Another day, another update on the saga of Bob Dylan and his Nobel Prize. Dylan skipped out on Wednesday’s meet-and-greet with American Nobel Prize...', 'http://www.ew.com/article/2016/11/30/bob-dylan-obama-nobel-prize', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/bob-dylan-barack-obama.jpg?itok=yzz-pIJW'),
(15, '\'Masters of Sex\' Not Returning for a Fifth Season', 'The lessons are over. Masters of Sex has concluded its run as Showtime has opted not to renew the period drama for a fifth season, according to...', 'http://www.ew.com/article/2016/11/30/masters-of-sex-canceled-showtime', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/masters-of-sex.jpg?itok=3U4I0-6C'),
(16, '\'Westworld\': 4 Intriguing Season Finale Photos', 'Westworld is rolling out its last batch of photos for its final episode of the show’s first season – and they’re pretty intriguing. One image below...', 'http://www.ew.com/article/2016/11/30/westworld-season-finale-photos', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/1480537963/Ed-Harris-as-Man-in-Black%2C-Evan-Rachel-Wood-as-Dolores---credit-John-P.-Johnson-HBO.jpg?itok=9pdoitO9'),
(17, 'Horror Film \'Abattoir\' Has the Ultimate Murder House — Exclusive Clip', 'Abattoir is the latest terror tale from director Darren Lynn Bousman (Saw II-IV, Repo! The Genetic Opera) and stars Jessica Lowndes (90210) as a...', 'http://www.ew.com/article/2016/11/30/abattoir-exclusive-clip', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/abattoir.jpg?itok=sUza0ihf'),
(18, '\'Gilmore Girls\': Jared Padalecki, Milo Ventimiglia remember Jess and Dean\'s season 3 throwdown', 'During Gilmore Girls’ original seven-season run, there weren’t many instances of violence. Typically, the biggest fight in any episode would...', 'http://www.ew.com/article/2016/11/30/gilmore-girls-jared-padalecki-milo-ventimiglia-dean-jess-season-3-fight', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/43987239222.jpg?itok=ewDocMIf'),
(19, '\'SNL\' Star Vanessa Bayer Opens Up About Childhood Battle with Cancer', 'This article originally appeared on PEOPLE.com. When Vanessa Bayer was just freshman in high school, she was diagnosed with leukemia. While the...', 'http://www.ew.com/article/2016/11/30/snl-vanessa-bayer-childhood-battle-cancer', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/vanessa-bayer.jpg?itok=uuTNxKM0'),
(20, '\'The Witch\' Directed By Wes Anderson Is a Wacky Take on Horror', 'What if The Witch was simply about a down on their luck family forced to find happiness in the woods? Thankfully, the stylings of Wes Anderson...', 'http://www.ew.com/article/2016/11/30/witch-directed-wes-anderson-video', 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2016/11/30/goat.jpg?itok=QDcmpMiA');

-- --------------------------------------------------------

--
-- Table structure for table `theatres`
--

CREATE TABLE `theatres` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `address` varchar(400) NOT NULL,
  `pincode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `theatres`
--

INSERT INTO `theatres` (`id`, `name`, `address`, `pincode`) VALUES
(1, 'AMC Assembly Row 12', '395 Artisan Way, Somerville MA', 2145),
(2, 'AMC Loews Boston Common 19', '175 Tremont Street, Boston MA', 2111);

-- --------------------------------------------------------

--
-- Table structure for table `trivia`
--

CREATE TABLE `trivia` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trivia`
--

INSERT INTO `trivia` (`id`, `question`, `answer`) VALUES
(1, '1977%3A%22Use%20the%20force%2C%20Luke%22', 'Star Wars'),
(2, '1942%3A%22Louis%2C%20I%20think%20this%20is%20going%20to%20be%20the%20beginning%20of%20a%20beautiful%20friendship%22', 'Casablanca'),
(3, '1950%3A%22Alright%2C%20Mr.%20DeMille%2C%20I%27m%20ready%20for%20my%20closeup%22', 'Sunset Boulevard'),
(4, '1974%3A%22That%27s%20Fronk-en-steen%21%22', 'Young Frankenstein'),
(5, '1968%3A%22I%27m%20sorry%2C%20Dave%2C%20I%27m%20afraid%20I%20can%27t%20do%20that%22', '2001: A Space Odyssey'),
(6, '1931%3A%22It%27s%20Alive%21It%27s%20Alive%21%22', 'Frankenstein'),
(7, '1939%3A%22Pay%20no%20attention%20to%20the%20man%20behind%20the%20curtain%22', 'The Wizard of Oz'),
(8, '1967%3A%22They%20call%20me%20Mr.%20Tibbs%21%22', 'In the Heat of the Night'),
(9, '1968%3A%22Get%20your%20stinking%20paws%20off%20me%2C%20you%20damned%20dirty%20ape%21%22', 'Planet of the Apes'),
(10, '1967%3A%22I%20just%20want%20to%20say%20one%20word%20to%20you%20--%20just%20one%20word...plastics%22', 'The Graduate'),
(11, '1939%3A%22Toto%2C%20I%27ve%20a%20feeling%20we%27re%20not%20in%20Kansas%20anymore%22', 'The Wizard of Oz'),
(12, '1941%3A%22I%20guess%20Rosebud%20is%20just%20a%20piece%20in%20a%20jigsaw%20puzzle%2C%20a%20missing%20piece%22', 'Citizen Kane'),
(13, '1951%3A%22Stell-lahhhhh%21%21%22', 'A Streetcar Named Desire'),
(14, '1994%3A%22Alrighty%20then%21%22', 'Ace Ventura: Pet Detective'),
(15, '1995%3A%22They%20may%20take%20our%20lives%2C%20but%20they%27ll%20never%20take%20our%20freedom%21%22', 'Braveheart'),
(16, '%22I%27m%20gonna%20make%20him%20an%20offer%20he%20can%27t%20refuse%22', 'The Godfather'),
(17, '%22Houston%2C%20we%20have%20a%20problem%22', 'Apollo 13'),
(18, '%22I%20never%20drink...wine%22', 'Dracula'),
(19, '%22Aaah%21%20%20You%20cursed%20brat%21%20%20Look%20what%20you%27ve%20done%21%20%20I%27m%20melting%2C%20melting%21%22', 'The Wizard Of Oz'),
(20, '%22You%27ve%20got%20to%20ask%20yourself%20one%20question%2C%20%27Do%20I%20feel%20lucky%3F%27%20%20Well%2C%20do%20ya%2C%20punk%3F%22', 'Dirty Harry'),
(21, '2007%3AGiant%20robots%20become%20various%20modes%20of%20conveyance%3B%20movie%20company%20makes%20a%20bazillion%20box%20office%20bucks', 'Transformers'),
(22, '1941%3AOrson%20Welles%27%20last%20word%20perplexes%20all%20%28but%20what%27s%20really%20perplexing--no%20one%20was%20in%20the%20room%20to%20hear%20it%29', 'Citizen Kane'),
(23, '1994%3ASam%20Jackson%20quotes%20scripture%3B%20Travolta%20shoots%20a%20guy%20in%20the%20face', 'Pulp Fiction'),
(24, '1997%3AAn%20M.I.T.%20janitor%20does%20some%20math%3B%20the%20NSA%20does%20or%20doesn%27t%20get%20involved', 'Good Will Hunting'),
(25, '2001%3AA%20paranoid%20schizophrenic%20does%20some%20math%3B%20the%20CIA%20does%20or%20doesn%27t%20get%20involved', 'A Beautiful Mind'),
(28, 'What is Sanjay\'s Last name?', 'Murali'),
(29, 'Q1', 'A1'),
(30, 'What is the square root of 25', 'Plus/Minus 5'),
(31, 'Q2', 'A3');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT 'Add Auto Increment Later',
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(20) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `admin`) VALUES
(1, 'Administrator', 'Administrator', 'admin', 'admin', 1),
(2, 'Moderator', 'Moderator', 'mod', 'mod', 2),
(3, 'User', 'User', 'user', 'user', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_ratings`
--

CREATE TABLE `user_ratings` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `movieid` int(11) NOT NULL,
  `user_rating` double NOT NULL,
  `review` longtext NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biography`
--
ALTER TABLE `biography`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favorites_add_FK_userid` (`userid`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `imdbid` (`imdbid`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theatres`
--
ALTER TABLE `theatres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trivia`
--
ALTER TABLE `trivia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_ratings`
--
ALTER TABLE `user_ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_ratings_add_FK_userid` (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biography`
--
ALTER TABLE `biography`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `trivia`
--
ALTER TABLE `trivia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `user_ratings`
--
ALTER TABLE `user_ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_add_FK_userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_ratings`
--
ALTER TABLE `user_ratings`
  ADD CONSTRAINT `user_ratings_add_FK_userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
