import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private myService:HttpClient) { }
    public getImage():Observable<string[]>{
      return this.myService.get("https://api.nasa.gov/planetary/apod?api_key=OM7HsZU2VmSA1WUrXHgn1M6MaLZ0fdNhD2PrmRtb").pipe(
        map(
          (param_image:any)=> {
            let results:any=[]; 

            results.push(param_image.url)

            return results;
          
          }
        )
      )
  }
}
