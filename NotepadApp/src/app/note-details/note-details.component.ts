import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../classes/note';
import { NoteDataService } from '../Service/note-data.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  note!: Note;
  noteId!: number;
  new!: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private noteService: NoteDataService) {
  }

  ngOnInit(): void {
    console.log(this.note);
    this.route.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get("id");
      this.noteId = parseInt(<string>id);
    });
    this.note = this.noteService.get(this.noteId);
    if (this.note == undefined)
      this.new = true;
    else
      this.new = false;
    
  }
  cancel() {
    this.router.navigate(['../']);
  }
  submit(form: NgForm) {
    this.note = form.value;
    console.log(this.note);
    if (this.new)
      this.noteService.add(this.note);
    else
      this.noteService.update(this.note, this.noteId);
    this.router.navigate(['../']);
  }
}
