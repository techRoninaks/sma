import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { data } from 'jquery';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  editPolicy: number;
  z: { shop_id: any; val: string; type: string; };
  token: any;
  prodid: number = 0;
  dynamicDataProPolicy: any = [];
  dynamicDataShipPolicy: any = [];
  dynamicDataReturnPolicy: any = [];
  dynamicDataName: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.prodid = 1;
    this.data.getPolicyAddProduct(this.prodid).subscribe(
      data => {
        this.dynamicDataProPolicy = data;
        this.dynamicDataShipPolicy = data;
        this.dynamicDataReturnPolicy = data;
      },
      // error => console.error(error)
    );
  }
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  edit(x: any) {
    this.editPolicy = 1;
  }

  sub(x: any) {
    this.editPolicy = 0;
    var type = 'policy';
    var y = (<HTMLInputElement><any>document.getElementById('policyTxtAr')).value;
    // this.z = { prodid: this.token, val: y, type: type };
    // this.data.editManage(this.z).subscribe();
  }

  publishBtn(id: any) {
    this.data.dataPostAddProduct(this.data).subscribe(data => {
      // this.dynamicDataName = data;
      // var pnData = document.getElementById("product-Name").value;
      // var pbpData = document.getElementById("product-BasePrice").value;
      // var psdData = document.getElementById("product-ShortDesc").value;
      // var pdData = document.getElementById("product-Desc").value;
      // var psData = document.getElementById("product-Spec").value;
      // var clData = document.getElementById("Counter-Label").value;
      // var maqoData = document.getElementById("Max-Qty-Order").value;
      // var miqoData = document.getElementById("Min-Qty-Order").value;
      // var rpData = document.getElementById("Right-Price").value;
      // var rp1Data = document.getElementById("Right-Price1").value;
      // var rp2Data = document.getElementById("Right-Price2").value;
      // var rp3Data = document.getElementById("Right-Price3").value;
      // var rp4Data = document.getElementById("Right-Price4").value;
      // var aptData = document.getElementById("Avg-ProTime").value;
      // var astData = document.getElementById("Avg-ShipTime").value;
      // var tcData = document.getElementById("Tag-Card").value;
      // var mclData = document.getElementById("Max-Count-Label").value;
      // var mtData = document.getElementById("Msg-Title").value;
      // var pd1Data = document.getElementById("Pro-Date-1").value;
      // var pd2Data = document.getElementById("Pro-Date-2").value;
      // var pp1Data = document.getElementById("Pro-Price-1").value;
      // var pdiscData = document.getElementById("Pro-Disc-1").value;
      // var bqData = document.getElementById("Bundle-Qty").value;
      // var apData = document.getElementById("Actual-Price").value;
      // var ptaData = document.getElementById("policyTxtAr").value;
      // var qsData = document.getElementById("Ques-Sect1").value;
      // var asData = document.getElementById("Ans-Sect2").value;
      // var b = document.getElementById(" ").value;
      // var b = document.getElementById(" ").value;
      // var b = document.getElementById(" ").value;
      // var b = document.getElementById(" ").value;
    });
  }
}
