import { Component, OnInit } from '@angular/core';
import { Note } from '../classes/note';
import { NoteDataService } from '../Service/note-data.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  constructor(private noteService: NoteDataService) {
    
  }

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
  }

}
