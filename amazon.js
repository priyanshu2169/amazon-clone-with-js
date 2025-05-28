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
    const animeContainer = document.querySelector('.anime');
    document.querySelector('.anime-arrow.left').onclick = () => {
        animeContainer.scrollBy({ left: -350, behavior: 'smooth' });
    };
    document.querySelector('.anime-arrow.right').onclick = () => {
        animeContainer.scrollBy({ left: 350, behavior: 'smooth' });
    };
document.getElementById('footer-signin-btn').onclick = function() {
    window.location.href = "sign-in.html";
};
document.getElementById('watch-naruto').onclick = function() {
    window.location.href = "https://www.primevideo.com/detail/0J1PEHY8YWITHZ9I3F15SVZE2M/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0CN1LXGMK&qid=1748461312137";
};
document.getElementById('watch-demonslayer').onclick = function() {
    window.location.href = "https://www.primevideo.com/detail/0HLMR6SUCTQ0OGDTWO5IZ90U3X/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0DTV794QR&qid=1748461646958";
};
document.getElementById('watch-onepiece').onclick = function() {
    window.location.href = "https://www.primevideo.com/detail/0OT5507PKVE6SZYW6EW8LQIYEN/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0CHNF4WJR&qid=1748461680786";
};
document.getElementById('watch-jujutsu').onclick = function() {
    window.location.href = "https://www.primevideo.com/detail/0JBCA7KSQGO9CC5SRPJLI8RDFX/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0CVMY2RM7&qid=1748461712752";
};
document.getElementById('watch-dragonball').onclick = function() {
    window.location.href = "https://www.primevideo.com/detail/0Q1IN4G6D9EM96JTXBVF19DLSP/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0BXRP4GRV&qid=1748461752583";
};