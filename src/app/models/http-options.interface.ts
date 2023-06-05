import { HttpHeaders } from '@angular/common/http';

export interface HttpOptions {
  headers: HttpHeaders;
  params?: {
    limit: number;
    offset?: number;
  };
}
