const fetchData = async (config) =>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("data is not fetched");
    }
}

 /* 
 <div class="post">
        <h2 class="card-title">Card Title</h2>  
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis esse aliquid hic.</p>
 </div>
*/

const postsElement = document.querySelector(".posts");
async function loaddata(){
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts"); 
    posts.map((post)=>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postsElement.appendChild(postElement);
        postElement.innerHTML = 
        `   <h2>${post.id}</h2></div>
            <h2 class="card-title">${post.title}</h2>  
            <p class="card-text">${post.body}</p>
        `     
    });
}
loaddata();