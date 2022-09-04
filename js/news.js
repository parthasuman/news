const loadAllNews = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const dataAll = data.data.news_category;
  return dataAll;
};

const setAllMenu = async () => {
  // console.log(loadAllNews);
  // loadAllNews().then((data) => console.log(data));
  const dataAll = await loadAllNews();

  const menu = document.getElementById("news-category");

  for (const new1 of dataAll) {
    // console.log(new1.category_name);
    const li = document.createElement("li");
    li.innerHTML = `<button onclick="loadNewss(${new1.category_id})">${new1.category_name}</button>`;
    // `<a>${new1.category_name}</a>`;
    menu.appendChild(li);
  }
};

setAllMenu();

loadAllNews();
