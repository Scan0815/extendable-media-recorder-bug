import { Component, Fragment, h } from '@stencil/core'

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>extendable-media-recorder-bug</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <extendable-media-recorder-bug></extendable-media-recorder-bug>
        </ion-content>
      </Fragment>
    )
  }
}
