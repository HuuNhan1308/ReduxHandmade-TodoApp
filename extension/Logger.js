export default function logger(reducer) {
    return (state, action, args) => {
        console.group(action || 'Initial');
        console.log('Previous state:', state);
        console.log('Arguments:', args);
        const nextState = reducer(state, action, args);
        console.log('Next state:', nextState);
        console.groupEnd();
        
        return nextState;
    }
}