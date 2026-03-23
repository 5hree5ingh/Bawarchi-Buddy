const items = [
  "turmeric", "chili-powder", "coriander", "cumin-seeds", "black-pepper",
  "cloves", "cardamom", "fenugreek", "mustard-seeds", "asafoetida",
  "garam-masala", "fennel-seeds", "bay-leaves", "cinnamon", "nutmeg", "mace", "white-pepper", "salt"
];

const checkUrl = async (item) => {
  try {
    const res = await fetch(`https://spoonacular.com/cdn/ingredients_100x100/${item}.jpg`);
    return { item, status: res.status };
  } catch (e) {
    return { item, status: 500 };
  }
};

async function run() {
  const results = await Promise.all(items.map(checkUrl));
  console.log(results);
}
run();
