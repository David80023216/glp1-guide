(function () {
  var link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = "https://glp1star.com" + window.location.pathname;
})();
