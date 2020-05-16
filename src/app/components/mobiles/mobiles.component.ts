import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/core/services/products.service';
import { CategoriesService} from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  name = '';
  constructor( private myService:ProductsService, private myService2:CategoriesService) { }


  subscriber2;
  categories;
  categoryID;

  subscriber;
  products;
  ngOnInit(): void {

     //debugger;
     this.subscriber2 = this.myService2.GetAllCategories()
     .subscribe((categories)=>{
       console.log('categories: ',categories);
       if(categories)
       {
         this.categories = categories;
         this.categories.forEach(element => {
           if(element.categoryName=="Mobile")
           {
            this.categoryID=element.categoryId;
            //debugger;
            this.subscriber = this.myService.getProducts(`${this.categoryID}`)
            .subscribe((products)=>{
            console.log("products: ", products);
            if(products)
            {
              this.products = products;
            }
          }),
          (err)=>{
            console.log(err);
            }
           }
        });
       }
     }),
     (err)=>{
       console.log(err);
     } 
  }

}
