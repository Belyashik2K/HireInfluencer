document.addEventListener('DOMContentLoaded', () => {
    const firstCategory = document.querySelector('.influencers__buttons').querySelectorAll('.influencers__social')
    firstCategory[0].classList.add("selected");
    updateCards("fb_cat");

    // if (window.innerWidth < 420) {
    //     const ids = ["arrow_left", "arrow_right"];
    //     ids.forEach(id => {
    //         const button = document.getElementById(id);
    //         button.addEventListener('click', move);
    //     });
    // }

});

function updateCards(id) { 
    const oldCategory = document.getElementsByClassName("selected");
    oldCategory[0].classList.remove("selected");
    
    const newCategory = document.getElementById(id);
    // Get which social media is selected
    const socialMedia = newCategory.textContent;
    newCategory.classList.add("selected");
    
    // Get the cards container
    const cardsContainer = document.querySelector('.influencers__cards');
    // Get the cards
    const cards = cardsContainer.querySelectorAll('.influencers__card');
    // Loop through the cards
    counter = 0;
    cards.forEach(card => {
        counter += 1;

        // Если с телефона, то оставляем только одну карточку
        if (window.innerWidth < 420) {
            card.id = counter;
        
            card.classList.remove("hidden");

            if (counter > 1) {
                card.classList.add("hidden");
            } else {
                card.classList.add("active");
            }
        }

        const cardImage = card.querySelector('.influencers__card__image');
        const cardTitle = card.querySelector('.influencers__card__title');
        const cardLocation = card.querySelector('.influencers__card__location');
        const cardButtons = card.querySelector('.influencers__card__buttons').querySelectorAll("#socials_buttons");

        cardImage.src = info_for_cards[socialMedia][counter]["image"];
        cardTitle.textContent = info_for_cards[socialMedia][counter]["title"];
        cardLocation.textContent = info_for_cards[socialMedia][counter]["location"];
        
        second_counter = 0;
        cardButtons.forEach(button => {
            second_counter += 1;
            const Followers = button.querySelector('.text');
            button.href = info_for_cards[socialMedia][counter]["socials"][second_counter]["url"];
            Followers.textContent = info_for_cards[socialMedia][counter]["socials"][second_counter]["followers"];
        });
    });
}

function move(id) {

    const cardsContainer = document.querySelector('.influencers__cards');
    const cards = cardsContainer.querySelectorAll('.influencers__card');
    const CategoryName = document.getElementsByClassName("selected")[0].textContent;
    
    // Get current card
    const currentCard = document.querySelector('.active');
    // Get next card
    const nextCard = currentCard.id
    
    if (id == "arrow_left") {
        next = parseInt(nextCard) - 1;
    } else {
        next = parseInt(nextCard) + 1;
    }

    categoryInfo = info_for_cards[CategoryName];

    cards.forEach(card => {
        card.classList.remove("active");
        card.classList.add("hidden");
    });

    if (next < 1) {
        cards[Object.keys(categoryInfo).length - 1].classList.remove("hidden");
        cards[Object.keys(categoryInfo).length - 1].classList.add("active");
        return;
    }

    if (next > Object.keys(categoryInfo).length) {
        cards[0].classList.remove("hidden");
        cards[0].classList.add("active");
    } else {
        cards[next - 1].classList.remove("hidden");
        cards[next - 1].classList.add("active");
    }
}

