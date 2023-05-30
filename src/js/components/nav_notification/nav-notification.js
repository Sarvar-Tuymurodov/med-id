const notificationIcon = document.getElementById("notificationIcon");
const addNewNotification = document.getElementById("notificationAddNew");
const notificationIconCount = document.getElementById("notificationIconCount");
const notificationIconRing = document.getElementById("notificationIconRing");
const tooltip = ``;

notificationIcon.addEventListener("click", function (){
    if(notificationIcon.classList.contains("active"))
    {
        notificationIcon.classList.remove("active");
        addNewNotification.classList.remove("deactivated");
    }
    else {
        notificationIcon.classList.add("active");
        addNewNotification.classList.add("deactivated");

    }
});


addNewNotification.addEventListener("click", function (){
    if(notificationIcon.classList.contains("active"))
    {
        notificationIcon.classList.remove("active");
        addNewNotification.classList.remove("deactivated");
    }
});

notificationIcon.addEventListener("mouseleave", function (){

});


notificationIcon.addEventListener("mouseover", function (){

});

