import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ✅ Standalone directives/components can be wrapped in NgModule via `imports/exports`
import { Button } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { Dialog } from 'primeng/dialog';
import { AutoFocus } from 'primeng/autofocus';
import { InputText } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { Dropdown } from 'primeng/dropdown';
import { Calendar } from 'primeng/calendar';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';
import { InputSwitch } from 'primeng/inputswitch';
import { Tooltip } from 'primeng/tooltip';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Card } from 'primeng/card';
import { Panel } from 'primeng/panel';
import { TabView, TabPanel } from 'primeng/tabview';
import { Accordion, AccordionTab } from 'primeng/accordion';
import { Sidebar } from 'primeng/sidebar';
import { Menubar } from 'primeng/menubar';

// ❌ Still NgModules in PrimeNG
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Standalone
    Button,
    Ripple,
    Dialog,
    AutoFocus,
    InputText,
    Calendar,
    Checkbox,
    RadioButton,
    InputSwitch,
    Tooltip,
    Toast,
    ConfirmDialog,
    Card,
    Panel,
    TabView,
    TabPanel,
    Accordion,
    Sidebar,
    Menubar,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Standalone
    Button,
    Ripple,
    Dialog,
    AutoFocus,
    InputText,
    Calendar,
    Checkbox,
    RadioButton,
    InputSwitch,
    Tooltip,
    Toast,
    ConfirmDialog,
    Card,
    Panel,
    TabView,
    TabPanel,
    Accordion,
    Sidebar,
    Menubar,

  ],
})
export class PrimeNgModule {}
