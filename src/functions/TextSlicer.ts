function TextSlicer(descreption: string) {
  let sliced;

  if (descreption.length <= 60) {
    return descreption;
  } else {
    sliced = descreption.slice(0, 60);
    return `${sliced} ...`;
  }
}

export default TextSlicer;
