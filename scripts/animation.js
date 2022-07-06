function selector(element) {
  return document.querySelector(element);
}

const purpleCircle = selector(".circle-purple");
const greenCircle = selector(".circle-green");

function handleCircles(element, secondElement) {
  let transitionTime = "650ms";

  let elementTransition = (element.style.transition = `ease-in-out ${transitionTime}`);

  let elementTransform = (element.style.transform = "translateY(190px)");

  setTimeout(() => {
    elementTransition = secondElement.style.transition = `ease-in-out ${transitionTime}`;

    elementTransform = secondElement.style.transform = "translateY(-190px)";

    setTimeout(() => {
      transitionTime = "200ms";

      elementTransition = element.style.transition = `ease-in-out ${transitionTime}`;
      elementTransition =
        secondElement.style.transition = `ease-in-out ${transitionTime}`;

      elementTransform = element.style.transform = "translateY(0px)";
      elementTransform = secondElement.style.transform = "translateY(0px)";

      transitionTime = "650ms";
    }, 1500);
  }, 1500);
}

handleCircles(purpleCircle, greenCircle);

setInterval(() => {
  handleCircles(purpleCircle, greenCircle);
}, 5000);
