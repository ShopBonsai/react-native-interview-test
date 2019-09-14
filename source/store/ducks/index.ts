import example, { ExampleState } from './example';

// Application State Type
export interface ApplicationState {
  example: ExampleState;
}

export default {
  example,
};
