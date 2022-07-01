import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCourseId = (courseId) => {
    return COMMENTS.filter(
        (comment) => comment.courseId === parseInt(courseId)
    );
};