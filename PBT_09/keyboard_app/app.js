const images = [
    "https://picsum.photos/id/10/800/400",
    "https://picsum.photos/id/20/800/400",
    "https://picsum.photos/id/30/800/400",
    "https://picsum.photos/id/40/800/400",
    "https://picsum.photos/id/50/800/400",
    "https://picsum.photos/id/60/800/400",
    "https://picsum.photos/id/70/800/400",
    "https://picsum.photos/id/80/800/400",
    "https://picsum.photos/id/90/800/400"
];

let current = 0;
let playing = false;
let timer = null;

const modal = document.getElementById("galleryModal");
const image = document.getElementById("galleryImage");

const openGallery =
document.getElementById("openGallery");

const closeGallery =
document.getElementById("closeGallery");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const playBtn =
document.getElementById("playBtn");

function showImage(){
    image.src = images[current];
}

function nextImage(){
    current = (current + 1) % images.length;
    showImage();
}

function prevImage(){
    current--;

    if(current < 0){
        current = images.length - 1;
    }

    showImage();
}

function togglePlay(){

    if(!playing){

        timer = setInterval(nextImage,2000);

        playBtn.textContent = "Pause";

        playing = true;

    }else{

        clearInterval(timer);

        playBtn.textContent = "Play";

        playing = false;
    }
}

openGallery.onclick = function(){

    modal.classList.remove("hidden");

    showImage();
};

closeGallery.onclick = function(){

    modal.classList.add("hidden");
};

prevBtn.onclick = prevImage;
nextBtn.onclick = nextImage;
playBtn.onclick = togglePlay;

const palette =
document.getElementById("palette");

const commandInput =
document.getElementById("commandInput");

const commandList =
document.getElementById("commandList");

const commands = [
    "Open Gallery",
    "Close Gallery",
    "Next Image",
    "Previous Image",
    "Play Slideshow"
];

function renderCommands(arr){

    commandList.innerHTML = "";

    for(let item of arr){

        const li =
        document.createElement("li");

        li.textContent = item;

        commandList.appendChild(li);
    }
}

renderCommands(commands);

commandInput.addEventListener("input",function(){

    const keyword =
    this.value.toLowerCase();

    const result =
    commands.filter(function(cmd){

        return cmd.toLowerCase()
        .includes(keyword);
    });

    renderCommands(result);
});

document.addEventListener("keydown",function(e){

    if(e.ctrlKey &&
       e.key.toLowerCase() === "k"){

        e.preventDefault();

        palette.classList.remove("hidden");

        commandInput.focus();
    }

    if(e.key === "Escape"){

        modal.classList.add("hidden");

        palette.classList.add("hidden");
    }

    if(!modal.classList.contains("hidden")){

        if(e.key === "ArrowRight"){
            nextImage();
        }

        if(e.key === "ArrowLeft"){
            prevImage();
        }

        if(e.key === " "){

            e.preventDefault();

            togglePlay();
        }

        if(e.key >= "1" &&
           e.key <= "9"){

            const index =
            Number(e.key) - 1;

            if(index < images.length){

                current = index;

                showImage();
            }
        }
    }
});