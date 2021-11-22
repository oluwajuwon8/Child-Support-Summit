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