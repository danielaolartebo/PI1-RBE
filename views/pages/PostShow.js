// Daniela Olarte Borja || David Montaño
let getPost = async (id) => {
    let found = false
    let post = null;
    for (let i = 0;  i < info.length && !found; i++) {
        if (info[i].id == id) {
             found = true;
             post = info[i];
        }
    }
    return post
 }
 
 let data = {
     "Post Id": "",
     "Post Title": "",
     "Post Content": "",
     "Post Author": ""
 }
 
 let actualPost = null;
 let PostShow = {
     render : async () => {
         let request = Utils.parseRequestURL()
         let post = await getPost(request.id)
         actualPost = post;
         
         return /*html*/`
             <section class="section">
                 <h1> Post Id : ${post.id}</h1>
                 <p> Post Title : ${post.title} </p>
                 <p> Post Content : ${post.content} </p>
                 <p> Post Author : ${post.name} </p>
                 <button class="button is-primary" id="edit">Edit</button>
             </section>
         `
     }
     , after_render: async () => {
         document.getElementById("edit").addEventListener("click", () => {
             if (login) {
                 data["Post Id"] = actualPost.id;
                 data["Post Title"] = actualPost.title;
                 data["Post Content"] = actualPost.content;
                 data["Post Author"] = actualPost.name;
                 location.href = "#/edit"
                 console.log(data);
             } else {
                 alert("Log in to continue");
             }
         })
     }
 }