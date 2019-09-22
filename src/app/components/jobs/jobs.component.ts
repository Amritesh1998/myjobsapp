import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  p: number = 1;
  searchParam: string;
  searchParam1: string;  
  jobs: any[];  
  temp : any;
  locationJob: any;
  experienceJob: any;
  fltJob: any;
  expJob: any;  
  loc:any;    
  leng: any;
  
  constructor(private service: JobsService) { }

  ngOnInit() {
    this.service.fetchJobs().subscribe(result =>{
      this.temp = result;
      //this.jobs = this.temp.data;
      this.leng = this.temp.data;
    });
  }

  getJobsList(){
      this.service.fetchJobs().subscribe(result =>{
      this.temp = result;
      this.jobs = this.temp.data.filter(item =>  item.experience == this.searchParam
                                              || item.location == this.searchParam 
                                              || item.skills == this.searchParam);        
      });
      this.leng = this.temp.data;
  }

  expiringJobs(){ 
    this.service.fetchJobs().subscribe(val =>{
      this.loc= val;      
      this.expJob= this.loc.data.filter(exp => exp.enddate.includes("Immediately") 
                                            || exp.startdate.includes("Immediately"));  
      this.jobs = this.expJob;   
    }); 
    
  }

  filterJobs(){
    this.fltJob = this.jobs.filter(unit =>  unit.companyname == this.searchParam1);
    this.jobs=this.fltJob;
  }

  sortByLocation(){    
    this.locationJob = this.jobs.sort((a,b) => a.location.localeCompare(b.location));
    this.jobs = this.locationJob;
  }

  sortByExperience(){    
    this.experienceJob = this.jobs.sort((a,b) => a.experience.localeCompare(b.experience)); 
    this.jobs = this.experienceJob;
  }

}
