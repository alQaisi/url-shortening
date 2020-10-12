const menu=document.getElementById("menu");
const menuIcon=document.getElementById("menuIcon");
const submit=document.getElementById("submit");
const form=document.getElementById("form");
const loader=document.getElementById('loader');
const expression = /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
const regex = new RegExp(expression);
let url="";
menuIcon.addEventListener("click",()=>{
    if(menuIcon.classList.contains("change")){
        menu.style.opacity="0";
        setTimeout(()=>menu.style.display="none",250);
        document.body.style.overflowY="scroll";
    }else{
        menu.style.display="block";
        setTimeout(()=>menu.style.opacity="1",150)
        document.body.style.overflowY="hidden";
    }
    menuIcon.classList.toggle("change");
});
window.addEventListener("resize",function(event){
    if(this.outerWidth>851 && menuIcon.classList.contains("change")){
        menu.style.opacity="0";
        setTimeout(()=>menu.style.display="none",250);
        document.body.style.overflowY="scroll";
        menuIcon.classList.toggle("change");
    }
});
const shortUrl=async(url)=>{
    return fetch('https://rel.ink/api/links/',{
        method:'POST',
        body:JSON.stringify({url}),
        headers: {
        "Content-type": "application/json"
        }
    }).then(res=>res.json())
    .catch(err=>alert("try again later"));
}
form.addEventListener("submit",async (event) => {
    loader.style.visibility="visible";
        event.preventDefault();
        console.log(event.srcElement[0].value);
         const {hashid}=await shortUrl(event.srcElement[0].value);
         const newUrl="https://rel.ink/"+hashid;
        loader.style.visibility="hidden";
        alert("the new url is: "+newUrl);
})