// Fungsi animasi typing
function typeText(element, text, delay, callback) {
    let index = 0;
    let interval = setInterval(function() {
        if (index < text.length) {
            element.textContent += text[index]; // Menggunakan textContent untuk teks biasa
            index++;
        } else {
            clearInterval(interval);
            if (callback) callback(); // Jika ada callback, panggil setelah animasi selesai
        }
    }, delay);
}

// Event listener saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Animasi untuk 'Tentang Kami'
    const header = document.getElementById("typing-header");
    const paragraph = document.getElementById("typing-paragraph");

    header.textContent = '';
    paragraph.textContent = '';

    // Ketik judul 'Tentang Kami'
    typeText(header, "Tentang Kami", 200, function() {
        // Ketik paragraf setelah judul selesai
        typeText(paragraph, "HariTaniFoundation adalah lembaga donasi yang bergerak di bidang kemanusiaan, menyediakan berbagai macam bantuan untuk mendukung kesejahteraan masyarakat, mulai dari distribusi kebutuhan pokok, layanan kesehatan, hingga program pemberdayaan untuk meningkatkan kualitas hidup penerima manfaat.", 50);
    });

    // Animasi untuk 'Layanan Kami'
    const servicesText = document.getElementById("typing-services");
    servicesText.textContent = '';

    // Ketik teks 'Layanan Kami'
    typeText(servicesText, "Layanan kami mencakup seluruh wilayah Yang Ada Di Seluruh Dunia.", 100);

});
