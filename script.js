let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row")

container.append(row);


async function foo() {
    let p1 = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    console.log(p1)
    let data1 = await p1.json();
    console.log(data1)
    for(let i=0;i<data1.length;i++){
      row.innerHTML+=`<div class="col-sm-4 text-center">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <img class="card-img-top" src="${data1[i].thumb
        }" alt="Card image cap">
        <div class="card-header">${data1[i].title}</div>
        <div class="card-body">
          <p class="card-title">Rating: ${data1[i].dealRating}</p>
          <p class="card-title">Rated: ${data1[i].steamRatingText}</p>
          <p class="card-title">No. of Rating: ${data1[i].steamRatingCount
          }</p>
         
        </div>
      </div>
      </div>`
    }
    document.body.append(container)
  }

  foo()