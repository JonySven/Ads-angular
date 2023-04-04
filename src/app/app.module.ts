import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HederComponent } from './component/heder/heder.component';
import { FilterComponent } from './component/filter/filter.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleAddComponent } from './pages/single-add/single-add.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AuterizationComponent } from './component/modal/auterization/auterization.component';
import { RegistrationComponent } from './component/modal/registration/registration.component';
import { InputMaskModule } from 'primeng/inputmask';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CreateComponent } from './pages/create/create.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccountComponent } from './pages/account/account.component';
import { AppGalleriaComponent } from './component/galleria/galleria.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    FilterComponent,
    LayoutComponent,
    CardComponent,
    HomeComponent,
    SingleAddComponent,
    BreadcrumbComponent,
    AuterizationComponent,
    RegistrationComponent,
    CreateComponent,
    AccountComponent,
    AppGalleriaComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    ToastModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule,
    BreadcrumbModule,
    GalleriaModule,
    DialogModule,
    DynamicDialogModule,
    InputMaskModule,
    TriStateCheckboxModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputNumberModule,
    FileUploadModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
