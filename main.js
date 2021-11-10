const container = document.getElementById('cardContainer');
const btn = document.getElementById("buttonProfileCards");
container.style.display = "none";
btn.onclick = function () {
  if (container.style.display !== "none") {
    container.style.display = "none";
    btn.innerHTML="show Profile Cards"
  } else {
    container.style.display = "block";
    btn.innerHTML="hide Profile Cards"

  }
};


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    
    data.forEach((obj) => {

      // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

   // Construct card content
   const content = `
   
  <div class="card col-lg-4" style="width: 18rem">
  <img
  src="https://media-exp1.licdn.com/dms/image/C4E03AQFZdBuAYWxqYg/profile-displayphoto-shrink_200_200/0/1630498140399?e=1642032000&v=beta&t=KI1JkndriWcorzRT1HACu_94j4j1ngelEzAsDzUxxsE"
  class="card-img-top"
  alt=""
/> 
<div class="card-body">
<h5 class="card-title" id="name">${obj.name}</h5>
<p class="card-email" id="email">mail: ${obj.email}</p>
---
<p class="card-address" id="address">${obj.address.street} ${obj.address.suite}</p>
<p class="card-city" id="city">${obj.address.city}</p>
---
<p class="card-phone" id="phone">tel: ${obj.phone}</p>
<p class="card-companyName" id="companyName">${obj.company.name}</p>
<p class="card-companyBS" id="companyType">${obj.company.bs}</p>
     
 </div>
 `;
 container.innerHTML += content;
    });
  });