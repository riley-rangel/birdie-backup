var courses = [
  {
    id: 1,
    name: 'Newport Beach Golf Course',
    address: '3100 Irvine Ave',
    city: 'Newport Beach',
    state: 'CA',
    zip: '92660',
    openingYear: 1966,
    usgaRating: 57.2,
    parIndex: [3, 3, 3, 4, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3],
    imgUrl: 'images/newport-beach-gc.jpg',
    description: 'Newport Beach Golf Course is an 18 hole executive golf course conveniently located between the 55 and 73 freeways, behind John Wayne Airport. Our unique course offers players two distinctly different 9 holes. Players will enjoy our new, state of the art golf mats on our course and the practice range. Hit onto our lovely greens late into the night as the course is lighted for night play. Sharpen your short game skills on our practice chipping green that allows both rough and fringe chipping. Then use our 9 hole putting green to fine tune your favorite putter.'
  },
  {
    id: 2,
    name: 'Rancho San Joaquin Golf Course',
    address: 'One Ethel Coplen Way',
    city: 'Irvine',
    state: 'CA',
    zip: '92612',
    openingYear: 1964,
    usgaRating: 70.8,
    parIndex: [5, 3, 4, 4, 5, 4, 4, 3, 4, 4, 4, 5, 3, 4, 3, 4, 4, 5],
    imgUrl: 'images/rancho-san-joaquin-gc.jpg',
    description: 'Located in Irvine, California, Rancho San Joaquin was Irvine’s first public golf course. Set along a coastal inlet with three different lakes as a backdrop, it is home to some of South Orange County’s finest and most challenging greens. Designed by William Francis Bell, Rancho San Joaquin opened in 1964, and is only minutes away from John Wayne Airport—conveniently accessible to travelers and those on the go. The course is welcoming for new golfers while still offering a good challenge for more experienced players. With a newly remodeled clubhouse and friendly service, come out and see why Rancho San Joaquin was named “Orange County’s Best Place to Play” by OC Magazine in 2011.'
  },
  {
    id: 3,
    name: 'Strawberry Farms Golf Club',
    address: '11 Strawberry Farm Rd',
    city: 'Irvine',
    state: 'CA',
    zip: '92612',
    openingYear: 1997,
    usgaRating: 72.7,
    parIndex: [4, 4, 3, 4, 4, 5, 3, 4, 5, 4, 3, 5, 4, 4, 3, 5, 3, 4],
    imgUrl: 'images/strawberry-farms-gc.jpg',
    description: 'Strawberry Farms Golf Course combines the rural beauty and tranquility of the surrounding area with the challenge of true championship golf. As the premier golf course in Southern California, Strawberry Farms is the preferred course among corporate groups and golf enthusiasts alike.'
  },
  {
    id: 4,
    name: 'Oak Creek Golf Club',
    address: '1 Golf Club Dr',
    city: 'Irvine',
    state: 'CA',
    zip: '92618',
    openingYear: 1996,
    usgaRating: 72.5,
    parIndex: [4, 4, 3, 4, 4, 5, 3, 4, 4, 5, 3, 4, 4, 4, 4, 4, 3, 5],
    imgUrl: 'images/oak-creek-gc.jpg',
    description: 'In true Tom Fazio form, Oak Creek Golf Club beckons the competitive spirit of golf players at all levels. Each of the 18 holes throughout this Orange County golf course presents new challenges amid tapered fairways, scenic greens, beautiful lakes and bull-nose carved bunkers. With dense and dynamic flora, Oak Creek creates a sanctuary not only for your playing experience but for a variety of birds and other fauna as well.'
  },
  {
    id: 5,
    name: 'Mile Square Golf Course',
    address: '10401 Warner Ave',
    city: 'Fountain Valley',
    state: 'CA',
    zip: '92708',
    openingYear: 1969,
    usgaRating: 71.5,
    parIndex: [4, 4, 4, 5, 3, 4, 4, 3, 5, 5, 4, 4, 3, 4, 3, 4, 4, 5],
    imgUrl: 'images/mile-square-gc.jpg',
    description: 'Mile Square Golf Course has been one of Orange Counties premier public golf courses since the first course opened in 1969. With a reputation of having the finest putting greens in Southern California and two courses designed by famed golf course architect, David Rainville, Mile Square Golf Course is a "must play" for anyone in the area. Today, Mile Square Golf Course features two challenging 18 hole courses and a beautiful clubhouse with full service banquet facilities. Conveniently located in Mile Square Park, just off the 405 freeway in Fountain Valley, Mile Square Golf Course provides the ideal location for any special event you desire. Come to Mile Square Golf Course and see why those who play here consider our courses as the best value in Orange County. Welcome, our goal is to exceed your expectations.'
  },
  {
    id: 6,
    name: 'River View Golf Course',
    address: '1800 W Santa Clara Ave',
    city: 'Santa Ana',
    state: 'CA',
    zip: '92706',
    openingYear: 1970,
    usgaRating: 68.4,
    parIndex: [4, 3, 3, 4, 5, 3, 4, 5, 3, 3, 4, 4, 5, 3, 5, 4, 5, 3],
    imgUrl: 'images/river-view-gc.jpg',
    description: 'Mere minutes away from Disneyland, Anaheim, Long Beach, Tustin and Irvine, River View Golf Course is an 18-hole course featuring 6,190 yards of golf from the longest tees for a par of 70. River View is a pleasure for golfers of any skill level to play. The course will challenge you with its river, while providing a relaxing, picturesque backdrop. All in all, our goal is to provide you with a quality experience that includes exceptional service and a comfortable atmosphere.'
  },
  {
    id: 7,
    name: 'Tustin Ranch Golf Club',
    address: '12442 Tustin Ranch',
    city: 'Tustin',
    state: 'CA',
    zip: '92782',
    openingYear: 1989,
    usgaRating: 73.5,
    parIndex: [4, 5, 3, 4, 4, 3, 4, 4, 5, 5, 3, 4, 4, 4, 5, 4, 3, 4],
    imgUrl: 'images/tustin-ranch-gc.jpg',
    description: 'Tustin Ranch Golf Club is a first class picturesque facility secluded within the community of Tustin, CA. It features a signature Ted Robinson designed golf course that the readers of the Orange County Register have consistently voted the best "Orange County Golf Course and Driving Range" for multiple years including 2015, 2012, 2010, 2009 and 2007. Additionally, California Golf Course Owner\'s Association voted the Tustin Golf Club the "CGCOA Course of the Year" for 2008. Golf Digest Magazine ranked the challenging Tustin Ranch Golf Club four-stars several years in a row.'
  },
  {
    id: 8,
    name: 'Pelican Hill Golf Club',
    address: '22800 S Pelican Hill Rd',
    city: 'Newport Beach',
    state: 'CA',
    zip: '92657',
    openingYear: 1991,
    usgaRating: 71.9,
    parIndex: [4, 4, 4, 3, 4, 4, 3, 5, 4, 4, 4, 3, 3, 5, 4, 3, 5, 4],
    imgUrl: 'images/pelican-hill-gc.jpg',
    description: 'When jaw-dropping scenery is par for the course, you’ll need to remind yourself to keep your eye on the ball. But once you find your focus, players of every skill level are rewarded with 36 holes that test your mettle, quicken your pulse and stir your soul. Pelican Hill Golf Club is more than just a round of golf. It’s a two-course feast to make you feel as if golf is your sole reason for being. And from the moment you tee off, it absolutely is.'
  },
  {
    id: 9,
    name: 'Costa Mesa Golf Course',
    address: '1701 Golf Course Dr',
    city: 'Costa Mesa',
    state: 'CA',
    zip: '92626',
    openingYear: 1967,
    usgaRating: 70.5,
    parIndex: [5, 5, 4, 3, 4, 5, 3, 4, 4, 4, 3, 4, 4, 5, 3, 4, 3, 5],
    imgUrl: 'images/costa-mesa-gc.jpg',
    description: 'Cost Mesa Country Club is the premier public golf course in Orange County. Situated in the heart of the Orange County, Costa Mesa Country Club provides the best courses and facilities to locals and travellers alike. Los Lagos, our longest, traverses from end of the Country Club to the other. Several challenging, but fair holes await our patrons, where their skill and daring are put to the test. Los Lagos offers gentle rolling fairways and generous greens that both entice and dissuade our golfers, thus increasing enjoyment.'
  },
  {
    id: 10,
    name: 'Willowick Golf Course',
    address: '3017 W 5th St',
    city: 'Santa Ana',
    state: 'CA',
    zip: '92703',
    openingYear: 1929,
    usgaRating: 67.7,
    parIndex: [4, 3, 5, 3, 4, 5, 3, 4, 4, 5, 5, 3, 4, 4, 4, 4, 3, 4],
    imgUrl: 'images/willowick-gc.jpg',
    description: 'Located in the heart of Santa Ana, 5 miles west of Disneyland, Willowick Golf Course is the oldest 18-hole public golf course in Orange County. Our course offers everything you would expect from a established, successful course: two sets of tees, grass driving range, three practice putting greens, a pro shop chock-full of products, a PGA Class A professional on staff, and affordable green fees.'
  },
  {
    id: 11,
    name: 'Dad Miller Golf Course',
    address: '430 N Gilbert St',
    city: 'Anaheim',
    state: 'CA',
    zip: '92801',
    openingYear: 1961,
    usgaRating: 67.8,
    parIndex: [4, 4, 4, 4, 4, 4, 3, 5, 3, 5, 3, 4, 3, 4, 5, 3, 4, 5],
    imgUrl: 'images/dad-miller-gc.jpg',
    description: 'The Dad Miller Golf Course offers challenging golf courses and packages in a beautiful natural setting near Anaheim, California. Equally appealing, our villa and golf vacations provide celebrated traditions flavored with the spirit of world-class competition and hospitality. If you have anever played here you are missing a great round of golf.'
  },
  {
    id: 12,
    name: 'Coyote Hills Golf Course',
    address: '1440 E Bastanchury Rd',
    city: 'Fullerton',
    state: 'CA',
    zip: '92835',
    openingYear: 1996,
    usgaRating: 71.1,
    parIndex: [4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 5, 4, 4, 3, 5, 4, 3, 4],
    imgUrl: 'images/coyote-hills-gc.jpg',
    description: 'Coyote Hills Golf Course is an award-winning 18-hole, par 70 golf course that features five distinct tees and panoramic views of Los Angeles and Orange County. Enjoy an outstanding golf experience at one of Southern California’s best golf courses.'
  },
  {
    id: 13,
    name: 'Meadowlark Golf Course',
    address: '16782 Graham St',
    city: 'Huntington Beach',
    state: 'CA',
    zip: '92649',
    openingYear: 1922,
    usgaRating: 72.7,
    parIndex: [4, 4, 4, 3, 4, 5, 3, 4, 4, 4, 4, 4, 3, 4, 4, 3, 4, 5],
    imgUrl: 'images/meadowlark-gc.jpg',
    description: 'Situated just miles from the Pacific Ocean in beautiful Huntington Beach, California, Meadowlark Golf Club\'s spectacular golf course, upscale amenities and superlative guest service have earned it recognition among Southern California\'s best daily fee golf properties.'
  },
  {
    id: 14,
    name: 'Tijeras Creek Golf Club',
    address: '29082 Tijeras Creek',
    city: 'Rancho Santa Margarita',
    state: 'CA',
    zip: '92688',
    openingYear: 1972,
    usgaRating: 73.8,
    parIndex: [5, 4, 4, 4, 3, 4, 3, 5, 4, 4, 5, 4, 5, 3, 4, 3, 4, 4],
    imgUrl: 'images/tijeras-creek-gc.jpg',
    description: 'A cornerstone of beautiful Rancho Santa Margarita, the award-winning Tijeras Creek Golf Club is what Orange County golf should be: A beautiful escape from the hustle and bustle of everyday life. Located a short drive from John Wayne Airport, Tijeras Creek is open to the public, and considered one of the finest daily-fee courses in Southern California.'
  },
  {
    id: 15,
    name: 'Arroyo Trabuco Golf Club',
    address: '26772 Avery Pkwy',
    city: 'Mission Viejo',
    state: 'CA',
    zip: '92692',
    openingYear: 2004,
    usgaRating: 73.7,
    parIndex: [4, 4, 5, 3, 4, 4, 5, 3, 4, 4, 3, 4, 3, 5, 4, 4, 4, 5],
    imgUrl: 'images/arroyo-trabuco-gc.jpg',
    description: 'The Arroyo Trabuco Golf Club is a public-access daily fee facility featuring an 18-hole championship-length golf course designed by PGA Tour professional Tom Lehman and well-respected local golf course architect, Casey O’Callaghan. Set amidst Trabuco Creek and The Reserve at Rancho Mission Viejo, the 240-acre Arroyo Trabuco Golf Club provides an unforgettable golf experience on par with South Orange County\'s finest high-end clubs. Conveniently located off Avery Parkway, Arroyo Trabuco offers unparalleled value in a pristine, park-like setting.'
  },
  {
    id: 16,
    name: 'Anaheim Hills Golf Course',
    address: '6501 East Nohl Ranch Road',
    city: 'Anaheim',
    state: 'CA',
    zip: '92807',
    openingYear: 1972,
    usgaRating: 69.6,
    parIndex: [5, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 5, 3, 4, 4, 4, 3, 5],
    imgUrl: 'images/anaheim-hills-gc.jpg',
    description: 'The tree-lined fairways of Anaheim Hills Golf Course are a local favorite and frequent escape for some of Orange County’s most dedicated and accomplished golfers. Located just minutes from Disneyland, we welcome visitors and locals alike to enjoy the incredible value of daily tee times , pristine golf course conditions and professional golf instruction– all nestled right in the heart of Orange County, near Irvine, Santa Ana, Fullerton, Yorba Linda, and Los Angeles.'
  },
  {
    id: 17,
    name: 'San Juan Hills Golf Club',
    address: '32120 San Juan Creek Rd',
    city: 'San Juan Capistrano',
    state: 'CA',
    zip: '92675',
    openingYear: 1967,
    usgaRating: 70.1,
    parIndex: [4, 4, 4, 4, 4, 5, 3, 4, 3, 4, 4, 5, 4, 3, 4, 3, 5, 3],
    imgUrl: 'images/san-juan-hills-gc.jpg',
    description: 'The golf course at San Juan Hills Golf Club is truly an oasis for both the serious golfer as well as the vacationing one. Nestled in the rolling hills of San Juan Capistrano, San Juan Hills Golf Club is a Par 71 Championship golf course. Recent improvements in our grounds have resulted in a course that offers the best greens and fairways in south Orange County. Open to the public, you’ll find a game here every day of the week.'
  },
  {
    id: 18,
    name: 'Monarch Beach Golf Links',
    address: '50 Monarch Beach Resort N',
    city: 'Dana Point',
    state: 'CA',
    zip: '92629',
    openingYear: 1983,
    usgaRating: 72.5,
    parIndex: [4, 4, 4, 3, 3, 4, 5, 4, 5, 4, 4, 5, 3, 4, 3, 4, 3, 4],
    imgUrl: 'images/monarch-beach-gc.jpg',
    description: 'Few California golf resort experiences can match the blend of stunning natural beauty and the variety of challenges presented at Monarch Beach Golf Links. Here, along the dramatic bluffs overlooking the Pacific Ocean in Southern California, master golf architect Robert Trent Jones, Jr., has fashioned a one-of-a-kind golf course design – challenging and fair, with views of surf breaks on every hole.'
  }
]

