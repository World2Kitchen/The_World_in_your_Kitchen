var config = {
    style: 'mapbox://styles/jrma/cl3hhnhzz006w14qcs43c53r7',
    accessToken: 'pk.eyJ1IjoianJtYSIsImEiOiJjazZsNjFpZGUwOG10M2RuMDNvaTYyNzY1In0.CzO_UMzMbsy38dSRbtHHmQ',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Avocado Boom',
    subtitle: 'Rising avocado consumption around the world is fueling deforestation in Mexico',
    byline: '',
    footer: 'Data from ITC Market Analysis Tools. <a href="https://www.trademap.org/Index.aspx">ITC</a>',
    chapters: [
        {
            id: 'Avocado_intro',
            alignment: 'left',
            title: 'Origin of the Avocado',
            image: 'https://today.ttu.edu/posts/2019/08/Images/avocados-lg.jpg',
            description: "&nbsp; &nbsp; &nbsp; Avocados may have originated in the Tehuacan Valley in the Mexican state of Puebla 10,000 years ago. Humans didn't domesticate the tree until 5,000 years ago. <br>&nbsp; &nbsp; &nbsp; In the late 16th century, the Spaniards learned of these berries (yes! they are berries!) from the Aztecs. Once they got to know them, they started spreading them all over Europe. Since then, avocados have spread all over the world. From India to the Philippines to the US and beyond. <br> &nbsp; &nbsp; &nbsp; Mexico exports the most avocados in the world. They exported around 1,227,070 tons of avocados to the world in 2021, worth more than $2.98 billion. The U.S. is the largest import market for avocados, with 79% of avocados coming from Mexico.",
            location: {
                center: [-112.91666, 22.369],
                zoom: 4.1,
                pitch: 0.00,
                bearing: -3
            },
            onChapterEnter: [
                {
                    layer: 'avo_mexico',
                    opacity: 1
                },
                {
                    layer: 'top15',
                    opacity: 0
                },
                {
                    layer: 'line_avacado',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'avo_mexico',
                    opacity: 1
                },                {
                    layer: 'Mich',
                    opacity: 0
                }

            ]
        },
        {
            id: 'import_2017',
            alignment: 'left',
            title: 'European avocado exports in 2017',
            description: '&nbsp; &nbsp; &nbsp; Turning attention to Europe, as the second large importing market in the world, the total value of avocado imports has been increasing over time. The largest importer in 2017 was the Netherlands, valued at $552,680,000, followed by France, Spain, Germany and the United Kingdom. <br> &nbsp; &nbsp; &nbsp; In 2017, the countries with the largest consumption of avocados were mostly in Western Europe.',
            image: 'Untitled-11.png',
            location: {
                center: [-10.895, 55.840],
                zoom: 2.96,
                pitch: 3.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'avo_imp_2017',
                    opacity: 1
                },
                {
                    layer: 'avo_imp_2019',
                    opacity: 0
                },                
                {
                    layer: 'avo_imp_2021',
                    opacity: 0
                },
                {
                    layer: 'top15',
                    opacity: 0
                },
                {
                    layer: 'line_avacado',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'avo_imp_2017',
                    opacity: 1
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ]
        },
        {
            id: 'imp_2019',
            alignment: 'left',
            title: 'European avocado exports in 2019',
            image: 'Untitled-11.png',
            description: '&nbsp; &nbsp; &nbsp; Going into 2019, avocado consumption is increasing in most countries. The top five consumers remain the Netherlands, France, Spain, Germany and the United Kingdom.',
            location: {
                center: [-10.895, 55.840],
                zoom: 2.96,
                pitch: 3.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'avo_imp_2017',
                    opacity: 0
                },
                {
                    layer: 'avo_imp_2019',
                    opacity: 1
                },                
                {
                    layer: 'avo_imp_2021',
                    opacity: 0
                },
                {
                    layer: 'top15',
                    opacity: 0
                },
                {
                    layer: 'line_avacado',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ],
            onChapterExit: [
                 {
                    layer: 'avo_imp_2019',
                    opacity: 1
                 },                {
                    layer: 'Mich',
                    opacity: 0
                }
            ]
        },
        {
            id: 'imp_2021',
            alignment: 'left',
            title: 'European avocado exports in 2021',
            image: 'Untitled-11.png',
            description: '&nbsp; &nbsp; &nbsp; In 2021, the imported value of avocados in the Netherlands was nearly double compared to 2017. However, the most astonishing growth rate was in the Russian Federation, from 36253 USD thousand in 2017 to 132672 USD thousand in 2021. Poland and Italy are gradually joining the big team of imported avocados.<br> &nbsp; &nbsp; &nbsp; In the UK, the avocado import market is growing more slowly than in other countries. Compared to 2019, there is even a small decrease in 2021, but there is still a large increase compared to 2017.',
            location: {
                center: [-10.895, 55.840],
                zoom: 2.96,
                pitch: 3.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'avo_imp_2017',
                    opacity: 0
                },
                {
                    layer: 'avo_imp_2019',
                    opacity: 0
                },                
                {
                    layer: 'avo_imp_2021',
                    opacity: 1
                },
                {
                    layer: 'top15',
                    opacity: 0
                },
                {
                    layer: 'line_avacado',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ],
            onChapterExit: [
                 {
                    layer: 'avo_imp_2021',
                    opacity: 0
                 },
                 {
                    layer: 'avo_imp_2017',
                    opacity: 0
                },
                {
                    layer: 'avo_imp_2019',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ]
        },
        {
            id: 'UK exporter',
            alignment: 'left',
            title: "Top 15 exporters of UK's Avocado",
            image: 'le-line.png',
            description: '&nbsp; &nbsp; &nbsp; Which country is the main contributor to UK avocado imports? The answer is Peru! UK imports of avocados from Peru worth $86,587,000 in 2021. The following top 5 are, Israel ($45,500,000), Colombia ($34,532,000), Chile ($33,455,000) and South Africa ($26,382,000). The Netherlands is quite unique in Europe. It is both a big importer and an exporter. UK imports of avocados from the Netherlands account for 16% of total Netherlands exports.',
            location: {
                center: [-85.939, 15.110],
                zoom: 1.73,
                pitch: 0,
                bearing: 0
            },
            //

            onChapterEnter: [
                {
                    layer: 'avo_mexico',
                    opacity: 0
                },
                {
                    layer: 'top15',
                    opacity: 1
                },
                {
                    layer: 'line_avacado',
                    opacity: 1
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'top15',
                    opacity: 0.3
                },
                {
                    layer: 'line_avacado',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 0
                }
            ]
        },
        {
            id: 'michno',
            alignment: 'left',
            title: 'Michoacan: How the avocado boom affects the origin of avocados',
            image: '',
            description: "&nbsp; &nbsp; &nbsp; After exploring how avocados are imported from plantations into each country, let's go back to where avocados originated and discuss how the popularity of avocados in other countries affects the local environment. <br> &nbsp; &nbsp; &nbsp; Unlike traditional crops like corn, avocado saplings take three years to grow into fruiting trees. They are sensitive to drought and susceptible to disease. That is, with no income for the first three years, the risk of early planting failure is high. Moreover, as the trees get older, the soil becomes irreversibly impoverished, and no crops can be supported without a lot of fertilizer. Many farmers are forced to abandon their farms and seek to replant trees in another area or find other paid labor elsewhere. Does avocado still sound like a sustainable superfood to you right now? Let's keep moving on.",
            location: {
                center: [-103.3581, 19.3997],
                zoom: 7,
                pitch: 50.50,
                bearing: 6.40
            },

            onChapterEnter: [
                {
                    layer: 'top15',
                    opacity: 0.5
                },
                {
                    layer: 'line_avacado',
                    opacity: 0
                },
                {
                    layer: 'Mich',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'image',
            alignment: 'full',
            title: 'Fueling deforestation in Michoacan',
            image: 'https://github.com/JRMa2021/MG7/raw/main/compare.png',
            description: "&nbsp; &nbsp; &nbsp; The biggest problem with avocados is the amount of water it consumes. The World Economic Forum reports that about 9.5 billion liters of water is used every day to grow avocados. In terms of scale, that's roughly the amount of water in 3,800 Olympic swimming pools. Considering that avos typically grow in drought-prone areas, the simple act of growing avocados could end up depriving entire communities of a vital source of water they need to survive. Shipping avocados is also expensive in terms of environmental impact. A truckload of avocados throws a lot of carbon into the atmosphere as it travels the world. <br> &nbsp; &nbsp; &nbsp; These two satellite images from Google Earth capture the vegetation cover of Michoacan over the past 20 years. Significant changes in green coverage can be seen in the comparison, especially around the Pico de Tancitaro. In 2020, large areas of loess and rocks were exposed, and the area of contiguous forest was significantly reduced. This shift can be seen everywhere near Mexican avocado plantations. <br> &nbsp; &nbsp; &nbsp; Although avocados have a considerable environmental impact in terms of water use, cultivation and transportation, they are still much lower than animal products. However, we can't just see the good side and turn a blind eye to the increasingly bad environment. It is difficult to find the perfect balance between high profits and environmental concerns. But if each of us starts doing it right, the extreme propaganda that exaggerates avocados as a 'superfood' will stop. Maybe this will reduce demand, give the land some breathing time, and restore its resilience.",
            location: {
                center: [-103.3581, 19.3997],
                zoom: 7,
                pitch: 50.50,
                bearing: 6.40
            },

            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        }
    ]
};