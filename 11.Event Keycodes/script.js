const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>Event key</small>
</div>

<div class="key">
  ${event.keycode}
  <small>Event keycode</small>
</div>

<div class="key">
  ${event.code}
  <small>Event code</small>
</div>
  `
})