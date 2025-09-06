// news-pagination.js
// Render berita cards dan pagination

document.addEventListener("DOMContentLoaded", function () {
  const newsPerPage = 4;
  let currentPage = 1;
  const newsContainer = document.getElementById("news-cards");
  const paginationContainer = document.getElementById("news-pagination");

  function renderNews() {
    newsContainer.innerHTML = "";
    const start = (currentPage - 1) * newsPerPage;
    const end = start + newsPerPage;
    const pageNews = newsData.slice(start, end);
    pageNews.forEach((news) => {
      newsContainer.innerHTML += `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden w-[90vw] max-w-xs md:max-w-sm flex-shrink-0">
          <img src="${news.img}" alt="${news.title}" class="w-full h-48 object-cover" />
          <div class="p-4">
            <span class="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded mb-2">${news.label}</span>
            <h2 class="font-bold text-lg mb-2 line-clamp-2">${news.title}</h2>
            <div class="flex items-center text-gray-500 text-sm mb-2">
              <svg xmlns='http://www.w3.org/2000/svg' class='w-4 h-4 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/></svg>
              ${news.date}
            </div>
            <p class="text-sm text-gray-700 line-clamp-2 mb-2">${news.desc}</p>
          </div>
        </div>
      `;
    });
  }

  function renderPagination() {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(newsData.length / newsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      paginationContainer.innerHTML += `<button class="mx-1 px-3 py-1 rounded ${
        i === currentPage
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700"
      }" data-page="${i}">${i}</button>`;
    }
    // Event
    Array.from(paginationContainer.children).forEach((btn) => {
      btn.addEventListener("click", function () {
        currentPage = parseInt(this.dataset.page);
        renderNews();
        renderPagination();
      });
    });
  }

  if (newsContainer && paginationContainer) {
    renderNews();
    renderPagination();
  }
});
