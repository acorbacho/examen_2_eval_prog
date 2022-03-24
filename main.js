function main() {
  var jugador_piedra = document.getElementById('piedra')
  var jugador_papel = document.getElementById('papel')
  var jugador_tijera = document.getElementById('tijera')
  var resultado = document.getElementById('resultado')
  var opcion_mas_usada = document.getElementById('opcion_mas_usada')
  var eleccion_mas_usada
  var rondas_ganadas_id = document.getElementById('rondas_ganadas')
  var rondas_totales_id = document.getElementById('rondas_jugadas')
  var rondas_ganadas = 0
  var rondas_totales = 0
  var contador_piedra = 0
  var contador_papel = 0
  var contador_tijera = 0
  var eleccion_maquina
  var eleccion_jugador


  loadData()


  jugador_piedra.addEventListener('click', () => {
    pickPiedra()
  })

  jugador_papel.addEventListener('click', () => {
    pickPapel()
  })

  jugador_tijera.addEventListener('click', () => {
    pickTijera()
  })

  function pickPiedra() {
    eleccion_jugador = 0
    contador_piedra++
    eleccion_maquina = numero_random(0, 2)
    Ganador()
    Estadisticas()
    saveData()
    rondas_totales_id.innerHTML = rondas_totales
    rondas_ganadas_id.innerHTML = rondas_ganadas
    opcion_mas_usada.innerHTML = eleccion_mas_usada
  }

  function pickPapel() {
    eleccion_jugador = 1
    contador_papel++
    eleccion_maquina = numero_random(0, 2)
    Ganador()
    Estadisticas()
    saveData()
    rondas_totales_id.innerHTML = rondas_totales
    rondas_ganadas_id.innerHTML = rondas_ganadas
    opcion_mas_usada.innerHTML = eleccion_mas_usada
  }

  function pickTijera() {
    eleccion_jugador = 2
    contador_tijera++
    eleccion_maquina = numero_random(0, 2)
    Ganador()
    Estadisticas()
    saveData()
    rondas_totales_id.innerHTML = rondas_totales
    rondas_ganadas_id.innerHTML = rondas_ganadas
    opcion_mas_usada.innerHTML = eleccion_mas_usada
  }

  function Ganador() {

    if (eleccion_jugador == eleccion_maquina) {
      resultado.innerHTML = 'Empate'
      rondas_totales++
    } else if (eleccion_jugador == 0 && eleccion_maquina == 1) {
      resultado.innerHTML = 'Gana la máquina'
      rondas_totales++
    } else if (eleccion_jugador == 0 && eleccion_maquina == 2) {
      resultado.innerHTML = 'Gana el jugador'
      rondas_totales++
      rondas_ganadas++
    } else if (eleccion_jugador == 1 && eleccion_maquina == 0) {
      resultado.innerHTML = 'Gana el jugador'
      rondas_totales++
      rondas_ganadas++
    } else if (eleccion_jugador == 1 && eleccion_maquina == 2) {
      resultado.innerHTML = 'Gana la máquina'
      rondas_totales++
    } else if (eleccion_jugador == 2 && eleccion_maquina == 0) {
      resultado.innerHTML = 'Gana la máquina'
      rondas_totales++
    } else if (eleccion_jugador == 2 && eleccion_maquina == 1) {
      resultado.innerHTML = 'Gana el jugador'
      rondas_totales++
      rondas_ganadas++
    }
  }

  function Estadisticas() {
    if (contador_piedra > contador_papel) {
      if (contador_piedra > contador_tijera) {
        opcion_mas_usada.innerHTML = contador_piedra
        eleccion_mas_usada = 'Piedra'
      } else {
        opcion_mas_usada.innerHTML = contador_tijera
        eleccion_mas_usada = 'Tijera'
      }
    } else if (contador_papel > contador_tijera) {
      opcion_mas_usada.innerHTML = contador_papel
      eleccion_mas_usada = 'Papel'
    } else {
      opcion_mas_usada.innerHTML = contador_tijera
      eleccion_mas_usada = 'Tijera'
    }

  }

  function saveData() {
    localStorage.setItem('most_used', eleccion_mas_usada)
    localStorage.setItem('rounds_won', rondas_ganadas)
    localStorage.setItem('rounds_played', rondas_totales)
    localStorage.setItem('piedras', contador_piedra)
    localStorage.setItem('papeles', contador_papel)
    localStorage.setItem('tijeras', contador_tijera)

  }

  function loadData() {
    rondas_totales = localStorage.getItem('rounds_played')
    rondas_totales_id.innerHTML = rondas_totales
    rondas_ganadas = localStorage.getItem('rounds_won')
    rondas_ganadas_id.innerHTML = rondas_ganadas
    eleccion_mas_usada = localStorage.getItem('most_used')
    rondas_ganadas_id.innerHTML = eleccion_mas_usada
  }
}
main()
