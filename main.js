// Default Card Data
const defaultCardData = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayDefaultCardData(data.plants));
};
const displayDefaultCardData = (cards) => {
  const treeContainer = document.getElementById("tree-container");
  treeContainer.innerHTML = "";
  for (let card of cards) {
    const defaultDiv = document.createElement("div");
    defaultDiv.classList.add(
      "bg-white",
      "rounded-md",
      "p-5",
      "col-span-12",
      "md:col-span-6",
      "lg:col-span-4"
    );
    defaultDiv.innerHTML = `
    <img class="w-full rounded-md max-h-[400px]" src="${card.image}" alt="" srcset="" />
  <h4 onclick="loadPlantDetail(${card.id})" class="text-[#1F2937] text-2xl font-bold pt-3" >${card.name}</h4>
  <p class="text-[#1F2937] py-3">
    ${card.description}
  </p>
  <div class="flex justify-between items-center py-3">
    <button
      class="bg-[#DCFCE7] text-[#15803D] text-xl px-5 py-3 rounded-full font-semibold"
    >
      ${card.category}
    </button>
    <p class="font-bold text-xl">
      <i class="fa-solid fa-bangladeshi-taka-sign"></i>${card.price}
    </p>
  </div>
  <button
    class="bg-[#15803D] text-[#fff] text-2xl px-5 py-3 rounded-full font-semibold w-full add-cart"
  >
    
      Add to Cart
    
  </button>`;
    treeContainer.append(defaultDiv);
  }
};
defaultCardData();
// fetch The Category
const categoriesDataFunction = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => DisplayCategories(json.categories));
};
// Add Active Button Function
const removeActiveBtn = () => {
  const treeBtn = document.querySelectorAll(".tree-btn"); //get all button to remove active button
  treeBtn.forEach((btn) => btn.classList.remove("active")); //Remove All Active Button
};
// Fetch Card Data
const loadTreeData = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((tree) => {
      removeActiveBtn(); //Call the Remove Active button Function
      const treeBtn = document.getElementById(`tree-btn-${id}`);
      treeBtn.classList.add("active");
      displayTreeData(tree.plants);
    });
};
// Display Your Cart Data Dynamic

// Load The Plants Details
const loadPlantDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlantDetail(details.plants);
};

const displayPlantDetail = (plant) => {
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
  <h2 class="text-3xl text-[#000000] font-bold pb-5">${plant.name}</h2>
          <img class="w-full" src="${plant.image}" alt="" />
          <p class="text-[#1F2937] text-2xl py-5">Category:${plant.category}</p>
          <p class="text-[#1F2937] text-2xl py-5">
            Price:<i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
          </p>
          <p class="text-[#1F2937] text-2xl py-5">Description: ${plant.description}</p>
  
  `;
  document.getElementById("plant_model").showModal();
};
// Display Card Data
const displayTreeData = (trees) => {
  const treeContainer = document.getElementById("tree-container");
  treeContainer.innerHTML = "";
  for (let tree of trees) {
    const treeDiv = document.createElement("div");
    treeDiv.classList.add(
      "bg-white",
      "rounded-md",
      "p-5",
      "col-span-12",
      "md:col-span-6",
      "lg:col-span-4"
    );
    treeDiv.innerHTML = `
  <img class="w-full rounded-md max-h-[400px]" src="${tree.image}" alt="" srcset="" />
  <h4 class="text-[#1F2937] text-2xl font-bold pt-3" onclick="loadPlantDetail(${tree.id})">${tree.name}</h4>
  <p class="text-[#1F2937] py-3">
    ${tree.description}
  </p>
  <div class="flex justify-between items-center py-3">
    <button
      class="bg-[#DCFCE7] text-[#15803D] text-xl px-5 py-3 rounded-full font-semibold"
    >
      ${tree.category}
    </button>
    <p class="font-bold text-xl">
      <i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}
    </p>
  </div>
     <button
      class="bg-[#15803D] text-[#fff] text-2xl px-5 py-3 rounded-full font-semibold w-full add-cart"
    >
      Add to Cart
    </button>

    `;

    treeContainer.append(treeDiv);
  }
};
const DisplayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";
  //   Loop for Array
  for (let category of categories) {
    const btnDiv = document.createElement("div"); //Create Div
    btnDiv.innerHTML = `
    <button id ="tree-btn-${category.id}" onclick="loadTreeData(${category.id})" class="bg-[#DCFCE7] text-[#15803D] w-full text-xl px-5 py-3 mb-3 rounded-lg font-semibold tree-btn">
      ${category.category_name}
    </button>`;
    categoriesContainer.append(btnDiv);
  }
};
// Complete The category Data Function
categoriesDataFunction();
