import { Injectable } from '@angular/core';
import { Note } from '../classes/note';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {
  notes: Note[] = new Array<Note>();
  constructor() {
    this.notes.push(new Note("a","Lorem ipsum dolor, amet consectetur adipisicing elit. Dicta earum cumque voluptas ducimus eius error quidem labore. Sed, unde expedita."));
    this.notes.push(new Note("as","Lorem ipsum dolor,  consectetur adipisicing elit. Dicta earum cumque voluptas ducimus eius error quidem labore. Sed, unde expedita."));
    this.notes.push(new Note("asd","Lorem ipsum dolor,  adipisicing elit. Dicta earum cumque voluptas ducimus eius error quidem labore. Sed, unde expedita."));
    this.notes.push(new Note("asdf","Lorem ipsum dolor,  elit. Dicta earum cumque voluptas ducimus eius error quidem labore. Sed, unde expedita."));
  }
  getAll() {
    return this.notes;
  }
  get(id:number){
    return this.notes[id];
  }
  add(note: Note) {
    this.notes.push(note);
  }
  update(note:Note, noteId:number) {
    this.notes[noteId] = note;
  }
  delete(noteId: number) {
    this.notes.splice(noteId, 1);
  }
}
