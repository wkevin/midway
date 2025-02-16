import * as WebSocket from 'ws';
import {
  IConfigurationOptions,
  IMidwayApplication,
  IMidwayContext,
  NextFunction as BaseNextFunction
} from '@midwayjs/core';

export type IMidwayWSApplication = IMidwayApplication<IMidwayWSContext> & WebSocket.Server;

export type IMidwayWSConfigurationOptions = {
  pubClient?: any;
  subClient?: any;
} & Partial<WebSocket.ServerOptions> & IConfigurationOptions;

export type IMidwayWSContext = IMidwayContext<WebSocket & {
  app: IMidwayWSApplication;
}>;

export type Application = IMidwayWSApplication;
export type NextFunction = BaseNextFunction;
export interface Context extends IMidwayWSContext {}

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    webSocket?: IMidwayWSConfigurationOptions;
  }
}
