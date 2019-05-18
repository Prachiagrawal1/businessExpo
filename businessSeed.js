var mongoose = require("mongoose");
var User = require("./models/users");
var Business= require("./models/business");

var data = [
        {
           logo: 'https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309__340.png',
           name:  'Ignitor',
           providerCountry: 'india',
           recieverCountry: ['germany', 'denmark'],
           aboutUs: 'The Ignitor was launched in 2012, just after the company was rechristened to Hero MotoCorp. The Ignitor and its twin, the CBF Stunner are a part of the competitive 125cc segment, though the former manages to edge ahead in terms of styling, owing to the host of cosmetic updates. Cosmetic updates like the redesigned body panels, front cowl new graphics and body-coloured rear-view mirror set the Ignitor apart from the Stunner. The bike also gets a digital-analogue instrument console. Despite the styling, the Ignitor is an outright commuter bike. The upright seating position coupled with its light weight make the Ignitor agile and fun to ride in urban stop-go traffic.',
           jd: '' ,
           contact: {
               phone : '+91 1231231234',
               emailAddress: 'info@ignitor.com',
               website: 'www.ignitor.org'
           }
        },
        {
            logo: 'https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661__340.png',
            name:  'BJP - Bharat Jai pay',
            providerCountry: 'india',
            recieverCountry: ['germany', 'denmark', 'sweden', 'uk'],
            aboutUs: 'The Bharatiya Janata Party Indian Peoples Party is one of the two major political parties in India, along with the Indian National Congress.[17] As of 2018, it is the countrys largest political party in terms of representation in the national parliament and state assemblies, and it is the worlds largest party in terms of primary membership',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@bjp.org',
                website : 'www.website.bjp.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2015/05/15/21/36/finger-769300__340.jpg',
            name:  'Infosys',
            providerCountry: 'germany',
            recieverCountry: ['india', 'uk', 'sweden'],
            aboutUs: 'Infosys is a global leader in next-generation digital services and consulting. We enable clients in 45 countries to navigate their digital transformation.',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@infosys.org',
                website: 'www.infosys.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2015/01/05/17/19/film-589491__340.jpg',
            name:  'Youtube-germany',
            providerCountry: 'germany',
            recieverCountry: ['india', 'uk', 'sweden','denmark'],
            aboutUs: 'YouTube is an American video-sharing website headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Googles subsidiaries. ',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@youtube.org',
                website: 'www.youtube.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2012/11/26/15/07/earth-67359__340.jpg',
            name:  'Oberlo',
            providerCountry: 'sweden',
            recieverCountry: ['india', 'uk', 'germany','denmark'],
            aboutUs: 'Information technology (IT) is the use of computers to store, retrieve, transmit, and manipulate data,[1] or information, often in the context of a business or other enterprise.[2] IT is considered to be a subset of information and communications technology (ICT).',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@oberlo.org',
                website: 'www.oberlo.org'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2016/06/28/13/50/cat-1484725__340.png',
            name:  'MESH',
            providerCountry: 'sweden',
            recieverCountry: ['india', 'uk', 'germany','denmark'],
            aboutUs: 'MESH Limited is an Indian multinational corporation that provides information technology, consulting and business process services',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@mesh.org',
                website: 'www.meshinternational.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2014/05/14/14/17/youtube-344106__340.png',
            name:  'Youtube Denmark',
            providerCountry: 'denmark',
            recieverCountry: ['india'],
            aboutUs: 'YouTube is an American video-sharing website headquartered in denamrk. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Googles subsidiaries. ',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@youtube_den.org',
                website: 'www.youtube.den.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018__340.png',
            name:  'GetSoico',
            providerCountry: 'denmark',
            recieverCountry: ['india','uk','germany','sweden'],
            aboutUs: 'GetSocio Limited is an Indian multinational corporation that provides information technology, consulting and business process services. t was initially set up as a manufacturer of vegetable and refined oils in Amalner, Maharashtra, British India, under the trade names of Kisan, Sunflower, and Camel',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@getsocio.org',
                website: 'www.getsocio.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689__340.png',
            name:  'Brand Root',
            providerCountry: 'uk',
            recieverCountry: ['india','denmark','germany','sweden'],
            aboutUs: 'Brand Root is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple and Facebook',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@brand_root.org',
                website: 'www.brandroot.com'
            }
         },
         {
            logo: 'https://cdn.pixabay.com/photo/2018/09/24/11/12/graphic-3699669__340.png',
            name:  'Tooth Teeth',
            providerCountry: 'uk',
            recieverCountry: ['india','denmark','germany','sweden'],
            aboutUs: 'Tooth Teeth was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. ',
            jd: '' ,
            contact: {
                phone : '+91 1231231234',
                emailAddress: 'info@tt.org',
                website: 'www.toothteeth.com'
            }
         },
    ]
function seedDB(){
    //remove all data
    Business.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("All data removed");
        //add few Businesss
        data.forEach(function(seed){
            Business.create(seed, function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log("New Business added");
                }
            });
        });
    });   
}
module.exports = seedDB;

