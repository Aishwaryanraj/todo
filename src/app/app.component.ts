import { Component } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'todo-app';
  todoArray=[]

addTodo(value: string){  
  if(value!=''){
    this.todoArray.push(value)   
     console.log(this.todoArray) 
     }
}
    
     deleteItem(todo){
      for(let i=0 ;i<= this.todoArray.length ;i++){
        if(todo== this.todoArray[i]){
          this.todoArray.splice(i,1)
        }
      }
    }    

    updateItem(todo: string,value: string) {    
      var ind: number=this.todoArray.indexOf(todo)
      if(value!='')
      {
      this.todoArray[ind]=value
      console.log(ind)
      console.log(value)     
      } 
       }  
      }  
      
     

    
    
