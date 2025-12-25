function scrollToContact() {
  const contact = document.getElementById("contact");
  const yOffset = -80; // height of navbar
  const y = contact.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}