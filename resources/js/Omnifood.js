console.log(`Ominifood is good food!~`);

// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// });

document.querySelector(`h1`).addEventListener(`click`, function () {
  document.querySelector(`h1`).style.fontSize = `60px`;
});

// Scroll on buttons
document
  .querySelector(`.js-scroll-plans`)
  .addEventListener(`click`, function () {
    $(`html, body`).animate(
      { scrollTop: $(`.section-plans`).offset().top },
      1000
    );
  });

$(`.js-scroll-start`).click(function () {
  $(`html, body`).animate(
    { scrollTop: $(`.section-features`).offset().top },
    1000
  );
});

$(`iphone-pic`).waypoint(function () {
  $(`iphone-pic`).addClass(`animate__fadeIn`);
});
