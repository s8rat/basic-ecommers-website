/**
 *
 * A function that takes a string and shrinks it into a 60 caracter if its bigger than that
 *
 * @param {descreption} string the string that you want to shrink
 * @returns
 */

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
