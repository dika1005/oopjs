import { API, sampleErrorData, sampleSuccessData } from './support.mjs';
function processData(data) {
	return Promise.all(
    data.map(({delay, simulateError}) => 
            API.fetch(delay, simulateError)
            )
    );
}

/*
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
