import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'timeline',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const Timeline = require('./containers/TimelineContainer').default
            const reducer = require('./modules/timeline').default

            /*  Add the reducer to the store on key 'timeline'  */
            injectReducer(store, { key: 'timeline', reducer })

            /*  Return getComponent   */
            cb(null, Timeline)

            /* Webpack named bundle   */
        }, 'timeline')
    }
})
