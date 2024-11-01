document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdfViewer');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Liste des chemins des fichiers PDF
    const pdfFiles = [
        "documents/pdfs0.pdf",
        "documents/pdfs1.pdf",
        "documents/pdfs2.pdf",
        "documents/pdfs3.pdf",
        "documents/pdfs4.pdf",
        "documents/pdfs5.pdf",
        "documents/pdfs6.pdf",
        "documents/pdfs7.pdf",
    ];

    let currentIndex = 0;

    function updatePDF() {
        pdfViewer.src = `${pdfFiles[currentIndex]}#page=1`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updatePDF();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < pdfFiles.length - 1) {
            currentIndex++;
            updatePDF();
        }
    });

    updatePDF(); // Charge le premier PDF au démarrage
});
