import { Component, OnInit } from '@angular/core';
import { joke } from '../models/joke';
import { JokeServiceService } from '../../services/joke-service.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  variable: string = "pinching";
  constructor(private JokeService: JokeServiceService) { }

  ngOnInit() {
  }

  joke: any;
  hitMe(){
    this.JokeService.getJoke().subscribe( joke => {
      this.joke = JSON.stringify(joke);
    })
  }

}
