document.body.innerHTML=`<div class="top">Popular memes</div><div id="container"></div>`

function image(data){
data.map((memes)=>{
console.log(memes)
var store=document.querySelector('#container')
store.innerHTML+=`<div class=fullBody ><div class="edit">${memes.name}</div>
<div  class="edit"><img class="img"src="${memes.url}" alt="${memes.name}"></div>
<div  class="edit">Box count : ${memes.box_count}</div>
<div  class="edit"> Id : ${memes.id}</div>
</div>`
})
}



fetch('https://api.imgflip.com/get_memes')
	.then(response => response.json())
	.then(response => image(response.data.memes))
	.catch(err => console.error(err));