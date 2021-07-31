import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "src/app/recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(private http: HttpClient){
    }
    fetchData(){
        this.http.get('sampleUrl',{
            observe:'body',
            responseType:'json',
            headers: {},
            params: {}
        }).subscribe( getData => {
            console.log(getData);
        });
    }

    storeData(recipes: Recipe[]){
        this.http.post('urlStoreData', 'json', {
            headers:{},
            observe:'body',
            params:{},
            responseType : 'json'
        }).subscribe(eventType =>{
            
        });
    }
}