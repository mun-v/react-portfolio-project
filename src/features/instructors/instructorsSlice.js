import { INSTRUCTORS } from '../../app/shared/INSTRUCTORS';

export const selectAllInstructors = () => {
    return instructorsArray;
};

export const selectFeaturedInstructor = (_) => {
    return INSTRUCTORS.find(({ featured }) => featured); 
};