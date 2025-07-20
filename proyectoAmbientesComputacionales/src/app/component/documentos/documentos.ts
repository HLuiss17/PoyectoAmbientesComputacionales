import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-documentos',
  imports: [Navbar, Footer],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css'
})
export class Documentos {

}
