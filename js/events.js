document.getElementById('btn-add').addEventListener('click', () => {
    document.getElementById('column-list').classList.remove('col-md-12')
    document.getElementById('column-list').style.transition = 'all 0.5s'
    document.getElementById('column-list').classList.add('col-md-8')
    setTimeout(() => {
        document.getElementById('column-form').classList.remove('d-none')
    },500)
})

document.getElementById('btn-cancel').addEventListener('click', () => {
    document.getElementById('column-list').classList.remove('col-md-8')
    document.getElementById('column-list').classList.add('col-md-12')
    document.getElementById('column-form').classList.add('d-none')
})