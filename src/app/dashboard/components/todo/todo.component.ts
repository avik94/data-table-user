import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

// export interface DataList {
//   name: string;
//   address: number;
//   feeType: number;
//   total: string;
// }

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  date = "";
  ageFilter:any =""

  displayedColumns: string[] = ['Name', 'Address', 'Fee_Type', 'Available_Capacity', "Available_capacity_dose1","Available_capacity_dose2", "Fee", "Min_age_limit", "Vaccine"];
  dataSource:any = [

  ];

  constructor( private serverService: ServerService) { }

  // {Name: "sdfsdf",
  // Address: "dfsdf",
  // Fee_Type: "adfdfa",
  // Available_Capacity: "adfadf",
  // Available_capacity_dose1: "adfaf",
  // Available_capacity_dose2: "adfdaf",
  // Fee: "aadad",
  // Min_age_limit: "adad",
  // Vaccine: "ada"}
  async ngOnInit() {
  }

  async clickDate() {
    // 24--08--2021
    // ["2021", "08", "21"]
    const date = this.date.split("-")
    console.log(date[2]+"--"+date[1]+"--"+date[0])
    const data:any = await this.serverService.getData(date[2]+"--"+date[1]+"--"+date[0])
    let dataModel = []
    data.sessions.forEach(el =>{
      let obj ={
        Name: el.name,
        Address: el.address,
        Fee_Type:el.fee_type,
        Available_Capacity: el.available_capacity,
        Available_capacity_dose1: el.available_capacity_dose1,
        available_capacity_dose2: el.available_capacity_dose2,
        Fee: el.fee,
        Min_age_limit: el.min_age_limit,
        Vaccine: el.vaccine
      }
      dataModel.push(obj)
    })
    this.dataSource = dataModel
    console.log(data)
  }

  async chooseFilter() {
    console.log(this.ageFilter)
    const date = this.date.split("-")
    console.log(date[2]+"--"+date[1]+"--"+date[0])
    const data:any = await this.serverService.getData(date[2]+"--"+date[1]+"--"+date[0]);
    if(this.ageFilter > 18) {
      const filterByAge = data.sessions.filter(el=>{
        return el.min_age_limit > 18
      })
      console.log(filterByAge)
    }
  }

}
