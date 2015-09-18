import {isFSA} from 'flux-standard-action';

const isPromise = (val) => {
      return val && typeof val.then === 'function';
}

// middleware
export const promiseMiddleware = () => {
    return next => action => {
        if(isFSA(action)) {
            return next(action);
        }
        const {types, payload, ...rest} = action;
        if (!types) {
            return next(action);
        }
        if (!payload) {
            return next(action);
        }
        next({...rest, type: types[0]});

        if (isPromise(payload)) {
            return payload.then(
                result =>  next({type: types[1], payload: result.json, ...rest}),
                error => next({type: types[2], payload:error.json, error: true, ...rest})
            );
        }
        return next(action);
    }
}
