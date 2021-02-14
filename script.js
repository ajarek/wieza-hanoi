function dragstart_handler(ev) {
     
    ev.currentTarget.style.border = `none `;
    // Ustaw format i dane przeciągania. 
    ev.dataTransfer.setData("text/plain", ev.target.id);
   }
   
   function dragover_handler(ev) {
   
    ev.preventDefault();
   }
   
   function drop_handler(ev) {
    
    ev.preventDefault();
    // Pobierz dane, czyli identyfikator celu upuszczenia
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // Wyczyść pamięć podręczną danych przeciągania (dla wszystkich formatów / typów)
    ev.dataTransfer.clearData();
   }