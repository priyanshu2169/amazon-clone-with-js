// Open sidebar on bars icon click
    document.querySelector('.fa-bars').addEventListener('click', function(event) {
        document.getElementById('menuSidebar').classList.add('open');
        event.stopPropagation();
    });
    // Close sidebar on close button click
    document.getElementById('closeMenuSidebar').addEventListener('click', function(e) {
        document.getElementById('menuSidebar').classList.remove('open');
        e.stopPropagation();
    });
    // Optional: Close sidebar when clicking outside
    window.addEventListener('click', function(e) {
        const sidebar = document.getElementById('menuSidebar');
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !document.querySelector('.fa-bars').contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });