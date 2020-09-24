// @ts-ignore
import React from 'react';
import { IPlugin, PluginStore, Event } from '../../src';

class ClickMePlugin implements IPlugin {
  public pluginStore: PluginStore;

  init(pluginStore) {
    this.pluginStore = pluginStore;
  }

  activate() {
    this.pluginStore.addFunction('sendAlert', () => {
      alert('Testing');
    });

    this.pluginStore.executeFunction('RendererPlugin.add', 'top', () => (
      <>
        <h1>asdjkdas</h1>
        <button
          onClick={() =>
            this.pluginStore.dispatchEvent(new Event('ClickMePlugin.hello'))
          }
        >
          Dispatch event
        </button>
      </>
    ));
  }
  deactivate() {
    this.pluginStore.removeFunction('sendAlert');
  }
}

export default ClickMePlugin;
