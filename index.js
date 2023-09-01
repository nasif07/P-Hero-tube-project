const handleCategory = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await res.json();
    // console.log(data.data);
    const tabContainer = document.getElementById("tab-container");
    data.data.forEach(category => {
        // console.log(category.category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoad('${category.category_id}')" class="tab bg-gray-300 rounded">${category.category}</a> 
        `;
        tabContainer.appendChild(div);
        console.log(category.category_id)
    });
}

const handleLoad = async (categoryID) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryID}`);
    const data = await res.json();
    console.log(data.data);
    // console.log(categoryID);
    
}

handleCategory()