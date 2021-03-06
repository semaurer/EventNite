# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
bob = User.create(email: "bob@gmail.com", fname: "bob", lname: "guest", password: "apples")
nancy = User.create(email: "nancy@gmail.com", fname: "Nancy", lname: "Roberts", password: "apples")
miriam = User.create(email: "miriam@gmail.com", fname: "Miriam", lname: "Smith", password: "apples")
ace = User.create(email: "ace@gmail.com", fname: "Ace", lname: "Friedman", password: "apples")
jane = User.create(email: "jane@gmail.com", fname: "Jane", lname: "Goodman", password: "apples")
rupert = User.create(email: "rupert@gmail.com", fname: "Rupert", lname: "Collison", password: "apples")
henry = User.create(email: "henry@gmail.com", fname: "Henry", lname: "Johnson", password: "apples")
ingrid = User.create(email: "ingrid@gmail.com", fname: "Ingrid", lname: "Greenberg", password: "apples")
trevor = User.create(email: "trevor@gmail.com", fname: "Trevor", lname: "Hunter", password: "apples")
julia = User.create(email: "julia@gmail.com", fname: "Julia", lname: "Griffin", password: "apples")

Event.destroy_all
e1 = Event.create(title: "Dance at the Grand Ballroom", start_date_time: DateTime.new(2017, 1, 12, 21),
  end_date_time: DateTime.new(2017, 1, 13, 24), author_id: bob.id,
  location: "Grand Ballroom, 17 Broadway, New York Ny 10012",
  description: "We are hosting an evening of refined dancing at our divine 1200sq foot ballroom.
  Enjoy the refined music of the classical ensemble: Winds of Change. We will be serving
  cheese and wine all night long.  5$ cocktails until 11pm.
  We have a strict suits and dresses policy, so please dress accordingly.",
  image: File.open('app/assets/images/event_seed_images/grand_ball_room.png'))
e2 = Event.create(title: "Webster Hall Rock Concert", start_date_time: DateTime.new(2017, 1, 12, 19),
  end_date_time: DateTime.new(2017, 1, 12, 22), author_id: nancy.id,
  location: "Webster Hall, 125 E 11th St, New York, NY 10003",
  description: "The legendary rock band A-7 is coming back to NYC with live in concert
  'The Best Of' at Webster Hall! One and only concert!
  Start 7 PM. 18+ Show.", price: "10",
  image: File.open('app/assets/images/event_seed_images/web_hall_rock.png'))
e3 = Event.create(title: "Datsik Ninja Nation", start_date_time: DateTime.new(2017, 2, 3, 19),
  end_date_time: DateTime.new(2017, 2, 3, 23), author_id: nancy.id,
  location: "Playstation Theatre",
  description: "Pop the champagne, because Datsik is headed out on a massive North American
  tour in support of his upcoming “Sensei” EP slated to be released in December.
  He will introduce his new stage production 'The Shogun' which he says is “The next chapter for Datsik,
  and is an amalgamation of my wildest vision to date.",
  price: "5",
  image: File.open('app/assets/images/event_seed_images/datsik_ninja_event.png'))
e4 = Event.create(title: "Outside concert at Central Park", start_date_time: DateTime.new(2017, 1, 3, 19),
  end_date_time: DateTime.new(2017, 1, 3, 23), author_id: bob.id,
  location: "Central Park sheeps meadow",
  description: "Come for a great night at central park. Several local artists will be
  performing on a popup stage at the middle of sheeps meadow.  Bring some blankets and snacks.
  All Ages are welcome!",
  image: File.open('app/assets/images/event_seed_images/c_park_concert.png'))
e5 = Event.create(title: "Roof top chatter at sky room", start_date_time: DateTime.new(2017, 1, 5, 18),
  end_date_time: DateTime.new(2017, 1, 6, 2), author_id: julia.id,
  location: "Sky Room, 330 West 40th Street New York, NY 10018",
  description: "Looking to take it up a notch? Sky Room always has the best beats
  & unbeatable views! We also can get you discounted access to any other rooftopclub in NYC!",
  image: File.open('app/assets/images/event_seed_images/sky_room.png'))
e6 = Event.create(title: "The Royal Slumber Party", start_date_time: DateTime.new(2017, 1, 10, 18),
  end_date_time: DateTime.new(2017, 1, 11, 4), author_id: julia.id,
  location: "IFeelnyc",
  description: "The Royal Feeler Family requests your presence for a magical
  celebration at The Palace of Feelings. The palace will be decorated with art installations,
  visual stimulations and state of the art sound. Patrons are required to wear their royal,
  creative costumes, and get ready for a Slumber Party to remember!",
  price: "20",
  image: File.open('app/assets/images/event_seed_images/slumber_party.png'))
