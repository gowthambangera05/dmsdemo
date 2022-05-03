import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss']
})
export class WorkInProgressComponent implements OnInit {

  @Input() showReturnToHome: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,) { 
      this.showReturnToHome = true;
  }

  ngOnInit(): void {
  }

  navigateHome() {
  this.router.navigate([''], { relativeTo: this.route });
  }

}
