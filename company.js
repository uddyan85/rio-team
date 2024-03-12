document.getElementById('menutoggle').addEventListener('click', function() {
    var menuBar = document.getElementById('menuBar');
    // Toggle the menu in mobile view only
    if (window.innerWidth <= 768) {
        menuBar.style.display = (menuBar.style.display === 'block') ? 'none' : 'block';
    }
});

// Add a resize event listener to handle cases where the window is resized across the mobile/desktop threshold
window.addEventListener('resize', function() {
    var menuBar = document.getElementById('menuBar');
    if (window.innerWidth > 768) {
        // Ensure the menu bar is shown in desktop view
        menuBar.style.display = 'block';
    } else {
        // Optionally hide the menu bar in mobile view or leave it according to its last toggled state
        // menuBar.style.display = 'none'; // Uncomment this if you want to ensure the menu bar is always hidden when resizing to mobile view
    }
});

function closeNav() {
    if (window.innerWidth <= 768) {
        document.getElementById('menuBar').style.display = 'none';
    }
}

$(".card").on("click", function(){
    $(".detail").addClass("active");
});

$(".close-detail").on("click", function(){
    $(".detail").removeClass("active")
});

// $(".menu-bar").on("click", function(){
//     $(".sidebar").addClass("active")
// });

// $(".logo").on("click", function(){
//     $(".sidebar").removeClass("active")
// });

