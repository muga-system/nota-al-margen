// js/main.js

const ARTICLE_PATH = "./content/article.md";

const articleTitle = document.querySelector("#article-title");
const articleContent = document.querySelector("#articleContent");

document.addEventListener("DOMContentLoaded", init);

async function init() {
    await loadArticle();
}

async function loadArticle() {
    try {
        const response = await fetch(ARTICLE_PATH);

        if (!response.ok) {
            throw new Error("No se pudo cargar el artículo.");
        }

        const markdown = await response.text();
        const article = parseMarkdown(markdown);

        articleTitle.textContent = article.title;
        articleContent.innerHTML = article.content;
    } catch (error) {
        articleTitle.textContent = "Error al cargar el artículo";
        articleContent.innerHTML =
            "<p>No se pudo cargar el contenido en Markdown.</p>";

        console.error(error);
    }
}

function parseMarkdown(markdown) {
    const lines = markdown
        .split("\n")
        .filter((line) => !line.trim().startsWith("<!--"));

    const titleLine = lines.find((line) => line.startsWith("# "));
    const title = titleLine ? titleLine.replace("# ", "").trim() : "Sin título";

    const content = lines
        .filter((line) => !line.startsWith("# "))
        .join("\n")
        .trim()
        .split("\n\n")
        .map((block) => renderMarkdownBlock(block))
        .join("");

    return {
        title,
        content,
    };
}

function renderMarkdownBlock(block) {
    const trimmedBlock = block.trim();

    if (trimmedBlock.startsWith("## ")) {
        return `<h3>${formatInlineMarkdown(trimmedBlock.replace("## ", ""))}</h3>`;
    }

    if (trimmedBlock.startsWith("- ")) {
        const items = trimmedBlock
            .split("\n")
            .map((item) => item.replace("- ", "").trim())
            .map((item) => `<li>${formatInlineMarkdown(item)}</li>`)
            .join("");

        return `<ul>${items}</ul>`;
    }

    return `<p>${formatInlineMarkdown(trimmedBlock)}</p>`;
}

function formatInlineMarkdown(text) {
    return text.replace(/`([^`]+)`/g, "<code>$1</code>");
}
