import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [Footer, Navbar],
  templateUrl: './github.html',
  styleUrls: ['./github.css']
})
export class Github {

}
