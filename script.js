console.log("TEST!")

// Navbar active class

const currentPath = window.location.pathname.replace("/", "");
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
    link.classList.add('active');
  }
});


//  Weather API

const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403";
    fetch(apiURL)
        .then(response => {
            if(!response.ok) {
                throw new Error("Network is not responding");
            }
            return response.json();
        })
        .then(data => {
            var weatherInfo = data;
            weatherIcon.src = "https:" + weatherInfo.current.condition.icon;
            weatherTitle.innerHTML = `${weatherInfo.location.name}:`;
            temp.innerHTML = `Temp: ${weatherInfo.current.temp_c} °C`;
            wind.innerHTML = `Wind: ${weatherInfo.current.wind_kph} kph (${weatherInfo.current.wind_dir})`;
        })
        .catch(error => {
            console.error("Error:", error);
        })


//  Tabs for Spa page

const sections = [
    { id: "massages", label: "Massages" },
    { id: "facials", label: "Facials" },
    { id: "bodyTreatments", label: "Body Treatments" },
    { id: "manicuresPedicures", label: "Manicures & Pedicures" },
    { id: "enhancements", label: "Enhancements" },
    { id: "wellnessPrograms", label: "Wellness Programs" }
  ];
  
  const tabsContainer = document.getElementById("spaTabs");
  const tabButtons = [];
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const btn = document.createElement("button");
    btn.textContent = section.label;
  
    btn.onclick = function () {
      const allSections = document.querySelectorAll(".spaSection");
      for (let j = 0; j < allSections.length; j++) {
        allSections[j].classList.remove("active");
      }
  
      const targetSection = document.getElementById(section.id);
      if (targetSection) {
        targetSection.classList.add("active");
      }
  
      for (let j = 0; j < tabButtons.length; j++) {
        tabButtons[j].classList.remove("spaTabActive");
      }
  
      btn.classList.add("spaTabActive");
    };
  
    tabButtons.push(btn);
    tabsContainer.appendChild(btn);
  }
  
  const firstSection = document.getElementById(sections[0].id);
  if (firstSection) {
    firstSection.classList.add("active");
    if (tabButtons.length > 0) {
      tabButtons[0].classList.add("spaTabActive");
    }
  }
  

