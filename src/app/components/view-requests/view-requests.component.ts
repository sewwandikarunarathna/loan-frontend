import { Component, OnInit } from '@angular/core';
import { Loanrequest } from 'src/app/models/loanrequest.model';
import { LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  loanrequests?: Loanrequest[];
  currentLoanRequest?: Loanrequest;
  currentIndex = -1;

  //let loanRequestId =
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.retrieveRequests();
  }

  //get all loan requests to admin board
  retrieveRequests(): void {
    this.loanService.getAllRequests()
    .subscribe(
      data => {
        this.loanrequests = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveRequests();
    this.currentLoanRequest = undefined;
    this.currentIndex = -1;
  }
  setActiveLoanRequest(loanRequest: Loanrequest, index: number): void {
    this.currentLoanRequest = loanRequest;
    this.currentIndex = index;
  }

  
  //approve loan request
  approveRequest(a,b,c,d,e,f): void {
//console.log('click ok');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
//console.log( this.loanrequests);
    const data = {
      userId: a,
      loanId: b,
      loanRequestId: c
    };

    this.loanService.approveRequest(data)
    .subscribe(
      response => {
        console.log(response);
        alert('successfully approved!');
       },
      error => {
        console.log(error);
      }
    );
  }
}
