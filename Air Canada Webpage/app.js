// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links"); //Within the click event listener, this line toggles the presence of the class "show-links" on the links element. If the class is already present, it is removed; if it's not present, it is added. This class is assumed to have associated CSS styles that control the visibility of the links.
});

function toggleDropdown(dropdownId) {
    
    var dropdown = document.getElementById(dropdownId);  //This code of line basically retrieves the dropdown element from the HTML document by identifying the correct id. The reference is stored in the variable  dropdown
   if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
}


function changeColors() {
  var elementsToChange = document.querySelectorAll('nav, body, .dropdown-content'); 
// Query selector working here as an array to change color scheme of different elements

// Use of random function
  elementsToChange.forEach(function(element) {
    // Generate a random color
    var newColor = getRandomColor();
    element.style.backgroundColor = newColor;
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*This code of line basically toggles the visibility of a dropdown by explicitly checking the current value of the display CSS property and then setting its value accordingly.
If (dropdown.style.display === "block"): This condition checks if the current value of the display CSS property for the dropdown is equal to the string "block". In CSS, the value 'block' typically represents a visible element.
If the condition is true (meaning the dropdown is currently visible), the code inside the block is executed then it sets the display property to "none", effectively hiding the dropdown.
If the condition is false (meaning the dropdown is currently not visible), the code inside the else block is executed then it sets the display property to "block", making the dropdown visible.
*/



const reviews = [
    {
      id: 1,
      name: 'Daniel Rodriguez',
      job: 'Data Scientist',
      img: 'pexels-sindre-fs-1040880.jpg',
      text: "I recently flew with Air Canada, and I'm delighted to share that it was a positive experience overall. From the hassle-free check-in process to the attentive cabin crew, everything contributed to a smooth and enjoyable journey. The in-flight entertainment and meal options were impressive, providing a pleasant distraction during the flight. The punctuality and cleanliness of the aircraft further added to the overall positive impression. In a nutshell, my experience with Air Canada was delightful, and I would consider flying with them again.",
    },
    {
      id: 2,
      name: 'Chiamaka Adegoke',
      job: 'YouTube Vlogger',
      img: 'pexels-spencer-selover-428333.jpg',
      text: 'My recent flight with Air Canada left me pleasantly surprised. The check-in process was quick, and the cabin crew was friendly and attentive. The in-flight amenities were above par, offering a good selection of entertainment options. What stood out the most was the airline\'s commitment to punctuality; the flight departed and arrived on time. Overall, a positive experience, and I would certainly consider Air Canada for future travels.',
    },
    {
      id: 3,
      name: 'Jaspreet Singh',
      job: 'Mechanical Engineer',
      img: 'Souiri.jpg',
      text: 'Recently, I had the opportunity to fly with Air Canada, and the experience left me thoroughly impressed. The check-in process was smooth, and the airport staff were friendly and efficient. The in-flight service was remarkable, and I appreciated the attention to detail in providing authentic Indian meal choices. It felt like a small piece of home at 30,000 feet. The cabin crew was not only professional but also approachable, making the journey more enjoyable.',
    },
    {
      id: 4,
      name: 'Sofia Perez',
      job: 'Spanish Teacher',
      img: 'Marcelo.jpg',
      text: 'Embarking on a journey with Air Canada to visit my family in Argentina was an experience that truly touched my heart. From the moment I stepped into the airport, the staff\'s warm welcome made me feel at ease, setting the tone for a memorable trip. the diverse entertainment options on board were a pleasant surprise, offering a mix of genres that kept me entertained throughout the long flight to Argentina. The inclusion of Latin music and movies created a sense of connection to my cultural roots, making the journey even more special. ',
    },
    {
        id: 5,
        name: 'Alex Kim',
        job: 'Photographer',
        img: 'Alex.jpg',
        text: 'Embarking on a photography project in Brazil led me to choose Air Canada for my journey, and the experience exceeded my expectations on multiple fronts. From a photographer\'s perspective, the journey was nothing short of inspiring. The check-in process was smooth, allowing me to focus on the creative aspects of my project. The airline\'s commitment to safety was evident, providing peace of mind as I prepared for my artistic endeavor. The cabin crew\'s professionalism and attentiveness further contributed to a positive atmosphere on board.'
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
// query to call the first person on the review
  const firstBtn = document.querySelector('.primero');
  // show first person
  firstBtn.addEventListener('click', function () {
    currentItem = 0;
    showPerson(currentItem);
  });

  // query to call the last person on the review 
  const lastBtn = document.querySelector('.ultimo');

  // show last person
  lastBtn.addEventListener('click', function () {
    currentItem = reviews.length - 1;
    showPerson(currentItem);
  });


  function like(postId) {
    var countElement = document.getElementById('count' + postId.slice(-1));
    var count = parseInt(countElement.textContent);
    count += 2;
    countElement.textContent = count;
    updateCountColor(countElement, count);
  }
  
  function dislike(postId) {
    var countElement = document.getElementById('count' + postId.slice(-1));
    var count = parseInt(countElement.textContent);
    count -= 1;
    countElement.textContent = count;
    updateCountColor(countElement, count);
  }
  
  function reset(postId) {
    var countElement = document.getElementById('count' + postId.slice(-1));
    countElement.textContent = 0;
    countElement.classList.remove('positive', 'negative');
  }
  
  function updateCountColor(element, count) {
    if (count > 0) {
      element.classList.remove('negative');
      element.classList.add('positive');
    } else if (count < 0) {
      element.classList.remove('positive');
      element.classList.add('negative');
    } else {
      element.classList.remove('positive', 'negative');
    }
  }