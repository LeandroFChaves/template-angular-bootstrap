import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BoostrapModule } from './core/bootstrap/boostrap.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuModule } from './core/menu/menu.module';
import { HomeModule } from './home/home.module';
import { ModalsModule } from './shared/components/modals/modals.module';
import { ErrorsModule } from './errors/errors.module';
import { NavigationModule } from './shared/components/breadcrumbs/navigation.module';
import { Pagina1Module } from './pagina1/pagina1.module';
import { Pagina2Module } from './pagina2/pagina2.module';
import { SobreModule } from './sobre/sobre.module';
import { NotificationModule } from './shared/components/notifications/notification.module';
import { PostsModule } from './posts/posts.module';
import { LoaderModule } from './shared/components/loader/loader.module';
import { LoginModule } from './login/login.module';
import { AuthInterceptor } from './core/auth/auth.interceptor';

@NgModule({
  declarations: [AppComponent, FooterComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        authScheme: 'Bearer ',
        allowedDomains: environment.allowedDomains,
        disallowedRoutes: environment.disallowedRoutes,
      },
    }),

    BoostrapModule,
    ModalsModule,
    ErrorsModule,
    NotificationModule,
    LoaderModule,
    LoginModule,
    MenuModule,
    NavigationModule,
    HomeModule,
    Pagina1Module,
    Pagina2Module,
    PostsModule,
    SobreModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