e7 = Event.create(title: "The DL Rooftop", start_date_time: DateTime.new(2017, 2, 17, 18),
  end_date_time: DateTime.new(2017, 2, 18, 1), author_id: henry.id,
  location: "Analog BKNY
  177 2nd Avenue, Brooklyn
  NY 11215",
  description: "Analog BKNY / Klandest present:

  Cuartero / [Hyte, Desolat, Moon Harbour, Sanity,]
  Denney / [Hot Creations, Vima Music]
  Eskuche & Nu Sky [Hot Creations]
  Nathan Kersaint
  J Harris [bday bash]",
  image: File.open('app/assets/images/event_seed_images/dl_rooftop.png'))
e8 = Event.create(title: "Brookladelphia", start_date_time: DateTime.new(2017, 1, 17, 18),
  end_date_time: DateTime.new(2017, 1, 18, 1), author_id: henry.id,
  location: "Salzy
  506 5th Ave
  Brooklyn, NY 11221",
  description: "We are here to bridge the gap between Philly and NYC. Brookladelphia
  is a monthly event showcasing the finest producers/DJs/Musicians in electronic music.",
  image: File.open('app/assets/images/event_seed_images/brookladelphia.png'))
e9 = Event.create(title: "TPA Studios x Jack Laboz & Friends ft. Special Guest",
  start_date_time: DateTime.new(2017, 3, 17, 18),
  end_date_time: DateTime.new(2017, 3, 18, 1), author_id: ingrid.id,
  location: "Tin Pan Alley Studios
  1179 Broadway
  3rd FL
  New York, NY 10001",
  description: "Join us for another Sunday of DJs and good music at the TPA Livestream!
  Limited spots available.
  $30 cover at the door with no RSVP
  LINE UP
  Jack Laboz
  Nick AM
  Simon Alex
  HtPkt
  Ares Carter
  PLUS SPECIAL SURPRISE GUEST",
  image: File.open('app/assets/images/event_seed_images/tin_pan_alley.png'))
e10 = Event.create(title: "SPECIAL GUEST DJ @ CENTRAL LOUNGE (ASTORIA) ",
  start_date_time: DateTime.new(2017, 2, 21, 18),
  end_date_time: DateTime.new(2017, 2, 22, 1), author_id: rupert.id,
  location: "Central
  20-30 Steinway Street
  Astoria, NY 11105",
  description: "SPECIAL GUEST DJ @ CENTRAL LOUNGE (ASTORIA)

  Bottle Specials:
  THE ROOSEVELT - $225.00 for a 1 Liter Absolut (up to 4 guests)
  THE CENTRAL - $500.00 for 1 Magnum Belvedere, 1 Champagne (up to 6 guests)
  THE QUEENS - $800.00 for 3 Premium Bottles, 1 Champagne (up to 12 guests)
  THE IMPERIAL - $1,200.00 for 4 Premium Bottles, 1 Moet Imperial (up to 16 guests)
  THE LUCKY 7 - $1,600.00 for 5 Premium Bottles, 2 Motel Imperial (up to 22 guests)",
  price: "50",
  image: File.open('app/assets/images/event_seed_images/central_lounge.png'))
e11 = Event.create(title: "Carib spotlight birthday bash: Royal Edition",
  start_date_time: DateTime.new(2016, 12, 21, 16),
  end_date_time: DateTime.new(2016, 12, 21, 20), author_id: ingrid.id,
  location: "Garden Plaza Hotel
  129 Pehle Avenue
  Saddle Brook, NJ 07663",
  description: "Carib Spotlight presents it's 3rd Annual birthday bash: The Royal Edition.",
  price: "15",
  image: File.open('app/assets/images/event_seed_images/reggae_royal_bash.png'))
e12 = Event.create(title: "Habana Nights",
  start_date_time: DateTime.new(2017, 1, 3, 20),
  end_date_time: DateTime.new(2017, 1, 4, 4), author_id: ingrid.id,
  location: "Subrosa
  63 Gansevoort Street
  New York, NY 10014",
  description: "Dancing all night long at Subrosa!",
  price: "5",
  image: File.open('app/assets/images/event_seed_images/subrosa.png'))
