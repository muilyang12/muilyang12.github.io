const detailButtons = document.querySelectorAll('.btn-detail');
    
detailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.showModal();
            document.body.style.overflow = 'hidden';
        }
    });
});

const modals = document.querySelectorAll('.detail-modal');
modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close-modal');
    
    const closeModal = () => {
        modal.close();
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});