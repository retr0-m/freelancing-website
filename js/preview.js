function openPreview(projectName) {
    const mainElement = document.querySelector("main");
    const previewIframe = document.createElement("iframe");
    const closePreviewLink = document.createElement("a");
    closePreviewLink.textContent = "Chiudi anteprima";
    closePreviewLink.href = "#";
    closePreviewLink.className = "btn ghost";
    closePreviewLink.style.display = "block";
    closePreviewLink.style.marginBottom = "10px";
    closePreviewLink.onclick = function (event) {
        event.preventDefault();
        mainElement.innerHTML = "";
        location.reload();
    };

    previewIframe.src = `./${projectName}/index.html`;
    previewIframe.style.width = "100%";
    previewIframe.style.height = "80vh";
    previewIframe.style.border = "none";
    mainElement.innerHTML = "";
    mainElement.appendChild(closePreviewLink);
    mainElement.appendChild(previewIframe);
}