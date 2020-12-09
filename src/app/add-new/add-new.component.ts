import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PlantService} from './PlantService/plant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @Input() plantDetails = {id: '', name:'', type:'',origin:'', soilNeeds:'', waterNeeds:'', more:'', size:'', img:'',likes:0}
  closeResult = '';
  constructor(private modalService: NgbModal, private plantService: PlantService, public router: Router) {}

  addPlant(dataPlant){
    this.plantService.createPlant(this.plantDetails).subscribe((data:{})=>{
      this.router.navigate(['/login']);
      window.location.reload();
    })
  }
  username = localStorage.getItem('username');
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
  }

}
