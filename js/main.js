window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(callback,thisArg){thisArg=thisArg||window;for(var i=0;i<this.length;i++)callback.call(thisArg,this[i],i,this)}),window.addEventListener("load",()=>{const __DND_HEADER=document.querySelector(".kl-dnd-header-area");if(__DND_HEADER){const __DND_HEADER_HEIGHT=__DND_HEADER.clientHeight;document.querySelector(".kl-dnd-header-spacer").style.height=__DND_HEADER_HEIGHT+"px"}});
//# sourceURL=https://242714133.fs1.hubspotusercontent-na2.net/hubfs/242714133/hub_generated/template_assets/1/259021389514/1763185944178/template_main.js
// === STC Mobile Navbar Toggle ===
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".kl-navbar__hamburger");
  const navContent = document.querySelector(".kl-navbar__content");

  if (!hamburger || !navContent) return;

  hamburger.addEventListener("click", () => {
    navContent.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
  });
});
// === STC Mobile Navbar Toggle (forced) ===
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".kl-navbar__hamburger");
  const navContent = document.querySelector(".kl-navbar__content");

  if (!hamburger || !navContent) return;

  // sanity log (you can remove later)
  console.log("STC nav toggle loaded");

  hamburger.addEventListener("click", () => {
    const isOpen = navContent.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");

    // FORCE the visibility so CSS can't hide it
    navContent.style.display = isOpen ? "block" : "";
  });
});
