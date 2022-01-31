const facebookBtn = document.querySelector(".social-media-facebook");
const twitterBtn = document.querySelector(".social-media-twitter");
const linkedinBtn = document.querySelector(".social-media-linkedin");
const whatsappBtn = document.querySelector(".social-media-whatsapp");
const googlePlusBtn = document.querySelector(".social-media-googleplus");
function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check out this Awesome Blog ");

  facebookBtn.setAttribute(
    "onclick",
    `window.location='https://www.facebook.com/sharer.php?u=${postUrl}'`
  );

  twitterBtn.setAttribute(
    "onclick",
    ` window.location='https://twitter.com/share?url=${postUrl}&text=${postTitle}'`
  );

  linkedinBtn.setAttribute(
    "onclick",
    ` window.location='https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}'`
  );

  whatsappBtn.setAttribute(
    "onclick",
    `window.location='https://wa.me/?text=${postTitle} ${postUrl}'`
  );

  googlePlusBtn.setAttribute(
    "onclick",
    `window.location='https://plus.google.com/share?url=${postUrl}'`
  );
}

init();
