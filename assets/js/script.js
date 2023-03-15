const addTaskBtn = document.querySelector('#add-task') //document.getElementById('add-task')

addTaskBtn.addEventListener('click', e => {
    e.preventDefault()
    const titleTask = document.getElementById('text-task').value
    const dateTask = document.getElementById('date-task').value

    if (!titleTask)  return alert('No hay nada en el campo de titulo de la tarea')

    if (titleTask.length < 6) return alert('Minimo 6 caracteres')

    const fragment = document.createDocumentFragment();
    const article = document.createElement('article');

    let div;
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    div = document.createElement('div');
    div.classList.add('checkbox')
    div.appendChild(input)
    
    article.appendChild(div)

    let p = document.createElement('p');
    p.textContent = titleTask;
    div = document.createElement('div');
    div.classList.add('taskname')
    div.appendChild(p)
    
    article.appendChild(div)

    let span = document.createElement('span');
    span.textContent = '*'
    p = document.createElement('p');
    p.appendChild(span)
    p.appendChild(document.createTextNode(
        new Date(dateTask).toLocaleDateString()
    ))
    div = document.createElement('div');
    div.classList.add('date')
    div.appendChild(p)
    
    article.appendChild(div)

    let span1 = document.createElement('span');
    span1.classList.add('edit')
    span1.textContent = '*'
    let span2 = document.createElement('span');
    span2.classList.add('delete')
    span2.textContent = '*'
    let p1 = document.createElement('p');
    p1.appendChild(span1)
    let p2 = document.createElement('p');
    p2.appendChild(span2)
    let div1 = document.createElement('div');
    div1.classList.add('options')
    div1.appendChild(p1)
    div1.appendChild(p2)
    
    div = document.createElement('div')
    div.appendChild(div1)

    span = document.createElement('span');
    span.textContent = '*'
    p = document.createElement('p');
    p.appendChild(span)
    p.appendChild(document.createTextNode(
        new Date(dateTask).toLocaleDateString()
    ))
    let div2 = document.createElement('div');
    div2.classList.add('date')
    div2.appendChild(p)
    
    div.appendChild(div2)
    div.classList.add('options-date')

    article.appendChild(div)
    
    fragment.appendChild(article);
    const task = document.querySelector('.task');
    task.appendChild(fragment);
})
