const abbrevName = name => {
  let abbrev = "";
  name.split(" ").map(value => abbrev += value.charAt(0).toUpperCase())
  return abbrev.split("").join(".");
}
