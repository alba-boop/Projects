window.addEventListener("load", function ()
{
  let counter = 0;

  function buttonClicked()
  {
    counter++;

    let clickCounterElement = document.getElementById("Clickcounter");

    clickCounterElement.innerHTML = "Clicked " + counter + " times."
  }

  let clickButtonElement = document.getElementById("Clickbutton");

  clickButtonElement.addEventListener("click", buttonClicked);
});