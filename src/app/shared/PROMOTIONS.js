import TeacherSpotlight from '../assets/img/TeacherSpotlight.jpg';
import FCBDFlow from '../assets/img/FCBDFlow.jpg';
import SummerSolstice from '../assets/img/SummerSolstice.jpg';
import GPRF2022 from '../assets/img/GPRF2022.jpg';


export const PROMOTIONS = [
    {
        id: 0,
        name: 'Teacher Spotlight Series',
        image: TeacherSpotlight,
        featured: true,
        description:
            'Let Di Flower take you on a tour of her dance history, sharing how she cultivates her ideas of creativity.'
    },
    {
        id: 1,
        name: 'Fall Great Plains Renaissance Festival',
        image: GPRF2022,
        featured: false,
        description:
            'Join us as we celebrate the return of the renaissance in Wichita at the 22nd Anual Fall Great Plains Renaissance and Scottish Festival!'
    },
    {
        id: 2,
        name: 'Summer Solstice Hafla',
        image: SummerSolstice,
        featured: false,
        description: `Enjoy a variety of creative acts performed by our students and teachers in our annual summer showcase`
    },
    {
        id: 3,
        name: 'FCBD® Flow',
        image: FCBDFlow,
        featured: false,
        description:
            'Join us for one hour of dance with no instruction in the Fat Chance Bellydance® style zone.'
    }
];
