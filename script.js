function openModal() {
    const modal = document.getElementById('topupModal');
    modal.classList.remove('hidden');
    // এনিমেশনের জন্য সামান্য ডিলে
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('topupModal');
    modal.classList.remove('show');
    // এনিমেশন শেষ হওয়ার পর হাইড করা
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// মোডালের বাইরে ক্লিক করলে বন্ধ হবে
document.getElementById('topupModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
