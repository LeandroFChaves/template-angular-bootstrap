import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class DataSourceService<T, ID> {
  constructor(protected http: HttpClient, protected urlApi: string) {}

  public salvar(
    objeto: T,
    inserting: boolean,
    purlApi: string = null
  ): Observable<T> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    let urlApiSalvar: string = this.urlApi;

    if (purlApi !== null) {
      urlApiSalvar = purlApi;
    }

    if (inserting) {
      return this.http.post<T>(urlApiSalvar, JSON.stringify(objeto), {
        headers,
      });
    } else {
      return this.http.put<T>(urlApiSalvar, JSON.stringify(objeto), {
        headers,
      });
    }
  }

  public listAll(purlApi: string = null, filtros: any = null): Observable<T[]> {
    let urlApiPesquisa: string = this.urlApi;

    if (purlApi !== null) {
      urlApiPesquisa = purlApi;
    }

    if (filtros !== null) {
      filtros.forEach(function (value: any, key: any) {
        urlApiPesquisa += '&' + key + '=' + value;
      });
    }

    return this.http.get<T[]>(`${urlApiPesquisa}`);
  }

  public listPagination(page: number, filtros: any = null): Observable<T[]> {
    let urlApiPesquisa: string = `${this.urlApi}?page=${page}&size=10`;

    if (filtros !== null) {
      filtros.forEach(function (value: any, key: any) {
        urlApiPesquisa += '&' + key + '=' + value;
      });
    }

    return this.http
      .get<T[]>(`${urlApiPesquisa}`)
      .pipe(map((resp) => resp as T[]));
  }

  public findById(id: ID): Observable<T> {
    return this.http.get<T>(`${this.urlApi}/${id}`);
  }

  public excluir(id: ID, pUrlApi: string = null): Observable<T> {
    let urlApiExcluir: string = this.urlApi;

    if (pUrlApi !== null) {
      urlApiExcluir = pUrlApi;
    }

    return this.http.delete<T>(`${urlApiExcluir}/${id}`);
  }

  public gerarRelatorio(objeto: T, purlApi: string = null): Observable<any> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    let urlApiRelatorio: string = this.urlApi;

    if (purlApi !== null) {
      urlApiRelatorio = purlApi;
    }

    return this.http.post(urlApiRelatorio, JSON.stringify(objeto), {
      headers,
      responseType: 'blob',
    });
  }
}
