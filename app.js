(function () {
  "use strict()";

  const catButton = document.getElementById("cat");
  const dogButton = document.getElementById("dog");
  const cowButton = document.getElementById("cow");

  const catImage = document.getElementById("cat-img");
  const dogImage = document.getElementById("dog-img");
  const cowImage = document.getElementById("cow-img");

  const hideCat = document.getElementById("hide-cat");
  const hideDog = document.getElementById("hide-dog");
  const hideCow = document.getElementById("hide-cow");

  catButton.addEventListener("click", function () {
    catImage.src = "tabby-cat.jpg";
    catImage.hidden = false;
  });

  dogButton.addEventListener("click", function () {
    dogImage.src = "dog.jpg";
    dogImage.hidden = false;
  });

  cowButton.addEventListener("click", function () {
    cowImage.src = "cow.jpg";
    cowImage.hidden = false;
  });

  hideCat.addEventListener("click", function () {
    catImage.hidden = true;
  });

  hideDog.addEventListener("click", function () {
    dogImage.hidden = true;
  });

  hideCow.addEventListener("click", function () {
    cowImage.hidden = true;
  });
})();
