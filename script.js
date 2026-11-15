// BibleEra Explorer starter data. Events follow a broad biblical narrative sequence.
// Some biblical events are difficult to date historically, so dates are intentionally omitted.
const events = [
  { id: 'creation', title: 'Creation', testament: 'old', era: 'Beginnings', summary: 'The Bible opens with God creating the heavens, earth, and life.', description: 'Genesis begins with the creation of the world and introduces humanity. It sets the stage for the stories that follow.', people: 'God, Adam, Eve', scripture: 'Genesis 1–2', keywords: 'beginning adam eve world' },
  { id: 'fall', title: 'The Garden of Eden', testament: 'old', era: 'Beginnings', summary: 'Adam and Eve disobey God in the garden.', description: 'Genesis describes Adam and Eve making a choice that changes their life in Eden. The account introduces major themes of human choices and their consequences.', people: 'Adam, Eve, the serpent', scripture: 'Genesis 3', keywords: 'fall garden sin' },
  { id: 'flood', title: 'Noah and the Flood', testament: 'old', era: 'Beginnings', summary: 'Noah builds an ark as a flood covers the earth in the biblical account.', description: 'God tells Noah to build an ark. After the flood, the story describes a covenant and the rainbow as its sign.', people: 'Noah and his family', scripture: 'Genesis 6–9', keywords: 'ark rainbow covenant' },
  { id: 'abraham', title: 'God Calls Abraham', testament: 'old', era: 'Patriarchs', summary: 'Abraham is called to leave his home and receives a promise from God.', description: 'God calls Abram, later named Abraham, to journey to a new land and promises that his family will become a great nation. His story is central to the biblical account of Israel.', people: 'Abraham, Sarah', scripture: 'Genesis 12:1–9; Genesis 17', keywords: 'abr am sarai promise' },
  { id: 'joseph', title: 'Joseph in Egypt', testament: 'old', era: 'Patriarchs', summary: 'Joseph’s journey takes him from betrayal to a position of leadership in Egypt.', description: 'Joseph is sold by his brothers and eventually rises to power in Egypt. His story connects the family of Jacob to the Israelites’ later life in Egypt.', people: 'Joseph, Jacob, Joseph’s brothers', scripture: 'Genesis 37; Genesis 41–45', keywords: 'dreams famine egypt' },
  { id: 'exodus', title: 'Moses and the Exodus', testament: 'old', era: 'Exodus', summary: 'Moses leads the Israelites out of Egypt.', description: 'The book of Exodus describes God calling Moses, the confrontation with Pharaoh, and the Israelites leaving Egypt. The journey continues into the wilderness.', people: 'Moses, Aaron, Pharaoh, Israelites', scripture: 'Exodus 3; Exodus 12–14', keywords: 'red sea freedom passover' },
  { id: 'david', title: 'David Becomes King', testament: 'old', era: 'Kingdom', summary: 'David becomes a major king in Israel’s history.', description: 'David is anointed while still young and later becomes king. His life is part of the story of Israel’s monarchy.', people: 'David, Samuel, Saul', scripture: '1 Samuel 16; 2 Samuel 5', keywords: 'king israel kingdom' },
  { id: 'exile', title: 'Jerusalem and the Exile', testament: 'old', era: 'Exile', summary: 'Jerusalem falls and many people of Judah are taken into exile.', description: 'The destruction of Jerusalem and the Babylonian exile mark a major turning point. The prophets and later books reflect on loss, hope, and return.', people: 'People of Judah, Nebuchadnezzar, Jeremiah', scripture: '2 Kings 25; Jeremiah 29', keywords: 'babylon exile jerusalem' },
  { id: 'jesus-birth', title: 'The Birth of Jesus', testament: 'new', era: 'Life of Jesus', summary: 'The Gospels tell of Jesus being born in Bethlehem.', description: 'Matthew and Luke tell the story of Jesus’ birth, connecting it to the wider biblical story and introducing the setting of his life.', people: 'Jesus, Mary, Joseph', scripture: 'Matthew 1–2; Luke 1–2', keywords: 'christ christmas bethlehem' },
  { id: 'ministry', title: 'Jesus Teaches and Heals', testament: 'new', era: 'Life of Jesus', summary: 'Jesus teaches about God’s kingdom and cares for people.', description: 'The Gospels describe Jesus teaching, telling parables, healing, and gathering disciples. These accounts are central to his public ministry.', people: 'Jesus, disciples, people of Galilee and Judea', scripture: 'Matthew 5–7; Mark 1–2', keywords: 'sermon miracles ministry parables' },
  { id: 'resurrection', title: 'Death and Resurrection of Jesus', testament: 'new', era: 'Life of Jesus', summary: 'The Gospels describe Jesus’ crucifixion and resurrection.', description: 'The New Testament presents Jesus’ death and resurrection as central to Christian faith. The Gospel accounts tell how his followers responded.', people: 'Jesus, Mary Magdalene, the disciples', scripture: 'Luke 23–24; John 19–20', keywords: 'cross easter crucifixion' },
  { id: 'pentecost', title: 'Pentecost and the Early Church', testament: 'new', era: 'Early Church', summary: 'The book of Acts describes the coming of the Holy Spirit and the growth of the church.', description: 'Acts describes the disciples gathering at Pentecost, Peter speaking to the crowd, and the beginning of a growing community of believers.', people: 'Peter, apostles, early believers', scripture: 'Acts 2', keywords: 'holy spirit church apostles' }
];

