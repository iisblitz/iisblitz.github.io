
const toggle = (id) => {
    let item = document.getElementById(id+'a')  
    item.classList.toggle('active')
    console.log(item.classList)
}