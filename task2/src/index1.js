const likeButton = `<button class="like_button">LIKE</button>`;
const hideButton = `<button class="hide_button">HIDE</button>`;

class News {
    constructor(title, image, paragraph) {
        this.title = title;
        this.image = image;
        this.paragraph = paragraph;
        this.likes = 0;
    }

    render() {
        return (`
            <div>
                <h1>${this.title}</h1>
                <span>${'&#9824;'.repeat(this.likes)}</span><br>
                <img src="${this.image}">
                <p>${this.paragraph}</p>
                ${likeButton}
                ${hideButton}
            </div>
        `);
    }

    show(paragraph) {
        this.container = paragraph;
        paragraph.innerHTML = this.render();

        const likeButton = paragraph.querySelector('.like_button');
        likeButton.addEventListener('click', () => this.incLikes());

        const hideButton = paragraph.querySelector('.hide_button');
        hideButton.addEventListener('click', () => this.hide());
    }

    incLikes() {
        this.likes++;
        this.show(this.container);
    }

    hide() {
        const title = this.container.querySelector('h1');
        title.style.color = 'darkgray';
        title.style.backgroundColor = 'lightgray';

        const img = this.container.querySelector('img');
        img.style.opacity = '0.5';

        const paragraph = this.container.querySelector('p');
        paragraph.style.color = 'darkgray';
        paragraph.style.backgroundColor = 'lightgray';

        const likeButton = this.container.querySelector('.like_button');
        likeButton.disabled = true;
    }
}

let arrResources = [
    {
        srcImg: 'img/1.jpg',
        newsTitle: 'title1',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
        srcImg: 'img/2.jpg',
        newsTitle: 'title2',
        newsContent: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.'
    },
    {
        srcImg: 'img/3.jpg',
        newsTitle: 'title3',
        newsContent: 'hjkhhsghkdsghkdhjdsksdggdshgshghsgugibfuvernnuslhcfusuifhuifklhfusi'
    }
];

function generateNews() {
    let paragraphs = document.querySelectorAll('#content p')
    paragraphs.forEach((paragraph, index) => {
        let news = new News(arrResources[index].newsTitle, arrResources[index].srcImg, arrResources[index].newsContent);
        news.show(paragraph);
    })
}

generateNews();