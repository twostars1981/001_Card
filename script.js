(function () {
  var flip = document.getElementById("flip");
  var btnFlip = document.getElementById("btnFlip");
  var btnFlipBack = document.getElementById("btnFlipBack");

  if (flip && btnFlip && btnFlipBack) {
    function toggle() {
      flip.classList.toggle("is-flipped");
    }

    btnFlip.addEventListener("click", toggle);
    btnFlipBack.addEventListener("click", toggle);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && flip.classList.contains("is-flipped")) {
        flip.classList.remove("is-flipped");
      }
    });
  }

  function renderQr() {
    var canvas = document.getElementById("cardQr");
    if (!canvas) return;

    var customUrl = (document.body.getAttribute("data-card-url") || "").trim();
    var targetUrl = customUrl || window.location.href.split("#")[0];

    if (typeof QRCode === "undefined" || !QRCode.toCanvas) {
      console.error("QRCode library not loaded. Check qrcode.min.js next to index.html.");
      return;
    }

    QRCode.toCanvas(
      canvas,
      targetUrl,
      {
        width: 140,
        margin: 2,
        color: {
          dark: "#1a1a22ff",
          light: "#ffffffff",
        },
      },
      function (err) {
        if (err) {
          console.error(err);
        }
      }
    );
  }

  renderQr();
})();
