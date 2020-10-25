import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  closeResult = '';
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() list : [];
  addNewItem(name: string, type: string, origin: string, soil_needs: string, waterNeeds: string, more: string,
             size: string, image: string, likes:string)  {
    this.newItemEvent.emit({name:name,type:type, origin:origin, soilNeeds:soil_needs, waterNeeds: waterNeeds, more:more,
                                  size:size,img:image, likes:likes
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