var $footer = document.querySelector('.footer')
document.body.insertBefore(renderWelcome('Find a course to play'), $footer)

var $main = document.querySelector('#main')
for (var i = 0; i < courses.length; i++) {
  $main.append(renderCourseCard(courses[i]))
}

$main.addEventListener('click', function () {
  var $targetCard = event.target.closest('.course-card')
  if ($targetCard !== null) {
    toggleHide($main)
    var dataNum = $targetCard.getAttribute('data-number')
    document.body.insertBefore(renderDetails(courses[dataNum - 1]), $footer)
    document.body.appendChild(renderHome(dataNum))
    var $homeButton = document.querySelector('.home-button')
    $homeButton.addEventListener('click', function () {
      var $dataNum = event.target.getAttribute('data-number')
      resetMain($dataNum)
      toggleHide($main)
      $homeButton.remove()
    })
  }
})

function renderWelcome(string) {
  var $div = document.createElement('div')
  var $p = document.createElement('p')

  $div.setAttribute('class', 'container')
  $div.setAttribute('id', 'main')
  $p.setAttribute('class', 'welcome-banner')
  $p.textContent = string
  $div.appendChild($p)

  return $div
}

function par(course) {
  var selection = course.parIndex
  var parTotal = 0

  for (var i = 0; i < selection.length; i++) {
    parTotal += selection[i]
  }
  return parTotal
}

