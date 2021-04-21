export const getProfileType = type => {
  switch(type) {
    case "T":
      return "Teacher";
    case "E":
      return "Student";
  }
}