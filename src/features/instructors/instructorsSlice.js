import { INSTRUCTORS } from '../../app/shared/INSTRUCTORS';

export const selectAllInstructors = () => {
    return INSTRUCTORS;
};

export const selectFeaturedInstructor = (_) => {
    return INSTRUCTORS.find(({ featured }) => featured); 
};