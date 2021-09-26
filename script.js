const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");
const row12 = document.querySelector(".row12");
const row22 = document.querySelector(".row22");
const row32 = document.querySelector(".row32");
const row42 = document.querySelector(".row42");
const row52 = document.querySelector(".row52");
const doggoWP = document.querySelector(".doggo-wp");
const doggoWP2 = document.querySelector(".doggo-wp-invisible");
const botao1 = document.querySelector(".oneByOneBTN");



const botao3 = document.querySelector(".downloadImageBTN");

let imageIndex = 0;

function addNewDoggo(appendLocal){
    imageIndex++;
    console.log(imageIndex);
    const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
        if(imageIndex <= 3){
            let img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row1.appendChild(img);
            img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row12.appendChild(img);
        }
        else if((imageIndex > 3) && (imageIndex <=6)){
            let img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row2.appendChild(img);
            img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row22.appendChild(img);
        }
        else if((imageIndex > 6) && (imageIndex <=9)){
            let img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row3.appendChild(img);
            img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row32.appendChild(img);
        }
        else if((imageIndex > 9) && (imageIndex <=12)){
            let img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row4.appendChild(img);
            img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row42.appendChild(img);
        }
        else if(imageIndex <= 15){
            let img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row5.appendChild(img);
            img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            img.style.height = '100%';
            img.style.width ='33.33%';
            row52.appendChild(img);
        }
    });
}

function createCanvas(){  

    html2canvas(doggoWP2,{useCORS: true}).then(canvas => {
        document.body.appendChild(canvas)
    });

}

function createCanvas2(){
    doggoWP2.style.opacity  = '100%';
    html2canvas(doggoWP2, {useCORS: true}).then((canvas) => {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "MyDoggoWallpaper.png";
    link.click()
    });
    doggoWP2.style.opacity = '0%';
}


botao1.addEventListener("click", addNewDoggo);

botao3.addEventListener("click", createCanvas2);
