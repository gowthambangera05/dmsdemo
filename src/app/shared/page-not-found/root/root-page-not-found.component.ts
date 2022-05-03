import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root-page-not-found',
  templateUrl: './root-page-not-found.component.html',
  styleUrls: ['./root-page-not-found.component.scss']
})
export class RootPageNotFoundComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  navigateHome() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