info_for_cards = {
    "Facebook": { 
        1: {
            "image": "/src/images/faces/1.png",
            "title": "Jabin Islam",
            "location": "Chittagong, Bangladesh",
            "socials": {
                1: {
                    "followers": "1.6M",
                    "url": "https://www.facebook.com/jabinislam"
                },
                2: {
                    "followers": "698K",
                    "url": "https://www.instagram.com/jabinislam"
                },
            },
        },
        2: {
            "image": "/src/images/faces/2.png",
            "title": "Zia Uddin",
            "location": "LA, USA",
            "socials": {
                1: {
                    "followers": "1.6M",
                    "url": "https://www.facebook.com/ziuddin"
                },
                2: {
                    "followers": "698K",
                    "url": "https://www.instagram.com/ziuddin"
                },
            },
        },
        3: {
            "image": "/src/images/faces/3.png",
            "title": "Tareq Aziz",
            "location": "Chittagong, Bangladesh",
            "socials": {
                1: {
                    "followers": "1.6M",
                    "url": "https://www.facebook.com/tareqaziz"
                },
                2: {
                    "followers": "698K",
                    "url": "https://www.instagram.com/tareqaziz"
                },
            },
        },
        4: {
            "image": "/src/images/faces/4.png",
            "title": "Saimon Aflame",
            "location": "Chittagong, Bangladesh",
            "socials": {
                1: {
                    "followers": "1.6M",
                    "url": "https://www.facebook.com/saimonaflame"
                },
                2: {
                    "followers": "698K",
                    "url": "https://www.instagram.com/saimonaflame"
                },
            },
        }},
    "Instagram": {
        1: {
            "image": "/src/images/faces/8.png",
            "title": "Alexander Vorobiev",
            "location": "Saint-Petersburg, Russia",
            "socials": {
                1: {
                    "followers": "66M",
                    "url": "https://www.facebook.com/alexandervorobiev"
                },
                2: {
                    "followers": "777K",
                    "url": "https://www.instagram.com/alexandervorobiev"
                },
            },
        },
        2: {
            "image": "/src/images/faces/9.png",
            "title": "Lenny Kravitz",
            "location": "Stokholm, Sweden",
            "socials": {
                1: {
                    "followers": "71K",
                    "url": "https://www.facebook.com/lennykravitz"
                },
                2: {
                    "followers": "1.6M",
                    "url": "https://www.instagram.com/lennykravitz"
                },
            },
        },
        3: {
            "image": "/src/images/faces/10.png",
            "title": "Kenny Notwest",
            "location": "Samara, Russia",
            "socials": {
                1: {
                    "followers": "987M",
                    "url": "https://www.facebook.com/kennynotwest",
                },
                2: {
                    "followers": "17M",
                    "url": "https://www.instagram.com/kennynotwest",
                },
            },
        },
        4: {
            "image": "/src/images/faces/11.png",
            "title": "Alexandra Kim",
            "location": "Tallin, Estonia",
            "socials": {
                1: {
                    "followers": "1.9M",
                    "url": "https://www.facebook.com/alexandradaddario",
                },
                2: {
                    "followers": "817K",
                    "url": "https://www.instagram.com/alexandradaddario",
                },
            },
        }},
    "Twitter": {
        1: {
            "image": "/src/images/faces/12.png",
            "title": "Bogdan Chebotarev",
            "location": "Basement, Russia",
            "socials": {
                1: {
                    "followers": "6.29M",
                    "url": "https://www.facebook.com/bogdanchebotarev",
                },
                2: {
                    "followers": "5.95M",
                    "url": "https://www.instagram.com/bogdanchebotarev",
                },
            },
        },
        2: {
            "image": "/src/images/faces/13.png",
            "title": "Marko Anchous",
            "location": "Istanbul, Turkey",
            "socials": {
                1: {
                    "followers": "187K",
                    "url": "https://www.facebook.com/markoanchous",
                },
                2: {
                    "followers": "199K",
                    "url": "https://www.instagram.com/markoanchous",
                },
            },
        },
        3: {
            "image": "/src/images/faces/15.png",
            "title": "Ferjani Sassi",
            "location": "Tunis, Tunisia",
            "socials": {
                1: {
                    "followers": "117K",
                    "url": "https://www.facebook.com/ferjanisassi",
                },
                2: {
                    "followers": "987K",
                    "url": "https://www.instagram.com/ferjanisassi",
                },
            },
        },
        4: {
            "image": "/src/images/faces/16.png",
            "title": "Labo Cisse",
            "location": "London, UK",
            "socials": {
                1: {
                    "followers": "1.7M",
                    "url": "https://www.facebook.com/labocisse",
                },
                2: {
                    "followers": "18K",
                    "url": "https://www.instagram.com/labocisse",
                },
            },
        },
        },
    "Tiktok": {
        2: {
            "image": "/src/images/faces/20.png",
            "title": "Lia Kubishek",
            "location": "Dortmund, Germany",
            "socials": {
                1: {
                    "followers": "1.031M",
                    "url": "https://www.facebook.com/liakubishek",
                },
                2: {
                    "followers": "613K",
                    "url": "https://www.instagram.com/liakubishek",
                },
            },
        },
        3: {
            "image": "/src/images/faces/19.png",
            "title": "Vladimir Koshevoi",
            "location": "Riga, Latvia",
            "socials": {
                1: {
                    "followers": "745K",
                    "url": "https://www.facebook.com/vladimirkoshevoi",
                },
                2: {
                    "followers": "985K",
                    "url": "https://www.instagram.com/vladimirkoshevoi",
                },
            },
        },
        1: {
            "image": "/src/images/faces/17.png",
            "title": "Liam Neeson",
            "location": "Dublin, Ireland",
            "socials": {
                1: {
                    "followers": "1.6M",
                    "url": "https://www.facebook.com/liamneeson",
                },
                2: {
                    "followers": "963K",
                    "url": "https://www.instagram.com/liamneeson",
                },
            },
        },
        4: {
            "image": "/src/images/faces/18.png",
            "title": "Omar Sy",
            "location": "Paris, France",
            "socials": {
                1: {
                    "followers": "567K",
                    "url": "https://www.facebook.com/omarsy",
                },
                2: {
                    "followers": "334K",
                    "url": "https://www.instagram.com/omarsy",
                },
            },
        },
    },
};