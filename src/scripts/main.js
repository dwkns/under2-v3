import Cookies from "js-cookie";

window.addEventListener('DOMContentLoaded', () => {

// check for a privacy cookie. If there isn't one, show the privacy banner.
let privacyCookie = Cookies.get('acceptPrivacy');
if (privacyCookie == undefined) {
  document.getElementById("cookie-banner").classList.remove("hidden");
}

document.getElementById("acceptPrivacyBannerButton").onclick = (event) => {
  let body = document.body;
  let domain = body.getAttribute("data-env");
  Cookies.set('acceptPrivacy', 'local', { expires: 1000 , domain: domain });
  document.getElementById("cookie-banner").classList.remove("fixed");
  document.getElementById("cookie-banner").classList.add("hidden");
  event.preventDefault();
}
})