const url = 'https://randomuser.me/api?results=5';
let data;

fetch(url) //returning data from api call
.then(function(response){//fetched data is now a response
    console.log(response);
    return response.json();//format into json
})
.then(function(myJson){//json is passed
    // let pplarray = myJson.results
    // console.log(pplarray)
    // console.log(myJson);//log json
    // const email = myJson.results[0].email;
    // const p = document.createElement('p');
    // p.innerHTML = email;
    // document.body.appendChild(p);

    // const gender = myJson.results[0].gender
    // const pp = document.createElement('pp')
    // pp.innerHTML = gender
    // document.body.appendChild(pp)


    // const img = myJson.results[0].picture.large;
    // const imgElement = document.createElement('img');
    // imgElement.src = img;
    // document.body.appendChild(imgElement);

    let personArray = myJson.results;
    for(let i = 0; i < personArray.length; i++){
    
    let ppldiv = document.createElement('div');
    ppldiv.classList.add('peopleCard');
    let pplarray = myJson.results
    console.log(pplarray)
    console.log(myJson);//log json
    const email = myJson.results[i].email;
    const p = document.createElement('p');
    p.innerHTML = email;
    ppldiv.appendChild(p);

    const gender = myJson.results[i].gender
    const pp = document.createElement('pp')
    pp.innerHTML = gender
    ppldiv.appendChild(pp)


    const img = myJson.results[i].picture.large;
    const imgElement = document.createElement('img');
    imgElement.src = img;
    ppldiv.appendChild(imgElement);

    document.body.appendChild(ppldiv)
}
})



console.log(data);

// Ip number 1 7028829379 Ip number 2 1717212992 Ip number 3 8667797876 Ip number 4 1447546494 Ip number 5 1444096669 


