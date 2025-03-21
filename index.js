
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); // Tag mit führender Null
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Monat mit führender Null (Monate sind 0-indexiert)
    const year = date.getFullYear(); // Jahr
    return `${day}-${month}-${year}`; // Formatierung des Datums
}
// Heute-Datum in das gewünschte Format setzen
document.getElementById("heute").textContent = formatDate(new Date());



// Category-menu
const container = document.querySelector(".container");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleSreen = () => {
    container.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleSreen);
backBtn.addEventListener("click", toggleSreen);

