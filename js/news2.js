const loadAllNews2 = async (category_id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`
  );
  const data = await response.json();
  const dataAll1 = data.data;
  return dataAll1;
};

const buttonField = document.getElementById("news-category");
buttonField.addEventListener("click", async (event) => {
  const allNews = await loadAllNews2();
console.log(allNews);
  const foundNews = allNews.filter(
    (news) => console.log(news.category_id)
news.category_id.includes(news.category_id)
  );
console.log(foundNews);
});

loadAllNews2();
