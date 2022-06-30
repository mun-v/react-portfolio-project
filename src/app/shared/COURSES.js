import CabaretBasics from '../assets/img/CabaretBasics.jpg';
import BollywoodBasics from '../assets/img/BollywoodBasics.jpg';
import DaturaBasics from '../assets/img/DaturaBasics.jpg';
import EFolkloric from '../assets/img/EFolkloric.jpg';
import HoopHoneys from '../assets/img/HoopHoneys.jpg';
import Ballroom from '../assets/img/Ballroom.jpg';

export const COURSES = [
    {
        id: 0,
        name: 'Cabaret Basics',
        image: CabaretBasics,
        instructor: 'Elisa Montoya',
        featured: false,
        description:
            'Learn foundational Middle Eastern dance movements and technique in this introductory level class.'
    },
    {
        id: 1,
        name: 'East Indian/Bollywood Basics ',
        image: BollywoodBasics,
        instructor: 'Christina Byram',
        featured: false,
        description:
            'Learn foundational hand/foot movements and unlock the door to other East Indian dance genres. '
    },
    {
        id: 2,
        name: 'Datura™ Style & Technique', 
        image: DaturaBasics,
        instructor: 'Lady Di',
        featured: false,
        description:
            'This class focuses on isolations, step patterns, movements, combinations, and more. Based on a style created by innovated American dancer, Rachel Brice.'
    },
    {
        id: 3,
        name: 'Egyptian Folkloric',
        image: EFolkloric,
        instructor: 'Malak',
        featured: true,
        description:
            "Learn about the regional dances and the movements that reflect the lives and personalities of the various people of Egypt."
    },
    {
        id: 4,
        name: 'Hula Hoop Basics',
        image: HoopHoneys,
        instructor: 'Robin',
        featured: true,
        description:
            "Learn hula hooping tricks and dance moves together in a fun workout that indulges an American passion."
    },
    {
        id: 5,
        name: 'Couples Dancing',
        image: Ballroom,
        instructor: 'Mr. Bill',
        featured: true,
        description:
            "Learn a wide range of partner dancing from West Coast swing to salso to traditional ballroom."
    }
];
