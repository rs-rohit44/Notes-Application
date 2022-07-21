const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return "Your notes....."
}

const addNote = (title, body) => {
    const notes = loadnotes()
    const duplicateNote = notes.find((note) => note.title===title)
    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New Note Added!")
    }
    else{
        console.log("title is taken!")
    }
}

const removeNote = (title) => {
   const notes = loadnotes()
   const notesToKeep = notes.filter( (note) => note.title !== title)
   if(notes.length > notesToKeep.length)
   {
        console.log('Note Removed')
   }
   else{
    console.log('No Note Found!')
   }
   saveNotes(notesToKeep)
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadnotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

const listnotes = () =>{
    const notes = loadnotes()
    console.log("Your Notes")
    notes.forEach( (note) =>{
        console.log(note.title)
    })

}

const readNote = (title) =>{
    const notes = loadnotes()
    console.log("Your required note is here..")
    const note =notes.find( (note) => note.title===title)
    if(note)
    {
        console.log("Note title: "+chalk.black(note.title))
        console.log("Note BOdy: "+chalk.black(note.body))
    }
    else{
        console.log(chalk.red.inverse("Error,Note not found"))
    }
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listnotes:listnotes,
    readNote:readNote
}