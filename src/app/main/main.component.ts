import { Component, OnInit } from '@angular/core';
import { projects } from '../data/data';
import { project } from '../data/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
ngOnInit(): void {
  this.Projects=projects
}
constructor(){}
Projects:project[]=[]
}
