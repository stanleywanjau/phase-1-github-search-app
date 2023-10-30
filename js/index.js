document.addEventListener("DOMContentLoaded",()=>{
  let form =document.getElementById("github-form")
  let userdata = document.getElementById("search")
  let userlist = document.getElementById("user-list")
   form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const username =userdata.value;
    if(username){
       fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            "Accept": "application/vnd.github.v3+json"}})
   
        
      .then(res=>res.json())
      .then(data=>{
        userlist.innerHTML="";
        data.forEach(repo => {
          const repoItem =document.createElement('P');
          repoItem.textContent=repo.name;
          userlist.appendChild(repoItem)
          
        });
      })
    }
   })
   
}
)
