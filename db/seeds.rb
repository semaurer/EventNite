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

Ticket.destroy_all


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
spirits = Category.create(name: "spirits", parent_category_id: foodanddrink.id)
beer = Category.create(name: "Beer", parent_category_id: foodanddrink.id)

arts = Category.create(name: "Arts")
familyandeducation = Category.create(name: "Family & Education")
filmandmedia = Category.create(name: "Film & Media")
sportsandfitness = Category.create(name: "Sports & Fitness")
other = Category.create(name: "Other")
holiday = Category.create(name: "Holiday")
community = Category.create(name: "Community")
spirituality = Category.create(name: "Spirituality")
