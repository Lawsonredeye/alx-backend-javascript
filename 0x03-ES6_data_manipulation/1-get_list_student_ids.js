export default function getStudentIds(args) {
  let arr = [];
  if (args instanceof Array) {
    arr = args.map((value) => value.id);
  }
  return arr;
}
