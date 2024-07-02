export default function getStudentIdsSum(getListStudents) {
  const totalIds = getListStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );

  return totalIds;
}
