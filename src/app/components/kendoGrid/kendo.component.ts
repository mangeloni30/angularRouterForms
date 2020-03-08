import { Component } from '@angular/core';
import { customers } from '../../customers';
@Component({
  selector: 'app-root',
  template: `
        <kendo-grid
            [kendoGridBinding]="gridData"
            [filterable]="true"
            [groupable]="true"
            [sortable]="true"
            [pageSize]="10"
            [pageable]="true"
            [height]="510">
            <kendo-grid-column field="name" title="Name" [width]="140"></kendo-grid-column>
            <kendo-grid-column field="lastname" title="Last name" [width]="120"></kendo-grid-column>
            <kendo-grid-column field="email" title="Email" [width]="100"></kendo-grid-column>
            <kendo-grid-column field="bornDate" title="Born Date" [width]="130"></kendo-grid-column>
        </kendo-grid>
    `
})
export class KendoComponent {
  title = 'Kendo UI';
  public gridData: any[] = customers;
}
