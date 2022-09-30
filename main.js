window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
}
function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2;
  
  //Verificar se a seção passou da linha imaginária (targetLine)
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  // console.log(' O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  menuElement.classList.remove('active')
  if(sectionBoudaries) {
    menuElement.classList.add('active');
  }
}
function showNavOnScroll(){
  let nav = document.getElementById('navigation')
  if (scrollY > 0) {
   
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll(){
  if(scrollY > 500){
    backToTopButton.classList.add('show');
  }else{
    backToTopButton.classList.remove('show');
  }
}
function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);

