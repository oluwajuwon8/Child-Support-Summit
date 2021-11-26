const mobileToggle = document.querySelector('#mobile_menu');
const nav = document.querySelector('.nav-flex');
const bodyfixed = document.querySelector('body');
const details = document.querySelector('.speaker-info');

const speakerDetails = [{
  speakerImg: 'images/Abubakar-Malami.jpg',
  speakerName: 'Abubakar Malami',
  speakerProfile: 'Nigerian lawyer and politician',
  profileDetails: 'Abubakar Malami SAN, is a Nigerian lawyer and politician who since 2015 is serving as Minister for Justice and Attorney-General of the Federation.',
},
{
  speakerImg: 'images/parenting-speaker.jpg',
  speakerName: 'Ann Douglas',
  speakerProfile: 'mental health advocate and speaker',
  profileDetails: 'She is a bestselling parenting author, CBC Radio parenting columnist, and mental health advocate and speaker. In 2014, she teamed up with Todays Parent magazine to make this series of 60-second parenting tips videos.',
},
{
  speakerImg: 'images/speaker3.jpg',
  speakerName: 'Victoria Adejoke Orelope-Adefulire',
  speakerProfile: 'Commissioner for Women Affairs and Poverty Alleviation ',
  profileDetails: 'She was the former Deputy-Governor of Lagos State from 2011 to 2015.[2] Prior to that she was the Commissioner for Women Affairs and Poverty Alleviation 2003-2011.',
},
{
  speakerImg: 'images/speaker6.jpg',
  speakerName: 'Kamala Devi Harris',
  speakerProfile: 'American politician and attorney',
  profileDetails: 'American politician and attorney who is the 49th and current vice president of the United States. She is the first female vice president and the highest-ranking female official in U.S. history, as well as the first African American and first Asian American vice president.',
},
{
  speakerImg: 'images/speaker5.jpg',
  speakerName: 'Barack Hussein Obama II ',
  speakerProfile: 'American politician, author, and retired attorney',
  profileDetails: 'An American politician, author, and retired attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States.',
},
{
  speakerImg: 'images/femi-falana.jpg',
  speakerName: 'Femi Falana',
  speakerProfile: 'Activist for human right',
  profileDetails: 'Femi Falana is a well activist for human right, always trying to show sympathy towards people,Femi Falana is well known for opposing opression, from successive military authorities.',
},
];

const speakers = () => {
  const speak = speakerDetails.map((speakerDetail) => `
            <div class="row speaker-position col-md-6">
                <div class="speaker-img col-4 col-sm-4">
                    <div class="picture">
                        <img src=${speakerDetail.speakerImg} alt="">
                    </div>
                </div>
                <div class="speaker-details col-8 col-sm-8">
                    <h3>${speakerDetail.speakerName}</h3>
                    <p class="profile">${speakerDetail.speakerProfile}</p>
                    <p class="profile-detail">${speakerDetail.profileDetails}</p>
                </div>

                </div>
            `);

  details.innerHTML = speak.join('');
};

window.addEventListener('DOMContentLoaded', speakers);

// Display mobile menu

const mobilemenu = () => {
  mobileToggle.classList.toggle('toggle-menu');
  nav.classList.toggle('toggle');
  bodyfixed.classList.toggle('static');
};

mobileToggle.addEventListener('click', mobilemenu);