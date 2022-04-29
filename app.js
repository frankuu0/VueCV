Vue.createApp({

    data() {
        return {
            photo: 'img/photo.jpg',
            people: 'Arsen Khamdokhov',
            spec: 'Frontend developer',
            phone: 'tel:+79204252059',
            telegram: 'https://t.me/blob000',
            github: 'https://github.com/frankuu0',
            email: 'mailto:ha@rusnatt.ru',
            skills: ['HTML', 'Pug', 'CSS', 'SCSS', 'Sass', 'Less', 'JS', 'React', 'Vue', 'Webpack', 'Gulp', 'PHP', 'Twig', 'English'],
            about: {
                'Cake day: ': 'November 18, 2000',
                'Location: ': 'Moscow, Russia',
                'Interests: ': 'Programming, playing guitar'
            },
            exp: '3+ years',
            work: {
                'National Association of Technology Transfer: ': 'from February 2018 to February 2021',
                'Richbee Agency: ': 'from April 2021 to October 2021',
                'PULT.ru ': 'from November 2021 to now'
            },
            blog: {
                'Sass Animation': 'https://codepen.io/blob0/embed/LYWPLdV?height=265&theme-id=dark&default-tab=css,result',
                'Photo Galery': 'https://codepen.io/blob0/embed/ExZJGJO?height=265&theme-id=dark&default-tab=css,result',
                'Book Store': 'https://codepen.io/blob0/embed/PoGrwww?height=265&theme-id=dark&default-tab=js,result',
                'Particles JS': 'https://codepen.io/blob0/embed/YzGQbRZ?height=265&theme-id=dark&default-tab=js,result',
                'Adaptive Page': 'https://codepen.io/blob0/embed/wvzrpPw?height=265&theme-id=dark&default-tab=html,result'
            },
            tooltips: {
                photo: 'Click me :^)',
                telegram: '@blob000',
                phone: '8(920)4252059',
                email: 'ha@rusnatt.ru',
                github: 'frankuu0',
                theme: 'Toggle theme'
            }
        }
    },
    methods: {
        photoUpscale() {
            document.getElementById('photoUpscale').classList.remove('hidden');
            document.getElementById('photoUpscale').classList.add('show');
        },
        photoDownscale() {
            document.getElementById('photoUpscale').classList.remove('show');
            document.getElementById('photoUpscale').classList.add('hidden');
        },
        switchTheme() {
            document.getElementById('app').classList.toggle('dark');
        }
    }

}).mount('#app')