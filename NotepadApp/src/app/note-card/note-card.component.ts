import { Component, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../classes/note';
import { NoteDataService } from '../Service/note-data.service';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input('noteId') noteId!:number;
  note!:Note;
  constructor(private noteService: NoteDataService, private router: Router) {}

  ngOnInit(){
    this.note=this.noteService.get(this.noteId);
  }
  openNote(){
    this.router.navigate([this.noteId]);
  }
  deleteNote(){
    this.noteService.delete(this.noteId);
  }
}
