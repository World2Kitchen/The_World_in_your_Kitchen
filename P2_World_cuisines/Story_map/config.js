var config = {
    style: 'mapbox://styles/timmeng/cl35zvu5d000114mzamodncqj',
    accessToken: 'pk.eyJ1IjoidGltbWVuZyIsImEiOiJja2xmN3F5NDMzcjFyMm9ucnBjZDYxd2o3In0.SqHvra71P3s8BS3MUyNFaw',
    showMarkers: false,
    markerColor: 'FFCD38',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'The Spread of Curry - from India to the World',
    subtitle: 'A GIS-based storytelling article',
    byline: '',
    footer: 'Source: <a href="https://docs.google.com/spreadsheets/d/1sIkjQ4RKLlMUo09XNv0EdRQxjKYTeuvVM45xfHPejA8/edit?usp=sharing" target="_blank">References List </a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'https://www.wrenkitchens.com/blog/wp-content/uploads/2017/09/Curry-scaled.jpg',
            imageCredit: '<a href="https://www.wrenkitchens.com/blog/curry-say-nationalcurryweek">Wren Kitchens</a>',

            description: 'Curry is a worldwide famous dish with a sauce seasoned with ground spices. It is mostly thought to be a traditional south Asian style cuisine. Since the mid-20th century, curry has started to spread worldwidely thanks to globalization, and today becomes part of international fusion cuisine.',
            location: {
                center: [28.65524, 30.71895],
                zoom: 1.86,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },



        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Origin of Curry',
            image: '',
            description: '   The word "Curry" is actually not a native word from India, it was came up by the Portugese people in early 16th century. The Portugese borrowed the Tamil world "Kari", which is a unique local dish prepared with spices and served in the form of sauce, and started to call all kinds of curry-like dishes in India "Carrees". Although all Kari-like dishes in India have their unique name, foreign colonizers including the British adapted the term "Carrees" one after another, which eventually formed the word "Curry" in modern English. <br>   Among different varieties of curry, the most traditional curry cuisine is originated from the Indian subcontinent. Although the content and preparation styles of different curry-based dishes vary dramatically across India, most of them are thick, spicy water-based dishes usually serve with steamed white rice and different kinds of Indian bread.',
            location: {
                center: [76.78834, 19.44951],
                zoom: 4.61,
                pitch: 63.00,
                bearing: -25.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                curve: 0.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'cuisine_good',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },



        {
            id: '3-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Archaeological Evidence',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mohenjodaro_-_view_of_the_stupa_mound.JPG/1200px-Mohenjodaro_-_view_of_the_stupa_mound.JPG',
            imageCredit: '<a href="https://en.wikipedia.org/wiki/Mohenjo-daro">Wikipedia Mohenjo-daro</a>',
            description: '   As mentioned, India is considered to be the home of modern curry. Archaeological evidence discovered from the largest ancient settlement of the ancient Indus Valley Civilization, the Mohenjo-daro site (today in Sindh, Pakistan) indicates that the use of ground spices, such as fennel and cumin, have appeared 2600 BCE.  ',
            location: {
                center: [67.39734, 27.09262],
                zoom: 6.66,
                pitch: 56.50,
                bearing: 53.60,
                speed: 1,
                curve: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sindh',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'sindh',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },

        {
            id: '4-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Early Spread of Curry',
            image: '',
            description: '   Starting from the 3rd century BC, Indian became unprecedented prosperous and powerful under the rule of a few dynasties. Foreign trade was started between Indian communities to their foreign neighbours. Especially during the rule of the Chola dynasty, both land and maritime trading activities had become popular - they established a number of trading routes to the east (Chinese dynasty Tang & Song), southeast (southeastern empires such as the Srivijaya empire), and west (middle eastern empires such as Egypt via maritime routes). During this golden period, Indian communities extensively influenced other countries by spreading their religions such as Hinduism and Buddhism, handcrafts such as silks and glassware, and not to mention their food - spices and curry dishes.',
            location: {
                center: [98.25688, 23.72945],
                zoom: 2.93,
                pitch: 0.00,
                bearing: 0.00,
                speed: 1,
                curve: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'early_spread',
                    opacity: 0.50
                }
            ],
            onChapterExit: [
                {
                    layer: 'early_spread',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },

        {
            id: '5-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Trading is Never Unidirectional',
            image: 'https://i0.wp.com/static.newworldencyclopedia.org/3/32/European_settlements_in_India_1501-1739.png?zoom=6',
            imageCredit: '<a href="https://subratachak.wordpress.com/2016/08/31/the-european-explorere-to-india-creating-settlements/">Subratachak</a>',
            description: '   As India is introducing their cuisine to other empires or dynasties overseas, they are also absorbing new materials, knowledge, and concepts during this process. The Mughal empire, established by the descendent of Genghis Khan, takes over most part of India in 1526. The Muslim and Mongolian cultures they brought to India started to alter some curry dishes, predominately in the northern part of the subcontinent, which is now know as the medieval Indo-Persian culture cuisine or the Mughlai cuisine. The Mughlai cuisine brought richness and aromaticity to traditional Indian curry dishes by extensively introducing new ingredients as curry species, these new species including saffron, cardamom, dry fruits and nuts, as well as dairy products including milk, cream and butter in curry bases. <br>   About the similar period of time, due to the begin of the age of sail (age of discovery), European (mostly Portuguese) colonizers and merchants started to appear at multiple Indian cities along their coastline. They brought potatoes, tomatoes and chili peppers to India which also enrich the content of many kinds of curry dishes since then. <br>  <i> Labels showing on the map right now is the heritage sites built by European colonizers back in the 16th and 17th centuries. Kochi is the very first Indian city with European settlement and trading centers. Local government worked with the Portuguese and Dutch, as well as the Ming Dynasty to develop Kochi into a crucial port in the Indian Ocean</i>',
            location: {
                center: [76.24503, 9.96843],
                zoom: 15.08,
                pitch: 69.50,
                bearing: 140.22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kochi',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'kochi',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },

        {
            id: '6-identifier',
            alignment: 'right',
            hidden: false,
            title: 'From Asian to the World – impact of colonialization from the British Empire ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Hannah_Glasse_To_make_a_Currey_the_Indian_Way_1758_edition.jpg/1200px-Hannah_Glasse_To_make_a_Currey_the_Indian_Way_1758_edition.jpg',
            imageCredit: '<a href="https://en.wikipedia.org/wiki/File:Hannah_Glasse_To_make_a_Currey_the_Indian_Way_1758_edition.jpg">Wikipedia Hannah Glasse</a>',
            description: 'Colonialization definitely is one of the darkest times in Indian history. The British forces started to occupy territories, build facilities and send workers to India to extract resources as much as possible. As more and more British people came to India, to survive in a resource-limited foreign country, many of them – especially those lower class workers –started to consume local curry dishes due to the lack of British food and ingredients. After decades of the colonialization, curry became a regular dish on a British restaurant menu in India and had spread to all classes of British there. This new exotic cuisine is also brought back to British mainland in the 18th century, which then quickly accepted by the British public. Soon, the very first known modern curry recipe is produced and published by Hannah Glasse in 1747. Although this recipe dramatically localized curry by adding a large amount of tomato sauce and removing most spices, it is still recognized as a symbol that curry has started to spread to the western world.',
            location: {
                center: [68.28358, 36.62590],
                zoom: 3.37,
                pitch: 55.94,
                bearing: -43.35,
                speed: 3, // make the flying slow
                curve: 0.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'in_uk',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'in_uk',
                    opacity: 0
                }
            ],
            onChapterEnter1: [
                {
                    layer: 'in_uk_shape',
                    opacity: 0.5
                }
            ],
            onChapterExit1: [
                {
                    layer: 'in_uk_shape',
                    opacity: 0
                }
            ]
        },

        {
            id: '7-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Curry in the UK',
            image: 'https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-banner/brighton_pavilion_vb34132284_2.jpg',
            imageCredit: '<a href="https://www.visitbritain.com/ae/en/england/southeast/brighton">Visit Britain - Brighton Pavilion</a>',
            description: 'Victorian era was the ever first time that Curry started to become popular and famous in the UK. What really made the British people become curry lovers is not because the rich and delicious smell nor the colourful and appetitive look, but the advertisement from the royal family. Since the 19th century, India has been conquered by the British Empire completely and became an official British territory held by the English East India Company. To celebrate the consolidation of British power on ‘The Jewel in the Crown’, the Royal Pavilion in Brighton was redesigned to an Indo-Saracenic style and was re-opened in 1823. The Pavilion immediately attracts extensive attention from the British society due to its special and exotic architecture style. The royal pavilion rapidly sparked a national fashion for every bit about India, including curry and other Indian cuisines. For the lower classes British people, the easiest way to join the craze for India is by partaking of curry dishes. As curry has become increasingly popular, food manufacturers began launching curry powder products due to substantial profit, which further made curry (powder) become a common cooking ingredient in the British Isle. Although the obsession with Indian culture during this period is seen as a symbol that implies the fully and successfully conquest of India, the obsession in fact can also be looked as an opportunity that brings the Indian cuisine to the western world.',
            location: {
                center: [0.94487, 54.00321],
                zoom: 5.21,
                pitch: 30.00,
                bearing: 0.00,
                speed: 3, // make the flying slow
                curve: 0.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'in_uk_shape',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'in_uk_shape',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },




        {
            id: '8-chapter',
            alignment: 'left',
            hidden: false,
            title: 'British National Dish - Tikka Masala',
            image: 'https://www.macheesmo.com/wp-content/uploads/2013/05/chickenticca_feature.jpg',
            imageCredit: '<a href="https://www.macheesmo.com/homemade-chicken-tikka-masala/">Macheesmo</a>',
            description: 'After centuries of development, Tikka Masala, a localized kind of curry dish in the UK, now is considered as a national dish of the Great Britain. This signature dish with 	mild tomato-cream sauce and boneless chicken is originated in Glasgow, Scotland in the 1970s. It soon became famous in the city after its invention, and later spread to the entire nation quickly.',
            location: {
                center: [-4.28084, 55.85744],
                zoom: 11.56,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            onChapterEnter1: [],
            onChapterExit1: []
        },


        {
            id: '9-chapter',
            alignment: 'right',
            hidden: false,
            title: 'From "Curry" to "Karē"  ',
            image: 'https://ladyandpups.com/wp-content/uploads/2014/08/minchi-katsu-curry251.jpg?ezimgfmt=ng:webp/ngcb1',
            imageCredit: '<a href="https://ladyandpups.com/2014/08/27/minchi-katsu-kare-hamburger-croquette-w-japanese-curry-sauce/">Menchi Katsu Kare</a>',
            description: 'The British also introduced curry to Japan during the Meiji era (1860s to 1910s) in overseas trading. Similar to the Britain, curry becomes popular in Japan is also because of the influence of the government. During the early 20th century, Japanese style curry kare raisu (rice curry) was adopted by the Japanese Navy and Army, which then resulted in curry being adopted in schools as military worship was dominating the political and social life of the nation. Soon curry became really popular as a staple within the Japanese diet. Today’s Japanese style curry (kare raisu) usually is mild and non-spicy, with basic ingredients such as onions, potatoes, carrots, pork, beef and chicken. Another popular Japanese style curry dish is call katsu-kare, which serves curry with deep-fried cutlet. Furthermore, the Japanese also likes to add apple to their curry dish (ringo kare), this kind of curry dish is invented in the Aomori Prefecture simply because locals want to consume the excess amount of apple, as apples are serious business in the prefecture.',
            location: {
                center: [141.80414, 36.04730],
                zoom: 5.17,
                pitch: 43.08,
                bearing: 8.01,
                speed: 3, // make the flying slow
                curve: 0.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'japan',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'japan',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },


        {
            id: '10-chapter',
            alignment: 'right',
            hidden: false,
            title: 'From the Old World to the New World',
            image: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/06/Caribbean-chicken-curry.jpg',
            imageCredit: '<a href="https://www.goodto.com/recipes/caribbean-chicken-curry">GoodToKnow - Caribbean chicken curry recipe</a>',
            description: 'Although the British only conquest a small portion of the land in the Caribbean region, both British style curry and traditional Indian style curry were introduced to the region as the British colonizers brought Indian people as slaves to the Caribbean. Once slavery was abolished more Indians came to the Caribbean region which further made curry become more popular. The Caribbean style curry today is more like the integrated version of British and traditional Indian curry, which uses similar types of spices like the Indians, but is served with a variety type of vegetables and poultry like the British. ',
            location: {
                center: [-64.79151, 17.44663],
                zoom: 5.72,
                pitch: 68.35,
                bearing: -64.98,
                speed: 3, // make the flying slow
                curve: 0.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'caribbeans',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'caribbeans',
                    opacity: 0
                }
            ],
            onChapterEnter1: [],
            onChapterExit1: []
        },

        {
            id: '11-chapter',
            alignment: 'center',
            hidden: false,
            title: 'All in All...',
            image: 'https://ychef.files.bbci.co.uk/976x549/p065jzb2.jpg',
            imageCredit: '<a href="https://www.bbc.com/future/article/20180430-why-you-eat-more-when-youre-in-company">BBC</a>',
            description: 'Although today’s curry is still considered as a symbol of India in some ways, the evolution of it is involved with various cultures and events. Different styles of curry are originally coming from the same ancestors but evolved into different forms just because of new ingredients introduced or new cooking methods used. Meanwhile at the same time, curry dishes also have become worldwide famous and have started influencing locals’ eating habit. <br> This story of curry is just an example of how cuisines evolve in the world history – many other worldwide famous dishes also have changed along the history and going out into the world whatsoever. And here we are, living in a globalized society today, these delicious dishes are gradually becoming a part of our ordinary life and connecting us to the world. ',
            location: {
                center: [133.29353, 35.22172],
                zoom: 1.66,
                pitch: 0.00,
                bearing: 0.00,
                speed: 3, // make the flying slow
                curve: 0.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            onChapterEnter1: [],
            onChapterExit1: []
        }














    ]
};
