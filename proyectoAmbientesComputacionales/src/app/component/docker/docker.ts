import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-docker',
  imports: [Footer, Navbar],
  templateUrl: './docker.html',
  styleUrl: './docker.css'
})
export class Docker {

}
