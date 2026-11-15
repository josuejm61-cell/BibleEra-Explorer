// Uses the curated events array from script.js. No backend or API key required.
const params = new URLSearchParams(window.location.search);
const storyId = params.get('event');
const selected = events.find(event => event.id === storyId);
const el = (id) => document.getElementById(id);
if (!selected) {
  document.title = 'Story Not Found | BibleEra Explorer';
  el('story-title').textContent = 'Story not found';
  el('story-summary').textContent = 'Please choose an event from the timeline.';
  el('story-details').hidden = true;
} else {
  const icons = {creation:'☀',fall:'♧',flood:'≋',abraham:'✧',joseph:'✦',exodus:'〰',david:'♛',exile:'⌂','jesus-birth':'★',ministry:'✳',resurrection:'✝',pentecost:'✷'};
  document.title = `${selected.title} | BibleEra Explorer`;
  el('story-era').textContent = `${selected.testament === 'old' ? 'OLD TESTAMENT' : 'NEW TESTAMENT'} · ${selected.era.toUpperCase()}`;
  el('story-title').textContent = selected.title;
  el('story-summary').textContent = selected.summary;
  el('story-description').textContent = selected.description;
  el('story-people').textContent = selected.people;
  el('story-scripture').textContent = selected.scripture;
  el('story-icon').textContent = icons[selected.id] || '✦';
  const current = events.indexOf(selected);
  const prev = events[current - 1], next = events[current + 1];
  if (prev) { el('previous-story').href = `story.html?event=${encodeURIComponent(prev.id)}`; el('previous-story').textContent = `← ${prev.title}`; }
  else el('previous-story').hidden = true;
  if (next) { el('next-story').href = `story.html?event=${encodeURIComponent(next.id)}`; el('next-story').textContent = `${next.title} →`; }
  else el('next-story').hidden = true;
}
