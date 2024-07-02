export default function getStudentsByLocation(student, city) {
  function isValid(value) {
    if (value.location === city) {
      return true;
    }
    return false;
  }
  const filterArray = student.filter(isValid);
  return filterArray;
}