e13 = Event.create(title: "Arthur Sadowsky and The Trouvadours",
  start_date_time: DateTime.new(2017, 1, 3, 18),
  end_date_time: DateTime.new(2017, 1, 4, 2), author_id: ingrid.id,
  location: "Club Bonafide
  212 East 52nd Street
  New York, NY 10022",
  description: "Arthur Sadowsky is now considered one of the top electric bass
  players on the New York scene. He is the musical director of “Arthur Sadowsky
  & The Troubadours” regularly gigging in Manhattan. Currently he is performing,
  composing, and arranging.",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/troubadorsblues.png'))
e14 = Event.create(title: "7 Things Top Networkers Do That Wins Them Endless Business",
  start_date_time: DateTime.new(2017, 1, 5, 16),
  end_date_time: DateTime.new(2017, 1, 5, 18), author_id: ace.id,
  location: "Online Webinar",
  description: "I'm going to reveal the 7 Things Top Networkers Do To
  Build Huge Communities and Win Tons of Business.",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/seven_ways.png'))
e15 = Event.create(title: "Jeffersonian Dinner: 2017 Goals For You & Your Business",
  start_date_time: DateTime.new(2017, 1, 8, 16),
  end_date_time: DateTime.new(2017, 1, 8, 18), author_id: ace.id,
  location: "Brooklyn FoodWorks
  630 Flushing Avenue
  #200
  Brooklyn, NY 11206",
  description: "Are you interested in talking with others about specific goals
  for the year ahead? Enjoy meeting new people, but are less excited about
  small talk? You will be in good company as setting the right goals and
  holding yourself accountable to acheiving them is something many of us have
  in common yet is not often discussed openly, especially around a table filled
  with entrepreneurs who could all learn from one another.",
  price: "35",
  image: File.open('app/assets/images/event_seed_images/jeffersonian.png'))
e16 = Event.create(title: "Maximizing Mental Agility: Secrets of Success & Motivation",
  start_date_time: DateTime.new(2017, 1, 10, 16),
  end_date_time: DateTime.new(2017, 1, 10, 18), author_id: ace.id,
  location: "RITS CARLTON
  Two West Street
  New York, New York 10004",
  description: "Maximizing Mental Agility: Secrets of Success & Motivation
  This seminar focuses on the six areas of thinking that provide proven strategies
  rooted in Cognitive Science that will help you to be more productive, efficient.
  creative. motivated and feel satisfied in your work, life and beyond",
  price: "40",
  image: File.open('app/assets/images/event_seed_images/careers_1.png'))
e17 = Event.create(title: "Contract Basics for Artists",
  start_date_time: DateTime.new(2017, 1, 11, 17),
  end_date_time: DateTime.new(2017, 1, 11, 19), author_id: ace.id,
  location: "VLA Auditorium
  1 East 53rd Street
  New York, NY 10022",
  description: "This class will provide an overview of contract law including
  essential aspects of contract formation, enforceability, and standard provisions
  for artists such as creative control, compensation, and credit.",
  price: "50",
  image: File.open('app/assets/images/event_seed_images/artists_career.png'))
e18 = Event.create(title: "INVEST IN REAL ESTATE FOR 2017",
  start_date_time: DateTime.new(2017, 1, 11, 17),
  end_date_time: DateTime.new(2017, 1, 11, 19), author_id: ace.id,
  location: "310 5th Ave
  310 5th Avenue
  New York, NY 10001",
  description: "Discover the best way to accelerate your success in 2017 as a
  Real Estate Investor and Business Owner.",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/real_estate_1.png'))
e19 = Event.create(title: "FREE Real Estate Investors Training. Webinar",
  start_date_time: DateTime.new(2017, 1, 12, 18),
  end_date_time: DateTime.new(2017, 1, 12, 21), author_id: jane.id,
  location: "online webinar",
  description: "Learn how to make your money or energy work for you!",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/real_estate_2.png'))
e20 = Event.create(title: "Revenue Recognition Roundtable Lunch",
  start_date_time: DateTime.new(2017, 1, 12, 18),
  end_date_time: DateTime.new(2017, 1, 12, 21), author_id: jane.id,
  location: "The Capital Grille
  155 E 42nd St
  New York, NY 10017",
  description: "Join us to learn how others are addressing the adoption of the
  new revenue recognition standard and where your company is in comparison to
  your peers.",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/finance_1.png'))
e21 = Event.create(title: "Run a Financially Fit Small Business",
  start_date_time: DateTime.new(2017, 1, 13, 18),
  end_date_time: DateTime.new(2017, 1, 13, 21), author_id: jane.id,
  location: "Online webinar",
  description: "Successfully managing the finances of a small business is
  challenging. Learn tips and practices that you can use to help you run a small
  business that is financially fit.",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/finance_2.png'))
e22 = Event.create(title: "Art & Design Certificates Info Session with Parsons",
  start_date_time: DateTime.new(2017, 1, 14, 18),
  end_date_time: DateTime.new(2017, 1, 14, 21), author_id: jane.id,
  location: "Anna-Maria and Stephen Kellen Auditorium
  Sheila C. Johnson Design Center
  66 Fifth Avenue
  New York, NY 10003",
  description: "Want to learn more about how you can jump start the career of
  your dreams with a certificate in art and design from Parsons? Join us for
  an information session given by our program director, Melinda Wax. Faculty
  will be on hand to discuss the latest courses and noncredit certificate options
  in all areas of study, including digital design, fashion business, fashion
  design, interior and architectural design, and more!",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/design_1.png'))
e23 = Event.create(title: "Cooper: Leading Creative Ideation NYC",
  start_date_time: DateTime.new(2017, 1, 15, 18),
  end_date_time: DateTime.new(2017, 1, 15, 21), author_id: jane.id,
  location: "TBA
  New York, NY 10038",
  description: "Facilitate breakthrough ideas and solutions, and spark creative
  momentum.",
  price: "550",
  image: File.open('app/assets/images/event_seed_images/design_2.png'))
e24 = Event.create(title: "Move Better - Feel Better - Live Better",
  start_date_time: DateTime.new(2017, 1, 16, 18),
  end_date_time: DateTime.new(2017, 1, 16, 21), author_id: bob.id,
  location: "Spoke the Hub Dancing, Inc.
  748 Union Street
  3rd floor
  Brooklyn, NY 11215",
  description: "Goal of this class is help create lasting improvements in students'
  health and well-being. Reducing tension, eliminating pain, improving balance
  and coordination is achieved by creating conditions for nervous system do what
    it does best - learn by discovering new possiblities through sensing and
    feeling. This kind of process is efficient, engaging and enjoyable!",
  price: "25",
  image: File.open('app/assets/images/event_seed_images/personal_health_1.png'))
e25 = Event.create(title: "Shake it all off! Active Meditation for Stress Release
  and Well-Being",
  start_date_time: DateTime.new(2017, 1, 16, 17),
  end_date_time: DateTime.new(2017, 1, 16, 21), author_id: bob.id,
  location: "Breather
  TBD
  New York, New York ",
  description: "Enter Osho's powerful Kundalini meditation, a kind of active
  meditation specifically designed for modern life that helps us to release stress
  and unblock our energy.

  Comprised of 15 minutes of shaking, 15 minutes of dancing, 15 minutes of stillness
  (sitting or standing), and 15 minutes of silence (shavasana), this meditation is
  a really amazing way to shake everything off, get past self-doubts and limiting
  beliefs.",
  price: "15",
  image: File.open('app/assets/images/event_seed_images/personal_health_2.png'))
e26 = Event.create(title: "Seongwun Free Healing Workshop",
  start_date_time: DateTime.new(2017, 1, 16, 17),
  end_date_time: DateTime.new(2017, 1, 16, 21), author_id: bob.id,
  location: "TBD
  New York, New York ",
  description: "Get healed in Seongwun.
  Find yourself, live a life with purpose, and fulfill your dreams.
  Peace, happiness and love in your mind.",
  price: "1000",
  image: File.open('app/assets/images/event_seed_images/mental_health_1.png'))
e27 = Event.create(title: "2017 Clearing & Energy Healing Workshop",
  start_date_time: DateTime.new(2017, 1, 16, 17),
  end_date_time: DateTime.new(2017, 1, 16, 21), author_id: bob.id,
  location: "A+ Changes Nutritional Therapy And Personal Training
  14 Rockland Avenue
  Staten Island, NY 10306",
  description: "Hypnosis for burning the leaves of the past and planting new
  seeds for the future Soothing 528hz music, known as the love frequecy,
  which is said to actually repair broken DNA.  The Zone of Serenity, a tool to
  help you instamntly return to a familiar place of relaxation whenever you feel
  off or stressed out.  Deeksha - The Oneness Blessing - The transfer of Divine
  Energy which, over time is designed to bring about the state of Oneness in the recipient.
  More Hypnosis for breaking through those invisible barriers",
  price: "44",
  image: File.open('app/assets/images/event_seed_images/mental_health_2.png'))
e28 = Event.create(title: "Winter Reboot Yoga + Healing Arts Mini-Retreat Series",
  start_date_time: DateTime.new(2017, 1, 17, 17),
  end_date_time: DateTime.new(2017, 1, 17, 18), author_id: trevor.id,
  location: "Balance Arts Center
  34 West 28th Street
  New York, NY 10001",
  description: "1 hour of healing arts to banish stress, anxiety, and tension
  Each week's retreat experience will be unique. We'll explore: Reiki, guided
  deep relaxation meditaitons, aromatherapy, the Yoga Sutras, breathing techniques
  to optimize your body and mind, and much more.",
  price: "180",
  image: File.open('app/assets/images/event_seed_images/yoga_1.png'))
e29 = Event.create(title: "Soul Qi",
  start_date_time: DateTime.new(2017, 1, 18, 17),
  end_date_time: DateTime.new(2017, 1, 18, 18), author_id: trevor.id,
  location: "The Yoga Collective NYC
  135 West 29th
  Room 603
  New York, NY",
  description: "60 minutes guided Mediation and Sivasana including a purposeful ACUPUNCTURE",
  price: "35",
  image: File.open('app/assets/images/event_seed_images/yoga_2.png'))
e30 = Event.create(title: "Arthur Avenue Italian Food Tour",
  start_date_time: DateTime.new(2017, 1, 17, 17),
  end_date_time: DateTime.new(2017, 1, 17, 22), author_id: rupert.id,
  location: "Arthur Avenue Retail Market
  2344 Arthur Avenue
  Bronx, NY 10458",
  description: "Little Italy in the Bronx is like a time capsule of Italian foods,
  with many dishes and delicacies that can no longer be found in Italy. Settled by
  Italian immigrants who came to the Bronx to build the New York Botanical Garden
  and the Bronx Zoo, this is New York's largest remaining Little Italy.",
  price: "75",
  image: File.open('app/assets/images/event_seed_images/food_1.png'))
e31 = Event.create(title: "JEWISH FOOD TOUR OF NEW YORK",
  start_date_time: DateTime.new(2017, 1, 17, 17),
  end_date_time: DateTime.new(2017, 1, 17, 22), author_id: rupert.id,
  location: "2nd Ave & E Houston St
  New York, NY 10003",
  description: "Jewish Cuisine: Bagels and lox, Knish, Matzo, Bialy, and much more!",
  price: "50",
  image: File.open('app/assets/images/event_seed_images/food_2.png'))
e32 = Event.create(title: "NY Cocktail Expo - Queens",
  start_date_time: DateTime.new(2017, 1, 18, 17),
  end_date_time: DateTime.new(2017, 1, 18, 22), author_id: rupert.id,
  location: "Beer Garden at Bohemian Hall
  2919 24th Ave
  Astoria, NY 11102",
  description: "Sweet, fizzy, bubbly, bold, smokey, spicy and yummy Craft Cocktails
  are on the rise! Good times are ahead with the premier spirit & cocktail exhibition
  & exclusive tasting event, featuring the top cocktail bars and spirits in Queens
  and more!",
  price: "50",
  image: File.open('app/assets/images/event_seed_images/spirits_2.png'))
e33 = Event.create(title: "GENUINE Liquorette Master Class",
  start_date_time: DateTime.new(2017, 1, 19, 19),
  end_date_time: DateTime.new(2017, 1, 19, 22), author_id: rupert.id,
  location: "Genuine Liquorette
  191 Grand Street
  New York, NY 10013",
  description: "Students learn how to set up and take care of a proper mixing station,
  the must-have tools in any mixologist's arsenal, Grade-A techniques on mixing,
  stirring and shaking, the mathematics / science behind your favorite cocktails.",
  price: "80",
  image: File.open('app/assets/images/event_seed_images/spirits_1.png'))
e34 = Event.create(title: "Beer Appreciation Class and Tasting",
  start_date_time: DateTime.new(2017, 1, 9, 19),
  end_date_time: DateTime.new(2017, 1, 9, 22), author_id: jane.id,
  location: "The Cannibal Beer & Butcher
  113 East 29th Street
  New York, NY 10016",
  description: "All participants will:
·	SUBMIT to the principle that beer is the world’s greatest beverage
·	RECEIVE beer samples, a little buzz, and some snacks; charcuterie, cheese, and salty bits
·	NAVIGATE the craft beer aisle under the watchful eyes of our seasoned professionals
·	LEARN what particular flavor profiles and attributes they like best in beer",
  price: "75",
  image: File.open('app/assets/images/event_seed_images/beer_1.png'))
e35 = Event.create(title: "New York City Oktoberfest",
  start_date_time: DateTime.new(2017, 10, 7, 17),
  end_date_time: DateTime.new(2017, 10, 7, 22), author_id: jane.id,
  location: "TBD",
  description: "Celebrate Oktoberfest in style as you go on a beer-fueled tour
  of NYC's best venues. A different 12-ounce Oktoberfest beer at each and every
  venue is INCLUDED in the ticket price.",
  price: "55",
  image: File.open('app/assets/images/event_seed_images/beer_2.png'))
e36 = Event.create(title: "Bronx Youth Fine Arts Gala",
  start_date_time: DateTime.new(2017, 10, 7, 18),
  end_date_time: DateTime.new(2017, 10, 7, 20), author_id: jane.id,
  location: "The Bronx Museum of the Arts
  1040 Grand Concourse
  Bronx, NY 10456",
  description: "The Bronx Youth is taking over the Bronx Museum with our Fine
  Arts Gala!! Join us in supporting and redfining the arts with Christ featuring
  the talent found in our very own Bronx Section. ",
  price: "50",
  image: File.open('app/assets/images/event_seed_images/arts_1.png'))
e37 = Event.create(title: "You Can Dance Again: The Choreo Series",
  start_date_time: DateTime.new(2017, 3, 7, 17),
  end_date_time: DateTime.new(2017, 3, 7, 21), author_id: jane.id,
  location: "Keystone Studio
  252 West 30th Street
  4-B
  New York, NY 10001",
  description: "Each week will have a different focus, geared at supporting your
  process in choreographing something new this month:
  WEEK 1 - Start with what you know: Learn how to adapt every day movements and steps
  from dances you already know into fresh new material.
  WEEK 2 - Let the music guide you: Explore different ways to approach music and
  how it can influence your movement.
  WEEK 3 - Incorporate other art forms: Take a multidisciplinary approach to dance
  with inspiration from visual art and text, plus props and costumes pieces.",
  price: "95",
  image: File.open('app/assets/images/event_seed_images/arts_2.png'))
e38 = Event.create(title: "Silent Christmas Shorts with a Live Score!",
  start_date_time: DateTime.new(2016, 12, 23, 17),
  end_date_time: DateTime.new(2016, 12, 23, 21), author_id: rupert.id,
  location: "Videology Bar & Cinema
  308 Bedford Avenue
  Brooklyn, NY 11249",
  description: "We're partnering up with Tenth Intervention to bring you the
  newest installation of their Silent House series, featuring our favorite
  Christmas shorts with a contemporary live score! The program will consist
  of silent Christmas classics to more recent holiday favorites to help usher
  in all those Yuletide feels.",
  price: "20",
  image: File.open('app/assets/images/event_seed_images/filmandmedia_1.png'))
e39 = Event.create(title: "OPEN HOUSE at Manhattan Edit Workshop ",
  start_date_time: DateTime.new(2017, 2, 23, 17),
  end_date_time: DateTime.new(2017, 2, 23, 21), author_id: rupert.id,
  location: "Manhattan Edit Workshop
  119 W 23rd St
  Suite 700
  New York, NY 10011",
  description: "Join Manhattan Edit Workshop for our February Open House!
  This is an opportunity for you to learn more about our Six Week Intensive
  Workshop and all of our classes. You’ll get a chance to meet some of our
  instructors, administration, other potential students, and to get a tour of
  our facilities. Refreshments and snacks will be served!",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/filmandmedia_2.png'))
e40 = Event.create(title: "Kickboxing | 300 Park",
  start_date_time: DateTime.new(2017, 2, 23, 17),
  end_date_time: DateTime.new(2017, 2, 23, 21), author_id: rupert.id,
  location: "WeWork 300 Park
  300 Park Ave
  New York, NY 10022",
  description: "Each class is a full body cardio kickboxing workout that will have
  you jabbing, crossing, and round-house kicking your way through 55 minutes of
  nonstop action!",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/sportsandfitness_1.png'))
e41 = Event.create(title: "New Year's Resolution Art Run + Bootcamp",
  start_date_time: DateTime.new(2017, 2, 25, 17),
  end_date_time: DateTime.new(2017, 2, 25, 21), author_id: henry.id,
  location: "ConBody Bootcamp Studio
  294 Broome Street
  Level C
  New York, NY 10002",
  description: "Join Runstreet and ConBody for a kick ass start to the New Year
  - with a Resolution 5K Art Run + ConBody prison-style bootcamp. Kick off the
  New Year with a fun, healthy and inspiring workout that will get you sweating
  and smiling!",
  price: "30",
  image: File.open('app/assets/images/event_seed_images/sportsandfitness_2.png'))
e42 = Event.create(title: "ENCHANTED - The New Year's Eve Affair",
  start_date_time: DateTime.new(2016, 12, 31, 18),
  end_date_time: DateTime.new(2017, 1, 1, 4), author_id: bob.id,
  location: "Bleachers Sports Bar and Grill
  240 Flatbush Avenue
  Brooklyn, NY 11217",
  description: "Grand Royal Productions l Savvy Simms Presents to you a
  New Year's Eve event like no other....
  E N C H A N T E D",
  price: "50",
  image: File.open('app/assets/images/event_seed_images/holiday_2.png'))
e43 = Event.create(title: "Step Into Your Greatness 2017",
  start_date_time: DateTime.new(2017, 2, 28, 18),
  end_date_time: DateTime.new(2017, 2, 28, 22), author_id: ingrid.id,
  location: "Align Wellness Studio
  10 East Willow Street
  Millburn, NJ 07041",
  description: "Step Into Your Greatness 2017 is a half day retreat with likeminded
  sisters who want to start the new year with purpose, clarity and a fresh
  commitment to our Selves.",
  price: "95",
  image: File.open('app/assets/images/event_seed_images/spirituality_1.png'))
e44 = Event.create(title: "Unstoppable Glory",
  start_date_time: DateTime.new(2017, 3, 1, 18),
  end_date_time: DateTime.new(2017, 3, 1, 22), author_id: henry.id,
  location: "43 Washington Ave
  43 Washington Avenue
  Irvington, NJ 07111",
  description: "Champions Royal Assembly USA presents a 3-day power filled
  conference titled Unstoppable Glory.",
  price: "free",
  image: File.open('app/assets/images/event_seed_images/spirituality_2.png'))

Ticket.destroy_all
t1 = Ticket.create(event_id: e10.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t2 = Ticket.create(event_id: e10.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t3 = Ticket.create(event_id: e10.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t4 = Ticket.create(event_id: e1.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t5 = Ticket.create(event_id: e1.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t6 = Ticket.create(event_id: e2.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t7 = Ticket.create(event_id: e2.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t8 = Ticket.create(event_id: e2.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t9 = Ticket.create(event_id: e5.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t10 = Ticket.create(event_id: e7.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t11 = Ticket.create(event_id: e8.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t12 = Ticket.create(event_id: e4.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t13 = Ticket.create(event_id: e4.id, buyer_id: bob.id, purchase_date: Time.now.to_date)
t14 = Ticket.create(event_id: e4.id, buyer_id: bob.id, purchase_date: Time.now.to_date)

Category.destroy_all
music = Category.create(name: "Music")

hiphopandrap = Category.create(name: "Hip Hop & Rap", parent_category_id: music.id)
top40 = Category.create(name: "Top 40", parent_category_id: music.id)
reggae = Category.create(name: "Reggae", parent_category_id: music.id)
latin = Category.create(name: "Latin", parent_category_id: music.id)
bluesandjazz = Category.create(name: "Blues & Jazz", parent_category_id: music.id)

business = Category.create(name: "Business")

startups = Category.create(name: "Startups", parent_category_id: business.id)
career = Category.create(name: "Career", parent_category_id: business.id)
realestate = Category.create(name: "Real Estate", parent_category_id: business.id)
finance = Category.create(name: "Finance", parent_category_id: business.id)
design = Category.create(name: "Design", parent_category_id: business.id)

health = Category.create(name: "Health")

personalhealth = Category.create(name: "Personal Health", parent_category_id: health.id)
mentalhealth = Category.create(name: "Mental Health", parent_category_id: health.id)
yoga = Category.create(name: "Yoga", parent_category_id: health.id)

foodanddrink = Category.create(name: "Food & Drink")

food = Category.create(name: "Food", parent_category_id: foodanddrink.id)
spirits = Category.create(name: "Spirits", parent_category_id: foodanddrink.id)
beer = Category.create(name: "Beer", parent_category_id: foodanddrink.id)

arts = Category.create(name: "Arts")
filmandmedia = Category.create(name: "Film & Media")
sportsandfitness = Category.create(name: "Sports & Fitness")
holiday = Category.create(name: "Holiday")
community = Category.create(name: "Community")
spirituality = Category.create(name: "Spirituality")

EventCategory.destroy_all

ec1 = EventCategory.create(event_id: e10.id, category_id: hiphopandrap.id)
ec10 = EventCategory.create(event_id: e9.id, category_id: hiphopandrap.id)
ec4 = EventCategory.create(event_id: e3.id, category_id: top40.id)
ec8 = EventCategory.create(event_id: e7.id, category_id: top40.id)
ec3 = EventCategory.create(event_id: e2.id, category_id: reggae.id)
ec11 = EventCategory.create(event_id: e11.id, category_id: reggae.id)
ec2 = EventCategory.create(event_id: e1.id, category_id: latin.id)
ec12 = EventCategory.create(event_id: e12.id, category_id: latin.id)
ec6 = EventCategory.create(event_id: e5.id, category_id: bluesandjazz.id)
ec13 = EventCategory.create(event_id: e13.id, category_id: bluesandjazz.id)

ec14 = EventCategory.create(event_id: e14.id, category_id: startups.id)
ec15 = EventCategory.create(event_id: e15.id, category_id: startups.id)
ec16 = EventCategory.create(event_id: e16.id, category_id: career.id)
ec17 = EventCategory.create(event_id: e17.id, category_id: career.id)
ec18 = EventCategory.create(event_id: e18.id, category_id: realestate.id)
ec19 = EventCategory.create(event_id: e19.id, category_id: realestate.id)
ec20 = EventCategory.create(event_id: e20.id, category_id: finance.id)
ec21 = EventCategory.create(event_id: e21.id, category_id: finance.id)
ec22 = EventCategory.create(event_id: e22.id, category_id: design.id)
ec23 = EventCategory.create(event_id: e23.id, category_id: design.id)

ec24 = EventCategory.create(event_id: e24.id, category_id: personalhealth.id)
ec25 = EventCategory.create(event_id: e25.id, category_id: personalhealth.id)
ec26 = EventCategory.create(event_id: e26.id, category_id: mentalhealth.id)
ec27 = EventCategory.create(event_id: e27.id, category_id: mentalhealth.id)
ec28 = EventCategory.create(event_id: e28.id, category_id: yoga.id)
ec29 = EventCategory.create(event_id: e29.id, category_id: yoga.id)

ec30 = EventCategory.create(event_id: e30.id, category_id: food.id)
ec31 = EventCategory.create(event_id: e31.id, category_id: food.id)
ec32 = EventCategory.create(event_id: e32.id, category_id: spirits.id)
ec33 = EventCategory.create(event_id: e33.id, category_id: spirits.id)
ec34 = EventCategory.create(event_id: e34.id, category_id: beer.id)
ec35 = EventCategory.create(event_id: e35.id, category_id: beer.id)

ec36 = EventCategory.create(event_id: e36.id, category_id: arts.id)
ec37 = EventCategory.create(event_id: e37.id, category_id: arts.id)

ec38 = EventCategory.create(event_id: e38.id, category_id: filmandmedia.id)
ec39 = EventCategory.create(event_id: e39.id, category_id: filmandmedia.id)

ec40 = EventCategory.create(event_id: e40.id, category_id: sportsandfitness.id)
ec41 = EventCategory.create(event_id: e41.id, category_id: sportsandfitness.id)

ec42 = EventCategory.create(event_id: e42.id, category_id: holiday.id)
ec7 = EventCategory.create(event_id: e6.id, category_id: holiday.id)

ec5 = EventCategory.create(event_id: e4.id, category_id: community.id)
ec9 = EventCategory.create(event_id: e8.id, category_id: community.id)

ec43 = EventCategory.create(event_id: e43.id, category_id: spirituality.id)
ec44 = EventCategory.create(event_id: e44.id, category_id: spirituality.id)

SavedEvent.destroy_all

s1 = SavedEvent.create(event_id: e15.id, user_id: bob.id)
s2 = SavedEvent.create(event_id: e5.id, user_id: bob.id)
s3 = SavedEvent.create(event_id: e19.id, user_id: bob.id)
s4 = SavedEvent.create(event_id: e9.id, user_id: bob.id)
s5 = SavedEvent.create(event_id: e26.id, user_id: bob.id)
s6 = SavedEvent.create(event_id: e1.id, user_id: bob.id)
s7 = SavedEvent.create(event_id: e29.id, user_id: bob.id)
