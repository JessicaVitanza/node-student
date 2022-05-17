const prompt = require('prompt');
const model= require('./model.js');
const fs = require('fs');
const { start } = require('prompt');

const studentsArray = loadData();

console.log('Benvenuti a Scuola!');

startMenu();

function startMenu() {
    console.log('Sono disponibili tre opzioni:');
    console.log('1) Registra lo Studente');
    console.log('2) Registro Studenti');
    console.log('3) Esci dal programma...');

    prompt.start();

    const schema = {
        properties: {
            selection: {
                description: 'Seleziona una delle Opzioni...'
            }
        }
    }

    prompt.get(schema, insertMenuManager);
}

function insertMenuManager(err, result) {
    if (result.selection === '1')
        insertStudent();
    else if (result.selection === '2')
        insertTransfertStudent();
    else if (result.selection === '3') {
        console.log('Arrivederci e a Presto...');
        startMenu();
    } else {
        console.log('Errore di inserimento, riprovare');
        insertMenu(); 
    }
}

function insertStudent() {
    const schema = {
        properties: {
            name: {
                description: 'Inserisci il nome'
            },
            surname: {
                description: 'Inserisci il cognome'
            },
            gender: {
                description: 'Inserisci il sesso'
            },
            age: {
                description: 'Inserisci l\'età'
            }
        }
    }
    
    prompt.get(schema, insertStudentsManager);
}

function insertTransferedStudent() {
    const schema = {
        properties: {
            name: {
                description: 'Inserisci il nome'
            },
            surname: {
                description: 'Inserisci il cognome'
            },
            gender: {
                description: 'Inserisci il sesso'
            },
            age: {
                description: 'Inserisci l\'età'
            },
            origin: {
                description: 'Inserisci il paese d\'origine'
            }
        }
    }
    
    prompt.get(schema, insertTransferedStudentsManager);
}