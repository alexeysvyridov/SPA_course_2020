import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement = []
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];
  loadedFeature = 'recipe';
  evenNumbers:number[] = [1,3,5,7,9];
  onlyOdd:boolean = false;
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
