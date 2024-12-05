import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  userId!: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId') || '';
  }
}
