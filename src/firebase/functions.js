import { collectionGroup, collection, query, orderBy, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "./config";

export const fetchFire = {

    async getPostById(collectionName, belgeId) {
        const belgeRef = doc(collection(firestore, collectionName), belgeId);
        const belgeSnapshot = await getDoc(belgeRef);

        if (belgeSnapshot.exists()) {
            return { id: belgeSnapshot.id, ...belgeSnapshot.data() };
        } else {
            throw new Error("Belge bulunamadı.");
        }
    },

    async getPostsByCreatedAt(collectionName) {
        const belgeQuery = query(collection(firestore, collectionName), orderBy('created_at', 'desc'));
        const belgeSnapshot = await getDocs(belgeQuery);
        const belgeler = [];

        // Alt koleksiyon adını burada belirtin
        const altKoleksiyonAdi = 'Types';

        // Tüm alt koleksiyonlardaki belgeleri almak için collectionGroup yöntemini kullanın
        const altKoleksiyonQuery = collectionGroup(firestore, altKoleksiyonAdi);
        const altKoleksiyonSnapshot = await getDocs(altKoleksiyonQuery);



        belgeSnapshot.forEach((belgeDoc) => {
            altKoleksiyonSnapshot.forEach((altBelgeDoc) => {
                if (belgeDoc.data().type.id === altBelgeDoc.ref.id) {
                    belgeler.push({ id: belgeDoc.id, ...belgeDoc.data(), ...altBelgeDoc.data() });
                }
            });
        });
        return belgeler;
    },

    async getPosts(collectionName) {
        const belgeQuery = query(collection(firestore, collectionName));
        const belgeSnapshot = await getDocs(belgeQuery);
        const belgeler = [];

        belgeSnapshot.forEach((belgeDoc) => {
            belgeler.push({ id: belgeDoc.id, ...belgeDoc.data() });
        });
        return belgeler;
    }

}