import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  public player;
  public pplay!: boolean;
  public enable = true;
  constructor() {
    this.player = new Audio();
    
   }
  public songs = [
    {name:"Bolji covek", artist:"Sasa Kovacevic"},
    {name:"Evo zaklecu se", artist:"Alen Islamovic"},
    {name:"Ruka za spas", artist:"Sasa Kovacevic"},
    {name:"Slucajnost", artist:"Rasta x Ana Nikolic"},
    {name:"Sahara", artist:"Maya Berovic"},
    {name:"Bolji covek", artist:"Sasa Kovacevic"},
    {name:"Bolji covek", artist:"Sasa Kovacevic"},
    {name:"Bolji covek", artist:"Sasa Kovacevic"},
  ]

  ngOnInit(): void {
    this.pplay = true;
  }
  public Start(song: {name: string, artist: string}){
    this.player.src = "http://localhost:4200/assets/songs/" + song.artist + " - " + song.name + ".mp3"; 
    this.player.load();
    this.Play();
  }
  public Play(){
    this.player.play();
    this.pplay = false;
  }
  public Pause(){
    this.player.pause();
    this.pplay = true;
  }
  
}
