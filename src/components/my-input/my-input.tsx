import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
})
export class MyInput {

  @Prop({ reflect: true }) step?: number | "any";

  render() {
    return (
      <Host>
        <input step={this.step}></input>
      </Host>
    );
  }

}
