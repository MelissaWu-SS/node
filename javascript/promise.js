function delay(ms) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve('done')}, ms);
    });

    return promise;
}
  
delay(3000).then(() => console.log('runs after 3 seconds'));

const loadScript = (src, successCallback, failCallback) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => successCallback();
    script.onerror = () => failCallback();
    document.head.append(script);
};

loadScript('path/to/script', () => {
    console.log('script loaded');
}, () => {
    console.log('script not loaded');
});

const loadScriptPromise = new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve('Done');
    script.onerror = () => reject(new Error('Failed'));
    document.head.append(script);
});

loadScriptPromise.then((result) => {
    console.log('script loaded');
}, (error) => {
    console.log('script not loaded');
});
