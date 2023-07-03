import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { Layer, dummyLayers } from '../interfaces/layer';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LayerService {
  private selectedLayerSubject = new BehaviorSubject<Layer | null>(null);
  selectedLayer$ = this.selectedLayerSubject.asObservable();

  constructor(private logger: NGXLogger) { }

  getLayers(): Layer[] {
    return dummyLayers;
  }

  setSelectedLayer(layer: Layer): void {
    this.logger.info('Selected Layer: ', layer);
    this.selectedLayerSubject.next(layer);
  }

  clearSelectedLayer(): void {
    this.logger.info('Cleared Selected Layer');
    this.selectedLayerSubject.next(null);
  }

  getSelectedLayer(): Layer | null {
    return this.selectedLayerSubject.getValue();
  }

  getSelectedLayerWhenPopulated(): Observable<Layer> {
    return this.selectedLayerSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }


  get currentLayer(): Layer {
    return this.selectedLayerSubject.value;
  }


}


