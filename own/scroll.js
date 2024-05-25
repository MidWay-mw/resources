(function() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        ::-webkit-scrollbar {
            background: #0f0f0f;
            width: 13px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #212121;
            cursor: grab;
        }
        :root {
            scroll-behavior: smooth;
        }
    `;
    document.head.appendChild(style);
})();
