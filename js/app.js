//TODO: Load Category Data
const loadData = () => {
  fetch( 'https://openapi.programming-hero.com/api/news/categories' )
    .then(res => res.json())
    .then( data => displayCategories(data.data) );
    
}

//TODO: Display the loaded category to the category section
const displayCategories = categories => {
  
  let catArray = categories.news_category //* This is showing a array of all categories.
  
  const btnContainer = document.getElementById( 'btn-container' )
  catArray.forEach(category => {
    const {category_name, category_id} = category;
    
    const btnDiv = document.createElement('div');
    btnDiv.classList.add( 'col' );
    btnDiv.innerHTML = `
      <button class="btn">${category_name}</button>
    `;
    btnContainer.appendChild(btnDiv);
  });
} 


loadData();
