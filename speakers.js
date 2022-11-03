const speakerData = [
    {
        name: 'Yochai Benkler',
        orgnize: 'Professor at Harvard Law School',
        image: './img/speaker_01.png',
        about:
            'Focusing on a collaborative approach in a networked environment, ',
    },
    {
        name: 'Kilnam Chon',
        orgnize:
            'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        image: './img/speaker_02.png',
        about:
            "By developing Asia's first Internet protocol network SDN and leading Korea's ",
    },
    {
        name: 'Sohyeong Noh',
        orgnize: 'Art Center Nabi Director, CC Korea Director',
        image: './img/speaker_03.png',
        about:
            "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi",
    },
    {
        name: 'Julia Reda',
        orgnize: 'Head of the Young Pirates of Europe',
        image: './img/speaker_04.png',
        about:
            "European integration and online youth participation in politics and democracy are major concerns,",
    },
    {
        name: 'Lila Tretikov',
        orgnize: 'Secretary General of the Wikimedia Foundation',
        image: './img/speaker_05.png',
        about:
            "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.",
    },
    {
        name: 'Ryan Merkley',
        orgnize: 'Creative Commons CEO, Former Mozilla Foundation COO',
        image: './img/speaker_06.png',
        about:
            'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.',
    },
];

const speaker = document.getElementById('speaker-container');

for (let i = 0; i < speakerData.length; i += 1) {
    speaker.innerHTML += `<div class="speaker">
      <img src="${speakerData[i].image}" alt="speaker-photo">
      <div class="details">
        <h4>${speakerData[i].name}</h4>
        <h6>${speakerData[i].orgnize}</h6>
        <p>${speakerData[i].about}</p>
      </div>
    </div>`;
}