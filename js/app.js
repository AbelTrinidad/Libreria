// 
const g_libros = [];

let g_genId = 100;
let g_posicion_edit = -1;

/**
 * 
 */
function init() {
    console.log("pagina completamente cargada..");
    fnUpdateList();
    document.getElementById("btnEditar").disabled = true;
}

/**
 * 
 * @returns 
 */
function fnGuardar() {

    const result = window.confirm("Está seguro que desea guardar este libro?");

    if (!result) { console.log("Accion cancelada por el usuario"); return; }

    const titulo = document.getElementById("txtTitulo").value;
    const edicion = document.getElementById("txtEdicion").value;
    const editorial = document.getElementById("txtEditorial").value;
    const autor = document.getElementById("txtAutor").value;

    if (validarTexto(titulo) && validarTexto(edicion) && validarTexto(editorial) && validarTexto(autor)) {

        const libroTmp = new Libro(g_genId++, titulo, parseInt(edicion), editorial, autor);

        g_libros.push(libroTmp);

        alert("Libro creado con éxito!");

        fnUpdateList();

        fnReset();
    } else {
        alert("Debe completar todos los campos para poder guardar");
    }
}

/**
 * 
 */
function fnUpdateList() {
    const buff = [];

    if (g_libros.length == 0) {
        buff.push("No existen libros creados!");
    } else {

        buff.push("<table>");
        buff.push("<thead><tr><th>Titulo</th><th>Año Edición</th><th>Editorial</th><th>Autor</th><th>Acción</th></tr></thead>");
        buff.push("<tbody>");

        for (let libro of g_libros) {
            buff.push("<tr>");
            buff.push("<td>" + libro.titulo + "</td>");
            buff.push("<td>" + libro.edicion + "</td>");
            buff.push("<td>" + libro.editorial + "</td>");
            buff.push("<td>" + libro.autor + "</td>");
            buff.push("<td>");
            buff.push("<a href='javascript:fnBorrar(" + libro.id + ")'>borrar</a>");
            buff.push(" | ");
            buff.push("<button onclick='fPrepEdicion(" + libro.id + ")'>editar</button>");
            buff.push("</td>");
            buff.push("</tr>");



        }

        buff.push("</tbody>");
        buff.push("</table>");
    }
    document.getElementById("divTabla").innerHTML = buff.join("\n");
}


function fnBorrar(libroId) {
    //console.log("a punto de borrar un libro ", libroId);
    if (confirm("Seguro de borrar este libro?")) {
        const posLibro = fnPosicion(libroId);

        if (posLibro !== -1) {
            g_libros.splice(posLibro, 1);

            fnUpdateList();

            console.log("Libro ", libroId, " borrado exitosamente!");
        }
    }
}



function fPrepEdicion(libroId) {

    let posicion = fnPosicion(libroId);
    if (posicion === -1) return;

    let l_aux = g_libros[posicion];
    g_posicion_edit = posicion;
    
    document.getElementById("txtTitulo").value = l_aux.titulo;
    document.getElementById("txtEdicion").value = l_aux.edicion;
    document.getElementById("txtEditorial").value = l_aux.editorial;
    document.getElementById("txtAutor").value = l_aux.autor;




    
    let btnSave = document.getElementById("btnGuardar");
    btnSave.style = "display: none";
    btnSave.disabled = true;

    let btnEdit = document.getElementById("btnEditar")
    btnEdit.style = "display: inline";
    btnEdit.disabled = false;


}


function fnEditar() {
    let lib_edit = g_libros[g_posicion_edit];
    
    let titulo = document.getElementById("txtTitulo").value;
    let edicion = document.getElementById("txtEdicion").value;
    let editorial = document.getElementById("txtEditorial").value;
    let autor = document.getElementById("txtAutor").value;
    

    if (validarTexto(titulo) && validarTexto(edicion) && validarTexto(editorial) && validarTexto(autor)) {
        lib_edit.titulo = titulo;
        lib_edit.edicion = edicion;
        lib_edit.editorial = editorial;
        lib_edit.autor = autor;
        fnUpdateList();
        fnReset();
        
        let btnSave = document.getElementById("btnGuardar");
        btnSave.style = "display: inline";
        btnSave.disabled = false;

        let btnEdit = document.getElementById("btnEditar")
        btnEdit.style = "display: none";
        btnEdit.disabled = true;
    }else{
        alert("Debe completar todos los campos para poder guardar la edicion");
    }

    
}

/**
 * 
 * @param {*} libroId 
 * @returns 
 */
function fnPosicion(libroId) {
    for (let i = 0; i < g_libros.length; i++) {
        if (g_libros[i].id === libroId) return i;
    }
    return -1;
}

/**
 * 
 */
function fnReset() {
    document.getElementById("txtTitulo").value = "";
    document.getElementById("txtEdicion").value = "";
    document.getElementById("txtEditorial").value = "";
    document.getElementById("txtAutor").value = "";

    document.getElementById("txtTitulo").focus();
}


function validarTexto(text) {
    return text === "" ? false : true;
}