const list = document.querySelector('#timeline-list');
if (list) {
const searchInput = document.querySelector('#event-search');
const filterButtons = document.querySelectorAll('[data-filter]');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const dialog = document.querySelector('#event-dialog');
let activeFilter = 'all';

document.querySelector('#event-total').textContent = events.length;

function artForEvent(id) {
  const icons = {
    creation: '☀', fall: '♧', flood: '≋', abraham: '✧', joseph: '✦', exodus: '〰',
    david: '♛', exile: '⌂', 'jesus-birth': '★', ministry: '✳', resurrection: '✝', pentecost: '✷'
  };
  return icons[id] || '✦';
}
function renderEvents() {
  const search = searchInput.value.trim().toLowerCase();
  const visible = events.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.testament === activeFilter;
    const searchableText = [event.title, event.summary, event.description, event.people, event.scripture, event.era, event.keywords].join(' ').toLowerCase();
    return matchesFilter && searchableText.includes(search);
  });
  list.replaceChildren();
  visible.forEach(event => {
    const index = events.indexOf(event) + 1;
    const item = document.createElement('article');
    item.className = 'timeline-event';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'event-card';
    button.setAttribute('aria-label', `Read about ${event.title}`);
    // All HTML here is local, curated data, not external input.
    button.innerHTML = `<div class="card-top"><span class="event-era">${event.era}</span><span class="event-number">EVENT ${String(index).padStart(2, '0')}</span></div><div class="event-card-main"><span class="event-art art-${event.testament}" aria-hidden="true">${artForEvent(event.id)}</span><div class="event-copy"><h3>${event.title}</h3><p>${event.summary}</p></div></div><div class="card-footer">Read the story <span aria-hidden="true">→</span></div>`;
    button.addEventListener('click', () => openEvent(event));
    item.append(button);
    list.append(item);
  });
  resultCount.textContent = `${visible.length} ${visible.length === 1 ? 'event' : 'events'} shown`;
  emptyState.hidden = visible.length !== 0;
}
function openEvent(event) {
  document.querySelector('#dialog-category').textContent = `${event.testament === 'old' ? 'OLD TESTAMENT' : 'NEW TESTAMENT'} · ${event.era.toUpperCase()}`;
  document.querySelector('#dialog-title').textContent = event.title;
  document.querySelector('#dialog-description').textContent = event.description;
  document.querySelector('#dialog-people').textContent = event.people;
  document.querySelector('#dialog-scripture').textContent = event.scripture;
  document.querySelector('#full-story-link').href = `story.html?event=${encodeURIComponent(event.id)}`;
  dialog.showModal();
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(other => {
    const active = other === button;
    other.classList.toggle('active', active);
    other.setAttribute('aria-pressed', String(active));
  });
  renderEvents();
}));
searchInput.addEventListener('input', renderEvents);
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
renderEvents();

}
