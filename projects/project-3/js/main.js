// Declare gallery images
const img = [
    {
    name: "01.jpg",
    title: "Hay Bales",
    desc: "I love hay bales. Took this snap on a drive through the countryside past some straw fields."
    },
    {
    name: "02.jpg",
    title: "Lake",
    desc: "The lake was so calm today. We had a great view of the snow on the mountains from here."
    },
    {    
    name: "03.jpg",
    title: "Canyon",
    desc: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
    },
    {    
    name: "04.jpg",
    title: "Iceberg",
    desc: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today." 
    },
    {    
    name: "05.jpg",
    title: "Desert",
    desc: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
    },
    {    
    name: "06.jpg",
    title: "Fall",
    desc: "Fall is coming, I love when the leaves on the trees start to change color."
    },
    {        
    name: "07.jpg",
    title: "Plantation",
    desc: "I drove past this plantation yesterday, everything is so green!"
    },
    {    
    name: "08.jpg",
    title: "Dunes",
    desc: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
    },
    {    
    name: "09.jpg",
    title: "Countryside Lane",
    desc: "We enjoyed a quiet stroll down this countryside lane." 
    },
    {    
    name: "10.jpg",
    title: "Sunset",
    desc: "Sunset at the coast! The sky turned a lovely shade of orange."
    },
    {    
    name: "11.jpg",
    title: "Cave",
    desc: "I did a tour of a cave today and the view of the landscape below was breathtaking."
    },
    {    
    name: "12.jpg",
    title: "Bluebells",
    desc: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
    }
];

// Add gallery images and captions
for(let i = 0; i <img.length; i++) {
    const gallery = document.body.appendChild(document.querySelector('.gallery'));

    const newImg = `<a id="a-${[i+1]}" href="img/${img[i].name}" data-lightbox="gallery-img" data-title="${img[i].desc}" data-alt="${img[i].title}"><img class="img-${i+1}" src="img/thumbnails/${img[i].name}"</a>`;

    gallery.innerHTML += newImg;
}

//Search Bar
$('#search').on('keyup change', function() {
    const input = $(this).val().toLowerCase();

    // Filter Search Results
    for (let i = 0; i < img.length; i++) {
        const a = document.getElementById(`a-${[i + 1]}`);
        const caption = img[i].desc.toLowerCase();

        // Displays only images with captions containing user search input
        if (caption.includes(input)) {
            a.style.display = "";
        } else {
            a.style.display = "none";
        }
    } 
});


// Toggle Dark Mode
function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode-body");

    let search = document.getElementById("search");
    search.classList.toggle("dark-mode-search");
}