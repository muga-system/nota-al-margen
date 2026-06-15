// js/main.js

const ARTICLE_PATH = "./content/article.md";
const NOTES_STORAGE_KEY = "nota-al-margen:notes";

const articleTitle = document.querySelector("#article-title");
const articleContent = document.querySelector("#articleContent");

const noteForm = document.querySelector("#noteForm");
const noteInput = document.querySelector("#noteInput");
const notesList = document.querySelector("#notesList");
const notesCounter = document.querySelector("#notesCounter");
const clearNotesButton = document.querySelector("#clearNotesButton");

document.addEventListener("DOMContentLoaded", init);

async function init() {
    await loadArticle();
    renderNotes();

    noteForm.addEventListener("submit", handleNoteSubmit);
    clearNotesButton.addEventListener("click", handleClearNotes);
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

function handleNoteSubmit(event) {
    event.preventDefault();

    const noteText = noteInput.value.trim();

    if (!noteText) {
        return;
    }

    const notes = getStoredNotes();

    const newNote = {
        id: crypto.randomUUID(),
        text: noteText,
        createdAt: new Date().toISOString(),
    };

    const updatedNotes = [newNote, ...notes];

    saveNotes(updatedNotes);
    renderNotes();

    noteForm.reset();
    noteInput.focus();
}

function handleClearNotes() {
    const notes = getStoredNotes();

    if (notes.length === 0) {
        return;
    }

    localStorage.removeItem(NOTES_STORAGE_KEY);
    renderNotes();
}

function getStoredNotes() {
    const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);

    if (!storedNotes) {
        return [];
    }

    try {
        return JSON.parse(storedNotes);
    } catch (error) {
        console.error("No se pudieron leer las notas guardadas.", error);
        return [];
    }
}

function saveNotes(notes) {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

function renderNotes() {
    const notes = getStoredNotes();

    notesList.innerHTML = "";
    notesCounter.textContent = getNotesCounterText(notes.length);
    clearNotesButton.disabled = notes.length === 0;

    if (notes.length === 0) {
        const emptyState = document.createElement("li");
        emptyState.className = "empty-state";
        emptyState.textContent = "Todavía no hay notas guardadas.";

        notesList.appendChild(emptyState);
        return;
    }

    notes.forEach((note) => {
        const noteItem = document.createElement("li");
        noteItem.className = "note-card";

        const noteText = document.createElement("p");
        noteText.className = "note-card-text";
        noteText.textContent = note.text;

        const noteDate = document.createElement("time");
        noteDate.className = "note-card-date";
        noteDate.dateTime = note.createdAt;
        noteDate.textContent = formatNoteDate(note.createdAt);

        noteItem.append(noteText, noteDate);
        notesList.appendChild(noteItem);
    });
}

function getNotesCounterText(totalNotes) {
    if (totalNotes === 1) {
        return "1 nota guardada";
    }

    return `${totalNotes} notas guardadas`;
}

function formatNoteDate(date) {
    return new Intl.DateTimeFormat("es-AR", {
        dateStyle: "short",
        timeStyle: "short",
    }).format(new Date(date));
}
