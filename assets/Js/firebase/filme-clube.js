import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'


export async function subscribeToFilmeClube(Subscription) {
    const db = getFirestore(app)
    const filmeClubeCollection = collection(db, 'filme-clube')
    const doocRef = await addDoc(filmeClubeCollection, Subscription)
    return doocRef.id
}