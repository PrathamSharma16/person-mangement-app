var btn=document.getElementById("profile").addEventListener("click",getData);
var div=document.getElementById("postsDiv");
var con=0;

function getData(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.onload=function(){

        if(this.status===200){
            let data = JSON.parse(this.responseText);
            
            for(let i= 0;i<10;i++){
                div.innerHTML+=`
                    <div class="col-3 text-white card bg-dark mx-auto border border-white" >
                    <div class="card-body" >
                        <p class="card-title">ID: ${data[con].id}</p>
                        <p class="card-title">Name: ${data[con].name}</p>
                        <p >Email: ${data[con].email}</p>
                        <p >Address: ${data[con].address.suite},${data[con].address.street},${data[con].address.city}.</p>
                        <p >Phone: ${data[con].phone}</p>
                        <p >Website: ${data[con].website}</p>
                    </div>
                </div>
            `
                con=con+1;
        }
    }
}
xhr.send();
}