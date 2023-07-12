// Ejercicio 1
window.addEventListener('DOMContentLoaded', () => 
    {
        const title = document.querySelector('title').textContent;
        console.log(title);
    }
);

// Ejercicio 2 / 3

window.addEventListener('DOMContentLoaded', () => 
    {
        const primerIntegrante = {
        primerNombre: document.querySelector('dl:nth-of-type(1) dd:nth-of-type(1)').textContent,
        primerApellido: document.querySelector('dl:nth-of-type(1) dd:nth-of-type(2)').textContent,
        segundoApellido: document.querySelector('dl:nth-of-type(1) dd:nth-of-type(3)').textContent,
        
        };
        const segundoIntegrante = {
            primerNombre: document.querySelector
            ('dl:nth-of-type(2) dd:nth-of-type(1)').textContent,
            segundoNombre: document.querySelector('dl:nth-of-type(2) dd:nth-of-type(2)').textContent,
            primerApellido: document.querySelector('dl:nth-of-type(2) dd:nth-of-type(3)').textContent,
            segundoApellido: document.querySelector('dl:nth-of-type(2) dd:nth-of-type(4)').textContent,

        };

        const integrante1NombreCompleto = `${primerIntegrante.primerNombre} ${primerIntegrante.primerApellido} ${primerIntegrante.segundoApellido}`;

        const integrante2NombreCompleto = `${segundoIntegrante.primerNombre} ${segundoIntegrante.segundoNombre ? segundoIntegrante.segundoNombre + ' ' : ''}${segundoIntegrante.primerApellido} ${segundoIntegrante.segundoApellido}`;


        console.log(
            '----- \n' + 
            'Integrante 1: ' + integrante1NombreCompleto + 
            ' \n' + 
            'Integrante 2: ' + integrante2NombreCompleto +
            ' \n' + 
            '-----'
            );

            //Ejercicio 4
            
            const nombresCoincidentes = [];

            // Comparar nombres
            if (
              (primerIntegrante.primerNombre === segundoIntegrante.primerNombre &&
                primerIntegrante.primerNombre !== '') ||
              (primerIntegrante.segundoNombre === segundoIntegrante.primerNombre &&
                primerIntegrante.segundoNombre !== '') ||
              (primerIntegrante.primerNombre === segundoIntegrante.segundoNombre &&
                primerIntegrante.primerNombre !== '') ||
              (primerIntegrante.segundoNombre === segundoIntegrante.segundoNombre &&
                primerIntegrante.segundoNombre !== '')
            ) {
              nombresCoincidentes.push(primerIntegrante.primerNombre);
              nombresCoincidentes.push(primerIntegrante.segundoNombre);
            }
          
            // Comparar apellidos (si se desea)
            const confirmCompareApellidos = confirm('¿Deseas comparar los apellidos?');
          
            if (confirmCompareApellidos) {
              if (
                (primerIntegrante.primerApellido === segundoIntegrante.primerApellido &&
                  primerIntegrante.primerApellido !== '') ||
                (primerIntegrante.segundoApellido === segundoIntegrante.primerApellido &&
                  primerIntegrante.segundoApellido !== '') ||
                (primerIntegrante.primerApellido === segundoIntegrante.segundoApellido &&
                  primerIntegrante.primerApellido !== '') ||
                (primerIntegrante.segundoApellido === segundoIntegrante.segundoApellido &&
                  primerIntegrante.segundoApellido !== '')
              ) {
                nombresCoincidentes.push(primerIntegrante.primerApellido);
                nombresCoincidentes.push(primerIntegrante.segundoApellido);
              }
            }
          
            if (nombresCoincidentes.length > 0) {
              console.log('Se encontraron coincidencias.');
          
              const colorDestacado = prompt('Ingresa un color para destacar los nombres coincidentes (por ejemplo, "red", "blue", "green":');
          
              for (let i = 1; i <= 2; i++) {
                const nombreElements = document.querySelectorAll(`dl:nth-of-type(${i}) dd:nth-of-type(1)`);
          
                nombreElements.forEach((element) => {
                  if (nombresCoincidentes.includes(element.textContent)) {
                    element.style.color = colorDestacado;
                  }
                });
              }
            } else {
              console.log('No se encontraron coincidencias.');
            }
    }

    
);



    

