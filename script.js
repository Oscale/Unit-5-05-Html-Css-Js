document.getElementById('cal').addEventListener('click', Calbutton)

let width = 0

let lenght = 0

function Calbutton () {
  width = document.getElementById('widthn').value
  lenght = document.getElementById('lenghtn').value

  width = parseFloat(width)
  lenght = parseFloat(lenght)

  alert(width * lenght)
}