function renderCourseCard(courseData) {
  var $card = document.createElement('div')
  var $img = document.createElement('img')
  var $info = document.createElement('div')
  var $infoText = document.createElement('p')
  var parSum = par(courseData)

  $card.setAttribute('class', 'course-card z-depth-2 hover')
  $card.setAttribute('data-number', courseData.id)
  $img.setAttribute('class', 'card-image')
  $img.setAttribute('src', courseData.imgUrl)
  $img.setAttribute('alt', '')
  $info.setAttribute('class', 'card-info z-depth-1')
  $infoText.textContent = courseData.name + ' / ' + parSum

  $card.appendChild($img)
  $card.appendChild($info)
  $info.appendChild($infoText)

  return $card
}

function toggleHide(element) {
  element.classList.toggle('hidden')
}

function resetMain(idNum) {
  var $pick = document.querySelector('#main-' + idNum)
  $pick.remove()
}

function renderDetails(courseData) {
  var $div = document.createElement('div')
  var $welcome = document.createElement('p')
  var $imgCard = document.createElement('div')
  var $img = document.createElement('img')
  var $addressCard = document.createElement('div')
  var $name = document.createElement('h4')
  var $address = document.createElement('h5')
  var $highlightCard = document.createElement('div')
  var $highlightBanner = document.createElement('div')
  var $highlightTitle1 = document.createElement('p')
  var $highlightTitle2 = document.createElement('p')
  var $highlightTitle3 = document.createElement('p')
  var $highlight1 = document.createElement('div')
  var $highlight2 = document.createElement('div')
  var $highlight3 = document.createElement('div')
  var $descripCard = document.createElement('div')
  var $about = document.createElement('h5')
  var $descripText = document.createElement('p')

  $div.setAttribute('id', 'main-' + courseData.id)
  $div.setAttribute('class', 'container')
  $welcome.setAttribute('class', 'welcome-banner')
  $welcome.textContent = 'Course details'
  $imgCard.setAttribute('class', 'course-card z-depth-2')
  $img.setAttribute('class', 'card-image')
  $img.setAttribute('src', courseData.imgUrl)
  $img.setAttribute('alt', '')
  $img.setAttribute('style', 'cursor: default')
  $addressCard.setAttribute('class', 'address-card z-depth-2')
  $name.setAttribute('class', 'center-text')
  $name.textContent = courseData.name
  $address.setAttribute('class', 'center-text')
  $address.textContent = courseData.address + ' ' + courseData.city + ', ' +
    courseData.state + ' ' + courseData.zip
  $highlightCard.setAttribute('class', 'detail-card z-depth-2')
  $highlightBanner.setAttribute('class', 'highlight-banner')
  $highlightTitle1.setAttribute('class', 'highlight-title')
  $highlightTitle1.textContent = 'Course Par'
  $highlightTitle2.setAttribute('class', 'highlight-title')
  $highlightTitle2.textContent = 'Established'
  $highlightTitle3.setAttribute('class', 'highlight-title')
  $highlightTitle3.textContent = 'Course Rating'
  $highlight1.setAttribute('class', 'highlight z-depth-4')
  $highlight1.textContent = par(courseData)
  $highlight2.setAttribute('class', 'highlight z-depth-4')
  $highlight2.textContent = courseData.openingYear
  $highlight3.setAttribute('class', 'highlight z-depth-4')
  $highlight3.textContent = courseData.usgaRating
  $descripCard.setAttribute('class', 'detail-card z-depth-2')
  $about.textContent = 'About ' + courseData.name
  $descripText.textContent = courseData.description

  $div.appendChild($welcome)
  $div.appendChild($imgCard)
  $imgCard.appendChild($img)
  $div.appendChild($addressCard)
  $addressCard.appendChild($name)
  $addressCard.appendChild($address)
  $div.appendChild($highlightCard)
  $highlightCard.appendChild($highlightBanner)
  $highlightBanner.appendChild($highlightTitle1)
  $highlightBanner.appendChild($highlightTitle2)
  $highlightBanner.appendChild($highlightTitle3)
  $highlightCard.appendChild($highlight1)
  $highlightCard.appendChild($highlight2)
  $highlightCard.appendChild($highlight3)
  $div.appendChild($descripCard)
  $descripCard.appendChild($about)
  $descripCard.appendChild($descripText)

  return $div
}

function renderHome(idNum) {
  var $home = document.createElement('div')
  $home.setAttribute('class', 'home-button z-depth-2')
  $home.setAttribute('data-number', idNum)
  $home.textContent = 'Home'
  return $home
}
