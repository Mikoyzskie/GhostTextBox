const input = document.getElementById("input");
const bubble = document.getElementById("bubble");
const mouth = document.querySelector(".mouth");

input.onkeydown = (e) => {
  if (e.keyCode == 13) {
    bubble.innerText = e.target.value;
    e.target.value = "";
    if (document.activeElement instanceof HTMLElement)
    document.activeElement.blur();
    let i = 0;
    if (mouthChatter) clearInterval(mouthChatter);
    const mouthChatter = setInterval(() => {
      if (i === 6) clearInterval(mouthChatter);
      i++;
    }, 300);
  }
};