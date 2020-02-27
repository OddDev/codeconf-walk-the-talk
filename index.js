function renderList() {
  recipelist.innerHTML = ''
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('editor')) {
      return;
    }
    const currentDescription = localStorage.getItem(key)
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const button = document.createElement('button')
    button.addEventListener('click', () => {
      localStorage.removeItem(key)
      renderList()
    })
    button.append('Remove Recipe')
    h3.append(key)
    p.append(currentDescription)
    const li = document.createElement('li')
    li.append(h3, p, button)
    recipelist.append(li)
  });
}

renderList()

addrecipe.addEventListener('click', () => {
  localStorage.setItem(recipetitle.value, recipedescription.value)
  renderList()
})
