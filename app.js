function openPage(pageId){
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
}

function goHome(){
    document.getElementById("homePage").classList.remove("hidden");

    document.querySelectorAll(".subPage").forEach(page=>{
        page.classList.add("hidden");
    });
}
