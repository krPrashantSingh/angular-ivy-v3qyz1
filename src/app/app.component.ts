import { Component } from "@angular/core";
import { Orientation,IECONode } from "./econode";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{
  Orientation=Orientation;

  data:IECONode={data:{id:1},linkColor:"red",background:"red",color:"white",children:[
    {data:{id:2},linkColor:"pink",background:"pink",color:"white",children:[
      {data:{id:5}},
      {data:{id:6},children:[
        {data:{id:9},background:"silver"},
        {data:{id:10}}
      ]}
    ]},
    {data:{id:3}},
    {data:{id:4},linkColor:"orange",background:"orange",color:"white",children:[
      {data:{id:7}},
      {data:{id:8},background:"lightsteelblue",linkColor:"lightsteelblue",children:[
        {data:{id:11}},
        {data:{id:12}},
        {data:{id:13}},
        {data:{id:14},background:"black",linkColor:"black",children:[{data:{id:16}}]},
        {data:{id:15}},
      ]},
    ]}
  ]}
}
