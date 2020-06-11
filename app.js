(() => {
  // เริมเขียนโค้ด

  const carBrands = [
    "Audi",
    "Audi Sport",
    "Austin",
    "Autobacs",
    "Autobianchi",
    "Axon",
    "Bizzarrini",
    "BMW",
    "BMW M",
    "Borgward",
    "Bowler",
    "Brabus",
    "Brammo",
    "Caterham",
    "Changan",
    "Changfeng",
    "Chery",
    "Diatto",
    "DINA",
    "DKW",
    "DMC",
    "Dodge",
    "Dodge Viper",
    "Dongfeng ",
    "Donkervoort ",
    "DS ",
    "Duesenberg ",
    "Elemental ",
    "Elfin ",
    "Elva ",
    "Englon ",
    "ERF ",
    "Eterniti ",
    "Fisker ",
    "Foden ",
    "Force Motors ",
    "Ford ",
    "Ford Mustang ",
    "GAZ ",
    "Geely ",
    "General Motors ",
    "Genesis ",
    "Geo ",
    "Gilbern ",
    "Gillet ",
    "Ginetta ",
    "GMC ",
    "Gonow ",
    "Great Wall ",
    "Holden ",
    "Hommell ",
    "Honda ",
    "Horch ",
    "HSV ",
    "Hudson ",
    "Hummer ",
    "Hupmobile ",
    "Hyundai ",
    "IKCO ",
    "Irizar ",
    "Isdera ",
    "Iso ",
    "Isuzu ",
    "Iveco ",
    "Jaguar ",
    "Jawa ",
    "JBA Motors ",
    "Jeep ",
    "Jensen ",
    "JMC ",
    "Kaiser ",
    "Kamaz ",
    "Karma ",
    "Keating ",
    "Kenworth ",
    "Kia ",
    "Koenigsegg ",
    "KTM ",
    "Lamborghini ",
    "Lancia ",
    "Land Rover ",
    "Landwind ",
    "Laraki ",
    "Lexus ",
    "Leyland ",
    "Lifan ",
    "Ligier ",
    "Lincoln ",
    "Lister ",
    "Mercedes - AMG ",
    "Mercedes - Benz ",
    "Mercury ",
    "Merkur ",
    "MEV ",
    "MG ",
    "Microcar ",
    "Mini ",
    "Mitsubishi ",
    "Mitsuoka ",
    "MK ",
    "Nissan GT - R ",
    "Nissan ",
    "Nissan Nismo ",
    "Noble ",
    "Panoz ",
    "Pegaso ",
    "Perodua ",
    "Peterbilt ",
    "Peugeot ",
    "PGO ",
    "Pierce - Arrow ",
    "Pininfarina ",
    "Plymouth ",
    "Polestar ",
    "Radical ",
    "RAM ",
    "Rambler ",
    "Ranz ",
    "Renault ",
    "Renault Samsung ",
    "Rezvani ",
    "Riley ",
    "Sterling ",
    "Studebaker ",
    "Stutz ",
    "Subaru ",
    "Suffolk ",
    "Suzuki ",
    "TechArt ",
    "Tesla ",
    "Toyota Crown ",
    "Toyota ",
    "Tramontana ",
    "Vector ",
    "Vencer ",
    "Venturi ",
    "Venucia ",
    "VLF ",
    "Volkswagen ",
    "Volvo ",
    "Wartburg ",
    "Western Star ",
    "Westfield ",
    "Wiesmann ",
    "Willys - Overland ",
    "Wuling ",
    "Zarooq Motors ",
    "Zastava ",
    "ZAZ ",
    "Zenos ",
    "Zenvo ",
    "Zotye",
  ];
  const searchElem = document.querySelector(".search");

  function selectCarBrand(event) {
    searchElem.value = event.target.innerText;
    clearResults();
  }

  function createUlElement() {
    const ulElem = document.createElement("ul");
    ulElem.classList.add("results");
    return ulElem;
  }

  function createLiElement(carBrand) {
    const liElem = document.createElement("li");
    liElem.innerText = carBrand;
    liElem.onclick = selectCarBrand;
    return liElem;
  }

  function clearResults() {
    const ulElem = document.querySelector(".results");
    if (ulElem) {
      document.body.removeChild(ulElem);
    }
  }

  function createResults(event) {
    clearResults();

    const inputText = event.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().startsWith(inputText)
    );

    const ulElem = createUlElement();
    matchedCarBrands.forEach((carBrand) => {
      const liElem = createLiElement(carBrand);
      ulElem.appendChild(liElem);
    });

    document.body.appendChild(ulElem);
  }

  function run() {
    searchElem.addEventListener("input", createResults);
    document.addEventListener("click", clearResults);
  }

  run();

})();
