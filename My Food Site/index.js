const navlink = document.querySelector('.navlinks');
const body = document.querySelector('body');
const handleshowSideBar = () => {
    navlink.classList.add('navlinksShown');
    body.classList.add('bodyUnscroll')
    console.log(body)
}
const handleExitSideBar = () => {
  navlink.classList.remove("navlinksShown");
  body.classList.remove('bodyUnscroll')

};