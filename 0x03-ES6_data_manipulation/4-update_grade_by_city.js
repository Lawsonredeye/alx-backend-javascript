export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  // get the filtered student at matching locations
  const filteredStudents = getListStudents.filter((student) => student.location === city);

  const updateStudent = filteredStudents.map((student) => {
    const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeRecord ? gradeRecord.grade : 'N/A',
    };
  });

  return updateStudent;
}
