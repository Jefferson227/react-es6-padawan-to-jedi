document.addEventListener("DOMContentLoaded", function(event) { 
   var mouseOverHandler = function mouseOverHandler() {
		console.log('you moused over');
	};
    var clickhandler = function clickhandler() {
        console.log('you clicked');
    }
   var tableElement = React.createElement('table', {className: 'table-fill', onClick: clickhandler, onMouseOver: mouseOverHandler }, 
                            React.createElement('thead', null,
                                    React.createElement('tr', null, 
                                        React.createElement('th', {className: 'text-left'}, 'Mês'),
                                        React.createElement('th', {className: 'text-left'}, 'Vendas'))),
                            React.createElement('tbody', {className: 'table-hover'},
                                    React.createElement('tr', null, 
                                        React.createElement('td', {className: 'text-left'}, 'Janeiro'),
                                        React.createElement('td', {className: 'text-left'}, 'R$ 50.000')),
                                    React.createElement('tr', null, 
                                        React.createElement('td', {className: 'text-left'}, 'Fevereiro'),
                                        React.createElement('td', {className: 'text-left'}, 'R$ 50.000')),
                                    React.createElement('tr', null, 
                                        React.createElement('td', {className: 'text-left'}, 'Março'),
                                        React.createElement('td', {className: 'text-left'}, 'R$ 50.000')),
                                    React.createElement('tr', null, 
                                        React.createElement('td', {className: 'text-left'}, 'Abril'),
                                        React.createElement('td', {className: 'text-left'}, 'R$ 50.000')))
                                );
            
    ReactDOM.render(tableElement, document.getElementById('app'));
});
