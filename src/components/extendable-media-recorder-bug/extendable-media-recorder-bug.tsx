import { Component, Host, h, ComponentInterface, State } from '@stencil/core';
import { IMediaRecorder, MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

@Component({
  tag: 'extendable-media-recorder-bug',
  styleUrl: 'extendable-media-recorder-bug.css',
  shadow: true,
})
export class ExtendableMediaRecorderBug implements ComponentInterface {
  @State() audioSrc: string;

  private mediaRecorder: IMediaRecorder;
  private chunks = [];
  async componentWillLoad() {
    await register(await connect());
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
    this.mediaRecorder.onstop = (_e) => {
      const blob = new Blob(this.chunks, { type: "audio/wav" });
      this.chunks = [];
      this.audioSrc = window.URL.createObjectURL(blob);
    };
  }

  async start(ev){
    ev.preventDefault();
    await this.mediaRecorder.start();
  }

  async stop(ev){
    ev.preventDefault();
    await this.mediaRecorder.stop();
  }
  render() {
    return (
      <Host>
        <ion-button onClick={ev => this.start(ev)}><ion-icon name="record"></ion-icon></ion-button>
        <ion-button onClick={ev => this.stop(ev)}><ion-icon name="stop"></ion-icon></ion-button>
        {this.audioSrc && <audio src={this.audioSrc}></audio>}
      </Host>
    );
  }

}
