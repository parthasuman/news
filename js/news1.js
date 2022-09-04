const loadNewss = async (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  displayNewss(data.data);
};

const displayNewss = (newss) => {
  const newssConatainer = document.getElementById("newss-container");

  newssConatainer.textContent = "";

  newss.forEach((news) => {
    const { image_url, details, category_id } = news;
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col");
    newsDiv.innerHTML = `
    <figure>
                <img src="${news.image_url}" alt="Movie" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${news.title}</h2>
                <p>${
                  news.details.length > 100
                    ? news.details.slice(0, 100) + "..."
                    : news.details
                }</p>
                <div class="grid grid-cols-4 gap-4">
                  <div><img src="${news.author.img}" alt="Movie" /></div>
                  <div>Author: ${news.author.name}</div>
                  <div>View: ${news.total_view}</div>
                  <div>Rating: ${news.rating.number}</div>
                  </div>
                <div class="card-actions justify-end">
                <label for="my-modal-3"
                 onclick= newLoadNews('${news.category_id}')
                 class="btn btn-primary modal-button">Show More</label>
                  
                </div>
              </div>
    `;
    newssConatainer.appendChild(newsDiv);
  });
};

loadNewss();

const newLoadNews = async (news_id) => {
  const url = `https://openapi.programming-hero.com/api/news/0${news_id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayModal(data.data);
};

const displayModal = (news2) => {
  console.log(news2);
  const modaltitle = document.getElementById("modal-body");
  modaltitle.innerText = news2.category_id;
};
// newLoadNews();
// const showModal = async (_id) => {
//   const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`;
//   const res = await fetch(url);
//   const data = await res.json();
//   displayNews(data);
// };
// showModal();

// const displayNews = (news5) => {
//   console.log(news5);
// };
// {
//   const modalBody = document.getElementById("modal-body");
//   modalBody.textContent = "";
//   modalBody.innerHTML = `

//               <p class="py-4">
//                 "${news.total_view}"
//               </p>
//   `;
// }

const showModal = (total_view) => {
  {
    const modalBody = document.getElementById("modal-body");
    modalBody.textContent = "";
    modalBody.innerHTML = `
    
                  <p class="py-4">
                    "${total_view}"
                  </p>
      `;
  }
};
