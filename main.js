// Default Card Data
const defaultCardData = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayDefaultCardData(data.plants));
};
const displayDefaultCardData = (cards) => {
  console.log(cards);
  const treeContainer = document.getElementById("tree-container");
  treeContainer.innerHTML = "";
  for (let card of cards) {
    console.log(card);
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
  <h4 class="text-[#1F2937] text-2xl font-bold pt-3">${card.name}</h4>
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
    class="bg-[#15803D] text-[#fff] text-2xl px-5 py-3 rounded-full font-semibold w-full"
  >
    Donate Now
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
// Fetch Card Data
const loadTreeData = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((tree) => displayTreeData(tree.plants));
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
  <h4 class="text-[#1F2937] text-2xl font-bold pt-3">${tree.name}</h4>
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
    class="bg-[#15803D] text-[#fff] text-2xl px-5 py-3 rounded-full font-semibold w-full"
  >
    Donate Now
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
    <button onclick="loadTreeData(${category.id})" class="bg-[#DCFCE7] text-[#15803D] w-full text-xl px-5 py-3 mb-3 rounded-lg font-semibold">
      ${category.category_name}
    </button>`;
    categoriesContainer.append(btnDiv);
  }
};
// Complete The category Data Function
categoriesDataFunction();

// class="rounded-t-md w-full object-cover h-full"
