// time
function setarData() {
  let elementoData = document.querySelector(".js-data");

  let data = new Date();

  const objData = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  };

  elementoData.textContent = data.toLocaleTimeString("en-US", objData);
}
setarData();
setInterval(() => {
  setarData();
}, 1000);
// endtime

// ficture
$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});
// endficture