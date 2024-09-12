document.getElementById("addition").addEventListener("click", () => redirectToDifficultyPage("Optellen"));
document.getElementById("substraction").addEventListener("click", () => redirectToDifficultyPage("Aftrekken"));
document.getElementById("multiplication").addEventListener("click", () => redirectToDifficultyPage("Vermenigvuldigen"));
document.getElementById("mixed").addEventListener("click", () => redirectToDifficultyPage("Alles gemixt"));
document.getElementById("division").addEventListener("click", () => redirectToDifficultyPage("Delen"));

function redirectToDifficultyPage(category) {
    console.log(1);
    localStorage.setItem('selectedCategory', category);
    window.location.href = '../menu/difficulty/difficulty.php';
}