//........................... API CONNECTION.............................
async function nGet() {
    var response = await fetch("https://forkify-api.herokuapp.com/api/search?&q=pizza");
    var data = await response.json();

    document.querySelector(".recipe-1 img").src = data.recipes[0].image_url;
    document.querySelector(".recipe-1 h5").innerHTML = data.recipes[0].title;
    document.querySelector(".recipe-1 p").innerHTML = data.recipes[0].title;
    document.querySelector(".recipe-1 a").href = data.recipes[0].source_url;

    document.querySelector(".recipe-2 img").src = data.recipes[1].image_url;
    document.querySelector(".recipe-2 h5").innerHTML = data.recipes[1].title;
    document.querySelector(".recipe-2 p").innerHTML = data.recipes[1].title;
    document.querySelector(".recipe-2 a").href = data.recipes[1].source_url;

    document.querySelector(".recipe-3 img").src = data.recipes[2].image_url;
    document.querySelector(".recipe-3 h5").innerHTML = data.recipes[2].title;
    document.querySelector(".recipe-3 p").innerHTML = data.recipes[2].title;
    document.querySelector(".recipe-3 a").href = data.recipes[2].source_url;

    document.querySelector(".recipe-4 img").src = data.recipes[3].image_url;
    document.querySelector(".recipe-4 h5").innerHTML = data.recipes[3].title;
    document.querySelector(".recipe-4 p").innerHTML = data.recipes[3].title;
    document.querySelector(".recipe-4 a").href = data.recipes[3].source_url;

    document.querySelector(".recipe-5 img").src = data.recipes[4].image_url;
    document.querySelector(".recipe-5 h5").innerHTML = data.recipes[4].title;
    document.querySelector(".recipe-5 p").innerHTML = data.recipes[4].title;
    document.querySelector(".recipe-5 a").href = data.recipes[4].source_url;

    document.querySelector(".recipe-6 img").src = data.recipes[5].image_url;
    document.querySelector(".recipe-6 h5").innerHTML = data.recipes[5].title;
    document.querySelector(".recipe-6 p").innerHTML = data.recipes[5].title;
    document.querySelector(".recipe-6 a").href = data.recipes[5].source_url;

    document.querySelector(".recipe-7 img").src = data.recipes[6].image_url;
    document.querySelector(".recipe-7 h5").innerHTML = data.recipes[6].title;
    document.querySelector(".recipe-7 p").innerHTML = data.recipes[6].title;
    document.querySelector(".recipe-7 a").href = data.recipes[6].source_url;

    document.querySelector(".recipe-8 img").src = data.recipes[7].image_url;
    document.querySelector(".recipe-8 h5").innerHTML = data.recipes[7].title;
    document.querySelector(".recipe-8 p").innerHTML = data.recipes[7].title;
    document.querySelector(".recipe-8 a").href = data.recipes[7].source_url;

    document.querySelector(".recipe-9 img").src = data.recipes[8].image_url;
    document.querySelector(".recipe-9 h5").innerHTML = data.recipes[8].title;
    document.querySelector(".recipe-9 p").innerHTML = data.recipes[8].title;
    document.querySelector(".recipe-9 a").href = data.recipes[8].source_url;

    document.querySelector(".recipe-10 img").src = data.recipes[9].image_url;
    document.querySelector(".recipe-10 h5").innerHTML = data.recipes[9].title;
    document.querySelector(".recipe-10 p").innerHTML = data.recipes[9].title;
    document.querySelector(".recipe-10 a").href = data.recipes[9].source_url;

    document.querySelector(".recipe-11 img").src = data.recipes[10].image_url;
    document.querySelector(".recipe-11 h5").innerHTML = data.recipes[10].title;
    document.querySelector(".recipe-11 p").innerHTML = data.recipes[10].title;
    document.querySelector(".recipe-11 a").href = data.recipes[10].source_url;

    document.querySelector(".recipe-12 img").src = data.recipes[11].image_url;
    document.querySelector(".recipe-12 h5").innerHTML = data.recipes[11].title;
    document.querySelector(".recipe-12 p").innerHTML = data.recipes[11].title;
    document.querySelector(".recipe-12 a").href = data.recipes[11].source_url;

    document.querySelector(".recipe-13 img").src = data.recipes[12].image_url;
    document.querySelector(".recipe-13 h5").innerHTML = data.recipes[12].title;
    document.querySelector(".recipe-13 p").innerHTML = data.recipes[12].title;
    document.querySelector(".recipe-13 a").href = data.recipes[12].source_url;

    document.querySelector(".recipe-14 img").src = data.recipes[13].image_url;
    document.querySelector(".recipe-14 h5").innerHTML = data.recipes[13].title;
    document.querySelector(".recipe-14 p").innerHTML = data.recipes[13].title;
    document.querySelector(".recipe-14 a").href = data.recipes[13].source_url;

    document.querySelector(".recipe-15 img").src = data.recipes[14].image_url;
    document.querySelector(".recipe-15 h5").innerHTML = data.recipes[14].title;
    document.querySelector(".recipe-15 p").innerHTML = data.recipes[14].title;
    document.querySelector(".recipe-15 a").href = data.recipes[14].source_url;

    document.querySelector(".recipe-16 img").src = data.recipes[15].image_url;
    document.querySelector(".recipe-16 h5").innerHTML = data.recipes[15].title;
    document.querySelector(".recipe-16 p").innerHTML = data.recipes[15].title;
    document.querySelector(".recipe-16 a").href = data.recipes[15].source_url;

    document.querySelector(".recipe-17 img").src = data.recipes[16].image_url;
    document.querySelector(".recipe-17 h5").innerHTML = data.recipes[16].title;
    document.querySelector(".recipe-17 p").innerHTML = data.recipes[16].title;
    document.querySelector(".recipe-17 a").href = data.recipes[16].source_url;

    document.querySelector(".recipe-18 img").src = data.recipes[17].image_url;
    document.querySelector(".recipe-18 h5").innerHTML = data.recipes[17].title;
    document.querySelector(".recipe-18 p").innerHTML = data.recipes[17].title;
    document.querySelector(".recipe-18 a").href = data.recipes[17].source_url;

    document.querySelector(".recipe-19 img").src = data.recipes[18].image_url;
    document.querySelector(".recipe-19 h5").innerHTML = data.recipes[18].title;
    document.querySelector(".recipe-19 p").innerHTML = data.recipes[18].title;
    document.querySelector(".recipe-19 a").href = data.recipes[18].source_url;

    document.querySelector(".recipe-20 img").src = data.recipes[19].image_url;
    document.querySelector(".recipe-20 h5").innerHTML = data.recipes[19].title;
    document.querySelector(".recipe-20 p").innerHTML = data.recipes[19].title;
    document.querySelector(".recipe-20 a").href = data.recipes[19].source_url;

    document.querySelector(".recipe-21 img").src = data.recipes[20].image_url;
    document.querySelector(".recipe-21 h5").innerHTML = data.recipes[20].title;
    document.querySelector(".recipe-21 p").innerHTML = data.recipes[20].title;
    document.querySelector(".recipe-21 a").href = data.recipes[20].source_url;

    document.querySelector(".recipe-22 img").src = data.recipes[21].image_url;
    document.querySelector(".recipe-22 h5").innerHTML = data.recipes[21].title;
    document.querySelector(".recipe-22 p").innerHTML = data.recipes[21].title;
    document.querySelector(".recipe-22 a").href = data.recipes[21].source_url;

    document.querySelector(".recipe-23 img").src = data.recipes[22].image_url;
    document.querySelector(".recipe-23 h5").innerHTML = data.recipes[22].title;
    document.querySelector(".recipe-23 p").innerHTML = data.recipes[22].title;
    document.querySelector(".recipe-23 a").href = data.recipes[22].source_url;

    document.querySelector(".recipe-24 img").src = data.recipes[23].image_url;
    document.querySelector(".recipe-24 h5").innerHTML = data.recipes[23].title;
    document.querySelector(".recipe-24 p").innerHTML = data.recipes[23].title;
    document.querySelector(".recipe-24 a").href = data.recipes[23].source_url;

    document.querySelector(".recipe-25 img").src = data.recipes[24].image_url;
    document.querySelector(".recipe-25 h5").innerHTML = data.recipes[24].title;
    document.querySelector(".recipe-25 p").innerHTML = data.recipes[24].title;
    document.querySelector(".recipe-25 a").href = data.recipes[24].source_url;

    document.querySelector(".recipe-26 img").src = data.recipes[25].image_url;
    document.querySelector(".recipe-26 h5").innerHTML = data.recipes[25].title;
    document.querySelector(".recipe-26 p").innerHTML = data.recipes[25].title;
    document.querySelector(".recipe-26 a").href = data.recipes[25].source_url;

    document.querySelector(".recipe-27 img").src = data.recipes[26].image_url;
    document.querySelector(".recipe-27 h5").innerHTML = data.recipes[26].title;
    document.querySelector(".recipe-27 p").innerHTML = data.recipes[26].title;
    document.querySelector(".recipe-27 a").href = data.recipes[26].source_url;

    document.querySelector(".recipe-28 img").src = data.recipes[27].image_url;
    document.querySelector(".recipe-28 h5").innerHTML = data.recipes[27].title;
    document.querySelector(".recipe-28 p").innerHTML = data.recipes[27].title;
    document.querySelector(".recipe-28 a").href = data.recipes[27].source_url;
}
nGet();