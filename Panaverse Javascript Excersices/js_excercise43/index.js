const magicians_names = ["Jadoo1", "Jadoo2", "Jadoo3"];

function show_magicians(magicians){
    for(const magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians){
  for(let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i] + " the Great";
  }
}

const great_magicians = [...magicians_names]
make_great(great_magicians)

show_magicians(magicians_names)
show_magicians(great_magicians)