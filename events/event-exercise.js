let btn=document.querySelector("#btn");
let mode='light';
let body = document.querySelector("body");
btn.addEventListener('mouseover',()=>{
  if(mode === 'light'){
  mode="dark";
  console.log(mode);
  body.style.backgroundColor="black";
  body.style.color="white";
  
}else{
  mode="light";
  console.log(mode);
  body.style.backgroundColor="white";
    body.style.color="black";
  
}
});
