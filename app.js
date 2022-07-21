const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')

yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a  Note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
        
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list the notes',
    handler(argv){
        notes.listnotes()
    }
})

yargs.command({
    command:'read',
    describe:'read the notes',
    builder:{
        title:{
            describe:"Read note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)