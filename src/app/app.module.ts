import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BoostrapModule } from './core/bootstrap/boostrap.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuModule } from './core/menu/menu.module';
import { HomeModule } from './home/home.module';
import { ModalsModule } from './shared/components/modals/modals.module';
import { LoaderInterceptorService } from './shared/components/loader/loader-interceptor.service';
import { LoaderComponent } from './shared/components/loader/loader/loader.component';
import { ErrorsModule } from './errors/errors.module';
import { NavigationModule } from './shared/components/breadcrumbs/navigation.module';
import { Pagina1Module } from './pagina1/pagina1.module';
import { Pagina2Module } from './pagina2/pagina2.module';
import { SobreModule } from './sobre/sobre.module';
import { NotificationModule } from './shared/components/notifications/notification.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, LoaderComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BoostrapModule,
    ModalsModule,
    ErrorsModule,
    NotificationModule,
    MenuModule,
    NavigationModule,
    HomeModule,
    Pagina1Module,
    Pagina2Module,
    PostsModule,
    SobreModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
