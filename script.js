
var isSideBarShowing;
const showSideBar = ()=>{
    var curr = document.getElementById("main-body");
    const sideBar = document.createElement('aside');
    sideBar.setAttribute('id','sidebar')
    const menu = document.createElement('ul')
    const firstMenu = document.createElement('li')
    firstMenu.textContent('Home')
    menu.appendChild(firstMenu)
    sideBar.appendChild(menu)
    curr.appendChild(sideBar)
    isSideBarShowing = true;
    
}

const hideSideBar = () =>{
    var sideBar = document.getElementById("sidebar");
    sideBar.parentNode.removeChild(sideBar)
    isSideBarShowing = false;

}

const toggleSideBar = () =>{
    if (isSideBarShowing) {
        hideSideBar();
    }
    else {
        showSideBar();
    }
}