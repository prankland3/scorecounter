let home_el = document.getElementById("score-home")
let guest_el = document.getElementById("score-guest")
let result_home = 0
let result_guest = 0

function add_home(n){

    result_home += n
    home_el.textContent = result_home 
}

function add_guest(n){
    result_guest += n
    guest_el.textContent = result_guest 
}


function new_game(){
  result_home = 0
  result_guest = 0
  guest_el.textContent = result_guest  
  home_el.textContent = result_home 
  
}
