import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-git',
  imports: [ Footer, Navbar],
  templateUrl: './git.html',
  styleUrl: './git.css'
})
export class Git {

}
