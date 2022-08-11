document.querySelector('#search').addEventListener('click', () => {
    //request
    const xhr = new XMLHttpRequest()
    const value = document.querySelector('#query').value
    //link
    const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&q=${value}&maxResults=50`

    xhr.open('GET', url, true)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText)

            let list = document.getElementById('list');
            let output = ''
            for(key in response) {
                output += `
                
                <li>Name: ${response[key].name}</li>
                <li>Username: ${response[key].username}</li>
                <li>Email-id: ${response[key].email}</li>
                <li>Street: ${response[key].address.street}</li>
                <li>Suite: ${response[key].address.suite}</li>
                <li>City: ${response[key].address.city}</li>
                <li>Zipcode: ${response[key].address.zipcode}</li>
                <li>Latitude: ${response[key].address.geo.lat}</li>
                <li>Longitude: ${response[key].address.geo.lng}</li>
                <li>Phone-number: ${response[key].phone}</li>
                <li>Website: ${response[key].website}</li>
                <li>Company-Name: ${response[key].company.name}</li>
                <li>Company-CatchPhrase: ${response[key].company.catchPhrase}</li>
                <li>Company-BS: ${response[key].company.bs}</li>
                
            `
            }
            list.innerHTML=output;
        }
    }

    xhr.send()
})






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