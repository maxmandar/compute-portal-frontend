import { Component } from '@angular/core';

import { Layer } from '../../interfaces/layer';

import { LayerService} from '../../services/layer.service';


@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent {


  layers: Layer[] = null;

  constructor(private layerService: LayerService) {}


  ngOnInit() {
    this.layers = this.layerService.getLayers();
  }

  onLayerSelected(layer: Layer) {
    this.layerService.setSelectedLayer(layer);

  }



}
