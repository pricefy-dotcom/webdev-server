export default function CoursesDao(db) {
  const findAllCourses = () => db.courses;
  const findCoursesForEnrolledUser = (userId) =>
    db.courses.filter((course) =>
      db.enrollments.some((e) => e.user === userId && e.course === course._id)
    );
  return { findAllCourses, findCoursesForEnrolledUser };
}