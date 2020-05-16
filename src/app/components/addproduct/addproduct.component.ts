import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/product.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productRecieved = new product();
  categories;

  constructor( private prodServ:ProductsService, private categService:CategoriesService ) { }

  ngOnInit(): void {
    this.categService.GetAllCategories()
    .subscribe( (categs) =>{ 
      this.categories = categs;
    });
  }
  onAddProductClick(){
    this.productRecieved.imageThumbnailUrl = this.productRecieved.imageUrl;
    this.prodServ.AddProductForCategory(this.productRecieved.categoryId,this.productRecieved)
      .subscribe( (categ) =>{
        if(categ){
          alert("Added Successfully :D");
          location.reload();
        }else{
          alert("somthing is wrong :\"(");
        }
      });
  }
}
