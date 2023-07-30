import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  httpClient = inject(HttpClient);
  data: any;

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:1337/api/articles')
      .subscribe((res) => {
        console.log('res', res);
        this.data = res;
      });
  }

  title = 'web-app';
}
