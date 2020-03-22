import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public eanList = [];
  public uniqueCartCode = ""
  constructor( private http : HttpClient) { }
  public getUniqueCartCode()
  {
    if(this.uniqueCartCode == "")
    {
      this.http.post<any>('pgetuniquecartcode', {}).subscribe(data => {
        console.log(data.cartcode);
        this.uniqueCartCode = data.cartcode;
      });
    }
  }

  public addCartItem(ean)
  {
    this.eanList.push(ean);
    if(this.uniqueCartCode != "")
    {
      this.http.post<any>('paddcartitem', {ean_code: ean, list_rank: this.eanList.length-1, cart_code: this.uniqueCartCode }).subscribe(data => {
      
      });
    }
  }



}
