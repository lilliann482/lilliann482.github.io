const storyContainer = document.getElementById('stories')
const fragment = document.createDocumentFragment()


const img = document.createElement('img')
const h3 = document.createElement('h3')
const p = document.createElement('p')
let children = []

async function loadStories() {
    const res = await fetch('/photosnap/assets/data.json');
    const data = await res.json();
    
    async function pushChildren() {
        data.stories.forEach((story) => {
            // children.push(createCard(story))
            createCard(story)
        })
    }   
    
    pushChildren().then(storyContainer.appendChild(fragment))
}

loadStories();
// appendChildren(storyContainer, children)


function createCard(stories) {
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${stories.images.desktop}" alt="">
    <div class="container card-content">
    <p class="fs-200 lh-16 ls-2">
        ${stories.date}
    </p>
    <h3 class="fs-500 lh-25 ls-0">
        ${stories.name}
    </h3>
    <p class="fs-200 lh-16 ls-2">
        ${stories.author}
    </p>
    <hr>
    <a href="" class="btn-arrow btn-arrow-light">
        Read Story
    </a>
    </div>
    `;
    
    fragment.appendChild(div)    
}




