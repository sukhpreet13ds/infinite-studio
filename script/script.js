document.addEventListener('DOMContentLoaded', () => {
    // Select selectors
    const mobileBurgerTrigger = document.querySelector('.mobile-burger-trigger');
    const desktopBurgerTrigger = document.querySelector('.desktop-burger-trigger');
    const closeMobileSidebar = document.getElementById('close-mobile-sidebar');
    const closeDesktopSidebar = document.getElementById('close-desktop-sidebar');
    
    const mobileSidebarOverlay = document.getElementById('mobile-sidebar-overlay');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const desktopSidebarOverlay = document.getElementById('desktop-sidebar-overlay');
    const desktopSidebar = document.getElementById('desktop-sidebar');

    // Helper functions to open/close
    function openSidebar(overlay, drawer) {
        overlay.classList.add('active');
        setTimeout(() => {
            drawer.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeSidebar(overlay, drawer) {
        drawer.classList.remove('active');
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 300); // Match CSS transition duration
        document.body.style.overflow = ''; // Re-enable background scrolling
    }

    // Event listeners
    if (mobileBurgerTrigger) {
        mobileBurgerTrigger.addEventListener('click', () => {
            openSidebar(mobileSidebarOverlay, mobileSidebar);
        });
    }

    if (desktopBurgerTrigger) {
        desktopBurgerTrigger.addEventListener('click', () => {
            openSidebar(desktopSidebarOverlay, desktopSidebar);
        });
    }

    if (closeMobileSidebar) {
        closeMobileSidebar.addEventListener('click', () => {
            closeSidebar(mobileSidebarOverlay, mobileSidebar);
        });
    }

    if (closeDesktopSidebar) {
        closeDesktopSidebar.addEventListener('click', () => {
            closeSidebar(desktopSidebarOverlay, desktopSidebar);
        });
    }

    // Close on overlay click
    if (mobileSidebarOverlay) {
        mobileSidebarOverlay.addEventListener('click', (e) => {
            if (e.target === mobileSidebarOverlay) {
                closeSidebar(mobileSidebarOverlay, mobileSidebar);
            }
        });
    }

    if (desktopSidebarOverlay) {
        desktopSidebarOverlay.addEventListener('click', (e) => {
            if (e.target === desktopSidebarOverlay) {
                closeSidebar(desktopSidebarOverlay, desktopSidebar);
            }
        });
    }

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mobileSidebarOverlay.classList.contains('active')) {
                closeSidebar(mobileSidebarOverlay, mobileSidebar);
            }
            if (desktopSidebarOverlay.classList.contains('active')) {
                closeSidebar(desktopSidebarOverlay, desktopSidebar);
            }
        }
    });

    // Close mobile menu when a navigation item is clicked
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            closeSidebar(mobileSidebarOverlay, mobileSidebar);
        });
    });
});
