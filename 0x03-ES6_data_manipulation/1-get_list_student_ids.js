function getStudentIds(args) {
  if (args instanceof Array) {
    const new_data = args.map((value) => {
        return value.id;
    })
  } else {
    return [];
  }
}
