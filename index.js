// browser version

const frame = document.getElementById("toolFrame");
document.querySelectorAll(".nav-btn[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    frame.src = btn.dataset.target;
  });
});
