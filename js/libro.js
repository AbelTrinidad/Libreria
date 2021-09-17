
function Libro(id, titulo, anhoEdicion, editorial, autor){
    this.id = id;
    this.titulo = titulo;
    this.edicion = anhoEdicion;
    this.editorial = editorial;
    this.autor = autor; // TODO: Cambiar por tipo object en lugar de String.

    this.archivar = function(){ console.log("libro archivado"); }
}

/*
let l1 = new Libro("Padre rico", 2000, "la editorial", "kiyosaki");
l1.titulo;

l1.archivar();
*/