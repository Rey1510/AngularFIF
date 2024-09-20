import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogoutComponent } from "../../logout/logout.component";

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [LogoutComponent],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss'
})

export class DetailUserComponent implements OnInit{

  idUrl: string | null = null;
  methodUrl: string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.idUrl = this.activatedRoute.snapshot.paramMap.get('id')
    this.activatedRoute.queryParams.subscribe(params => console.log(params))
    console.log(this.activatedRoute.snapshot.paramMap);
  }

  ngOnInit(): void {
    
  }

}
