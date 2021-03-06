const h1 = document.createElement('h1')
h1.textContent = '오늘 할 일 목록'
document.body.appendChild(h1)

const input = document.createElement('input')
document.body.appendChild(input)

const addButton = document.createElement('button')
addButton.textContent = '추가하기'
document.body.appendChild(addButton)
addButton.addEventListener('click', () => {
  if (input.value !== '') { //비어있는 문자열이 아닌경우에만 내부 코드 실행
  const div = document.createElement('div')
  document.body.appendChild(div)

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
    div.style.textDecoration = 'line-through'
    } else {
      div.style.textDecoration = ''
    }
  })
  div.appendChild(checkbox)

  const span = document.createElement('span')
  span.textContent = input.value
  input.value = ''
  div.appendChild(span)

  const deleteButton = document.createElement('button')
  deleteButton.textContent = '제거하기'
  deleteButton.addEventListener('click', () => {
    div.parentNode.removeChild(div)
  })
  div.appendChild(deleteButton)
  }
})