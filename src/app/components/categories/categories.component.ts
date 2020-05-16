import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { ProductsService } from '../../core/services/product.service';
import { Category } from 'src/app/core/models/category';
import { product } from 'src/app/core/models/product';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private categService: CategoriesService, private prodsService:ProductsService ) { }
  
  catifSubcriber;
  prodSubscriber;
  categories;
  products ;

  ngOnDestroy(): void{
    this.catifSubcriber.unsubscribe();
    //this.prodSubscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.catifSubcriber = this.categService.GetAllCategories()
      .subscribe((categs) => {
        if(categs){
          this.categories = categs;
          
          this.prodsService.getProductsForCategory(this.categories[0].categoryId)
            .subscribe((prods)=>{
              if(prods){
                this.products = prods;
              }
            }
          );
        }
      });

    //   console.log(this.categories.length);
    
    // this.prodSubscriber = this.prodsService.getProductsForCategory(this.categories[0].categoryId)
    //   .subscribe((prods) => {
    //     if(prods){
    //       this.products = <product[]>prods;
    //     }
    //   });

  }

}
