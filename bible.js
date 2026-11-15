
const translation = document.getElementById("translation");
const book = document.getElementById("book");
const chapter = document.getElementById("chapter");
const content = document.getElementById("bible-content");
const readButton = document.getElementById("readButton");

const chapterCounts = {
  Genesis: 50,
  Exodus: 40,
  Psalms: 150,
  Matthew: 28,
  Mark: 16,
  Luke: 24,
  John: 21,
  Romans: 16,
  Revelation: 22
};

function updateChapters() {
  chapter.innerHTML = "";

  for (let i = 1; i <= chapterCounts[book.value]; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Chapter ${i}`;
    chapter.appendChild(option);
  }
}

async function readBible() {
  const selectedBook = book.value;
  const selectedChapter = chapter.value;
  const selectedTranslation = translation.value;

  content.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = `${selectedBook} ${selectedChapter}`;
  content.appendChild(heading);

  if (selectedTranslation === "rvr1960") {
    const message = document.createElement("p");
    message.textContent =
      "Read the Reina-Valera 1960 translation on Bible Gateway.";

    const link = document.createElement("a");
    const reference = `${selectedBook} ${selectedChapter}`;
    const url = new URL("https://www.biblegateway.com/passage/");
    url.searchParams.set("search", reference);
    url.searchParams.set("version", "RVR1960");

    link.href = url.toString();
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open Reina-Valera 1960";

    content.append(message, link);
    return;
  }

  content.appendChild(document.createTextNode("Loading chapter..."));

  try {
    const reference = encodeURIComponent(
      `${selectedBook} ${selectedChapter}`
    );

    const endpoint =
      selectedTranslation === "kjv"
        ? `https://bible-api.com/${reference}?translation=kjv`
        : `https://bible-api.com/${reference}?translation=web`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Unable to load chapter");
    }

    const data = await response.json();

    content.replaceChildren(heading);

    if (!Array.isArray(data.verses)) {
      throw new Error("No verses returned");
    }

    data.verses.forEach(verse => {
      const paragraph = document.createElement("p");

      const number = document.createElement("strong");
      number.textContent = `${verse.verse} `;

      paragraph.append(number, document.createTextNode(verse.text));
      content.appendChild(paragraph);
    });
  } catch (error) {
    content.replaceChildren(heading);

    const message = document.createElement("p");
    message.textContent =
      "The chapter could not be loaded. Check your connection and try again.";
    content.appendChild(message);
  }
}

book.addEventListener("change", updateChapters);
readButton.addEventListener("click", readBible);

updateChapters();
