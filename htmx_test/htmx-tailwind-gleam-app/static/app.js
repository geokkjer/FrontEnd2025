document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("load-content");
    const contentDiv = document.getElementById("content");

    button.addEventListener("click", function() {
        htmx.ajax("GET", "/api/content", {
            target: "#content",
            swap: "innerHTML"
        });
    });
});