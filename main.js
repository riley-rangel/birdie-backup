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
    imgUrl: 'images/newport-beach-gc.jpg'
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
    imgUrl: 'images/rancho-san-joaquin-gc.jpg'
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
    imgUrl: 'images/strawberry-farms-gc.jpg'
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
    imgUrl: 'images/oak-creek-gc.jpg'
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
    imgUrl: 'images/mile-square-gc.jpg'
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
    imgUrl: 'images/river-view-gc.jpg'
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
    imgUrl: 'images/tustin-ranch-gc.jpg'
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
    imgUrl: 'images/pelican-hill-gc.jpg'
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
    imgUrl: 'images/costa-mesa-gc.jpg'
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
    imgUrl: 'images/willowick-gc.jpg'
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
    imgUrl: 'images/dad-miller-gc.jpg'
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
    imgUrl: 'images/coyote-hills-gc.jpg'
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
    imgUrl: 'images/meadowlark-gc.jpg'
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
    imgUrl: 'images/tijeras-creek-gc.jpg'
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
    imgUrl: 'images/arroyo-trabuco-gc.jpg'
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
    imgUrl: 'images/anaheim-hills-gc.jpg'
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
    imgUrl: 'images/san-juan-hills-gc.jpg'
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
    imgUrl: 'images/monarch-beach-gc.jpg'
  }
]

var $footer = document.querySelector('.footer')
document.body.insertBefore(renderWelcome(), $footer)

var $main = document.querySelector('#main')
for (var i = 0; i < courses.length; i++) {
  $main.append(renderCourseCard(courses[i]))
}

$main.addEventListener('click', function () {
  // toggleHide($main)
  var $targetCard = event.target.closest('.course-card')
  if ($targetCard !== null) {
    var dataNum = $targetCard.getAttribute('data-number')
    console.log(dataNum)
  }
})

function renderWelcome() {
  var $div = document.createElement('div')
  var $p = document.createElement('p')

  $div.setAttribute('class', 'container')
  $div.setAttribute('id', 'main')
  $p.setAttribute('class', 'welcome-banner')
  $p.textContent = 'Find a course to play'
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

  $card.setAttribute('class', 'course-card z-depth-2')
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

  /*
  <div id="main" class="container">
    <p class="welcome-banner">Find a course to play</p>

    <div class="course-card z-depth-2">
      <img class="card-image" src="images/newport-beach-gc.jpg" alt="" />
      <div class="card-info z-depth-1">
        <p>Newport Beach Golf Course</p>
      </div>
    </div>
  </div>
  */
}

/*
function toggleHide(element) {
  element.classList.toggle('hidden')
}
*/
