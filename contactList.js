const contacts = [
    { name: "Artan", phone: +123456789 },
    { name: "Arta", phone: +123453489 },
    { name: "Aurora", phone: +123566789 },
    { name: "Ana", phone: +123477789 },
    { name: "Bin", phone: +123116789 },
    { name: "Buna", phone: +134456789 },
    { name: "Blerta", phone: +123400789 },
    { name: "Cen", phone: +123676789 },
    { name: "Donat", phone: +120156789 },
    { name: "Dodona", phone: +120556789 },
    { name: "Don", phone: +125656789 },
    { name: "Ema", phone: +123356789 },
    { name: "Elena", phone: +123411789 },
    { name: "Ela", phone: +199956789 },
    { name: "Finesa", phone: +123457779 },
    { name: "Gezim", phone: +156756789 },
    { name: "Gona", phone: +123098789 },
  ];
  const contactsDiv = document.querySelector(".contacts");
  
  function sceleton(name, phone) {
    return `
    <div class="letter"></div>
      <div class="person">
          <h2 class="person-name">${name}</h2>
          <p class="person-phone">${phone}</p>
      </div>
      `;
  }
  
  function putContactsInDOM(contacts) {
    contacts.forEach((person) => {
      contactsDiv.innerHTML += sceleton(person.name, person.phone);
    });
  }
  
  putContactsInDOM(contacts);
  
  const search = document.querySelector("#search");
  
  function searchItems() {
    let text = search.value.toLowerCase();
    const temp = [];
    contacts.forEach((person) => {
      const personName = person.name.toLowerCase();
      const personNumber = person.phone.toString();
      if (personName.startsWith(text) || personNumber.startsWith(text)) {
        temp.push(person);
      }
      contactsDiv.innerHTML = "";
      putContactsInDOM(temp);
    });
    if (temp.length === 0) {
      contactsDiv.innerHTML = `<h2>No contact found   &#128064; &#128513;</h2>`;
    }
  }
  
  search.addEventListener("input", searchItems);
  
    const mode = document.querySelector(".mode img");
  
    let nightmode = true;
    mode.addEventListener("click", () => {
      nightmode = !nightmode;
      if(nightmode){
          mode.setAttribute("src", "images/night.png");
          document.body.style.background = "rgb(27, 24, 24)";
          contactsDiv.style.background = "rgb(27, 24, 24)";
          changeTextColor("white", "rgb(39, 38, 38)");
          search.style.border = "1px solid white";
          contactsDiv.style.background = "rgb(27, 24, 24)";
      } else {
          mode.setAttribute("src", "images/day.png");
          contactsDiv.style.background = "white !important";
          document.body.style.background = "#FFF";
          changeTextColor("black", "lightgrey");
          search.style.border = "1px solid black";
          contactsDiv.style.background = "white";
          }
    });
  
    function changeTextColor(text, background) {
      const p = document.querySelectorAll("p");
      const h = document.querySelectorAll("h2");
      const person = document.querySelectorAll(".person");
      p.forEach((p) => {
        p.style.color = text;
      });
      h.forEach((h) => {
        h.style.color = text;
      });
    
      person.forEach((person) => {
        person.style.background = background;
      });
    }
  
  
    