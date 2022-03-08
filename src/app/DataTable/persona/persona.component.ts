import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Exportar Excel con SheetJS
  exportarPersonas(): void {
    let tabla = document.getElementById("tabla")
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tabla)

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Personas')

    XLSX.writeFile(wb, "PersonasAPI.xlsx")
  }


}
