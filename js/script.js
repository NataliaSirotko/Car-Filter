window.addEventListener('DOMContentLoaded', function main() {
  let wrap = document.createElement('div');
      wrap.classList.add('wrap');
      document.body.appendChild(wrap);

  let but = document.querySelectorAll('input');

  let request = new XMLHttpRequest();

  request.open('GET', 'js/cars.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      let myObj = JSON.parse(request.response);

      for (key in myObj.cars) {
        let card = document.createElement('div');
        card.classList.add('card');
        wrap.appendChild(card);    
        card.innerHTML = 
            `<h3>${myObj.cars[key].name}</h3> 
            <div>${myObj.cars[key].description}</div> 
            <div>Price: ${myObj.cars[key].price}</div>
            <div>Category: ${myObj.cars[key].category}</div>
            <img src = ${myObj.cars[key].img}>`;
        
            if (myObj.cars[key].category == 'germany') {
              card.classList.add('germ');
            } else if (myObj.cars[key].category == 'italian') {
              card.classList.add('it');
            } else {
              card.classList.add('fr');
            }
      //console.log(JSON.stringify(myObj)); 
      }       

    } else if (request.readyState != 4 && request.status != 200)  {
        wrap.innerHTML = "Oups.. Error. Try else";
    }

      let cardBlock = document.querySelectorAll('.card');
     
      but[1].addEventListener('click', one);
      function one(event) {
        cardBlock.forEach(item => {         
          if (!item.classList.contains('germ') && event.target.checked) {
            item.style.display = "none";           
          } else {
            item.style.display = "block";
          }                 
        });    
      }
       
      but[2].addEventListener('click', two);
      function two (event) {      
        cardBlock.forEach(item => {
          if (!item.classList.contains('it') && event.target.checked) {        
            item.style.display = "none";
          } else {
            item.style.display = "block";
          }
        });

      }

      but[3].addEventListener('click', (event) => {      
        cardBlock.forEach(item => {
          if (!item.classList.contains('fr') && event.target.checked) {
            item.style.display = "none";
          } else {
            item.style.display = "block";
          }
        });
      });

      but[0].addEventListener('click', () => {      
        cardBlock.forEach(item => {
          item.style.display = "block";
        });
      });
    
  });
  
});

 // myObj.cars  = myObj.cars.filter(item => {
      //   return item.category == 'germany';
