export default {
  code: `// the code example from https://github.com/suren-atoyan/state-local

  import { compose, curry, isFunction } from '../utils';
  import validators from '../validators';
  
  function create(initial, handler = {}) {
    validators.initial(initial);
    validators.handler(handler);
  
    const state = { current: initial };
  
    const didUpdate = curry(didStateUpdate)(state, handler);
    const update = curry(updateState)(state);
    const validate = curry(validators.changes)(initial);
    const getChanges = curry(extractChanges)(state);
  
    function getState(selector = state => state) {
      validators.selector(selector);
      return selector(state.current);
    }
  
    function setState(causedChanges) {
      compose(
        didUpdate,
        update,
        validate,
        getChanges,
      )(causedChanges);
    }
  
    return [getState, setState];
  }
  
  function extractChanges(state, causedChanges) {
    return isFunction(causedChanges)
      ? causedChanges(state.current)
      : causedChanges;
  }
  
  function updateState(state, changes) {
    state.current = { ...state.current, ...changes };
  
    return changes;
  }
  
  function didStateUpdate(state, handler, changes) {
    isFunction(handler)
      ? handler(state.current)
      : Object.keys(changes)
          .forEach(field => handler[field]?.(state.current[field]));
  
    return changes;
  }
  
  export { create };`,
  lang: 'javascript',
}
