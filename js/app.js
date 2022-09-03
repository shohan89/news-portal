//TODO: Load Category Data
const loadData = () => {
  fetch( 'https://openapi.programming-hero.com/api/news/categories' )
    .then(res => res.json())
    .then( data => displayCategories(data.data.news_category) );
    
}

//TODO: Display the loaded category to the category section
const displayCategories = categories => {
  
  // console.log(categories);
  
  const btnContainer = document.getElementById( 'btn-container' )
  categories.forEach(category => {
    const {category_name, category_id} = category;
    
    const btnDiv = document.createElement('div');
    btnDiv.classList.add( 'col' );
    btnDiv.innerHTML = `
      <button onclick="loadAllNews('${category_id}')" class="btn">${category_name}</button>
    `;
    btnContainer.appendChild(btnDiv);
  });
} 

//TODO: Load All News Using Category ID
const loadAllNews = (category_id) => {

  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayAllNews(data));

}

//TODO: Display all News
const displayAllNews = newsObj => {

  const allNews = newsObj.data;
  
  //TODO: Display How Many News are found
  const categoryCol = document.getElementById( 'number-of-category' );
  categoryCol.innerHTML = '';
  if ( allNews.length === 0 ) { 

    const messageDiv = document.createElement( 'div' );
    messageDiv.classList.add( 'alert' );
    messageDiv.classList.add( 'alert-danger' );
    messageDiv.innerText = `No News Found!`;
    categoryCol.appendChild(messageDiv);

   }
   else { 

    const messageDiv = document.createElement( 'div' );
    messageDiv.classList.add( 'alert' );
    messageDiv.classList.add( 'alert-success' );
    messageDiv.innerText = `${allNews.length} News Found!`;
    categoryCol.appendChild(messageDiv);

    }
  

  //TODO: Display News By Category
  const newsRow = document.getElementById( 'news-row' );
  newsRow.innerHTML = '';

  allNews.forEach(news => { 
    // console.log(news.category_id);
    //* News Obj Distructureing
  const {title, total_view, thumbnail_url, details} = news;
  const { name, published_date, img } = news.author;
  
  const newsCol = document.createElement( 'div' );
  
  newsCol.classList.add( 'col' );
  newsCol.innerHTML =  `
      <div class="card mb-3 rounded-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-md-4 p-3">
          <img src="${thumbnail_url}" class="img-fluid w-100 rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${ title ? title : 'N/A' }</h5>
            <p class="card-text">${details.slice(0, 500)}${' ...'}</p>
            <div class="container mt-5">
              <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-3 col-6">
                  <div class="author d-flex align-items-center">
                    <img class="img-fluid w-25 rounded" src="${img}" alt="">
                    <div class="author-info">
                      <h6>${name ? name : "N/A"}</h6>
                      <p>${published_date ? published_date : "N/A"}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-6">
                  <svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>${total_view ? total_view : "N/A"}</span>
                </div>
                <div class="col-md-3 col-6">
                  <svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  
                </div>
                <div class="col-md-3 col-6">
                  <button class="btn btn-outline-primary"><svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  newsRow.appendChild(newsCol);
   })

}





loadData();
