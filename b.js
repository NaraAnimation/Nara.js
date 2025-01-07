function previewData() {
            var nama = document.getElementById("nama").value;
            var pesan = document.getElementById("pesan").value;

var previewText = document.getElementById("previewText");
previewText.textContent = "Nama: " + nama + "\nPesan: " + pesan;

            var previewDiv = document.getElementById("preview");
            previewDiv.style.display = "block";
}
