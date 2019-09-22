import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { JobsService } from './jobs.service';


describe('JobsService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: []
      }));

       it('should be created', () => {
        const service: JobsService = TestBed.get(JobsService);
        expect(service).toBeTruthy();
       });

       it('should have fetchJobs function', () => {
        const service: JobsService = TestBed.get(JobsService);
        expect(service.fetchJobs).toBeTruthy();
       });

    });
