var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    console.log('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

let h1 = $('h1');
let label = $('small');

console.log(escritorio);
h1.text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);

        if (resp === 'No hay tickets para atender') {
            alert(resp);
            label.text(' Nadie ');
            return;
        }

        label.text(' Ticket ' + resp.numero);

    });
})