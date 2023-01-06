import { Component, OnInit } from '@angular/core';
import { concat, toArray } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'calcul/app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {



  num: string = '';
  resultat: string = ''
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }
  //operateur
  addop(o: string) {
    const lastKey = this.num[this.num.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {

      return;
    }
    if (this.num != "") {
      this.num = this.num + o
      console.log();

    }
  }
  getLastOperand() {
    let pos: number;
    console.log(this.num)
    pos = this.num.toString().lastIndexOf("+")
    if (this.num.toString().lastIndexOf("-") > pos) pos = this.num.lastIndexOf("-")
    if (this.num.toString().lastIndexOf("*") > pos) pos = this.num.lastIndexOf("*")
    if (this.num.toString().lastIndexOf("/") > pos) pos = this.num.lastIndexOf("/")
    console.log('Last ' + this.num.substr(pos + 1))
    return this.num.substr(pos + 1)
  }
  //input num
  add(n: string) {

    if (n == ".") {
      if (this.num != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      } else
        this.num = "0"
    }
    this.num = this.num + n
  }


  //clear all
  clearall() {
    this.num = ""
  }
  //reponse
  reponse() {
    this.resultat = eval(this.num)
    this.num = this.resultat
    
    if (this.num == "0") this.num = "";
  }
  //clear one cararcter
  clear() {
    if (this.num != "") {

      this.num = this.num.substr(0, this.num.length - 1)
    }
  }
  cara = 0 //nbr click of btn +/-
  addcara() {
    this.cara++
    if (this.cara == 1) {
      this.num = "-" + this.num

    } else if (this.cara == 2) {
      this.num = this.num.substr(1, this.num.length)
      this.cara = 0
    }

  }


}
